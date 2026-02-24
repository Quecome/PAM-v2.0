import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { producersData } from '../../data/producers';

const ProducerDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const producer = producersData.find(p => p.id === Number(id));

    if (!producer) {
        return (
            <div className="bg-background-light min-h-screen flex flex-col">
                <Navbar />
                <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                    <span className="material-symbols-outlined text-6xl text-gray-300 mb-4">person_search</span>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Productor no encontrado</h2>
                    <p className="text-gray-500">El productor que buscas no existe en nuestro directorio.</p>
                </div>
            </div>
        );
    }

    // Generate bio based on producer data
    const bioText = `Somos una familia dedicada al cultivo de ${producer.product} de alta calidad en las tierras fértiles de ${producer.location}. Con ${producer.years.toLowerCase()} de tradición en PAM, nuestra producción combina técnicas ancestrales con tecnología moderna para garantizar un producto resistente y con el sabor auténtico de Michoacán.`;

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen pb-44 sm:pb-32 flex flex-col">
            <Navbar />

            {/* Hero Section */}
            <div className="w-full relative h-[300px] sm:h-[400px] md:h-[500px] bg-[#1d1d15]">
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${producer.image}')` }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="relative max-w-7xl mx-auto px-4 md:px-10 h-full flex flex-col justify-end pb-8 sm:pb-12">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary/90 backdrop-blur text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4">
                                <span className="material-symbols-outlined text-[16px]">verified</span> Identidad Verificada
                            </div>
                            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-2">{producer.name}</h1>
                            <div className="flex items-center gap-2 text-white/90">
                                <span className="material-symbols-outlined text-[20px]">location_on</span>
                                <h2 className="text-base sm:text-lg md:text-xl font-medium">{producer.location}</h2>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <button onClick={() => { navigator.clipboard?.writeText(window.location.href); alert('¡Link copiado al portapapeles!'); }} className="bg-white/10 hover:bg-white/20 backdrop-blur border border-white/30 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium transition-all flex items-center gap-2 text-sm sm:text-base">
                                <span className="material-symbols-outlined">share</span> Compartir
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Container */}
            <div className="w-full max-w-7xl px-4 md:px-10 py-8 sm:py-10 flex flex-col lg:flex-row gap-8 sm:gap-12 mx-auto">

                {/* Left Column: Story & Details */}
                <div className="flex-1 flex flex-col gap-8 sm:gap-12">
                    {/* Chips */}
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                        <div className="flex items-center gap-2 bg-white border border-[#e5e7eb] px-3 sm:px-4 py-2 rounded-full shadow-sm">
                            <span className="material-symbols-outlined text-primary text-lg sm:text-base">workspace_premium</span>
                            <span className="text-xs sm:text-sm font-medium">{producer.years}</span>
                        </div>
                        {producer.certifications.map(cert => (
                            <div key={cert} className="flex items-center gap-2 bg-white border border-[#e5e7eb] px-3 sm:px-4 py-2 rounded-full shadow-sm">
                                <span className="material-symbols-outlined text-primary text-lg sm:text-base">eco</span>
                                <span className="text-xs sm:text-sm font-medium">{cert}</span>
                            </div>
                        ))}
                        <div className="flex items-center gap-2 bg-white border border-[#e5e7eb] px-3 sm:px-4 py-2 rounded-full shadow-sm">
                            <span className="material-symbols-outlined text-primary text-lg sm:text-base">star</span>
                            <span className="text-xs sm:text-sm font-medium">{producer.rating} / 5.0</span>
                        </div>
                    </div>

                    {/* Bio */}
                    <section>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#161613] mb-4">Sobre Nosotros</h3>
                        <div className="prose prose-lg text-[#4a4a44]">
                            <p className="leading-relaxed text-base sm:text-lg">
                                {bioText}
                            </p>
                            <p className="mt-4 leading-relaxed text-base sm:text-lg">
                                Nos enorgullece contar con certificaciones que avalan nuestras prácticas responsables con el medio ambiente y la comunidad.
                            </p>
                        </div>
                    </section>

                    {/* Gallery */}
                    <section>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#161613] mb-4 sm:mb-6">Galería de Cultivos</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 h-auto sm:h-96">
                            <div className="sm:col-span-2 sm:row-span-2 relative rounded-xl overflow-hidden group h-64 sm:h-auto">
                                <img src={producer.image} alt={producer.product} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" onError={(e) => { (e.target as HTMLImageElement).src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect fill="%23e5e7eb" width="400" height="300"/><text fill="%239ca3af" font-size="18" x="50%" y="50%" text-anchor="middle" dy=".3em">Imagen no disponible</text></svg>'; }} />
                            </div>
                        </div>
                    </section>
                </div>

                {/* Right Column: Critical Data */}
                <div className="w-full lg:w-[400px] shrink-0 flex flex-col gap-6">

                    {/* Capacity Card */}
                    <div className="bg-earth/40 rounded-2xl p-5 sm:p-6 lg:p-8 flex flex-col gap-6">
                        <div>
                            <h3 className="text-lg sm:text-xl font-bold text-[#161613] mb-1">Capacidad Productiva</h3>
                            <p className="text-xs sm:text-sm text-[#5d5d55]">Producto principal: {producer.product}</p>
                        </div>
                        <div className="bg-white/60 rounded-xl p-4 sm:p-5 shadow-sm border border-white/40">
                            <div className="flex justify-between items-end mb-2">
                                <span className="text-base sm:text-lg font-bold text-[#161613]">{producer.product}</span>
                                <span className={`text-xs font-semibold px-2 py-1 rounded ${producer.availabilityValue === 'none' ? 'bg-gray-200 text-gray-600' : 'bg-primary/10 text-primary'}`}>{producer.statusText}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-[#5d5d55] mt-3">
                                <span className="material-symbols-outlined text-[18px]">trending_up</span>
                                <span>Disponibilidad: <strong className={producer.availabilityColor}>{producer.availabilityText}</strong></span>
                            </div>
                            <div className="mt-3 flex items-center gap-2 text-sm text-[#5d5d55]">
                                <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                                <span>Categoría: {producer.category}</span>
                            </div>
                        </div>
                    </div>

                    {/* Certifications Card */}
                    <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#e5e7eb] shadow-sm">
                        <h3 className="text-base sm:text-lg font-bold text-[#161613] mb-4">Certificaciones</h3>
                        <div className="flex flex-col gap-3">
                            {producer.certifications.map(cert => (
                                <div key={cert} className="flex items-center gap-4 p-3 rounded-lg hover:bg-background-light transition-colors group">
                                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700">
                                        <span className="material-symbols-outlined">verified_user</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm text-[#161613]">{cert}</p>
                                        <p className="text-xs text-[#7f806b]">Verificado por PAM</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Sticky Interaction Footer */}
            <div className="fixed bottom-0 left-0 w-full bg-white border-t border-[#e5e7eb] p-3 sm:p-4 lg:px-10 z-30 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
                <div className="max-w-7xl mx-auto">
                    {/* Security Disclaimer */}
                    <div className="mb-3 sm:mb-4 flex items-center justify-center gap-2 text-[11px] sm:text-xs md:text-sm text-gray-500 bg-gray-50 py-1.5 sm:py-2 rounded-lg border border-gray-100">
                        <span className="material-symbols-outlined text-[16px] sm:text-[18px] text-primary">security</span>
                        <span><span className="font-bold">Nota:</span> PAM conecta personas. El pago y la entrega se acuerdan directamente.</span>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
                        <div className="hidden md:flex flex-col">
                            <span className="text-xs text-[#7f806b] font-medium uppercase tracking-wider">Trato Directo</span>
                            <span className="text-sm font-medium text-[#161613]">Sin comisiones ni intermediarios.</span>
                        </div>
                        <div className="flex items-stretch gap-3 sm:gap-4 w-full sm:w-auto">
                            <button className="flex-1 sm:flex-none min-w-0 sm:min-w-[280px] h-12 sm:h-14 bg-primary hover:bg-[#7a7e32] text-white rounded-xl font-bold text-sm sm:text-lg shadow-lg shadow-primary/30 flex items-center justify-center gap-2 sm:gap-3 transition-all active:scale-95">
                                <span className="material-symbols-outlined text-[20px] sm:text-[24px]">chat</span> Negociar por WhatsApp
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProducerDetail;