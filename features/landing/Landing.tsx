import React, { useState, useMemo, useRef } from 'react';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';

// Datos simulados para Landing (puede ser un subconjunto o los mismos)
const producersData = [
  {
    id: 1,
    name: "Huertas San Miguel",
    location: "Uruapan, Michoacán",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDG4jAvMtSWyv0sypncNkJu-_PO-2KsjooKCAkJlQUZJI2zIecGUCmhvw_LjjZTpOD4EvIrzEYshjlF3D2ooykBaXzhLhIgbZVZmr-G5nugm0YbeqDG0EBjr-MqzH5a8wGqmmGflouyPoCk1txvSiztzLyLsTZgEyxyiESR7HVKgcrylTI1ZtQ1PmJ_hO_aSbDrHyVxLnhX9mtFcxi41O2ToMl8Z1b5y-7ZyxftAcIagskyvoURquh2L1gkKFPtNkJe_zvXotvNZT73",
    statusText: "Disponible",
    statusColor: "text-green-700 bg-white/95 border-green-100",
    indicatorColor: "bg-green-500",
    product: "Aguacate Hass",
    category: "Frutas",
    tags: ["SENASICA", "Orgánico"]
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
    category: "Frutas",
    tags: ["SENASICA"]
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
    category: "Frutas",
    tags: ["Exportación"]
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
    category: "Frutas",
    tags: ["SENASICA"]
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
    category: "Verduras", // Granos generally, kept simple for chips
    tags: ["Mayoreo"]
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
    category: "Frutas",
    tags: ["Exportación", "Orgánico"]
  }
];

