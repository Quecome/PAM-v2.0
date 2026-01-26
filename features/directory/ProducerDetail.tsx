import React from 'react';
import Navbar from '../../components/Navbar';

const ProducerDetail: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen pb-32 flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="w-full relative h-[500px] bg-[#1d1d15]">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC8joize9ljXhsid6DeUnELFJK0L_xXrjiEA84YNOYyiyL9wRHceuSYdtUEeG9uGoiza2-OxV7crEwxoXQSz0BcrlnC8G7ck2MZQkKxIApFJxpdw7SjmLuVJjkhQt70aISwySRCZfyJ2vpG6RqQG9bCLkwQ6Rp_rxPW6RPdbahTqRKUG99IvbDYwFACVSNaFYkjIotvl7EJmqPzPszffS6f0kDAaUhPyQ_gWf3ZpN9kiSeH2e5CbH2aHzwk-fGVcvOq_YruPP43-2zr')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-10 h-full flex flex-col justify-end pb-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <div className="inline-flex items-center gap-2 bg-primary/90 backdrop-blur text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                        <span className="material-symbols-outlined text-[16px]">verified</span> Identidad Verificada
                    </div>
                    <h1 className="text-white text-5xl md:text-6xl font-black tracking-tight mb-2">Roberto Mendoza</h1>
                    <div className="flex items-center gap-2 text-white/90">
                        <span className="material-symbols-outlined text-[20px]">location_on</span>
                        <h2 className="text-lg md:text-xl font-medium">Uruapan, Michoacán</h2>
                    </div>
                </div>
                 <div className="flex gap-3">
                    <button className="bg-white/10 hover:bg-white/20 backdrop-blur border border-white/30 text-white px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2">
                        <span className="material-symbols-outlined">share</span> Compartir
                    </button>
                    <button className="bg-white text-[#161613] hover:bg-gray-100 px-6 py-3 rounded-lg font-bold transition-all flex items-center gap-2 shadow-lg">
                        <span className="material-symbols-outlined">favorite</span> Guardar
                    </button>
                </div>
            </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="w-full max-w-7xl px-4 md:px-10 py-10 flex flex-col lg:flex-row gap-12 mx-auto">
        
        {/* Left Column: Story & Details */}
        <div className="flex-1 flex flex-col gap-12">
            {/* Chips */}
            <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-white border border-[#e5e7eb] px-4 py-2 rounded-full shadow-sm">
                    <span className="material-symbols-outlined text-primary">workspace_premium</span>
                    <span className="text-sm font-medium">5 Años Activo</span>
                </div>
                <div className="flex items-center gap-2 bg-white border border-[#e5e7eb] px-4 py-2 rounded-full shadow-sm">
                    <span className="material-symbols-outlined text-primary">eco</span>
                    <span className="text-sm font-medium">Agricultura Sustentable</span>
                </div>
                <div className="flex items-center gap-2 bg-white border border-[#e5e7eb] px-4 py-2 rounded-full shadow-sm">
                    <span className="material-symbols-outlined text-primary">local_shipping</span>
                    <span className="text-sm font-medium">Exportación Disponible</span>
                </div>
            </div>

            {/* Bio */}
            <section>
                <h3 className="text-2xl font-bold text-[#161613] mb-4">Sobre Nosotros</h3>
                <div className="prose prose-lg text-[#4a4a44]">
                    <p className="leading-relaxed text-lg">
                        Somos una familia dedicada al cultivo de aguacate Hass de alta calidad en las tierras volcánicas de Uruapan. Con más de 30 años de tradición, nuestra huerta "El Sol Naciente" combina técnicas ancestrales con tecnología moderna de riego para garantizar un fruto cremoso, resistente y con el sabor auténtico de Michoacán.
                    </p>
                    <p className="mt-4 leading-relaxed text-lg">
                        Nos enorgullece contar con certificaciones internacionales que avalan nuestras prácticas responsables con el medio ambiente y la comunidad.
                    </p>
                </div>
            </section>

             {/* Gallery */}
            <section>
                <h3 className="text-2xl font-bold text-[#161613] mb-6">Galería de Cultivos</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-96">
                    <div className="col-span-2 row-span-2 relative rounded-xl overflow-hidden group">
                         <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAOBumS-su3Qzb40dK0oNyHiACQuv1bYIfdrwwYFXa-6_vdSUDyjasolUVhB9e4thceLC29d-AGSG4a30IubjLHg8xxTJSX5pNMN2gIOpJeY_M9B_nd1IE6gvFdgVFVBn542vD90zvUpuLh--VZ8CvODm4hzOIsCGZAM2yF75msBNeYM0_XYbxlwWBDvtaMNvIPQUeAT1a8KjeE1E6xGyZXm8VwVLn_YBVaAglxucbo4t0W16c7G_LPqZqzCw2Rz_RMhqZseNIivXuM')" }}></div>
                    </div>
                    <div className="relative rounded-xl overflow-hidden group">
                         <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB0TRgM-hFRtAqkLB2zQI9g2Ci0O1iIRsIHNcSl-O403TOAiyPmJSvZO-N9bXHPnTE-Ck6mFS_CN20P6s3_ipoZeVu3UGg62ISTmCUGmhWM7WnDicZfJtUxdKSIAcopayg8GgHD8eVJJTPzTp74vpgPYYc_22JFcLQ-Efu-WeDgpRHXDjglW-er9l8Z8gClUs8LfaGdmcRUITtU0TwEVtemfU5NEHn3JwCvzfEARAM8X3MUJ2xZUNwchOkgOhRkNzQs3zD0-dSwT7TH')" }}></div>
                    </div>
                     <div className="relative rounded-xl overflow-hidden group">
                         <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCkyOwljmG8k7ln5S5TGNUUBYINiFZUClezsBGUAUnbu6f-ct7ucI6_ZEJJ6o8Uc6mE9Ug_IF7McP66UUjN7LercNULq09aaRNgvIXwKo02s-CPnuJHtoLta37pDUACds85Azr_SfFvRxLY3Bkwgqo4kyGBPgowBxJ13LQb2mlyz1udr_fR-otlA0B2XU2wj6oKJM9dbTKTqspRcROeXWlKPYZ6sQld_tL7-2N7sa0I1naXHTK8eVGy5Jg8UIyWH-F9IDDPUt2XxZEj')" }}></div>
                    </div>
                </div>
            </section>
        </div>

        {/* Right Column: Critical Data */}
        <div className="w-full lg:w-[400px] shrink-0 flex flex-col gap-6">
            
            {/* Capacity Card */}
            <div className="bg-earth/40 rounded-2xl p-6 lg:p-8 flex flex-col gap-6">
                <div>
                    <h3 className="text-xl font-bold text-[#161613] mb-1">Capacidad Productiva</h3>
                    <p className="text-sm text-[#5d5d55]">Actualizado: Hoy, 09:00 AM</p>
                </div>
                <div className="bg-white/60 rounded-xl p-5 shadow-sm border border-white/40">
                    <div className="flex justify-between items-end mb-2">
                        <span className="text-lg font-bold text-[#161613]">Aguacate Hass</span>
                        <span className="text-xs font-semibold bg-primary/10 text-primary px-2 py-1 rounded">Disponible</span>
                    </div>
                    <div className="flex items-end gap-1 mb-3">
                        <span className="text-4xl font-black text-primary">12</span>
                        <span className="text-sm font-medium text-[#5d5d55] mb-1.5">/ 40 Toneladas</span>
                    </div>
                    <div className="w-full h-3 bg-[#e3e3de] rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: "30%" }}></div>
                    </div>
                     <div className="mt-4 flex items-center gap-2 text-sm text-[#5d5d55]">
                        <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                        <span>Temporada: Octubre - Febrero</span>
                    </div>
                </div>
                 <div className="bg-white/60 rounded-xl p-5 shadow-sm border border-white/40 opacity-75">
                    <div className="flex justify-between items-end mb-2">
                        <span className="text-lg font-bold text-[#161613]">Aguacate Méndez</span>
                        <span className="text-xs font-semibold bg-gray-200 text-gray-600 px-2 py-1 rounded">Agotado</span>
                    </div>
                    <div className="w-full h-3 bg-[#e3e3de] rounded-full overflow-hidden">
                        <div className="h-full bg-gray-400 rounded-full" style={{ width: "0%" }}></div>
                    </div>
                </div>
            </div>

            {/* Certifications Card */}
            <div className="bg-white rounded-2xl p-6 border border-[#e5e7eb] shadow-sm">
                <h3 className="text-lg font-bold text-[#161613] mb-4">Certificaciones</h3>
                <div className="flex flex-col gap-4">
                     <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-background-light transition-colors cursor-pointer group">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700">
                             <span className="material-symbols-outlined">verified_user</span>
                        </div>
                        <div>
                            <p className="font-bold text-sm text-[#161613]">GlobalG.A.P.</p>
                            <p className="text-xs text-[#7f806b]">Válido hasta: Dic 2024</p>
                        </div>
                         <span className="material-symbols-outlined ml-auto text-gray-300 group-hover:text-primary">chevron_right</span>
                    </div>
                     <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-background-light transition-colors cursor-pointer group">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700">
                             <span className="material-symbols-outlined">water_drop</span>
                        </div>
                        <div>
                            <p className="font-bold text-sm text-[#161613]">Rainforest Alliance</p>
                            <p className="text-xs text-[#7f806b]">Válido hasta: Nov 2025</p>
                        </div>
                         <span className="material-symbols-outlined ml-auto text-gray-300 group-hover:text-primary">chevron_right</span>
                    </div>
                </div>
            </div>
        </div>
      </div>

       {/* Sticky Interaction Footer */}
       <div className="fixed bottom-0 left-0 w-full bg-white border-t border-[#e5e7eb] p-4 lg:px-10 z-30 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
            <div className="max-w-7xl mx-auto">
                {/* Security Disclaimer */}
                <div className="mb-4 flex items-center justify-center gap-2 text-xs md:text-sm text-gray-500 bg-gray-50 py-2 rounded-lg border border-gray-100">
                    <span className="material-symbols-outlined text-[18px] text-primary">security</span>
                    <span><span className="font-bold">Nota de Seguridad:</span> PAM conecta personas. El pago y la entrega se acuerdan directamente entre ustedes.</span>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                     <div className="hidden md:flex flex-col">
                        <span className="text-xs text-[#7f806b] font-medium uppercase tracking-wider">Trato Directo</span>
                        <span className="text-sm font-medium text-[#161613]">Sin comisiones ni intermediarios.</span>
                     </div>
                     <div className="flex items-stretch gap-4 w-full md:w-auto">
                        <button className="hidden md:flex flex-1 md:flex-none min-w-[160px] items-center justify-center rounded-xl h-14 border-2 border-[#e5e7eb] text-[#161613] font-bold hover:bg-[#f7f8f6] transition-colors gap-2">
                             <span className="material-symbols-outlined">download</span> Ver Catálogo
                        </button>
                        <button className="flex-1 md:flex-none min-w-[280px] h-14 bg-primary hover:bg-[#7a7e32] text-white rounded-xl font-bold text-lg shadow-lg shadow-primary/30 flex items-center justify-center gap-3 transition-all active:scale-95">
                             <span className="material-symbols-outlined text-[24px]">chat</span> Negociar por WhatsApp
                        </button>
                     </div>
                </div>
            </div>
       </div>

    </div>
  );
};

export default ProducerDetail;