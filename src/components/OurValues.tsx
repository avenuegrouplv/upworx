import React from 'react';
import { Cpu, ShieldCheck, Award, Handshake } from 'lucide-react';

export const OurValues: React.FC = () => {
  const values = [
    {
      title: "Inovācijas",
      desc: "Sekojam tehnoloģiju un ražošanas iekārtu attīstībai, izvērtējot risinājumus, kas praksē nodrošina lielāku precizitāti, efektivitāti un ražošanas iespējas.",
      icon: Cpu,
    },
    {
      title: "Uzticamība",
      desc: "Mūsu reputācija balstās uz profesionālu attieksmi, skaidru komunikāciju un uzņemto saistību izpildi. Klientiem sniedzam pārbaudītu informāciju un risinājumus, uz kuriem var paļauties.",
      icon: ShieldCheck,
    },
    {
      title: "Kvalitāte",
      desc: "Piedāvājam profesionālai ražošanai paredzētas iekārtas un tehnoloģiskos risinājumus no atzītiem ražotājiem, īpašu uzmanību pievēršot to kvalitātei, precizitātei un ilgmūžībai.",
      icon: Award,
    },
    {
      title: "Partnerība",
      desc: "Veidojam ilgtermiņa sadarbību, izprotot katra klienta ražošanas vajadzības un palīdzot izvēlēties piemērotāko risinājumu gan šodienas prasībām, gan uzņēmuma turpmākajai attīstībai.",
      icon: Handshake,
    }
  ];

  return (
    <section id="our-values-section" className="py-16 sm:py-20 bg-white border-b border-zinc-100">
      <div className="container mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tighter mb-4 text-zinc-900">
          MŪSU <span className="text-teal-custom">VĒRTĪBAS</span>
        </h2>
        <div className="h-1 w-24 bg-teal-custom mx-auto mb-4"></div>
      </div>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => {
            const IconComponent = v.icon;
            return (
              <div 
                key={i} 
                className="bg-zinc-50 p-8 sm:p-10 shadow-xs border border-zinc-200/80 rounded-sm hover:border-teal-custom hover:bg-white transition-all flex flex-col"
              >
                <div className="w-12 h-12 rounded-sm bg-teal-custom/10 text-teal-custom flex items-center justify-center mb-6 shrink-0">
                  <IconComponent className="w-6 h-6" strokeWidth={2} />
                </div>
                <h4 className="text-xl font-black uppercase mb-3 tracking-tight text-zinc-900">{v.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
