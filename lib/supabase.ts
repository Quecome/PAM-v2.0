import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

// Modo offline: se activa si no existen las variables de entorno
export const isOfflineMode = !supabaseUrl || !supabaseAnonKey;

// Cliente real de Supabase (solo si hay credenciales)
export const supabase = isOfflineMode
    ? null
    : createClient(supabaseUrl!, supabaseAnonKey!, {
        auth: {
            persistSession: true,
            autoRefreshToken: true,
        },
    });

/**
 * Wrapper seguro: ejecuta una operación de Supabase y retorna
 * { data, error } igual que el cliente real, pero sin crashear.
 * En modo offline siempre retorna { data: null, error: null }.
 */
export async function safeQuery<T>(
    fn: () => Promise<{ data: T | null; error: unknown }>
): Promise<{ data: T | null; error: unknown }> {
    if (isOfflineMode || !supabase) {
        return { data: null, error: null };
    }
    try {
        return await fn();
    } catch {
        return { data: null, error: { message: 'Sin conexión a Supabase' } };
    }
}

export default supabase;
