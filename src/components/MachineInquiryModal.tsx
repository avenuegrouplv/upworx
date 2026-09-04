import React, { useState } from 'react';
import { X, CheckCircle2, Send, ShieldCheck } from 'lucide-react';
import { MachineItem } from '../data/machineryData';

interface MachineInquiryModalProps {
  machine: MachineItem;
  isOpen: boolean;
  onClose: () => void;
}

export const MachineInquiryModal: React.FC<MachineInquiryModalProps> = ({ machine, isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: `Labdien! Vēlos saņemt tehnisko piedāvājumu un cenu iekārtai ${machine.brand} ${machine.model}.`
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div 
      id="inquiry-modal-backdrop" 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={handleClose}
    >
      <div 
        id="inquiry-modal-content"
        className="bg-white border border-zinc-200 rounded-sm shadow-2xl max-w-xl w-full p-6 sm:p-8 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button 
          onClick={handleClose}
          aria-label="Aizvērt"
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
              Pieprasījums nosūtīts!
            </h3>
            <p className="text-sm text-zinc-600 max-w-md mx-auto leading-relaxed">
              Paldies par interesi par <strong className="text-zinc-950">{machine.brand} {machine.model}</strong>. Mūsu industriālais konsultants sazināsies ar Jums tuvākās darba dienas laikā.
            </p>
            <div className="pt-4">
              <button
                onClick={handleClose}
                className="bg-zinc-900 hover:bg-teal-custom text-white px-8 py-3 text-xs font-bold uppercase tracking-widest rounded-sm transition-colors cursor-pointer"
              >
                Aizvērt logu
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <p className="text-[11px] font-bold text-teal-custom uppercase tracking-widest mb-1">
                Piedāvājuma pieprasījums
              </p>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-zinc-900">
                {machine.brand} {machine.model}
              </h3>
              <p className="text-xs text-zinc-500 mt-1">
                Aizpildiet formu, lai saņemtu precīzu konfigurācijas un cenas piedāvājumu.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Automātiski aizpildītais iekārtas nosaukums */}
              <div>
                <label className="block text-zinc-700 text-[11px] font-bold uppercase tracking-wider mb-1.5">
                  Iekārta
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
                    Vārds *
                  </label>
                  <input 
                    id="inquiry-name"
                    type="text" 
                    required 
                    placeholder="Jānis Bērziņš"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border border-zinc-300 focus:border-teal-custom focus:ring-1 focus:ring-teal-custom text-zinc-900 px-4 py-2.5 text-sm rounded-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="inquiry-company" className="block text-zinc-700 text-[11px] font-bold uppercase tracking-wider mb-1.5">
                    Uzņēmums *
                  </label>
                  <input 
                    id="inquiry-company"
                    type="text" 
                    required 
                    placeholder="SIA Metālmeistars"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-white border border-zinc-300 focus:border-teal-custom focus:ring-1 focus:ring-teal-custom text-zinc-900 px-4 py-2.5 text-sm rounded-sm outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="inquiry-email" className="block text-zinc-700 text-[11px] font-bold uppercase tracking-wider mb-1.5">
                    E-pasts *
                  </label>
                  <input 
                    id="inquiry-email"
                    type="email" 
                    required 
                    placeholder="janis@uznemums.lv"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-zinc-300 focus:border-teal-custom focus:ring-1 focus:ring-teal-custom text-zinc-900 px-4 py-2.5 text-sm rounded-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="inquiry-phone" className="block text-zinc-700 text-[11px] font-bold uppercase tracking-wider mb-1.5">
                    Tālrunis *
                  </label>
                  <input 
                    id="inquiry-phone"
                    type="tel" 
                    required 
                    placeholder="+371 20000000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white border border-zinc-300 focus:border-teal-custom focus:ring-1 focus:ring-teal-custom text-zinc-900 px-4 py-2.5 text-sm rounded-sm outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="inquiry-message" className="block text-zinc-700 text-[11px] font-bold uppercase tracking-wider mb-1.5">
                  Ziņa
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
                  <span>Nosūtīt pieprasījumu</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-zinc-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-custom" />
                <span>Dati ir aizsargāti un tiks izmantoti tikai piedāvājuma sagatavošanai</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
