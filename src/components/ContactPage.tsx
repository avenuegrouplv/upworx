import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink, Building2 } from 'lucide-react';
import { MACHINERY_CATEGORIES, ALL_MACHINERY } from '../data/machineryData';
import { useLanguage } from '../context/LanguageContext';
import { getLocalizedMachine } from '../i18n/machineryLocalization';

interface ContactPageProps {
  initialMachineName?: string | null;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialMachineName }) => {
  const { language, t } = useLanguage();
  const cp = t.contactPage;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    machine: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    if (initialMachineName) {
      const match = ALL_MACHINERY.find(
        m => m.name.toLowerCase() === initialMachineName.toLowerCase() || 
             m.id.toLowerCase() === initialMachineName.toLowerCase()
      );
      if (match) {
        const defaultMsg = language === 'RU'
          ? `Здравствуйте! Прошу выслать детальное ценовое и техническое предложение на станок ${match.name}.`
          : language === 'ENG'
          ? `Hello! I would like to receive pricing and a technical specification quotation for ${match.name}.`
          : `Labdien! Vēlos saņemt tehniski-komerciālo un cenas piedāvājumu iekārtai ${match.name}.`;

        setFormData(prev => ({
          ...prev,
          category: match.category,
          machine: match.name,
          message: prev.message || defaultMsg,
        }));
      }

      setTimeout(() => {
        const formEl = document.getElementById('contact-form');
        if (formEl) {
          formEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 150);
    }
  }, [initialMachineName, language]);

  const primaryCategories = MACHINERY_CATEGORIES;
  const availableMachines = ALL_MACHINERY.filter(m => m.category === formData.category);

  const getCategoryDisplayName = (slug: string) => {
    if (slug === 'metalapstrade') return t.categories.names.metalapstrade;
    if (slug === 'lazera-griesana') return t.categories.names['lazera-griesana'];
    if (slug === 'cnc-iekartas') return t.categories.names['cnc-iekartas'];
    if (slug === 'automatizacija') return t.categories.names.automatizacija;
    const found = primaryCategories.find(c => c.urlSlug === slug || c.id === slug);
    return found ? found.name : slug;
  };

  const handleCategorySelect = (categorySlug: string) => {
    setFormData(prev => ({
      ...prev,
      category: categorySlug,
      machine: '',
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', phone: '', category: '', machine: '', message: '' });
    }, 5000);
  };

  return (
    <div id="contact-page" className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[360px] max-h-[480px] w-full bg-zinc-950 overflow-hidden flex items-center justify-center pt-20 border-b border-zinc-800">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="/hero_kontakti.jpg" 
            alt="UPWORX Technology Center" 
            className="w-full h-full object-cover select-none"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/25"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30"></div>
        </div>
        <div className="container mx-auto px-6 sm:px-8 lg:px-16 xl:px-20 relative z-10 text-white flex items-center justify-start">
          <div className="max-w-3xl text-left">
            <h1 className="text-3xl sm:text-4xl md:text-[42px] lg:text-[48px] font-black mb-5 leading-[1.15] tracking-tight uppercase">
              {cp.heroTitle} <br />
              <span className="text-teal-custom">{cp.heroHighlight}</span>
            </h1>
            <p className="text-sm sm:text-[15px] md:text-base lg:text-[17px] text-gray-200 max-w-2xl leading-relaxed font-normal">
              {cp.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-20 lg:mb-24 items-stretch">
          {/* Refined Contact Info Card */}
          <div className="lg:col-span-5 bg-zinc-50 border border-zinc-200/90 rounded-sm p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div>
              {/* Company Header */}
              <div className="border-b border-zinc-200 pb-5 mb-6">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <Building2 className="w-5 h-5 text-teal-custom shrink-0" />
                  <h3 className="text-xl sm:text-2xl font-black text-zinc-950 uppercase tracking-tight">{cp.companyName}</h3>
                </div>
                <p className="text-xs font-bold text-teal-custom uppercase tracking-wider pl-7.5">
                  {cp.regNumber}
                </p>
              </div>

              {/* Contact Details List */}
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-sm bg-teal-custom/10 text-teal-custom flex items-center justify-center shrink-0 mt-0.5 border border-teal-custom/20">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest mb-1">{cp.officeAddressTitle}</h4>
                    <p className="text-[15px] font-bold text-zinc-900 leading-snug">
                      {cp.officeAddressValue}
                    </p>
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=O%C5%A1u+ce%C4%BC%C5%A1+11B,+Jelgava,+LV-3003"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-bold text-teal-custom hover:text-teal-700 mt-1 transition-colors"
                    >
                      <span>{cp.openGoogleMaps}</span>
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-sm bg-teal-custom/10 text-teal-custom flex items-center justify-center shrink-0 mt-0.5 border border-teal-custom/20">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest mb-1">{cp.phoneTitle}</h4>
                    <a 
                      href="tel:+37126474339" 
                      className="text-[16px] font-bold text-zinc-900 hover:text-teal-custom transition-colors block leading-snug"
                    >
                      +371 26474339
                    </a>
                    <span className="text-xs text-zinc-600 font-medium">{cp.phoneNote}</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-sm bg-teal-custom/10 text-teal-custom flex items-center justify-center shrink-0 mt-0.5 border border-teal-custom/20">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest mb-1">{cp.emailTitle}</h4>
                    <a 
                      href="mailto:info@upworx.lv" 
                      className="text-[15px] font-bold text-teal-custom hover:text-teal-700 transition-colors block leading-snug"
                    >
                      info@upworx.lv
                    </a>
                    <span className="text-xs text-zinc-600 font-medium">{cp.emailNote}</span>
                  </div>
                </div>

                {/* Working hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-sm bg-teal-custom/10 text-teal-custom flex items-center justify-center shrink-0 mt-0.5 border border-teal-custom/20">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest mb-1">{cp.hoursTitle}</h4>
                    <p className="text-[14px] font-bold text-zinc-900 leading-snug">
                      {cp.hoursWeekdays}
                    </p>
                    <p className="text-xs text-zinc-600 font-medium mt-0.5">
                      {cp.hoursWeekend}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick helper note */}
            <div className="mt-8 pt-5 border-t border-zinc-200 text-xs text-zinc-600">
              {cp.accessNote}
            </div>
          </div>

          {/* Real Interactive Map focused on Jelgava address */}
          <div className="lg:col-span-7 relative bg-zinc-950 overflow-hidden rounded-sm border border-zinc-200/80 shadow-md min-h-[400px] sm:min-h-[480px]">
            <iframe
              title="UPWORX Atrašanās vieta - Ošu ceļš 11B, Jelgava"
              src="https://maps.google.com/maps?q=O%C5%A1u%20ce%C4%BC%C5%A1%2011B,%20Jelgava,%20LV-3003&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Corner address badge overlay */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 bg-zinc-950/90 backdrop-blur-sm border border-white/15 px-3.5 py-2.5 rounded-sm shadow-xl text-white max-w-[90%]">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="w-2 h-2 rounded-full bg-teal-custom animate-pulse shrink-0"></span>
                <span className="text-[12px] sm:text-[13px] font-bold uppercase tracking-wider text-white">
                  {cp.mapBadge}
                </span>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=O%C5%A1u+ce%C4%BC%C5%A1+11B,+Jelgava,+LV-3003"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-bold text-teal-custom hover:text-teal-300 uppercase tracking-wider transition-colors inline-flex items-center ml-4"
              >
                <span>{cp.openFullMap}</span>
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Consultation Form */}
        <div id="contact-form" className="w-full max-w-[calc(560px+2.5cm)] mx-auto bg-teal-custom p-7 sm:p-10 lg:py-14 lg:px-11 rounded-sm shadow-2xl scroll-mt-28">
          <div>
            <h3 className="text-white text-2xl sm:text-3xl font-black uppercase mb-3 tracking-tight">
              {cp.formTitle}
            </h3>
            <p className="text-white/90 text-sm sm:text-base mb-8 font-normal">
              {cp.formSubtitle}
            </p>
            {formSubmitted ? (
              <div className="bg-white text-zinc-900 p-8 rounded shadow-lg text-center">
                <p className="font-bold text-xl mb-2 text-teal-custom">{cp.successTitle}</p>
                <p className="text-sm text-zinc-700">{cp.successDesc}</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div>
                  <label htmlFor="contact-page-name" className="block text-white text-[11px] font-bold uppercase tracking-widest mb-2">
                    {cp.nameLabel}
                  </label>
                  <input 
                    type="text" 
                    id="contact-page-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white text-zinc-900 placeholder-zinc-400 border border-white px-4 py-3.5 font-medium focus:outline-none focus:ring-2 focus:ring-black shadow-sm transition-all text-sm" 
                    placeholder={cp.namePlaceholder} 
                  />
                </div>
                <div>
                  <label htmlFor="contact-page-email" className="block text-white text-[11px] font-bold uppercase tracking-widest mb-2">
                    {cp.emailLabel}
                  </label>
                  <input 
                    type="email" 
                    id="contact-page-email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white text-zinc-900 placeholder-zinc-400 border border-white px-4 py-3.5 font-medium focus:outline-none focus:ring-2 focus:ring-black shadow-sm transition-all text-sm" 
                    placeholder={cp.emailPlaceholder} 
                  />
                </div>
                <div>
                  <label htmlFor="contact-page-phone" className="block text-white text-[11px] font-bold uppercase tracking-widest mb-2">
                    {cp.phoneLabel}
                  </label>
                  <input 
                    type="tel" 
                    id="contact-page-phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white text-zinc-900 placeholder-zinc-400 border border-white px-4 py-3.5 font-medium focus:outline-none focus:ring-2 focus:ring-black shadow-sm transition-all text-sm" 
                    placeholder={cp.phonePlaceholder} 
                  />
                </div>

                {/* Iekārtu kategorijas izvēlne */}
                <div>
                  <label htmlFor="contact-page-category" className="block text-white text-[11px] font-bold uppercase tracking-widest mb-2">
                    {cp.categoryLabel}
                  </label>
                  <select
                    id="contact-page-category"
                    value={formData.category}
                    onChange={(e) => handleCategorySelect(e.target.value)}
                    className="w-full bg-white text-zinc-900 border border-white px-4 py-3.5 font-medium focus:outline-none focus:ring-2 focus:ring-black shadow-sm transition-all text-sm cursor-pointer"
                  >
                    <option value="">{cp.categoryDefaultOption}</option>
                    {primaryCategories.map(cat => {
                      const slug = cat.urlSlug || cat.id;
                      return (
                        <option key={cat.id} value={slug}>
                          {getCategoryDisplayName(slug)}
                        </option>
                      );
                    })}
                  </select>
                </div>

                {/* Konkrētās iekārtas izvēlne */}
                <div>
                  <label htmlFor="contact-page-machine" className="block text-white text-[11px] font-bold uppercase tracking-widest mb-2">
                    {cp.machineLabel}
                  </label>
                  <select
                    id="contact-page-machine"
                    value={formData.machine}
                    onChange={(e) => setFormData({ ...formData, machine: e.target.value })}
                    disabled={!formData.category}
                    className={`w-full bg-white text-zinc-900 border border-white px-4 py-3.5 font-medium focus:outline-none focus:ring-2 focus:ring-black shadow-sm transition-all text-sm ${
                      !formData.category ? 'opacity-60 cursor-not-allowed bg-zinc-100' : 'cursor-pointer'
                    }`}
                  >
                    <option value="">
                      {formData.category ? cp.machineDefaultOption : cp.machineSelectCategoryFirst}
                    </option>
                    {availableMachines.map(machine => {
                      const locMachine = getLocalizedMachine(machine, language);
                      return (
                        <option key={machine.id} value={machine.name}>
                          {locMachine.name} ({locMachine.brand})
                        </option>
                      );
                    })}
                  </select>
                </div>

                {/* Galvenais aizpildāmais laukums: Jūsu ziņojums */}
                <div>
                  <label htmlFor="contact-page-message" className="block text-white text-[11px] font-bold uppercase tracking-widest mb-2">
                    {cp.messageLabel}
                  </label>
                  <textarea 
                    id="contact-page-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white text-zinc-900 placeholder-zinc-400 border border-white px-4 py-3.5 font-medium focus:outline-none focus:ring-2 focus:ring-black shadow-sm transition-all text-sm resize-y" 
                    placeholder={cp.messagePlaceholder}
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  id="submit-contact-page-form-btn"
                  className="w-full bg-zinc-900 hover:bg-black text-white font-bold py-4.5 uppercase tracking-widest transition-all cursor-pointer shadow-md text-sm"
                >
                  {cp.submitBtn}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

