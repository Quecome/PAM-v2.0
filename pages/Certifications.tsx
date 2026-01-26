import React from 'react';
import Navbar from '../components/Navbar';

const Certifications: React.FC = () => {
  return (
    <div className="bg-earth min-h-screen text-[#1d1d15] pb-12 flex flex-col">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
        {/* Hero */}
        <div className="relative w-full rounded-3xl overflow-hidden shadow-xl mb-10 bg-gray-900">
            <div className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-overlay" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCaxDG4zq5IH6QGafKs_aZYpyLr3pXrFHDZTEV1-6bKeH-1aK444XcB1jqE2OH503dYZ0wgNsu8DodrUHApcXC978xDVksDqrG1QAk4egBzVzsCAPCQB1npCL9R4CWnZUPXbhFUWZoEwVM_Bke01IEaQUIHIkzF4Wf-ndn_3S-TbCrON2tJfAwbTg0RqIwfPuxPivpClwucGiYrYYWpYqzq6K6vdB9l9XjI3Bwqao-f0FMN4Te3fft_aLWnwac-DDe-68sXcwgCCGcy')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
            <div className="relative z-10 px-8 py-16 md:py-20 md:px-12 max-w-4xl">
                <div className="flex items-center gap-2 mb-4 text-gold-accent font-bold uppercase tracking-widest text-sm">
                    <span className="material-symbols-outlined text-lg">verified</span>
                    <span>Directorio Oficial</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                    Calidad y Confianza <br/>en Cada Cosecha
                </h1>
                <p className="text-lg text-gray-200 max-w-2xl leading-relaxed">
                    Conoce las certificaciones oficiales que respaldan la inocuidad, sostenibilidad y excelencia de los productos agroalimentarios de Michoacán.
                </p>
            </div>
        </div>

        {/* Search */}
        <div className="relative -mt-16 mx-4 md:mx-12 lg:mx-20 z-20 mb-12">
            <div className="bg-white p-2 rounded-2xl shadow-lg flex items-center">
                <div className="pl-4 text-gray-400">
                    <span className="material-symbols-outlined text-3xl">search</span>
                </div>
                <input className="w-full border-none focus:ring-0 text-lg py-4 px-4 text-gray-700 placeholder:text-gray-400 font-medium" placeholder="Buscar certificación (ej. Orgánico, SENASICA, GlobalG.A.P)..." type="text"/>
                <button className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-xl font-bold text-lg shadow-md transition-all hover:-translate-y-0.5 active:translate-y-0">
                    Buscar
                </button>
            </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-surface-light rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group ring-1 ring-black/5 flex flex-col h-full">
                <div className="h-2 w-full bg-gold-accent"></div>
                <div className="p-8 flex-1 flex flex-col items-start">
                    <div className="w-16 h-16 rounded-2xl bg-gold-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-gold-accent/20">
                        <span className="material-symbols-outlined text-4xl text-yellow-700">security</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">SENASICA</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        Garantía oficial del Gobierno de México sobre la sanidad e inocuidad agroalimentaria. Asegura que los productos están libres de plagas y enfermedades.
                    </p>
                    <div className="mt-auto pt-6 border-t border-gray-100 w-full">
                        <a href="#" className="inline-flex items-center text-primary font-bold hover:text-primary-hover transition-colors">
                            Ver detalles <span className="material-symbols-outlined ml-1 text-lg">arrow_forward</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="bg-surface-light rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group ring-1 ring-black/5 flex flex-col h-full">
                <div className="h-2 w-full bg-gold-accent"></div>
                <div className="p-8 flex-1 flex flex-col items-start">
                    <div className="w-16 h-16 rounded-2xl bg-gold-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-gold-accent/20">
                        <span className="material-symbols-outlined text-4xl text-yellow-700">public</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">GlobalG.A.P.</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        El estándar mundial para las Buenas Prácticas Agrícolas. Garantiza seguridad alimentaria, sostenibilidad ambiental y bienestar de los trabajadores.
                    </p>
                     <div className="mt-auto pt-6 border-t border-gray-100 w-full">
                        <a href="#" className="inline-flex items-center text-primary font-bold hover:text-primary-hover transition-colors">
                            Ver detalles <span className="material-symbols-outlined ml-1 text-lg">arrow_forward</span>
                        </a>
                    </div>
                </div>
            </div>

             <div className="bg-surface-light rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group ring-1 ring-black/5 flex flex-col h-full">
                <div className="h-2 w-full bg-gold-accent"></div>
                <div className="p-8 flex-1 flex flex-col items-start">
                    <div className="w-16 h-16 rounded-2xl bg-gold-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-gold-accent/20">
                        <span className="material-symbols-outlined text-4xl text-yellow-700">eco</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Orgánico Certificado</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                         Cultivo 100% natural libre de pesticidas sintéticos y fertilizantes químicos. Protege la biodiversidad y la salud del consumidor.
                    </p>
                     <div className="mt-auto pt-6 border-t border-gray-100 w-full">
                        <a href="#" className="inline-flex items-center text-primary font-bold hover:text-primary-hover transition-colors">
                            Ver detalles <span className="material-symbols-outlined ml-1 text-lg">arrow_forward</span>
                        </a>
                    </div>
                </div>
            </div>
             <div className="bg-surface-light rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group ring-1 ring-black/5 flex flex-col h-full">
                <div className="h-2 w-full bg-gold-accent"></div>
                <div className="p-8 flex-1 flex flex-col items-start">
                    <div className="w-16 h-16 rounded-2xl bg-gold-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-gold-accent/20">
                        <span className="material-symbols-outlined text-4xl text-yellow-700">handshake</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Comercio Justo</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        Asegura condiciones comerciales equitativas y precios justos para los productores locales, fomentando el desarrollo sostenible de la comunidad.
                    </p>
                     <div className="mt-auto pt-6 border-t border-gray-100 w-full">
                        <a href="#" className="inline-flex items-center text-primary font-bold hover:text-primary-hover transition-colors">
                            Ver detalles <span className="material-symbols-outlined ml-1 text-lg">arrow_forward</span>
                        </a>
                    </div>
                </div>
            </div>
            
             <div className="bg-surface-light rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group ring-1 ring-black/5 flex flex-col h-full">
                <div className="h-2 w-full bg-gold-accent"></div>
                <div className="p-8 flex-1 flex flex-col items-start">
                    <div className="w-16 h-16 rounded-2xl bg-gold-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-gold-accent/20">
                        <span className="material-symbols-outlined text-4xl text-yellow-700">forest</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Rainforest Alliance</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        Certificación enfocada en la conservación de la biodiversidad y medios de vida sostenibles, asegurando agricultura amigable con los bosques.
                    </p>
                     <div className="mt-auto pt-6 border-t border-gray-100 w-full">
                        <a href="#" className="inline-flex items-center text-primary font-bold hover:text-primary-hover transition-colors">
                            Ver detalles <span className="material-symbols-outlined ml-1 text-lg">arrow_forward</span>
                        </a>
                    </div>
                </div>
            </div>
             <div className="bg-surface-light rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group ring-1 ring-black/5 flex flex-col h-full">
                <div className="h-2 w-full bg-gold-accent"></div>
                <div className="p-8 flex-1 flex flex-col items-start">
                    <div className="w-16 h-16 rounded-2xl bg-gold-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-gold-accent/20">
                        <span className="material-symbols-outlined text-4xl text-yellow-700">health_and_safety</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">PrimusGFS</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        Sistema de auditoría reconocido por la GFSI que abarca Buenas Prácticas Agrícolas y de Manufactura para garantizar la seguridad del producto.
                    </p>
                     <div className="mt-auto pt-6 border-t border-gray-100 w-full">
                        <a href="#" className="inline-flex items-center text-primary font-bold hover:text-primary-hover transition-colors">
                            Ver detalles <span className="material-symbols-outlined ml-1 text-lg">arrow_forward</span>
                        </a>
                    </div>
                </div>
            </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
                <h4 className="text-white text-lg font-bold mb-4">PAM</h4>
                <p className="text-sm">Conectando el campo de Michoacán con el mundo a través de la calidad y la confianza.</p>
            </div>
            <div>
                <h4 className="text-white text-lg font-bold mb-4">Enlaces Rápidos</h4>
                <ul className="space-y-2 text-sm">
                    <li><a href="#" className="hover:text-white transition-colors">Directorio</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Productores</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Registro</a></li>
                </ul>
            </div>
             <div>
                <h4 className="text-white text-lg font-bold mb-4">Contacto</h4>
                <p className="text-sm mb-2">contacto@pam.mx</p>
                <div className="flex justify-center md:justify-start gap-4 mt-4">
                    <a href="#" className="hover:text-white"><span className="material-symbols-outlined">mail</span></a>
                    <a href="#" className="hover:text-white"><span className="material-symbols-outlined">call</span></a>
                </div>
            </div>
        </div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-800 text-center text-sm">
            © 2023 Productores Agroalimentarios de Michoacán. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
};

export default Certifications;