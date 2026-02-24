import React, { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Regresar a la ruta que el usuario quería visitar
  const from = (location.state as { from?: { pathname: string } })?.from?.pathname || '/dashboard';

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (phone.replace(/\D/g, '').length < 10) {
      setError('Por favor ingresa un número de teléfono válido de 10 dígitos.');
      return;
    }

    setIsLoading(true);
    // Simulación de llamada a API (200ms delay)
    await new Promise(resolve => setTimeout(resolve, 800));

    // Mock: autenticar como productor con el teléfono ingresado
    login('producer', 'Roberto Martínez', phone);
    navigate(from, { replace: true });
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-background-light dark:bg-background-dark font-display text-[#161613] selection:bg-primary selection:text-white">
      <div className="w-full max-w-[580px] bg-white rounded-2xl shadow-xl shadow-gray-200/50 overflow-hidden flex flex-col ring-1 ring-black/5">
        {/* Header Image */}
        <div className="relative h-36 sm:h-56 w-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCaxDG4zq5IH6QGafKs_aZYpyLr3pXrFHDZTEV1-6bKeH-1aK444XcB1jqE2OH503dYZ0wgNsu8DodrUHApcXC978xDVksDqrG1QAk4egBzVzsCAPCQB1npCL9R4CWnZUPXbhFUWZoEwVM_Bke01IEaQUIHIkzF4Wf-ndn_3S-TbCrON2tJfAwbTg0RqIwfPuxPivpClwucGiYrYYWpYqzq6K6vdB9l9XjI3Bwqao-f0FMN4Te3fft_aLWnwac-DDe-68sXcwgCCGcy')" }}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5 sm:p-8">
            <div className="flex items-center gap-3 text-white mb-2">
              <div className="bg-primary p-2 rounded-lg bg-opacity-90 backdrop-blur-sm">
                <span className="material-symbols-outlined text-3xl">spa</span>
              </div>
              <span className="text-3xl font-extrabold tracking-tight drop-shadow-md">PAM</span>
            </div>
            <p className="text-white/95 text-base font-medium drop-shadow-sm max-w-[80%]">Productores Agroalimentarios de Michoacán</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-8 md:p-12 flex flex-col gap-6 sm:gap-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 leading-tight">Bienvenido a PAM</h1>
            <h2 className="text-xl text-gray-500 font-medium">El campo de Michoacán</h2>
          </div>

          <form onSubmit={handleLogin} className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <label htmlFor="phone" className="text-lg font-bold text-gray-800">Número de Teléfono</label>
              <div className="relative flex items-center group/input">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                  <span className="text-gray-500 text-xl font-bold border-r-2 border-gray-200 pr-3 mr-1 select-none">+52</span>
                </div>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="443 123 4567"
                  className={`form-input block w-full pl-24 pr-12 py-4 h-[72px] rounded-xl border-2 ${error ? 'border-red-400' : 'border-gray-200'} bg-white text-gray-900 placeholder:text-gray-400 focus:border-primary focus:ring-4 focus:ring-primary/20 text-2xl font-semibold tracking-wide transition-all duration-200`}
                />
                <div className="absolute inset-y-0 right-0 pr-5 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-gray-400 text-3xl">smartphone</span>
                </div>
              </div>
              {error && (
                <p className="text-sm text-red-600 flex items-center gap-1 px-1">
                  <span className="material-symbols-outlined text-base">error</span>
                  {error}
                </p>
              )}
              <p className="text-sm text-gray-500 px-1">Ingresa tu número celular para recibir tu código de acceso.</p>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full h-[72px] bg-primary hover:bg-primary-hover text-white text-xl sm:text-2xl font-bold rounded-xl shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] flex items-center justify-center gap-3 focus:outline-none focus:ring-4 focus:ring-primary/40 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-6 w-6 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  <span>Verificando...</span>
                </>
              ) : (
                <>
                  <span>Entrar con Código</span>
                  <span className="material-symbols-outlined text-3xl font-bold">arrow_forward</span>
                </>
              )}
            </button>
          </form>

          <div className="border-t border-gray-100 pt-8 flex flex-col items-center gap-5 text-center">
            <Link to="/support" className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-bold text-lg hover:underline underline-offset-4 decoration-2 px-4 py-2 rounded-lg hover:bg-primary/5 transition-colors">
              <span className="material-symbols-outlined">help</span> ¿Necesitas ayuda?
            </Link>
            <p className="text-gray-500 text-base font-medium">
              ¿No tienes cuenta? <Link to="/register" className="text-gray-900 font-bold hover:text-primary hover:underline decoration-primary decoration-2 underline-offset-2 transition-colors">Regístrate aquí</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 w-full h-1/4 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none -z-10"></div>
    </div>
  );
};

export default Login;