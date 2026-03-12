import React, { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

type Step = 'phone' | 'otp';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { sendOtp, verifyLoginOtp } = useAuth();

  const [step, setStep] = useState<Step>('phone');
  const [phone, setPhone] = useState('');
  const [formattedPhone, setFormattedPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [hash, setHash] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const from = (location.state as { from?: { pathname: string } })?.from?.pathname || '/dashboard';

  // ── Paso 1: Enviar OTP ─────────────────────────────────────────────────
  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const digits = phone.replace(/\D/g, '');
    if (digits.length < 10) {
      setError('Por favor ingresa un número de teléfono válido de 10 dígitos.');
      return;
    }
    setIsLoading(true);
    try {
      const res = await sendOtp(phone);
      setFormattedPhone(res.phone);
      setHash(res.hash);
      setStep('otp');
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Error al enviar el código. Intenta de nuevo.';
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  // ── Paso 2: Verificar OTP ──────────────────────────────────────────────
  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (otp.replace(/\D/g, '').length !== 6) {
      setError('El código debe tener 6 dígitos.');
      return;
    }
    setIsLoading(true);
    try {
      await verifyLoginOtp(formattedPhone, otp.trim(), hash);
      navigate(from, { replace: true });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Código incorrecto o expirado. Intenta de nuevo.';
      setError(message);
    } finally {
      setIsLoading(false);
    }
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

        <div className="p-6 sm:p-8 lg:p-10 flex flex-col gap-6">

          {/* Indicador de pasos */}
          <div className="flex items-center gap-3">
            <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold transition-colors ${step === 'phone' ? 'bg-primary text-white' : 'bg-green-100 text-green-700'}`}>
              {step === 'otp' ? <span className="material-symbols-outlined text-base">check</span> : '1'}
            </div>
            <div className="flex-1 h-0.5 bg-gray-200"><div className={`h-full bg-primary transition-all duration-300 ${step === 'otp' ? 'w-full' : 'w-0'}`} /></div>
            <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold transition-colors ${step === 'otp' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400'}`}>2</div>
          </div>

          {/* ── PASO 1: Teléfono ── */}
          {step === 'phone' && (
            <form onSubmit={handleSendOtp} className="flex flex-col gap-5">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-1">Iniciar Sesión</h1>
                <p className="text-sm text-gray-500">Ingresa tu número y te enviamos un código SMS.</p>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-sm font-semibold text-gray-700">Número de teléfono</label>
                <div className="flex items-center gap-0 border border-gray-300 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-primary focus-within:border-primary transition-all">
                  <span className="px-4 py-3.5 bg-gray-50 text-sm text-gray-600 border-r border-gray-300 font-medium select-none">+52</span>
                  <input
                    id="phone"
                    type="tel"
                    inputMode="numeric"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="10 dígitos"
                    maxLength={14}
                    className="flex-1 px-4 py-3.5 text-sm outline-none bg-white"
                    required
                  />
                </div>
              </div>

              {error && (
                <div className="flex items-center gap-2 text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl p-3">
                  <span className="material-symbols-outlined text-base">error</span>
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-3.5 px-6 rounded-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-md shadow-primary/20"
              >
                {isLoading ? (
                  <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                ) : (
                  <><span className="material-symbols-outlined text-base">sms</span> Enviar código SMS</>
                )}
              </button>

              <p className="text-center text-sm text-gray-500">
                ¿No tienes cuenta?{' '}
                <Link to="/register" className="text-primary font-semibold hover:underline">Regístrate aquí</Link>
              </p>
            </form>
          )}

          {/* ── PASO 2: Código OTP ── */}
          {step === 'otp' && (
            <form onSubmit={handleVerifyOtp} className="flex flex-col gap-5">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-1">Ingresa tu código</h1>
                <p className="text-sm text-gray-500">
                  Enviamos un código de 6 dígitos vía SMS a <span className="font-semibold text-gray-700">{formattedPhone}</span>
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="otp" className="text-sm font-semibold text-gray-700">Código de verificación</label>
                <input
                  id="otp"
                  type="text"
                  inputMode="numeric"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  placeholder="• • • • • •"
                  maxLength={6}
                  className="w-full px-4 py-3.5 text-center text-2xl font-mono tracking-[0.6em] border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                  autoFocus
                  required
                />
                <p className="text-xs text-gray-400 text-center">El código expira en 10 minutos</p>
              </div>

              {error && (
                <div className="flex items-center gap-2 text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl p-3">
                  <span className="material-symbols-outlined text-base">error</span>
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading || otp.length < 6}
                className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-3.5 px-6 rounded-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-md shadow-primary/20"
              >
                {isLoading ? (
                  <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                ) : (
                  <><span className="material-symbols-outlined text-base">verified</span> Verificar código</>
                )}
              </button>

              <button
                type="button"
                onClick={() => { setStep('phone'); setOtp(''); setError(''); }}
                className="text-sm text-gray-500 hover:text-gray-700 underline text-center"
              >
                Cambiar número de teléfono
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;