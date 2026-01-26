import React, { useState, useMemo } from 'react';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';

// Datos simulados de productores
const producersData = [
  {
    id: 1,
    name: "Huertas San Miguel",
    location: "Uruapan, Michoacán",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDG4jAvMtSWyv0sypncNkJu-_PO-2KsjooKCAkJlQUZJI2zIecGUCmhvw_LjjZTpOD4EvIrzEYshjlF3D2ooykBaXzhLhIgbZVZmr-G5nugm0YbeqDG0EBjr-MqzH5a8wGqmmGflouyPoCk1txvSiztzLyLsTZgEyxyiESR7HVKgcrylTI1ZtQ1PmJ_hO_aSbDrHyVxLnhX9mtFcxi41O2ToMl8Z1b5y-7ZyxftAcIagskyvoURquh2L1gkKFPtNkJe_zvXotvNZT73",
    years: "5 Años en PAM",
    rating: 4.9,
    product: "Aguacate Hass",
    category: "aguacate",
    availabilityText: "Alta",
    availabilityColor: "text-green-600",
    availabilityValue: "immediate",
    certifications: ["SENASICA", "GlobalG.A.P", "Orgánico"]
  },
  {
    id: 2,
    name: "Agroindustrias del Valle",
    location: "Zamora, Michoacán",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQkO6iZzz6_MopJCHT_Xt6kh9Clxd5kM6k9BHwUEOy-Oj7Rn_b3DElFrZePq5cuMemGzEf1b_kJZQ_GFvmkyXZpX9aHNzOx-mo1thmU4v75HbH01TdNU5VakS--I7g5CX1nqzRXiSTJbtu4hwgcojAcfFDT6cm3hHh4MPd71pCvinLvd3bSxwyKgFmjSs2_jTiCwdGN11sVU9Fcsr3nKctoZ8GWzjoioGMyNS_9WW7Y0uY3PP8C-Q1mkbytxpDDXnYYU2U5AUMYgxo",
    years: "Nuevo",
    rating: 5.0,
    product: "Fresa & Berries",
    category: "berries",
    availabilityText: "Media",
    availabilityColor: "text-orange-500",
    availabilityValue: "immediate",
    certifications: ["Orgánico", "SENASICA"]
  },
  {
    id: 3,
    name: "Frutos del Sol",
    location: "Apatzingán, Michoacán",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwVylPY4xaFndz9uI9-Ls0KBi3Zq6uRTYnUepvNtouV0AmqxuvvzvWRe6nlpr6_0gZiRa1_ivLXbrjzO5WrEmvuDfvocpRj8lQw9fFUSh2MpFsDKuoOtz-6stUMoJx6ivH-6NpDiGj9fxTWS3hEA5Teq8kUyZ_F4i99Nud6GWx7aFUzAX-e9hj10MKSLHuN6d4yTaWq6Z1eY3GufyCUZwFaEkZHCXyMSArIVlKO5K8ozV5Sp_imXXzs0AobFRoRt3tPqrOfmREyhNe",
    years: "3 Años",
    rating: 4.7,
    product: "Limón Persa",
    category: "limon",
    availabilityText: "Alta",
    availabilityColor: "text-green-600",
    availabilityValue: "year_round",
    certifications: ["Exportación"]
  },
  {
    id: 4,
    name: "Exóticos de Tierra Caliente",
    location: "Lázaro Cárdenas, Mich.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUEsW2YeM-Zb_VGFXf7AcUCxsG4TVSn9fp-hVNA2KfdGq3cKPoNi4hjW3PuOQxUsZaPm6aDCxLVcO6MSJWnmayIOhcJ4GFxzG8NTc0xzV4COfx0IVK3KJ2IDy13fnQ7YTOJRC-Ly4D4UbZKF08KM5Exw02Ac_tngZoEICWYWPWtahhQwwi5z7j6itoVYhHaFAP8vmjifFtDsigMYyt53XtYyFNhj-182QUyAyDnK4_L7FxrkpnS4YA4kthLTYLBmn7feuEPGyK8ZLt",
    years: "2 Años",
    rating: 4.8,
    product: "Mango Ataulfo",
    category: "mango",
    availabilityText: "Nula",
    availabilityColor: "text-red-500",
    availabilityValue: "none",
    certifications: ["SENASICA"]
  },
  {
    id: 5,
    name: "Granos del Bajío",
    location: "La Piedad, Michoacán",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQTwhobZT1GC17Gz3Nipa3PU0cRkmMgLUtF0kCzbmvlJy7avle6_O3PE1-reWWjRqk_UObaAIR5oFQNlMzEjm3RHrs81lEmTrebvV5wy5bkRCRsyO7MxNKudyjvVPzTI4HmaS4epbpQz2TjOUbx4a4Ogjy4oAhD6P7DwidUzp2Cx4e7JbKvVLnRDPqJyg3NBVtrU9xvDnP0VXqed_q8VXYVtV9toCUsk9qpTNIBm1_FfhzEoAOWW4sy75eztZATN9gsO46_m698Jp-",
    years: "1 Año",
    rating: 4.5,
    product: "Maíz Blanco",
    category: "maiz",
    availabilityText: "Próximamente",
    availabilityColor: "text-blue-600",
    availabilityValue: "upcoming",
    certifications: ["Mayoreo"]
  },
  {
    id: 6,
    name: "Berries Los Reyes",
    location: "Los Reyes, Michoacán",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJaCpbbyp1tK5uBf3oeqMhbU30367JH1tMK96qkncUQ0_1spvXcCz0ZNwp_3892Hta0nES7Xd-sf4T53V9NRrCjr8mkWETrfswNiSa7wLclodIh7sJUzEJVgEY5W9poZeBTiwqOYRcEUuzhmg8nPdI-iXU_RFWu4gwOUWp5pDuyBIXq52iOJQRyDjM-WFIfeuoqZgO-_39L_UxsSrXV3BfLtEytzhaBnOps6-rUTDVpU6L0DAkZXJcaZQTeRGGcoQfTzQR32o-UqMA",
    years: "4 Años",
    rating: 4.9,
    product: "Zarzamora",
    category: "berries",
    availabilityText: "Alta",
    availabilityColor: "text-green-600",
    availabilityValue: "immediate",
    certifications: ["Exportación", "Orgánico"]
  }
];

