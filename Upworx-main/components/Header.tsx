
import React from 'react';

interface HeaderProps {
  scrolled: boolean;
  onNavigate: (view: 'home' | 'contact' | 'machinery' | 'about') => void;
  currentView: 'home' | 'contact' | 'machinery' | 'about';
}

export const Header: React.FC<HeaderProps> = ({ scrolled, onNavigate, currentView }) => {
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || currentView !== 'home' ? 'bg-black/95 py-3 shadow-xl' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div 
          className="flex items-center cursor-pointer group"
          onClick={() => onNavigate('home')}
        >
          <svg width="40" height="40" viewBox="0 0 100 100" className="mr-3 group-hover:scale-110 transition-transform">
            <path d="M10 80 L30 60 L50 70 L80 30" fill="none" stroke="#2c9db1" strokeWidth="12" strokeLinecap="round" />
            <path d="M60 30 L80 30 L80 50" fill="none" stroke="#2c9db1" strokeWidth="12" strokeLinecap="round" />
          </svg>
          <span className="text-2xl font-extrabold tracking-tighter text-white">
            UP<span className="text-teal-custom">WORX</span>
          </span>
        </div>

        <nav className="hidden lg:flex items-center space-x-10 text-sm font-semibold uppercase tracking-widest text-white">
          <button onClick={() => onNavigate('home')} className={`hover:text-teal-custom transition-colors ${currentView === 'home' ? 'text-teal-custom' : ''}`}>Sākums</button>
          <button onClick={() => onNavigate('machinery')} className={`hover:text-teal-custom transition-colors ${currentView === 'machinery' ? 'text-teal-custom' : ''}`}>Iekārtas</button>
          <button onClick={() => onNavigate('about')} className={`hover:text-teal-custom transition-colors ${currentView === 'about' ? 'text-teal-custom' : ''}`}>Par mums</button>
          <button onClick={() => onNavigate('contact')} className={`hover:text-teal-custom transition-colors ${currentView === 'contact' ? 'text-teal-custom' : ''}`}>Kontakti</button>
        </nav>

        <div className="flex items-center space-x-6">
          <div className="hidden md:block text-right">
            <p className="text-[10px] text-gray-400 uppercase tracking-tighter">Sazinieties ar mums</p>
            <p className="text-white font-bold">+371 2000 0000</p>
          </div>
          <button 
            onClick={() => onNavigate('contact')}
            className="bg-teal-custom hover:bg-teal-600 text-white px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-widest transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-teal-900/20"
          >
            Sākt sadarbību
          </button>
        </div>
      </div>
    </header>
  );
};
