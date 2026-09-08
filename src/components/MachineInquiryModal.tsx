import React, { useState } from 'react';
import { X, CheckCircle2, Send, ShieldCheck, PhoneCall, ExternalLink } from 'lucide-react';
import { MachineItem } from '../data/machineryData';
import { useLanguage } from '../context/LanguageContext';

interface MachineInquiryModalProps {
  machine: MachineItem;
  isOpen: boolean;
  onClose: () => void;
  onNavigateToContacts?: (machineName: string) => void;
}

export const MachineInquiryModal: React.FC<MachineInquiryModalProps> = ({ 
  machine, 
  isOpen, 
  onClose,
  onNavigateToContacts 
}) => {
  const { t } = useLanguage();
  const m = t.inquiryModal;

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: `${m.defaultMessagePrefix} ${machine.brand} ${machine.model}.`
  });
  const [submitted, setSubmitted] = useState(false);

  // Update default message if language or machine changes
  React.useEffect(() => {
    setFormData(prev => ({
      ...prev,
      message: `${m.defaultMessagePrefix} ${machine.brand} ${machine.model}.`
    }));
  }, [machine.brand, machine.model, m.defaultMessagePrefix]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  const handleOpenFullContacts = () => {
    handleClose();
    if (onNavigateToContacts) {
      onNavigateToContacts(machine.name);
    }
  };

  return (
    <div 
      id="inquiry-modal-backdrop" 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={handleClose}
    >
      <div 
        id="inquiry-modal-content"
        className="bg-white border border-zinc-200 rounded-sm shadow-2xl max-w-xl w-full p-6 sm:p-8 relative overflow-y-auto max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button 
          onClick={handleClose}
          aria-label={m.closeBtn}
          className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-900 p-2 rounded-sm transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-teal-50 text-teal-custom rounded-full flex items-center justify-center mx-auto border border-teal-custom/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tight text-zinc-900">
              {m.successTitle}
            </h3>
            <p className="text-sm text-zinc-600 max-w-md mx-auto leading-relaxed">
              {m.successDescPrefix} <strong className="text-zinc-950">{machine.brand} {machine.model}</strong>. {m.successDescSuffix}
            </p>
            <div className="pt-4">
              <button
                onClick={handleClose}
                className="bg-zinc-900 hover:bg-teal-custom text-white px-8 py-3 text-xs font-bold uppercase tracking-widest rounded-sm transition-colors cursor-pointer"
              >
                {m.closeBtn}
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <p className="text-[11px] font-bold text-teal-custom uppercase tracking-widest mb-1">
                {m.title}
              </p>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-zinc-900">
                {machine.brand} {machine.model}
              </h3>
              <p className="text-xs text-zinc-500 mt-1">
                {m.subtitle}
              </p>
            </div>

            {/* Quick Instant Call Banner */}
            <div className="mb-5 bg-teal-50 border border-teal-custom/25 p-3 rounded-sm flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-teal-custom text-white flex items-center justify-center shrink-0">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-zinc-600 uppercase tracking-wide">
                    {m.directCallPrompt}
                  </p>
                  <a 
                    href="tel:+37126474339" 
                    className="text-xs font-black text-teal-custom hover:underline"
                  >
                    +371 26474339 (Zvani un WhatsApp)
                  </a>
                </div>
              </div>
              {onNavigateToContacts && (
                <button
                  type="button"
                  onClick={handleOpenFullContacts}
                  className="text-[10px] font-bold uppercase tracking-wider text-zinc-600 hover:text-teal-custom inline-flex items-center gap-1 shrink-0 cursor-pointer"
                >
                  <ExternalLink className="w-3 h-3" />
                </button>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Automātiski aizpildītais iekārtas nosaukums */}
              <div>
                <label className="block text-zinc-700 text-[11px] font-bold uppercase tracking-wider mb-1.5">
                  {m.machineFieldLabel}
                </label>
                <input 
                  type="text" 
                  readOnly 
                  value={`${machine.brand} ${machine.model} (${machine.type})`}
                  className="w-full bg-zinc-100 border border-zinc-300 text-zinc-800 px-4 py-2.5 text-xs font-bold rounded-sm cursor-not-allowed select-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="inquiry-name" className="block text-zinc-700 text-[11px] font-bold uppercase tracking-wider mb-1.5">
                    {m.nameLabel}
                  </label>
                  <input 
                    id="inquiry-name"
                    type="text" 
                    required 
                    placeholder={m.namePlaceholder}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border border-zinc-300 focus:border-teal-custom focus:ring-1 focus:ring-teal-custom text-zinc-900 px-4 py-2.5 text-sm rounded-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="inquiry-company" className="block text-zinc-700 text-[11px] font-bold uppercase tracking-wider mb-1.5">
                    {m.companyLabel}
                  </label>
                  <input 
                    id="inquiry-company"
                    type="text" 
                    required 
                    placeholder={m.companyPlaceholder}
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-white border border-zinc-300 focus:border-teal-custom focus:ring-1 focus:ring-teal-custom text-zinc-900 px-4 py-2.5 text-sm rounded-sm outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="inquiry-email" className="block text-zinc-700 text-[11px] font-bold uppercase tracking-wider mb-1.5">
                    {m.emailLabel}
                  </label>
                  <input 
                    id="inquiry-email"
                    type="email" 
                    required 
                    placeholder={m.emailPlaceholder}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-zinc-300 focus:border-teal-custom focus:ring-1 focus:ring-teal-custom text-zinc-900 px-4 py-2.5 text-sm rounded-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="inquiry-phone" className="block text-zinc-700 text-[11px] font-bold uppercase tracking-wider mb-1.5">
                    {m.phoneLabel}
                  </label>
                  <input 
                    id="inquiry-phone"
                    type="tel" 
                    required 
                    placeholder={m.phonePlaceholder}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white border border-zinc-300 focus:border-teal-custom focus:ring-1 focus:ring-teal-custom text-zinc-900 px-4 py-2.5 text-sm rounded-sm outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="inquiry-message" className="block text-zinc-700 text-[11px] font-bold uppercase tracking-wider mb-1.5">
                  {m.messageLabel}
                </label>
                <textarea 
                  id="inquiry-message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white border border-zinc-300 focus:border-teal-custom focus:ring-1 focus:ring-teal-custom text-zinc-900 px-4 py-2.5 text-sm rounded-sm outline-none transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  id="submit-inquiry-modal-btn"
                  className="w-full bg-teal-custom hover:bg-teal-600 text-white py-3.5 px-6 text-xs font-bold uppercase tracking-widest rounded-sm transition-colors flex items-center justify-center gap-2 shadow-lg shadow-teal-900/20 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{m.submitBtn}</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-zinc-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-custom shrink-0" />
                <span>{m.securityNote}</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
