import React from 'react';
import { Link } from 'react-router-dom';

const Support: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-background-light dark:bg-background-dark font-display text-[#161613]">
      <div className="w-full max-w-[600px] bg-white rounded-2xl shadow-xl shadow-gray-200/50 overflow-hidden flex flex-col ring-1 ring-black/5">
        <div className="relative h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCaxDG4zq5IH6QGafKs_aZYpyLr3pXrFHDZTEV1-6bKeH-1aK444XcB1jqE2OH503dYZ0wgNsu8DodrUHApcXC978xDVksDqrG1QAk4egBzVzsCAPCQB1npCL9R4CWnZUPXbhFUWZoEwVM_Bke01IEaQUIHIkzF4Wf-ndn_3S-TbCrON2tJfAwbTg0RqIwfPuxPivpClwucGiYrYYWpYqzq6K6vdB9l9XjI3Bwqao-f0FMN4Te3fft_aLWnwac-DDe-68sXcwgCCGcy')" }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-8">
                <div className="flex items-center gap-3 text-white mb-1">
                    <div className="bg-primary p-2 rounded-lg bg-opacity-95 backdrop-blur-sm shadow-lg">
                        <span className="material-symbols-outlined text-3xl">spa</span>
                    </div>
                    <span className="text-3xl font-extrabold tracking-tight drop-shadow-md">PAM</span>
                </div>
                <p className="text-white/90 text-sm font-medium drop-shadow-sm">Centro de Ayuda</p>
            </div>
        </div>

        <div className="p-8 sm:p-10 flex flex-col gap-8">
            <div className="text-center space-y-2">
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 leading-tight">
                    ¿Cómo podemos ayudarte?
                </h1>
                <p className="text-lg text-gray-500 font-medium">
                    Selecciona una opción para contactarnos
                </p>
            </div>

            <div className="flex flex-col gap-5">
                <a href="tel:+524430000000" className="group relative w-full h-24 bg-primary hover:bg-primary-hover text-white rounded-xl shadow-md hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1 flex items-center px-8 overflow-hidden">
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-white/10 skew-x-12 translate-x-16 group-hover:translate-x-8 transition-transform duration-500"></div>
                    <div className="h-14 w-14 rounded-full bg-white/20 flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                        <span className="material-symbols-outlined text-4xl">call</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold tracking-tight">Llamar a Soporte</span>
                        <span className="text-white/80 text-sm font-medium">Atención telefónica directa</span>
                    </div>
                    <span className="material-symbols-outlined ml-auto text-3xl opacity-60 group-hover:opacity-100 transition-opacity">chevron_right</span>
                </a>

                <a href="#" className="group relative w-full h-24 bg-primary hover:bg-primary-hover text-white rounded-xl shadow-md hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1 flex items-center px-8 overflow-hidden">
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-white/10 skew-x-12 translate-x-16 group-hover:translate-x-8 transition-transform duration-500"></div>
                     <div className="h-14 w-14 rounded-full bg-white/20 flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                        <span className="material-symbols-outlined text-4xl">chat</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold tracking-tight">Enviar WhatsApp</span>
                        <span className="text-white/80 text-sm font-medium">Chat rápido y sencillo</span>
                    </div>
                     <span className="material-symbols-outlined ml-auto text-3xl opacity-60 group-hover:opacity-100 transition-opacity">chevron_right</span>
                </a>

                <button className="group relative w-full h-24 bg-white border-2 border-primary hover:border-primary-hover text-primary hover:text-primary-hover rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center px-8 overflow-hidden">
                     <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mr-6 group-hover:bg-primary/20 transition-colors duration-300">
                        <span className="material-symbols-outlined text-4xl">live_help</span>
                    </div>
                    <div className="flex flex-col text-left text-gray-800">
                        <span className="text-2xl font-bold tracking-tight">Preguntas Frecuentes</span>
                        <span className="text-gray-500 text-sm font-medium">Respuestas a dudas comunes</span>
                    </div>
                    <span className="material-symbols-outlined ml-auto text-3xl text-gray-300 group-hover:text-primary transition-colors">chevron_right</span>
                </button>
            </div>

             <div className="border-t border-gray-100 pt-6 flex flex-col items-center text-center">
                <p className="text-gray-500 text-base font-medium mb-4">
                    Estamos disponibles de Lunes a Viernes, 9am - 6pm
                </p>
                <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-primary font-bold text-lg hover:bg-gray-100 px-6 py-3 rounded-full transition-colors">
                    <span className="material-symbols-outlined">arrow_back</span> Volver al Inicio
                </Link>
            </div>
        </div>
      </div>
      <div className="fixed bottom-0 w-full h-1/3 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none -z-10"></div>
    </div>
  );
};

export default Support;