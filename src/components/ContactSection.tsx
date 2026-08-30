import React, { useState } from 'react';

interface ContactSectionProps {
  onContactClick?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '' });
    }, 5000);
  };

  return (
    <section id="consultation-section" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-zinc-900 rounded-sm overflow-hidden flex flex-col lg:flex-row shadow-2xl">
          <div className="lg:w-1/2 p-12 lg:p-20 text-white flex flex-col justify-center">
            <h2 className="text-4xl lg:text-5xl font-black uppercase mb-8 tracking-tighter">
              GATAVI <span className="text-teal-custom">AUGT?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              Mūsu inženieri palīdzēs atrast piemērotāko risinājumu jūsu ražotnei. 
              Sazinieties ar mums jau šodien, lai saņemtu bezmaksas konsultāciju.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-teal-custom/10 border border-teal-custom flex items-center justify-center text-teal-custom shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Tālrunis</p>
                  <p className="text-xl font-bold">+371 2000 0000</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-teal-custom/10 border border-teal-custom flex items-center justify-center text-teal-custom shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">E-pasts</p>
                  <p className="text-xl font-bold">info@upworx.lv</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 bg-teal-custom p-12 lg:p-20">
            <h3 className="text-white text-2xl font-bold uppercase mb-8">Pieteikties konsultācijai</h3>
            {submitted ? (
              <div className="bg-black/30 border border-white/40 text-white p-8 rounded text-center">
                <p className="font-bold text-xl mb-2">Paldies par pieprasījumu!</p>
                <p className="text-sm text-white/90">Mūsu eksperts sazināsies ar Jums vienas darba dienas laikā.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="consult-name" className="block text-white/80 text-[10px] font-bold uppercase tracking-widest mb-2">Vārds, Uzvārds</label>
                  <input 
                    type="text" 
                    id="consult-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors" 
                    placeholder="Jūsu vārds" 
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="consult-email" className="block text-white/80 text-[10px] font-bold uppercase tracking-widest mb-2">E-pasts</label>
                    <input 
                      type="email" 
                      id="consult-email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/10 border border-white/20 px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors" 
                      placeholder="birojs@uznemums.lv" 
                    />
                  </div>
                  <div>
                    <label htmlFor="consult-phone" className="block text-white/80 text-[10px] font-bold uppercase tracking-widest mb-2">Tālrunis</label>
                    <input 
                      type="tel" 
                      id="consult-phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white/10 border border-white/20 px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors" 
                      placeholder="+371 ..." 
                    />
                  </div>
                </div>
                <button 
                  type="submit"
                  id="submit-consultation-btn"
                  className="w-full bg-zinc-900 hover:bg-black text-white font-bold py-5 uppercase tracking-widest transition-all cursor-pointer shadow-md"
                >
                  Nosūtīt Pieprasījumu
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