const Producers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCrop, setSelectedCrop] = useState('');
  const [selectedCert, setSelectedCert] = useState('');
  const [selectedAvail, setSelectedAvail] = useState('');

  // Lógica de filtrado
  const filteredProducers = useMemo(() => {
    return producersData.filter(producer => {
      // 1. Text Search (Nombre, Ubicación, Producto)
      const matchesSearch = 
        searchTerm === '' || 
        producer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        producer.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        producer.product.toLowerCase().includes(searchTerm.toLowerCase());

      // 2. Crop Filter
      const matchesCrop = selectedCrop === '' || producer.category === selectedCrop;

      // 3. Certification Filter (Checks if the producer has the selected certification)
      // Note: "certifications" in data is an array of strings. 
      // Mapping values from select to data strings:
      // senasica -> SENASICA, globalgap -> GlobalG.A.P, organico -> Orgánico, etc.
      let matchesCert = true;
      if (selectedCert) {
        if (selectedCert === 'senasica') matchesCert = producer.certifications.includes('SENASICA');
        else if (selectedCert === 'globalgap') matchesCert = producer.certifications.includes('GlobalG.A.P');
        else if (selectedCert === 'organico') matchesCert = producer.certifications.includes('Orgánico');
        else if (selectedCert === 'rainforest') matchesCert = producer.certifications.includes('Rainforest Alliance');
        else if (selectedCert === 'primus') matchesCert = producer.certifications.includes('PrimusGFS');
      }

      // 4. Availability Filter
      // immediate (Alta/Media/Inmediata), upcoming (Próximamente), year_round (Todo el año)
      let matchesAvail = true;
      if (selectedAvail) {
         if (selectedAvail === 'immediate') matchesAvail = producer.availabilityValue === 'immediate' || producer.availabilityValue === 'year_round'; 
         // Note: year_round implies immediate availability usually, but let's stick to strict if needed. 
         // Let's assume 'immediate' in dropdown means currently harvestable.
         else if (selectedAvail === 'upcoming') matchesAvail = producer.availabilityValue === 'upcoming';
         else if (selectedAvail === 'year_round') matchesAvail = producer.availabilityValue === 'year_round';
      }

      return matchesSearch && matchesCrop && matchesCert && matchesAvail;
    });
  }, [searchTerm, selectedCrop, selectedCert, selectedAvail]);

  const resetFilters = () => {
      setSearchTerm('');
      setSelectedCrop('');
      setSelectedCert('');
      setSelectedAvail('');
  };

  return (
    <div className="flex flex-col min-h-screen bg-background-light font-display">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-white border-b border-[#e3e3de]">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
                <span className="material-symbols-outlined text-primary text-2xl">groups</span>
            </div>
            <h1 className="text-4xl font-black text-[#161613] mb-4 tracking-tight">Directorio de Productores</h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">
                Conecta directamente con agricultores certificados de Michoacán. Sin intermediarios, trato justo.
            </p>
        </div>
      </div>

      {/* Advanced Search & Filter Bar */}
      <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-sm border-b border-[#e3e3de] shadow-sm">
         <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4">
                {/* Row 1: Search & Primary Filters */}
                <div className="flex flex-col xl:flex-row gap-4 items-center justify-between">
                    {/* Search Input */}
                    <div className="relative w-full xl:w-96 group shrink-0">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors">search</span>
                        </div>
                        <input 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="block w-full pl-10 pr-4 py-2.5 rounded-xl border-gray-300 bg-gray-50 focus:bg-white focus:border-primary focus:ring-primary sm:text-sm transition-all shadow-sm" 
                            placeholder="Buscar por nombre, municipio..." 
                            type="text"
                        />
                         {searchTerm && (
                            <button onClick={() => setSearchTerm('')} className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600">
                                <span className="material-symbols-outlined text-sm">close</span>
                            </button>
                        )}
                    </div>

                    {/* Filter Dropdowns */}
                    <div className="w-full overflow-x-auto pb-2 xl:pb-0 scrollbar-thin">
                        <div className="flex items-center gap-3">
                            <div className="relative shrink-0">
                                <span className="absolute left-3 top-2.5 material-symbols-outlined text-gray-500 text-[20px] pointer-events-none">nutrition</span>
                                <select 
                                    value={selectedCrop}
                                    onChange={(e) => setSelectedCrop(e.target.value)}
                                    className="pl-10 pr-8 py-2.5 rounded-xl border-gray-300 bg-white text-sm font-bold text-gray-700 focus:border-primary focus:ring-primary shadow-sm cursor-pointer appearance-none min-w-[180px]"
                                >
                                    <option value="">Todos los Cultivos</option>
                                    <option value="aguacate">Aguacate Hass</option>
                                    <option value="berries">Berries (Fresa, Zarzamora)</option>
                                    <option value="limon">Limón Mexicano/Persa</option>
                                    <option value="mango">Mango</option>
                                    <option value="maiz">Granos (Maíz, Trigo)</option>
                                </select>
                                <span className="absolute right-2 top-3 material-symbols-outlined text-gray-400 text-[18px] pointer-events-none">expand_more</span>
                            </div>

                            <div className="relative shrink-0">
                                <span className="absolute left-3 top-2.5 material-symbols-outlined text-gray-500 text-[20px] pointer-events-none">workspace_premium</span>
                                <select 
                                    value={selectedCert}
                                    onChange={(e) => setSelectedCert(e.target.value)}
                                    className="pl-10 pr-8 py-2.5 rounded-xl border-gray-300 bg-white text-sm font-bold text-gray-700 focus:border-primary focus:ring-primary shadow-sm cursor-pointer appearance-none min-w-[180px]"
                                >
                                    <option value="">Certificaciones</option>
                                    <option value="senasica">SENASICA</option>
                                    <option value="globalgap">GlobalG.A.P.</option>
                                    <option value="organico">Orgánico</option>
                                    <option value="rainforest">Rainforest Alliance</option>
                                    <option value="primus">PrimusGFS</option>
                                </select>
                                <span className="absolute right-2 top-3 material-symbols-outlined text-gray-400 text-[18px] pointer-events-none">expand_more</span>
                            </div>

                             <div className="relative shrink-0">
                                <span className="absolute left-3 top-2.5 material-symbols-outlined text-gray-500 text-[20px] pointer-events-none">calendar_month</span>
                                <select 
                                    value={selectedAvail}
                                    onChange={(e) => setSelectedAvail(e.target.value)}
                                    className="pl-10 pr-8 py-2.5 rounded-xl border-gray-300 bg-white text-sm font-bold text-gray-700 focus:border-primary focus:ring-primary shadow-sm cursor-pointer appearance-none min-w-[180px]"
                                >
                                    <option value="">Disponibilidad</option>
                                    <option value="immediate">Inmediata (En Cosecha)</option>
                                    <option value="upcoming">Próxima Temporada (1-2 meses)</option>
                                    <option value="year_round">Todo el Año</option>
                                </select>
                                <span className="absolute right-2 top-3 material-symbols-outlined text-gray-400 text-[18px] pointer-events-none">expand_more</span>
                            </div>
                            
                            {(selectedCrop || selectedCert || selectedAvail) && (
                                <button onClick={resetFilters} className="text-sm font-bold text-red-500 hover:text-red-700 whitespace-nowrap px-2">
                                    Limpiar
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Row 2: Quick Tags (Optional: can also drive filters) */}
                 <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
                    <span className="text-xs font-bold text-gray-400 uppercase mr-1 shrink-0">Populares:</span>
                    <button onClick={() => setSelectedCert('organico')} className="whitespace-nowrap rounded-lg bg-white border border-[#e3e3de] px-3 py-1.5 text-xs font-bold text-[#5d5d55] hover:border-primary hover:text-primary transition-colors flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">eco</span> Orgánico Certificado
                    </button>
                    <button onClick={() => setSelectedCrop('limon')} className="whitespace-nowrap rounded-lg bg-white border border-[#e3e3de] px-3 py-1.5 text-xs font-bold text-[#5d5d55] hover:border-primary hover:text-primary transition-colors flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">nutrition</span> Limón
                    </button>
                    <button onClick={() => setSelectedAvail('immediate')} className="whitespace-nowrap rounded-lg bg-white border border-[#e3e3de] px-3 py-1.5 text-xs font-bold text-[#5d5d55] hover:border-primary hover:text-primary transition-colors flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">local_shipping</span> Disponible Ahora
                    </button>
                 </div>
            </div>
         </div>
      </div>

      {/* Main Grid Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 w-full">
         <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
            <span className="text-sm font-bold text-gray-500">Mostrando {filteredProducers.length} productores verificados</span>
            <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-500">Ordenar por:</span>
                <select className="text-sm font-bold border-none bg-transparent focus:ring-0 cursor-pointer text-[#161613] pr-8">
                    <option>Relevancia</option>
                    <option>Calificación (Mayor a Menor)</option>
                    <option>Disponibilidad</option>
                    <option>Nombre (A-Z)</option>
                </select>
            </div>
         </div>
        
        {filteredProducers.length > 0 ? (
         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducers.map((producer) => (
                <Link key={producer.id} to={`/producer/${producer.id}`} className="group flex flex-col h-full bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                    <img src={producer.image} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" alt={producer.product} />
                    <div className="absolute top-3 left-3">
                        <span className="bg-white/90 backdrop-blur text-[#161613] text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                            {producer.years}
                        </span>
                    </div>
                    <div className="absolute bottom-3 right-3">
                    <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">star</span> {producer.rating}
                    </span>
                    </div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                    <div className="mb-2">
                        <h3 className="text-lg font-black text-[#161613] group-hover:text-primary transition-colors">{producer.name}</h3>
                        <div className="flex items-center text-sm font-medium text-gray-500">
                            <span className="material-symbols-outlined text-[18px] mr-1">location_on</span> {producer.location}
                        </div>
                    </div>
                    <div className="my-3 py-3 border-t border-b border-gray-100 flex justify-between items-center">
                        <div className="flex flex-col">
                            <span className="text-xs font-bold text-gray-400 uppercase">Producto</span>
                            <span className="font-bold text-[#161613]">{producer.product}</span>
                        </div>
                        <div className="flex flex-col text-right">
                            <span className="text-xs font-bold text-gray-400 uppercase">Disponibilidad</span>
                            <span className={`font-bold ${producer.availabilityColor}`}>{producer.availabilityText}</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {producer.certifications.map((cert, idx) => (
                            <span key={idx} className="px-2 py-1 bg-gray-100 rounded text-xs font-semibold text-gray-600 border border-gray-200">{cert}</span>
                        ))}
                    </div>
                </div>
                </Link>
            ))}
         </div>
        ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="bg-gray-100 p-6 rounded-full mb-4">
                    <span className="material-symbols-outlined text-4xl text-gray-400">search_off</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No se encontraron resultados</h3>
                <p className="text-gray-500 max-w-md">Intenta ajustar tus filtros de búsqueda o prueba con otros términos.</p>
                <button onClick={resetFilters} className="mt-6 text-primary font-bold hover:underline">
                    Limpiar todos los filtros
                </button>
            </div>
        )}
         
         {/* Pagination */}
         {filteredProducers.length > 0 && (
            <div className="mt-12 flex items-center justify-center border-t border-[#e3e3de] pt-8">
                <nav className="flex items-center gap-1">
                    <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#e3e3de] text-gray-500 hover:bg-gray-50 disabled:opacity-50">
                        <span className="material-symbols-outlined">chevron_left</span>
                    </button>
                    <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white font-bold shadow-sm">1</button>
                    <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-transparent text-[#161613] hover:bg-gray-100 font-bold">2</button>
                    <span className="px-2 text-gray-400">...</span>
                    <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#e3e3de] text-gray-500 hover:bg-gray-50">
                        <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                </nav>
            </div>
         )}
      </main>
      
      {/* Footer */}
      <footer className="border-t border-[#e3e3de] bg-white mt-auto">
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

export default Producers;