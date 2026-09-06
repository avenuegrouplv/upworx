import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';

export type Language = 'LV' | 'ENG' | 'RU';

interface HeaderProps {
  scrolled: boolean;
  onNavigate: (view: 'home' | 'contact' | 'machinery' | 'about' | 'career') => void;
  currentView: 'home' | 'contact' | 'machinery' | 'about' | 'career';
  currentLang?: Language;
  onLanguageChange?: (lang: Language) => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  scrolled, 
  onNavigate, 
  currentView,
  currentLang = 'LV',
  onLanguageChange
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [internalLang, setInternalLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('upworx_language') as Language;
      if (saved && ['LV', 'ENG', 'RU'].includes(saved)) return saved;
    }
    return currentLang;
  });

  const activeLang = onLanguageChange ? currentLang : internalLang;

  const handleLangSelect = (lang: Language) => {
    setInternalLang(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('upworx_language', lang);
    }
    if (onLanguageChange) {
      onLanguageChange(lang);
    }
  };

  const handleNav = (view: 'home' | 'contact' | 'machinery' | 'about' | 'career') => {
    onNavigate(view);
    setMobileMenuOpen(false);
  };

  return (
    <header 
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || currentView !== 'home' ? 'bg-black/95 py-3 shadow-xl backdrop-blur-sm' : 'bg-black/40 backdrop-blur-[2px] py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div 
          className="flex items-center cursor-pointer group"
          onClick={() => handleNav('home')}
        >
          <svg width="40" height="40" viewBox="0 0 100 100" className="mr-3">
            <path d="M10 80 L30 60 L50 70 L80 30" fill="none" stroke="#2c9db1" strokeWidth="12" strokeLinecap="round" />
            <path d="M60 30 L80 30 L80 50" fill="none" stroke="#2c9db1" strokeWidth="12" strokeLinecap="round" />
          </svg>
          <span className="text-2xl font-extrabold tracking-tighter text-white">
            UP<span className="text-teal-custom">WORX</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-xs xl:text-sm font-semibold uppercase tracking-widest text-white translate-x-4 xl:translate-x-8">
          <button 
            onClick={() => handleNav('home')} 
            className={`hover:text-teal-custom transition-colors cursor-pointer py-1 ${currentView === 'home' ? 'text-teal-custom border-b-2 border-teal-custom' : ''}`}
          >
            Sākums
          </button>
          <button 
            onClick={() => handleNav('about')} 
            className={`hover:text-teal-custom transition-colors cursor-pointer py-1 ${currentView === 'about' ? 'text-teal-custom border-b-2 border-teal-custom' : ''}`}
          >
            Par mums
          </button>
          <button 
            onClick={() => handleNav('machinery')} 
            className={`hover:text-teal-custom transition-colors cursor-pointer py-1 ${currentView === 'machinery' ? 'text-teal-custom border-b-2 border-teal-custom' : ''}`}
          >
            Iekārtas
          </button>
          <button 
            onClick={() => handleNav('career')} 
            className={`hover:text-teal-custom transition-colors cursor-pointer py-1 ${currentView === 'career' ? 'text-teal-custom border-b-2 border-teal-custom' : ''}`}
          >
            Karjera
          </button>
          <button 
            onClick={() => handleNav('contact')} 
            className={`hover:text-teal-custom transition-colors cursor-pointer py-1 ${currentView === 'contact' ? 'text-teal-custom border-b-2 border-teal-custom' : ''}`}
          >
            Kontakti
          </button>
        </nav>

        {/* Action button, Language switcher & Mobile Toggle */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <div className="hidden xl:block text-right pr-1">
            <p className="text-[10px] text-gray-400 uppercase tracking-tighter">Tālrunis</p>
            <a href="tel:+37126474339" className="text-white font-bold text-xs hover:text-teal-custom transition-colors block whitespace-nowrap">
              +371 26474339
            </a>
          </div>
          <button 
            id="header-start-collab-btn"
            onClick={() => handleNav('contact')}
            className="hidden sm:inline-block bg-teal-custom hover:bg-teal-600 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-sm text-xs font-bold uppercase tracking-widest transition-colors shadow-lg shadow-teal-900/20 cursor-pointer whitespace-nowrap"
          >
            Sākt sadarbību
          </button>

          {/* Valodu izvēlne - LV, ENG, RU */}
          <div 
            id="header-language-switcher"
            className="flex items-center bg-zinc-900/90 border border-zinc-700/80 rounded-sm p-0.5 text-xs font-bold tracking-wider shadow-inner"
            role="group"
            aria-label="Izvēlēties valodu"
          >
            {(['LV', 'ENG', 'RU'] as const).map((lang) => {
              const isActive = activeLang === lang;
              return (
                <button
                  key={lang}
                  id={`lang-btn-${lang.toLowerCase()}`}
                  type="button"
                  onClick={() => handleLangSelect(lang)}
                  className={`px-2 py-1 rounded-xs transition-all duration-150 cursor-pointer text-[11px] font-black uppercase ${
                    isActive
                      ? 'bg-teal-custom text-white shadow-xs'
                      : 'text-zinc-400 hover:text-white hover:bg-white/10'
                  }`}
                  title={`Valoda: ${lang}`}
                >
                  {lang}
                </button>
              );
            })}
          </div>
          
          <button 
            id="mobile-menu-toggle"
            aria-label="Toggle Navigation Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white hover:text-teal-custom p-1.5 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-zinc-950/98 border-t border-zinc-800 px-6 py-6 mt-3 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <button 
            onClick={() => handleNav('home')} 
            className={`block w-full text-left py-2 text-base font-bold uppercase tracking-wider ${currentView === 'home' ? 'text-teal-custom' : 'text-white'}`}
          >
            Sākums
          </button>
          <button 
            onClick={() => handleNav('about')} 
            className={`block w-full text-left py-2 text-base font-bold uppercase tracking-wider ${currentView === 'about' ? 'text-teal-custom' : 'text-white'}`}
          >
            Par mums
          </button>
          <button 
            onClick={() => handleNav('machinery')} 
            className={`block w-full text-left py-2 text-base font-bold uppercase tracking-wider ${currentView === 'machinery' ? 'text-teal-custom' : 'text-white'}`}
          >
            Iekārtas
          </button>
          <button 
            onClick={() => handleNav('career')} 
            className={`block w-full text-left py-2 text-base font-bold uppercase tracking-wider ${currentView === 'career' ? 'text-teal-custom' : 'text-white'}`}
          >
            Karjera
          </button>
          <button 
            onClick={() => handleNav('contact')} 
            className={`block w-full text-left py-2 text-base font-bold uppercase tracking-wider ${currentView === 'contact' ? 'text-teal-custom' : 'text-white'}`}
          >
            Kontakti
          </button>
          
          <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
            <span className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">Valoda / Language:</span>
            <div className="flex items-center bg-zinc-900 border border-zinc-700 rounded-sm p-0.5">
              {(['LV', 'ENG', 'RU'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => handleLangSelect(lang)}
                  className={`px-3 py-1 text-xs font-black rounded-xs transition-all ${
                    activeLang === lang ? 'bg-teal-custom text-white' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2 text-gray-400 text-sm">
            <p className="text-xs uppercase tracking-wider">Tālrunis: <a href="tel:+37126474339" className="text-white font-bold hover:text-teal-custom transition-colors">+371 26474339</a></p>
            <p className="text-xs uppercase tracking-wider mt-1">E-pasts: <span className="text-teal-custom">info@upworx.lv</span></p>
          </div>
        </div>
      )}
    </header>
  );
};
