import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onContactClick: () => void;
  onCatalogClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick, onCatalogClick }) => {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section id="hero-section" className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-16 lg:py-0 overflow-hidden bg-black">
      {/* Hero Image pinned exactly to bottom-left corner with object-cover */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        <img 
          src="/Hero-upworx.webp" 
          alt="UPWORX industriālās metālapstrādes iekārtas un CNC darbagaldi"
          width="1920"
          height="1080"
          loading="eager"
          fetchPriority="high"
          decoding="sync"
          className="w-full h-full object-cover object-left-bottom select-none"
          style={{ objectPosition: 'left bottom', objectFit: 'cover' }}
        />
      </div>

      {/* Subtle modern gradient overlay for left-aligned text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/15 z-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-16 xl:px-20 relative z-20 text-white flex items-center justify-start">
        <div className="max-w-2xl text-left">
          {/* Uzraksts pavirzīts par 1cm uz augšu, saglabājot apakšējo pogu atrašanās vietu */}
          <div className="pt-[1cm]">
            <h1 className="text-2xl sm:text-3xl md:text-[36px] lg:text-[42px] xl:text-[46px] font-black mb-5 leading-[1.18] tracking-tight uppercase">
              {h.titlePart1} <br className="hidden sm:inline" />
              {h.titlePart2} <span className="text-teal-custom">{h.titlePart3}</span> {h.titlePart4}
            </h1>
            <p className="text-sm sm:text-[15px] md:text-base lg:text-[17px] text-gray-200 max-w-xl mb-8 leading-relaxed font-normal">
              {h.subtitle}
            </p>
          </div>
          
          <div 
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4 mt-6 sm:mt-8 md:mt-[2cm]"
          >
            <button 
              id="hero-catalog-btn"
              onClick={onCatalogClick}
              className="bg-teal-custom hover:bg-teal-600 text-white px-7 py-3.5 text-xs sm:text-[13px] font-bold uppercase tracking-widest transition-colors rounded-sm flex items-center justify-center cursor-pointer shadow-lg shadow-teal-950/50"
            >
              {h.viewMachinery}
              <svg className="ml-2.5 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button 
              id="hero-contact-btn"
              onClick={onContactClick}
              className="border-2 border-white hover:bg-white hover:text-black text-white px-7 py-3.5 text-xs sm:text-[13px] font-bold uppercase tracking-widest transition-colors rounded-sm cursor-pointer flex items-center justify-center"
            >
              {h.getConsultation}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

