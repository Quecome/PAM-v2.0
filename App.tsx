import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
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

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen w-full relative">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/producers" element={<Producers />} />
          <Route path="/producer/:id" element={<ProducerDetail />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
        </Routes>
        
        {/* Global Chatbot available on all pages */}
        <Chatbot />
      </div>
    </HashRouter>
  );
};

export default App;