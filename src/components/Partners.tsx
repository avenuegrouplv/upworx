import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Partners: React.FC = () => {
  const { t } = useLanguage();
  const partnersData = t.partners;
  const partners = partnersData.items;

  const totalOriginal = partners.length;
  // Duplicate 4 times for seamless infinite looping
  const loopList = [...partners, ...partners, ...partners, ...partners];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [containerWidth, setContainerWidth] = useState(1200);

  const viewportRef = useRef<HTMLDivElement>(null);

  // ResizeObserver to calculate exact pixel dimensions so 5 complete cards fit without partial overflow
  useEffect(() => {
    const updateWidth = () => {
      if (viewportRef.current) {
        setContainerWidth(viewportRef.current.clientWidth);
      }
    };
    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    if (viewportRef.current) {
      observer.observe(viewportRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Desktop (>= 1024px): precisely 5 cards; Tablet (>= 640px): 3 cards; Mobile: 1 or 2 cards
  const visibleCount = containerWidth >= 1024 ? 5 : containerWidth >= 640 ? 3 : containerWidth < 420 ? 1 : 2;
  const GAP = 20;
  
  // Card width calculation ensures exact full fit across the container:
  const cardWidth = containerWidth > 0 
    ? Math.max(120, (containerWidth - (visibleCount - 1) * GAP) / visibleCount)
    : 220;
  const stepPx = cardWidth + GAP;

  // Slowed down by 2x: 6000ms pause + 1600ms calm smooth glide = 7600ms total per slide
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 7600);

    return () => clearInterval(timer);
  }, [isHovered]);

  const handleTransitionEnd = () => {
    if (currentIndex >= totalOriginal * 2) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - totalOriginal);
    }
  };

  return (
    <section 
      id="official-partners-section" 
      className="bg-zinc-950 py-14 border-y border-zinc-900 overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-teal-custom font-bold uppercase tracking-[0.25em] text-xs">
            {partnersData.badge}
          </h2>
          <div className="h-0.5 w-16 bg-teal-custom/60 mt-2"></div>
        </div>

        {/* Carousel Viewport Container - exact 5 cards visible on desktop, no partial cards visible */}
        <div 
          ref={viewportRef}
          className="relative w-full overflow-hidden"
        >
          <div 
            className="flex py-2 will-change-transform"
            style={{
              transform: `translateX(-${currentIndex * stepPx}px)`,
              transition: isTransitioning 
                ? 'transform 1.6s cubic-bezier(0.25, 1, 0.35, 1)' 
                : 'none',
              gap: `${GAP}px`
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {loopList.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex flex-col items-center justify-center px-4 py-5 bg-zinc-900/80 border border-zinc-800/90 rounded-sm shrink-0 transition-colors duration-300 hover:border-teal-custom hover:bg-zinc-900 cursor-default group text-center"
                style={{ width: `${cardWidth}px` }}
              >
                <span className="font-black tracking-wider text-base sm:text-lg uppercase text-zinc-200 group-hover:text-teal-custom transition-colors">
                  {partner.name}
                </span>
                <span className="text-[11px] text-zinc-400 font-medium tracking-tight mt-1 text-center line-clamp-1">
                  {partner.specialty}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

