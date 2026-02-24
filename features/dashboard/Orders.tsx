import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';

type TabType = 'new' | 'negotiation' | 'history';

interface Lead {
    id: number;
    name: string;
    type: string;
    initials: string;
    initialsColor: string;
    message: string;
    interest: string;
    interestIcon: string;
    interestIconColor: string;
    status: TabType;
    statusLabel: string;
    statusStyle: string;
    sharedContact?: boolean;
}

const leadsData: Lead[] = [
    {
        id: 1, name: "Supermercados MX", type: "Comprador Verificado", initials: "SM", initialsColor: "bg-blue-100 text-blue-700",
        message: '"Hola, estamos interesados en su producción de Aguacate Hass para la temporada de Diciembre. Requerimos certificado SENASICA vigente."',
        interest: "10 Toneladas / Aguacate Hass", interestIcon: "nutrition", interestIconColor: "text-primary",
        status: 'new', statusLabel: "Nuevo Mensaje", statusStyle: "bg-green-100 text-green-800 border-green-200"
    },
    {
        id: 2, name: 'Frutería "El Buen Sabor"', type: "Comercio Local", initials: "FB", initialsColor: "bg-orange-100 text-orange-700",
        message: '"Busco proveedor de Limón Persa constante. ¿Tienen disponibilidad para entregas semanales en Morelia?"',
        interest: "500kg Semanales / Limón", interestIcon: "eco", interestIconColor: "text-green-600",
        status: 'new', statusLabel: "Hace 2 horas", statusStyle: "bg-gray-100 text-gray-600 border-gray-200"
    },
    {
        id: 3, name: "Exportadora del Bajío", type: "Comprador Certificado", initials: "EX", initialsColor: "bg-purple-100 text-purple-700",
        message: '"Esperando contacto directo por llamada telefónica para definir logística de recolección."',
        interest: "Cosecha Completa / Berries", interestIcon: "nutrition", interestIconColor: "text-red-700",
        status: 'negotiation', statusLabel: "Datos Compartidos", statusStyle: "bg-yellow-100 text-yellow-800 border-yellow-200",
        sharedContact: true
    },
];