// Función de utilidad para normalizar texto (quitar acentos y minúsculas)
const normalizeText = (text: string) => {
  return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

const Landing: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('Todos');
  const resultsRef = useRef<HTMLElement>(null);

  const filteredProducers = useMemo(() => {
    return producersData.filter(producer => {
      // 1. Search Term (Normalized for better UX)
      const normalizedSearch = normalizeText(searchTerm);
      const matchesSearch = 
        searchTerm === '' || 
        normalizeText(producer.name).includes(normalizedSearch) || 
        normalizeText(producer.product).includes(normalizedSearch) ||
        normalizeText(producer.location).includes(normalizedSearch);

      // 2. Chip Filter
      let matchesFilter = true;
      if (activeFilter !== 'Todos') {
        if (activeFilter === 'Frutas' || activeFilter === 'Verduras') {
          matchesFilter = producer.category === activeFilter;
        } else if (activeFilter === 'Orgánico') {
          matchesFilter = producer.tags.includes('Orgánico');
        } else if (activeFilter === 'Certificado SENASICA') {
          matchesFilter = producer.tags.includes('SENASICA');
        }
      }

      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, activeFilter]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (resultsRef.current) {
        resultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-cover bg-center shadow-lg h-[450px]" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuAWbjy2kwPcgouKiuB8FAlRrfxShMWfhvKV2GyknV-yxx-VxNFQLDKsamYAVS9pXwVB6aZAsaQ_tBsk2evaCYz0tfPMcGY4mBUCjZ8hnhaDEk_aSWw1s-pkRu7BNL2pD8V1iKy5kQh95LiFFrClJwdDsA_Uz-ZoBxpcimD7mSLiPRjQ-qjkKEZ9ms1hRHPHBnJNhe3BttpuslzSjOmU-2NC08VUB3Rm4Q7yvPL5MLwVHjzBA9POHqaN-5dBVB_RoTrcrephs3XMyO_w')" }}>
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
              <h1 className="mb-4 text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl tracking-tight max-w-3xl drop-shadow-md">
                Encuentra productores verificados
              </h1>
              <p className="mb-8 text-base font-medium text-gray-100 sm:text-lg md:text-xl drop-shadow-md">
                Directorio seguro de Michoacán. Sin intermediarios, trato directo entre partes.
              </p>
              <div className="w-full max-w-2xl transform transition-all hover:scale-[1.01]">
                <form className="relative flex h-14 items-center overflow-hidden rounded-xl bg-white shadow-xl ring-1 ring-black/5" onSubmit={handleSearchSubmit}>
                  <div className="flex h-full w-12 items-center justify-center text-gray-400">
                    <span className="material-symbols-outlined">search</span>
                  </div>
                  <input 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="h-full flex-1 border-0 bg-transparent px-2 text-base text-gray-900 placeholder:text-gray-400 focus:ring-0" 
                    placeholder="¿Qué buscas hoy? (Ej. Aguacate, Berries, Limón...)" 
                    type="text"
                  />
                  {searchTerm && (
                     <button type="button" onClick={() => setSearchTerm('')} className="text-gray-400 hover:text-gray-600 mr-2">
                        <span className="material-symbols-outlined">close</span>
                     </button>
                  )}
                  <button type="submit" className="m-1.5 h-11 rounded-lg bg-primary px-6 text-sm font-bold text-white hover:bg-primary-dark transition-colors">
                    Buscar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Chips */}
      <section className="w-full border-b border-[#e3e3de] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
            {['Todos', 'Frutas', 'Verduras', 'Orgánico', 'Certificado SENASICA'].map((filter) => (
                <button 
                    key={filter}
                    onClick={() => {
                        setActiveFilter(filter);
                        if (resultsRef.current) {
                            resultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                    }}
                    className={`flex shrink-0 items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                        activeFilter === filter 
                        ? 'bg-[#161613] text-white shadow-sm' 
                        : 'bg-white border border-[#e3e3de] text-[#161613] hover:bg-gray-50 hover:text-primary'
                    }`}
                >
                    {filter === 'Frutas' && <span className="material-symbols-outlined text-sm">nutrition</span>}
                    {filter === 'Verduras' && <span className="material-symbols-outlined text-sm">grass</span>}
                    {filter === 'Orgánico' && <span className="material-symbols-outlined text-sm">eco</span>}
                    {filter === 'Certificado SENASICA' && <span className="material-symbols-outlined text-sm">verified</span>}
                    {filter}
                </button>
            ))}
          </div>
        </div>
      </section>

      {/* Producer Grid */}
      <main ref={resultsRef} className="flex-1 w-full bg-background-light scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#161613] sm:text-3xl">Productores Destacados</h2>
              <p className="mt-2 text-sm text-gray-500">
                {filteredProducers.length > 0 
                  ? `Mostrando ${filteredProducers.length} resultados para tu búsqueda.` 
                  : 'No se encontraron resultados para tu búsqueda.'}
              </p>
            </div>
             <div className="hidden sm:block">
                <select className="rounded-lg border-gray-300 bg-white py-2 pl-3 pr-10 text-sm focus:border-primary focus:ring-primary">
                    <option>Relevancia</option>
                    <option>Recién Agregados</option>
                    <option>Mayor Calificación</option>
                </select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
             {filteredProducers.map(producer => (
                 <Link key={producer.id} to={`/producer/${producer.id}`} className="group relative flex flex-col h-full overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/50">
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-200">
                        <img src={producer.image} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" alt={producer.product} />
                        <div className="absolute right-3 top-3">
                        <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold backdrop-blur-md shadow-sm border ${producer.statusColor}`}>
                            <span className={`relative flex h-2 w-2`}>
                                {producer.indicatorColor === 'bg-green-500' && (
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                )}
                                <span className={`relative inline-flex rounded-full h-2 w-2 ${producer.indicatorColor}`}></span>
                            </span>
                            {producer.statusText}
                        </span>
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                        <div className="flex items-start justify-between mb-4">
                        <div>
                            <h3 className="text-xl font-bold text-[#161613] group-hover:text-primary transition-colors leading-tight">{producer.name}</h3>
                            <div className="mt-1 flex items-center text-sm font-medium text-gray-500">
                            <span className="material-symbols-outlined mr-1 text-[18px]">location_on</span>
                            {producer.location}
                            </div>
                        </div>
                        <button className="relative z-20 rounded-full bg-[#f3f3f1] p-2 text-gray-400 hover:bg-red-50 hover:text-red-500 transition-colors">
                            <span className="material-symbols-outlined text-[22px]">favorite</span>
                        </button>
                        </div>
                        <div className="mb-5">
                        <span className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Producto Principal</span>
                        <span className="block text-2xl font-black text-[#161613]">{producer.product}</span>
                        </div>
                        <div className="flex flex-wrap gap-2.5 mb-6">
                            {producer.tags.map(tag => (
                                <span key={tag} className={`inline-flex items-center rounded-lg px-3 py-1.5 text-sm font-bold ${
                                    tag === 'SENASICA' ? 'bg-amber-100 border border-amber-300 text-amber-900' :
                                    tag === 'Orgánico' ? 'bg-green-100 border border-green-300 text-green-900' :
                                    tag === 'Exportación' ? 'bg-blue-100 border border-blue-300 text-blue-900' :
                                    'bg-gray-100 border border-gray-300 text-gray-800'
                                }`}>
                                    {tag === 'SENASICA' && <span className="material-symbols-outlined mr-1.5 text-[18px]">verified_user</span>}
                                    {tag === 'Orgánico' && <span className="material-symbols-outlined mr-1.5 text-[18px]">eco</span>}
                                    {tag === 'Exportación' && <span className="material-symbols-outlined mr-1.5 text-[18px]">public</span>}
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="mt-auto w-full rounded-xl bg-primary py-3.5 px-4 text-center text-base font-bold text-white shadow-md transition-colors group-hover:bg-primary-dark flex items-center justify-center gap-2">
                            Ver Perfil <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                        </div>
                    </div>
                 </Link>
             ))}
          </div>
          
          <div className="mt-12 flex items-center justify-center border-t border-[#e3e3de] pt-8">
            <nav className="flex items-center gap-1">
                <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#e3e3de] text-gray-500 hover:bg-gray-50 disabled:opacity-50">
                    <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white font-medium shadow-sm">1</button>
                <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-transparent text-[#161613] hover:bg-gray-100">2</button>
                <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-transparent text-[#161613] hover:bg-gray-100">3</button>
                <span className="px-2 text-gray-400">...</span>
                <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#e3e3de] text-gray-500 hover:bg-gray-50">
                    <span className="material-symbols-outlined">chevron_right</span>
                </button>
            </nav>
          </div>
        </div>
      </main>

       {/* Footer */}
      <footer className="border-t border-[#e3e3de] bg-white mt-12">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <div className="flex items-center gap-2">
                    <div className="flex size-6 items-center justify-center rounded bg-primary text-white">
                        <span className="material-symbols-outlined text-sm">agriculture</span>
                    </div>
                    <span className="text-sm font-semibold text-[#161613]">PAM</span>
                    <span className="text-xs text-gray-500">© 2024 Productores Agroalimentarios de Michoacán</span>
                </div>
                 <div className="flex gap-6">
                    <Link className="text-sm text-gray-500 hover:text-primary" to="/support">Soporte</Link>
                    <a className="text-sm text-gray-500 hover:text-primary" href="#">Privacidad</a>
                    <a className="text-sm text-gray-500 hover:text-primary" href="#">Términos</a>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;