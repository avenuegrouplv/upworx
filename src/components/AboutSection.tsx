import React from 'react';

const StatBox: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="border-l-2 border-teal-custom pl-6">
    <p className="text-4xl font-black text-white mb-2 uppercase">{value}</p>
    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest leading-relaxed">{label}</p>
  </div>
);

export const AboutSection: React.FC = () => {
  return (
    <section id="about-section" className="relative py-24 bg-zinc-950 overflow-hidden">
      {/* Decorative BG element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-teal-custom/5 skew-x-12 transform translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <p className="text-teal-custom font-bold uppercase tracking-widest text-xs mb-4">Kāpēc izvēlēties mūs?</p>
            <h2 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter mb-8 leading-tight">
              PROFESIONĀLA <span className="text-teal-custom">PIEEJA</span> <br />
              KATRAI DETAĻAI
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              UPWORX nav tikai iekārtu tirgotājs. Mēs esam jūsu tehnoloģiskais partneris, 
              kas palīdz optimizēt ražošanas procesus, nodrošina kvalificētu servisu 
              un apmāca jūsu personālu darbam ar modernākajām tehnoloģijām.
            </p>
            
            <div className="grid grid-cols-2 gap-10">
              <StatBox value="15+" label="Gadu pieredze industrijā" />
              <StatBox value="250+" label="Uzstādītas iekārtas Baltijā" />
              <StatBox value="24/7" label="Servisa atbalsts klientiem" />
              <StatBox value="100%" label="Garantēta precizitāte" />
            </div>
          </div>

          <div className="lg:w-1/2 relative">
             <div className="relative z-10 border-8 border-white/5 p-4 transform lg:translate-x-12">
                <img 
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200" 
                  alt="Industrial Workshop" 
                  className="w-full grayscale hover:grayscale-0 transition-all duration-700"
                />
             </div>
             {/* Industrial Badge */}
             <div className="absolute -bottom-8 -left-8 bg-teal-custom p-8 text-white z-20 shadow-2xl">
                <p className="text-4xl font-black mb-1">TOP</p>
                <p className="text-xs font-bold uppercase tracking-widest">Piegādātājs 2024</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
