import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { FeaturedProducts } from './components/FeaturedProducts';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { Partners } from './components/Partners';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { ContactPage } from './components/ContactPage';
import { MachineryPage } from './components/MachineryPage';
import { AboutPage } from './components/AboutPage';
import { CareerPage } from './components/CareerPage';
import { Footer } from './components/Footer';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'contact' | 'machinery' | 'about' | 'career'>('home');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedMachine, setSelectedMachine] = useState<string | null>(null);

  // Sync state from current browser URL
  const syncStateFromUrl = () => {
    const pathname = window.location.pathname.toLowerCase();
    if (pathname.startsWith('/iekartas')) {
      const parts = pathname.split('/').filter(Boolean);
      const cat = parts[1] || null;
      setCurrentView('machinery');
      setSelectedCategory(cat);
    } else if (pathname === '/par-mums' || pathname === '/about') {
      setCurrentView('about');
      setSelectedCategory(null);
    } else if (pathname === '/karjera' || pathname === '/career') {
      setCurrentView('career');
      setSelectedCategory(null);
    } else if (pathname === '/kontakti' || pathname === '/contact') {
      setCurrentView('contact');
      setSelectedCategory(null);
    } else {
      setCurrentView('home');
      setSelectedCategory(null);
    }
  };

  useEffect(() => {
    syncStateFromUrl();

    const handlePopState = () => {
      syncStateFromUrl();
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update dynamic page title based on view and category
  useEffect(() => {
    if (currentView === 'machinery') {
      if (selectedCategory === 'metalapstrade') {
        document.title = 'Metālapstrādes Iekārtas | UPWORX';
      } else if (selectedCategory === 'lazera-griesana') {
        document.title = 'Lāzera Griešanas Iekārtas | UPWORX';
      } else if (selectedCategory === 'cnc-iekartas') {
        document.title = 'CNC Iekārtas | UPWORX';
      } else if (selectedCategory === 'automatizacija') {
        document.title = 'Automatizācijas Iekārtas | UPWORX';
      } else {
        document.title = 'Iekārtu Katalogs | UPWORX';
      }
    } else if (currentView === 'about') {
      document.title = 'Par Mums | UPWORX';
    } else if (currentView === 'career') {
      document.title = 'Karjera | UPWORX';
    } else if (currentView === 'contact') {
      document.title = 'Kontakti | UPWORX';
    } else {
      document.title = 'UPWORX | Industriālie Risinājumi';
    }
  }, [currentView, selectedCategory]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (
    view: 'home' | 'contact' | 'machinery' | 'about' | 'career', 
    categoryId?: string | null, 
    machineName?: string
  ) => {
    const normalizedCategory = categoryId && categoryId !== 'all' ? categoryId : null;
    setSelectedCategory(normalizedCategory);

    if (machineName) {
      setSelectedMachine(machineName);
    } else if (view !== 'contact') {
      setSelectedMachine(null);
    }
    setCurrentView(view);

    // Compute unique URL path
    let targetPath = '/';
    if (view === 'machinery') {
      if (normalizedCategory) {
        targetPath = `/iekartas/${normalizedCategory}`;
      } else {
        targetPath = '/iekartas';
      }
    } else if (view === 'about') {
      targetPath = '/par-mums';
    } else if (view === 'career') {
      targetPath = '/karjera';
    } else if (view === 'contact') {
      targetPath = '/kontakti';
    }

    if (window.location.pathname !== targetPath) {
      window.history.pushState({ view, categoryId: normalizedCategory, machineName }, '', targetPath);
    }

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
            {/* 1. Hero Section */}
            <Hero 
              onContactClick={() => navigateTo('contact')} 
              onCatalogClick={() => navigateTo('machinery')}
            />

            {/* 2. Iekārtu Katalogs Kategorijas */}
            <Categories 
              onViewAll={() => navigateTo('machinery')} 
              onSelectCategory={(catId) => navigateTo('machinery', catId)}
            />

            {/* 3. Jaunākās iekārtas */}
            <FeaturedProducts 
              onSelectMachine={(categoryId, machineId) => navigateTo('machinery', machineId)}
              onViewAllMachinery={() => navigateTo('machinery')} 
            />

            {/* 4. Pakalpojumi un serviss (6 kartītes) pirms Kāpēc izvēlēties mūs */}
            <ServicesSection />

            {/* 5. Kāpēc izvēlēties UPWORX? (ar tekstu, attēlu un 5 statistikas rādītājiem) */}
            <AboutSection />

            {/* 6. Ražotāju logo karuselis zem Kāpēc izvēlēties Upworx (pusātrumā ar 3 sek. pauzi pie katra zīmola) */}
            <Partners />

            {/* 7. Realizētie projekti (6 kartītes ar horizontālu ritināšanu) */}
            <ProjectsSection />

            {/* 8. Saziņas aicinājuma sadaļa */}
            <ContactSection onContactClick={() => navigateTo('contact')} />
          </>
        )}

        {currentView === 'contact' && (
          <ContactPage initialMachineName={selectedMachine} />
        )}

        {currentView === 'machinery' && (
          <MachineryPage 
            onInquiryClick={(machineName) => navigateTo('contact', undefined, machineName)} 
            selectedCategory={selectedCategory}
            onSelectCategory={(catId) => navigateTo('machinery', catId)}
          />
        )}

        {currentView === 'about' && (
          <AboutPage onContactClick={() => navigateTo('contact')} />
        )}

        {currentView === 'career' && (
          <CareerPage onContactClick={() => navigateTo('contact')} />
        )}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
