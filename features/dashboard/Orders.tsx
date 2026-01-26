import React from 'react';
import Sidebar from './Sidebar';

const Orders: React.FC = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-[#F5F5F5]">
      <Sidebar />
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <header className="h-24 bg-white border-b border-gray-200 flex items-center justify-between px-8 shadow-sm z-10 flex-shrink-0">
            <div>
                <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">Solicitudes de Contacto</h1>
                <p className="text-sm text-gray-500 font-medium">Gestiona a los compradores interesados en tus cultivos.</p>
            </div>
            <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center gap-2 bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-bold border border-blue-100">
                    <span className="material-symbols-outlined text-lg">security</span>
                    PAM no procesa pagos. Negocia con precaución.
                </div>
                <button className="w-12 h-12 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-600 relative">
                <span className="material-symbols-outlined text-3xl">notifications</span>
                <span className="absolute top-2 right-2 w-3 h-3 bg-red-500 border-2 border-white rounded-full"></span>
                </button>
            </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6 lg:p-10">
            {/* Disclaimer Banner */}
            <div className="bg-white border-l-4 border-primary p-4 rounded-r-xl shadow-sm mb-8 flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-2xl mt-0.5">verified</span>
                <div>
                    <h3 className="font-bold text-gray-900">Modelo de Conexión Segura</h3>
                    <p className="text-sm text-gray-600">
                        PAM conecta productores verificados con compradores reales. <span className="font-bold">El acuerdo económico y el pago suceden fuera de la plataforma</span> para tu seguridad. Utiliza este panel para compartir tus datos de contacto solo con compradores serios.
                    </p>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-4 mb-6 border-b border-gray-200 pb-1 overflow-x-auto">
                <button className="px-6 py-3 rounded-t-xl bg-white border-b-2 border-primary text-primary font-bold text-lg shadow-sm whitespace-nowrap">Nuevos Interesados</button>
                <button className="px-6 py-3 rounded-t-xl text-gray-500 hover:text-gray-700 hover:bg-gray-50 font-bold text-lg transition-colors whitespace-nowrap">En Negociación</button>
                <button className="px-6 py-3 rounded-t-xl text-gray-500 hover:text-gray-700 hover:bg-gray-50 font-bold text-lg transition-colors whitespace-nowrap">Historial</button>
            </div>

            {/* Leads Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 pb-10">
                
                {/* Lead 1 */}
                <article className="bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-all p-6 flex flex-col gap-6 relative group">
                    <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                             <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-lg">SM</div>
                             <div>
                                <h3 className="text-lg font-black text-gray-900 leading-tight">Supermercados MX</h3>
                                <p className="text-xs font-bold text-gray-400 uppercase">Comprador Verificado</p>
                             </div>
                        </div>
                        <span className="inline-flex items-center gap-1.5 bg-green-100 text-green-800 px-3 py-1.5 rounded-full font-bold border border-green-200 shadow-sm text-xs">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Nuevo Mensaje
                        </span>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                        <p className="text-gray-600 text-sm italic mb-2">"Hola, estamos interesados en su producción de Aguacate Hass para la temporada de Diciembre. Requerimos certificado SENASICA vigente."</p>
                        <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-200">
                            <span className="material-symbols-outlined text-primary">nutrition</span>
                            <span className="text-sm font-bold text-gray-800">Interés: 10 Toneladas / Aguacate Hass</span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                        <button className="flex-1 bg-primary hover:bg-primary-hover text-white py-3 px-4 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined">chat</span> Responder & Negociar
                        </button>
                        <button className="flex-1 bg-white border-2 border-gray-200 text-gray-700 hover:border-gray-400 py-3 px-4 rounded-xl font-bold text-sm transition-colors flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined">visibility</span> Ver Perfil Comprador
                        </button>
                    </div>
                </article>

                {/* Lead 2 */}
                <article className="bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-all p-6 flex flex-col gap-6 relative group">
                    <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                             <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-700 font-bold text-lg">FB</div>
                             <div>
                                <h3 className="text-lg font-black text-gray-900 leading-tight">Frutería "El Buen Sabor"</h3>
                                <p className="text-xs font-bold text-gray-400 uppercase">Comercio Local</p>
                             </div>
                        </div>
                        <span className="inline-flex items-center gap-1.5 bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full font-bold border border-gray-200 shadow-sm text-xs">
                            Hace 2 horas
                        </span>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                        <p className="text-gray-600 text-sm italic mb-2">"Busco proveedor de Limón Persa constante. ¿Tienen disponibilidad para entregas semanales en Morelia?"</p>
                        <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-200">
                            <span className="material-symbols-outlined text-green-600">eco</span>
                            <span className="text-sm font-bold text-gray-800">Interés: 500kg Semanales / Limón</span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                         <button className="flex-1 bg-primary hover:bg-primary-hover text-white py-3 px-4 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined">chat</span> Responder & Negociar
                        </button>
                        <button className="flex-1 bg-white border-2 border-gray-200 text-gray-700 hover:border-gray-400 py-3 px-4 rounded-xl font-bold text-sm transition-colors flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined">visibility</span> Ver Perfil Comprador
                        </button>
                    </div>
                </article>

                {/* Lead 3 */}
                <article className="bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-all p-6 flex flex-col gap-6 relative group">
                    <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                             <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-bold text-lg">EX</div>
                             <div>
                                <h3 className="text-lg font-black text-gray-900 leading-tight">Exportadora del Bajío</h3>
                                <p className="text-xs font-bold text-gray-400 uppercase">Comprador Certificado</p>
                             </div>
                        </div>
                         <span className="inline-flex items-center gap-1.5 bg-yellow-100 text-yellow-800 px-3 py-1.5 rounded-full font-bold border border-yellow-200 shadow-sm text-xs">
                            Datos Compartidos
                        </span>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                        <div className="flex items-center gap-2 text-primary font-bold mb-2 text-sm">
                            <span className="material-symbols-outlined text-lg">check_circle</span>
                            Has compartido tu contacto
                        </div>
                        <p className="text-gray-600 text-sm italic">"Esperando contacto directo por llamada telefónica para definir logística de recolección."</p>
                        <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-200">
                            <span className="material-symbols-outlined text-red-700">nutrition</span>
                            <span className="text-sm font-bold text-gray-800">Interés: Cosecha Completa / Berries</span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                        <button className="flex-1 bg-[#f3f3f1] text-gray-400 py-3 px-4 rounded-xl font-bold text-sm cursor-not-allowed flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined">lock</span> Datos Enviados
                        </button>
                         <button className="flex-1 bg-white border-2 border-gray-200 text-gray-700 hover:border-gray-400 py-3 px-4 rounded-xl font-bold text-sm transition-colors flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined">call_log</span> Registrar Llamada
                        </button>
                    </div>
                </article>

            </div>
        </div>
      </main>
    </div>
  );
};

export default Orders;