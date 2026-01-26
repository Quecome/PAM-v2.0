import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="w-20 lg:w-72 bg-white border-r border-gray-200 flex flex-col flex-shrink-0 z-30 h-screen sticky top-0">
      <div className="h-24 flex items-center justify-center lg:justify-start px-0 lg:px-8 border-b border-gray-100">
        <div className="bg-primary p-2 rounded-lg bg-opacity-90 flex-shrink-0">
          <span className="material-symbols-outlined text-white text-3xl">spa</span>
        </div>
        <div className="hidden lg:flex flex-col ml-3">
          <span className="text-2xl font-extrabold tracking-tight text-gray-900">PAM</span>
          <span className="text-xs text-gray-500 font-medium">Panel de Productor</span>
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto py-8 px-2 lg:px-4 flex flex-col gap-2">
        <Link to="/" className="flex items-center gap-4 px-2 lg:px-4 py-4 rounded-xl text-gray-500 hover:bg-gray-50 hover:text-primary transition-colors group justify-center lg:justify-start">
          <span className="material-symbols-outlined text-3xl group-hover:scale-110 transition-transform">home</span>
          <span className="hidden lg:block text-lg font-bold">Volver al Sitio</span>
        </Link>
        <Link to="/dashboard" className={`flex items-center gap-4 px-2 lg:px-4 py-4 rounded-xl transition-colors justify-center lg:justify-start ${isActive('/dashboard') ? 'bg-primary/10 text-primary' : 'text-gray-500 hover:bg-gray-50 hover:text-primary'}`}>
          <span className={`material-symbols-outlined text-3xl ${isActive('/dashboard') ? 'fill-1' : ''}`}>grass</span>
          <span className="hidden lg:block text-lg font-bold">Mis Cultivos</span>
        </Link>
        <Link to="/orders" className={`flex items-center gap-4 px-2 lg:px-4 py-4 rounded-xl transition-colors justify-center lg:justify-start ${isActive('/orders') ? 'bg-primary/10 text-primary' : 'text-gray-500 hover:bg-gray-50 hover:text-primary'}`}>
          <span className={`material-symbols-outlined text-3xl ${isActive('/orders') ? 'fill-1' : ''}`}>inventory_2</span>
          <span className="hidden lg:block text-lg font-bold">Mis Pedidos</span>
        </Link>
        <Link to="#" className="flex items-center gap-4 px-2 lg:px-4 py-4 rounded-xl text-gray-500 hover:bg-gray-50 hover:text-primary transition-colors group justify-center lg:justify-start">
          <span className="material-symbols-outlined text-3xl group-hover:scale-110 transition-transform">payments</span>
          <span className="hidden lg:block text-lg font-bold">Ventas</span>
        </Link>
        <div className="my-4 border-t border-gray-100"></div>
        <Link to="/producer/1" className="flex items-center gap-4 px-2 lg:px-4 py-4 rounded-xl text-gray-500 hover:bg-gray-50 hover:text-primary transition-colors group justify-center lg:justify-start">
          <span className="material-symbols-outlined text-3xl group-hover:scale-110 transition-transform">person</span>
          <span className="hidden lg:block text-lg font-bold">Mi Perfil</span>
        </Link>
      </nav>
      <div className="p-4 border-t border-gray-200">
        <Link to="/login" className="flex items-center gap-3 w-full p-2 rounded-xl hover:bg-gray-50 transition-colors text-left justify-center lg:justify-start">
          <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold text-lg lg:text-xl">
            RM
          </div>
          <div className="hidden lg:block">
            <p className="text-sm font-bold text-gray-900">Roberto Martínez</p>
            <p className="text-xs text-gray-500">Uruapan, Mich.</p>
          </div>
          <span className="hidden lg:block material-symbols-outlined text-gray-400 ml-auto">logout</span>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;