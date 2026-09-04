import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

  const totalOriginal = partners.length;
  // Duplicate three times for smooth seamless infinite loop
  const loopList = [...partners, ...partners, ...partners];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Item step size: card width (240px) + gap (24px) = 264px
  const STEP_PX = 264;

  useEffect(() => {
    if (isHovered) return;

    // 3 seconds pause on each brand + 0.8 seconds smooth glide
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 3800);

    return () => clearInterval(timer);
  }, [isHovered]);

  const handleTransitionEnd = () => {
    if (currentIndex >= totalOriginal * 2) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - totalOriginal);
    }
  };

  const nextBrand = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevBrand = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : totalOriginal - 1));
  };

  return (
    <section 
      id="official-partners-section" 
      className="bg-zinc-950 py-14 border-y border-zinc-900 overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container mx-auto px-6 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-teal-custom font-bold uppercase tracking-[0.25em] text-xs">
            OFICIĀLIE PARTNERI UN PĀRSTĀVNIECĪBAS
          </p>
          <div className="h-0.5 w-16 bg-teal-custom/60 mt-2"></div>
        </div>

        {/* Subtle navigation controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={prevBrand}
            aria-label="Iepriekšējais zīmols"
            className="w-8 h-8 rounded-sm bg-zinc-900 hover:bg-teal-custom hover:text-zinc-950 text-zinc-400 flex items-center justify-center border border-zinc-800 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextBrand}
            aria-label="Nākamais zīmols"
            className="w-8 h-8 rounded-sm bg-zinc-900 hover:bg-teal-custom hover:text-zinc-950 text-zinc-400 flex items-center justify-center border border-zinc-800 transition-colors cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Carousel Track */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Left and Right Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none"></div>

        <div 
          className="flex py-2 px-6 sm:px-12"
          style={{
            transform: `translateX(-${currentIndex * STEP_PX}px)`,
            transition: isTransitioning 
              ? 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)' 
              : 'none',
            gap: '24px'
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {loopList.map((partner, index) => {
            const activeMatch = (index % totalOriginal) === (currentIndex % totalOriginal);
            return (
              <div
                key={`${partner.name}-${index}`}
                className={`flex flex-col items-center justify-center px-6 py-4 bg-zinc-900/80 border rounded-sm shrink-0 transition-all duration-500 cursor-default ${
                  activeMatch 
                    ? 'border-teal-custom/80 shadow-md shadow-teal-950/40 opacity-100 bg-zinc-900' 
                    : 'border-zinc-800/80 opacity-60 hover:opacity-100'
                }`}
                style={{ width: '240px' }}
              >
                <span className={`font-black tracking-wider text-base sm:text-lg uppercase transition-colors ${
                  activeMatch ? 'text-teal-custom' : 'text-zinc-200'
                }`}>
                  {partner.name}
                </span>
                <span className="text-[11px] text-zinc-400 font-medium tracking-tight mt-1 text-center line-clamp-1">
                  {partner.specialty}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
