import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { MachineItem } from '../data/machineryData';
import { useLanguage } from '../context/LanguageContext';
import { getLocalizedMachine } from '../i18n/machineryLocalization';

interface MachineCardProps {
  machine: MachineItem;
  onViewMachine: (categorySlug: string, machineId: string) => void;
}

export const MachineCard: React.FC<MachineCardProps> = ({ machine: rawMachine, onViewMachine }) => {
  const { language, t } = useLanguage();
  const machine = getLocalizedMachine(rawMachine, language);
  const mc = t.machineCard;

  return (
    <div 
      id={`machine-card-${machine.id}`}
      className="group bg-white border border-zinc-200 hover:border-teal-custom transition-all duration-300 rounded-sm overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl"
    >
      <div>
        {/* Attēla bloks */}
        <div className="relative h-60 w-full bg-zinc-900 overflow-hidden">
          <img 
            src={machine.image} 
            alt={`${machine.brand} ${machine.model}`} 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-90 group-hover:opacity-100"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
          
          {/* Ražotāja birka */}
          <div className="absolute top-3.5 left-3.5 bg-zinc-950/90 border border-white/20 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-teal-custom shadow-md">
            {machine.brand}
          </div>

          {/* Modeļa nosaukums uz attēla */}
          <div className="absolute bottom-3 left-4 right-4">
            <h3 className="text-2xl font-black text-white uppercase tracking-tight leading-tight drop-shadow-sm">
              {machine.model}
            </h3>
          </div>
        </div>

        {/* Informācijas saturs */}
        <div className="p-6 space-y-5">
          {/* Iekārtas tips */}
          <div>
            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">
              {mc.machineTypeLabel}
            </p>
            <p className="text-sm font-bold text-zinc-900 uppercase tracking-tight min-h-[2.5rem] flex items-start">
              {machine.type}
            </p>
          </div>

          {/* 3 svarīgākie tehniskie parametri */}
          <div className="pt-4 border-t border-zinc-100">
            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-3">
              {mc.keyParamsLabel}
            </p>
            <div className="grid grid-cols-1 gap-2.5">
              {machine.threeMainParams.slice(0, 3).map((param, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center justify-between bg-zinc-50 border border-zinc-200/80 px-3 py-2 rounded-sm"
                >
                  <span className="text-xs text-zinc-600 font-medium">
                    {param.label}
                  </span>
                  <span className="text-xs font-black text-zinc-950 uppercase tracking-tight ml-2 text-right">
                    {param.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Poga: Apskatīt iekārtu */}
      <div className="p-6 pt-0">
        <button
          id={`view-machine-${machine.id}`}
          onClick={() => onViewMachine(machine.category, machine.id)}
          className="w-full bg-zinc-100 hover:bg-zinc-200/80 text-zinc-900 border border-zinc-400 hover:border-teal-custom py-3 px-4 text-xs font-bold uppercase tracking-wider rounded-sm transition-all duration-300 flex items-center justify-center gap-2.5 hover:shadow-md cursor-pointer"
        >
          <span>{mc.viewMachineBtn}</span>
          <span className="w-7 h-7 rounded-full border border-teal-custom text-teal-custom flex items-center justify-center shrink-0">
            <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2.8} />
          </span>
        </button>
      </div>
    </div>
  );
};

