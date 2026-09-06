import React from 'react';

const StatBox: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="border-l-2 border-teal-custom pl-5 py-1">
    <p className="text-3xl sm:text-4xl font-black text-white mb-1 tracking-tight">{value}</p>
    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider leading-snug">{label}</p>
  </div>
);

export const AboutSection: React.FC = () => {
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
              KĀPĒC IZVĒLĒTIES <span className="text-teal-custom">UPWORX?</span>
            </h2>
            <div className="h-1 w-20 bg-teal-custom mb-6"></div>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-normal">
              Vairāk nekā 15 gadu pieredze metālapstrādes nozarē ļauj mums piedāvāt ne tikai profesionālas iekārtas, bet arī tehnisko konsultāciju, uzstādīšanu, apmācību un servisu. Strādājam ar pārbaudītiem ražotājiem un palīdzam piemeklēt risinājumu atbilstoši konkrētā uzņēmuma ražošanas vajadzībām.
            </p>
          </div>

          {/* Labā puse: Industriāls attēls */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-sm border border-zinc-800 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800" 
                alt="Metālapstrādes ražotne un industriālās tehnoloģijas" 
                className="w-full h-64 sm:h-72 lg:h-[340px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* 4 Statistics Numbers (bez 24/7 servisa birkas) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 pt-8 border-t border-zinc-850">
          <StatBox value="15+" label="Gadu pieredze nozarē" />
          <StatBox value="250+" label="Uzstādītas iekārtas Baltijā" />
          <StatBox value="20+" label="Pārstāvēti iekārtu ražotāji" />
          <StatBox value="3" label="Pārstāvētās valstis" />
        </div>
      </div>
    </section>
  );
};
