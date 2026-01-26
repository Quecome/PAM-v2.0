import React from 'react';
import Sidebar from '../components/Sidebar';

const Dashboard: React.FC = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-[#F5F5F5]">
      <Sidebar />
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <header className="h-24 bg-white border-b border-gray-200 flex items-center justify-between px-8 shadow-sm z-10">
          <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">Mis Cultivos</h1>
          <div className="flex items-center gap-4">
            <button className="w-12 h-12 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-600 relative">
              <span className="material-symbols-outlined text-3xl">notifications</span>
              <span className="absolute top-2 right-2 w-3 h-3 bg-red-500 border-2 border-white rounded-full"></span>
            </button>
            <button className="w-12 h-12 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-600">
              <span className="material-symbols-outlined text-3xl">help</span>
            </button>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-6 lg:p-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div className="relative max-w-md w-full">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-gray-400 text-2xl">search</span>
              </span>
              <input className="block w-full pl-12 pr-4 py-4 rounded-xl border-gray-300 shadow-sm focus:border-primary focus:ring-primary text-lg" placeholder="Buscar cultivo o variedad..." type="text"/>
            </div>
            <button className="bg-pam-green hover:bg-pam-green-dark text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:translate-y-[-2px] active:translate-y-0 transition-all flex items-center gap-3 font-bold text-xl">
              <span className="material-symbols-outlined text-3xl">add_circle</span>
              Agregar Nueva Cosecha
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 pb-10">
            
            {/* Card 1: Avocado */}
            <article className="bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow overflow-hidden flex flex-col">
              <div className="h-48 bg-gray-100 relative group">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCaxDG4zq5IH6QGafKs_aZYpyLr3pXrFHDZTEV1-6bKeH-1aK444XcB1jqE2OH503dYZ0wgNsu8DodrUHApcXC978xDVksDqrG1QAk4egBzVzsCAPCQB1npCL9R4CWnZUPXbhFUWZoEwVM_Bke01IEaQUIHIkzF4Wf-ndn_3S-TbCrON2tJfAwbTg0RqIwfPuxPivpClwucGiYrYYWpYqzq6K6vdB9l9XjI3Bwqao-f0FMN4Te3fft_aLWnwac-DDe-68sXcwgCCGcy')" }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">Aguacate Hass</h3>
                  <p className="text-white/90 font-medium">Huerta San José</p>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold border border-green-200 shadow-sm">
                    <span className="material-symbols-outlined text-lg">check_circle</span> Listo para Venta
                  </span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4 text-gray-600">
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Hectáreas</p>
                    <p className="text-lg font-bold text-gray-900">12.5 Has</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Estimado</p>
                    <p className="text-lg font-bold text-gray-900">80 Toneladas</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Última revisión</p>
                    <p className="text-lg font-bold text-gray-900">Ayer</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Calidad</p>
                    <p className="text-lg font-bold text-gray-900">Exportación</p>
                  </div>
                </div>
                <div className="mt-auto pt-4 flex gap-3">
                  <button className="flex-1 bg-white border-2 border-gray-200 text-gray-700 hover:border-primary hover:text-primary py-3 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined">edit</span> Editar
                  </button>
                  <button className="flex-1 bg-primary/10 text-primary hover:bg-primary/20 py-3 rounded-xl font-bold text-lg transition-colors">
                    Ver Detalles
                  </button>
                </div>
              </div>
            </article>

            {/* Card 2: Lemon */}
            <article className="bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow overflow-hidden flex flex-col">
              <div className="h-48 bg-[#E8F5E9] relative flex items-center justify-center">
                <span className="material-symbols-outlined text-8xl text-green-700/20">potted_plant</span>
                <div className="absolute bottom-4 left-4 text-gray-800">
                  <h3 className="text-2xl font-bold">Limón Mexicano</h3>
                  <p className="text-gray-600 font-medium">Parcela El Rosario</p>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-bold border border-yellow-200 shadow-sm">
                    <span className="material-symbols-outlined text-lg">water_drop</span> Creciendo
                  </span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4 text-gray-600">
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Hectáreas</p>
                    <p className="text-lg font-bold text-gray-900">5.0 Has</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Cosecha Est.</p>
                    <p className="text-lg font-bold text-gray-900">Nov 2023</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-sm text-gray-500 font-medium mb-1">Progreso Riego</p>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-blue-500 h-3 rounded-full" style={{ width: "70%" }}></div>
                    </div>
                  </div>
                </div>
                <div className="mt-auto pt-4 flex gap-3">
                  <button className="flex-1 bg-white border-2 border-gray-200 text-gray-700 hover:border-primary hover:text-primary py-3 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined">edit</span> Editar
                  </button>
                  <button className="flex-1 bg-primary/10 text-primary hover:bg-primary/20 py-3 rounded-xl font-bold text-lg transition-colors">
                    Ver Detalles
                  </button>
                </div>
              </div>
            </article>

            {/* Card 3: Blackberry */}
            <article className="bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow overflow-hidden flex flex-col">
              <div className="h-48 bg-[#FFF3E0] relative flex items-center justify-center">
                <span className="material-symbols-outlined text-8xl text-orange-700/20">agriculture</span>
                <div className="absolute bottom-4 left-4 text-gray-800">
                  <h3 className="text-2xl font-bold">Zarzamora</h3>
                  <p className="text-gray-600 font-medium">Invernadero B</p>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1 bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-bold border border-orange-200 shadow-sm">
                    <span className="material-symbols-outlined text-lg">warning</span> Requiere Atención
                  </span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4 text-gray-600">
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Superficie</p>
                    <p className="text-lg font-bold text-gray-900">2,000 m²</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Etapa</p>
                    <p className="text-lg font-bold text-gray-900">Floración</p>
                  </div>
                  <div className="col-span-2 bg-red-50 p-3 rounded-lg border border-red-100">
                    <p className="text-sm text-red-800 font-bold flex items-center gap-2">
                      <span className="material-symbols-outlined text-lg">pest_control</span> Alerta: Revisión de plaga
                    </p>
                  </div>
                </div>
                <div className="mt-auto pt-4 flex gap-3">
                  <button className="flex-1 bg-white border-2 border-gray-200 text-gray-700 hover:border-primary hover:text-primary py-3 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined">edit</span> Editar
                  </button>
                  <button className="flex-1 bg-primary/10 text-primary hover:bg-primary/20 py-3 rounded-xl font-bold text-lg transition-colors">
                    Ver Detalles
                  </button>
                </div>
              </div>
            </article>

            {/* Add New Placeholder */}
            <article className="border-2 border-dashed border-gray-300 rounded-2xl flex flex-col items-center justify-center p-8 hover:bg-gray-50 transition-colors cursor-pointer group min-h-[400px]">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors mb-4">
                <span className="material-symbols-outlined text-4xl text-[#388E3C]">add</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800">Registrar Cultivo</h3>
              <p className="text-gray-500 text-center mt-2 max-w-[200px]">Agrega un nuevo terreno o invernadero a tu panel.</p>
            </article>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;