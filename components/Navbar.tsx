import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

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
          <Link to="/login" className="hidden sm:flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-bold text-white transition-transform hover:scale-105 hover:bg-primary-hover shadow-sm">
            Ingresar
          </Link>
          <Link to="/dashboard" className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f3f3f1] text-[#161613] hover:bg-[#e3e3de] transition-colors">
            <span className="material-symbols-outlined text-xl">person</span>
          </Link>
          <Link to="/support" className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f3f3f1] text-[#161613] hover:bg-[#e3e3de] transition-colors">
            <span className="material-symbols-outlined text-xl">help</span>
          </Link>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg text-[#161613]">
            <span className="material-symbols-outlined text-xl">menu</span>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-3">
            <Link to="/" className="block text-sm font-medium text-gray-900">Inicio</Link>
            <Link to="/producers" className="block text-sm font-medium text-gray-900">Productores</Link>
            <Link to="/certifications" className="block text-sm font-medium text-gray-900">Certificaciones</Link>
            <Link to="/about" className="block text-sm font-medium text-gray-900">Nosotros</Link>
            <Link to="/login" className="block w-full text-center bg-primary text-white py-2 rounded-lg font-bold">Ingresar</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;