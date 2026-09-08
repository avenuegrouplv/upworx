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
import { CookieBanner } from './components/CookieBanner';
import { ALL_MACHINERY } from './data/machineryData';
import { useLanguage } from './context/LanguageContext';

export default function App() {
  const { language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'contact' | 'machinery' | 'about' | 'career'>('home');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedMachine, setSelectedMachine] = useState<string | null>(null);
  const [openCookiePreferences, setOpenCookiePreferences] = useState(false);
  const [openPrivacyModal, setOpenPrivacyModal] = useState(false);

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

  // Update dynamic page title based on view, category, machine, and current language
  useEffect(() => {
    const titles = {
      LV: {
        home: 'UPWORX | Industriālie Risinājumi',
        about: 'Par Mums | UPWORX',
        career: 'Karjera | UPWORX',
        contact: 'Kontakti | UPWORX',
        machinery: 'Iekārtu Katalogs | UPWORX',
        metalapstrade: 'Metālapstrādes Iekārtas | UPWORX',
        'lazera-griesana': 'Lāzera Griešanas Iekārtas | UPWORX',
        'cnc-iekartas': 'CNC Iekārtas | UPWORX',
        automatizacija: 'Automatizācijas Iekārtas | UPWORX',
        defaultMachinery: 'Iekārtas | UPWORX',
      },
      ENG: {
        home: 'UPWORX | Industrial Solutions',
        about: 'About Us | UPWORX',
        career: 'Career | UPWORX',
        contact: 'Contact Us | UPWORX',
        machinery: 'Machinery Catalog | UPWORX',
        metalapstrade: 'Metalworking Machinery | UPWORX',
        'lazera-griesana': 'Laser Cutting Machinery | UPWORX',
        'cnc-iekartas': 'CNC Machinery | UPWORX',
        automatizacija: 'Automation Equipment | UPWORX',
        defaultMachinery: 'Machinery | UPWORX',
      },
      RU: {
        home: 'UPWORX | Промышленные Решения',
        about: 'О Нас | UPWORX',
        career: 'Карьера | UPWORX',
        contact: 'Контакты | UPWORX',
        machinery: 'Каталог Оборудования | UPWORX',
        metalapstrade: 'Металлообрабатывающее Оборудование | UPWORX',
        'lazera-griesana': 'Оборудование для Лазерной Резки | UPWORX',
        'cnc-iekartas': 'Станки с ЧПУ | UPWORX',
        automatizacija: 'Оборудование для Автоматизации | UPWORX',
        defaultMachinery: 'Оборудование | UPWORX',
      }
    };

    const cur = titles[language] || titles.LV;

    if (currentView === 'machinery') {
      if (selectedMachine) {
        const found = ALL_MACHINERY.find(m => m.id === selectedMachine);
        if (found) {
          document.title = `${found.brand} ${found.model} | UPWORX`;
        } else {
          document.title = cur.defaultMachinery;
        }
      } else if (selectedCategory && (cur as Record<string, string>)[selectedCategory]) {
        document.title = (cur as Record<string, string>)[selectedCategory];
      } else {
        document.title = cur.machinery;
      }
    } else if (currentView === 'about') {
      document.title = cur.about;
    } else if (currentView === 'career') {
      document.title = cur.career;
    } else if (currentView === 'contact') {
      document.title = cur.contact;
    } else {
      document.title = cur.home;
    }
  }, [currentView, selectedCategory, selectedMachine, language]);

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
        currentLang={language}
        onLanguageChange={setLanguage}
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
              onRequestPrice={(machineName) => navigateTo('contact', undefined, machineName, true)}
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
