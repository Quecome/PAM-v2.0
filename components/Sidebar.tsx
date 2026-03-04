import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { userName, logout } = useAuth();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const initials = userName
    ? userName.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase()
    : 'US';

  const navItems = [
    { to: '/', icon: 'home', label: 'Volver al Sitio', isNavLink: true },
    { to: '/dashboard', icon: 'grass', label: 'Mis Cultivos', isNavLink: false },
    { to: '/producer/1', icon: 'verified_user', label: 'Mi Perfil', isNavLink: false },
  ];

  return (
    <>
      {/* Mobile Header for Dashboard */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-40 flex items-center justify-between px-4 shadow-sm">
        <div className="flex items-center gap-3">
          <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="p-2 rounded-lg hover:bg-gray-100">
            <span className="material-symbols-outlined text-xl">{isMobileOpen ? 'close' : 'menu'}</span>
          </button>
          <div className="flex items-center gap-2">
            <div className="bg-primary p-1.5 rounded-lg">
              <span className="material-symbols-outlined text-white text-xl">spa</span>
            </div>
            <span className="text-lg font-extrabold tracking-tight text-gray-900">PAM</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-600 relative">
            <span className="material-symbols-outlined text-xl">notifications</span>
            <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></span>
          </button>
          <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
            {initials}
          </div>
        </div>
      </div>

      {/* Mobile: Backdrop */}
      {isMobileOpen && (
        <div className="md:hidden fixed inset-0 bg-black/30 z-40 pt-16" onClick={() => setIsMobileOpen(false)}></div>
      )}

      {/* Mobile: Slide menu */}
      <div className={`md:hidden fixed top-16 left-0 bottom-0 w-72 bg-white z-50 transform transition-transform duration-300 ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'} shadow-xl border-r border-gray-200 flex flex-col`}>
        <nav className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-1">
          {navItems.map(item => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setIsMobileOpen(false)}
              className={`flex items-center gap-4 px-4 py-3.5 rounded-xl transition-colors ${isActive(item.to) ? 'bg-primary/10 text-primary' : 'text-gray-500 hover:bg-gray-50 hover:text-primary'
                }`}
            >
              <span className={`material-symbols-outlined text-2xl ${isActive(item.to) ? 'fill-1' : ''}`}>{item.icon}</span>
              <span className="text-base font-bold">{item.label}</span>
            </Link>
          ))}

          <div className="my-3 border-t border-gray-100"></div>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-3 p-2 rounded-xl mb-2">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-base flex-shrink-0">
              {initials}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-gray-900 truncate">{userName || 'Roberto Martínez'}</p>
              <p className="text-xs text-gray-500">Productor Verificado</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 p-2.5 rounded-xl text-red-500 hover:bg-red-50 transition-colors font-bold text-sm"
          >
            <span className="material-symbols-outlined text-lg">logout</span> Cerrar Sesión
          </button>
        </div>
      </div>

      {/* Desktop Sidebar — only visible md and above */}
      <aside className="hidden md:flex w-20 lg:w-72 bg-white border-r border-gray-200 flex-col flex-shrink-0 z-30 h-screen sticky top-0">
        <div className="h-24 flex items-center justify-center lg:justify-start px-0 lg:px-8 border-b border-gray-100">
          <div className="bg-primary p-2 rounded-lg bg-opacity-90 flex-shrink-0">
            <span className="material-symbols-outlined text-white text-3xl">spa</span>
          </div>
          <div className="hidden lg:flex flex-col ml-3">
            <span className="text-2xl font-extrabold tracking-tight text-gray-900">PAM</span>
            <span className="text-xs text-gray-500 font-medium">Mis Producciones</span>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-8 px-2 lg:px-4 flex flex-col gap-2">
          {navItems.map(item => (
            <Link
              key={item.to}
              to={item.to}
              className={`flex items-center gap-4 px-2 lg:px-4 py-4 rounded-xl transition-colors justify-center lg:justify-start ${isActive(item.to) && !item.isNavLink ? 'bg-primary/10 text-primary' : 'text-gray-500 hover:bg-gray-50 hover:text-primary'
                } group`}
            >
              <span className={`material-symbols-outlined text-3xl group-hover:scale-110 transition-transform ${isActive(item.to) && !item.isNavLink ? 'fill-1' : ''}`}>{item.icon}</span>
              <span className="hidden lg:block text-lg font-bold">{item.label}</span>
            </Link>
          ))}

          <div className="my-4 border-t border-gray-100"></div>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-3 w-full p-2 rounded-xl justify-center lg:justify-start">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg lg:text-xl flex-shrink-0">
              {initials}
            </div>
            <div className="hidden lg:block flex-1 min-w-0">
              <p className="text-sm font-bold text-gray-900 truncate">{userName || 'Roberto Martínez'}</p>
              <p className="text-xs text-gray-500">Productor Verificado</p>
            </div>
            <button
              onClick={handleLogout}
              title="Cerrar sesión"
              className="hidden lg:flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors ml-auto p-1 rounded-lg hover:bg-red-50"
            >
              <span className="material-symbols-outlined">logout</span>
            </button>
          </div>
          {/* Logout en tablet (md but not lg) */}
          <button
            onClick={handleLogout}
            title="Cerrar sesión"
            className="lg:hidden mt-2 w-full flex items-center justify-center p-2 rounded-xl text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
          >
            <span className="material-symbols-outlined text-2xl">logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;