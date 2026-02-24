import React, { createContext, useContext, useState, useEffect } from 'react';

export type UserRole = 'producer' | 'buyer' | null;

interface AuthState {
    isLoggedIn: boolean;
    userRole: UserRole;
    userName: string;
    userPhone: string;
}

interface AuthContextType extends AuthState {
    login: (role: UserRole, name: string, phone: string) => void;
    logout: () => void;
}

const AUTH_STORAGE_KEY = 'pam_auth';

const defaultState: AuthState = {
    isLoggedIn: false,
    userRole: null,
    userName: '',
    userPhone: '',
};

const AuthContext = createContext<AuthContextType>({
    ...defaultState,
    login: () => { },
    logout: () => { },
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [auth, setAuth] = useState<AuthState>(() => {
        try {
            const stored = localStorage.getItem(AUTH_STORAGE_KEY);
            return stored ? JSON.parse(stored) : defaultState;
        } catch {
            return defaultState;
        }
    });

    useEffect(() => {
        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(auth));
    }, [auth]);

    const login = (role: UserRole, name: string, phone: string) => {
        setAuth({ isLoggedIn: true, userRole: role, userName: name, userPhone: phone });
    };

    const logout = () => {
        setAuth(defaultState);
        localStorage.removeItem(AUTH_STORAGE_KEY);
    };

    return (
        <AuthContext.Provider value={{ ...auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
