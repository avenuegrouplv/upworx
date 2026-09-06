import React from 'react';
import { 
  MessagesSquare, 
  Truck, 
  SlidersHorizontal, 
  GraduationCap, 
  Wrench, 
  Layers 
} from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      title: 'Iekārtu konsultācijas',
      desc: 'Palīdzība piemērotākās tehnoloģijas un iekārtas izvēlē.',
      icon: MessagesSquare,
    },
    {
      title: 'Piegāde un uzstādīšana',
      desc: 'Iekārtu piegāde, uzstādīšana un sagatavošana darbam.',
      icon: Truck,
    },
    {
      title: 'Nodošana ekspluatācijā',
      desc: 'Iekārtu konfigurēšana, pārbaude un palaišana.',
      icon: SlidersHorizontal,
    },
    {
      title: 'Operatoru apmācība',
      desc: 'Personāla apmācība darbam ar uzstādītajām iekārtām.',
      icon: GraduationCap,
    },
    {
      title: 'Tehniskais serviss',
      desc: 'Diagnostika, apkope un remonts.',
      icon: Wrench,
    },
    {
      title: 'Rezerves daļas',
      desc: 'Rezerves un dilstošo detaļu piegāde.',
      icon: Layers,
    },
  ];

  return (
    <section id="services-section" className="py-16 sm:py-20 bg-zinc-50 border-t border-zinc-200/80">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-zinc-900">
            PAKALPOJUMI <span className="text-teal-custom">UN SERVISS</span>
          </h2>
          <div className="h-1 w-20 bg-teal-custom mx-auto mt-4"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 justify-center">
            {services.map((srv, idx) => {
              const IconComponent = srv.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 sm:p-7 border border-zinc-300 rounded-sm shadow-xs flex flex-col justify-between max-w-[320px] w-full mx-auto"
                >
                  <div>
                    {/* Vizuāli lielāks un izteiksmīgāks simbols */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-sm bg-teal-custom/10 border border-teal-custom/30 text-teal-custom flex items-center justify-center mb-5 shrink-0 shadow-xs">
                      <IconComponent className="w-7 h-7 sm:w-8 sm:h-8" strokeWidth={2.2} />
                    </div>
                    <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-zinc-900 mb-2 leading-snug">
                      {srv.title}
                    </h3>
                    <p className="text-zinc-600 text-xs sm:text-[13px] leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
