import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const Producers: React.FC = () => {
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

      {/* Search & Filter Bar */}
      <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-sm border-b border-[#e3e3de] shadow-sm">
         <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-96 group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors">search</span>
                </div>
                <input 
                    className="block w-full pl-10 pr-4 py-2.5 rounded-xl border-gray-300 bg-gray-50 focus:bg-white focus:border-primary focus:ring-primary sm:text-sm transition-all shadow-sm" 
                    placeholder="Buscar por nombre, producto o ubicación..." 
                    type="text"
                />
            </div>

            {/* Filter Chips */}
            <div className="w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-thin">
                 <div className="flex items-center gap-2">
                    <button className="whitespace-nowrap rounded-lg bg-[#161613] px-4 py-2 text-sm font-bold text-white shadow-md transition-transform active:scale-95">Todos</button>
                    <button className="whitespace-nowrap rounded-lg bg-white border border-[#e3e3de] px-4 py-2 text-sm font-bold text-[#5d5d55] hover:border-primary hover:text-primary hover:bg-primary/5 transition-all active:scale-95 flex items-center gap-1">
                        <span className="material-symbols-outlined text-lg">nutrition</span> Frutas
                    </button>
                    <button className="whitespace-nowrap rounded-lg bg-white border border-[#e3e3de] px-4 py-2 text-sm font-bold text-[#5d5d55] hover:border-primary hover:text-primary hover:bg-primary/5 transition-all active:scale-95 flex items-center gap-1">
                         <span className="material-symbols-outlined text-lg">grass</span> Verduras
                    </button>
                    <button className="whitespace-nowrap rounded-lg bg-white border border-[#e3e3de] px-4 py-2 text-sm font-bold text-[#5d5d55] hover:border-primary hover:text-primary hover:bg-primary/5 transition-all active:scale-95 flex items-center gap-1">
                        <span className="material-symbols-outlined text-lg">eco</span> Orgánicos
                    </button>
                     <button className="whitespace-nowrap rounded-lg bg-white border border-[#e3e3de] px-4 py-2 text-sm font-bold text-[#5d5d55] hover:border-primary hover:text-primary hover:bg-primary/5 transition-all active:scale-95 flex items-center gap-1">
                        <span className="material-symbols-outlined text-lg">public</span> Exportación
                    </button>
                 </div>
            </div>
         </div>
      </div>

      {/* Main Grid Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 w-full">
         <div className="flex justify-between items-center mb-6">
            <span className="text-sm font-bold text-gray-500">Mostrando 6 productores</span>
            <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-500 hidden sm:inline">Ordenar por:</span>
                <select className="text-sm font-bold border-none bg-transparent focus:ring-0 cursor-pointer text-[#161613]">
                    <option>Relevancia</option>
                    <option>Calificación</option>
                    <option>Nombre (A-Z)</option>
                </select>
            </div>
         </div>

         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            
            {/* Producer Card 1 */}
            <Link to="/producer/1" className="group flex flex-col h-full bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDG4jAvMtSWyv0sypncNkJu-_PO-2KsjooKCAkJlQUZJI2zIecGUCmhvw_LjjZTpOD4EvIrzEYshjlF3D2ooykBaXzhLhIgbZVZmr-G5nugm0YbeqDG0EBjr-MqzH5a8wGqmmGflouyPoCk1txvSiztzLyLsTZgEyxyiESR7HVKgcrylTI1ZtQ1PmJ_hO_aSbDrHyVxLnhX9mtFcxi41O2ToMl8Z1b5y-7ZyxftAcIagskyvoURquh2L1gkKFPtNkJe_zvXotvNZT73" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Aguacate" />
                <div className="absolute top-3 left-3">
                    <span className="bg-white/90 backdrop-blur text-[#161613] text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                        5 Años en PAM
                    </span>
                </div>
                <div className="absolute bottom-3 right-3">
                  <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">star</span> 4.9
                  </span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="mb-2">
                    <h3 className="text-lg font-black text-[#161613] group-hover:text-primary transition-colors">Huertas San Miguel</h3>
                    <div className="flex items-center text-sm font-medium text-gray-500">
                        <span className="material-symbols-outlined text-[18px] mr-1">location_on</span> Uruapan, Michoacán
                    </div>
                </div>
                <div className="my-3 py-3 border-t border-b border-gray-100 flex justify-between items-center">
                    <div className="flex flex-col">
                        <span className="text-xs font-bold text-gray-400 uppercase">Producto</span>
                        <span className="font-bold text-[#161613]">Aguacate Hass</span>
                    </div>
                    <div className="flex flex-col text-right">
                        <span className="text-xs font-bold text-gray-400 uppercase">Disponibilidad</span>
                        <span className="font-bold text-green-600">Alta</span>
                    </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                    <span className="px-2 py-1 bg-gray-100 rounded text-xs font-semibold text-gray-600 border border-gray-200">SENASICA</span>
                    <span className="px-2 py-1 bg-gray-100 rounded text-xs font-semibold text-gray-600 border border-gray-200">GlobalG.A.P</span>
                </div>
              </div>
            </Link>

            {/* Producer Card 2 */}
            <Link to="/producer/2" className="group flex flex-col h-full bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQkO6iZzz6_MopJCHT_Xt6kh9Clxd5kM6k9BHwUEOy-Oj7Rn_b3DElFrZePq5cuMemGzEf1b_kJZQ_GFvmkyXZpX9aHNzOx-mo1thmU4v75HbH01TdNU5VakS--I7g5CX1nqzRXiSTJbtu4hwgcojAcfFDT6cm3hHh4MPd71pCvinLvd3bSxwyKgFmjSs2_jTiCwdGN11sVU9Fcsr3nKctoZ8GWzjoioGMyNS_9WW7Y0uY3PP8C-Q1mkbytxpDDXnYYU2U5AUMYgxo" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Berries" />
                 <div className="absolute top-3 left-3">
                    <span className="bg-white/90 backdrop-blur text-[#161613] text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                        Nuevo
                    </span>
                </div>
                 <div className="absolute bottom-3 right-3">
                  <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">star</span> 5.0
                  </span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="mb-2">
                    <h3 className="text-lg font-black text-[#161613] group-hover:text-primary transition-colors">Agroindustrias del Valle</h3>
                    <div className="flex items-center text-sm font-medium text-gray-500">
                        <span className="material-symbols-outlined text-[18px] mr-1">location_on</span> Zamora, Michoacán
                    </div>
                </div>
                <div className="my-3 py-3 border-t border-b border-gray-100 flex justify-between items-center">
                    <div className="flex flex-col">
                        <span className="text-xs font-bold text-gray-400 uppercase">Producto</span>
                        <span className="font-bold text-[#161613]">Fresa & Berries</span>
                    </div>
                    <div className="flex flex-col text-right">
                        <span className="text-xs font-bold text-gray-400 uppercase">Disponibilidad</span>
                        <span className="font-bold text-orange-500">Media</span>
                    </div>
                </div>
                 <div className="flex flex-wrap gap-2 mt-auto">
                    <span className="px-2 py-1 bg-green-50 rounded text-xs font-semibold text-green-700 border border-green-100">Orgánico</span>
                </div>
              </div>
            </Link>

            {/* Producer Card 3 */}
            <Link to="/producer/3" className="group flex flex-col h-full bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwVylPY4xaFndz9uI9-Ls0KBi3Zq6uRTYnUepvNtouV0AmqxuvvzvWRe6nlpr6_0gZiRa1_ivLXbrjzO5WrEmvuDfvocpRj8lQw9fFUSh2MpFsDKuoOtz-6stUMoJx6ivH-6NpDiGj9fxTWS3hEA5Teq8kUyZ_F4i99Nud6GWx7aFUzAX-e9hj10MKSLHuN6d4yTaWq6Z1eY3GufyCUZwFaEkZHCXyMSArIVlKO5K8ozV5Sp_imXXzs0AobFRoRt3tPqrOfmREyhNe" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Limón" />
                 <div className="absolute bottom-3 right-3">
                  <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">star</span> 4.7
                  </span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="mb-2">
                    <h3 className="text-lg font-black text-[#161613] group-hover:text-primary transition-colors">Frutos del Sol</h3>
                    <div className="flex items-center text-sm font-medium text-gray-500">
                        <span className="material-symbols-outlined text-[18px] mr-1">location_on</span> Apatzingán, Michoacán
                    </div>
                </div>
                <div className="my-3 py-3 border-t border-b border-gray-100 flex justify-between items-center">
                    <div className="flex flex-col">
                        <span className="text-xs font-bold text-gray-400 uppercase">Producto</span>
                        <span className="font-bold text-[#161613]">Limón Persa</span>
                    </div>
                    <div className="flex flex-col text-right">
                        <span className="text-xs font-bold text-gray-400 uppercase">Disponibilidad</span>
                        <span className="font-bold text-green-600">Alta</span>
                    </div>
                </div>
                 <div className="flex flex-wrap gap-2 mt-auto">
                    <span className="px-2 py-1 bg-gray-100 rounded text-xs font-semibold text-gray-600 border border-gray-200">Exportación</span>
                </div>
              </div>
            </Link>

            {/* Producer Card 4 */}
            <Link to="#" className="group flex flex-col h-full bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUEsW2YeM-Zb_VGFXf7AcUCxsG4TVSn9fp-hVNA2KfdGq3cKPoNi4hjW3PuOQxUsZaPm6aDCxLVcO6MSJWnmayIOhcJ4GFxzG8NTc0xzV4COfx0IVK3KJ2IDy13fnQ7YTOJRC-Ly4D4UbZKF08KM5Exw02Ac_tngZoEICWYWPWtahhQwwi5z7j6itoVYhHaFAP8vmjifFtDsigMYyt53XtYyFNhj-182QUyAyDnK4_L7FxrkpnS4YA4kthLTYLBmn7feuEPGyK8ZLt" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Mango" />
                <div className="absolute top-3 left-3">
                     <span className="bg-red-500/90 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                        Agotado
                    </span>
                </div>
                 <div className="absolute bottom-3 right-3">
                  <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">star</span> 4.8
                  </span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="mb-2">
                    <h3 className="text-lg font-black text-[#161613] group-hover:text-primary transition-colors">Exóticos de Tierra Caliente</h3>
                    <div className="flex items-center text-sm font-medium text-gray-500">
                        <span className="material-symbols-outlined text-[18px] mr-1">location_on</span> Lázaro Cárdenas, Mich.
                    </div>
                </div>
                <div className="my-3 py-3 border-t border-b border-gray-100 flex justify-between items-center">
                    <div className="flex flex-col">
                        <span className="text-xs font-bold text-gray-400 uppercase">Producto</span>
                        <span className="font-bold text-[#161613]">Mango Ataulfo</span>
                    </div>
                    <div className="flex flex-col text-right">
                        <span className="text-xs font-bold text-gray-400 uppercase">Disponibilidad</span>
                        <span className="font-bold text-red-500">Nula</span>
                    </div>
                </div>
                 <div className="flex flex-wrap gap-2 mt-auto">
                    <span className="px-2 py-1 bg-gray-100 rounded text-xs font-semibold text-gray-600 border border-gray-200">SENASICA</span>
                </div>
              </div>
            </Link>

            {/* Producer Card 5 */}
            <Link to="#" className="group flex flex-col h-full bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQTwhobZT1GC17Gz3Nipa3PU0cRkmMgLUtF0kCzbmvlJy7avle6_O3PE1-reWWjRqk_UObaAIR5oFQNlMzEjm3RHrs81lEmTrebvV5wy5bkRCRsyO7MxNKudyjvVPzTI4HmaS4epbpQz2TjOUbx4a4Ogjy4oAhD6P7DwidUzp2Cx4e7JbKvVLnRDPqJyg3NBVtrU9xvDnP0VXqed_q8VXYVtV9toCUsk9qpTNIBm1_FfhzEoAOWW4sy75eztZATN9gsO46_m698Jp-" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Maiz" />
                 <div className="absolute bottom-3 right-3">
                  <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">star</span> 4.5
                  </span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="mb-2">
                    <h3 className="text-lg font-black text-[#161613] group-hover:text-primary transition-colors">Granos del Bajío</h3>
                    <div className="flex items-center text-sm font-medium text-gray-500">
                        <span className="material-symbols-outlined text-[18px] mr-1">location_on</span> La Piedad, Michoacán
                    </div>
                </div>
                <div className="my-3 py-3 border-t border-b border-gray-100 flex justify-between items-center">
                    <div className="flex flex-col">
                        <span className="text-xs font-bold text-gray-400 uppercase">Producto</span>
                        <span className="font-bold text-[#161613]">Maíz Blanco</span>
                    </div>
                    <div className="flex flex-col text-right">
                        <span className="text-xs font-bold text-gray-400 uppercase">Disponibilidad</span>
                        <span className="font-bold text-blue-600">Próximamente</span>
                    </div>
                </div>
                 <div className="flex flex-wrap gap-2 mt-auto">
                    <span className="px-2 py-1 bg-gray-100 rounded text-xs font-semibold text-gray-600 border border-gray-200">Mayoreo</span>
                </div>
              </div>
            </Link>

            {/* Producer Card 6 */}
            <Link to="#" className="group flex flex-col h-full bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJaCpbbyp1tK5uBf3oeqMhbU30367JH1tMK96qkncUQ0_1spvXcCz0ZNwp_3892Hta0nES7Xd-sf4T53V9NRrCjr8mkWETrfswNiSa7wLclodIh7sJUzEJVgEY5W9poZeBTiwqOYRcEUuzhmg8nPdI-iXU_RFWu4gwOUWp5pDuyBIXq52iOJQRyDjM-WFIfeuoqZgO-_39L_UxsSrXV3BfLtEytzhaBnOps6-rUTDVpU6L0DAkZXJcaZQTeRGGcoQfTzQR32o-UqMA" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Zarzamora" />
                 <div className="absolute bottom-3 right-3">
                  <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">star</span> 4.9
                  </span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="mb-2">
                    <h3 className="text-lg font-black text-[#161613] group-hover:text-primary transition-colors">Berries Los Reyes</h3>
                    <div className="flex items-center text-sm font-medium text-gray-500">
                        <span className="material-symbols-outlined text-[18px] mr-1">location_on</span> Los Reyes, Michoacán
                    </div>
                </div>
                <div className="my-3 py-3 border-t border-b border-gray-100 flex justify-between items-center">
                    <div className="flex flex-col">
                        <span className="text-xs font-bold text-gray-400 uppercase">Producto</span>
                        <span className="font-bold text-[#161613]">Zarzamora</span>
                    </div>
                    <div className="flex flex-col text-right">
                        <span className="text-xs font-bold text-gray-400 uppercase">Disponibilidad</span>
                        <span className="font-bold text-green-600">Alta</span>
                    </div>
                </div>
                 <div className="flex flex-wrap gap-2 mt-auto">
                    <span className="px-2 py-1 bg-gray-100 rounded text-xs font-semibold text-gray-600 border border-gray-200">Exportación</span>
                    <span className="px-2 py-1 bg-gray-100 rounded text-xs font-semibold text-gray-600 border border-gray-200">Orgánico</span>
                </div>
              </div>
            </Link>

         </div>
         
         {/* Pagination */}
         <div className="mt-12 flex items-center justify-center border-t border-[#e3e3de] pt-8">
             <nav className="flex items-center gap-1">
                <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#e3e3de] text-gray-500 hover:bg-gray-50 disabled:opacity-50">
                    <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white font-bold shadow-sm">1</button>
                <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-transparent text-[#161613] hover:bg-gray-100 font-bold">2</button>
                <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-transparent text-[#161613] hover:bg-gray-100 font-bold">3</button>
                <span className="px-2 text-gray-400">...</span>
                <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#e3e3de] text-gray-500 hover:bg-gray-50">
                    <span className="material-symbols-outlined">chevron_right</span>
                </button>
            </nav>
         </div>
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