import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  scrolled: boolean;
  onNavigate: (view: 'home' | 'contact' | 'machinery' | 'about') => void;
  currentView: 'home' | 'contact' | 'machinery' | 'about';
}

export const Header: React.FC<HeaderProps> = ({ scrolled, onNavigate, currentView }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (view: 'home' | 'contact' | 'machinery' | 'about') => {
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
        <nav className="hidden lg:flex items-center space-x-10 text-sm font-semibold uppercase tracking-widest text-white translate-x-24">
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
            onClick={() => handleNav('contact')} 
            className={`hover:text-teal-custom transition-colors cursor-pointer py-1 ${currentView === 'contact' ? 'text-teal-custom border-b-2 border-teal-custom' : ''}`}
          >
            Kontakti
          </button>
        </nav>

        {/* Action button & Mobile Toggle */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          <div className="hidden md:block text-right">
            <p className="text-[10px] text-gray-400 uppercase tracking-tighter">Sazinieties ar mums</p>
            <p className="text-white font-bold text-sm">+371 2000 0000</p>
          </div>
          <button 
            id="header-start-collab-btn"
            onClick={() => handleNav('contact')}
            className="bg-teal-custom hover:bg-teal-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-sm text-xs font-bold uppercase tracking-widest transition-colors shadow-lg shadow-teal-900/20 cursor-pointer"
          >
            Sākt sadarbību
          </button>
          
          <button 
            id="mobile-menu-toggle"
            aria-label="Toggle Navigation Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white hover:text-teal-custom p-2 focus:outline-none"
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
            onClick={() => handleNav('contact')} 
            className={`block w-full text-left py-2 text-base font-bold uppercase tracking-wider ${currentView === 'contact' ? 'text-teal-custom' : 'text-white'}`}
          >
            Kontakti
          </button>
          <div className="pt-4 border-t border-zinc-800 text-gray-400 text-sm">
            <p className="text-xs uppercase tracking-wider">Tālrunis: <span className="text-white font-bold">+371 2000 0000</span></p>
            <p className="text-xs uppercase tracking-wider mt-1">E-pasts: <span className="text-teal-custom">info@upworx.lv</span></p>
          </div>
        </div>
      )}
    </header>
  );
};
