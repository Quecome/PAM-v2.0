import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { isLoggedIn, userName } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const initials = userName
    ? userName.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase()
    : '';

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#e3e3de] bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-3 text-[#161613]">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
              <span className="material-symbols-outlined text-xl">agriculture</span>
            </div>
            <h2 className="text-xl font-black tracking-tight text-[#161613]">PAM</h2>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className={`text-sm font-medium transition-colors ${isActive('/') ? 'text-primary' : 'text-[#161613] hover:text-primary'}`}>Inicio</Link>
            <Link to="/producers" className={`text-sm font-medium transition-colors ${isActive('/producers') ? 'text-primary' : 'text-[#161613] hover:text-primary'}`}>Productores</Link>
            <Link to="/certifications" className={`text-sm font-medium transition-colors ${isActive('/certifications') ? 'text-primary' : 'text-[#161613] hover:text-primary'}`}>Certificaciones</Link>
            <Link to="/about" className={`text-sm font-medium transition-colors ${isActive('/about') ? 'text-primary' : 'text-[#161613] hover:text-primary'}`}>Nosotros</Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          {/* Desktop: Auth-aware buttons */}
          {isLoggedIn ? (
            <Link to="/dashboard" className="hidden sm:flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-bold text-white transition-transform hover:scale-105 hover:bg-primary-hover shadow-sm gap-2">
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">
                {initials}
              </div>
              Mi Panel
            </Link>
          ) : (
            <Link to="/login" className="hidden sm:flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-bold text-white transition-transform hover:scale-105 hover:bg-primary-hover shadow-sm">
              Ingresar
            </Link>
          )}
          {/* Desktop icons */}
          <Link to="/support" className="hidden md:flex h-9 w-9 items-center justify-center rounded-lg bg-[#f3f3f1] text-[#161613] hover:bg-[#e3e3de] transition-colors">
            <span className="material-symbols-outlined text-xl">help</span>
          </Link>
          {/* Mobile hamburger */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg text-[#161613]" aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}>
            <span className="material-symbols-outlined text-xl">{isMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu — Full overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div className="md:hidden fixed inset-0 top-16 bg-black/30 z-40" onClick={() => setIsMenuOpen(false)}></div>
          {/* Menu panel */}
          <div className="md:hidden fixed left-0 right-0 top-16 bg-white z-50 border-b border-gray-200 shadow-xl animate-fade-in-up">
            <nav className="px-6 py-6 space-y-1">
              <Link to="/" className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium ${isActive('/') ? 'bg-primary/10 text-primary' : 'text-gray-900 hover:bg-gray-50'}`}>
                <span className="material-symbols-outlined text-xl">home</span> Inicio
              </Link>
              <Link to="/producers" className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium ${isActive('/producers') ? 'bg-primary/10 text-primary' : 'text-gray-900 hover:bg-gray-50'}`}>
                <span className="material-symbols-outlined text-xl">groups</span> Productores
              </Link>
              <Link to="/certifications" className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium ${isActive('/certifications') ? 'bg-primary/10 text-primary' : 'text-gray-900 hover:bg-gray-50'}`}>
                <span className="material-symbols-outlined text-xl">verified</span> Certificaciones
              </Link>
              <Link to="/about" className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium ${isActive('/about') ? 'bg-primary/10 text-primary' : 'text-gray-900 hover:bg-gray-50'}`}>
                <span className="material-symbols-outlined text-xl">info</span> Nosotros
              </Link>
              <Link to="/support" className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium ${isActive('/support') ? 'bg-primary/10 text-primary' : 'text-gray-900 hover:bg-gray-50'}`}>
                <span className="material-symbols-outlined text-xl">help</span> Soporte
              </Link>

              <div className="pt-4 mt-4 border-t border-gray-100">
                {isLoggedIn ? (
                  <Link to="/dashboard" className="flex items-center gap-3 w-full text-center bg-primary text-white py-3 px-4 rounded-xl font-bold text-base">
                    <span className="material-symbols-outlined">dashboard</span> Mi Panel de Productor
                  </Link>
                ) : (
                  <Link to="/login" className="block w-full text-center bg-primary text-white py-3 rounded-xl font-bold text-base">
                    Ingresar
                  </Link>
                )}
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;