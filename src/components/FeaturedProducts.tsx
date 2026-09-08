import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ALL_MACHINERY } from '../data/machineryData';
import { getLocalizedMachine } from '../i18n/machineryLocalization';

interface FeaturedProductsProps {
  onSelectMachine?: (categoryId: string, machineId: string) => void;
  onViewAllMachinery?: () => void;
  onRequestPrice?: (machineName: string) => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ 
  onSelectMachine,
  onViewAllMachinery,
  onRequestPrice 
}) => {
  const { language, t } = useLanguage();
  const fp = t.featuredProducts;

  const featuredIds = [
    'trumpf-trubend-5170',
    'bystronic-bystar-fiber-15kw',
    'dmg-mori-dmu-75-monoblock',
    'fanuc-robot-cell-m20id'
  ];

  const featuredMachines = featuredIds.map(id => {
    const raw = ALL_MACHINERY.find(m => m.id === id);
    if (!raw) return null;
    const localized = getLocalizedMachine(raw, language);
    return {
      id: raw.id,
      categoryId: raw.category,
      model: localized.name,
      brand: localized.brand,
      type: localized.type,
      img: localized.image,
      specs: localized.threeMainParams 
        ? localized.threeMainParams.slice(0, 3).map(p => `${p.label}: ${p.value}`) 
        : []
    };
  }).filter(Boolean) as {
    id: string;
    categoryId: string;
    model: string;
    brand: string;
    type: string;
    img: string;
    specs: string[];
  }[];

  const handleCardClick = (m: { id: string; categoryId: string }) => {
    if (onSelectMachine) {
      onSelectMachine(m.categoryId, m.id);
    } else if (onViewAllMachinery) {
      onViewAllMachinery();
    }
  };

  const handlePriceRequest = (e: React.MouseEvent, m: { model: string; categoryId: string; id: string }) => {
    e.stopPropagation();
    if (onRequestPrice) {
      onRequestPrice(m.model);
    } else if (onSelectMachine) {
      onSelectMachine(m.categoryId, m.id);
    }
  };

  return (
    <section id="featured-products" className="py-16 sm:py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-zinc-900">
              {fp.title1} <span className="text-teal-custom">{fp.title2}</span>
            </h2>
            <div className="h-1 w-20 bg-teal-custom mt-4"></div>
          </div>
          {onViewAllMachinery && (
            <button 
              id="view-all-machinery-btn"
              onClick={onViewAllMachinery}
              className="bg-zinc-100 hover:bg-zinc-200/80 text-zinc-900 border border-zinc-400 hover:border-teal-custom px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all rounded-sm cursor-pointer shadow-xs inline-flex items-center gap-2.5 self-start sm:self-auto shrink-0 hover:shadow-md"
            >
              <span>{fp.viewAll}</span>
              <span className="w-7 h-7 rounded-full border border-teal-custom text-teal-custom flex items-center justify-center shrink-0">
                <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2.8} />
              </span>
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredMachines.map((m) => (
            <div 
              key={m.id}
              className="bg-white border border-zinc-200 hover:border-teal-custom rounded-sm overflow-hidden shadow-sm hover:shadow-xl hover:ring-1 hover:ring-teal-custom/60 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image & Brand */}
                <div className="relative h-60 w-full overflow-hidden bg-zinc-950 flex items-center justify-center">
                  <img 
                    src={m.img} 
                    alt={`${m.brand} ${m.model}`} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent"></div>
                  
                  {/* Brand Tag */}
                  <div className="absolute top-3 left-3 bg-zinc-950/90 border border-white/20 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-teal-custom shadow-sm">
                    {m.brand}
                  </div>
                </div>

                {/* Card Body with structured information */}
                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-[11px] text-teal-custom font-bold uppercase tracking-wider mb-1">
                      {fp.manufacturer}: <span className="text-zinc-900 font-black">{m.brand}</span>
                    </p>
                    <h4 className="text-2xl font-black uppercase tracking-tight text-zinc-900 mb-1">
                      {m.model}
                    </h4>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      {m.type}
                    </p>
                  </div>

                  {/* 2-3 Tehniskie parametri */}
                  <div className="pt-4 border-t border-zinc-100 mb-6">
                    <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-2.5">
                      {fp.keySpecs}:
                    </p>
                    <ul className="space-y-2">
                      {m.specs.map((spec, sIdx) => (
                        <li key={sIdx} className="flex items-start text-xs text-zinc-700 leading-snug">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-custom mr-2 shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card Action Buttons */}
              <div className="p-6 pt-0 space-y-2">
                <button
                  onClick={(e) => handlePriceRequest(e, m)}
                  className="w-full bg-teal-custom hover:bg-teal-600 text-white font-bold uppercase tracking-wider text-xs py-3 px-4 rounded-sm flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
                >
                  <span>{fp.requestPrice}</span>
                  <span className="w-6 h-6 rounded-full bg-white/20 text-white flex items-center justify-center ml-2 shrink-0">
                    <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2.8} />
                  </span>
                </button>
                <button
                  onClick={() => handleCardClick(m)}
                  className="w-full bg-zinc-100 hover:bg-zinc-200/80 text-zinc-700 hover:text-zinc-900 border border-zinc-300 hover:border-zinc-400 font-bold uppercase tracking-wider text-[11px] py-2 px-3 rounded-sm flex items-center justify-center transition-all duration-200 cursor-pointer"
                >
                  <span>{fp.viewMachine}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

