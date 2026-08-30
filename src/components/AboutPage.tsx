import React from 'react';

interface AboutPageProps {
  onContactClick: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onContactClick }) => {
  const values = [
    {
      title: "Inovācijas",
      desc: "Mēs pastāvīgi sekojam līdzi tehnoloģiju attīstībai, lai piedāvātu klientiem visefektīvākos un modernākos risinājumus."
    },
    {
      title: "Uzticamība",
      desc: "Mūsu vārds ir mūsu saistības. Mēs nodrošinām caurspīdīgu sadarbību un pildām solīto laikā."
    },
    {
      title: "Kvalitāte",
      desc: "Tikai pasaules vadošie zīmoli un rūpīgi pārbaudītas iekārtas, kas kalpo gadiem ilgi."
    },
    {
      title: "Partnerība",
      desc: "Mēs neesam tikai tirgotājs – mēs esam partneris, kas aug kopā ar jūsu biznesu."
    }
  ];

  const timeline = [
    { year: "2010", event: "Uzņēmuma dibināšana Rīgā." },
    { year: "2014", event: "Pirmā lielā CNC lāzergriešanas projekta realizācija Baltijā." },
    { year: "2018", event: "Servisa centra paplašināšana un 24/7 atbalsta ieviešana." },
    { year: "2024", event: "Līderpozīcijas stiprināšana automatizēto ražošanas līniju segmentā." }
  ];

  return (
    <div id="about-page" className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2000" 
            alt="Team Background" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <p className="text-teal-custom font-bold uppercase tracking-[0.4em] text-xs mb-6">Mūsu stāsts</p>
          <h1 className="text-5xl lg:text-8xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
            MĒS VEIDOJAM <br />
            <span className="text-teal-custom">RĪTDIENAS</span> RAŽOŠANU
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-400 text-xl leading-relaxed">
              UPWORX ir vadošais industriālo iekārtu piegādātājs Baltijas reģionā, nodrošinot augstākās klases metālapstrādes un automatizācijas risinājumus kopš 2010. gada.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 border-b border-zinc-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-black uppercase tracking-tighter mb-8">MŪSU <span className="text-teal-custom">MISIJA</span></h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Nodrošināt Latvijas un kaimiņvalstu ražotājus ar tehnoloģijām, kas ļauj tiem būt konkurētspējīgiem globālā mērogā. Mēs ticam, ka precizitāte un automatizācija ir atslēga uz ilgtspējīgu izaugsmi.
              </p>
              <div className="bg-zinc-50 p-8 border-l-4 border-teal-custom">
                <p className="text-zinc-900 font-bold italic text-xl">
                  &quot;Mūsu mērķis nav pārdot iekārtu, bet gan radīt risinājumu, kas pelna naudu mūsu klientam.&quot;
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600" className="w-full h-64 object-cover grayscale" alt="Work 1" />
                <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=600" className="w-full h-48 object-cover grayscale" alt="Work 2" />
              </div>
              <div className="space-y-4 pt-12">
                <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=600" className="w-full h-48 object-cover grayscale" alt="Work 3" />
                <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600" className="w-full h-64 object-cover grayscale" alt="Work 4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-zinc-50">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">MŪSU <span className="text-teal-custom">VĒRTĪBAS</span></h2>
          <div className="h-1 w-24 bg-teal-custom mx-auto mb-8"></div>
        </div>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-white p-10 shadow-sm border border-zinc-100 group hover:border-teal-custom transition-all">
                <h4 className="text-xl font-black uppercase mb-4 tracking-tight group-hover:text-teal-custom transition-colors">{v.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="our-team-section" className="py-24 bg-white border-b border-zinc-100">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-teal-custom font-bold uppercase tracking-[0.3em] text-xs mb-3">Speciālisti un eksperti</p>
            <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter text-zinc-900 mb-4">
              MŪSU <span className="text-teal-custom">KOMANDA</span>
            </h2>
            <div className="h-1 w-24 bg-teal-custom mx-auto mb-6"></div>
            <p className="text-gray-600 text-base leading-relaxed">
              UPWORX profesionāļu komanda ar padziļinātām inženiertehniskām zināšanām un gadiem ilgu pieredzi industriālajā metālapstrādes sektorā.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {/* Member 1 */}
            <div className="bg-zinc-50 border border-zinc-200/80 p-5 rounded-sm flex flex-col items-center text-center group hover:border-teal-custom transition-colors">
              <div className="w-full aspect-[4/5] bg-zinc-200/90 rounded-sm mb-5 flex flex-col items-center justify-center border-2 border-dashed border-zinc-300 text-zinc-400 group-hover:border-teal-custom/50 group-hover:bg-zinc-100 transition-colors relative overflow-hidden">
                <svg className="w-12 h-12 mb-2 text-zinc-400/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-[11px] font-semibold tracking-wider uppercase text-zinc-500">Ievietot foto</span>
              </div>
              <h3 className="text-lg font-black uppercase text-zinc-900 tracking-tight mb-1">Jānis Bērziņš</h3>
              <p className="text-xs text-gray-500 font-medium">Pārdošanas nodaļas vadītājs</p>
            </div>

            {/* Member 2 */}
            <div className="bg-zinc-50 border border-zinc-200/80 p-5 rounded-sm flex flex-col items-center text-center group hover:border-teal-custom transition-colors">
              <div className="w-full aspect-[4/5] bg-zinc-200/90 rounded-sm mb-5 flex flex-col items-center justify-center border-2 border-dashed border-zinc-300 text-zinc-400 group-hover:border-teal-custom/50 group-hover:bg-zinc-100 transition-colors relative overflow-hidden">
                <svg className="w-12 h-12 mb-2 text-zinc-400/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-[11px] font-semibold tracking-wider uppercase text-zinc-500">Ievietot foto</span>
              </div>
              <h3 className="text-lg font-black uppercase text-zinc-900 tracking-tight mb-1">Valdis Ozoliņš</h3>
              <p className="text-xs text-gray-500 font-medium">Mārketinga nodaļas vadītājs</p>
            </div>

            {/* Member 3 */}
            <div className="bg-zinc-50 border border-zinc-200/80 p-5 rounded-sm flex flex-col items-center text-center group hover:border-teal-custom transition-colors">
              <div className="w-full aspect-[4/5] bg-zinc-200/90 rounded-sm mb-5 flex flex-col items-center justify-center border-2 border-dashed border-zinc-300 text-zinc-400 group-hover:border-teal-custom/50 group-hover:bg-zinc-100 transition-colors relative overflow-hidden">
                <svg className="w-12 h-12 mb-2 text-zinc-400/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-[11px] font-semibold tracking-wider uppercase text-zinc-500">Ievietot foto</span>
              </div>
              <h3 className="text-lg font-black uppercase text-zinc-900 tracking-tight mb-1">Artūrs Kalniņš</h3>
              <p className="text-xs text-gray-500 font-medium">Tehniskais direktors</p>
            </div>

            {/* Member 4 */}
            <div className="bg-zinc-50 border border-zinc-200/80 p-5 rounded-sm flex flex-col items-center text-center group hover:border-teal-custom transition-colors">
              <div className="w-full aspect-[4/5] bg-zinc-200/90 rounded-sm mb-5 flex flex-col items-center justify-center border-2 border-dashed border-zinc-300 text-zinc-400 group-hover:border-teal-custom/50 group-hover:bg-zinc-100 transition-colors relative overflow-hidden">
                <svg className="w-12 h-12 mb-2 text-zinc-400/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-[11px] font-semibold tracking-wider uppercase text-zinc-500">Ievietot foto</span>
              </div>
              <h3 className="text-lg font-black uppercase text-zinc-900 tracking-tight mb-1">Kristaps Liepiņš</h3>
              <p className="text-xs text-gray-500 font-medium">Servisa un CNC inženierijas vadītājs</p>
            </div>

            {/* Member 5 */}
            <div className="bg-zinc-50 border border-zinc-200/80 p-5 rounded-sm flex flex-col items-center text-center group hover:border-teal-custom transition-colors">
              <div className="w-full aspect-[4/5] bg-zinc-200/90 rounded-sm mb-5 flex flex-col items-center justify-center border-2 border-dashed border-zinc-300 text-zinc-400 group-hover:border-teal-custom/50 group-hover:bg-zinc-100 transition-colors relative overflow-hidden">
                <svg className="w-12 h-12 mb-2 text-zinc-400/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-[11px] font-semibold tracking-wider uppercase text-zinc-500">Ievietot foto</span>
              </div>
              <h3 className="text-lg font-black uppercase text-zinc-900 tracking-tight mb-1">Elīna Zariņa</h3>
              <p className="text-xs text-gray-500 font-medium">Klientu atbalsta vadītāja</p>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/3">
              <h2 className="text-4xl font-black uppercase tracking-tighter mb-8 leading-tight">IZAUGSMES <br /><span className="text-teal-custom">HRONOLOĢIJA</span></h2>
              <p className="text-gray-600">
                Gadu gaitā esam no neliela entuziastu biroja izauguši par nozares autoritāti, kuras viedoklī ieklausās lielākie reģiona ražotāji.
              </p>
            </div>
            <div className="lg:w-2/3">
              <div className="space-y-12">
                {timeline.map((item, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="text-4xl font-black text-teal-custom/20 group-hover:text-teal-custom transition-colors w-24 shrink-0">
                      {item.year}
                    </div>
                    <div className="pt-2 flex-grow">
                      <p className="text-xl font-bold uppercase tracking-tight text-zinc-900 mb-2">{item.event}</p>
                      <div className="h-px w-full bg-zinc-100 group-last:hidden"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-24 bg-zinc-950 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-teal-custom/5 skew-y-6 transform translate-y-1/2"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-8 leading-tight">VĒLATIES PIEVIENOTIES <br />MŪSU <span className="text-teal-custom">EKSPERTU</span> KOMANDAI?</h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Mēs pastāvīgi meklējam talantīgus inženierus, servisa tehniķus un tirdzniecības speciālistus. Ja esi gatavs izaicinājumiem, sazinies ar mums.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button 
              id="view-vacancies-btn"
              onClick={onContactClick}
              className="bg-teal-custom hover:bg-teal-600 px-12 py-5 text-sm font-bold uppercase tracking-widest transition-all rounded-sm"
            >
              Apskatīt Vakances
            </button>
            <button 
              id="send-cv-btn"
              onClick={onContactClick}
              className="border border-white/20 hover:border-white px-12 py-5 text-sm font-bold uppercase tracking-widest transition-all rounded-sm"
            >
              Sūtīt CV
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
