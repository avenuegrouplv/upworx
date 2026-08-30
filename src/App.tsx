import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { FeaturedProducts } from './components/FeaturedProducts';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { ContactPage } from './components/ContactPage';
import { MachineryPage } from './components/MachineryPage';
import { AboutPage } from './components/AboutPage';
import { Footer } from './components/Footer';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'contact' | 'machinery' | 'about'>('home');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (view: 'home' | 'contact' | 'machinery' | 'about', categoryId?: string) => {
    if (categoryId) {
      setSelectedCategory(categoryId);
    } else {
      setSelectedCategory(null);
    }
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="upworx-app" className="flex flex-col min-h-screen bg-white text-gray-900 font-sans">
      <Header 
        scrolled={scrolled} 
        onNavigate={navigateTo} 
        currentView={currentView}
      />
      <main className="flex-grow">
        {currentView === 'home' && (
          <>
            <Hero 
              onContactClick={() => navigateTo('contact')} 
              onCatalogClick={() => navigateTo('machinery')}
            />
            <Categories 
              onViewAll={() => navigateTo('machinery')} 
              onSelectCategory={(catId) => navigateTo('machinery', catId)}
            />
            <FeaturedProducts onViewAllMachinery={() => navigateTo('machinery')} />
            <AboutSection />
            <ContactSection onContactClick={() => navigateTo('contact')} />
          </>
        )}
        {currentView === 'contact' && <ContactPage />}
        {currentView === 'machinery' && (
          <MachineryPage 
            onInquiryClick={() => navigateTo('contact')} 
            selectedCategory={selectedCategory}
          />
        )}
        {currentView === 'about' && <AboutPage onContactClick={() => navigateTo('contact')} />}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
