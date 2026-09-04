import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2, Building2, Target, Cpu } from 'lucide-react';

interface ProjectCard {
  id: string;
  title: string;
  client: string;
  task: string;
  solution: string;
  upworxScope: string;
  image: string;
}

export const ProjectsSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const projects: ProjectCard[] = [
    {
      id: 'proj-1',
      title: 'CNC apstrādes centra izveide',
      client: 'Metālapstrādes uzņēmums Latvijā',
      task: 'Palielināt detaļu apstrādes jaudu un virpošanas precizitāti lielgabarīta detaļām',
      solution: 'MAZAK Slant Turn 550 horizontālā CNC virpa',
      upworxScope: 'Konsultācija, piegāde, uzstādīšana, apmācība',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'proj-2',
      title: 'Lielformāta lāzergriešanas līnijas palaišana',
      client: 'Lauksaimniecības tehnikas ražotājs Igaunijā',
      task: 'Automatizēt biezu tērauda lokšņu sērijveida griešanu un samazināt gāzes patēriņu',
      solution: 'TRUMPF TruLaser 3030 fiber (10 kW šķiedru lāzers)',
      upworxScope: 'Konsultācija, piegāde, uzstādīšana, apmācība',
      image: 'https://images.pexels.com/photos/224924/pexels-photo-224924.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 'proj-3',
      title: 'Augstas precizitātes locīšanas stacijas integrācija',
      client: 'Būvkonstrukciju un fasāžu ražotne Lietuvā',
      task: 'Panākt 100% leņķa precizitāti jau no pirmās detaļas bez pielāgošanas brāķa',
      solution: 'TRUMPF TruBend 5170 ar bezvadu leņķa kontroli ACB Wireless',
      upworxScope: 'Konsultācija, piegāde, uzstādīšana, apmācība',
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'proj-4',
      title: '5-asu sarežģītu detaļu frēzēšanas šūna',
      client: 'Aviācijas un mašīnbūves komponentu ražotājs Latvijā',
      task: 'Sarežģītu lējumu un turbīnu detaļu apstrāde vienā iespīlējumā zem 5 mikronu pielaides',
      solution: 'DMG MORI DMU 75 monoBLOCK 5-asu apstrādes centrs',
      upworxScope: 'Konsultācija, piegāde, uzstādīšana, apmācība',
      image: 'https://images.pexels.com/photos/3846554/pexels-photo-3846554.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 'proj-5',
      title: 'Automatizētas robotizētas šūnas ieviešana',
      client: 'Industriālo iekārtu un rāmju ražošanas uzņēmums Latvijā',
      task: 'Aizstāt roku darbu un nodrošināt stabilu metināšanas šuves kvalitāti 24/7 ciklā',
      solution: 'FANUC Robotiskā automatizētā ražošanas šūna',
      upworxScope: 'Konsultācija, piegāde, uzstādīšana, apmācība',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'proj-6',
      title: 'Energoefektīva elektrohidrauliskā locīšanas prese',
      client: 'Elektrosadales skapju un korpusu ražotājs Igaunijā',
      task: 'Samazināt elektroenerģijas patēriņu un nodrošināt ātru instrumentu pārkārtošanu',
      solution: 'AMADA HFE3i 1003 CNC locīšanas iekārta',
      upworxScope: 'Konsultācija, piegāde, uzstādīšana, apmācība',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    },
  ];

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -380, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 380, behavior: 'smooth' });
    }
  };

  return (
    <section id="completed-projects-section" className="py-24 bg-white border-b border-zinc-200/80">
      <div className="container mx-auto px-6 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-teal-custom font-bold uppercase tracking-[0.25em] text-xs mb-3">
              MŪSU PIEREDZE UN REZULTĀTI
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-zinc-900">
              REALIZĒTIE <span className="text-teal-custom">PROJEKTI</span>
            </h2>
            <div className="h-1 w-20 bg-teal-custom mt-4"></div>
          </div>

          {/* Navigation arrow buttons */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              onClick={scrollLeft}
              aria-label="Ritināt pa kreisi"
              className="w-12 h-12 rounded-sm bg-zinc-900 hover:bg-teal-custom text-white hover:text-zinc-950 flex items-center justify-center transition-colors cursor-pointer shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              aria-label="Ritināt pa labi"
              className="w-12 h-12 rounded-sm bg-zinc-900 hover:bg-teal-custom text-white hover:text-zinc-950 flex items-center justify-center transition-colors cursor-pointer shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scrolling Card Track */}
      <div className="w-full overflow-hidden relative">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 px-6 lg:px-12 scroll-smooth no-scrollbar pb-6"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {projects.map((item) => (
            <div
              key={item.id}
              style={{ scrollSnapAlign: 'start' }}
              className="w-[320px] sm:w-[380px] md:w-[420px] shrink-0 bg-zinc-50 border border-zinc-200/90 rounded-sm overflow-hidden flex flex-col justify-between hover:border-teal-custom hover:shadow-lg transition-all group"
            >
              <div>
                {/* Project Image */}
                <div className="relative h-56 w-full overflow-hidden bg-zinc-950">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/20 to-transparent"></div>
                  
                  <div className="absolute top-3 left-3 bg-zinc-950/90 border border-teal-custom/40 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-teal-custom">
                    Realizēts projekts
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 sm:p-7 space-y-4">
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-zinc-900 leading-snug group-hover:text-teal-custom transition-colors">
                    {item.title}
                  </h3>

                  <div className="space-y-3 pt-2 text-xs sm:text-sm">
                    {/* Klients */}
                    <div className="flex items-start gap-2.5">
                      <Building2 className="w-4 h-4 text-teal-custom shrink-0 mt-0.5" />
                      <div>
                        <span className="font-extrabold text-zinc-900 uppercase text-[11px] block">
                          Klients:
                        </span>
                        <span className="text-zinc-600 font-medium">
                          {item.client}
                        </span>
                      </div>
                    </div>

                    {/* Uzdevums */}
                    <div className="flex items-start gap-2.5">
                      <Target className="w-4 h-4 text-teal-custom shrink-0 mt-0.5" />
                      <div>
                        <span className="font-extrabold text-zinc-900 uppercase text-[11px] block">
                          Uzdevums:
                        </span>
                        <span className="text-zinc-600">
                          {item.task}
                        </span>
                      </div>
                    </div>

                    {/* Risinājums */}
                    <div className="flex items-start gap-2.5">
                      <Cpu className="w-4 h-4 text-teal-custom shrink-0 mt-0.5" />
                      <div>
                        <span className="font-extrabold text-zinc-900 uppercase text-[11px] block">
                          Risinājums:
                        </span>
                        <span className="text-teal-700 font-bold">
                          {item.solution}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* UPWORX Scope Footer */}
              <div className="p-6 sm:p-7 pt-0 border-t border-zinc-200/60 mt-4">
                <div className="bg-white border border-teal-custom/30 p-3.5 rounded-sm flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-custom shrink-0" />
                  <div className="text-xs">
                    <span className="font-black text-zinc-900 uppercase tracking-wide">UPWORX: </span>
                    <span className="text-zinc-600 font-medium">{item.upworxScope}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
