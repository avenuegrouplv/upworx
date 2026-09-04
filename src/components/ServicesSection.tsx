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
    <section id="services-section" className="py-24 bg-zinc-50 border-t border-zinc-200/80">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-teal-custom font-bold uppercase tracking-[0.25em] text-xs mb-3">
            Pilna cikla atbalsts Jūsu ražotnei
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-zinc-900">
            PAKALPOJUMI <span className="text-teal-custom">UN SERVISS</span>
          </h2>
          <div className="h-1 w-20 bg-teal-custom mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((srv, idx) => {
            const IconComponent = srv.icon;
            return (
              <div
                key={idx}
                className="bg-white p-8 sm:p-9 border border-zinc-200/90 rounded-sm shadow-xs hover:border-teal-custom hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-sm bg-teal-custom/10 text-teal-custom flex items-center justify-center mb-6 group-hover:bg-teal-custom group-hover:text-zinc-950 transition-colors shrink-0">
                    <IconComponent className="w-6 h-6" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-tight text-zinc-900 mb-2.5 group-hover:text-teal-custom transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    {srv.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
