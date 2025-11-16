
import React, { useEffect } from 'react';
import AppHeader from './components/AppHeader';
import Footer from './components/Footer';
import HomePage from './HomePage';
import ProductsOverview from './pages/ProductsOverview';
import { usePathname, navigate } from './hooks/usePathname';
import IntelligentWifi from './pages/IntelligentWifi';
import ParticleBackground from './components/ParticleBackground';

const App: React.FC = () => {
  const pathname = usePathname();

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      document.body.style.setProperty('--mouse-x', `${event.clientX}px`);
      document.body.style.setProperty('--mouse-y', `${event.clientY}px`);
    };
    
    document.body.addEventListener('mousemove', handleMouseMove);

    const handleLinkClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const anchor = target.closest('a');

      if (
        anchor &&
        anchor.target !== '_blank' &&
        anchor.href &&
        anchor.getAttribute('href')?.startsWith('/')
      ) {
        if (!event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
          event.preventDefault();
          if (anchor.pathname !== window.location.pathname) {
            navigate(anchor.pathname);
          }
        }
      }
    };

    window.addEventListener('click', handleLinkClick);
    
    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleLinkClick);
    };
  }, []);

  const renderPage = () => {
    if (pathname.startsWith('/products/intelligent-wifi')) {
      return <IntelligentWifi />;
    }
    if (pathname.startsWith('/products')) {
      return <ProductsOverview />;
    }
    return <HomePage />;
  }

  return (
    <div className="min-h-screen font-sans flex flex-col bg-transparent">
      <ParticleBackground />
      <AppHeader />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;