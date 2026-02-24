import React from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Landing from './features/landing/Landing';
import Login from './features/auth/Login';
import Register from './features/auth/Register';
import Dashboard from './features/dashboard/Dashboard';
import Orders from './features/dashboard/Orders';
import ProducerDetail from './features/directory/ProducerDetail';
import Producers from './features/directory/Producers';
import Certifications from './features/certifications/Certifications';
import About from './features/about/About';
import Support from './features/support/Support';
import Chatbot from './components/Chatbot';

// ── Utilidad: scroll al tope en cada cambio de ruta ──
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

// ── Guardia de ruta: redirige a /login si no hay sesión ──
const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();
  if (!isLoggedIn) return <Navigate to="/login" state={{ from: location }} replace />;
  return <>{children}</>;
};

// ──────────────── APLICACIÓN PRINCIPAL ────────────────
const App: React.FC = () => (
  <AuthProvider>
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen w-full relative">
        <Routes>
          {/* Rutas públicas */}
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/producers" element={<Producers />} />
          <Route path="/producer/:id" element={<ProducerDetail />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />

          {/* Rutas protegidas */}
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/orders" element={<PrivateRoute><Orders /></PrivateRoute>} />
        </Routes>
        <Chatbot />
      </div>
    </HashRouter>
  </AuthProvider>
);

export default App;