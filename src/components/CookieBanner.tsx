import React, { useState, useEffect } from 'react';
import { Shield, X, Cookie, Info, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

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
  const { language, t } = useLanguage();
  const c = t.cookies;

  const getToggleLabel = (active: boolean) => {
    if (language === 'LV') return active ? 'Ieslēgts' : 'Izslēgts';
    if (language === 'RU') return active ? 'Вкл' : 'Выкл';
    return active ? 'On' : 'Off';
  };

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
      console.warn('Cookie settings save error:', e);
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
      {/* 1. Cookie Banner */}
      {isVisible && !isModalOpen && (
        <aside
          id="cookie-consent-banner"
          role="region"
          aria-label="Cookie consent banner"
          className="fixed bottom-0 left-0 right-0 z-50 bg-zinc-950/98 backdrop-blur-md border-t border-zinc-800 text-white shadow-2xl transition-all duration-500 ease-out"
        >
          <div className="container mx-auto px-5 py-5 sm:py-6 max-w-7xl">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 lg:gap-8">
              {/* Text */}
              <div className="flex items-start gap-3.5 flex-1">
                <div className="w-9 h-9 rounded-sm bg-teal-custom/10 text-teal-custom flex items-center justify-center shrink-0 border border-teal-custom/20 mt-0.5">
                  <Cookie className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                    {c.bannerText}{' '}
                    <button
                      type="button"
                      onClick={handleOpenPrivacy}
                      className="text-zinc-300 hover:text-teal-custom transition-colors cursor-pointer inline font-normal underline"
                    >
                      {c.privacyPolicyLink}
                    </button>
                  </p>
                </div>
              </div>

              {/* 3 buttons */}
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 sm:gap-3 shrink-0 self-stretch sm:self-auto justify-end">
                <button
                  type="button"
                  id="cookie-btn-reject"
                  onClick={handleRejectAll}
                  className="w-full sm:w-auto bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700 px-4 sm:px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors cursor-pointer text-center"
                >
                  {c.rejectAll}
                </button>
                <button
                  type="button"
                  id="cookie-btn-customize"
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700 px-4 sm:px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors cursor-pointer text-center"
                >
                  {c.customize}
                </button>
                <button
                  type="button"
                  id="cookie-btn-accept-all"
                  onClick={handleAcceptAll}
                  className="w-full sm:w-auto bg-teal-custom hover:bg-teal-600 text-zinc-950 px-5 sm:px-6 py-2.5 text-xs font-black uppercase tracking-wider rounded-sm transition-colors cursor-pointer shadow-md text-center"
                >
                  {c.acceptAll}
                </button>
              </div>
            </div>
          </div>
        </aside>
      )}

      {/* 2. Preferences modal */}
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
                    {c.modalTitle}
                  </h3>
                  <p className="text-[11px] text-zinc-400 font-medium">
                    {c.modalSubtitle}
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
                aria-label={c.close}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-7 overflow-y-auto space-y-6 text-sm">
              {/* 1 */}
              <div className="space-y-2">
                <h4 className="font-bold text-white text-base">
                  {c.sec1Title}
                </h4>
                <p className="text-zinc-300 text-xs sm:text-[13px] leading-relaxed">
                  {c.sec1Text}
                </p>
              </div>

              {/* 2 */}
              <div className="space-y-3">
                <h4 className="font-bold text-white text-base">
                  {c.sec2Title}
                </h4>
                <p className="text-zinc-300 text-xs sm:text-[13px] leading-relaxed">
                  {c.sec2Text}
                </p>
                <div className="space-y-1.5 pl-3 border-l-2 border-teal-custom/40">
                  <p className="text-xs font-semibold text-white">{c.sec2PurposesTitle}</p>
                  <p className="text-zinc-300 text-xs leading-relaxed">
                    <span className="font-medium text-white">{c.sec2Purpose1Title}</span> {c.sec2Purpose1Text}
                  </p>
                  <p className="text-zinc-300 text-xs leading-relaxed">
                    <span className="font-medium text-white">{c.sec2Purpose2Title}</span> {c.sec2Purpose2Text}
                  </p>
                  <p className="text-zinc-300 text-xs leading-relaxed">
                    <span className="font-medium text-white">{c.sec2Purpose3Title}</span> {c.sec2Purpose3Text}
                  </p>
                </div>
              </div>

              {/* 3 */}
              <div className="space-y-4 pt-2">
                <h4 className="font-bold text-white text-base">
                  {c.sec3Title}
                </h4>

                {/* Necessary */}
                <div className="p-4 bg-zinc-900/70 border border-zinc-800 rounded-sm">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <span className="font-bold text-white text-sm">
                      {c.necessaryTitle}
                    </span>
                    <span className="bg-teal-custom/15 text-teal-custom text-[11px] font-bold uppercase px-2.5 py-1 rounded-sm border border-teal-custom/30 shrink-0">
                      {c.necessaryAlwaysActive}
                    </span>
                  </div>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    {c.necessaryText}
                  </p>
                </div>

                {/* Analytics */}
                <div className="p-4 bg-zinc-900/70 border border-zinc-800 rounded-sm hover:border-zinc-700 transition-colors">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <span className="font-bold text-white text-sm">
                      {c.analyticsTitle}
                    </span>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[11px] font-bold text-zinc-400">
                        {getToggleLabel(analytics)}
                      </span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={analytics}
                          onChange={(e) => setAnalytics(e.target.checked)}
                          className="sr-only peer"
                          aria-label={c.analyticsTitle}
                        />
                        <div className="w-11 h-6 bg-zinc-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-custom"></div>
                      </label>
                    </div>
                  </div>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    {c.analyticsText}
                  </p>
                </div>

                {/* Functional */}
                <div className="p-4 bg-zinc-900/70 border border-zinc-800 rounded-sm hover:border-zinc-700 transition-colors">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <span className="font-bold text-white text-sm">
                      {c.functionalTitle}
                    </span>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[11px] font-bold text-zinc-400">
                        {getToggleLabel(functional)}
                      </span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={functional}
                          onChange={(e) => setFunctional(e.target.checked)}
                          className="sr-only peer"
                          aria-label={c.functionalTitle}
                        />
                        <div className="w-11 h-6 bg-zinc-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-custom"></div>
                      </label>
                    </div>
                  </div>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    {c.functionalText}
                  </p>
                </div>

                {/* Marketing */}
                <div className="p-4 bg-zinc-900/70 border border-zinc-800 rounded-sm hover:border-zinc-700 transition-colors">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <span className="font-bold text-white text-sm">
                      {c.marketingTitle}
                    </span>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[11px] font-bold text-zinc-400">
                        {getToggleLabel(marketing)}
                      </span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={marketing}
                          onChange={(e) => setMarketing(e.target.checked)}
                          className="sr-only peer"
                          aria-label={c.marketingTitle}
                        />
                        <div className="w-11 h-6 bg-zinc-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-custom"></div>
                      </label>
                    </div>
                  </div>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    {c.marketingText}
                  </p>
                </div>
              </div>

              {/* 4 */}
              <div className="space-y-3 pt-2 border-t border-zinc-800/80">
                <h4 className="font-bold text-white text-base">
                  {c.sec4Title}
                </h4>
                <p className="text-zinc-300 text-xs sm:text-[13px] leading-relaxed">
                  {c.sec4Text}
                </p>

                {/* Browser links */}
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
                  <span className="font-semibold text-zinc-300">{c.sec4NoteLabel}</span> {c.sec4NoteText}
                </p>

                <p className="text-zinc-300 text-xs leading-relaxed">
                  {c.sec4QuestionsText}
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
                {c.saveChoice}
              </button>
              <button
                type="button"
                id="cookie-modal-accept-all"
                onClick={handleAcceptAll}
                className="w-full sm:w-auto bg-teal-custom hover:bg-teal-600 text-zinc-950 px-5 py-2.5 text-xs font-black uppercase tracking-wider rounded-sm transition-colors cursor-pointer shadow-md text-center"
              >
                {c.acceptAll}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3. Privacy policy modal */}
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
                  {c.privacyModalTitle}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => {
                  setIsPrivacyModalOpen(false);
                  if (onClosePrivacyTrigger) onClosePrivacyTrigger();
                }}
                className="text-zinc-400 hover:text-white p-1.5 rounded-sm hover:bg-zinc-800 transition-colors cursor-pointer"
                aria-label={c.close}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-[13px] text-zinc-300 leading-relaxed max-h-[70vh]">
              <div className="bg-zinc-900/60 border border-zinc-800 p-4 rounded-sm">
                <p className="text-zinc-400 font-medium text-xs mb-1">
                  {c.privacyUpdatedDate}
                </p>
                <p className="text-white font-medium text-xs">
                  {c.privacyConsentNotice}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white text-sm uppercase tracking-wide mb-2">
                  {c.privacyIntroTitle}
                </h4>
                <p className="text-zinc-300">
                  {c.privacyIntroText}
                </p>
              </div>

              <div className="bg-zinc-900/40 border-l-2 border-teal-custom pl-4 py-2">
                <h4 className="font-bold text-white text-xs uppercase tracking-wide mb-1">
                  {c.privacyContactTitle}
                </h4>
                <p className="text-zinc-300 text-xs">
                  {c.privacyPhoneLabel}{' '}
                  <a href="tel:+37126474339" className="text-teal-custom font-semibold hover:underline">
                    +371 26474339
                  </a>
                  , {c.privacyEmailLabel}{' '}
                  <a href="mailto:info@upworx.lv" className="text-teal-custom font-semibold hover:underline">
                    info@upworx.lv
                  </a>
                </p>
              </div>

              {/* 1 */}
              <div className="pt-2 border-t border-zinc-800/80">
                <h4 className="font-black text-white text-sm uppercase tracking-wide mb-2 text-teal-custom">
                  {c.privacySec1Title}
                </h4>
                <p className="text-zinc-300">
                  {c.privacySec1Text}
                </p>
              </div>

              {/* 2 */}
              <div className="pt-2 border-t border-zinc-800/80">
                <h4 className="font-black text-white text-sm uppercase tracking-wide mb-2 text-teal-custom">
                  {c.privacySec2Title}
                </h4>
                <p className="text-zinc-300 mb-2">
                  {c.privacySec2Text}
                </p>
                <ul className="space-y-1.5 list-disc list-inside text-zinc-300 pl-1">
                  {c.privacySec2Items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* 3 */}
              <div className="pt-2 border-t border-zinc-800/80">
                <h4 className="font-black text-white text-sm uppercase tracking-wide mb-2 text-teal-custom">
                  {c.privacySec3Title}
                </h4>
                <p className="text-zinc-300 mb-2">
                  {c.privacySec3Text}
                </p>
                <ul className="space-y-1.5 list-disc list-inside text-zinc-300 pl-1">
                  {c.privacySec3Items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* 4 */}
              <div className="pt-2 border-t border-zinc-800/80">
                <h4 className="font-black text-white text-sm uppercase tracking-wide mb-2 text-teal-custom">
                  {c.privacySec4Title}
                </h4>
                <p className="text-zinc-300 mb-2">
                  {c.privacySec4Text}
                </p>
                <ul className="space-y-1.5 list-disc list-inside text-zinc-300 pl-1">
                  {c.privacySec4Items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* 5 */}
              <div className="pt-2 border-t border-zinc-800/80">
                <h4 className="font-black text-white text-sm uppercase tracking-wide mb-2 text-teal-custom">
                  {c.privacySec5Title}
                </h4>
                <p className="text-zinc-300 mb-2">
                  {c.privacySec5Text}
                </p>
                <ul className="space-y-1.5 list-disc list-inside text-zinc-300 pl-1">
                  {c.privacySec5Items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <p className="text-zinc-300 mt-2">
                  {c.privacySec5ContactNote}
                </p>
              </div>

              {/* 6 */}
              <div className="pt-2 border-t border-zinc-800/80">
                <h4 className="font-black text-white text-sm uppercase tracking-wide mb-2 text-teal-custom">
                  {c.privacySec6Title}
                </h4>
                <p className="text-zinc-300 mb-2">
                  {c.privacySec6Text1}
                </p>
                <p className="text-zinc-300">
                  {c.privacySec6Text2}
                </p>
              </div>

              {/* 7 */}
              <div className="pt-2 border-t border-zinc-800/80">
                <h4 className="font-black text-white text-sm uppercase tracking-wide mb-2 text-teal-custom">
                  {c.privacySec7Title}
                </h4>
                <p className="text-zinc-300">
                  {c.privacySec7Text}
                </p>
              </div>

              {/* 8 */}
              <div className="pt-2 border-t border-zinc-800/80">
                <h4 className="font-black text-white text-sm uppercase tracking-wide mb-2 text-teal-custom">
                  {c.privacySec8Title}
                </h4>
                <p className="text-zinc-300">
                  {c.privacySec8Text}
                </p>
              </div>

              {/* 9 */}
              <div className="pt-2 border-t border-zinc-800/80">
                <h4 className="font-black text-white text-sm uppercase tracking-wide mb-2 text-teal-custom">
                  {c.privacySec9Title}
                </h4>
                <p className="text-zinc-300">
                  {c.privacySec9Text}
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
                {c.close}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
