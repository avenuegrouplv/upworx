import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Language } from '../i18n/types';
import { useLanguage } from '../context/LanguageContext';

export type { Language };

interface HeaderProps {
  scrolled: boolean;
  onNavigate: (view: 'home' | 'contact' | 'machinery' | 'about' | 'career') => void;
  currentView: 'home' | 'contact' | 'machinery' | 'about' | 'career';
}

export const Header: React.FC<HeaderProps> = ({ 
  scrolled, 
  onNavigate, 
  currentView
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const nav = t.header;

  const handleLangSelect = (lang: Language) => {
    setLanguage(lang);
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
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center gap-2 min-w-0">
        <div 
          className="flex items-center cursor-pointer group shrink-0"
          onClick={() => handleNav('home')}
        >
          <svg width="34" height="34" viewBox="0 0 100 100" className="mr-2 sm:mr-3 sm:w-10 sm:h-10 shrink-0">
            <path d="M10 80 L30 60 L50 70 L80 30" fill="none" stroke="#2c9db1" strokeWidth="12" strokeLinecap="round" />
            <path d="M60 30 L80 30 L80 50" fill="none" stroke="#2c9db1" strokeWidth="12" strokeLinecap="round" />
          </svg>
          <span className="text-xl sm:text-2xl font-extrabold tracking-tighter text-white whitespace-nowrap">
            UP<span className="text-teal-custom">WORX</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-xs xl:text-sm font-semibold uppercase tracking-widest text-white translate-x-4 xl:translate-x-8">
          <button 
            onClick={() => handleNav('home')} 
            className={`hover:text-teal-custom transition-colors cursor-pointer py-1 ${currentView === 'home' ? 'text-teal-custom border-b-2 border-teal-custom' : ''}`}
          >
            {nav.home}
          </button>
          <button 
            onClick={() => handleNav('about')} 
            className={`hover:text-teal-custom transition-colors cursor-pointer py-1 ${currentView === 'about' ? 'text-teal-custom border-b-2 border-teal-custom' : ''}`}
          >
            {nav.about}
          </button>
          <button 
            onClick={() => handleNav('machinery')} 
            className={`hover:text-teal-custom transition-colors cursor-pointer py-1 ${currentView === 'machinery' ? 'text-teal-custom border-b-2 border-teal-custom' : ''}`}
          >
            {nav.machinery}
          </button>
          <button 
            onClick={() => handleNav('career')} 
            className={`hover:text-teal-custom transition-colors cursor-pointer py-1 ${currentView === 'career' ? 'text-teal-custom border-b-2 border-teal-custom' : ''}`}
          >
            {nav.career}
          </button>
          <button 
            onClick={() => handleNav('contact')} 
            className={`hover:text-teal-custom transition-colors cursor-pointer py-1 ${currentView === 'contact' ? 'text-teal-custom border-b-2 border-teal-custom' : ''}`}
          >
            {nav.contact}
          </button>
        </nav>

        {/* Action button, Language switcher & Mobile Toggle */}
        <div className="flex items-center space-x-2 sm:space-x-4 shrink-0">
          <div className="hidden xl:block text-right pr-1">
            <p className="text-[10px] text-gray-400 uppercase tracking-tighter">{nav.phoneLabel}</p>
            <a href="tel:+37126474339" className="text-white font-bold text-xs hover:text-teal-custom transition-colors block whitespace-nowrap">
              +371 26474339
            </a>
          </div>

          {/* Poga: PIEPRASĪT CENU - uz visiem ekrāniem sakārtota un nepārklājas ar logo */}
          <button 
            id="header-start-collab-btn"
            onClick={() => handleNav('contact')}
            className="inline-flex items-center justify-center bg-teal-custom hover:bg-teal-600 text-white px-2.5 py-1.5 sm:px-5 sm:py-2.5 rounded-sm text-[11px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest transition-colors shadow-md shadow-teal-900/20 cursor-pointer whitespace-nowrap shrink-0"
          >
            {nav.requestPrice}
          </button>

          {/* Valodu izvēlne - no sm: (>=640px) redzamas visas 3 valodas pogas */}
          <div 
            id="header-language-switcher"
            className="hidden sm:flex items-center bg-zinc-900/90 border border-zinc-700/80 rounded-sm p-0.5 text-xs font-bold tracking-wider shadow-inner shrink-0"
            role="group"
            aria-label="Language selection"
          >
            {(['LV', 'ENG', 'RU'] as const).map((lang) => {
              const isActive = language === lang;
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
                  title={`Language: ${lang}`}
                >
                  {lang}
                </button>
              );
            })}
          </div>

          {/* Kompakts valodas indikators/pārslēdzējs uz maziem ekrāniem (< sm) */}
          <button
            type="button"
            onClick={() => {
              const langs: Language[] = ['LV', 'ENG', 'RU'];
              const nextIndex = (langs.indexOf(language) + 1) % langs.length;
              handleLangSelect(langs[nextIndex]);
            }}
            className="sm:hidden flex items-center gap-1 bg-zinc-900/90 border border-zinc-700/80 rounded-sm px-2 py-1 text-[11px] font-black uppercase text-zinc-200 hover:text-white shrink-0 cursor-pointer"
            title="Mainīt valodu / Switch language"
          >
            <Globe className="w-3 h-3 text-teal-custom" />
            <span>{language}</span>
          </button>
          
          <button 
            id="mobile-menu-toggle"
            aria-label="Toggle Navigation Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white hover:text-teal-custom p-1.5 focus:outline-none shrink-0"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 sm:w-7 sm:h-7" /> : <Menu className="w-6 h-6 sm:w-7 sm:h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-zinc-950/98 border-t border-zinc-800 px-5 py-5 mt-3 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200 shadow-2xl max-h-[calc(100vh-80px)] overflow-y-auto">
          {/* Quick Primary Mobile Action */}
          <button 
            onClick={() => handleNav('contact')}
            className="w-full bg-teal-custom hover:bg-teal-600 text-white py-3 px-4 rounded-sm text-xs font-black uppercase tracking-widest transition-colors shadow-lg shadow-teal-900/30 flex items-center justify-center gap-2 cursor-pointer mb-2"
          >
            <span>{nav.requestPrice}</span>
          </button>

          <button 
            onClick={() => handleNav('home')} 
            className={`block w-full text-left py-2 text-base font-bold uppercase tracking-wider ${currentView === 'home' ? 'text-teal-custom' : 'text-white'}`}
          >
            {nav.home}
          </button>
          <button 
            onClick={() => handleNav('about')} 
            className={`block w-full text-left py-2 text-base font-bold uppercase tracking-wider ${currentView === 'about' ? 'text-teal-custom' : 'text-white'}`}
          >
            {nav.about}
          </button>
          <button 
            onClick={() => handleNav('machinery')} 
            className={`block w-full text-left py-2 text-base font-bold uppercase tracking-wider ${currentView === 'machinery' ? 'text-teal-custom' : 'text-white'}`}
          >
            {nav.machinery}
          </button>
          <button 
            onClick={() => handleNav('career')} 
            className={`block w-full text-left py-2 text-base font-bold uppercase tracking-wider ${currentView === 'career' ? 'text-teal-custom' : 'text-white'}`}
          >
            {nav.career}
          </button>
          <button 
            onClick={() => handleNav('contact')} 
            className={`block w-full text-left py-2 text-base font-bold uppercase tracking-wider ${currentView === 'contact' ? 'text-teal-custom' : 'text-white'}`}
          >
            {nav.contact}
          </button>
          
          <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
            <span className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">{nav.languageSelectionLabel}:</span>
            <div className="flex items-center bg-zinc-900 border border-zinc-700 rounded-sm p-0.5">
              {(['LV', 'ENG', 'RU'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => handleLangSelect(lang)}
                  className={`px-3 py-1 text-xs font-black rounded-xs transition-all ${
                    language === lang ? 'bg-teal-custom text-white' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2 text-gray-400 text-sm">
            <p className="text-xs uppercase tracking-wider">{nav.phoneLabel}: <a href="tel:+37126474339" className="text-white font-bold hover:text-teal-custom transition-colors">+371 26474339</a></p>
            <p className="text-xs uppercase tracking-wider mt-1">{nav.emailLabel} <span className="text-teal-custom">info@upworx.lv</span></p>
          </div>
        </div>
      )}
    </header>
  );
};

