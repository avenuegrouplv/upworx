import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ArrowUpRight,
  FileText, 
  Download, 
  ChevronRight, 
  Check, 
  Layers, 
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { MachineItem, ALL_MACHINERY, MACHINERY_CATEGORIES } from '../data/machineryData';
import { MachineCard } from './MachineCard';
import { MachineInquiryModal } from './MachineInquiryModal';

interface MachineDetailPageProps {
  machine: MachineItem;
  onNavigateToCategory: (categorySlug: string) => void;
  onNavigateToMachine: (categorySlug: string, machineId: string) => void;
  onInquiryClick?: (machineName: string) => void;
}

export const MachineDetailPage: React.FC<MachineDetailPageProps> = ({
  machine,
  onNavigateToCategory,
  onNavigateToMachine
}) => {
  const [activeImage, setActiveImage] = useState<string>(machine.image);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState<boolean>(false);

  // Reset active image when machine changes
  useEffect(() => {
    setActiveImage(machine.image);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [machine.id, machine.image]);

  // Find category metadata
  const categoryMeta = MACHINERY_CATEGORIES.find(c => c.id === machine.category);

  // Other 3 machines in this category
  const otherMachines = ALL_MACHINERY.filter(
    m => m.category === machine.category && m.id !== machine.id
  ).slice(0, 3);

  // Format "Citas [kategorijas] iekārtas" title
  const getOtherHeading = () => {
    switch (machine.category) {
      case 'metalapstrade':
        return 'Citas metālapstrādes iekārtas';
      case 'lazera-griesana':
        return 'Citas lāzera griešanas iekārtas';
      case 'cnc-iekartas':
        return 'Citas CNC iekārtas';
      case 'automatizacija':
        return 'Citas automatizācijas iekārtas';
      default:
        return 'Citas iekārtas';
    }
  };

  // Pareizs teksts kategorijas saitei bez vārdu dublēšanās
  const getViewAllCategoryLabel = () => {
    switch (machine.category) {
      case 'metalapstrade':
        return 'Apskatīt visas metālapstrādes iekārtas';
      case 'lazera-griesana':
        return 'Apskatīt visas lāzera griešanas iekārtas';
      case 'cnc-iekartas':
        return 'Apskatīt visas CNC iekārtas';
      case 'automatizacija':
        return 'Apskatīt visas automatizācijas iekārtas';
      default:
        return 'Apskatīt visas iekārtas';
    }
  };

  const imagesList = machine.galleryImages && machine.galleryImages.length > 0
    ? machine.galleryImages
    : [machine.image];

  return (
    <div id={`machine-detail-${machine.id}`} className="bg-white min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Breadcrumb navigation */}
        <nav className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-8 overflow-x-auto whitespace-nowrap pb-1">
          <button 
            onClick={() => onNavigateToCategory('metalapstrade')} 
            className="hover:text-teal-custom transition-colors cursor-pointer"
          >
            Iekārtas
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-400 flex-shrink-0" />
          <button 
            onClick={() => onNavigateToCategory(machine.category)} 
            className="hover:text-teal-custom transition-colors cursor-pointer"
          >
            {machine.categoryName}
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-400 flex-shrink-0" />
          <span className="text-zinc-900 font-bold">
            {machine.brand} {machine.model}
          </span>
        </nav>

        {/* ========================================================================= */}
        {/* 4. LAPAS AUGŠĒJĀ SADAĻA (Divu kolonnu izkārtojums)                       */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pb-16 border-b border-zinc-200">
          
          {/* Kreisajā pusē: Liels attēls + galerija */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            <div className="relative aspect-[4/3] w-full bg-zinc-950 rounded-sm overflow-hidden border border-zinc-200 shadow-sm">
              <img 
                src={activeImage} 
                alt={`${machine.brand} ${machine.model}`} 
                className="w-full h-full object-cover grayscale opacity-95 transition-all duration-500"
              />
              <div className="absolute top-4 left-4 bg-zinc-950/90 border border-white/20 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-teal-custom shadow-md">
                {machine.brand}
              </div>
            </div>

            {/* Galerijas sīktēli (ja vairāki attēli) */}
            {imagesList.length > 1 && (
              <div className="flex items-center space-x-3 pt-1">
                {imagesList.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(imgUrl)}
                    className={`relative w-24 h-16 rounded-sm overflow-hidden border-2 transition-all cursor-pointer ${
                      activeImage === imgUrl ? 'border-teal-custom shadow-md ring-2 ring-teal-custom/40' : 'border-zinc-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img 
                      src={imgUrl} 
                      alt={`Sīktēls ${idx + 1}`} 
                      className="w-full h-full object-cover grayscale"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Labajā pusē: Ražotājs, virsraksts, apakšvirsraksts, apraksts, 3 parametri, poga */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                <span className="inline-block bg-zinc-100 text-zinc-800 text-[11px] font-black uppercase tracking-widest px-3 py-1 rounded-sm border border-zinc-200 mb-3">
                  Ražotājs: {machine.brand}
                </span>
                <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black uppercase tracking-tight text-zinc-900 leading-tight">
                  {machine.model}
                </h1>
                <p className="text-base sm:text-lg font-bold text-teal-custom uppercase tracking-wide mt-1">
                  {machine.type}
                </p>
              </div>

              {/* Īss apraksts */}
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                {machine.shortDescription}
              </p>

              {/* 3 galvenie parametri vizuāli izcelti */}
              <div className="pt-4 border-t border-zinc-100 space-y-2.5">
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-zinc-400">
                  Galvenie parametri
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {machine.threeMainParams.map((param, idx) => (
                    <div 
                      key={idx} 
                      className="bg-zinc-50 border border-zinc-200/90 p-3.5 rounded-sm flex flex-col justify-center"
                    >
                      <span className="text-lg sm:text-xl font-black text-zinc-950 uppercase tracking-tight">
                        {param.value}
                      </span>
                      <span className="text-[11px] font-semibold text-zinc-600 mt-0.5 leading-snug">
                        {param.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Poga: PIEPRASĪT PIEDĀVĀJUMU */}
            <div className="pt-4">
              <button
                id="top-inquiry-btn"
                onClick={() => setIsInquiryModalOpen(true)}
                className="w-full bg-teal-custom hover:bg-teal-600 text-white py-4 px-6 text-sm font-black uppercase tracking-widest rounded-sm transition-all duration-300 shadow-lg shadow-teal-900/20 flex items-center justify-center gap-2.5 cursor-pointer hover:shadow-teal-900/30"
              >
                <span>Pieprasīt piedāvājumu</span>
              </button>
              <p className="text-[11px] text-zinc-400 text-center mt-2.5">
                Piedāvājuma sagatavošana parasti aizņem 1 darba dienu
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 5. SADAĻA “PAR IEKĀRTU”                                                  */}
        {/* ========================================================================= */}
        <section id="section-about-machine" className="py-16 border-b border-zinc-200">
          <div className="max-w-4xl">
            <h2 className="text-xs font-black uppercase tracking-[0.25em] text-teal-custom mb-2">
              Apraksts
            </h2>
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-zinc-900 mb-4">
              Par iekārtu
            </h3>
            <div className="h-1 w-20 bg-teal-custom mb-8" />
            <p className="text-zinc-700 text-base sm:text-lg leading-relaxed font-normal">
              {machine.aboutText}
            </p>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. SADAĻA “GALVENĀS PRIEKŠROCĪBAS”                                      */}
        {/* ========================================================================= */}
        <section id="section-advantages" className="py-16 border-b border-zinc-200">
          <div className="mb-10">
            <h2 className="text-xs font-black uppercase tracking-[0.25em] text-teal-custom mb-2">
              Priekšrocības
            </h2>
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-zinc-900 mb-4">
              Galvenās priekšrocības
            </h3>
            <div className="h-1 w-20 bg-teal-custom" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {machine.advantages.map((adv, idx) => (
              <div 
                key={idx} 
                className="bg-zinc-50 border border-zinc-200/90 p-6 rounded-sm flex flex-col justify-start hover:border-zinc-400 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-teal-custom/10 text-teal-custom flex items-center justify-center font-black text-xs mb-4">
                  0{idx + 1}
                </div>
                <h4 className="text-sm font-black uppercase tracking-wide text-zinc-900 mb-2.5">
                  {adv.title}
                </h4>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  {adv.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. SADAĻA “TEHNISKIE PARAMETRI”                                          */}
        {/* ========================================================================= */}
        <section id="section-specs" className="py-16 border-b border-zinc-200">
          <div className="mb-10">
            <h2 className="text-xs font-black uppercase tracking-[0.25em] text-teal-custom mb-2">
              Specifikācija
            </h2>
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-zinc-900 mb-4">
              Tehniskie parametri
            </h3>
            <div className="h-1 w-20 bg-teal-custom" />
          </div>

          {/* Tīra divu kolonnu tabula */}
          <div className="max-w-4xl border border-zinc-200 rounded-sm overflow-hidden bg-white shadow-sm">
            <div className="divide-y divide-zinc-200">
              {machine.specs.map((spec, idx) => (
                <div 
                  key={idx} 
                  className={`grid grid-cols-1 sm:grid-cols-12 px-6 py-4 transition-colors ${
                    idx % 2 === 0 ? 'bg-white' : 'bg-zinc-50/60'
                  } hover:bg-teal-50/30`}
                >
                  <div className="sm:col-span-5 font-bold text-xs uppercase tracking-wider text-zinc-700 mb-1 sm:mb-0">
                    {spec.parameter}
                  </div>
                  <div className="sm:col-span-7 text-xs sm:text-sm font-semibold text-zinc-950">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 8. SADAĻA “TEHNOLOĢIJAS UN FUNKCIJAS” (Opcionāla)                         */}
        {/* ========================================================================= */}
        {machine.technologies && machine.technologies.length > 0 && (
          <section id="section-technologies" className="py-16 border-b border-zinc-200">
            <div className="mb-10">
              <h2 className="text-xs font-black uppercase tracking-[0.25em] text-teal-custom mb-2">
                Inovācijas
              </h2>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-zinc-900 mb-4">
                Tehnoloģijas un funkcijas
              </h3>
              <div className="h-1 w-20 bg-teal-custom" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
              {machine.technologies.map((tech, idx) => (
                <div 
                  key={idx} 
                  className="bg-zinc-900 text-white p-7 rounded-sm border border-zinc-800 shadow-md relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-teal-custom/10 rounded-full blur-2xl pointer-events-none" />
                  <div className="flex items-center space-x-2.5 mb-3 text-teal-custom">
                    <Sparkles className="w-5 h-5" />
                    <h4 className="text-base font-black uppercase tracking-wider text-white">
                      {tech.title}
                    </h4>
                  </div>
                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* 9. SADAĻA “DOKUMENTĀCIJA” (Opcionāla, bez video/YouTube)                  */}
        {/* ========================================================================= */}
        {machine.documentation && machine.documentation.length > 0 && (
          <section id="section-docs" className="py-16 border-b border-zinc-200">
            <div className="mb-10">
              <h2 className="text-xs font-black uppercase tracking-[0.25em] text-teal-custom mb-2">
                Materiāli
              </h2>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-zinc-900 mb-4">
                Dokumentācija
              </h3>
              <div className="h-1 w-20 bg-teal-custom" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl">
              {machine.documentation.map((doc, idx) => (
                <div 
                  key={idx} 
                  className="bg-white border border-zinc-200 p-5 rounded-sm flex items-center justify-between shadow-sm hover:border-teal-custom transition-all"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-sm bg-red-50 text-red-600 border border-red-200/60 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-zinc-900 line-clamp-1">
                        {doc.title}
                      </h4>
                      <span className="text-[11px] text-zinc-500 font-medium">
                        PDF dokuments {doc.fileSize ? `· ${doc.fileSize}` : ''}
                      </span>
                    </div>
                  </div>

                  <a
                    href="#download"
                    onClick={(e) => {
                      e.preventDefault();
                      alert(`Sagatavo ${doc.title} lejupielādi...`);
                    }}
                    className="inline-flex items-center space-x-1.5 bg-zinc-900 hover:bg-teal-custom text-white px-3.5 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer flex-shrink-0 ml-4"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Lejupielādēt PDF</span>
                    <span className="sm:hidden">PDF</span>
                  </a>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* 10. SADAĻA “PIEPRASĪT PIEDĀVĀJUMU” (CTA Banneris ar modal atvēršanu)      */}
        {/* ========================================================================= */}
        <section id="section-inquiry-cta" className="py-20 border-b border-zinc-200">
          <div className="bg-zinc-950 text-white rounded-sm p-8 sm:p-14 relative overflow-hidden shadow-2xl">
            <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-teal-custom/15 to-transparent pointer-events-none" />
            
            <div className="relative z-10 max-w-2xl space-y-6">
              <span className="text-teal-custom font-extrabold text-xs uppercase tracking-[0.25em]">
                Konsultācija un aprēķins
              </span>
              <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white leading-tight">
                INTERESĒ {machine.brand} {machine.model}?
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Sazinieties ar mūsu komandu, lai saņemtu informāciju par iekārtas konfigurāciju, piegādes iespējām un cenu.
              </p>
              <div className="pt-2">
                <button
                  id="cta-open-inquiry-modal-btn"
                  onClick={() => setIsInquiryModalOpen(true)}
                  className="bg-teal-custom hover:bg-teal-600 text-white px-8 py-4 text-xs font-black uppercase tracking-widest rounded-sm transition-all duration-300 shadow-xl shadow-teal-900/40 inline-flex items-center gap-2 cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Pieprasīt piedāvājumu</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 11. SADAĻA “CITAS ŠĪS KATEGORIJAS IEKĀRTAS”                               */}
        {/* ========================================================================= */}
        <section id="section-other-machines" className="pt-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <h2 className="text-xs font-black uppercase tracking-[0.25em] text-teal-custom mb-2">
                Saistītās iekārtas
              </h2>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-zinc-900 mb-4">
                {getOtherHeading()}
              </h3>
              <div className="h-1 w-20 bg-teal-custom" />
            </div>
            <button
              onClick={() => onNavigateToCategory(machine.category)}
              className="bg-zinc-100 hover:bg-zinc-200/80 text-zinc-900 border border-zinc-400 hover:border-teal-custom px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all rounded-sm cursor-pointer shadow-xs inline-flex items-center gap-2.5 self-start sm:self-auto shrink-0 hover:shadow-md"
            >
              <span>{getViewAllCategoryLabel()}</span>
              <span className="w-6 h-6 rounded-full border border-teal-custom text-teal-custom flex items-center justify-center shrink-0">
                <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2.8} />
              </span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherMachines.map((otherMachine) => (
              <MachineCard 
                key={otherMachine.id}
                machine={otherMachine}
                onViewMachine={onNavigateToMachine}
              />
            ))}
          </div>
        </section>

      </div>

      {/* Modal logs piedāvājuma pieprasījumam */}
      <MachineInquiryModal 
        machine={machine}
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
      />
    </div>
  );
};
