import React from 'react';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="bg-pam-earth text-gray-900 antialiased font-body flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <header className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaxDG4zq5IH6QGafKs_aZYpyLr3pXrFHDZTEV1-6bKeH-1aK444XcB1jqE2OH503dYZ0wgNsu8DodrUHApcXC978xDVksDqrG1QAk4egBzVzsCAPCQB1npCL9R4CWnZUPXbhFUWZoEwVM_Bke01IEaQUIHIkzF4Wf-ndn_3S-TbCrON2tJfAwbTg0RqIwfPuxPivpClwucGiYrYYWpYqzq6K6vdB9l9XjI3Bwqao-f0FMN4Te3fft_aLWnwac-DDe-68sXcwgCCGcy" alt="Paisaje de campos agrícolas" className="w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-pam-earth"></div>
            <div className="absolute inset-0 bg-pam-green/20 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl pt-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-medium text-sm mb-6">
                <span className="material-symbols-outlined text-base">verified</span> Orgullo Michoacano
            </div>
            <h1 className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-8 drop-shadow-xl tracking-tight">
                El corazón del campo <br/> en tus manos
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                Nuestra plataforma conecta a los productores locales directamente con compradores justos, eliminando barreras y cultivando oportunidades.
            </p>
        </div>
      </header>

      {/* Mission Section */}
      <section className="relative py-20 lg:py-28 bg-pam-earth overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/2">
                    <h2 className="font-display font-bold text-pam-green text-lg uppercase tracking-wider mb-3">Nuestra Misión</h2>
                    <h3 className="font-display font-bold text-4xl lg:text-5xl text-gray-900 mb-8 leading-tight">
                        Empoderar a quienes <span className="text-pam-green underline decoration-4 underline-offset-4 decoration-pam-green/30">alimentan al mundo</span>.
                    </h3>
                    <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-body">
                        <p>
                            En PAM, creemos que el campo de Michoacán tiene un potencial ilimitado. Sin embargo, los intermediarios y la falta de acceso a tecnología han frenado el crecimiento de nuestros agricultores durante décadas.
                        </p>
                        <p>
                            Creamos esta plataforma para ser el puente digital que faltaba. Facilitamos un comercio justo, transparente y directo, asegurando que el valor de la cosecha se quede donde pertenece: en las manos de quienes trabajan la tierra.
                        </p>
                    </div>
                </div>
                <div className="lg:w-1/2 relative">
                    <div className="relative bg-pam-earth-dark rounded-3xl p-8 transform rotate-2 transition-transform hover:rotate-0 duration-500">
                        <div className="bg-white p-8 rounded-2xl shadow-xl">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-pam-green/10 p-3 rounded-full">
                                    <span className="material-symbols-outlined text-pam-green text-3xl">agriculture</span>
                                </div>
                                <div>
                                    <p className="font-bold text-xl text-gray-900">Impacto Real</p>
                                    <p className="text-sm text-gray-500">Resultados hasta la fecha</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-6 text-center">
                                <div className="p-4 bg-gray-50 rounded-xl">
                                    <span className="block text-3xl font-extrabold text-pam-green mb-1">+500</span>
                                    <span className="text-sm font-medium text-gray-600">Productores Activos</span>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-xl">
                                    <span className="block text-3xl font-extrabold text-pam-green mb-1">100%</span>
                                    <span className="text-sm font-medium text-gray-600">Trato Directo</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Scalability & Verification Section */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        <div className="container mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
                {/* Challenge Column */}
                <div className="lg:w-1/3 sticky top-24">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-4">
                        <span className="material-symbols-outlined text-sm">trending_up</span> Desafío de Expansión
                    </div>
                    <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-6 leading-tight">
                        Escalabilidad: <br/> De 8 a Nivel Estatal
                    </h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        Pasar de un programa piloto a una operación estatal es un salto cuántico.
                    </p>
                    <div className="bg-orange-50 border-l-4 border-orange-400 p-5 rounded-r-xl">
                        <h4 className="font-bold text-orange-900 mb-2 flex items-center gap-2">
                            <span className="material-symbols-outlined">warning</span> El Problema
                        </h4>
                        <p className="text-sm text-orange-800/90 leading-relaxed">
                            La verificación física no escala digitalmente. Si PAM depende exclusivamente de visitar cada granja para validar, el crecimiento será lento y costoso.
                        </p>
                    </div>
                </div>

                {/* Solution Column */}
                <div className="lg:w-2/3">
                    <div className="mb-8">
                        <h3 className="font-display font-bold text-2xl text-gray-900 mb-2">Nuestra Solución</h3>
                        <p className="text-gray-500">Un sistema de verificación por niveles que equilibra confianza y velocidad.</p>
                    </div>
                    
                    <div className="grid gap-6">
                        {/* Level 1 */}
                        <div className="flex group bg-gray-50 hover:bg-white border border-gray-100 hover:border-gray-200 p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-lg">
                            <div className="flex-shrink-0 mr-6">
                                <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-3xl font-bold group-hover:scale-110 transition-transform">
                                    1
                                </div>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                                    Digital / Automático
                                    <span className="material-symbols-outlined text-blue-500">smartphone</span>
                                </h4>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Validación inmediata mediante carga de documentos oficiales (INE, Título de Propiedad) y geolocalización. Permite el acceso básico a la plataforma sin intervención humana.
                                </p>
                            </div>
                        </div>

                        {/* Level 2 */}
                        <div className="flex group bg-gray-50 hover:bg-white border border-gray-100 hover:border-gray-200 p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-lg">
                            <div className="flex-shrink-0 mr-6">
                                <div className="w-16 h-16 rounded-2xl bg-primary/20 text-primary-dark flex items-center justify-center text-3xl font-bold group-hover:scale-110 transition-transform">
                                    2
                                </div>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                                    Comunidad / Cooperativa
                                    <span className="material-symbols-outlined text-primary">groups</span>
                                </h4>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Validación social. Productores verificados o líderes de cooperativas locales confirman la existencia y actividad del nuevo productor. Desbloquea funciones de venta mayorista.
                                </p>
                            </div>
                        </div>

                        {/* Level 3 */}
                        <div className="flex group bg-white border-2 border-pam-green/20 p-6 rounded-2xl transition-all duration-300 shadow-md hover:shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-pam-green text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">Recomendado</div>
                            <div className="flex-shrink-0 mr-6">
                                <div className="w-16 h-16 rounded-2xl bg-pam-green text-white flex items-center justify-center text-3xl font-bold group-hover:scale-110 transition-transform shadow-lg shadow-pam-green/30">
                                    3
                                </div>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                                    Oficial PAM
                                    <span className="material-symbols-outlined text-pam-green">verified</span>
                                </h4>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    El estándar oro. Visita técnica presencial por ingenieros agrónomos de PAM para certificar calidad, procesos de inocuidad y sostenibilidad. Otorga insignia de "Verificado Plus" y prioridad en búsquedas.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-pam-earth">
        <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <h2 className="font-display font-bold text-4xl lg:text-5xl text-gray-900 mb-6">Nuestros Valores</h2>
                <p className="text-xl text-gray-500">
                    Los pilares que sostienen cada conexión que hacemos y cada decisión que tomamos.
                </p>
            </div>
            <div className="grid md:grid-cols-3 gap-10 lg:gap-14">
                <div className="group flex flex-col items-center text-center p-8 rounded-3xl bg-white hover:bg-pam-green hover:text-white transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2 cursor-default">
                    <div className="w-24 h-24 bg-pam-earth rounded-full flex items-center justify-center mb-8 shadow-md group-hover:scale-110 transition-transform duration-300">
                        <span className="material-symbols-outlined text-5xl text-pam-green group-hover:text-white transition-colors">handshake</span>
                    </div>
                    <h3 className="font-display font-bold text-2xl mb-4 group-hover:text-white">Confianza</h3>
                    <p className="text-gray-600 text-lg leading-relaxed group-hover:text-white/90">
                        Construimos relaciones basadas en la honestidad y la transparencia. Sabemos que un buen trato es aquel donde todos ganan.
                    </p>
                </div>
                 <div className="group flex flex-col items-center text-center p-8 rounded-3xl bg-white hover:bg-pam-green hover:text-white transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2 cursor-default">
                    <div className="w-24 h-24 bg-pam-earth rounded-full flex items-center justify-center mb-8 shadow-md group-hover:scale-110 transition-transform duration-300">
                        <span className="material-symbols-outlined text-5xl text-pam-green group-hover:text-white transition-colors">verified_user</span>
                    </div>
                    <h3 className="font-display font-bold text-2xl mb-4 group-hover:text-white">Calidad</h3>
                    <p className="text-gray-600 text-lg leading-relaxed group-hover:text-white/90">
                        Michoacán es sinónimo de excelencia agrícola. Garantizamos estándares altos para que el mundo reciba solo lo mejor.
                    </p>
                </div>
                 <div className="group flex flex-col items-center text-center p-8 rounded-3xl bg-white hover:bg-pam-green hover:text-white transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2 cursor-default">
                    <div className="w-24 h-24 bg-pam-earth rounded-full flex items-center justify-center mb-8 shadow-md group-hover:scale-110 transition-transform duration-300">
                        <span className="material-symbols-outlined text-5xl text-pam-green group-hover:text-white transition-colors">volunteer_activism</span>
                    </div>
                    <h3 className="font-display font-bold text-2xl mb-4 group-hover:text-white">Apoyo</h3>
                    <p className="text-gray-600 text-lg leading-relaxed group-hover:text-white/90">
                        Somos una comunidad. Brindamos soporte técnico y humano para que ningún productor se quede atrás en la era digital.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-pam-green-dark text-white py-16 mt-auto">
        <div className="container mx-auto px-6 text-center">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-8">¿Listo para ser parte del cambio?</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/register" className="bg-white text-pam-green-dark px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center gap-2">
                    <span>Unirme como Productor</span>
                    <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
                <Link to="/support" className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors">
                    Contactar Soporte
                </Link>
            </div>
            <div className="mt-16 pt-8 border-t border-white/10 text-white/40 text-sm">
                <p>© 2024 Productores Agroalimentarios de Michoacán. Todos los derechos reservados.</p>
            </div>
        </div>
      </section>
    </div>
  );
};

export default About;