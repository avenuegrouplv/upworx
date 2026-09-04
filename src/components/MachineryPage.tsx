import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Settings, 
  Factory, 
  Cpu, 
  X, 
  FileText, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  Filter,
  RotateCcw,
  SlidersHorizontal
} from 'lucide-react';
import { 
  MachineItem, 
  MACHINERY_CATEGORIES, 
  ALL_MACHINERY,
  ALL_MANUFACTURERS 
} from '../data/machineryData';

export type { MachineItem };

interface MachineryPageProps {
  onInquiryClick: (machineName?: string) => void;
  selectedCategory?: string | null;
  onSelectCategory?: (categoryId: string | null) => void;
}

export const MachineryPage: React.FC<MachineryPageProps> = ({ 
  onInquiryClick, 
  selectedCategory,
  onSelectCategory 
}) => {
  const [selectedManufacturer, setSelectedManufacturer] = useState<string>('all');
  const [activeModalMachine, setActiveModalMachine] = useState<MachineItem | null>(null);

  // Read URL search params on mount or when popstate happens (e.g. ?razotajs=TRUMPF)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const brandParam = params.get('razotajs') || params.get('brand');
    if (brandParam) {
      setSelectedManufacturer(brandParam.toUpperCase());
    }
  }, []);

  // Sync manufacturer param to URL without full reload
  const handleManufacturerChange = (brand: string) => {
    setSelectedManufacturer(brand);
    const url = new URL(window.location.href);
    if (brand && brand !== 'all') {
      url.searchParams.set('razotajs', brand);
    } else {
      url.searchParams.delete('razotajs');
      url.searchParams.delete('brand');
    }
    window.history.replaceState(null, '', url.pathname + url.search);
  };

  const handleCategoryChange = (categoryId: string | null) => {
    if (onSelectCategory) {
      onSelectCategory(categoryId);
    }
  };

  const resetAllFilters = () => {
    handleManufacturerChange('all');
    if (onSelectCategory) {
      onSelectCategory(null);
    }
  };

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeModalMachine) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeModalMachine]);

  // Current normalized category
  const currentCategorySlug = selectedCategory && selectedCategory !== 'all' ? selectedCategory : null;

  // Filter machines based on category & manufacturer
  const filteredMachines = ALL_MACHINERY.filter((machine) => {
    const matchCategory = !currentCategorySlug || machine.category === currentCategorySlug;
    const matchBrand = 
      selectedManufacturer === 'all' 
        ? true 
        : machine.brand.toUpperCase() === selectedManufacturer.toUpperCase();
    return matchCategory && matchBrand;
  });

  // Calculate count per category
  const getCategoryCount = (categoryId: string | null) => {
    return ALL_MACHINERY.filter((m) => {
      const matchCat = !categoryId || categoryId === 'all' || m.category === categoryId;
      const matchBrand = 
        selectedManufacturer === 'all'
          ? true
          : m.brand.toUpperCase() === selectedManufacturer.toUpperCase();
      return matchCat && matchBrand;
    }).length;
  };

  // Calculate count per brand (within currently active category)
  const getBrandCount = (brand: string) => {
    return ALL_MACHINERY.filter((m) => {
      const matchCat = !currentCategorySlug || m.category === currentCategorySlug;
      const matchBrand = 
        brand === 'all' 
          ? true 
          : m.brand.toUpperCase() === brand.toUpperCase();
      return matchCat && matchBrand;
    }).length;
  };

  // Get active category object
  const activeCategoryMeta = MACHINERY_CATEGORIES.find(c => c.urlSlug === currentCategorySlug) || MACHINERY_CATEGORIES[0];

  // Helper to get category icon
  const getCategoryIcon = (categorySlug: string) => {
    switch (categorySlug) {
      case 'metalapstrade':
        return <Factory className="w-5 h-5 text-teal-custom" />;
      case 'lazera-griesana':
        return <Zap className="w-5 h-5 text-teal-custom" />;
      case 'cnc-iekartas':
        return <Settings className="w-5 h-5 text-teal-custom" />;
      case 'automatizacija':
        return <Cpu className="w-5 h-5 text-teal-custom" />;
      default:
        return <Factory className="w-5 h-5 text-teal-custom" />;
    }
  };

  // Render a specific category block
  const renderCategorySection = (
    sectionId: string,
    title: string,
    subtitle: string,
    machines: MachineItem[],
    icon: React.ReactNode
  ) => {
    if (machines.length === 0) return null;

    return (
      <section id={sectionId} key={sectionId} className="scroll-mt-32 mb-20">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-8 border-b-2 border-zinc-200 gap-4">
          <div>
            <div className="flex items-center gap-2.5 text-teal-custom font-extrabold text-xs uppercase tracking-[0.25em] mb-2">
              <span className="p-1.5 bg-teal-50 border border-teal-custom/30 rounded-sm">
                {icon}
              </span>
              <span>{subtitle}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-zinc-900">
              {title}
            </h2>
          </div>
          <div className="inline-flex items-center self-start sm:self-auto bg-zinc-100 border border-zinc-200 px-3.5 py-1.5 rounded-sm text-xs font-bold text-zinc-700 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-teal-custom mr-2"></span>
            {machines.length} {machines.length === 1 ? 'Iekārta' : 'Iekārtas'}
          </div>
        </div>

        {/* Machine Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 lg:gap-8">
          {machines.map((machine) => (
            <div 
              key={machine.id}
              id={machine.id}
              className="bg-white border border-zinc-200 hover:border-teal-custom/60 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Image header - compact & clean */}
                <div className="relative h-48 sm:h-52 w-full bg-zinc-900 overflow-hidden border-b border-zinc-100">
                  <img 
                    src={machine.image} 
                    alt={machine.name} 
                    className="w-full h-full object-cover grayscale opacity-90 transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Top Brand Badge */}
                  <div className="absolute top-3.5 left-3.5 bg-zinc-950/90 border border-white/20 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-teal-custom shadow-md">
                    {machine.brand}
                  </div>

                  {/* Machine Title on top of image */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[10px] font-bold text-teal-300 uppercase tracking-widest block mb-0.5">
                      {machine.categoryName}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight leading-tight drop-shadow-sm">
                      {machine.name}
                    </h3>
                  </div>
                </div>

                {/* Content body */}
                <div className="p-5 sm:p-6 space-y-4">
                  {/* Function Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {machine.functions.map((fn, idx) => (
                      <span 
                        key={idx}
                        className="bg-zinc-100 border border-zinc-200/80 text-zinc-700 text-[11px] font-semibold px-2.5 py-1 rounded-sm"
                      >
                        {fn}
                      </span>
                    ))}
                  </div>

                  {/* Main Description */}
                  <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                    {machine.description}
                  </p>

                  {/* Technical Information Matrix */}
                  <div className="bg-zinc-50 border border-zinc-200/70 p-3.5 rounded-sm space-y-2.5 text-xs">
                    <div>
                      <span className="font-extrabold text-zinc-900 uppercase tracking-wider text-[10px] block mb-0.5 text-teal-800">
                        Pielietojums:
                      </span>
                      <p className="text-zinc-600 leading-normal">
                        {machine.whereUsed}
                      </p>
                    </div>
                    <div className="pt-2 border-t border-zinc-200/60">
                      <span className="font-extrabold text-zinc-900 uppercase tracking-wider text-[10px] block mb-0.5 text-teal-800">
                        Galvenā priekšrocība:
                      </span>
                      <p className="text-zinc-600 leading-normal">
                        {machine.whyChoose}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-5 sm:p-6 pt-0 flex flex-col sm:flex-row items-center gap-2.5 border-t border-zinc-100 mt-2">
                <button
                  onClick={() => setActiveModalMachine(machine)}
                  className="w-full sm:w-1/2 py-2.5 px-3 border border-zinc-300 hover:border-zinc-900 hover:bg-zinc-50 text-zinc-800 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 mr-1.5 text-teal-custom" />
                  <span>Specifikācija</span>
                </button>
                <button
                  onClick={() => onInquiryClick(machine.name)}
                  className="w-full sm:w-1/2 py-2.5 px-3 bg-teal-custom hover:bg-teal-600 text-zinc-950 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center cursor-pointer shadow-sm"
                >
                  <span>Pieteikt cenu</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

  const hasActiveFilters = Boolean(currentCategorySlug || selectedManufacturer !== 'all');

  return (
    <div className="bg-zinc-50 min-h-screen">
      {/* 1. Page Hero Banner */}
      <section className="bg-zinc-950 text-white pt-24 pb-14 border-b border-zinc-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-custom/10 border border-teal-custom/30 text-teal-custom text-xs font-bold uppercase tracking-widest mb-4">
              <span>Industriālais Katalogs</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mb-4">
              Iekārtas un Risinājumi
            </h1>
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-3xl">
              Pasaules līmeņa ražotāju metālapstrādes, lāzergriešanas, CNC un automatizācijas iekārtas ar pilnu garantijas servisu un uzstādīšanu Baltijā.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Interactive Filter Section */}
      <div className="sticky top-16 z-30 bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800 shadow-xl py-4 transition-all">
        <div className="container mx-auto px-6 space-y-4">
          
          {/* Top Filter Bar Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-zinc-800/80">
            <div className="flex items-center gap-2 text-white">
              <SlidersHorizontal className="w-4 h-4 text-teal-custom shrink-0" />
              <span className="text-xs font-black uppercase tracking-widest text-zinc-300">
                Iekārtu filtrēšana
              </span>
              <span className="text-zinc-600">|</span>
              <span className="text-xs text-zinc-400">
                Atrastas <strong className="text-teal-custom font-bold">{filteredMachines.length}</strong> no {ALL_MACHINERY.length} iekārtām
              </span>
            </div>

            {hasActiveFilters && (
              <button
                onClick={resetAllFilters}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-custom hover:text-white transition-colors cursor-pointer self-start sm:self-auto"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Notīrīt visus filtrus</span>
              </button>
            )}
          </div>

          {/* Filter Controls: Row 1 - Kategorija */}
          <div className="flex items-center gap-2">
            <label htmlFor="machinery-category-select" className="text-xs font-black uppercase tracking-wider text-zinc-400 min-w-[90px]">
              Kategorija:
            </label>
            <select
              id="machinery-category-select"
              value={currentCategorySlug || 'all'}
              onChange={(e) => handleCategoryChange(e.target.value === 'all' ? null : e.target.value)}
              className="bg-zinc-900 text-zinc-200 text-xs font-bold uppercase tracking-wider border border-zinc-700 hover:border-teal-custom focus:border-teal-custom focus:ring-1 focus:ring-teal-custom rounded-sm px-3 py-1.5 outline-none cursor-pointer transition-colors"
            >
              <option value="all">Visas kategorijas ({getCategoryCount(null)})</option>
              {MACHINERY_CATEGORIES.filter(c => c.id !== 'all').map((cat) => (
                <option key={cat.id} value={cat.urlSlug}>
                  {cat.name} ({getCategoryCount(cat.urlSlug)})
                </option>
              ))}
            </select>
          </div>

          {/* Filter Controls: Row 2 - Ražotājs */}
          <div className="flex items-center gap-2 pt-1 border-t border-zinc-900">
            <label htmlFor="machinery-manufacturer-select" className="text-xs font-black uppercase tracking-wider text-zinc-400 min-w-[90px]">
              Ražotājs:
            </label>
            <select
              id="machinery-manufacturer-select"
              value={selectedManufacturer}
              onChange={(e) => handleManufacturerChange(e.target.value)}
              className="bg-zinc-900 text-zinc-200 text-xs font-bold uppercase tracking-wider border border-zinc-700 hover:border-teal-custom focus:border-teal-custom focus:ring-1 focus:ring-teal-custom rounded-sm px-3 py-1.5 outline-none cursor-pointer transition-colors"
            >
              <option value="all">Visi ražotāji ({getBrandCount('all')})</option>
              {ALL_MANUFACTURERS.map((brand) => (
                <option key={brand} value={brand}>
                  {brand} ({getBrandCount(brand)})
                </option>
              ))}
            </select>
          </div>

          {/* Active Filter Tags */}
          {hasActiveFilters && (
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-zinc-900 text-xs">
              <span className="text-zinc-500 font-medium">Aktīvie filtri:</span>
              {currentCategorySlug && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-zinc-900 text-teal-custom border border-teal-custom/40 rounded-sm font-semibold">
                  <span>Kategorija: {activeCategoryMeta.name}</span>
                  <button
                    onClick={() => handleCategoryChange(null)}
                    className="hover:text-white ml-1 cursor-pointer"
                    aria-label="Noņemt kategorijas filtru"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {selectedManufacturer !== 'all' && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-zinc-900 text-teal-custom border border-teal-custom/40 rounded-sm font-semibold">
                  <span>Ražotājs: {selectedManufacturer}</span>
                  <button
                    onClick={() => handleManufacturerChange('all')}
                    className="hover:text-white ml-1 cursor-pointer"
                    aria-label="Noņemt ražotāja filtru"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
            </div>
          )}

        </div>
      </div>

      {/* Main Content Area */}
      <main className="container mx-auto px-6 mt-14 mb-24">
        {/* If no machines found with current filters */}
        {filteredMachines.length === 0 ? (
          <div className="bg-white border border-zinc-200 rounded-sm p-12 text-center max-w-xl mx-auto shadow-sm my-16">
            <div className="w-14 h-14 bg-zinc-100 rounded-full flex items-center justify-center mx-auto mb-4 text-zinc-400">
              <Filter className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-black uppercase tracking-tight text-zinc-900 mb-2">
              Iekārtas netika atrastas
            </h3>
            <p className="text-sm text-zinc-600 mb-6 leading-relaxed">
              Ar izvēlēto kategoriju un ražotāju filtru šobrīd katalogā nav atbilstošu iekārtu. Mēģiniet izvēlēties citu ražotāju vai atiestatīt filtrus.
            </p>
            <button
              onClick={resetAllFilters}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-teal-custom hover:bg-teal-600 text-zinc-950 font-bold uppercase tracking-wider text-xs rounded-sm transition-colors cursor-pointer shadow-md"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Notīrīt visus filtrus</span>
            </button>
          </div>
        ) : currentCategorySlug ? (
          /* Single selected category mode (with unique URL) */
          renderCategorySection(
            currentCategorySlug,
            activeCategoryMeta.name,
            activeCategoryMeta.subtitle,
            filteredMachines,
            getCategoryIcon(currentCategorySlug)
          )
        ) : (
          /* All categories mode */
          <>
            {renderCategorySection(
              'metalapstrade',
              'Metālapstrāde',
              'Locīšana · Virpošana · Profilu apstrāde',
              filteredMachines.filter(m => m.category === 'metalapstrade'),
              <Factory className="w-4 h-4 text-teal-custom" />
            )}

            {renderCategorySection(
              'lazera-griesana',
              'Lāzera griešana',
              'Šķiedru lāzeri · Cauruļu 3D griešana · Lokšņu centri',
              filteredMachines.filter(m => m.category === 'lazera-griesana'),
              <Zap className="w-4 h-4 text-teal-custom" />
            )}

            {renderCategorySection(
              'cnc-iekartas',
              'CNC iekārtas',
              '5-asu frēzēšana · Ātrgaitas centri · Daudzasu virpošana',
              filteredMachines.filter(m => m.category === 'cnc-iekartas'),
              <Settings className="w-4 h-4 text-teal-custom" />
            )}

            {renderCategorySection(
              'automatizacija',
              'Automatizācijas iekārtas',
              'Robotšūnas · Metināšanas roboti · Automātiskās noliktavas',
              filteredMachines.filter(m => m.category === 'automatizacija'),
              <Cpu className="w-4 h-4 text-teal-custom" />
            )}
          </>
        )}
      </main>

      {/* 5. Specification Modal */}
      {activeModalMachine && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fade-in overflow-y-auto">
          <div 
            className="bg-white text-zinc-900 w-full max-w-2xl rounded-sm shadow-2xl border border-zinc-200 overflow-hidden my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-zinc-950 text-white p-6 flex items-start justify-between border-b border-zinc-800">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[11px] font-black uppercase tracking-widest text-teal-custom">
                    {activeModalMachine.brand}
                  </span>
                  <span className="text-zinc-500 text-xs">·</span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                    {activeModalMachine.categoryName}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                  {activeModalMachine.name}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalMachine(null)}
                className="text-zinc-400 hover:text-white p-2 rounded-sm hover:bg-zinc-800 transition-colors cursor-pointer"
                aria-label="Aizvērt modālo logu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
              {/* Description */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-widest text-zinc-400 mb-2">
                  Iekārtas apraksts
                </h4>
                <p className="text-sm text-zinc-700 leading-relaxed">
                  {activeModalMachine.description}
                </p>
              </div>

              {/* Technical Specifications Table */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-widest text-zinc-900 mb-3 flex items-center gap-2">
                  <Settings className="w-4 h-4 text-teal-custom" />
                  <span>Tehniskie parametri un specifikācija</span>
                </h4>
                <div className="border border-zinc-200 rounded-sm overflow-hidden text-xs sm:text-sm">
                  <div className="divide-y divide-zinc-200">
                    {activeModalMachine.specs.map((spec, idx) => (
                      <div 
                        key={idx}
                        className={`flex flex-col sm:flex-row sm:items-center justify-between p-3 ${
                          idx % 2 === 0 ? 'bg-zinc-50' : 'bg-white'
                        }`}
                      >
                        <span className="font-semibold text-zinc-600 sm:w-1/2">
                          {spec.label}
                        </span>
                        <span className="font-bold text-zinc-900 sm:w-1/2 sm:text-right mt-0.5 sm:mt-0">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Standard Guarantees */}
              <div className="bg-teal-50/70 border border-teal-200/80 p-4 rounded-sm">
                <h5 className="font-extrabold text-xs text-teal-900 uppercase tracking-wider mb-2 flex items-center">
                  <ShieldCheck className="w-4 h-4 mr-1.5 text-teal-custom" />
                  UPWORX Standarta komplektācija un serviss
                </h5>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-teal-950/80">
                  <li className="flex items-center">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-teal-custom shrink-0" />
                    24 mēnešu pilna ražotāja garantija
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-teal-custom shrink-0" />
                    Piegāde, montāža un nodošana ekspluatācijā
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-teal-custom shrink-0" />
                    Operatoru un inženieru apmācība uz vietas
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-teal-custom shrink-0" />
                    Sertificēts servisa atbalsts 24h laikā Baltijā
                  </li>
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-zinc-100 px-6 py-4 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                onClick={() => setActiveModalMachine(null)}
                className="w-full sm:w-auto px-5 py-2.5 border border-zinc-300 hover:bg-zinc-200 text-zinc-700 font-bold uppercase tracking-wider text-xs rounded-sm transition-colors cursor-pointer"
              >
                Aizvērt
              </button>
              <button
                onClick={() => {
                  const machineName = activeModalMachine.name;
                  setActiveModalMachine(null);
                  onInquiryClick(machineName);
                }}
                className="w-full sm:w-auto px-6 py-2.5 bg-teal-custom hover:bg-teal-600 text-zinc-950 font-bold uppercase tracking-wider text-xs rounded-sm transition-colors flex items-center justify-center cursor-pointer shadow-md"
              >
                <span>Pieteikt cenu piedāvājumu</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
