import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase, isOfflineMode } from '../lib/supabase';
import type { Session } from '@supabase/supabase-js';

export type UserRole = 'producer' | 'buyer' | null;

interface AuthState {
    isLoggedIn: boolean;
    userRole: UserRole;
    userName: string;
    userPhone: string;
    session: Session | null;
    offlineMode: boolean;
}

interface AuthContextType extends AuthState {
    /** Paso 1: envía el OTP por SMS. Retorna teléfono E.164 y el hash de verificación */
    sendOtp: (phone: string) => Promise<{ phone: string; hash: string }>;
    /** Paso 2 (login): verifica el OTP y autentica usando login "fantasma" por seguridad */
    verifyLoginOtp: (phone: string, token: string, hash: string) => Promise<void>;
    /** Paso 2 (registro): verifica el OTP y crea el perfil asociado al número */
    verifyRegisterOtp: (phone: string, token: string, hash: string, role: UserRole, name: string, location?: string) => Promise<void>;
    logout: () => Promise<void>;
}

const defaultState: AuthState = {
    isLoggedIn: false,
    userRole: null,
    userName: '',
    userPhone: '',
    session: null,
    offlineMode: isOfflineMode,
};

const AuthContext = createContext<AuthContextType>({
    ...defaultState,
    sendOtp: async () => ({ phone: '', hash: '' }),
    verifyLoginOtp: async () => { },
    verifyRegisterOtp: async () => { },
    logout: async () => { },
});

const formatPhone = (phone: string): string => {
    const digits = phone.replace(/\D/g, '');
    if (digits.startsWith('52') && digits.length === 12) return `+${digits}`;
    if (digits.startsWith('1') && digits.length === 11) return `+${digits}`;
    if (digits.length === 10) return `+52${digits}`;
    return `+${digits}`;
};

// Autenticación determinista oculta para no perder crops por cada login (Auth Anónimo cambia de UID)
const getSyntheticEmail = (phone: string) => `${phone.replace('+', '')}@pam-mich.com`;
const getSyntheticPassword = (phone: string) => `PAM2026!${phone.replace('+', '')}`;

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [auth, setAuth] = useState<AuthState>(defaultState);

    useEffect(() => {
        if (isOfflineMode || !supabase) return;

        supabase.auth.getSession().then(({ data: { session } }) => {
            if (session) loadProfile(session);
        });

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            if (session) {
                loadProfile(session);
            } else {
                setAuth(defaultState);
            }
        });

        return () => subscription.unsubscribe();
    }, []);

    const loadProfile = async (session: Session) => {
        const { data: profile } = await supabase!
            .from('profiles')
            .select('*')
            .eq('id', session.user.id)
            .single();

        setAuth({
            isLoggedIn: true,
            userRole: (profile?.role as UserRole) || 'producer',
            userName: profile?.full_name || '',
            userPhone: profile?.phone || session.user.phone || '',
            session,
            offlineMode: false,
        });
    };

    // ── 1. Enviar SMS usando Netlify Function proxy ──
    const sendOtp = async (phone: string): Promise<{ phone: string; hash: string }> => {
        const formattedPhone = formatPhone(phone);
        if (isOfflineMode || !supabase) {
            return { phone: formattedPhone, hash: 'offline-mock-hash' };
        }

        const res = await fetch('/.netlify/functions/twilio-otp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'send', phone: formattedPhone })
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Error enviando el SMS por Twilio. Verifica tu conexión.');
        
        return { phone: formattedPhone, hash: data.hash };
    };

    // ── Helpers para login oculto ──
    const handleSyntheticLogin = async (phone: string) => {
        const email = getSyntheticEmail(phone);
        const password = getSyntheticPassword(phone);

        // Intenta iniciar sesión
        const { data, error } = await supabase!.auth.signInWithPassword({ email, password });
        
        if (error) {
            // Si el usuario no existe, se registra e inicia sesión automáticamente (porque Confirm Email está OFF)
            const { error: signUpError } = await supabase!.auth.signUp({ email, password });
            if (signUpError) throw new Error("Error interno al inicializar el usuario: " + signUpError.message);
        }
        
        // Esperemos a que onAuthStateChange haga el loadProfile
        return;
    };

    // ── 2. Verificar SMS (Login) ──
    const verifyLoginOtp = async (phone: string, token: string, hash: string): Promise<void> => {
        if (isOfflineMode || !supabase) {
            setAuth({
                isLoggedIn: true,
                userRole: 'producer',
                userName: 'Usuario Offline Demo',
                userPhone: phone,
                session: null,
                offlineMode: true,
            });
            return;
        }

        // Verificar el hash con netlify function
        const res = await fetch('/.netlify/functions/twilio-otp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'verify', phone, code: token, hash })
        });

        if (!res.ok) {
            const data = await res.json();
            throw new Error(data.error || 'Código incorrecto o expirado.');
        }

        // Si el código SMS es correcto, entramos!
        await handleSyntheticLogin(phone);
    };

    // ── 2. Verificar SMS (Registro) ──
    const verifyRegisterOtp = async (
        phone: string,
        token: string,
        hash: string,
        role: UserRole,
        name: string,
        location?: string
    ): Promise<void> => {
        if (isOfflineMode || !supabase) {
            setAuth({
                isLoggedIn: true,
                userRole: role,
                userName: name,
                userPhone: phone,
                session: null,
                offlineMode: true,
            });
            return;
        }

        const res = await fetch('/.netlify/functions/twilio-otp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'verify', phone, code: token, hash })
        });

        if (!res.ok) {
            const data = await res.json();
            throw new Error(data.error || 'Código incorrecto o expirado.');
        }

        await handleSyntheticLogin(phone);
        const { data: { session } } = await supabase!.auth.getSession();
        
        if (session) {
            const { error: profileError } = await supabase!.from('profiles').upsert({
                id: session.user.id,
                phone: phone.replace(/\D/g, ''),
                full_name: name,
                role: role ?? 'producer',
                location: location ?? null,
            });
            if (profileError) throw new Error(profileError.message);
            await loadProfile(session);
        }
    };

    const logout = async () => {
        if (!isOfflineMode && supabase) await supabase.auth.signOut();
        setAuth(defaultState);
    };

    return (
        <AuthContext.Provider value={{
            ...auth, sendOtp, verifyLoginOtp, verifyRegisterOtp, logout,
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
export default AuthContext;
