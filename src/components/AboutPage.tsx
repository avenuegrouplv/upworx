import React from 'react';
import { User } from 'lucide-react';
import { OurValues } from './OurValues';
import { useLanguage } from '../context/LanguageContext';

interface AboutPageProps {
  onContactClick: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = () => {
  const { t } = useLanguage();
  const ap = t.aboutPage;

  const teamMembers = ap.teamMembers;
  const timeline = ap.timeline;

  return (
    <div id="about-page" className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[360px] max-h-[480px] w-full bg-zinc-950 overflow-hidden flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="/hero_par_mums.jpg" 
            alt="UPWORX Industrial Technologies" 
            className="w-full h-full object-cover select-none"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/25"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30"></div>
        </div>
        <div className="container mx-auto px-6 sm:px-8 lg:px-16 xl:px-20 relative z-10 text-white flex items-center justify-start">
          <div className="max-w-3xl text-left">
            <h1 className="text-3xl sm:text-4xl md:text-[42px] lg:text-[48px] font-black mb-5 leading-[1.15] tracking-tight uppercase">
              <span className="md:block">{ap.heroTitle1} </span>
              <span className="md:block">
                <span className="text-teal-custom">{ap.heroTitleHighlight}</span> {ap.heroTitle2}
              </span>
            </h1>
            <p className="text-sm sm:text-[15px] md:text-base lg:text-[17px] text-gray-200 max-w-2xl leading-relaxed font-normal">
              <span className="md:block">{ap.heroSubtitle1} </span>
              <span className="md:block">{ap.heroSubtitle2}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Par Upworx */}
      <section id="par-upworx-section" className="pt-20 sm:pt-24 pb-20 sm:pb-24 border-b border-zinc-100 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-6 text-zinc-900 leading-tight">
                {ap.aboutTitle} <span className="text-teal-custom">{ap.aboutTitleHighlight}</span>
              </h2>
              <div className="h-1 w-20 bg-teal-custom mb-8"></div>
              <p className="text-zinc-800 text-lg lg:text-xl leading-relaxed font-medium mb-6">
                {ap.aboutP1}
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                {ap.aboutP2}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/224924/pexels-photo-224924.jpeg?auto=compress&cs=tinysrgb&w=800" 
                className="w-full h-52 sm:h-60 object-cover rounded-sm shadow-sm" 
                alt="Industrial laser technology" 
              />
              <img 
                src="https://images.pexels.com/photos/3846554/pexels-photo-3846554.jpeg?auto=compress&cs=tinysrgb&w=800" 
                className="w-full h-52 sm:h-60 object-cover rounded-sm shadow-sm" 
                alt="CNC processing precision" 
              />
              <img 
                src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800" 
                className="w-full h-52 sm:h-60 object-cover rounded-sm shadow-sm" 
                alt="Industrial manufacturing machinery" 
              />
              <img 
                src="https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=800" 
                className="w-full h-52 sm:h-60 object-cover rounded-sm shadow-sm" 
                alt="Industrial automation and robots" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="our-team-section" className="py-16 sm:py-20 bg-zinc-50 border-b border-zinc-200/80">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-12">
            <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter text-zinc-900 mb-4">
              {ap.teamTitle} <span className="text-teal-custom">{ap.teamTitleHighlight}</span>
            </h2>
            <div className="h-1 w-24 bg-teal-custom mx-auto mb-8"></div>
            <p className="text-zinc-800 text-lg lg:text-xl leading-relaxed font-medium">
              {ap.teamDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <div 
                key={i} 
                className="bg-white border border-zinc-200 rounded-sm overflow-hidden flex flex-col justify-between shadow-xs select-none"
              >
                <div className="relative w-full aspect-square bg-zinc-100 border-b border-zinc-200 flex flex-col items-center justify-center overflow-hidden">
                  <div className="flex flex-col items-center justify-center text-zinc-400 p-4 text-center">
                    <div className="w-14 h-14 rounded-full bg-zinc-200/80 border border-zinc-300 flex items-center justify-center text-zinc-400 mb-2 shadow-inner">
                      <User className="w-7 h-7 stroke-[1.5]" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                      {ap.imagePlaceholder}
                    </span>
                  </div>
                </div>

                <div className="p-5 bg-white flex flex-col justify-end flex-grow">
                  <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-zinc-900 mb-1.5 leading-snug">
                    {member.name}
                  </h3>
                  <div className="h-0.5 w-8 bg-teal-custom/60 mb-2.5"></div>
                  <p className="text-xs font-bold uppercase tracking-wider text-teal-custom leading-relaxed">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mūsu misija un vērtības */}
      <OurValues />

      {/* History Timeline */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
            <div className="lg:w-1/3">
              <h2 className="text-4xl font-black uppercase tracking-tighter mb-6 leading-tight text-zinc-900">
                {ap.timelineTitle} <br /><span className="text-teal-custom">{ap.timelineBadge}</span>
              </h2>
              <div className="h-1 w-20 bg-teal-custom mb-6"></div>
              <p className="text-gray-600 leading-relaxed text-base">
                {ap.timelineDesc}
              </p>
            </div>
            <div className="lg:w-2/3">
              <div className="space-y-10">
                {timeline.map((item, i) => (
                  <div key={i} className="flex gap-6 sm:gap-8 group">
                    <div className="text-3xl sm:text-4xl font-black text-teal-custom/30 group-hover:text-teal-custom transition-colors w-24 shrink-0">
                      {item.year}
                    </div>
                    <div className="pt-1.5 flex-grow">
                      <p className="text-lg sm:text-xl font-bold uppercase tracking-tight text-zinc-900 mb-2">{item.event}</p>
                      <div className="h-px w-full bg-zinc-100 group-last:hidden"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

