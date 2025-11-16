
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppHeader from './components/AppHeader';
import Footer from './components/Footer';
import HomePage from './HomePage';
import ProductsOverview from './pages/ProductsOverview';
import IntelligentWifi from './pages/IntelligentWifi';
import ParticleBackground from './components/ParticleBackground';

const App: React.FC = () => {

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      document.body.style.setProperty('--mouse-x', `${event.clientX}px`);
      document.body.style.setProperty('--mouse-y', `${event.clientY}px`);
    };
    
    document.body.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen font-sans flex flex-col bg-transparent">
        <ParticleBackground />
        <AppHeader />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsOverview />} />
            <Route path="/products/intelligent-wifi" element={<IntelligentWifi />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
