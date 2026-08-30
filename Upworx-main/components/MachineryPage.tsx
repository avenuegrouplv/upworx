
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Zap, Target, Settings, Factory, ShieldCheck, Cpu, ExternalLink } from 'lucide-react';

interface Model {
  name: string;
  params: string[];
}

interface Category {
  id: string;
  title: string;
  description: string;
  applications: string[];
  benefits: string[];
  models: Model[];
  manufacturerUrl: string;
  image: string;
}

interface MachineryPageProps {
  onInquiryClick: () => void;
}

export const MachineryPage: React.FC<MachineryPageProps> = ({ onInquiryClick }) => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const categories: Category[] = [
    {
      id: 'automated-cutting',
      title: 'Automatizētas lāzera griešanas līnijas',
      description: 'Automatizētās lāzera griešanas līnijas paredzētas augstas produktivitātes metālapstrādei, kur nepieciešama nepārtraukta materiālu padeve, precīza griešana un minimāla operatora iesaiste. Ideāli piemērotas rūpnieciskai ražošanai un lieliem apjomiem.',
      applications: [
        'Metālapstrādes rūpnīcas',
        'Tērauda konstrukciju ražošana',
        'Automatizētas ražošanas līnijas'
      ],
      benefits: [
        'Pilnībā automatizēta materiālu plūsma',
        'Augsta precizitāte',
        'Samazinātas darbaspēka izmaksas',
        'Stabils ražošanas ātrums'
      ],
      models: [
        {
          name: 'Automated Cutting Line System',
          params: ['Pilnībā automatizēta līnija', 'Industriāla veiktspēja', 'CNC vadība']
        }
      ],
      manufacturerUrl: 'https://example.com/automated-cutting',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200'
    },
    {
      id: 'laser-profile',
      title: 'Profilu un siju lāzera griešanas iekārtas',
      description: 'Profilu lāzera griešanas sistēmas paredzētas lielu metāla profilu, siju un konstrukciju precīzai apstrādei. Tās nodrošina augstu griešanas kvalitāti un efektīvu sagatavošanu metināšanai vai montāžai.',
      applications: [
        'Metāla konstrukciju ražošana',
        'Būvniecības projekti',
        'Industriālie tērauda profili'
      ],
      benefits: [
        '3D griešanas iespējas',
        'Augsta stabilitāte',
        'Precīza bevel griešana',
        'Piemērots lieliem profiliem'
      ],
      models: [
        {
          name: 'HL-1250S',
          params: ['3D profilu griešana', 'Bevel griezumi', 'Gantry konstrukcija']
        },
        {
          name: 'Intelligent 3D Laser Profile Composite Center',
          params: ['Automatizēta profilu apstrāde', 'Augsta precizitāte', 'Industriāla jauda']
        }
      ],
      manufacturerUrl: 'https://example.com/laser-profile',
      image: 'https://images.unsplash.com/photo-1565264317065-253ac0794939?auto=format&fit=crop&q=80&w=1200'
    },
    {
      id: 'heavy-duty',
      title: 'Heavy Duty cauruļu lāzera griezēji ar trim patronām',
      description: 'Šīs sērijas iekārtas paredzētas lielu diametru cauruļu un smago metāla profilu griešanai. Trīs patronu konstrukcija nodrošina stabilitāti, augstu precizitāti un efektīvu materiāla kontroli arī pie lieliem svariem.',
      applications: [
        'Smagā metālapstrāde',
        'Tērauda konstrukcijas',
        'Industriālā ražošana'
      ],
      benefits: [
        'Liels cauruļu diametrs',
        'Automātiska padeve',
        'Augsta griešanas stabilitāte',
        'Piemērots nepārtrauktai darbībai'
      ],
      models: [
        {
          name: 'FLT-12050HTS',
          params: ['Ø līdz ~500 mm', 'Automātiska ielāde', '3D griešanas galva']
        },
        {
          name: 'FLT-12036HTS',
          params: ['Heavy duty konstrukcija', 'CNC vadība', 'Augsta precizitāte']
        },
        {
          name: 'FLT-12050HT',
          params: ['Liela diametra apstrāde', 'Stabils rāmis', 'Industriāla veiktspēja']
        }
      ],
      manufacturerUrl: 'https://example.com/heavy-duty',
      image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=1200'
    }
  ];

  const toggleCategory = (id: string) => {
    setExpandedCategory(expandedCategory === id ? null : id);
  };

  return (
    <div className="bg-zinc-50 min-h-screen pt-24 pb-20">
      {/* Header Section */}
      <section className="bg-zinc-950 py-20 mb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-6">
              IEKĀRTU <span className="text-teal-custom">KATALOGS</span>
            </h1>
            <p className="text-gray-400 text-xl leading-relaxed">
              Augstākās klases industriālie risinājumi metālapstrādei. 
              Mūsu piedāvājumā ir tikai pārbaudītas un efektīvas tehnoloģijas 
              jūsu ražošanas jaudas palielināšanai.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6">
        <div className="space-y-12">
          {categories.map((cat) => (
            <div key={cat.id} className="bg-white border border-zinc-200 shadow-sm overflow-hidden group">
              <div className="flex flex-col lg:flex-row">
                {/* Image Column */}
                <div className="lg:w-1/3 relative overflow-hidden">
                  <img 
                    src={cat.image} 
                    alt={cat.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-teal-custom/10 mix-blend-multiply"></div>
                </div>

                {/* Content Column */}
                <div className="lg:w-2/3 p-8 lg:p-12">
                  <div className="flex flex-col h-full">
                    <div className="mb-8">
                      <h2 className="text-3xl font-black uppercase tracking-tight mb-4 text-zinc-900">
                        {cat.title}
                      </h2>
                      <div className="h-1 w-16 bg-teal-custom mb-6"></div>
                      <p className="text-gray-600 leading-relaxed mb-8">
                        {cat.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                        {/* Benefits */}
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-widest text-teal-custom mb-4 flex items-center">
                            <ShieldCheck className="w-4 h-4 mr-2" /> Kāpēc izvēlēties
                          </h4>
                          <ul className="space-y-3">
                            {cat.benefits.map((benefit, i) => (
                              <li key={i} className="flex items-start text-sm text-gray-700 font-medium">
                                <span className="text-teal-custom mr-2">•</span>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Applications */}
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-widest text-teal-custom mb-4 flex items-center">
                            <Factory className="w-4 h-4 mr-2" /> Kur izmanto
                          </h4>
                          <ul className="space-y-3">
                            {cat.applications.map((app, i) => (
                              <li key={i} className="flex items-start text-sm text-gray-700 font-medium">
                                <span className="text-teal-custom mr-2">•</span>
                                {app}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Expandable Models Section */}
                    <div className="mt-auto border-t border-zinc-100 pt-8">
                      <button 
                        onClick={() => toggleCategory(cat.id)}
                        className="flex items-center justify-between w-full text-left group/btn"
                      >
                        <span className="text-sm font-bold uppercase tracking-widest text-zinc-900 flex items-center">
                          <Cpu className="w-5 h-5 mr-3 text-teal-custom" />
                          Pieejamie modeļi ({cat.models.length})
                        </span>
                        {expandedCategory === cat.id ? (
                          <ChevronUp className="w-5 h-5 text-gray-400 group-hover/btn:text-teal-custom transition-colors" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400 group-hover/btn:text-teal-custom transition-colors" />
                        )}
                      </button>

                      {expandedCategory === cat.id && (
                        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2 duration-300">
                          {cat.models.map((model, i) => (
                            <div key={i} className="bg-zinc-50 p-6 border border-zinc-200">
                              <h5 className="font-black uppercase text-sm mb-4 tracking-tight text-zinc-800">{model.name}</h5>
                              <ul className="space-y-2">
                                {model.params.map((param, j) => (
                                  <li key={j} className="text-xs text-gray-500 flex items-center">
                                    <div className="w-1 h-1 bg-teal-custom rounded-full mr-2"></div>
                                    {param}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="flex flex-col sm:flex-row gap-4 mt-8">
                        <a 
                          href={cat.manufacturerUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-zinc-900 hover:bg-black text-white text-center py-4 text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center"
                        >
                          Skatīt pilnu specifikāciju
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                        <button 
                          onClick={onInquiryClick}
                          className="flex-1 border-2 border-zinc-900 hover:bg-zinc-900 hover:text-white text-zinc-900 text-center py-4 text-xs font-bold uppercase tracking-widest transition-all"
                        >
                          Pieprasīt cenu
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Section */}
      <section className="mt-24 py-20 bg-zinc-100 border-y border-zinc-200">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-black uppercase tracking-tight mb-8">KĀPĒC IEGĀDĀTIES PIE <span className="text-teal-custom">UPWORX</span>?</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Settings className="w-8 h-8" />, title: "Uzstādīšana", desc: "Pilns cikls no piegādes līdz palaišanai" },
              { icon: <Target className="w-8 h-8" />, title: "Apmācība", desc: "Jūsu personāla sagatavošana darbam" },
              { icon: <Zap className="w-8 h-8" />, title: "Serviss", desc: "Operatīvs tehniskais atbalsts 24/7" },
              { icon: <ShieldCheck className="w-8 h-8" />, title: "Garantija", desc: "Oficiāla ražotāja garantija visām iekārtām" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="text-teal-custom mb-4">{item.icon}</div>
                <h4 className="font-bold uppercase text-xs tracking-widest mb-2">{item.title}</h4>
                <p className="text-gray-500 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
