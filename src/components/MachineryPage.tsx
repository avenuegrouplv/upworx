import React, { useEffect } from 'react';
import { 
  Factory, 
  Zap, 
  Settings, 
  Cpu, 
  ChevronRight,
  ArrowUpRight
} from 'lucide-react';
import { 
  MachineItem, 
  MACHINERY_CATEGORIES, 
  ALL_MACHINERY, 
  CategoryMeta 
} from '../data/machineryData';
import { MachineCard } from './MachineCard';
import { MachineDetailPage } from './MachineDetailPage';
import { useLanguage } from '../context/LanguageContext';
import { localizedCategories } from '../i18n/machineryLocalization';

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
  const { language, t } = useLanguage();
  const mp = t.machineryPage;

  // If a specific machine is selected, render the reusable MachineDetailPage template!
  const currentMachine = selectedMachineId 
    ? ALL_MACHINERY.find(m => m.id === selectedMachineId) 
    : null;

  // Only scroll to top if opening a specific machine detail page
  useEffect(() => {
    if (selectedMachineId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedMachineId]);

  const handleCategorySelect = (categorySlug: string) => {
    onSelectCategory(categorySlug);
    // Ekrāns aizslīd uz iekārtu sadaļu ~5cm augstāk, lai pilnībā ietilptu arī kartīšu attēli zem galvenes
    requestAnimationFrame(() => {
      setTimeout(() => {
        const el = document.getElementById('machinery-models-section');
        if (el) {
          const headerOffset = 105; // 80px fiksētā galvene + 25px papildu brīva vieta
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 50);
    });
  };

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

  const getCategoryName = (catId: string, defaultName: string) => {
    return localizedCategories[language]?.[catId]?.name || defaultName;
  };

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
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[360px] max-h-[480px] w-full bg-zinc-950 overflow-hidden flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="/hero_iekartas.jpg" 
            alt="UPWORX Machinery" 
            className="w-full h-full object-cover select-none"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
        </div>
        <div className="container mx-auto px-6 sm:px-8 lg:px-16 xl:px-20 relative z-10 text-white flex items-center justify-start">
          <div className="max-w-3xl text-left">
            <h1 className="text-3xl sm:text-4xl md:text-[42px] lg:text-[48px] font-black mb-5 leading-[1.15] tracking-tight uppercase">
              <span className="md:block">{mp.heroTitle1} </span>
              <span className="md:block">
                <span className="text-teal-custom">{mp.heroTitle2}</span>
              </span>
            </h1>
            <p className="text-sm sm:text-[15px] md:text-base lg:text-[17px] text-gray-200 max-w-2xl leading-relaxed font-normal">
              {mp.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Category Header & Tabs */}
      <div className="bg-white border-b border-zinc-200 pt-20 sm:pt-24 pb-12 mb-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter text-zinc-900 mb-6">
                {mp.catalogHeader1} <span className="text-teal-custom">{mp.catalogHeader2}</span>
              </h2>
              <div className="h-1 w-20 bg-teal-custom mb-2 sm:mb-0" />
            </div>
            
            <div className="bg-zinc-100 border border-zinc-200 px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider text-zinc-700 self-start md:self-auto">
              <span className="w-2 h-2 rounded-full bg-teal-custom inline-block mr-2" />
              {categoryMachines.length} {mp.inCategoryCount}
            </div>
          </div>

          {/* 4 Galvenās kategoriju navigācijas cilnes (Tabs) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
            {MACHINERY_CATEGORIES.map((cat) => {
              const isActive = cat.urlSlug === activeCategory.urlSlug;
              const catDisplayName = getCategoryName(cat.id, cat.name);
              return (
                <button
                  key={cat.id}
                  id={`tab-${cat.urlSlug}`}
                  onClick={() => handleCategorySelect(cat.urlSlug)}
                  className={`flex items-center space-x-3 p-3.5 rounded-sm border text-left transition-all duration-200 cursor-pointer ${
                    isActive 
                      ? 'bg-zinc-100 text-zinc-950 border-teal-custom shadow-sm ring-2 ring-teal-custom/60' 
                      : 'bg-white hover:bg-zinc-50 text-zinc-800 border-zinc-200 hover:border-zinc-300'
                  }`}
                >
                  <div className={`p-2 rounded-sm transition-colors ${isActive ? 'bg-white border border-teal-custom text-teal-custom shadow-xs' : 'bg-zinc-100 text-zinc-600'}`}>
                    {getCategoryIcon(cat.id)}
                  </div>
                  <div className="min-w-0">
                    <p className={`text-xs font-black uppercase tracking-wider truncate ${isActive ? 'text-zinc-950' : 'text-zinc-900'}`}>
                      {catDisplayName}
                    </p>
                    <p className={`text-[11px] truncate ${isActive ? 'text-teal-custom font-bold' : 'text-zinc-500'}`}>
                      4 {mp.machinesCountSuffix}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 4 Iekārtu kartīšu režģis konkrētajai kategorijai */}
      <div id="machinery-models-section" className="container mx-auto px-6 max-w-7xl scroll-mt-24">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-zinc-900">
              {mp.modelsRangeTitle1} <span className="text-teal-custom">{mp.modelsRangeTitle2}</span>
            </h2>
            <div className="h-1 w-20 bg-teal-custom mt-3" />
          </div>
          <span className="text-xs text-zinc-600 font-bold bg-white px-3.5 py-2 border border-zinc-200 rounded-sm shadow-xs self-start sm:self-auto">
            {mp.showingCount}
          </span>
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
              {mp.otherCategoriesBadge}
            </h2>
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-zinc-900 mb-4">
              {mp.otherCategoriesTitle}
            </h3>
            <div className="h-1 w-20 bg-teal-custom" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {MACHINERY_CATEGORIES.filter(c => c.urlSlug !== activeCategory.urlSlug).map((otherCat) => {
              const otherDisplayName = getCategoryName(otherCat.id, otherCat.name);
              return (
                <button
                  key={otherCat.id}
                  onClick={() => handleCategorySelect(otherCat.urlSlug)}
                  className="flex items-center space-x-3 p-3.5 rounded-sm border text-left transition-all duration-200 cursor-pointer bg-white hover:bg-zinc-50 text-zinc-800 border-zinc-200 hover:border-zinc-300"
                >
                  <div className="p-2 rounded-sm bg-zinc-100 text-zinc-600">
                    {getCategoryIcon(otherCat.id)}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-black uppercase tracking-wider truncate text-zinc-900">
                      {otherDisplayName}
                    </p>
                    <p className="text-[11px] truncate text-zinc-500">
                      4 {mp.machinesCountSuffix}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

