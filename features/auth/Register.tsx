import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState<'producer' | 'buyer'>('producer');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de registro real
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-background-light dark:bg-background-dark font-display text-[#161613] selection:bg-primary selection:text-white">
      <div className="w-full max-w-[580px] bg-white rounded-2xl shadow-xl shadow-gray-200/50 overflow-hidden flex flex-col ring-1 ring-black/5">
        {/* Header Image */}
        <div className="relative h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCaxDG4zq5IH6QGafKs_aZYpyLr3pXrFHDZTEV1-6bKeH-1aK444XcB1jqE2OH503dYZ0wgNsu8DodrUHApcXC978xDVksDqrG1QAk4egBzVzsCAPCQB1npCL9R4CWnZUPXbhFUWZoEwVM_Bke01IEaQUIHIkzF4Wf-ndn_3S-TbCrON2tJfAwbTg0RqIwfPuxPivpClwucGiYrYYWpYqzq6K6vdB9l9XjI3Bwqao-f0FMN4Te3fft_aLWnwac-DDe-68sXcwgCCGcy')" }}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
            <div className="flex items-center gap-3 text-white mb-2">
              <div className="bg-primary p-2 rounded-lg bg-opacity-90 backdrop-blur-sm">
                <span className="material-symbols-outlined text-3xl">spa</span>
              </div>
              <span className="text-3xl font-extrabold tracking-tight drop-shadow-md">PAM</span>
            </div>
            <p className="text-white/95 text-base font-medium drop-shadow-sm">Directorio Seguro de Productores</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 sm:p-12 flex flex-col gap-6">
          <div className="text-center space-y-1">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">Únete a la Red de Confianza</h1>
            <p className="text-gray-500 font-medium">Verificamos identidades para tu seguridad</p>
          </div>

          <form onSubmit={handleRegister} className="flex flex-col gap-6">
            
            {/* Role Selection */}
            <div className="grid grid-cols-2 gap-4">
                <button
                    type="button"
                    onClick={() => setRole('producer')}
                    className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all duration-200 ${role === 'producer' ? 'border-primary bg-primary/5 text-primary shadow-sm' : 'border-gray-100 bg-gray-50 text-gray-400 hover:border-gray-200 hover:bg-gray-100'}`}
                >
                    <span className="material-symbols-outlined text-3xl">agriculture</span>
                    <span className="font-bold text-sm">Quiero Validar mis Cultivos</span>
                </button>
                 <button
                    type="button"
                    onClick={() => setRole('buyer')}
                    className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all duration-200 ${role === 'buyer' ? 'border-primary bg-primary/5 text-primary shadow-sm' : 'border-gray-100 bg-gray-50 text-gray-400 hover:border-gray-200 hover:bg-gray-100'}`}
                >
                    <span className="material-symbols-outlined text-3xl">storefront</span>
                    <span className="font-bold text-sm">Busco Productores Reales</span>
                </button>
            </div>

            <div className="space-y-5">
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-bold text-gray-700">Nombre Completo</label>
                    <div className="relative">
                        <input 
                            id="name"
                            type="text"
                            placeholder="Ej. Roberto Martínez"
                            className="w-full pl-4 pr-10 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all font-medium placeholder:text-gray-400"
                        />
                        <span className="material-symbols-outlined absolute right-3 top-3 text-gray-400">person</span>
                    </div>
                </div>
                 <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-sm font-bold text-gray-700">Teléfono Celular</label>
                    <div className="relative">
                        <span className="absolute left-4 top-3.5 text-gray-500 font-bold border-r-2 border-gray-200 pr-2 h-6 flex items-center select-none">+52</span>
                        <input 
                            id="phone"
                            type="tel"
                            placeholder="443 123 4567"
                            className="w-full pl-20 pr-10 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all font-medium placeholder:text-gray-400"
                        />
                         <span className="material-symbols-outlined absolute right-3 top-3 text-gray-400">smartphone</span>
                    </div>
                </div>
                {role === 'producer' && (
                    <div className="flex flex-col gap-2 animate-fade-in">
                        <label htmlFor="location" className="text-sm font-bold text-gray-700">Ubicación (Municipio)</label>
                        <div className="relative">
                            <select 
                                id="location"
                                className="w-full pl-4 pr-10 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all font-medium text-gray-700 bg-white appearance-none"
                            >
                                <option>Selecciona un municipio...</option>
                                <option>Uruapan</option>
                                <option>Zamora</option>
                                <option>Apatzingán</option>
                                <option>Morelia</option>
                                <option>Los Reyes</option>
                            </select>
                            <span className="material-symbols-outlined absolute right-3 top-3 text-gray-400 pointer-events-none">expand_more</span>
                        </div>
                    </div>
                )}
            </div>

            <button type="submit" className="w-full py-4 bg-primary hover:bg-primary-hover text-white text-xl font-bold rounded-xl shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 mt-2">
              <span>Solicitar Verificación</span>
              <span className="material-symbols-outlined text-2xl">arrow_forward</span>
            </button>
          </form>

          <div className="text-center pt-2 border-t border-gray-100">
             <p className="text-gray-500 text-base font-medium">
                ¿Ya tienes cuenta? <Link to="/login" className="text-gray-900 font-bold hover:text-primary hover:underline decoration-primary decoration-2 underline-offset-2 transition-colors">Inicia Sesión</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 w-full h-1/4 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none -z-10"></div>
    </div>
  );
};

export default Register;