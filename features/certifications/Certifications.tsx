import React, { useState } from 'react';
import Navbar from '../../components/Navbar';

interface Certification {
    id: string;
    name: string;
    icon: string;
    summary: string;
    description: string;
    benefits: string[];
    url: string;
    colorClass: string;
}

const certificationsData: Certification[] = [
    {
        id: 'senasica',
        name: 'SENASICA',
        icon: 'security',
        summary: 'Garantía oficial del Gobierno de México sobre la sanidad e inocuidad agroalimentaria.',
        description: 'El Servicio Nacional de Sanidad, Inocuidad y Calidad Agroalimentaria (SENASICA) protege los recursos agrícolas de plagas y enfermedades. La certificación en Sistemas de Reducción de Riesgos de Contaminación (SRRC) es fundamental para la movilización nacional y la exportación.',
        benefits: [
            'Requisito obligatorio para exportar a EE.UU.',
            'Garantiza higiene en cosecha y empaque.',
            'Permite la movilización legal de mercancía en territorio nacional.'
        ],
        url: 'https://www.gob.mx/senasica',
        colorClass: 'text-yellow-700'
    },
    {
        id: 'globalgap',
        name: 'GlobalG.A.P.',
        icon: 'public',
        summary: 'El estándar mundial para las Buenas Prácticas Agrícolas.',
        description: 'GlobalG.A.P. es una norma reconocida internacionalmente dedicada a las Buenas Prácticas Agrícolas (GAP). Es la certificación más solicitada por supermercados en Europa y gran parte del mundo para asegurar que los alimentos se produjeron minimizando el impacto ambiental y con seguridad química.',
        benefits: [
            'Acceso a mercados de la Unión Europea.',
            'Estandarización de procesos productivos.',
            'Enfoque en seguridad y bienestar del trabajador.'
        ],
        url: 'https://www.globalgap.org/',
        colorClass: 'text-blue-700'
    },
    {
        id: 'organico',
        name: 'Orgánico (LPO)',
        icon: 'eco',
        summary: 'Cultivo 100% natural libre de pesticidas sintéticos y fertilizantes químicos.',
        description: 'La certificación bajo la Ley de Productos Orgánicos (LPO) en México (y sus equivalentes NOP para USA) garantiza que el producto se cultivó sin uso de químicos sintéticos, OGM o aguas residuales. Requiere un periodo de transición de suelo de hasta 3 años.',
        benefits: [
            'Acceso a un mercado con precios premium.',
            'Protección de la biodiversidad del suelo.',
            'Producto más saludable para el consumidor final.'
        ],
        url: 'https://www.gob.mx/agricultura/acciones-y-programas/ley-de-productos-organicos',
        colorClass: 'text-green-700'
    },
    {
        id: 'comercio_justo',
        name: 'Fair Trade',
        icon: 'handshake',
        summary: 'Asegura condiciones comerciales equitativas y precios justos.',
        description: 'Fair Trade Certified™ es un modelo de comercio sostenible que prioriza a las personas. Garantiza que los agricultores reciban un precio mínimo por su producto que los proteja de fluctuaciones del mercado, además de una prima adicional para inversión comunitaria.',
        benefits: [
            'Precio mínimo garantizado para el productor.',
            'Fondos para desarrollo comunitario (escuelas, salud).',
            'Prohibición de trabajo infantil y forzoso.'
        ],
        url: 'https://www.fairtrade.net/',
        colorClass: 'text-teal-700'
    },
    {
        id: 'rainforest',
        name: 'Rainforest Alliance',
        icon: 'forest',
        summary: 'Enfocada en conservación de la biodiversidad y medios de vida sostenibles.',
        description: 'El sello de la ranita verde indica que una finca ha sido auditada para cumplir con normas de sostenibilidad ambiental, social y económica. Se enfoca fuertemente en la no deforestación, conservación de agua y protección de la vida silvestre nativa.',
        benefits: [
            'Liderazgo en conservación ambiental.',
            'Mejor gestión de residuos y agua en la finca.',
            'Alta demanda en mercados conscientes del clima.'
        ],
        url: 'https://www.rainforest-alliance.org/',
        colorClass: 'text-green-800'
    },
    {
        id: 'primus',
        name: 'PrimusGFS',
        icon: 'health_and_safety',
        summary: 'Sistema de auditoría reconocido por la GFSI para seguridad del producto.',
        description: 'PrimusGFS es un esquema de auditoría reconocido por la Iniciativa Mundial de Seguridad Alimentaria (GFSI). Cubre Buenas Prácticas Agrícolas (GAP) y Buenas Prácticas de Manufactura (GMP), siendo vital para vender a grandes cadenas de retail en Norteamérica.',
        benefits: [
            'Reconocimiento GFSI (estándar de oro en inocuidad).',
            'Aceptado por Costco, Walmart y grandes cadenas.',
            'Auditoría integral desde campo hasta empaque.'
        ],
        url: 'https://primusgfs.com/',
        colorClass: 'text-indigo-700'
    }
];

