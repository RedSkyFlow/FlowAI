import React from 'react';
import HeroSection from './components/HeroSection';
import CoreOffering from './components/CoreOffering';
import CustomerLogos from './components/CustomerLogos';
import FeaturesSection from './components/FeaturesSection';
import CnnTapSection from './components/CnnTapSection';
import ProductSuiteSection from './components/ProductSuiteSection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <CoreOffering />
      <CustomerLogos />
      <FeaturesSection />
      <CnnTapSection />
      <ProductSuiteSection />
    </>
  );
};

export default HomePage;
