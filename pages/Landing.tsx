import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const Landing: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-cover bg-center shadow-lg h-[450px]" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuAWbjy2kwPcgouKiuB8FAlRrfxShMWfhvKV2GyknV-yxx-VxNFQLDKsamYAVS9pXwVB6aZAsaQ_tBsk2evaCYz0tfPMcGY4mBUCjZ8hnhaDEk_aSWw1s-pkRu7BNL2pD8V1iKy5kQh95LiFFrClJwdDsA_Uz-ZoBxpcimD7mSLiPRjQ-qjkKEZ9ms1hRHPHBnJNhe3BttpuslzSjOmU-2NC08VUB3Rm4Q7yvPL5MLwVHjzBA9POHqaN-5dBVB_RoTrcrephs3XMyO_w')" }}>
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
              <h1 className="mb-4 text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl tracking-tight max-w-3xl drop-shadow-md">
                Encuentra lo mejor del campo michoacano
              </h1>
              <p className="mb-8 text-base font-medium text-gray-100 sm:text-lg md:text-xl drop-shadow-md">
                Conectando productores certificados con compradores directos
              </p>
              <div className="w-full max-w-2xl transform transition-all hover:scale-[1.01]">
                <form className="relative flex h-14 items-center overflow-hidden rounded-xl bg-white shadow-xl ring-1 ring-black/5" onSubmit={(e) => e.preventDefault()}>
                  <div className="flex h-full w-12 items-center justify-center text-gray-400">
                    <span className="material-symbols-outlined">search</span>
                  </div>
                  <input className="h-full flex-1 border-0 bg-transparent px-2 text-base text-gray-900 placeholder:text-gray-400 focus:ring-0" placeholder="¿Qué buscas hoy? (Ej. Aguacate, Berries, Limón...)" type="text"/>
                  <button className="m-1.5 h-11 rounded-lg bg-primary px-6 text-sm font-bold text-white hover:bg-primary-dark transition-colors">
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
            <button className="flex shrink-0 items-center gap-2 rounded-full bg-[#161613] px-5 py-2 text-sm font-medium text-white shadow-sm">Todos</button>
            <button className="flex shrink-0 items-center gap-2 rounded-full bg-white border border-[#e3e3de] px-5 py-2 text-sm font-medium text-[#161613] hover:bg-gray-50 hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-sm">nutrition</span> Frutas
            </button>
            <button className="flex shrink-0 items-center gap-2 rounded-full bg-white border border-[#e3e3de] px-5 py-2 text-sm font-medium text-[#161613] hover:bg-gray-50 hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-sm">grass</span> Verduras
            </button>
            <button className="flex shrink-0 items-center gap-2 rounded-full bg-white border border-[#e3e3de] px-5 py-2 text-sm font-medium text-[#161613] hover:bg-gray-50 hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-sm">eco</span> Orgánico
            </button>
            <button className="flex shrink-0 items-center gap-2 rounded-full bg-white border border-[#e3e3de] px-5 py-2 text-sm font-medium text-[#161613] hover:bg-gray-50 hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-sm">verified</span> Certificado SENASICA
            </button>
          </div>
        </div>
      </section>

      {/* Producer Grid */}
      <main className="flex-1 w-full bg-background-light">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#161613] sm:text-3xl">Productores Destacados</h2>
              <p className="mt-2 text-sm text-gray-500">Explora los productores con mayor reputación y calidad.</p>
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
             {/* Card 1 */}
            <Link to="/producer/1" className="group relative flex flex-col h-full overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/50">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-200">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDG4jAvMtSWyv0sypncNkJu-_PO-2KsjooKCAkJlQUZJI2zIecGUCmhvw_LjjZTpOD4EvIrzEYshjlF3D2ooykBaXzhLhIgbZVZmr-G5nugm0YbeqDG0EBjr-MqzH5a8wGqmmGflouyPoCk1txvSiztzLyLsTZgEyxyiESR7HVKgcrylTI1ZtQ1PmJ_hO_aSbDrHyVxLnhX9mtFcxi41O2ToMl8Z1b5y-7ZyxftAcIagskyvoURquh2L1gkKFPtNkJe_zvXotvNZT73" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Aguacate Hass" />
                <div className="absolute right-3 top-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-green-700 backdrop-blur-md shadow-sm border border-green-100">
                    <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span></span>
                    Disponible
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#161613] group-hover:text-primary transition-colors leading-tight">Huertas San Miguel</h3>
                    <div className="mt-1 flex items-center text-sm font-medium text-gray-500">
                      <span className="material-symbols-outlined mr-1 text-[18px]">location_on</span>
                      Uruapan, Michoacán
                    </div>
                  </div>
                  <button className="relative z-20 rounded-full bg-[#f3f3f1] p-2 text-gray-400 hover:bg-red-50 hover:text-red-500 transition-colors">
                    <span className="material-symbols-outlined text-[22px]">favorite</span>
                  </button>
                </div>
                <div className="mb-5">
                  <span className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Producto Principal</span>
                  <span className="block text-2xl font-black text-[#161613]">Aguacate Hass</span>
                </div>
                <div className="flex flex-wrap gap-2.5 mb-6">
                  <span className="inline-flex items-center rounded-lg bg-amber-100 border border-amber-300 px-3 py-1.5 text-sm font-bold text-amber-900">
                    <span className="material-symbols-outlined mr-1.5 text-[18px]">verified_user</span> SENASICA
                  </span>
                   <span className="inline-flex items-center rounded-lg bg-green-100 border border-green-300 px-3 py-1.5 text-sm font-bold text-green-900">
                    <span className="material-symbols-outlined mr-1.5 text-[18px]">eco</span> Orgánico
                  </span>
                </div>
                <div className="mt-auto w-full rounded-xl bg-primary py-3.5 px-4 text-center text-base font-bold text-white shadow-md transition-colors group-hover:bg-primary-dark flex items-center justify-center gap-2">
                    Ver Perfil <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </div>
              </div>
            </Link>

            {/* Card 2 */}
            <Link to="/producer/2" className="group relative flex flex-col h-full overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/50">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-200">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQkO6iZzz6_MopJCHT_Xt6kh9Clxd5kM6k9BHwUEOy-Oj7Rn_b3DElFrZePq5cuMemGzEf1b_kJZQ_GFvmkyXZpX9aHNzOx-mo1thmU4v75HbH01TdNU5VakS--I7g5CX1nqzRXiSTJbtu4hwgcojAcfFDT6cm3hHh4MPd71pCvinLvd3bSxwyKgFmjSs2_jTiCwdGN11sVU9Fcsr3nKctoZ8GWzjoioGMyNS_9WW7Y0uY3PP8C-Q1mkbytxpDDXnYYU2U5AUMYgxo" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Fresas" />
                <div className="absolute right-3 top-3">
                   <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-primary backdrop-blur-md shadow-sm border border-gray-100">
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    Cosecha en Curso
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#161613] group-hover:text-primary transition-colors leading-tight">Agroindustrias del Valle</h3>
                    <div className="mt-1 flex items-center text-sm font-medium text-gray-500">
                      <span className="material-symbols-outlined mr-1 text-[18px]">location_on</span>
                      Zamora, Michoacán
                    </div>
                  </div>
                   <button className="relative z-20 rounded-full bg-[#f3f3f1] p-2 text-gray-400 hover:bg-red-50 hover:text-red-500 transition-colors">
                    <span className="material-symbols-outlined text-[22px]">favorite</span>
                  </button>
                </div>
                <div className="mb-5">
                  <span className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Producto Principal</span>
                  <span className="block text-2xl font-black text-[#161613]">Fresa & Berries</span>
                </div>
                 <div className="flex flex-wrap gap-2.5 mb-6">
                  <span className="inline-flex items-center rounded-lg bg-amber-100 border border-amber-300 px-3 py-1.5 text-sm font-bold text-amber-900">
                    <span className="material-symbols-outlined mr-1.5 text-[18px]">verified_user</span> SENASICA
                  </span>
                </div>
                <div className="mt-auto w-full rounded-xl bg-primary py-3.5 px-4 text-center text-base font-bold text-white shadow-md transition-colors group-hover:bg-primary-dark flex items-center justify-center gap-2">
                    Ver Perfil <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </div>
              </div>
            </Link>

            {/* Card 3 */}
            <Link to="/producer/3" className="group relative flex flex-col h-full overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/50">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-200">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwVylPY4xaFndz9uI9-Ls0KBi3Zq6uRTYnUepvNtouV0AmqxuvvzvWRe6nlpr6_0gZiRa1_ivLXbrjzO5WrEmvuDfvocpRj8lQw9fFUSh2MpFsDKuoOtz-6stUMoJx6ivH-6NpDiGj9fxTWS3hEA5Teq8kUyZ_F4i99Nud6GWx7aFUzAX-e9hj10MKSLHuN6d4yTaWq6Z1eY3GufyCUZwFaEkZHCXyMSArIVlKO5K8ozV5Sp_imXXzs0AobFRoRt3tPqrOfmREyhNe" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Limón" />
                <div className="absolute right-3 top-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-green-700 backdrop-blur-md shadow-sm border border-green-100">
                    <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span></span>
                    Disponible
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#161613] group-hover:text-primary transition-colors leading-tight">Frutos del Sol</h3>
                    <div className="mt-1 flex items-center text-sm font-medium text-gray-500">
                      <span className="material-symbols-outlined mr-1 text-[18px]">location_on</span>
                      Apatzingán, Michoacán
                    </div>
                  </div>
                   <button className="relative z-20 rounded-full bg-[#f3f3f1] p-2 text-gray-400 hover:bg-red-50 hover:text-red-500 transition-colors">
                    <span className="material-symbols-outlined text-[22px]">favorite</span>
                  </button>
                </div>
                <div className="mb-5">
                  <span className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Producto Principal</span>
                  <span className="block text-2xl font-black text-[#161613]">Limón Persa</span>
                </div>
                 <div className="flex flex-wrap gap-2.5 mb-6">
                  <span className="inline-flex items-center rounded-lg bg-blue-100 border border-blue-300 px-3 py-1.5 text-sm font-bold text-blue-900">
                    <span className="material-symbols-outlined mr-1.5 text-[18px]">public</span> Exportación
                  </span>
                </div>
                <div className="mt-auto w-full rounded-xl bg-primary py-3.5 px-4 text-center text-base font-bold text-white shadow-md transition-colors group-hover:bg-primary-dark flex items-center justify-center gap-2">
                    Ver Perfil <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </div>
              </div>
            </Link>
             
             {/* Additional Cards to fill grid */}
             <article className="group relative flex flex-col h-full overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/50">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-200">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUEsW2YeM-Zb_VGFXf7AcUCxsG4TVSn9fp-hVNA2KfdGq3cKPoNi4hjW3PuOQxUsZaPm6aDCxLVcO6MSJWnmayIOhcJ4GFxzG8NTc0xzV4COfx0IVK3KJ2IDy13fnQ7YTOJRC-Ly4D4UbZKF08KM5Exw02Ac_tngZoEICWYWPWtahhQwwi5z7j6itoVYhHaFAP8vmjifFtDsigMYyt53XtYyFNhj-182QUyAyDnK4_L7FxrkpnS4YA4kthLTYLBmn7feuEPGyK8ZLt" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Mango" />
                <div className="absolute right-3 top-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-gray-500 backdrop-blur-md shadow-sm border border-gray-200">
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-gray-400"></span>
                    Agotado
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#161613] group-hover:text-primary transition-colors leading-tight">Exóticos de Tierra Caliente</h3>
                     <div className="mt-1 flex items-center text-sm font-medium text-gray-500">
                      <span className="material-symbols-outlined mr-1 text-[18px]">location_on</span>
                      Lázaro Cárdenas, Mich.
                    </div>
                  </div>
                </div>
                 <div className="mb-5">
                  <span className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Producto Principal</span>
                  <span className="block text-2xl font-black text-[#161613]">Mango Ataulfo</span>
                </div>
                 <div className="mt-auto w-full rounded-xl bg-primary py-3.5 px-4 text-center text-base font-bold text-white shadow-md transition-colors group-hover:bg-primary-dark flex items-center justify-center gap-2">
                    Ver Perfil <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </div>
              </div>
            </article>

            <article className="group relative flex flex-col h-full overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/50">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-200">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQTwhobZT1GC17Gz3Nipa3PU0cRkmMgLUtF0kCzbmvlJy7avle6_O3PE1-reWWjRqk_UObaAIR5oFQNlMzEjm3RHrs81lEmTrebvV5wy5bkRCRsyO7MxNKudyjvVPzTI4HmaS4epbpQz2TjOUbx4a4Ogjy4oAhD6P7DwidUzp2Cx4e7JbKvVLnRDPqJyg3NBVtrU9xvDnP0VXqed_q8VXYVtV9toCUsk9qpTNIBm1_FfhzEoAOWW4sy75eztZATN9gsO46_m698Jp-" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Maiz" />
                 <div className="absolute right-3 top-3">
                   <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-primary backdrop-blur-md shadow-sm border border-gray-100">
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    Próxima Cosecha
                  </span>
                </div>
              </div>
               <div className="flex flex-1 flex-col p-6">
                 <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#161613] group-hover:text-primary transition-colors leading-tight">Granos del Bajío</h3>
                     <div className="mt-1 flex items-center text-sm font-medium text-gray-500">
                      <span className="material-symbols-outlined mr-1 text-[18px]">location_on</span>
                      La Piedad, Michoacán
                    </div>
                  </div>
                </div>
                 <div className="mb-5">
                  <span className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Producto Principal</span>
                  <span className="block text-2xl font-black text-[#161613]">Maíz Blanco</span>
                </div>
                 <div className="mt-auto w-full rounded-xl bg-primary py-3.5 px-4 text-center text-base font-bold text-white shadow-md transition-colors group-hover:bg-primary-dark flex items-center justify-center gap-2">
                    Ver Perfil <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </div>
               </div>
            </article>

             <article className="group relative flex flex-col h-full overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/50">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-200">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJaCpbbyp1tK5uBf3oeqMhbU30367JH1tMK96qkncUQ0_1spvXcCz0ZNwp_3892Hta0nES7Xd-sf4T53V9NRrCjr8mkWETrfswNiSa7wLclodIh7sJUzEJVgEY5W9poZeBTiwqOYRcEUuzhmg8nPdI-iXU_RFWu4gwOUWp5pDuyBIXq52iOJQRyDjM-WFIfeuoqZgO-_39L_UxsSrXV3BfLtEytzhaBnOps6-rUTDVpU6L0DAkZXJcaZQTeRGGcoQfTzQR32o-UqMA" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Zarzamora" />
                <div className="absolute right-3 top-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-green-700 backdrop-blur-md shadow-sm border border-green-100">
                    <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span></span>
                    Disponible
                  </span>
                </div>
              </div>
               <div className="flex flex-1 flex-col p-6">
                 <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#161613] group-hover:text-primary transition-colors leading-tight">Berries Los Reyes</h3>
                     <div className="mt-1 flex items-center text-sm font-medium text-gray-500">
                      <span className="material-symbols-outlined mr-1 text-[18px]">location_on</span>
                      Los Reyes, Michoacán
                    </div>
                  </div>
                </div>
                 <div className="mb-5">
                  <span className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Producto Principal</span>
                  <span className="block text-2xl font-black text-[#161613]">Zarzamora</span>
                </div>
                 <div className="mt-auto w-full rounded-xl bg-primary py-3.5 px-4 text-center text-base font-bold text-white shadow-md transition-colors group-hover:bg-primary-dark flex items-center justify-center gap-2">
                    Ver Perfil <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </div>
               </div>
            </article>

          </div>
          
          <div className="mt-12 flex items-center justify-center border-t border-[#e3e3de] pt-8">
            <nav className="flex items-center gap-1">
                <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#e3e3de] text-gray-500 hover:bg-gray-50">
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