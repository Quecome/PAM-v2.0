// ============================================================
// TIPOS: Productores (v2.1 — datos reales en Supabase)
// Los datos se cargan desde la tabla `producers` en Supabase.
// Este archivo solo conserva la interfaz TypeScript como tipo compartido.
// ============================================================

export interface Producer {
    id: number;
    name: string;
    location: string;
    image: string;
    status_text: string;
    status_color: string;
    indicator_color: string;
    product: string;
    category: string;
    tags: string[];
    years: string;
    rating: number;
    availability_text: string;
    availability_color: string;
    availability_value: string;
    certifications: string[];
    created_at?: string;
}

// Normalización de texto (elimina acentos, minúsculas)
export const normalizeText = (text: string) =>
    text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
