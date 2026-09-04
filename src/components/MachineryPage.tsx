import React, { useEffect } from 'react';
import { 
  Factory, 
  Zap, 
  Settings, 
  Cpu, 
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { 
  MachineItem, 
  MACHINERY_CATEGORIES, 
  ALL_MACHINERY, 
  CategoryMeta 
} from '../data/machineryData';
import { MachineCard } from './MachineCard';
import { MachineDetailPage } from './MachineDetailPage';

interface MachineryPageProps {
  selectedCategorySlug: string;
  selectedMachineId?: string | null;
  onSelectCategory: (categorySlug: string) => void;
  onSelectMachine: (categorySlug: string, machineId: string) => void;
  onInquiryClick?: (machineName?: string) => void;
}

export const MachineryPage: React.FC<MachineryPageProps> = ({
  selectedCategorySlug,
  selectedMachineId,
  onSelectCategory,
  onSelectMachine,
  onInquiryClick
}) => {
  // If a specific machine is selected, render the reusable MachineDetailPage template!
  const currentMachine = selectedMachineId 
    ? ALL_MACHINERY.find(m => m.id === selectedMachineId) 
    : null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedCategorySlug, selectedMachineId]);

  if (currentMachine) {
    return (
      <MachineDetailPage 
        machine={currentMachine}
        onNavigateToCategory={onSelectCategory}
        onNavigateToMachine={onSelectMachine}
        onInquiryClick={onInquiryClick}
      />
    );
  }

  // Active category (fallback to 'metalapstrade' if none or invalid)
  const activeCategory: CategoryMeta = 
    MACHINERY_CATEGORIES.find(c => c.urlSlug === selectedCategorySlug) || 
    MACHINERY_CATEGORIES[0];

  // Get exactly 4 machines for the active category
  const categoryMachines = ALL_MACHINERY.filter(
    m => m.category === activeCategory.id
  );

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'metalapstrade':
        return <Factory className="w-5 h-5" />;
      case 'lazera-griesana':
        return <Zap className="w-5 h-5" />;
      case 'cnc-iekartas':
        return <Settings className="w-5 h-5" />;
      case 'automatizacija':
        return <Cpu className="w-5 h-5" />;
      default:
        return <Factory className="w-5 h-5" />;
    }
  };

  return (
    <div id="machinery-category-page" className="bg-zinc-50 min-h-screen pb-24">
      {/* Hero Banner with restored /hero_iekartas.jpg */}
      <section className="relative h-[50vh] min-h-[360px] max-h-[480px] w-full bg-zinc-950 overflow-hidden flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="/hero_iekartas.jpg" 
            alt="UPWORX Iekārtu Katalogs" 
            className="w-full h-full object-cover select-none"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
        </div>
        <div className="container mx-auto px-6 sm:px-8 lg:px-16 xl:px-20 relative z-10 text-white flex items-center justify-start">
          <div className="max-w-3xl text-left">
            <h1 className="text-3xl sm:text-4xl md:text-[42px] lg:text-[48px] font-black mb-5 leading-[1.15] tracking-tight uppercase">
              <span className="md:block">INDUSTRIĀLO IEKĀRTU </span>
              <span className="md:block">
                <span className="text-teal-custom">KATALOGS</span>
              </span>
            </h1>
            <p className="text-sm sm:text-[15px] md:text-base lg:text-[17px] text-gray-200 max-w-2xl leading-relaxed font-normal">
              Augstas precizitātes metālapstrādes un automatizācijas tehnoloģijas mūsdienīgai industriālajai ražošanai.
            </p>
          </div>
        </div>
      </section>

      {/* Category Header & Tabs - attālums no hero precīzi saskaņots ar lapu Par mums (pt-16 sm:pt-20) */}
      <div className="bg-white border-b border-zinc-200 pt-16 sm:pt-20 pb-12 mb-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center space-x-2.5 text-teal-custom font-black text-xs uppercase tracking-[0.25em] mb-4 sm:mb-5">
                <span>Iekārtu katalogs</span>
                <span className="font-normal text-teal-custom/60">I</span>
                <span>{activeCategory.name}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-zinc-900">
                {activeCategory.name}
              </h2>
              <div className="h-1 w-20 bg-teal-custom mt-4" />
            </div>
            
            <div className="bg-zinc-100 border border-zinc-200 px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider text-zinc-700 self-start md:self-auto">
              <span className="w-2 h-2 rounded-full bg-teal-custom inline-block mr-2" />
              {categoryMachines.length} iekārtas kategorijā
            </div>
          </div>

          {/* 4 Galvenās kategoriju navigācijas cilnes (Tabs) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
            {MACHINERY_CATEGORIES.map((cat) => {
              const isActive = cat.urlSlug === activeCategory.urlSlug;
              return (
                <button
                  key={cat.id}
                  id={`tab-${cat.urlSlug}`}
                  onClick={() => onSelectCategory(cat.urlSlug)}
                  className={`flex items-center space-x-3 p-3.5 rounded-sm border text-left transition-all duration-200 cursor-pointer ${
                    isActive 
                      ? 'bg-zinc-900 text-white border-zinc-900 shadow-md ring-2 ring-teal-custom/50' 
                      : 'bg-zinc-50 hover:bg-white text-zinc-700 border-zinc-200 hover:border-zinc-300'
                  }`}
                >
                  <div className={`p-2 rounded-sm ${isActive ? 'bg-zinc-800 text-teal-custom' : 'bg-zinc-200 text-zinc-600'}`}>
                    {getCategoryIcon(cat.id)}
                  </div>
                  <div className="min-w-0">
                    <p className={`text-xs font-black uppercase tracking-wider truncate ${isActive ? 'text-white' : 'text-zinc-900'}`}>
                      {cat.name}
                    </p>
                    <p className={`text-[11px] truncate ${isActive ? 'text-zinc-400' : 'text-zinc-500'}`}>
                      4 iekārtas
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 4 Iekārtu kartīšu režģis konkrētajai kategorijai */}
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-10">
          <h2 className="text-xs font-black uppercase tracking-[0.25em] text-teal-custom mb-2">
            Modeļu klāsts
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-zinc-900 mb-4">
                {activeCategory.name}
              </h3>
              <div className="h-1 w-20 bg-teal-custom" />
            </div>
            <span className="text-xs text-zinc-600 font-bold bg-white px-3.5 py-2 border border-zinc-200 rounded-sm shadow-xs self-start sm:self-auto">
              Rāda 4 no 4 iekārtām
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryMachines.map((machine) => (
            <MachineCard 
              key={machine.id}
              machine={machine}
              onViewMachine={onSelectMachine}
            />
          ))}
        </div>

        {/* Citu 3 kategoriju īsceļi apakšā */}
        <div className="mt-20 pt-12 border-t border-zinc-200">
          <div className="mb-10">
            <h2 className="text-xs font-black uppercase tracking-[0.25em] text-teal-custom mb-2">
              Kategorijas
            </h2>
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-zinc-900 mb-4">
              Citas iekārtu kategorijas
            </h3>
            <div className="h-1 w-20 bg-teal-custom" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MACHINERY_CATEGORIES.filter(c => c.urlSlug !== activeCategory.urlSlug).map((otherCat) => (
              <button
                key={otherCat.id}
                onClick={() => onSelectCategory(otherCat.urlSlug)}
                className="bg-white hover:bg-zinc-100/80 border border-zinc-200 p-5 rounded-sm flex items-center justify-between transition-all group text-left cursor-pointer"
              >
                <div className="flex items-center space-x-3.5">
                  <div className="p-2.5 bg-zinc-100 text-teal-custom group-hover:bg-zinc-900 group-hover:text-white rounded-sm transition-colors">
                    {getCategoryIcon(otherCat.id)}
                  </div>
                  <div>
                    <h4 className="font-black text-sm uppercase tracking-tight text-zinc-900 group-hover:text-teal-custom transition-colors">
                      {otherCat.name}
                    </h4>
                    <p className="text-xs text-zinc-500">
                      4 iekārtas
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 group-hover:translate-x-1 transition-all" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
