import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const StatBox: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="border-l-2 border-teal-custom pl-5 py-1">
    <p className="text-3xl sm:text-4xl font-black text-white mb-1 tracking-tight">{value}</p>
    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider leading-snug">{label}</p>
  </div>
);

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();
  const a = t.aboutSection;

  return (
    <section id="why-choose-upworx" className="relative py-16 sm:py-20 bg-zinc-950 overflow-hidden border-t border-zinc-900">
      {/* Decorative BG element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-teal-custom/5 skew-x-12 transform translate-x-1/2 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Divu kolonnu saturs: Teksts kreisajā pusē, samazināts attēls labajā pusē */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          {/* Kreisā puse: Virsraksti un apraksts */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter mb-4 leading-tight">
              {a.title1} <span className="text-teal-custom">{a.title2}</span>
            </h2>
            <div className="h-1 w-20 bg-teal-custom mb-6"></div>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-normal">
              {a.description}
            </p>
          </div>

          {/* Labā puse: Industriāls attēls */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-sm border border-zinc-800 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800" 
                alt="UPWORX Industrial Technologies" 
                className="w-full h-64 sm:h-72 lg:h-[340px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* 4 Statistics Numbers */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 pt-8 border-t border-zinc-850">
          <StatBox value="15+" label={a.stat1Label} />
          <StatBox value="250+" label={a.stat2Label} />
          <StatBox value="20+" label={a.stat3Label} />
          <StatBox value="3" label={a.stat4Label} />
        </div>
      </div>
    </section>
  );
};

