// ============================================================
// FUENTE ÚNICA DE DATOS: Productores
// Cuando se integre un backend, reemplazar este archivo por
// llamadas a la API (ej. fetch('/api/producers'))
// ============================================================

export interface Producer {
    id: number;
    name: string;
    location: string;
    image: string;
    statusText: string;
    statusColor: string;
    indicatorColor: string;
    product: string;
    category: string;
    tags: string[];
    years: string;
    rating: number;
    availabilityText: string;
    availabilityColor: string;
    availabilityValue: string;
    certifications: string[];
}

export const producersData: Producer[] = [
    {
        id: 1,
        name: "Huertas San Miguel",
        location: "Uruapan, Michoacán",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDG4jAvMtSWyv0sypncNkJu-_PO-2KsjooKCAkJlQUZJI2zIecGUCmhvw_LjjZTpOD4EvIrzEYshjlF3D2ooykBaXzhLhIgbZVZmr-G5nugm0YbeqDG0EBjr-MqzH5a8wGqmmGflouyPoCk1txvSiztzLyLsTZgEyxyiESR7HVKgcrylTI1ZtQ1PmJ_hO_aSbDrHyVxLnhX9mtFcxi41O2ToMl8Z1b5y-7ZyxftAcIagskyvoURquh2L1gkKFPtNkJe_zvXotvNZT73",
        statusText: "Disponible",
        statusColor: "text-green-700 bg-white/95 border-green-100",
        indicatorColor: "bg-green-500",
        product: "Aguacate Hass",
        category: "aguacate",
        tags: ["SENASICA", "Orgánico"],
        years: "5 Años en PAM",
        rating: 4.9,
        availabilityText: "Alta",
        availabilityColor: "text-green-600",
        availabilityValue: "immediate",
        certifications: ["SENASICA", "GlobalG.A.P", "Orgánico"],
    },
    {
        id: 2,
        name: "Agroindustrias del Valle",
        location: "Zamora, Michoacán",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQkO6iZzz6_MopJCHT_Xt6kh9Clxd5kM6k9BHwUEOy-Oj7Rn_b3DElFrZePq5cuMemGzEf1b_kJZQ_GFvmkyXZpX9aHNzOx-mo1thmU4v75HbH01TdNU5VakS--I7g5CX1nqzRXiSTJbtu4hwgcojAcfFDT6cm3hHh4MPd71pCvinLvd3bSxwyKgFmjSs2_jTiCwdGN11sVU9Fcsr3nKctoZ8GWzjoioGMyNS_9WW7Y0uY3PP8C-Q1mkbytxpDDXnYYU2U5AUMYgxo",
        statusText: "Cosecha en Curso",
        statusColor: "text-primary bg-white/95 border-gray-100",
        indicatorColor: "bg-primary",
        product: "Fresa & Berries",
        category: "berries",
        tags: ["SENASICA"],
        years: "Nuevo",
        rating: 5.0,
        availabilityText: "Media",
        availabilityColor: "text-orange-500",
        availabilityValue: "immediate",
        certifications: ["Orgánico", "SENASICA"],
    },
    {
        id: 3,
        name: "Frutos del Sol",
        location: "Apatzingán, Michoacán",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwVylPY4xaFndz9uI9-Ls0KBi3Zq6uRTYnUepvNtouV0AmqxuvvzvWRe6nlpr6_0gZiRa1_ivLXbrjzO5WrEmvuDfvocpRj8lQw9fFUSh2MpFsDKuoOtz-6stUMoJx6ivH-6NpDiGj9fxTWS3hEA5Teq8kUyZ_F4i99Nud6GWx7aFUzAX-e9hj10MKSLHuN6d4yTaWq6Z1eY3GufyCUZwFaEkZHCXyMSArIVlKO5K8ozV5Sp_imXXzs0AobFRoRt3tPqrOfmREyhNe",
        statusText: "Disponible",
        statusColor: "text-green-700 bg-white/95 border-green-100",
        indicatorColor: "bg-green-500",
        product: "Limón Persa",
        category: "limon",
        tags: ["Exportación"],
        years: "3 Años",
        rating: 4.7,
        availabilityText: "Alta",
        availabilityColor: "text-green-600",
        availabilityValue: "year_round",
        certifications: ["Exportación"],
    },
    {
        id: 4,
        name: "Exóticos de Tierra Caliente",
        location: "Lázaro Cárdenas, Mich.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUEsW2YeM-Zb_VGFXf7AcUCxsG4TVSn9fp-hVNA2KfdGq3cKPoNi4hjW3PuOQxUsZaPm6aDCxLVcO6MSJWnmayIOhcJ4GFxzG8NTc0xzV4COfx0IVK3KJ2IDy13fnQ7YTOJRC-Ly4D4UbZKF08KM5Exw02Ac_tngZoEICWYWPWtahhQwwi5z7j6itoVYhHaFAP8vmjifFtDsigMYyt53XtYyFNhj-182QUyAyDnK4_L7FxrkpnS4YA4kthLTYLBmn7feuEPGyK8ZLt",
        statusText: "Agotado",
        statusColor: "text-gray-500 bg-white/95 border-gray-200",
        indicatorColor: "bg-gray-400",
        product: "Mango Ataulfo",
        category: "mango",
        tags: ["SENASICA"],
        years: "2 Años",
        rating: 4.8,
        availabilityText: "Nula",
        availabilityColor: "text-red-500",
        availabilityValue: "none",
        certifications: ["SENASICA"],
    },
    {
        id: 5,
        name: "Granos del Bajío",
        location: "La Piedad, Michoacán",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQTwhobZT1GC17Gz3Nipa3PU0cRkmMgLUtF0kCzbmvlJy7avle6_O3PE1-reWWjRqk_UObaAIR5oFQNlMzEjm3RHrs81lEmTrebvV5wy5bkRCRsyO7MxNKudyjvVPzTI4HmaS4epbpQz2TjOUbx4a4Ogjy4oAhD6P7DwidUzp2Cx4e7JbKvVLnRDPqJyg3NBVtrU9xvDnP0VXqed_q8VXYVtV9toCUsk9qpTNIBm1_FfhzEoAOWW4sy75eztZATN9gsO46_m698Jp-",
        statusText: "Próxima Cosecha",
        statusColor: "text-primary bg-white/95 border-gray-100",
        indicatorColor: "bg-primary",
        product: "Maíz Blanco",
        category: "maiz",
        tags: ["Mayoreo"],
        years: "1 Año",
        rating: 4.5,
        availabilityText: "Próximamente",
        availabilityColor: "text-blue-600",
        availabilityValue: "upcoming",
        certifications: ["Mayoreo"],
    },
    {
        id: 6,
        name: "Berries Los Reyes",
        location: "Los Reyes, Michoacán",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJaCpbbyp1tK5uBf3oeqMhbU30367JH1tMK96qkncUQ0_1spvXcCz0ZNwp_3892Hta0nES7Xd-sf4T53V9NRrCjr8mkWETrfswNiSa7wLclodIh7sJUzEJVgEY5W9poZeBTiwqOYRcEUuzhmg8nPdI-iXU_RFWu4gwOUWp5pDuyBIXq52iOJQRyDjM-WFIfeuoqZgO-_39L_UxsSrXV3BfLtEytzhaBnOps6-rUTDVpU6L0DAkZXJcaZQTeRGGcoQfTzQR32o-UqMA",
        statusText: "Disponible",
        statusColor: "text-green-700 bg-white/95 border-green-100",
        indicatorColor: "bg-green-500",
        product: "Zarzamora",
        category: "berries",
        tags: ["Exportación", "Orgánico"],
        years: "4 Años",
        rating: 4.9,
        availabilityText: "Alta",
        availabilityColor: "text-green-600",
        availabilityValue: "immediate",
        certifications: ["Exportación", "Orgánico"],
    },
];

// Normalización de texto (elimina acentos, minúsculas)
export const normalizeText = (text: string) =>
    text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
