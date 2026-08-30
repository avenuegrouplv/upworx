import React from 'react';

export const Partners: React.FC = () => {
  const partners = [
    { name: 'TRUMPF', specialty: 'Lāzera griešana & lokšņu apstrāde' },
    { name: 'MAZAK', specialty: 'CNC apstrādes centri & virpas' },
    { name: 'AMADA', specialty: 'Lāzergriešana & locīšanas preses' },
    { name: 'BYSTRONIC', specialty: 'Šķiedru lāzeri & automatizācija' },
    { name: 'DMG MORI', specialty: '5-asu frēzēšana & virpošana' },
    { name: 'HAAS', specialty: 'CNC vertikālie & horizontālie centri' },
    { name: 'FANUC', specialty: 'Robotika & CNC vadības sistēmas' },
    { name: 'PRIMA POWER', specialty: 'Lokšņu metālapstrādes līnijas' },
  ];

  // Duplicate for seamless infinite carousel
  const marqueeList = [...partners, ...partners];

  return (
    <section id="official-partners-section" className="bg-zinc-950 py-12 border-y border-zinc-800/80 overflow-hidden">
      <div className="container mx-auto px-6 mb-8 text-center">
        <p className="text-gray-400 font-bold uppercase tracking-[0.25em] text-xs sm:text-sm">
          OFICIĀLIE PARTNERI UN PĀRSTĀVNIECĪBAS
        </p>
        <div className="h-0.5 w-16 bg-teal-custom/60 mx-auto mt-3"></div>
      </div>

      {/* Infinite Horizontal Carousel */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Gradient fade on left and right */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none"></div>

        <div className="animate-marquee items-center gap-6 sm:gap-10 py-2">
          {marqueeList.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex flex-col items-center justify-center px-6 py-3.5 bg-zinc-900/70 border border-zinc-800/80 rounded-sm min-w-[200px] sm:min-w-[230px] opacity-60 hover:opacity-100 transition-opacity cursor-default group"
            >
              <span className="text-zinc-300 font-black tracking-wider text-base sm:text-lg uppercase group-hover:text-teal-custom transition-colors">
                {partner.name}
              </span>
              <span className="text-[10px] text-zinc-500 font-medium tracking-tight mt-1 text-center">
                {partner.specialty}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
