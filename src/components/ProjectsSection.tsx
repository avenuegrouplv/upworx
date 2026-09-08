import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2, Building2, Target, Cpu } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

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
  const { t } = useLanguage();
  const ps = t.projects;
  const [startIndex, setStartIndex] = useState(0);

  const imagesMap: Record<string, string> = {
    'proj-1': 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800',
    'proj-2': 'https://images.pexels.com/photos/224924/pexels-photo-224924.jpeg?auto=compress&cs=tinysrgb&w=800',
    'proj-3': 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800',
    'proj-4': 'https://images.pexels.com/photos/3846554/pexels-photo-3846554.jpeg?auto=compress&cs=tinysrgb&w=800',
    'proj-5': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    'proj-6': 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    'proj-7': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    'proj-8': 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
  };

  const projects: ProjectCard[] = ps.items.map(p => ({
    ...p,
    image: imagesMap[p.id] || imagesMap['proj-1']
  }));

  // Maximum start index allowing 4 items in view
  const maxIndex = Math.max(0, projects.length - 4);

  const handlePrev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  return (
    <section id="completed-projects-section" className="py-16 sm:py-20 bg-white border-b border-zinc-200/80 overflow-hidden">
      <div className="container mx-auto px-6 mb-10 sm:mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-zinc-900">
              {ps.title} <span className="text-teal-custom">{ps.titleHighlight}</span>
            </h2>
            <div className="h-1 w-20 bg-teal-custom mt-4"></div>
          </div>

          {/* Navigation arrow buttons */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              onClick={handlePrev}
              aria-label="Previous projects"
              className="w-12 h-12 rounded-sm bg-zinc-900 hover:bg-teal-custom text-white hover:text-zinc-950 flex items-center justify-center transition-colors cursor-pointer shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next projects"
              className="w-12 h-12 rounded-sm bg-zinc-900 hover:bg-teal-custom text-white hover:text-zinc-950 flex items-center justify-center transition-colors cursor-pointer shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Exactly 4 full cards in view container */}
      <div className="container mx-auto px-6">
        <div className="overflow-hidden py-2 -my-2">
          <div
            className="flex transition-transform duration-500 ease-out -mx-2.5"
            style={{
              transform: `translateX(-${startIndex * 25}%)`
            }}
          >
            {projects.map((item) => (
              <div
                key={item.id}
                className="w-full sm:w-1/2 lg:w-1/4 shrink-0 px-2.5 flex"
              >
                <div className="w-full bg-zinc-50 border border-zinc-300 rounded-sm overflow-hidden flex flex-col justify-between hover:border-teal-custom hover:shadow-lg transition-all duration-300 group">
                  <div>
                    {/* Project Image - Compact */}
                    <div className="relative h-40 sm:h-44 w-full overflow-hidden bg-zinc-950">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/20 to-transparent"></div>
                    </div>

                    {/* Project Content - Compact */}
                    <div className="p-4 sm:p-5 space-y-2.5">
                      <h3 className="text-sm sm:text-base font-black uppercase tracking-tight text-zinc-900 leading-snug group-hover:text-teal-custom transition-colors line-clamp-2">
                        {item.title}
                      </h3>

                      <div className="space-y-2 pt-1 text-xs">
                        {/* Klients */}
                        <div className="flex items-start gap-2">
                          <Building2 className="w-3.5 h-3.5 text-teal-custom shrink-0 mt-0.5" />
                          <div>
                            <span className="font-extrabold text-zinc-900 uppercase text-[10px] block">
                              {ps.clientLabel}:
                            </span>
                            <span className="text-zinc-600 font-medium text-xs">
                              {item.client}
                            </span>
                          </div>
                        </div>

                        {/* Uzdevums */}
                        <div className="flex items-start gap-2">
                          <Target className="w-3.5 h-3.5 text-teal-custom shrink-0 mt-0.5" />
                          <div>
                            <span className="font-extrabold text-zinc-900 uppercase text-[10px] block">
                              {ps.taskLabel}:
                            </span>
                            <span className="text-zinc-600 text-xs line-clamp-2 leading-relaxed">
                              {item.task}
                            </span>
                          </div>
                        </div>

                        {/* Risinājums */}
                        <div className="flex items-start gap-2">
                          <Cpu className="w-3.5 h-3.5 text-teal-custom shrink-0 mt-0.5" />
                          <div>
                            <span className="font-extrabold text-zinc-900 uppercase text-[10px] block">
                              {ps.solutionLabel}:
                            </span>
                            <span className="text-teal-700 font-bold text-xs line-clamp-2 leading-relaxed">
                              {item.solution}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* UPWORX Scope Footer */}
                  <div className="p-4 sm:p-5 pt-3">
                    <div className="bg-white border border-teal-custom/30 p-2.5 rounded-sm flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-custom shrink-0" />
                      <div className="text-[11px] leading-snug">
                        <span className="font-black text-zinc-900 uppercase tracking-wide">UPWORX: </span>
                        <span className="text-zinc-600 font-medium">{item.upworxScope}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

