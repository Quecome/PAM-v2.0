import React from 'react';
import Navbar from '../components/Navbar';
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

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <h2 className="font-display font-bold text-4xl lg:text-5xl text-gray-900 mb-6">Nuestros Valores</h2>
                <p className="text-xl text-gray-500">
                    Los pilares que sostienen cada conexión que hacemos y cada decisión que tomamos.
                </p>
            </div>
            <div className="grid md:grid-cols-3 gap-10 lg:gap-14">
                <div className="group flex flex-col items-center text-center p-8 rounded-3xl bg-pam-earth hover:bg-pam-green hover:text-white transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2 cursor-default">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-8 shadow-md group-hover:scale-110 transition-transform duration-300">
                        <span className="material-symbols-outlined text-5xl text-pam-green">handshake</span>
                    </div>
                    <h3 className="font-display font-bold text-2xl mb-4 group-hover:text-white">Confianza</h3>
                    <p className="text-gray-600 text-lg leading-relaxed group-hover:text-white/90">
                        Construimos relaciones basadas en la honestidad y la transparencia. Sabemos que un buen trato es aquel donde todos ganan.
                    </p>
                </div>
                 <div className="group flex flex-col items-center text-center p-8 rounded-3xl bg-pam-earth hover:bg-pam-green hover:text-white transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2 cursor-default">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-8 shadow-md group-hover:scale-110 transition-transform duration-300">
                        <span className="material-symbols-outlined text-5xl text-pam-green">verified_user</span>
                    </div>
                    <h3 className="font-display font-bold text-2xl mb-4 group-hover:text-white">Calidad</h3>
                    <p className="text-gray-600 text-lg leading-relaxed group-hover:text-white/90">
                        Michoacán es sinónimo de excelencia agrícola. Garantizamos estándares altos para que el mundo reciba solo lo mejor.
                    </p>
                </div>
                 <div className="group flex flex-col items-center text-center p-8 rounded-3xl bg-pam-earth hover:bg-pam-green hover:text-white transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2 cursor-default">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-8 shadow-md group-hover:scale-110 transition-transform duration-300">
                        <span className="material-symbols-outlined text-5xl text-pam-green">volunteer_activism</span>
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