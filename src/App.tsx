import React, { useState, useEffect } from 'react';
import { Header, Language } from './components/Header';
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
import { CookieBanner } from './components/CookieBanner';
import { ALL_MACHINERY } from './data/machineryData';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'contact' | 'machinery' | 'about' | 'career'>('home');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedMachine, setSelectedMachine] = useState<string | null>(null);
  const [openCookiePreferences, setOpenCookiePreferences] = useState(false);
  const [openPrivacyModal, setOpenPrivacyModal] = useState(false);
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('upworx_language');
      if (saved && ['LV', 'ENG', 'RU'].includes(saved)) {
        return saved as Language;
      }
    }
    return 'LV';
  });

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('upworx_language', lang);
    }
  };

  // Sync state from current browser URL
  const syncStateFromUrl = () => {
    const pathname = window.location.pathname.toLowerCase();
    if (pathname.startsWith('/iekartas')) {
      const parts = pathname.split('/').filter(Boolean);
      // parts[0] === 'iekartas'
      const cat = parts[1] || 'metalapstrade';
      const machine = parts[2] || null;
      setCurrentView('machinery');
      setSelectedCategory(cat);
      setSelectedMachine(machine);
    } else if (pathname === '/par-mums' || pathname === '/about') {
      setCurrentView('about');
      setSelectedCategory(null);
      setSelectedMachine(null);
    } else if (pathname === '/karjera' || pathname === '/career') {
      setCurrentView('career');
      setSelectedCategory(null);
      setSelectedMachine(null);
    } else if (pathname === '/kontakti' || pathname === '/contact') {
      setCurrentView('contact');
      setSelectedCategory(null);
      setSelectedMachine(null);
    } else if (pathname === '/privatuma-politika' || pathname === '/privacy') {
      setCurrentView('home');
      setSelectedCategory(null);
      setSelectedMachine(null);
      setOpenPrivacyModal(true);
    } else {
      setCurrentView('home');
      setSelectedCategory(null);
      setSelectedMachine(null);
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

  // Update dynamic page title based on view, category and machine
  useEffect(() => {
    if (currentView === 'machinery') {
      if (selectedMachine) {
        const found = ALL_MACHINERY.find(m => m.id === selectedMachine);
        if (found) {
          document.title = `${found.brand} ${found.model} | UPWORX`;
        } else {
          document.title = 'Iekārtas | UPWORX';
        }
      } else if (selectedCategory === 'metalapstrade') {
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
  }, [currentView, selectedCategory, selectedMachine]);

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
    machineIdOrName?: string | null,
    scrollToTop: boolean = true
  ) => {
    const normalizedCategory = categoryId && categoryId !== 'all' 
      ? categoryId 
      : (view === 'machinery' ? (selectedCategory || 'metalapstrade') : null);
    
    setSelectedCategory(normalizedCategory);

    if (view === 'machinery') {
      setSelectedMachine(machineIdOrName || null);
    } else if (view === 'contact') {
      setSelectedMachine(machineIdOrName || null);
    } else {
      setSelectedMachine(null);
    }
    setCurrentView(view);

    // Compute unique URL path
    let targetPath = '/';
    if (view === 'machinery') {
      if (normalizedCategory && machineIdOrName) {
        targetPath = `/iekartas/${normalizedCategory}/${machineIdOrName}`;
      } else if (normalizedCategory) {
        targetPath = `/iekartas/${normalizedCategory}`;
      } else {
        targetPath = '/iekartas/metalapstrade';
      }
    } else if (view === 'about') {
      targetPath = '/par-mums';
    } else if (view === 'career') {
      targetPath = '/karjera';
    } else if (view === 'contact') {
      targetPath = '/kontakti';
    }

    if (window.location.pathname !== targetPath) {
      window.history.pushState({ view, categoryId: normalizedCategory, machineId: machineIdOrName }, '', targetPath);
    }

    if (scrollToTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div id="upworx-app" className="flex flex-col min-h-screen bg-white text-gray-900 font-sans">
      <Header 
        scrolled={scrolled} 
        onNavigate={navigateTo} 
        currentView={currentView}
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
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

            {/* 5. Kāpēc izvēlēties UPWORX? */}
            <AboutSection />

            {/* 6. Realizētie projekti */}
            <ProjectsSection />

            {/* 7. Sadarbības partneri logo karuselis virs kontaktu formas */}
            <Partners />

            {/* 8. Saziņas aicinājuma sadaļa */}
            <ContactSection onContactClick={() => navigateTo('contact')} />
          </>
        )}

        {currentView === 'contact' && (
          <ContactPage initialMachineName={selectedMachine} />
        )}

        {currentView === 'machinery' && (
          <MachineryPage 
            selectedCategorySlug={selectedCategory || 'metalapstrade'}
            selectedMachineId={selectedMachine}
            onSelectCategory={(catId) => navigateTo('machinery', catId, null, false)}
            onSelectMachine={(catId, machineId) => navigateTo('machinery', catId, machineId, true)}
            onInquiryClick={(machineName) => navigateTo('contact', undefined, machineName, true)} 
          />
        )}

        {currentView === 'about' && (
          <AboutPage onContactClick={() => navigateTo('contact')} />
        )}

        {currentView === 'career' && (
          <CareerPage onContactClick={() => navigateTo('contact')} />
        )}
      </main>
      <Footer 
        onNavigate={navigateTo} 
        onOpenCookieSettings={() => setOpenCookiePreferences(true)}
        onOpenPrivacyPolicy={() => setOpenPrivacyModal(true)}
      />
      
      {/* GDPR/VDAR atbilstošs Sīkdatņu paziņojums un izvēles logs */}
      <CookieBanner 
        forceOpenPreferences={openCookiePreferences}
        onCloseExternalTrigger={() => setOpenCookiePreferences(false)}
        forceOpenPrivacyPolicy={openPrivacyModal}
        onClosePrivacyTrigger={() => setOpenPrivacyModal(false)}
      />
    </div>
  );
}
