
import React from 'react';

interface HeroProps {
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      
      {/* Background Image - Machinery placeholder */}
      <div 
        className="absolute inset-0 bg-cover bg-center machinery-parallax"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2000")' }}
      ></div>

      <div className="container mx-auto px-6 relative z-20 text-white">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight tracking-tight uppercase">
            JAUDĪGI <br />
            <span className="text-teal-custom">RISINĀJUMI</span> <br />
            RAŽOŠANAI
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-12 leading-relaxed">
            UPWORX nodrošina pasaules līmeņa metālapstrādes un CNC iekārtas, 
            kas garantē precizitāti, efektivitāti un ilgtermiņa vērtību jūsu biznesam.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-teal-custom hover:bg-teal-600 px-10 py-5 text-sm font-bold uppercase tracking-widest transition-all rounded-sm flex items-center justify-center group">
              Apskatīt Iekārtu Katalogu
              <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button 
              onClick={onContactClick}
              className="border-2 border-white hover:bg-white hover:text-black px-10 py-5 text-sm font-bold uppercase tracking-widest transition-all rounded-sm"
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
