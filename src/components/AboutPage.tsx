import React from 'react';
import { OurValues } from './OurValues';

interface AboutPageProps {
  onContactClick: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onContactClick }) => {
  const teamMembers = [
    {
      name: "Jānis Bērziņš",
      role: "Uzņēmuma vadītājs / Valdes priekšsēdētājs",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600",
    },
    {
      name: "Māris Ozoliņš",
      role: "Pārdošanas nodaļas vadītājs",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600",
    },
    {
      name: "Andris Kalniņš",
      role: "Tehniskā servisa nodaļas vadītājs",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
    },
    {
      name: "Kaspars Liepiņš",
      role: "Automatizācijas risinājumu nodaļas vadītājs",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600",
    }
  ];

  const timeline = [
    { year: "2010", event: "Uzņēmuma dibināšana Rīgā." },
    { year: "2014", event: "Pirmā lielā CNC lāzergriešanas projekta realizācija Baltijā." },
    { year: "2018", event: "Servisa centra paplašināšana un 24/7 atbalsta ieviešana." },
    { year: "2024", event: "Līderpozīcijas stiprināšana automatizēto ražošanas līniju segmentā." },
    { year: "2026", event: "Jaunākās paaudzes viedās ražošanas līniju un robotizētās automatizācijas risinājumu ieviešana Baltijā." }
  ];

  return (
    <div id="about-page" className="bg-white">
      {/* Hero Section - Vertically half height of Home hero, matching heading size, distinct industrial image without portraits */}
      <section className="relative h-[50vh] min-h-[360px] max-h-[480px] w-full bg-zinc-950 overflow-hidden flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="/hero_par_mums.jpg" 
            alt="UPWORX Industriālā Ražotne" 
            className="w-full h-full object-cover select-none"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/25"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30"></div>
        </div>
        <div className="container mx-auto px-6 sm:px-8 lg:px-16 xl:px-20 relative z-10 text-white flex items-center justify-start">
          <div className="max-w-3xl text-left">
            <h1 className="text-3xl sm:text-4xl md:text-[42px] lg:text-[48px] font-black mb-5 leading-[1.15] tracking-tight uppercase">
              <span className="md:block">PIEREDZE UN TEHNOLOĢIJAS </span>
              <span className="md:block">
                <span className="text-teal-custom">MŪSDIENĪGAI</span> RAŽOŠANAI
              </span>
            </h1>
            <p className="text-sm sm:text-[15px] md:text-base lg:text-[17px] text-gray-200 max-w-2xl leading-relaxed font-normal">
              <span className="md:block">UPWORX ir vadošais industriālo metālapstrādes iekārtu piegādātājs Baltijas reģionā, </span>
              <span className="md:block">nodrošinot augstākās klases metālapstrādes un automatizācijas risinājumus.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Par Upworx */}
      <section id="par-upworx-section" className="py-24 border-b border-zinc-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div>
              <p className="text-teal-custom font-bold uppercase tracking-[0.25em] text-xs mb-3">Industriālie risinājumi</p>
              <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-6 text-zinc-900">
                PAR <span className="text-teal-custom">UPWORX</span>
              </h2>
              <div className="h-1 w-20 bg-teal-custom mb-8"></div>
              <p className="text-zinc-800 text-lg lg:text-xl leading-relaxed font-medium mb-6">
                UPWORX specializējas profesionālu metālapstrādes iekārtu un automatizācijas risinājumu piegādē Baltijas uzņēmumiem. Vairāk nekā 15 gadu pieredze nozarē ļauj nodrošināt klientiem tehnisko konsultāciju, iekārtu piegādi, uzstādīšanu un servisu.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Mūsu mērķis ir būt uzticamam partnerim ražošanas modernizācijā un attīstībā, piedāvājot pārbaudītas tehnoloģijas no vadošajiem pasaules ražotājiem un garantējot augstas klases tehnisko atbalstu katrā projekta posmā.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/224924/pexels-photo-224924.jpeg?auto=compress&cs=tinysrgb&w=800" 
                className="w-full h-52 sm:h-60 object-cover rounded-sm shadow-sm" 
                alt="Metālapstrādes lāzera griešanas tehnoloģijas" 
              />
              <img 
                src="https://images.pexels.com/photos/3846554/pexels-photo-3846554.jpeg?auto=compress&cs=tinysrgb&w=800" 
                className="w-full h-52 sm:h-60 object-cover rounded-sm shadow-sm" 
                alt="Precīza CNC apstrāde un frēzēšana" 
              />
              <img 
                src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800" 
                className="w-full h-52 sm:h-60 object-cover rounded-sm shadow-sm" 
                alt="Industriālās ražošanas tehnoloģiskās iekārtas" 
              />
              <img 
                src="https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=800" 
                className="w-full h-52 sm:h-60 object-cover rounded-sm shadow-sm" 
                alt="Ražošanas automatizācija un roboti" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mūsu misija un vērtības */}
      <OurValues />

      {/* Team Section */}
      <section id="our-team-section" className="py-24 bg-white border-b border-zinc-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-teal-custom font-bold uppercase tracking-[0.3em] text-xs mb-3">Speciālisti un tehniskā kompetence</p>
            <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter text-zinc-900 mb-4">
              MŪSU <span className="text-teal-custom">KOMANDA</span>
            </h2>
            <div className="h-1 w-24 bg-teal-custom mx-auto mb-8"></div>
            <p className="text-zinc-800 text-lg lg:text-xl leading-relaxed font-medium">
              UPWORX komandā strādā speciālisti ar pieredzi metālapstrādes iekārtu, ražošanas tehnoloģiju un tehniskā servisa jomā. Mūsu kompetence aptver visu iekārtas ieviešanas procesu – no piemērotākā risinājuma izvēles līdz uzstādīšanai, operatoru apmācībai un turpmākajam servisam.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <div 
                key={i} 
                className="bg-zinc-50 border border-zinc-200/90 rounded-sm overflow-hidden hover:border-teal-custom transition-all duration-300 group flex flex-col"
              >
                <div className="h-72 w-full overflow-hidden bg-zinc-200 relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-lg font-black uppercase tracking-tight text-zinc-900 group-hover:text-teal-custom transition-colors mb-1.5">
                      {member.name}
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-wider text-teal-custom">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
            <div className="lg:w-1/3">
              <h2 className="text-4xl font-black uppercase tracking-tighter mb-6 leading-tight text-zinc-900">
                IZAUGSMES <br /><span className="text-teal-custom">HRONOLOĢIJA</span>
              </h2>
              <div className="h-1 w-20 bg-teal-custom mb-6"></div>
              <p className="text-gray-600 leading-relaxed text-base">
                Kopš uzņēmuma dibināšanas esam pakāpeniski paplašinājuši piedāvāto iekārtu klāstu, tehniskā servisa iespējas un realizēto projektu apjomu Baltijā.
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
