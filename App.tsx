
import React, { useEffect } from 'react';
import AppHeader from './components/AppHeader';
import Footer from './components/Footer';
import HomePage from './HomePage';
import ProductsOverview from './pages/ProductsOverview';
import { usePathname } from './hooks/usePathname';

const App: React.FC = () => {
  const pathname = usePathname();

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

  const renderPage = () => {
    if (pathname.startsWith('/products')) {
      return <ProductsOverview />;
    }
    return <HomePage />;
  }

  return (
    <div className="min-h-screen font-sans flex flex-col">
      <AppHeader />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
