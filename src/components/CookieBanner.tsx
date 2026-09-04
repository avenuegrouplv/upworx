import React, { useState, useEffect } from 'react';
import { Shield, X, Check, Cookie, Info, ExternalLink } from 'lucide-react';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  functional: boolean;
  marketing: boolean;
  timestamp: number;
}

const STORAGE_KEY = 'cookie_consent';

interface CookieBannerProps {
  onOpenPrivacyPolicy?: () => void;
  // External trigger to open preferences modal (e.g. from footer)
  forceOpenPreferences?: boolean;
  onCloseExternalTrigger?: () => void;
  forceOpenPrivacyPolicy?: boolean;
  onClosePrivacyTrigger?: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({
  onOpenPrivacyPolicy,
  forceOpenPreferences = false,
  onCloseExternalTrigger,
  forceOpenPrivacyPolicy = false,
  onClosePrivacyTrigger,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  // Preference state
  const [analytics, setAnalytics] = useState(false);
  const [functional, setFunctional] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    // Check if consent has already been given
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) {
        // Show after 3 seconds delay
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 3000);
        return () => clearTimeout(timer);
      } else {
        const parsed: CookiePreferences = JSON.parse(saved);
        setAnalytics(Boolean(parsed.analytics));
        setFunctional(Boolean(parsed.functional));
        setMarketing(Boolean(parsed.marketing));
      }
    } catch (e) {
      // If error reading storage, default to showing after 3s
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Handle external open trigger (e.g. from footer link)
  useEffect(() => {
    if (forceOpenPreferences) {
      setIsModalOpen(true);
    }
  }, [forceOpenPreferences]);

  useEffect(() => {
    if (forceOpenPrivacyPolicy) {
      setIsPrivacyModalOpen(true);
    }
  }, [forceOpenPrivacyPolicy]);

  const saveConsent = (prefs: { analytics: boolean; functional: boolean; marketing: boolean }) => {
    const data: CookiePreferences = {
      necessary: true,
      analytics: prefs.analytics,
      functional: prefs.functional,
      marketing: prefs.marketing,
      timestamp: Date.now(),
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn('Neizdevās saglabāt sīkdatņu iestatījumus:', e);
    }
    setAnalytics(prefs.analytics);
    setFunctional(prefs.functional);
    setMarketing(prefs.marketing);
    setIsVisible(false);
    setIsModalOpen(false);
    if (onCloseExternalTrigger) {
      onCloseExternalTrigger();
    }
  };

  const handleAcceptAll = () => {
    saveConsent({ analytics: true, functional: true, marketing: true });
  };

  const handleRejectAll = () => {
    saveConsent({ analytics: false, functional: false, marketing: false });
  };

  const handleSaveCustom = () => {
    saveConsent({ analytics, functional, marketing });
  };

  const handleOpenPrivacy = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenPrivacyPolicy) {
      onOpenPrivacyPolicy();
    } else {
      setIsPrivacyModalOpen(true);
    }
  };

  return (
    <>
      {/* 1. Apakšējā josla (Cookie Banner) */}
      {isVisible && !isModalOpen && (
        <aside
          id="cookie-consent-banner"
          role="region"
          aria-label="Sīkdatņu izmantošanas paziņojums"
          className="fixed bottom-0 left-0 right-0 z-50 bg-zinc-950/98 backdrop-blur-md border-t border-zinc-800 text-white shadow-2xl transition-all duration-500 ease-out"
        >
          <div className="container mx-auto px-5 py-5 sm:py-6 max-w-7xl">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 lg:gap-8">
              {/* Teksta daļa */}
              <div className="flex items-start gap-3.5 flex-1">
                <div className="w-9 h-9 rounded-sm bg-teal-custom/10 text-teal-custom flex items-center justify-center shrink-0 border border-teal-custom/20 mt-0.5">
                  <Cookie className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                    Mēs izmantojam sīkdatnes, lai uzlabotu Jūsu lietošanas pieredzi, nodrošinātu vietnes darbību un analizētu apmeklētāju plūsmu. Jūs varat piekrist visām sīkdatnēm vai pielāgot savas izvēles. Vairāk informācijas mūsu{' '}
                    <button
                      type="button"
                      onClick={handleOpenPrivacy}
                      className="text-zinc-300 hover:text-teal-custom transition-colors cursor-pointer inline font-normal"
                    >
                      Privātuma politikā.
                    </button>
                  </p>
                </div>
              </div>

              {/* 3 horizontālas pogas */}
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 sm:gap-3 shrink-0 self-stretch sm:self-auto justify-end">
                <button
                  type="button"
                  id="cookie-btn-reject"
                  onClick={handleRejectAll}
                  className="w-full sm:w-auto bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700 px-4 sm:px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors cursor-pointer text-center"
                >
                  Noraidīt
                </button>
                <button
                  type="button"
                  id="cookie-btn-customize"
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700 px-4 sm:px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors cursor-pointer text-center"
                >
                  Pielāgot
                </button>
                <button
                  type="button"
                  id="cookie-btn-accept-all"
                  onClick={handleAcceptAll}
                  className="w-full sm:w-auto bg-teal-custom hover:bg-teal-600 text-zinc-950 px-5 sm:px-6 py-2.5 text-xs font-black uppercase tracking-wider rounded-sm transition-colors cursor-pointer shadow-md text-center"
                >
                  Piekrītu visām
                </button>
              </div>
            </div>
          </div>
        </aside>
      )}

      {/* 2. Modālais logs: Sīkdatņu politika un pielāgošana (atveras no Footer vai pogas "Pielāgot") */}
      {isModalOpen && (
        <div
          id="cookie-preferences-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-preferences-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn"
        >
          <div className="bg-zinc-950 border border-zinc-800 w-full max-w-2xl rounded-sm shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="px-6 py-5 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/80 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-sm bg-teal-custom/10 text-teal-custom flex items-center justify-center border border-teal-custom/20">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h3 id="cookie-preferences-title" className="text-lg font-black uppercase tracking-tight text-white">
                    Sīkdatņu politika
                  </h3>
                  <p className="text-[11px] text-zinc-400 font-medium">
                    SIA UPWORX informācija par sīkdatņu izmantošanu un iestatījumiem
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setIsModalOpen(false);
                  if (onCloseExternalTrigger) onCloseExternalTrigger();
                }}
                className="text-zinc-400 hover:text-white p-1.5 rounded-sm hover:bg-zinc-800 transition-colors cursor-pointer"
                aria-label="Aizvērt logu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content - Pilns lietotāja pieprasītais teksts un struktūra */}
            <div className="p-6 sm:p-7 overflow-y-auto space-y-6 text-sm">
              {/* 1. Kas ir sīkdatnes? */}
              <div className="space-y-2">
                <h4 className="font-bold text-white text-base">
                  1. Kas ir sīkdatnes?
                </h4>
                <p className="text-zinc-300 text-xs sm:text-[13px] leading-relaxed">
                  Sīkdatnes (cookies) ir nelielas teksta datnes, kuras tīmekļa vietne saglabā Jūsu datorā vai mobilajā ierīcē, kad Jūs apmeklējat vietni. Tās palīdz vietnei atcerēties Jūsu iestatījumus un darbības (piemēram, valodas izvēli un piekrišanas statusu), lai Jums tie nebūtu jānorāda atkārtoti.
                </p>
              </div>

              {/* 2. Kāpēc mēs izmantojam sīkdatnes? */}
              <div className="space-y-3">
                <h4 className="font-bold text-white text-base">
                  2. Kāpēc mēs izmantojam sīkdatnes?
                </h4>
                <p className="text-zinc-300 text-xs sm:text-[13px] leading-relaxed">
                  Mēs izmantojam sīkdatnes, lai nodrošinātu vietnes pamatfunkcijas, uzlabotu lietotāju pieredzi un analizētu apmeklējumu statistiku. Jautājumu gadījumā sazinieties ar mums:{' '}
                  <a href="mailto:info@justiopro.lv" className="text-teal-custom hover:underline">info@justiopro.lv</a> un{' '}
                  <a href="tel:+37126841758" className="text-teal-custom hover:underline">+371 26841758</a>.
                </p>
                <div className="space-y-1.5 pl-3 border-l-2 border-teal-custom/40">
                  <p className="text-xs font-semibold text-white">Sīkdatņu izmantošanas galvenie mērķi:</p>
                  <p className="text-zinc-300 text-xs leading-relaxed">
                    <span className="font-medium text-white">Vietnes pamatdarbība:</span> Nodrošina lapu ielādi, navigāciju un drošu datu pārraidi.
                  </p>
                  <p className="text-zinc-300 text-xs leading-relaxed">
                    <span className="font-medium text-white">Lietotāja izvēles:</span> Saglabā Jūsu izvēlēto valodu un sīkdatņu piekrišanas statusu.
                  </p>
                  <p className="text-zinc-300 text-xs leading-relaxed">
                    <span className="font-medium text-white">Analītika un uzlabojumi:</span> Palīdz saprast, kuras sadaļas ir visnoderīgākās mūsu apmeklētājiem.
                  </p>
                </div>
              </div>

              {/* 3. Sīkdatņu kategorijas un to pielāgošana */}
              <div className="space-y-4 pt-2">
                <h4 className="font-bold text-white text-base">
                  3. Sīkdatņu kategorijas un to pielāgošana
                </h4>

                {/* Nepieciešamās sīkdatnes (Obligātas) */}
                <div className="p-4 bg-zinc-900/70 border border-zinc-800 rounded-sm">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <span className="font-bold text-white text-sm">
                      Nepieciešamās sīkdatnes (Obligātas)
                    </span>
                    <span className="bg-teal-custom/15 text-teal-custom text-[11px] font-bold uppercase px-2.5 py-1 rounded-sm border border-teal-custom/30 shrink-0">
                      Vienmēr aktīvas
                    </span>
                  </div>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    Šīs sīkdatnes ir būtiskas vietnes drošībai un pamatfunkciju darbībai. Bez tām vietne nevar pilnvērtīgi funkcionēt.
                  </p>
                </div>

                {/* Analītiskās & Statistiskās sīkdatnes */}
                <div className="p-4 bg-zinc-900/70 border border-zinc-800 rounded-sm hover:border-zinc-700 transition-colors">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <span className="font-bold text-white text-sm">
                      Analītiskās &amp; Statistiskās sīkdatnes
                    </span>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[11px] font-bold text-zinc-400">
                        {analytics ? 'On' : 'Off'}
                      </span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={analytics}
                          onChange={(e) => setAnalytics(e.target.checked)}
                          className="sr-only peer"
                          aria-label="Analītiskās & Statistiskās sīkdatnes On/Off"
                        />
                        <div className="w-11 h-6 bg-zinc-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-custom"></div>
                      </label>
                    </div>
                  </div>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    Palīdz mums saprast, kā apmeklētāji mijiedarbojas ar vietni, ļaujot uzlabot satura pieejamību un struktūru.
                  </p>
                </div>

                {/* Funkcionālās sīkdatnes */}
                <div className="p-4 bg-zinc-900/70 border border-zinc-800 rounded-sm hover:border-zinc-700 transition-colors">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <span className="font-bold text-white text-sm">
                      Funkcionālās sīkdatnes
                    </span>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[11px] font-bold text-zinc-400">
                        {functional ? 'On' : 'Off'}
                      </span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={functional}
                          onChange={(e) => setFunctional(e.target.checked)}
                          className="sr-only peer"
                          aria-label="Funkcionālās sīkdatnes On/Off"
                        />
                        <div className="w-11 h-6 bg-zinc-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-custom"></div>
                      </label>
                    </div>
                  </div>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    Nodrošina uzlabotu funkcionalitāti un personalizāciju, atceroties lietotāja preferences.
                  </p>
                </div>

                {/* Mārketinga sīkdatnes */}
                <div className="p-4 bg-zinc-900/70 border border-zinc-800 rounded-sm hover:border-zinc-700 transition-colors">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <span className="font-bold text-white text-sm">
                      Mārketinga sīkdatnes
                    </span>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[11px] font-bold text-zinc-400">
                        {marketing ? 'On' : 'Off'}
                      </span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={marketing}
                          onChange={(e) => setMarketing(e.target.checked)}
                          className="sr-only peer"
                          aria-label="Mārketinga sīkdatnes On/Off"
                        />
                        <div className="w-11 h-6 bg-zinc-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-custom"></div>
                      </label>
                    </div>
                  </div>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    Tiek izmantotas, lai pielāgotu reklāmas un paziņojumus Jūsu interesēm citās vietnēs.
                  </p>
                </div>
              </div>

              {/* 4. Kā pārvaldīt un dzēst sīkdatnes savā pārlūkprogrammā? */}
              <div className="space-y-3 pt-2 border-t border-zinc-800/80">
                <h4 className="font-bold text-white text-base">
                  4. Kā pārvaldīt un dzēst sīkdatnes savā pārlūkprogrammā?
                </h4>
                <p className="text-zinc-300 text-xs sm:text-[13px] leading-relaxed">
                  Jūs varat jebkurā laikā mainīt vai dzēst sīkdatņu iestatījumus savā interneta pārlūkprogrammā:
                </p>

                {/* Pārlūku saites */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <a
                    href="https://support.google.com/chrome/answer/95647"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-teal-custom text-xs font-medium rounded-sm border border-zinc-800 transition-colors"
                  >
                    <span>Google Chrome</span>
                    <ExternalLink className="w-3 h-3 text-zinc-500" />
                  </a>
                  <a
                    href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-teal-custom text-xs font-medium rounded-sm border border-zinc-800 transition-colors"
                  >
                    <span>Safari</span>
                    <ExternalLink className="w-3 h-3 text-zinc-500" />
                  </a>
                  <a
                    href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-teal-custom text-xs font-medium rounded-sm border border-zinc-800 transition-colors"
                  >
                    <span>Mozilla Firefox</span>
                    <ExternalLink className="w-3 h-3 text-zinc-500" />
                  </a>
                  <a
                    href="https://support.microsoft.com/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-teal-custom text-xs font-medium rounded-sm border border-zinc-800 transition-colors"
                  >
                    <span>MS Edge</span>
                    <ExternalLink className="w-3 h-3 text-zinc-500" />
                  </a>
                </div>

                <p className="text-zinc-400 text-xs leading-relaxed pt-2">
                  <span className="font-semibold text-zinc-300">Piezīme:</span> Atspējojot nepieciešamās sīkdatnes, atsevišķas vietnes funkcijas var darboties nepilnīgi.
                </p>

                <p className="text-zinc-300 text-xs leading-relaxed">
                  Ja Jums ir jautājumi par mūsu sīkdatņu politiku, lūdzu, rakstiet:{' '}
                  <a href="mailto:info@upworx.lv" className="text-teal-custom hover:underline font-medium">info@upworx.lv</a>
                </p>
              </div>
            </div>

            {/* Modal Footer Buttons */}
            <div className="px-6 py-4 border-t border-zinc-800 bg-zinc-900/90 flex flex-col sm:flex-row items-center justify-end gap-3 shrink-0">
              <button
                type="button"
                id="cookie-modal-save-custom"
                onClick={handleSaveCustom}
                className="w-full sm:w-auto bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors cursor-pointer text-center"
              >
                Saglabāt izvēli
              </button>
              <button
                type="button"
                id="cookie-modal-accept-all"
                onClick={handleAcceptAll}
                className="w-full sm:w-auto bg-teal-custom hover:bg-teal-600 text-zinc-950 px-5 py-2.5 text-xs font-black uppercase tracking-wider rounded-sm transition-colors cursor-pointer shadow-md text-center"
              >
                Piekrītu visām
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3. Privātuma politikas skata modāls */}
      {isPrivacyModalOpen && (
        <div
          id="privacy-policy-modal"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn"
        >
          <div className="bg-zinc-950 border border-zinc-800 w-full max-w-3xl rounded-sm shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
            <div className="px-6 py-5 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/60">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-sm bg-teal-custom/10 text-teal-custom flex items-center justify-center border border-teal-custom/20">
                  <Info className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-black uppercase tracking-tight text-white">
                  Privātuma politika
                </h3>
              </div>
              <button
                type="button"
                onClick={() => {
                  setIsPrivacyModalOpen(false);
                  if (onClosePrivacyTrigger) onClosePrivacyTrigger();
                }}
                className="text-zinc-400 hover:text-white p-1.5 rounded-sm hover:bg-zinc-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-[13px] text-zinc-300 leading-relaxed max-h-[70vh]">
              <div className="bg-zinc-900/60 border border-zinc-800 p-4 rounded-sm">
                <p className="text-zinc-400 font-medium text-xs mb-1">
                  Pēdējo reizi atjaunots: <span className="text-teal-custom font-bold">2026. gada aprīlī</span>
                </p>
                <p className="text-white font-medium text-xs">
                  Izmantojot mūsu mājas lapu un pakalpojumus, Jūs piekrītat šajā politikā aprakstītajai datu vākšanai un izmantošanai.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white text-sm uppercase tracking-wide mb-2">
                  Ievads
                </h4>
                <p className="text-zinc-300">
                  SIA UPWORX (Reģ.Nr. 50203706491, juridiskā adrese: Ošu ceļš 11B, Jelgava, LV-3003) aizsargā Jūsu privātumu saskaņā ar Eiropas Savienības Vispārīgo datu aizsardzības regulu (VDAR / GDPR) un spēkā esošajiem Latvijas Republikas likumiem, apstrādā un aizsargā fizisko personu datus atbilstoši Eiropas Savienības Vispārīgajai datu aizsardzības regulai (VDAR 2016/679) un Latvijas Republikas Fizisko personu datu apstrādes likumam.
                </p>
              </div>

              <div className="bg-zinc-900/40 border-l-2 border-teal-custom pl-4 py-2">
                <h4 className="font-bold text-white text-xs uppercase tracking-wide mb-1">
                  Kontaktinformācija:
                </h4>
                <p className="text-zinc-300 text-xs">
                  Tālrunis:{' '}
                  <a href="tel:+37126474339" className="text-teal-custom font-semibold hover:underline">
                    +371 26474339
                  </a>
                  , e-pasts:{' '}
                  <a href="mailto:info@upworx.lv" className="text-teal-custom font-semibold hover:underline">
                    info@upworx.lv
                  </a>
                </p>
              </div>

              {/* 1. Juridiskais pamats */}
              <div className="pt-2 border-t border-zinc-800/80">
                <h4 className="font-black text-white text-sm uppercase tracking-wide mb-2 text-teal-custom">
                  1. Juridiskais pamats
                </h4>
                <p className="text-zinc-300">
                  Personas datu apstrādātājs – Latvijas Republikas Uzņēmumu reģistra Komercreģistrā reģistrētas juridiskas personas, kas Sabiedrības uzdevumā iegūst un apstrādā Klienta datus, lai nodrošinātu Pakalpojumu sniegšanu Sabiedrības vārdā. Personas datu apstrādātājs veic datu apstrādi ievērojot Sabiedrības norādījumus un izmantojot tehniskus un organizatoriskus pasākumus apstrādā Klientu datus tādā apmērā un kārtībā, kā to prasa un atļauj Latvijas Republikas un Eiropas Savienības normatīvie akti. Sīkāku informāciju par Personas datu apstrādātājiem var saņemt vēršoties pie Sabiedrības ar rakstveida pieprasījumu.
                </p>
              </div>

              {/* 2. Kādus personas datus mēs vācam */}
              <div className="pt-2 border-t border-zinc-800/80">
                <h4 className="font-black text-white text-sm uppercase tracking-wide mb-2 text-teal-custom">
                  2. Kādus personas datus mēs vācam
                </h4>
                <p className="text-zinc-300 mb-2">
                  Mēs varam apkopot un apstrādāt šādu informāciju par šīs vietnes apmeklētājiem:
                </p>
                <ul className="space-y-1.5 list-disc list-inside text-zinc-300 pl-1">
                  <li><strong className="text-white font-medium">Kontaktinformācija:</strong> vārds, uzņēmuma nosaukums, e-pasta adrese, tālruņa numurs</li>
                  <li><strong className="text-white font-medium">Tehniskā informācija:</strong> IP adrese, pārlūkprogrammas veids, ierīces informācija, apmeklējuma laiks un datums</li>
                  <li><strong className="text-white font-medium">Lietošanas dati:</strong> informācija par to, kā šīs vietnes apmeklētājs izmantojat mūsu mājas lapu un pakalpojumus</li>
                  <li><strong className="text-white font-medium">Saziņas dati:</strong> Jūsu ziņojumu un komunikācijas saturs ar šīs vietnes pakalpojumu sniedzēju.</li>
                </ul>
              </div>

              {/* 3. Kā mēs izmantojam Jūsu datus */}
              <div className="pt-2 border-t border-zinc-800/80">
                <h4 className="font-black text-white text-sm uppercase tracking-wide mb-2 text-teal-custom">
                  3. Kā mēs izmantojam Jūsu datus
                </h4>
                <p className="text-zinc-300 mb-2">
                  Mēs izmantojam Jūsu personas datus šādiem mērķiem:
                </p>
                <ul className="space-y-1.5 list-disc list-inside text-zinc-300 pl-1">
                  <li>Lai sniegtu Jums pieprasītos pakalpojumus un atbildētu uz Jūsu pieprasījumiem</li>
                  <li>Lai sazinātos ar Jums par mūsu pakalpojumiem un piedāvājumiem</li>
                  <li>Lai uzlabotu mūsu mājas lapu un pakalpojumu kvalitāti</li>
                  <li>Lai izpildītu juridiskās saistības un aizsargātu savas likumīgās intereses</li>
                </ul>
              </div>

              {/* 4. Kādam mērķim mēs apstrādājam Jūsu datus */}
              <div className="pt-2 border-t border-zinc-800/80">
                <h4 className="font-black text-white text-sm uppercase tracking-wide mb-2 text-teal-custom">
                  4. Kādam mērķim mēs apstrādājam Jūsu datus
                </h4>
                <p className="text-zinc-300 mb-2">
                  Mēs apstrādājam Jūsu personas datus, pamatojoties uz:
                </p>
                <ul className="space-y-1.5 list-disc list-inside text-zinc-300 pl-1">
                  <li><strong className="text-white font-medium">Jūsu piekrišanu</strong> – kad Jūs aizpildāt mūsu kontaktformu un piekrītat datu apstrādes noteikumiem</li>
                  <li><strong className="text-white font-medium">Līguma izpildi</strong> – lai sniegtu Jums pieprasītos pakalpojumus</li>
                  <li><strong className="text-white font-medium">Likumīgas intereses</strong> – lai uzlabotu mūsu pakalpojumus un aizsargātu uzņēmumu</li>
                </ul>
              </div>

              {/* 5. Jūsu tiesības */}
              <div className="pt-2 border-t border-zinc-800/80">
                <h4 className="font-black text-white text-sm uppercase tracking-wide mb-2 text-teal-custom">
                  5. Jūsu tiesības
                </h4>
                <p className="text-zinc-300 mb-2">
                  Saskaņā ar GDPR Jums ir šādas tiesības attiecībā uz Saviem personas datiem:
                </p>
                <ul className="space-y-1.5 list-disc list-inside text-zinc-300 pl-1">
                  <li><strong className="text-white font-medium">Piekļuves tiesības</strong> – pieprasīt piekļuvi Saviem personas datiem</li>
                  <li><strong className="text-white font-medium">Labošanas tiesības</strong> – labot neprecīzus vai nepilnīgus datus</li>
                  <li><strong className="text-white font-medium">Dzēšanas tiesības</strong> – pieprasīt Savu datu dzēšanu ("tiesības tikt aizmirstam")</li>
                  <li><strong className="text-white font-medium">Ierobežošanas tiesības</strong> – ierobežot Savu datu apstrādi</li>
                  <li><strong className="text-white font-medium">Pārnesamības tiesības</strong> – saņemt Savus datus strukturētā formātā</li>
                  <li><strong className="text-white font-medium">Iebildumu tiesības</strong> – iebilst pret Savu datu apstrādi</li>
                  <li><strong className="text-white font-medium">Atsaukt piekrišanu</strong> – jebkurā laikā atsaukt Savu piekrišanu datu apstrādei</li>
                </ul>
                <p className="text-zinc-300 mt-2">
                  Lai izmantotu Savas tiesības, lūdzu, sazinieties ar mums, izmantojot kontaktinformāciju, kas norādīta šīs politikas sākumā.
                </p>
              </div>

              {/* 6. Sīkdatnes (Cookies) */}
              <div className="pt-2 border-t border-zinc-800/80">
                <h4 className="font-black text-white text-sm uppercase tracking-wide mb-2 text-teal-custom">
                  6. Sīkdatnes (Cookies)
                </h4>
                <p className="text-zinc-300 mb-2">
                  Mūsu mājas lapa izmanto sīkdatnes, lai uzlabotu Jūsu lietošanas pieredzi un analizētu mājas lapas apmeklējumu. Sīkdatnes ir mazi teksta faili, kas tiek saglabāti Jūsu ierīcē.
                </p>
                <p className="text-zinc-300">
                  Mēs izmantojam nepieciešamās sīkdatnes (nodrošina pamata funkcionalitāti) un analītikas sīkdatnes (palīdz saprast, kā apmeklētāji izmanto lapu). Jūs varat pārvaldīt sīkdatnes Savā pārlūkprogrammā.
                </p>
              </div>

              {/* 7. Trešo pušu pakalpojumi */}
              <div className="pt-2 border-t border-zinc-800/80">
                <h4 className="font-black text-white text-sm uppercase tracking-wide mb-2 text-teal-custom">
                  7. Trešo pušu pakalpojumi
                </h4>
                <p className="text-zinc-300">
                  Mēs varam izmantot uzticamus trešo pušu pakalpojumu sniedzējus, piemēram, mājas lapas mitināšanas pakalpojumus, e-pasta sūtīšanas pakalpojumus un analītikas rīkus (Google Analytics). Šie sniedzēji piekļūst datiem tikai tiktāl, cik tas nepieciešams to uzdevumu veikšanai.
                </p>
              </div>

              {/* 8. Izmaiņas privātuma politikā */}
              <div className="pt-2 border-t border-zinc-800/80">
                <h4 className="font-black text-white text-sm uppercase tracking-wide mb-2 text-teal-custom">
                  8. Izmaiņas privātuma politikā
                </h4>
                <p className="text-zinc-300">
                  Mēs paturam tiesības jebkurā laikā atjaunināt šo privātuma politiku. Izmaiņas stāsies spēkā, tiklīdz atjauninātā politika tiks publicēta mūsu mājas lapā.
                </p>
              </div>

              {/* 9. Sūdzības */}
              <div className="pt-2 border-t border-zinc-800/80">
                <h4 className="font-black text-white text-sm uppercase tracking-wide mb-2 text-teal-custom">
                  9. Sūdzības
                </h4>
                <p className="text-zinc-300">
                  Ja Jums ir sūdzības, lūdzu, vispirms sazinieties ar mums. Jums ir tiesības iesniegt sūdzību arī Datu valsts inspekcijā.
                </p>
              </div>
            </div>

            <div className="px-6 py-4 border-t border-zinc-800 bg-zinc-900/80 flex justify-end">
              <button
                type="button"
                onClick={() => {
                  setIsPrivacyModalOpen(false);
                  if (onClosePrivacyTrigger) onClosePrivacyTrigger();
                }}
                className="bg-teal-custom hover:bg-teal-600 text-zinc-950 px-6 py-2 text-xs font-black uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
              >
                Aizvērt
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
