import React, { useState } from 'react';
import { MACHINERY_CATEGORIES, ALL_MACHINERY } from '../data/machineryData';
import { useLanguage } from '../context/LanguageContext';
import { getLocalizedMachine } from '../i18n/machineryLocalization';

interface ContactSectionProps {
  onContactClick?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = () => {
  const { language, t } = useLanguage();
  const c = t.homeConsultation;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    machine: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', category: '', machine: '', message: '' });
    }, 5000);
  };

  return (
    <section id="consultation-section" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-zinc-900 rounded-sm overflow-hidden flex flex-col lg:flex-row items-stretch shadow-2xl">
          {/* Kreisā puse: Informācija */}
          <div className="flex-1 p-10 sm:p-12 lg:p-16 text-white flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl lg:text-[27px] xl:text-[32px] font-black uppercase mb-6 tracking-tight leading-snug">
              {c.title1} <br className="hidden lg:inline" />
              {c.title2} <br className="hidden lg:inline" />
              {c.title3}
            </h2>
            <p className="text-gray-300 text-base sm:text-lg mb-10 leading-relaxed max-w-xl">
              {c.description}
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-teal-custom/10 border border-teal-custom flex items-center justify-center text-teal-custom shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">{c.phoneLabel}</p>
                  <a href="tel:+37126474339" className="text-xl font-bold hover:text-teal-custom transition-colors block">
                    +371 26474339
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-teal-custom/10 border border-teal-custom flex items-center justify-center text-teal-custom shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">{c.emailLabel}</p>
                  <a href="mailto:info@upworx.lv" className="text-xl font-bold hover:text-teal-custom transition-colors block">
                    info@upworx.lv
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Labā puse: Kontaktu forma */}
          <div className="w-full lg:w-[calc(480px+2.5cm)] xl:w-[calc(500px+2.5cm)] shrink-0 bg-teal-custom p-8 sm:p-10 lg:py-14 lg:px-11 flex flex-col justify-center shadow-inner">
            <h3 className="text-white text-2xl font-bold uppercase mb-6 tracking-tight">
              {c.formTitle}
            </h3>
            {submitted ? (
              <div className="bg-white text-zinc-900 p-8 rounded shadow-lg text-center">
                <p className="font-bold text-xl mb-2 text-teal-custom">{c.successTitle}</p>
                <p className="text-sm text-zinc-700">{c.successDesc}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="consult-name" className="block text-white text-[11px] font-bold uppercase tracking-widest mb-1.5">
                    {c.nameLabel}
                  </label>
                  <input 
                    type="text" 
                    id="consult-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white text-zinc-900 placeholder-zinc-400 border border-white px-4 py-3 font-medium focus:outline-none focus:ring-2 focus:ring-black shadow-sm transition-all text-sm" 
                    placeholder={c.namePlaceholder} 
                  />
                </div>
                <div>
                  <label htmlFor="consult-email" className="block text-white text-[11px] font-bold uppercase tracking-widest mb-1.5">
                    {c.emailLabelInput}
                  </label>
                  <input 
                    type="email" 
                    id="consult-email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white text-zinc-900 placeholder-zinc-400 border border-white px-4 py-3 font-medium focus:outline-none focus:ring-2 focus:ring-black shadow-sm transition-all text-sm" 
                    placeholder={c.emailPlaceholder} 
                  />
                </div>
                <div>
                  <label htmlFor="consult-phone" className="block text-white text-[11px] font-bold uppercase tracking-widest mb-1.5">
                    {c.phoneLabelInput}
                  </label>
                  <input 
                    type="tel" 
                    id="consult-phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white text-zinc-900 placeholder-zinc-400 border border-white px-4 py-3 font-medium focus:outline-none focus:ring-2 focus:ring-black shadow-sm transition-all text-sm" 
                    placeholder={c.phonePlaceholder} 
                  />
                </div>

                {/* Iekārtu kategorijas izvēlne */}
                <div>
                  <label htmlFor="consult-category" className="block text-white text-[11px] font-bold uppercase tracking-widest mb-1.5">
                    {c.categoryLabel}
                  </label>
                  <select
                    id="consult-category"
                    value={formData.category}
                    onChange={(e) => handleCategorySelect(e.target.value)}
                    className="w-full bg-white text-zinc-900 border border-white px-4 py-3 font-medium focus:outline-none focus:ring-2 focus:ring-black shadow-sm transition-all text-sm cursor-pointer"
                  >
                    <option value="">{c.selectCategory}</option>
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
                  <label htmlFor="consult-machine" className="block text-white text-[11px] font-bold uppercase tracking-widest mb-1.5">
                    {c.machineLabel}
                  </label>
                  <select
                    id="consult-machine"
                    value={formData.machine}
                    onChange={(e) => setFormData({ ...formData, machine: e.target.value })}
                    disabled={!formData.category}
                    className={`w-full bg-white text-zinc-900 border border-white px-4 py-3 font-medium focus:outline-none focus:ring-2 focus:ring-black shadow-sm transition-all text-sm ${
                      !formData.category ? 'opacity-60 cursor-not-allowed bg-zinc-100' : 'cursor-pointer'
                    }`}
                  >
                    <option value="">
                      {formData.category ? c.selectMachine : c.selectCategoryFirst}
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
                  <label htmlFor="consult-message" className="block text-white text-[11px] font-bold uppercase tracking-widest mb-1.5">
                    {c.messageLabel}
                  </label>
                  <textarea 
                    id="consult-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white text-zinc-900 placeholder-zinc-400 border border-white px-4 py-3 font-medium focus:outline-none focus:ring-2 focus:ring-black shadow-sm transition-all text-sm resize-y" 
                    placeholder={c.messagePlaceholder}
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  id="submit-consultation-btn"
                  className="w-full bg-zinc-900 hover:bg-black text-white font-bold py-4 uppercase tracking-widest transition-all cursor-pointer shadow-md text-sm mt-2"
                >
                  {c.submitBtn}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

