import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import ProducerDetail from './pages/ProducerDetail';
import Producers from './pages/Producers';
import Certifications from './pages/Certifications';
import About from './pages/About';
import Support from './pages/Support';
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