const Orders: React.FC = () => {
    const [activeTab, setActiveTab] = useState<TabType>('new');

    const filteredLeads = leadsData.filter(lead => lead.status === activeTab);

    const tabs: { key: TabType; label: string; count: number }[] = [
        { key: 'new', label: 'Nuevos Interesados', count: leadsData.filter(l => l.status === 'new').length },
        { key: 'negotiation', label: 'En Negociación', count: leadsData.filter(l => l.status === 'negotiation').length },
        { key: 'history', label: 'Historial', count: leadsData.filter(l => l.status === 'history').length },
    ];

    return (
        <div className="flex h-screen overflow-hidden bg-[#F5F5F5] pt-16 md:pt-0">
            <Sidebar />
            <main className="flex-1 flex flex-col h-screen overflow-hidden">
                <header className="h-auto sm:h-24 bg-white border-b border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 sm:px-8 py-3 sm:py-0 shadow-sm z-10 flex-shrink-0 gap-2 sm:gap-0">
                    <div>
                        <h1 className="text-xl sm:text-3xl font-extrabold text-gray-800 tracking-tight">Solicitudes de Contacto</h1>
                        <p className="text-xs sm:text-sm text-gray-500 font-medium">Gestiona a los compradores interesados en tus cultivos.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="hidden lg:flex items-center gap-2 bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-bold border border-blue-100">
                            <span className="material-symbols-outlined text-lg">security</span>
                            PAM no procesa pagos. Negocia con precaución.
                        </div>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-10">
                    {/* Disclaimer Banner */}
                    <div className="bg-white border-l-4 border-primary p-3 sm:p-4 rounded-r-xl shadow-sm mb-6 sm:mb-8 flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary text-xl sm:text-2xl mt-0.5 flex-shrink-0">verified</span>
                        <div>
                            <h3 className="font-bold text-gray-900 text-sm sm:text-base">Modelo de Conexión Segura</h3>
                            <p className="text-xs sm:text-sm text-gray-600">
                                PAM conecta productores verificados con compradores reales. <span className="font-bold">El acuerdo económico y el pago suceden fuera de la plataforma</span> para tu seguridad.
                            </p>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="flex gap-2 sm:gap-4 mb-6 border-b border-gray-200 pb-1 overflow-x-auto no-scrollbar">
                        {tabs.map(tab => (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-t-xl font-bold text-sm sm:text-lg transition-colors whitespace-nowrap flex items-center gap-2 ${activeTab === tab.key
                                    ? 'bg-white border-b-2 border-primary text-primary shadow-sm'
                                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                                    }`}
                            >
                                {tab.label}
                                {tab.count > 0 && (
                                    <span className={`text-xs px-2 py-0.5 rounded-full ${activeTab === tab.key ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-500'}`}>
                                        {tab.count}
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Leads Grid */}
                    {filteredLeads.length > 0 ? (
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 pb-10">
                            {filteredLeads.map(lead => (
                                <article key={lead.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-all p-4 sm:p-6 flex flex-col gap-4 sm:gap-6 relative group">
                                    <div className="flex justify-between items-start">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${lead.initialsColor} flex items-center justify-center font-bold text-sm sm:text-lg`}>{lead.initials}</div>
                                            <div>
                                                <h3 className="text-base sm:text-lg font-black text-gray-900 leading-tight">{lead.name}</h3>
                                                <p className="text-xs font-bold text-gray-400 uppercase">{lead.type}</p>
                                            </div>
                                        </div>
                                        <span className={`inline-flex items-center gap-1.5 ${lead.statusStyle} px-2 sm:px-3 py-1 sm:py-1.5 rounded-full font-bold border shadow-sm text-[10px] sm:text-xs`}>
                                            {lead.status === 'new' && lead.statusLabel === 'Nuevo Mensaje' && <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>}
                                            {lead.statusLabel}
                                        </span>
                                    </div>

                                    <div className="bg-gray-50 p-3 sm:p-4 rounded-xl border border-gray-100">
                                        {lead.sharedContact && (
                                            <div className="flex items-center gap-2 text-primary font-bold mb-2 text-xs sm:text-sm">
                                                <span className="material-symbols-outlined text-lg">check_circle</span>
                                                Has compartido tu contacto
                                            </div>
                                        )}
                                        <p className="text-gray-600 text-xs sm:text-sm italic mb-2">{lead.message}</p>
                                        <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-200">
                                            <span className={`material-symbols-outlined ${lead.interestIconColor}`}>{lead.interestIcon}</span>
                                            <span className="text-xs sm:text-sm font-bold text-gray-800">Interés: {lead.interest}</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                                        {!lead.sharedContact ? (
                                            <>
                                                <button className="flex-1 bg-primary hover:bg-primary-hover text-white py-2.5 sm:py-3 px-4 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2">
                                                    <span className="material-symbols-outlined text-lg">chat</span> Responder & Negociar
                                                </button>
                                                <button className="flex-1 bg-white border-2 border-gray-200 text-gray-700 hover:border-gray-400 py-2.5 sm:py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2">
                                                    <span className="material-symbols-outlined text-lg">visibility</span> Ver Perfil
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                <button className="flex-1 bg-[#f3f3f1] text-gray-400 py-2.5 sm:py-3 px-4 rounded-xl font-bold text-xs sm:text-sm cursor-not-allowed flex items-center justify-center gap-2">
                                                    <span className="material-symbols-outlined text-lg">lock</span> Datos Enviados
                                                </button>
                                                <button className="flex-1 bg-white border-2 border-gray-200 text-gray-700 hover:border-gray-400 py-2.5 sm:py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2">
                                                    <span className="material-symbols-outlined text-lg">call_log</span> Registrar Llamada
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-20 text-center">
                            <div className="bg-gray-100 p-6 rounded-full mb-4">
                                <span className="material-symbols-outlined text-4xl text-gray-400">inbox</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Sin solicitudes en esta categoría</h3>
                            <p className="text-gray-500">Las solicitudes aparecerán aquí cuando los compradores se interesen en tus cultivos.</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default Orders;