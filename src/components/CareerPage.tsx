import React, { useState } from 'react';
import { Briefcase, CheckCircle2, ChevronRight, Mail, Phone, Upload, Award, Wrench, TrendingUp, ShieldCheck, MapPin } from 'lucide-react';

interface CareerPageProps {
  onContactClick: () => void;
}

export const CareerPage: React.FC<CareerPageProps> = ({ onContactClick }) => {
  const [selectedVacancy, setSelectedVacancy] = useState<string>('CNC un lāzergriešanas iekārtu servisa inženieris');
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantMessage, setApplicantMessage] = useState('');
  const [fileName, setFileName] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const vacancies = [
    {
      id: 'servisa-inzenieris',
      title: 'CNC un lāzergriešanas iekārtu servisa inženieris',
      type: 'Pilna slodze',
      location: 'Rīga, Jelgava / Baltijas reģions',
      salary: '2 200 – 3 200 EUR (bruto) + prēmiju sistēma',
      responsibilities: [
        'Metālapstrādes un lāzergriešanas iekārtu uzstādīšana un nodošana ekspluatācijā',
        'Regulāro tehnisko apkopju veikšana un iekārtu diagnostika',
        'Bojājumu novēršana un operatīvs remonts pie klientiem ražotnēs',
        'Klientu personāla apmācība darbam ar iekārtu un tās pareizu uzturēšanu'
      ],
      requirements: [
        'Tehniskā izglītība mehatronikā, mehānikā vai elektrotehnikā',
        'Izpratne par pneimatiku, hidrauliku un elektriskajām shēmām',
        'Augsta atbildības sajūta, precizitāte un patstāvība lēmumu pieņemšanā',
        'B kategorijas autovadītāja apliecība'
      ]
    },
    {
      id: 'tirdzniecibas-vaditajs',
      title: 'Metālapstrādes iekārtu tirdzniecības inženieris',
      type: 'Pilna slodze',
      location: 'Rīga, Jelgava / Latvija',
      salary: '2 000 – 3 500 EUR (bruto) + komisijas procents',
      responsibilities: [
        'Jaunu klientu un ražošanas uzņēmumu piesaiste Baltijā',
        'Tehnisko konsultāciju sniegšana un optimālo iekārtu piemeklēšana',
        'Komerciālo piedāvājumu sagatavošana un pārrunu vadīšana',
        'Dalība nozares izstādēs un iekārtu demonstrācijās'
      ],
      requirements: [
        'Izpratne par metālapstrādes tehnoloģiskajiem procesiem un iekārtām',
        'Veiksmīga pieredze B2B tehniskajā pārdošanā',
        'Teicamas komunikācijas, prezentācijas un argumentācijas prasmes',
        'Latviešu un angļu valodas zināšanas (tehniskā līmenī)'
      ]
    },
    {
      id: 'automatizacijas-inzenieris',
      title: 'Ražošanas automatizācijas un robotikas speciālists',
      type: 'Pilna slodze',
      location: 'Jelgava / Baltija',
      salary: '2 500 – 3 800 EUR (bruto)',
      responsibilities: [
        'Automatizēto ražošanas šūnu un industriālo robotu integrācija',
        'PLC kontrolleru programmēšana un sistēmu pieslēgšana',
        'Ražošanas līniju testēšana un efektivitātes optimizēšana',
        'Tehniskās dokumentācijas un lietotāju instrukciju izstrāde'
      ],
      requirements: [
        'Augstākā tehniskā izglītība automātikā, robotikā vai datorvadībā',
        'Praktiska pieredze darbā ar industriālajiem robotiem un PLC',
        'Inovāciju orientēta domāšana un vēlme apgūt jaunākās tehnoloģijas'
      ]
    }
  ];

  const benefits = [
    {
      icon: <Award className="w-8 h-8 text-teal-custom" />,
      title: 'Apmācības pie ražotājiem',
      desc: 'Regulāras praktiskās mācības un sertifikācijas Eiropas un pasaules vadošajās rūpnīcās.'
    },
    {
      icon: <Wrench className="w-8 h-8 text-teal-custom" />,
      title: 'Premium darba aprīkojums',
      desc: 'Jaunākās paaudzes diagnostikas aparatūra, sertificēti instrumenti un mūsdienīgs servisa auto.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-teal-custom" />,
      title: 'Motivējošs atalgojums',
      desc: 'Caurspīdīga atalgojuma un bonusu sistēma, kas novērtē iniciatīvu un profesionālos sasniegumus.'
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-teal-custom" />,
      title: 'Stabilitāte un atbalsts',
      desc: 'Spēcīga, draudzīga un profesionāla inženieru komanda ar vairāk nekā 15 gadu pieredzi nozarē.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleApplyClick = (vacancyTitle: string) => {
    setSelectedVacancy(vacancyTitle);
    const element = document.getElementById('pieteikties');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="career-page" className="bg-white">
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[360px] max-h-[480px] w-full bg-zinc-950 overflow-hidden flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="/hero_par_mums.jpg" 
            alt="UPWORX Karjera" 
            className="w-full h-full object-cover select-none"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/35"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
        </div>
        <div className="container mx-auto px-6 sm:px-8 lg:px-16 xl:px-20 relative z-10 text-white flex items-center justify-start">
          <div className="max-w-3xl text-left">
            <h1 className="text-3xl sm:text-4xl md:text-[42px] lg:text-[48px] font-black mb-5 leading-[1.15] tracking-tight uppercase">
              <span className="md:block">KARJERA </span>
              <span className="md:block">
                <span className="text-teal-custom">UPWORX</span> KOMANDĀ
              </span>
            </h1>
            <p className="text-sm sm:text-[15px] md:text-base lg:text-[17px] text-gray-200 max-w-2xl leading-relaxed font-normal">
              Kļūsti par daļu no profesionāļu komandas, kas ievieš jaunākās paaudzes metālapstrādes tehnoloģijas un automatizāciju Baltijas vadošajās ražotnēs.
            </p>
          </div>
        </div>
      </section>

      {/* Moved CTA Section from Par mums */}
      <section id="career-cta" className="py-24 bg-zinc-950 text-white overflow-hidden relative border-b border-zinc-800">
        <div className="absolute top-0 left-0 w-full h-full bg-teal-custom/5 skew-y-6 transform translate-y-1/2 pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[48px] font-black uppercase tracking-tighter mb-6 leading-tight">
            VĒLATIES PIEVIENOTIES <br />MŪSU <span className="text-teal-custom">EKSPERTU</span> KOMANDAI?
          </h2>
          <div className="h-1 w-20 bg-teal-custom mx-auto mb-6"></div>
          <p className="text-gray-300 text-base sm:text-lg lg:text-xl mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
            Mēs pastāvīgi meklējam talantīgus inženierus, servisa tehniķus un tirdzniecības speciālistus. Ja esi gatavs izaicinājumiem, sazinies ar mums.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <a 
              href="#vakances"
              className="bg-teal-custom hover:bg-teal-600 px-10 py-4 text-xs font-bold uppercase tracking-widest transition-all rounded-sm shadow-lg shadow-teal-900/30 text-white inline-flex items-center justify-center cursor-pointer"
            >
              Apskatīt Vakances
            </a>
            <a 
              href="#pieteikties"
              className="border border-white/25 hover:border-white hover:bg-white/10 px-10 py-4 text-xs font-bold uppercase tracking-widest transition-all rounded-sm text-white inline-flex items-center justify-center cursor-pointer"
            >
              Sūtīt CV
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-200/80">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-teal-custom font-bold uppercase tracking-[0.25em] text-xs mb-3">Ieguvumi un vide</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-zinc-900 mb-4">
              KĀPĒC STRĀDĀT <span className="text-teal-custom">UPWORX?</span>
            </h2>
            <div className="h-1 w-20 bg-teal-custom mx-auto mb-6"></div>
            <p className="text-gray-600 text-base sm:text-lg">
              Mēs radām vidi, kurā ikviens tehniskais speciālists var nepārtraukti attīstīties un strādāt ar nozares augstākā līmeņa iekārtām.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, idx) => (
              <div key={idx} className="bg-white p-8 border border-zinc-200 rounded-sm hover:border-teal-custom transition-all shadow-sm flex flex-col justify-between">
                <div>
                  <div className="mb-6 p-3 bg-zinc-50 inline-block rounded-sm border border-zinc-100">
                    {b.icon}
                  </div>
                  <h3 className="text-lg font-black uppercase tracking-tight text-zinc-900 mb-3">{b.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vacancies Section */}
      <section id="vakances" className="py-24 bg-white border-b border-zinc-100 scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-teal-custom font-bold uppercase tracking-[0.25em] text-xs mb-3">Atvērtās pozīcijas</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-zinc-900 mb-4">
              AKTUĀLĀS <span className="text-teal-custom">VAKANCES</span>
            </h2>
            <div className="h-1 w-20 bg-teal-custom mb-6"></div>
            <p className="text-gray-600 text-base sm:text-lg">
              Izvēlies savām prasmēm atbilstošāko amatu un pievienojies mūsu augošajai tehnoloģiju komandai.
            </p>
          </div>

          <div className="space-y-8">
            {vacancies.map((vacancy) => (
              <div 
                key={vacancy.id} 
                className="bg-zinc-50 border border-zinc-200 p-8 sm:p-10 rounded-sm hover:border-teal-custom transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-zinc-200">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="bg-teal-custom/10 text-teal-custom text-xs font-bold uppercase px-3 py-1 rounded-sm">
                        {vacancy.type}
                      </span>
                      <span className="text-gray-500 text-xs font-semibold flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-teal-custom" /> {vacancy.location}
                      </span>
                    </div>
                    <h3 className="text-2xl font-black uppercase tracking-tight text-zinc-900">
                      {vacancy.title}
                    </h3>
                  </div>
                  <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3 shrink-0">
                    <span className="text-sm font-bold text-zinc-800 bg-white px-4 py-2 border border-zinc-200 rounded-sm">
                      {vacancy.salary}
                    </span>
                    <button 
                      onClick={() => handleApplyClick(vacancy.title)}
                      className="bg-teal-custom hover:bg-teal-600 text-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition-colors rounded-sm cursor-pointer inline-flex items-center gap-2"
                    >
                      Pieteikties amatam <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-zinc-900 mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-custom" /> Pamatpienākumi:
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {vacancy.responsibilities.map((r, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-teal-custom font-bold">•</span>
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-zinc-900 mb-3 flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-teal-custom" /> Prasības kandidātiem:
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {vacancy.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-teal-custom font-bold">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="pieteikties" className="py-24 bg-zinc-950 text-white scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-teal-custom font-bold uppercase tracking-[0.25em] text-xs mb-3">Pieteikums</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-6 leading-tight">
                IESNIEDZ SAVU <span className="text-teal-custom">PIETEIKUMU</span>
              </h2>
              <div className="h-1 w-20 bg-teal-custom mb-6"></div>
              <p className="text-gray-300 text-base leading-relaxed mb-8">
                Aizpildi formu vai nosūti savu CV un pieteikumu tieši uz mūsu personāla e-pastu. Ja dotajā brīdī neredzi precīzu amatu savām prasmēm, droši sūti savu CV brīvā formā!
              </p>

              <div className="space-y-5 border-t border-zinc-800 pt-8 text-sm">
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-10 h-10 bg-zinc-900 rounded-sm flex items-center justify-center text-teal-custom shrink-0 border border-zinc-800">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">CV un pieteikumiem</p>
                    <a href="mailto:info@upworx.lv" className="text-white hover:text-teal-custom font-bold text-base transition-colors">
                      info@upworx.lv
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-10 h-10 bg-zinc-900 rounded-sm flex items-center justify-center text-teal-custom shrink-0 border border-zinc-800">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Jautājumiem par vakancēm</p>
                    <a href="tel:+37126474339" className="text-white hover:text-teal-custom font-bold text-base transition-colors">
                      +371 26474339
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-10 h-10 bg-zinc-900 rounded-sm flex items-center justify-center text-teal-custom shrink-0 border border-zinc-800">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Biroja un servisa adrese</p>
                    <p className="text-white font-medium text-base">
                      Ošu ceļš 11B, Jelgava, LV-3003, Latvija
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-zinc-900/90 border border-zinc-800 p-8 sm:p-10 rounded-sm">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 bg-teal-custom/20 text-teal-custom rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-3">Paldies par pieteikumu!</h3>
                  <p className="text-gray-300 max-w-md mx-auto mb-8 text-sm leading-relaxed">
                    Mēs esam saņēmuši Jūsu informāciju un tuvākajā laikā sazināsimies ar Jums, lai pārrunātu tālākos sadarbības soļus.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-teal-custom hover:bg-teal-600 text-white px-8 py-3 rounded-sm text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer"
                  >
                    Iesniegt vēl vienu pieteikumu
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                      Izvēlētā vakance *
                    </label>
                    <select
                      value={selectedVacancy}
                      onChange={(e) => setSelectedVacancy(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-teal-custom"
                      required
                    >
                      {vacancies.map(v => (
                        <option key={v.id} value={v.title} className="bg-zinc-950 text-white">
                          {v.title}
                        </option>
                      ))}
                      <option value="Cita vakance / Brīvs pieteikums" className="bg-zinc-950 text-white">
                        Cita vakance / Brīvs pieteikums
                      </option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                        Vārds, Uzvārds *
                      </label>
                      <input
                        type="text"
                        required
                        value={applicantName}
                        onChange={(e) => setApplicantName(e.target.value)}
                        placeholder="Jānis Bērziņš"
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-teal-custom"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                        Tālruņa numurs *
                      </label>
                      <input
                        type="tel"
                        required
                        value={applicantPhone}
                        onChange={(e) => setApplicantPhone(e.target.value)}
                        placeholder="+371 20000000"
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-teal-custom"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                      E-pasta adrese *
                    </label>
                    <input
                      type="email"
                      required
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      placeholder="janis@piemers.lv"
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-teal-custom"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                      Pievienot CV failu (PDF, DOCX)
                    </label>
                    <label className="flex flex-col items-center justify-center w-full h-28 border-2 border-dashed border-zinc-700 hover:border-teal-custom/60 rounded-sm cursor-pointer bg-zinc-950/60 transition-colors px-4">
                      <div className="flex flex-col items-center justify-center pt-3 pb-3">
                        <Upload className="w-6 h-6 mb-2 text-gray-400" />
                        <p className="text-xs text-gray-300">
                          {fileName ? (
                            <span className="text-teal-custom font-bold">{fileName}</span>
                          ) : (
                            <span><span className="font-semibold text-white">Noklikšķiniet</span> vai ievelciet CV failu</span>
                          )}
                        </p>
                      </div>
                      <input 
                        type="file" 
                        accept=".pdf,.doc,.docx" 
                        className="hidden" 
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            setFileName(e.target.files[0].name);
                          }
                        }} 
                      />
                    </label>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                      Komentārs / Īss pieredzes apraksts
                    </label>
                    <textarea
                      rows={3}
                      value={applicantMessage}
                      onChange={(e) => setApplicantMessage(e.target.value)}
                      placeholder="Pastāstiet īsumā par savu pieredzi ar metālapstrādes vai CNC iekārtām..."
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-teal-custom resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-teal-custom hover:bg-teal-600 text-white py-4 rounded-sm text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer shadow-lg shadow-teal-900/30"
                  >
                    Nosūtīt pieteikumu
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
