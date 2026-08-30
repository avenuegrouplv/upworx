import React, { useState, useEffect } from 'react';

interface ContactPageProps {
  initialMachineName?: string | null;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialMachineName }) => {
  const [phone, setPhone] = useState('');
  const [machineInterest, setMachineInterest] = useState(initialMachineName || '');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialMachineName) {
      setMachineInterest(initialMachineName);
    }
  }, [initialMachineName]);

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setPhone('');
    }, 5000);
  };

  return (
    <div id="contact-page" className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Page Header */}
        <div className="mb-20">
          <p className="text-teal-custom font-bold uppercase tracking-[0.3em] text-xs mb-4">Sazināsimies</p>
          <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-8 text-zinc-900">
            KONTAKTI UN <span className="text-teal-custom">ATBALSTS</span>
          </h1>
          <div className="h-1 w-24 bg-teal-custom"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">
          {/* Info Cards */}
          <div className="space-y-12">
            <div>
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Mūsu birojs</h3>
              <p className="text-2xl font-bold uppercase leading-tight text-zinc-900">Rūpniecības iela 102,<br />Rīga, LV-1010</p>
            </div>
            <div>
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Tiešā saziņa</h3>
              <p className="text-2xl font-bold uppercase mb-2 text-zinc-900">+371 2000 0000</p>
              <p className="text-xl font-medium text-teal-custom">info@upworx.lv</p>
            </div>
            <div>
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Darba laiks</h3>
              <p className="text-lg font-bold uppercase text-zinc-900">Pirmdiena - Piektdiena</p>
              <p className="text-lg text-gray-600">08:30 - 17:30</p>
            </div>
          </div>

          {/* Local Map Layout with Direct Navigation Link */}
          <div className="lg:col-span-2 relative h-[500px] bg-zinc-950 overflow-hidden rounded-sm border border-zinc-200/80 shadow-xl flex flex-col justify-between p-8 sm:p-12 text-white">
            {/* Background Map Schematics (Pure SVG Vector Grid) */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                  </pattern>
                  <pattern id="dot-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" fill="rgba(13,148,136,0.35)" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="#09090b" />
                <rect width="100%" height="100%" fill="url(#grid)" />
                <rect width="100%" height="100%" fill="url(#dot-grid)" />
                {/* Stylized Riga Street Lines */}
                <path d="M -50 180 Q 300 220 800 120 T 1400 300" fill="none" stroke="rgba(13,148,136,0.4)" strokeWidth="3" />
                <path d="M 100 -20 L 350 600" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeDasharray="6,6" />
                <path d="M 600 -50 L 520 600" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="2" />
                <path d="M -20 380 L 1200 420" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
                {/* Location Marker Pin Area */}
                <circle cx="480" cy="260" r="45" fill="rgba(13,148,136,0.15)" />
                <circle cx="480" cy="260" r="80" fill="none" stroke="rgba(13,148,136,0.2)" strokeWidth="1" strokeDasharray="4,4" />
              </svg>
            </div>

            {/* Top Status */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="inline-flex items-center bg-zinc-900/90 border border-teal-custom/30 px-3.5 py-1.5 rounded-sm text-xs font-bold text-teal-custom uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-teal-custom mr-2 animate-pulse"></span>
                Lokālā karte · Rīga, Latvija
              </div>
              <span className="text-[11px] font-semibold text-zinc-500 uppercase tracking-widest hidden sm:inline-block">56.9744° N, 24.1086° E</span>
            </div>

            {/* Center Landmark Card */}
            <div className="relative z-10 max-w-md bg-zinc-900/95 border border-white/10 p-6 sm:p-8 backdrop-blur-md shadow-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-custom/10 border border-teal-custom flex items-center justify-center text-teal-custom shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-black text-xl uppercase tracking-tight text-white mb-1">UPWORX LATVIA HQ</h3>
                  <p className="text-sm text-zinc-300 font-medium">Rūpniecības iela 102, Rīga, LV-1010</p>
                  <p className="text-xs text-zinc-500 mt-1">Birojs, noliktava un aprīkojuma demonstrāciju zāle</p>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-white/10">
              <p className="text-xs text-zinc-400">
                Ērta piekļuve ar auto un kravas transportu. Pieejama bezmaksas autostāvvieta.
              </p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=R%C5%ABpniec%C4%ABbas+iela+102,+R%C4%ABga,+Latvija"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-custom hover:bg-teal-600 text-zinc-950 hover:text-white px-6 py-3.5 text-xs font-bold uppercase tracking-widest transition-all rounded-sm flex items-center shrink-0 shadow-lg shadow-teal-950/50"
              >
                <span>Atvērt Google Maps</span>
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Callback Section */}
        <div className="bg-zinc-950 p-12 lg:p-24 flex flex-col lg:flex-row items-center gap-16 shadow-2xl relative overflow-hidden rounded-sm">
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-custom/5 -mr-32 -mt-32 rounded-full blur-3xl"></div>
          
          <div className="lg:w-1/2">
            <h2 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter mb-8 leading-tight">
              NEVĒLATIES <span className="text-teal-custom">GAIDĪT?</span>
            </h2>
            <p className="text-gray-400 text-xl leading-relaxed">
              Ievadiet savu tālruņa numuru, un mūsu speciālists sazināsies ar Jums 15 minūšu laikā darba laika ietvaros.
            </p>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-white p-10 lg:p-12 shadow-xl rounded-sm">
              <h3 className="text-black text-2xl font-bold uppercase mb-2">Lūdzu piezvaniet man</h3>
              {machineInterest && (
                <p className="text-xs text-teal-custom font-bold uppercase tracking-wider mb-6">
                  Interesējošā iekārta: <span className="text-zinc-900 font-extrabold">{machineInterest}</span>
                </p>
              )}
              {submitted ? (
                <div className="bg-teal-50 border border-teal-custom text-teal-900 p-6 rounded text-center">
                  <p className="font-bold text-lg mb-1">Paldies par pieteikumu!</p>
                  <p className="text-sm text-gray-700">Mūsu inženieru komanda sazināsies ar Jums tuvāko 15 minūšu laikā.</p>
                </div>
              ) : (
                <form onSubmit={handleCallbackSubmit} className="space-y-6">
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">+371</span>
                    <input 
                      type="tel" 
                      id="callback-phone-input"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="w-full bg-gray-50 border-2 border-gray-100 px-16 py-5 text-black font-bold focus:outline-none focus:border-teal-custom transition-colors" 
                      placeholder="20 000 000"
                    />
                  </div>
                  <button 
                    type="submit"
                    id="submit-callback-btn"
                    className="w-full bg-teal-custom hover:bg-teal-600 text-white font-black py-5 uppercase tracking-widest transition-all shadow-lg shadow-teal-900/20 flex items-center justify-center group cursor-pointer"
                  >
                    PIETEIKT ATZVANU
                    <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
                    </svg>
                  </button>
                  <p className="text-[10px] text-gray-400 text-center uppercase tracking-tighter">
                    Mēs garantējam Jūsu datu drošību un privātumu.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
