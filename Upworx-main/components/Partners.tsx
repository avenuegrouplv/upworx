
import React from 'react';

export const Partners: React.FC = () => {
  const brands = [
    { name: 'TRUMPF', logo: 'https://logo.clearbit.com/trumpf.com' },
    { name: 'MAZAK', logo: 'https://logo.clearbit.com/mazakusa.com' },
    { name: 'HAAS', logo: 'https://logo.clearbit.com/haascnc.com' },
    { name: 'FANUC', logo: 'https://logo.clearbit.com/fanuc.com' },
    { name: 'DMG MORI', logo: 'https://logo.clearbit.com/dmgmori.com' },
    { name: 'AMADA', logo: 'https://logo.clearbit.com/amada.com' }
  ];

  return (
    <section className="bg-zinc-950 py-16 border-b border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-between opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
          <p className="w-full text-center lg:w-auto text-gray-500 font-bold uppercase tracking-widest text-[10px] mb-8 lg:mb-0">
            OFICIĀLIE PARTNERI UN PĀRSTĀVNIECĪBAS
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-16">
            {brands.map((brand, idx) => (
              <div key={idx} className="h-8 flex items-center justify-center filter invert brightness-200">
                 <img src={brand.logo} alt={brand.name} className="max-h-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
