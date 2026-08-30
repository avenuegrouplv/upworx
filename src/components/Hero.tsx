import React from 'react';

interface HeroProps {
  onContactClick: () => void;
  onCatalogClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick, onCatalogClick }) => {
  return (
    <section id="hero-section" className="relative min-h-[85vh] lg:min-h-screen flex items-start pt-28 sm:pt-32 md:pt-36 lg:pt-32 pb-16 overflow-hidden">
      {/* Background Ambient Blur */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-25 filter blur-3xl"
        style={{ backgroundImage: 'url("/Hero-upworx.webp")' }}
      ></div>

      {/* Main Full Image (Contained & Centered so the entire image is visible) */}
      <div className="absolute inset-0 flex items-center justify-end z-0">
        <img 
          src="/Hero-upworx.webp" 
          alt="UPWORX Industrial Machinery"
          className="w-full h-full object-contain object-center lg:object-right-bottom max-h-screen"
        />
      </div>

      {/* Gradient & Dark Overlay for optimal text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30 z-10"></div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-20 text-white">
        <div className="max-w-2xl -translate-x-3 sm:-translate-x-11">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 leading-tight tracking-tight uppercase">
            JAUDĪGI <br />
            <span className="text-teal-custom">RISINĀJUMI</span> <br />
            RAŽOŠANAI
          </h1>
          <p className="text-sm md:text-base text-gray-300 max-w-lg mb-8 leading-relaxed">
            UPWORX nodrošina pasaules līmeņa metālapstrādes un CNC iekārtas, 
            kas garantē precizitāti, efektivitāti un ilgtermiņa vērtību jūsu biznesam.
          </p>
          
          <div className="flex flex-col items-start space-y-4 mt-28">
            <button 
              id="hero-catalog-btn"
              onClick={onCatalogClick}
              className="bg-teal-custom hover:bg-teal-600 px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-widest transition-colors rounded-sm flex items-center justify-center cursor-pointer shadow-lg shadow-teal-950/50"
            >
              Apskatīt Iekārtu Katalogu
              <svg className="ml-3 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button 
              id="hero-contact-btn"
              onClick={onContactClick}
              className="border-2 border-white hover:bg-white hover:text-black px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-widest transition-colors rounded-sm cursor-pointer translate-x-4 sm:translate-x-9"
            >
              Sazināties ar Ekspertu
            </button>
          </div>
        </div>
      </div>

      {/* Decorative vertical line */}
      <div className="absolute right-10 bottom-0 h-32 w-px bg-white/20 hidden lg:block"></div>
    </section>
  );
};
