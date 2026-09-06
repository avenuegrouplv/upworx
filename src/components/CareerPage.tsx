import React, { useState } from 'react';
import { CheckCircle2, Mail, Phone, Upload, Award, Wrench, TrendingUp, ShieldCheck, MapPin } from 'lucide-react';

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
      title: 'CNC un lāzergriešanas iekārtu servisa inženieris'
    },
    {
      id: 'tirdzniecibas-vaditajs',
      title: 'Metālapstrādes iekārtu tirdzniecības inženieris'
    },
    {
      id: 'automatizacijas-inzenieris',
      title: 'Ražošanas automatizācijas un robotikas speciālists'
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

      {/* CTA Section zem Hero - gaišs stils, saskaņots ar pārējo mājaslapu */}
      <section id="career-cta" className="py-20 sm:py-24 bg-zinc-50 text-zinc-900 overflow-hidden relative border-b border-zinc-200/80">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[46px] font-black uppercase tracking-tighter mb-5 leading-tight text-zinc-900">
            VĒLATIES PIEVIENOTIES <br />MŪSU <span className="text-teal-custom">EKSPERTU</span> KOMANDAI?
          </h2>
          <div className="h-1 w-20 bg-teal-custom mx-auto mb-6"></div>
          <p className="text-zinc-600 text-base sm:text-lg lg:text-xl mb-10 max-w-2xl mx-auto font-normal leading-relaxed">
            Mēs pastāvīgi meklējam talantīgus inženierus, servisa tehniķus un tirdzniecības speciālistus. Ja esi gatavs izaicinājumiem, sazinies ar mums vai piesakies kādai no brīvajām vietām.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-5">
            <a 
              href="#vakances"
              className="bg-teal-custom hover:bg-teal-600 px-9 py-3.5 text-xs font-bold uppercase tracking-widest transition-all rounded-sm shadow-md text-white inline-flex items-center justify-center cursor-pointer"
            >
              Apskatīt Vakances
            </a>
            <a 
              href="#pieteikties"
              className="bg-white hover:bg-zinc-100 border border-zinc-300 text-zinc-800 px-9 py-3.5 text-xs font-bold uppercase tracking-widest transition-all rounded-sm inline-flex items-center justify-center cursor-pointer shadow-xs"
            >
              Sūtīt CV
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 sm:py-24 bg-white border-b border-zinc-200/80">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-zinc-900 mb-4">
              KĀPĒC STRĀDĀT <span className="text-teal-custom">UPWORX?</span>
            </h2>
            <div className="h-1 w-20 bg-teal-custom mx-auto mb-6"></div>
            <p className="text-zinc-600 text-base sm:text-lg leading-relaxed">
              Mēs radām vidi, kurā ikviens tehniskais speciālists var nepārtraukti attīstīties un strādāt ar nozares augstākā līmeņa iekārtām.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((b, idx) => (
              <div key={idx} className="bg-zinc-50 p-8 border border-zinc-200/90 rounded-sm hover:border-teal-custom hover:bg-white transition-all shadow-xs flex flex-col justify-between">
                <div>
                  <div className="mb-6 p-3 bg-teal-custom/10 inline-block rounded-sm text-teal-custom">
                    {b.icon}
                  </div>
                  <h3 className="text-lg font-black uppercase tracking-tight text-zinc-900 mb-3">{b.title}</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vacancies Section */}
      <section id="vakances" className="py-20 sm:py-24 bg-zinc-50 border-b border-zinc-200/80 scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-12 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-zinc-900 mb-4">
              AKTUĀLĀS <span className="text-teal-custom">VAKANCES</span>
            </h2>
            <div className="h-1 w-20 bg-teal-custom mb-6"></div>
            <p className="text-zinc-600 text-base sm:text-lg leading-relaxed">
              Izvēlies savām prasmēm atbilstošāko amatu un pievienojies mūsu augošajai tehnoloģiju komandai.
            </p>
          </div>

          <div className="space-y-6">
            {vacancies.map((v) => (
              <div 
                key={v.id} 
                className="bg-white border border-zinc-200 rounded-sm p-6 sm:p-8 hover:border-teal-custom transition-all shadow-xs"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-zinc-900">
                    {v.title}
                  </h3>
                  <a
                    href="#pieteikties"
                    onClick={() => setSelectedVacancy(v.title)}
                    className="bg-teal-custom hover:bg-teal-600 text-white px-5 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-colors inline-block text-center shrink-0 self-start sm:self-auto shadow-sm"
                  >
                    Pieteikties
                  </a>
                </div>

                {/* Brīva vieta ar uzrakstu "Informācija sekos." */}
                <div className="pt-6 mt-6 border-t border-zinc-100 min-h-[90px] flex items-center">
                  <p className="text-sm sm:text-base font-semibold text-zinc-400 italic">
                    Informācija sekos.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section - Gaišs dizains */}
      <section id="pieteikties" className="py-20 sm:py-24 bg-white text-zinc-900 scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-teal-custom font-bold uppercase tracking-[0.25em] text-xs mb-3">Pieteikums</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-6 leading-tight text-zinc-900">
                IESNIEDZ SAVU <span className="text-teal-custom">PIETEIKUMU</span>
              </h2>
              <div className="h-1 w-20 bg-teal-custom mb-6"></div>
              <p className="text-zinc-600 text-base leading-relaxed mb-8 font-normal">
                Aizpildi formu vai nosūti savu CV un pieteikumu tieši uz mūsu personāla e-pastu. Ja dotajā brīdī neredzi precīzu amatu savām prasmēm, droši sūti savu CV brīvā formā!
              </p>

              <div className="space-y-5 border-t border-zinc-200 pt-8 text-sm">
                <div className="flex items-center gap-4 text-zinc-700">
                  <div className="w-10 h-10 bg-zinc-100 rounded-sm flex items-center justify-center text-teal-custom shrink-0 border border-zinc-200">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">CV un pieteikumiem</p>
                    <a href="mailto:info@upworx.lv" className="text-zinc-900 hover:text-teal-custom font-bold text-base transition-colors">
                      info@upworx.lv
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-zinc-700">
                  <div className="w-10 h-10 bg-zinc-100 rounded-sm flex items-center justify-center text-teal-custom shrink-0 border border-zinc-200">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">Jautājumiem par vakancēm</p>
                    <a href="tel:+37126474339" className="text-zinc-900 hover:text-teal-custom font-bold text-base transition-colors">
                      +371 26474339
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-zinc-700">
                  <div className="w-10 h-10 bg-zinc-100 rounded-sm flex items-center justify-center text-teal-custom shrink-0 border border-zinc-200">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">Biroja un servisa adrese</p>
                    <p className="text-zinc-900 font-medium text-base">
                      Ošu ceļš 11B, Jelgava, LV-3003, Latvija
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-zinc-50 border border-zinc-200 p-8 sm:p-10 rounded-sm shadow-sm">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 bg-teal-custom/10 text-teal-custom rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-zinc-900 mb-3">Paldies par pieteikumu!</h3>
                  <p className="text-zinc-600 max-w-md mx-auto mb-8 text-sm leading-relaxed">
                    Mēs esam saņēmuši Jūsu informāciju un tuvākajā laikā sazināsimies ar Jums, lai pārrunātu tālākos sadarbības soļus.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-teal-custom hover:bg-teal-600 text-white px-8 py-3 rounded-sm text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer shadow-xs"
                  >
                    Iesniegt vēl vienu pieteikumu
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-zinc-700 mb-2">
                      Izvēlētā vakance *
                    </label>
                    <select
                      value={selectedVacancy}
                      onChange={(e) => setSelectedVacancy(e.target.value)}
                      className="w-full bg-white border border-zinc-300 rounded-sm px-4 py-3 text-zinc-900 text-sm focus:outline-none focus:border-teal-custom focus:ring-1 focus:ring-teal-custom"
                      required
                    >
                      {vacancies.map(v => (
                        <option key={v.id} value={v.title} className="text-zinc-900">
                          {v.title}
                        </option>
                      ))}
                      <option value="Cita vakance / Brīvs pieteikums" className="text-zinc-900">
                        Cita vakance / Brīvs pieteikums
                      </option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-zinc-700 mb-2">
                        Vārds, Uzvārds *
                      </label>
                      <input
                        type="text"
                        required
                        value={applicantName}
                        onChange={(e) => setApplicantName(e.target.value)}
                        placeholder="Jānis Bērziņš"
                        className="w-full bg-white border border-zinc-300 rounded-sm px-4 py-3 text-zinc-900 text-sm focus:outline-none focus:border-teal-custom focus:ring-1 focus:ring-teal-custom"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-zinc-700 mb-2">
                        Tālruņa numurs *
                      </label>
                      <input
                        type="tel"
                        required
                        value={applicantPhone}
                        onChange={(e) => setApplicantPhone(e.target.value)}
                        placeholder="+371 20000000"
                        className="w-full bg-white border border-zinc-300 rounded-sm px-4 py-3 text-zinc-900 text-sm focus:outline-none focus:border-teal-custom focus:ring-1 focus:ring-teal-custom"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-zinc-700 mb-2">
                      E-pasta adrese *
                    </label>
                    <input
                      type="email"
                      required
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      placeholder="janis@piemers.lv"
                      className="w-full bg-white border border-zinc-300 rounded-sm px-4 py-3 text-zinc-900 text-sm focus:outline-none focus:border-teal-custom focus:ring-1 focus:ring-teal-custom"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-zinc-700 mb-2">
                      Pievienot CV failu (PDF, DOCX)
                    </label>
                    <label className="flex flex-col items-center justify-center w-full h-28 border-2 border-dashed border-zinc-300 hover:border-teal-custom rounded-sm cursor-pointer bg-white transition-colors px-4">
                      <div className="flex flex-col items-center justify-center pt-3 pb-3">
                        <Upload className="w-6 h-6 mb-2 text-zinc-400" />
                        <p className="text-xs text-zinc-600">
                          {fileName ? (
                            <span className="text-teal-custom font-bold">{fileName}</span>
                          ) : (
                            <span><span className="font-semibold text-zinc-900">Noklikšķiniet</span> vai ievelciet CV failu</span>
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
                    <label className="block text-xs font-bold uppercase tracking-widest text-zinc-700 mb-2">
                      Komentārs / Īss pieredzes apraksts
                    </label>
                    <textarea
                      rows={3}
                      value={applicantMessage}
                      onChange={(e) => setApplicantMessage(e.target.value)}
                      placeholder="Pastāstiet īsumā par savu pieredzi ar metālapstrādes vai CNC iekārtām..."
                      className="w-full bg-white border border-zinc-300 rounded-sm px-4 py-3 text-zinc-900 text-sm focus:outline-none focus:border-teal-custom focus:ring-1 focus:ring-teal-custom resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-teal-custom hover:bg-teal-600 text-white py-4 rounded-sm text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer shadow-md"
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
