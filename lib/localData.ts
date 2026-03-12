// ============================================================
// FALLBACK LOCAL: Datos de prueba cuando Supabase no está disponible
// Se usan automáticamente si no hay conexión a internet o si
// las variables de entorno de Supabase no están configuradas.
// ============================================================

import type { Producer } from '../data/producers';

export const localProducers: Producer[] = [
    {
        id: 1,
        name: 'Huertas San Miguel',
        location: 'Uruapan, Michoacán',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDG4jAvMtSWyv0sypncNkJu-_PO-2KsjooKCAkJlQUZJI2zIecGUCmhvw_LjjZTpOD4EvIrzEYshjlF3D2ooykBaXzhLhIgbZVZmr-G5nugm0YbeqDG0EBjr-MqzH5a8wGqmmGflouyPoCk1txvSiztzLyLsTZgEyxyiESR7HVKgcrylTI1ZtQ1PmJ_hO_aSbDrHyVxLnhX9mtFcxi41O2ToMl8Z1b5y-7ZyxftAcIagskyvoURquh2L1gkKFPtNkJe_zvXotvNZT73',
        status_text: 'Disponible',
        status_color: 'text-green-700 bg-white/95 border-green-100',
        indicator_color: 'bg-green-500',
        product: 'Aguacate Hass',
        category: 'aguacate',
        tags: ['SENASICA', 'Orgánico'],
        years: '5 Años en PAM',
        rating: 4.9,
        availability_text: 'Alta',
        availability_color: 'text-green-600',
        availability_value: 'immediate',
        certifications: ['SENASICA', 'GlobalG.A.P', 'Orgánico'],
    },
    {
        id: 2,
        name: 'Agroindustrias del Valle',
        location: 'Zamora, Michoacán',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQkO6iZzz6_MopJCHT_Xt6kh9Clxd5kM6k9BHwUEOy-Oj7Rn_b3DElFrZePq5cuMemGzEf1b_kJZQ_GFvmkyXZpX9aHNzOx-mo1thmU4v75HbH01TdNU5VakS--I7g5CX1nqzRXiSTJbtu4hwgcojAcfFDT6cm3hHh4MPd71pCvinLvd3bSxwyKgFmjSs2_jTiCwdGN11sVU9Fcsr3nKctoZ8GWzjoioGMyNS_9WW7Y0uY3PP8C-Q1mkbytxpDDXnYYU2U5AUMYgxo',
        status_text: 'Cosecha en Curso',
        status_color: 'text-primary bg-white/95 border-gray-100',
        indicator_color: 'bg-primary',
        product: 'Fresa & Berries',
        category: 'berries',
        tags: ['SENASICA'],
        years: 'Nuevo',
        rating: 5.0,
        availability_text: 'Media',
        availability_color: 'text-orange-500',
        availability_value: 'immediate',
        certifications: ['Orgánico', 'SENASICA'],
    },
    {
        id: 3,
        name: 'Frutos del Sol',
        location: 'Apatzingán, Michoacán',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwVylPY4xaFndz9uI9-Ls0KBi3Zq6uRTYnUepvNtouV0AmqxuvvzvWRe6nlpr6_0gZiRa1_ivLXbrjzO5WrEmvuDfvocpRj8lQw9fFUSh2MpFsDKuoOtz-6stUMoJx6ivH-6NpDiGj9fxTWS3hEA5Teq8kUyZ_F4i99Nud6GWx7aFUzAX-e9hj10MKSLHuN6d4yTaWq6Z1eY3GufyCUZwFaEkZHCXyMSArIVlKO5K8ozV5Sp_imXXzs0AobFRoRt3tPqrOfmREyhNe',
        status_text: 'Disponible',
        status_color: 'text-green-700 bg-white/95 border-green-100',
        indicator_color: 'bg-green-500',
        product: 'Limón Persa',
        category: 'limon',
        tags: ['Exportación'],
        years: '3 Años',
        rating: 4.7,
        availability_text: 'Alta',
        availability_color: 'text-green-600',
        availability_value: 'year_round',
        certifications: ['Exportación'],
    },
];

/** Crops de demostración para modo offline */
export interface LocalCrop {
    id: number;
    name: string;
    location: string;
    hectares: number;
    tonnage: number;
    date: string;
    status: string;
    image: string;
    progress: number;
    alert: string;
}

const LOCAL_CROPS_KEY = 'pam_local_crops';
let nextId = Date.now();

export const localCropsDB = {
    getAll: (): LocalCrop[] => {
        try {
            const raw = localStorage.getItem(LOCAL_CROPS_KEY);
            return raw ? JSON.parse(raw) : [];
        } catch {
            return [];
        }
    },
    save: (crops: LocalCrop[]) => {
        localStorage.setItem(LOCAL_CROPS_KEY, JSON.stringify(crops));
    },
    insert: (crop: Omit<LocalCrop, 'id'>): LocalCrop => {
        const crops = localCropsDB.getAll();
        const newCrop: LocalCrop = { ...crop, id: ++nextId };
        crops.push(newCrop);
        localCropsDB.save(crops);
        return newCrop;
    },
    update: (id: number, updates: Partial<LocalCrop>) => {
        const crops = localCropsDB.getAll().map(c =>
            c.id === id ? { ...c, ...updates } : c
        );
        localCropsDB.save(crops);
    },
    delete: (id: number) => {
        const crops = localCropsDB.getAll().filter(c => c.id !== id);
        localCropsDB.save(crops);
    },
};
