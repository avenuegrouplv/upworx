import React from 'react';

const StatBox: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="border-l-2 border-teal-custom pl-5 py-1">
    <p className="text-3xl sm:text-4xl font-black text-white mb-1 tracking-tight">{value}</p>
    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider leading-snug">{label}</p>
  </div>
);

export const AboutSection: React.FC = () => {
  return (
    <section id="why-choose-upworx" className="relative py-24 bg-zinc-950 overflow-hidden border-t border-zinc-900">
      {/* Decorative BG element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-teal-custom/5 skew-x-12 transform translate-x-1/2 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-teal-custom font-bold uppercase tracking-[0.25em] text-xs sm:text-sm mb-3">
            PIEREDZE, TEHNISKĀ KOMPETENCE UN SERVISS
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter mb-6 leading-tight">
            KĀPĒC IZVĒLĒTIES <span className="text-teal-custom">UPWORX?</span>
          </h2>
          <div className="h-1 w-20 bg-teal-custom mb-8"></div>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-normal">
            Vairāk nekā 15 gadu pieredze metālapstrādes nozarē ļauj mums piedāvāt ne tikai profesionālas iekārtas, bet arī tehnisko konsultāciju, uzstādīšanu, apmācību un servisu. Strādājam ar pārbaudītiem ražotājiem un palīdzam piemeklēt risinājumu atbilstoši konkrētā uzņēmuma ražošanas vajadzībām.
          </p>
        </div>

        {/* Existing Section Image (without zoom / scale animation) */}
        <div className="relative mb-14 overflow-hidden rounded-sm border border-zinc-800">
          <img 
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1400" 
            alt="Metālapstrādes ražotne un industriālās tehnoloģijas" 
            className="w-full h-72 sm:h-96 md:h-[420px] object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/30 to-transparent"></div>
          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 bg-zinc-950/90 border border-teal-custom/40 p-4 sm:p-5 rounded-sm backdrop-blur-xs">
            <p className="text-teal-custom text-[11px] font-bold uppercase tracking-widest">UPWORX Industriālais partneris</p>
            <p className="text-white font-extrabold text-sm sm:text-base uppercase tracking-tight">Kvalitāte un precizitāte katrā solī</p>
          </div>
        </div>

        {/* 5 Statistics Numbers */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 pt-4 border-t border-zinc-850">
          <StatBox value="15+" label="Gadu pieredze nozarē" />
          <StatBox value="250+" label="Uzstādītas iekārtas Baltijā" />
          <StatBox value="20+" label="Pārstāvēti iekārtu ražotāji" />
          <StatBox value="3" label="Pārstāvētās valstis" />
          <StatBox value="24/7" label="Servisa atbalsts klientiem" />
        </div>
      </div>
    </section>
  );
};
