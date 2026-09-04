import React from 'react';
import { ArrowRight, Settings, Zap, CheckCircle2 } from 'lucide-react';

interface FeaturedMachine {
  id: string;
  categoryId: string;
  name: string;
  model: string;
  brand: string;
  type: string;
  img: string;
  specs: string[];
}

interface FeaturedProductsProps {
  onSelectMachine?: (categoryId: string, machineId: string) => void;
  onViewAllMachinery?: () => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ 
  onSelectMachine,
  onViewAllMachinery 
}) => {
  const machines: FeaturedMachine[] = [
    {
      id: 'trumpf-trubend-5170',
      categoryId: 'metalapstrade',
      name: 'TruBend 5170',
      model: 'TruBend 5170',
      brand: 'TRUMPF',
      type: 'CNC hidrauliskā locīšanas prese',
      img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800',
      specs: [
        'Spiediena spēks: 1700 kN (170 tonnas)',
        'Locīšanas garums: 3230 mm',
        'ACB Wireless leņķa automātiskā mērīšana'
      ]
    },
    {
      id: 'amada-ensis-3015-aj',
      categoryId: 'lazera-griesana',
      name: 'ENSIS 3015 AJ 9kW',
      model: 'ENSIS 3015 AJ',
      brand: 'AMADA',
      type: '2D šķiedru (fiber) lāzergriešanas iekārta',
      img: 'https://images.pexels.com/photos/224924/pexels-photo-224924.jpeg?auto=compress&cs=tinysrgb&w=800',
      specs: [
        'Lāzera jauda: 9 kW ENSIS Fiber',
        'Darba zona: 3070 × 1550 mm',
        'Stara automātiskā modulācija (0.8–25 mm)'
      ]
    },
    {
      id: 'dmg-mori-dmu-75-monoblock',
      categoryId: 'cnc-iekartas',
      name: 'DMU 75 monoBLOCK',
      model: 'DMU 75 monoBLOCK',
      brand: 'DMG MORI',
      type: '5-asu universālais CNC apstrādes centrs',
      img: 'https://images.pexels.com/photos/3846554/pexels-photo-3846554.jpeg?auto=compress&cs=tinysrgb&w=800',
      specs: [
        'Gājieni X/Y/Z: 750 / 650 / 560 mm',
        'SpeedMASTER vārpsta: 20 000 apgr./min',
        'CELOS vadība ar SIEMENS 840D sl'
      ]
    }
  ];

  const handleCardClick = (m: FeaturedMachine) => {
    if (onSelectMachine) {
      onSelectMachine(m.categoryId, m.id);
    } else if (onViewAllMachinery) {
      onViewAllMachinery();
    }
  };

  return (
    <section id="featured-products" className="py-16 sm:py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-zinc-900">
              JAUNĀKIE <span className="text-teal-custom">PIEDĀVĀJUMI</span>
            </h2>
            <div className="h-1 w-20 bg-teal-custom mt-4"></div>
          </div>
          {onViewAllMachinery && (
            <button 
              id="view-all-machinery-btn"
              onClick={onViewAllMachinery}
              className="bg-zinc-900 hover:bg-teal-custom text-white hover:text-zinc-950 px-6 py-3.5 text-xs font-bold uppercase tracking-widest transition-all rounded-sm cursor-pointer shadow-xs inline-flex items-center gap-2 self-start sm:self-auto shrink-0 group/topbtn"
            >
              <span>Apskatīt Visas Iekārtas</span>
              <ArrowRight className="w-4 h-4 group-hover/topbtn:translate-x-1 transition-transform" />
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {machines.map((m) => (
            <div 
              key={m.id}
              className="bg-white border border-zinc-200 hover:border-teal-custom rounded-sm overflow-hidden shadow-sm hover:shadow-xl hover:ring-1 hover:ring-teal-custom/60 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image & Brand */}
                <div className="relative h-60 w-full overflow-hidden bg-zinc-950 flex items-center justify-center">
                  <img 
                    src={m.img} 
                    alt={`${m.brand} ${m.name}`} 
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
                      Ražotājs: <span className="text-zinc-900 font-black">{m.brand}</span>
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
                      Būtiskie tehniskie parametri:
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

              {/* Card Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => handleCardClick(m)}
                  className="w-full bg-zinc-900 hover:bg-teal-custom text-white hover:text-zinc-950 font-bold uppercase tracking-wider text-xs py-3.5 px-4 rounded-sm flex items-center justify-center transition-colors cursor-pointer group/btn shadow-xs"
                >
                  <span>Apskatīt iekārtu</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