const Certifications: React.FC = () => {
    const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    const normalizeText = (text: string) => text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    const filteredCerts = certificationsData.filter(cert => {
        if (!searchTerm) return true;
        const q = normalizeText(searchTerm);
        return normalizeText(cert.name).includes(q) || normalizeText(cert.summary).includes(q);
    });

    return (
        <div className="bg-earth min-h-screen text-[#1d1d15] pb-12 flex flex-col">
            <Navbar />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full relative">
                {/* Hero */}
                <div className="relative w-full rounded-3xl overflow-hidden shadow-xl mb-10 bg-gray-900">
                    <div className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-overlay" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCaxDG4zq5IH6QGafKs_aZYpyLr3pXrFHDZTEV1-6bKeH-1aK444XcB1jqE2OH503dYZ0wgNsu8DodrUHApcXC978xDVksDqrG1QAk4egBzVzsCAPCQB1npCL9R4CWnZUPXbhFUWZoEwVM_Bke01IEaQUIHIkzF4Wf-ndn_3S-TbCrON2tJfAwbTg0RqIwfPuxPivpClwucGiYrYYWpYqzq6K6vdB9l9XjI3Bwqao-f0FMN4Te3fft_aLWnwac-DDe-68sXcwgCCGcy')" }}></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
                    <div className="relative z-10 px-8 py-16 md:py-20 md:px-12 max-w-4xl">
                        <div className="flex items-center gap-2 mb-4 text-gold-accent font-bold uppercase tracking-widest text-sm">
                            <span className="material-symbols-outlined text-lg">verified</span>
                            <span>Directorio Oficial</span>
                        </div>
                        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
                            Calidad y Confianza <br />en Cada Cosecha
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
                        <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full border-none focus:ring-0 text-base sm:text-lg py-3 sm:py-4 px-4 text-gray-700 placeholder:text-gray-400 font-medium" placeholder="Buscar certificación (ej. Orgánico, SENASICA)..." type="text" />
                        <button className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-xl font-bold text-lg shadow-md transition-all hover:-translate-y-0.5 active:translate-y-0">
                            Buscar
                        </button>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {filteredCerts.map((cert) => (
                        <div key={cert.id} className="bg-surface-light rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group ring-1 ring-black/5 flex flex-col h-full">
                            <div className="h-2 w-full bg-gold-accent"></div>
                            <div className="p-8 flex-1 flex flex-col items-start">
                                <div className={`w-16 h-16 rounded-2xl bg-gold-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-gold-accent/20`}>
                                    <span className={`material-symbols-outlined text-4xl ${cert.colorClass}`}>{cert.icon}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{cert.name}</h3>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {cert.summary}
                                </p>
                                <div className="mt-auto pt-6 border-t border-gray-100 w-full">
                                    <button
                                        onClick={() => setSelectedCert(cert)}
                                        className="inline-flex items-center text-primary font-bold hover:text-primary-hover transition-colors focus:outline-none"
                                    >
                                        Ver detalles <span className="material-symbols-outlined ml-1 text-lg">arrow_forward</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Details Modal */}
                {selectedCert && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={() => setSelectedCert(null)}></div>
                        <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-fade-in-up">
                            <div className="sticky top-0 right-0 z-10 flex justify-end p-4 bg-gradient-to-b from-white via-white to-transparent">
                                <button onClick={() => setSelectedCert(null)} className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors">
                                    <span className="material-symbols-outlined text-gray-600">close</span>
                                </button>
                            </div>

                            <div className="px-8 pb-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-20 h-20 rounded-2xl bg-gold-bg flex items-center justify-center shadow-sm border border-gold-accent/20">
                                        <span className={`material-symbols-outlined text-5xl ${selectedCert.colorClass}`}>{selectedCert.icon}</span>
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-extrabold text-gray-900">{selectedCert.name}</h2>
                                        <span className="inline-block mt-1 bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Válido en PAM</span>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                        <h3 className="text-lg font-bold text-gray-800 mb-2">¿Qué significa esta certificación?</h3>
                                        <p className="text-gray-600 leading-relaxed text-lg">
                                            {selectedCert.description}
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                                            <span className="material-symbols-outlined text-primary">check_circle</span>
                                            Beneficios Clave
                                        </h3>
                                        <ul className="grid gap-3">
                                            {selectedCert.benefits.map((benefit, index) => (
                                                <li key={index} className="flex items-start gap-3 text-gray-600">
                                                    <span className="material-symbols-outlined text-sm mt-1 text-gray-400">circle</span>
                                                    <span>{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-4">
                                        <a
                                            href={selectedCert.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 bg-primary hover:bg-primary-hover text-white py-4 rounded-xl font-bold text-lg text-center shadow-lg hover:shadow-primary/30 transition-all flex items-center justify-center gap-2"
                                        >
                                            Ir al Sitio Oficial <span className="material-symbols-outlined text-2xl">open_in_new</span>
                                        </a>
                                        <button
                                            onClick={() => setSelectedCert(null)}
                                            className="flex-1 bg-white border-2 border-gray-200 text-gray-700 hover:bg-gray-50 py-4 rounded-xl font-bold text-lg transition-colors"
                                        >
                                            Cerrar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

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
                    © {new Date().getFullYear()} Productores Agroalimentarios de Michoacán. Todos los derechos reservados.
                </div>
            </footer>
        </div>
    );
};

export default Certifications;