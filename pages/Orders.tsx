import React from 'react';
import Sidebar from '../components/Sidebar';

const Orders: React.FC = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-[#F5F5F5]">
      <Sidebar />
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <header className="h-24 bg-white border-b border-gray-200 flex items-center justify-between px-8 shadow-sm z-10 flex-shrink-0">
            <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">Mis Pedidos</h1>
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
            {/* Tabs */}
            <div className="flex gap-4 mb-8 border-b border-gray-200 pb-1 overflow-x-auto">
                <button className="px-8 py-3 rounded-t-xl bg-white border-b-2 border-primary text-primary font-bold text-lg shadow-sm">Pendientes</button>
                <button className="px-8 py-3 rounded-t-xl text-gray-500 hover:text-gray-700 hover:bg-gray-50 font-bold text-lg transition-colors">En Camino</button>
                <button className="px-8 py-3 rounded-t-xl text-gray-500 hover:text-gray-700 hover:bg-gray-50 font-bold text-lg transition-colors">Completados</button>
            </div>

            {/* Filters */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <div className="relative max-w-md w-full">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-gray-400 text-2xl">search</span>
                </span>
                <input className="block w-full pl-12 pr-4 py-4 rounded-xl border-gray-300 shadow-sm focus:border-primary focus:ring-primary text-lg" placeholder="Buscar pedido por ID o Comprador..." type="text"/>
                </div>
                <div className="flex gap-4">
                <button className="bg-white hover:bg-gray-50 text-gray-700 px-6 py-4 rounded-xl border border-gray-200 shadow-sm transition-colors flex items-center gap-2 font-bold text-lg">
                    <span className="material-symbols-outlined">filter_list</span> Filtrar
                </button>
                </div>
            </div>

            {/* Orders Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 pb-10">
                
                {/* Order 1 */}
                <article className="bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-all p-6 flex flex-col gap-6 relative">
                    <div className="flex justify-between items-start">
                        <div>
                            <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Número de Pedido</span>
                            <h3 className="text-4xl font-black text-gray-900 mt-1">#ORD-3920</h3>
                        </div>
                        <span className="inline-flex items-center gap-1.5 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-bold border border-yellow-200 shadow-sm">
                            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span> Pendiente
                        </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                        <div>
                            <p className="text-sm text-gray-500 font-medium mb-1">Comprador</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">SM</div>
                                <p className="text-xl font-bold text-gray-900">Supermercados MX</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium mb-1">Fecha de Entrega</p>
                            <p className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                <span className="material-symbols-outlined text-gray-400">calendar_today</span> 28 Nov, 2023
                            </p>
                        </div>
                        <div className="md:col-span-2 bg-gray-50 p-4 rounded-xl border border-gray-100">
                            <p className="text-sm text-gray-500 font-medium mb-2">Producto Solicitado</p>
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary text-3xl">nutrition</span>
                                <p className="text-2xl font-bold text-gray-800">10 Toneladas de Aguacate Hass</p>
                            </div>
                            <p className="text-sm text-gray-500 mt-1 ml-10">Calidad Exportación • Empaque Estándar</p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 mt-2 pt-4 border-t border-gray-100">
                        <button className="flex-1 bg-primary hover:bg-primary-hover text-white py-4 rounded-xl font-bold text-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined">check_circle</span> Aceptar Pedido
                        </button>
                        <button className="flex-1 bg-white border-2 border-gray-200 text-gray-700 hover:border-primary hover:text-primary py-4 rounded-xl font-bold text-lg transition-colors">
                            Ver Detalles
                        </button>
                    </div>
                </article>

                {/* Order 2 */}
                <article className="bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-all p-6 flex flex-col gap-6 relative">
                    <div className="flex justify-between items-start">
                        <div>
                            <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Número de Pedido</span>
                            <h3 className="text-4xl font-black text-gray-900 mt-1">#ORD-3921</h3>
                        </div>
                         <span className="inline-flex items-center gap-1.5 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-bold border border-yellow-200 shadow-sm">
                            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span> Pendiente
                        </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                        <div>
                            <p className="text-sm text-gray-500 font-medium mb-1">Comprador</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-700 font-bold">FB</div>
                                <p className="text-xl font-bold text-gray-900">Frutería "El Buen Sabor"</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium mb-1">Fecha de Entrega</p>
                            <p className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                <span className="material-symbols-outlined text-gray-400">calendar_today</span> 02 Dic, 2023
                            </p>
                        </div>
                         <div className="md:col-span-2 bg-gray-50 p-4 rounded-xl border border-gray-100">
                            <p className="text-sm text-gray-500 font-medium mb-2">Producto Solicitado</p>
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-green-600 text-3xl">eco</span>
                                <p className="text-2xl font-bold text-gray-800">5 Toneladas de Limón Persa</p>
                            </div>
                            <p className="text-sm text-gray-500 mt-1 ml-10">Calidad Nacional • Malla de 1kg</p>
                        </div>
                    </div>
                     <div className="flex flex-col sm:flex-row gap-4 mt-2 pt-4 border-t border-gray-100">
                        <button className="flex-1 bg-primary hover:bg-primary-hover text-white py-4 rounded-xl font-bold text-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined">check_circle</span> Aceptar Pedido
                        </button>
                        <button className="flex-1 bg-white border-2 border-gray-200 text-gray-700 hover:border-primary hover:text-primary py-4 rounded-xl font-bold text-lg transition-colors">
                            Ver Detalles
                        </button>
                    </div>
                </article>

                {/* Order 3 */}
                <article className="bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-all p-6 flex flex-col gap-6 relative">
                    <div className="flex justify-between items-start">
                        <div>
                            <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Número de Pedido</span>
                            <h3 className="text-4xl font-black text-gray-900 mt-1">#ORD-3895</h3>
                        </div>
                         <span className="inline-flex items-center gap-1.5 bg-red-100 text-red-800 px-4 py-2 rounded-full font-bold border border-red-200 shadow-sm">
                            <span className="material-symbols-outlined text-lg">priority_high</span> Urgente
                        </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                        <div>
                            <p className="text-sm text-gray-500 font-medium mb-1">Comprador</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-bold">EX</div>
                                <p className="text-xl font-bold text-gray-900">Exportadora del Bajío</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium mb-1">Fecha de Entrega</p>
                             <p className="text-xl font-bold text-red-700 flex items-center gap-2">
                                <span className="material-symbols-outlined">warning</span> Mañana
                            </p>
                        </div>
                         <div className="md:col-span-2 bg-gray-50 p-4 rounded-xl border border-gray-100">
                            <p className="text-sm text-gray-500 font-medium mb-2">Producto Solicitado</p>
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-red-800 text-3xl">nutrition</span>
                                <p className="text-2xl font-bold text-gray-800">2 Toneladas de Berries Mix</p>
                            </div>
                            <p className="text-sm text-gray-500 mt-1 ml-10">Zarzamora y Frambuesa • Clamshell 6oz</p>
                        </div>
                    </div>
                     <div className="flex flex-col sm:flex-row gap-4 mt-2 pt-4 border-t border-gray-100">
                        <button className="flex-1 bg-primary hover:bg-primary-hover text-white py-4 rounded-xl font-bold text-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined">check_circle</span> Aceptar Pedido
                        </button>
                        <button className="flex-1 bg-white border-2 border-gray-200 text-gray-700 hover:border-primary hover:text-primary py-4 rounded-xl font-bold text-lg transition-colors">
                            Ver Detalles
                        </button>
                    </div>
                </article>

                 {/* Order 4 (Draft) */}
                 <article className="bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-all p-6 flex flex-col gap-6 relative opacity-60">
                     <div className="absolute inset-0 bg-white/50 z-10 flex items-center justify-center backdrop-blur-[1px]">
                        <span className="bg-gray-800 text-white px-6 py-2 rounded-full font-bold shadow-lg">Revisión Pendiente</span>
                    </div>
                    <div className="flex justify-between items-start">
                        <div>
                            <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Número de Pedido</span>
                            <h3 className="text-4xl font-black text-gray-900 mt-1">#ORD-3922</h3>
                        </div>
                         <span className="inline-flex items-center gap-1.5 bg-gray-100 text-gray-600 px-4 py-2 rounded-full font-bold border border-gray-200 shadow-sm">
                            <span className="w-2.5 h-2.5 rounded-full bg-gray-400"></span> Borrador
                        </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                         <div>
                            <p className="text-sm text-gray-500 font-medium mb-1">Comprador</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold">--</div>
                                <p className="text-xl font-bold text-gray-900">Cliente Potencial</p>
                            </div>
                        </div>
                         <div>
                            <p className="text-sm text-gray-500 font-medium mb-1">Fecha de Entrega</p>
                            <p className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                <span className="material-symbols-outlined text-gray-400">calendar_today</span> --/--/----
                            </p>
                        </div>
                    </div>
                     <div className="flex flex-col sm:flex-row gap-4 mt-2 pt-4 border-t border-gray-100">
                        <button className="flex-1 bg-gray-200 text-gray-400 py-4 rounded-xl font-bold text-lg cursor-not-allowed">Aceptar Pedido</button>
                        <button className="flex-1 bg-white border-2 border-gray-200 text-gray-400 py-4 rounded-xl font-bold text-lg cursor-not-allowed">Ver Detalles</button>
                    </div>
                 </article>
            </div>
        </div>
      </main>
    </div>
  );
};

export default Orders;