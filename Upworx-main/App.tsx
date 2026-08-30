
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Partners } from './components/Partners';
import { Categories } from './components/Categories';
import { FeaturedProducts } from './components/FeaturedProducts';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { ContactPage } from './components/ContactPage';
import { MachineryPage } from './components/MachineryPage';
import { AboutPage } from './components/AboutPage';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'contact' | 'machinery' | 'about'>('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (view: 'home' | 'contact' | 'machinery' | 'about') => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header 
        scrolled={scrolled} 
        onNavigate={navigateTo} 
        currentView={currentView}
      />
      <main className="flex-grow">
        {currentView === 'home' && (
          <>
            <Hero onContactClick={() => navigateTo('contact')} />
            <Partners />
            <Categories />
            <FeaturedProducts />
            <AboutSection />
            <ContactSection onContactClick={() => navigateTo('contact')} />
          </>
        )}
        {currentView === 'contact' && <ContactPage />}
        {currentView === 'machinery' && <MachineryPage onInquiryClick={() => navigateTo('contact')} />}
        {currentView === 'about' && <AboutPage onContactClick={() => navigateTo('contact')} />}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
