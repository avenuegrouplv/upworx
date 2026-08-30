
import React from 'react';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Page Header */}
        <div className="mb-20">
          <p className="text-teal-custom font-bold uppercase tracking-[0.3em] text-xs mb-4">Sazināsimies</p>
          <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-8">
            KONTAKTI UN <span className="text-teal-custom">ATBALSTS</span>
          </h1>
          <div className="h-1 w-24 bg-teal-custom"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">
          {/* Info Cards */}
          <div className="space-y-12">
            <div>
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Mūsu birojs</h3>
              <p className="text-2xl font-bold uppercase leading-tight">Rūpniecības iela 102,<br />Rīga, LV-1010</p>
            </div>
            <div>
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Tiešā saziņa</h3>
              <p className="text-2xl font-bold uppercase mb-2">+371 2000 0000</p>
              <p className="text-xl font-medium text-teal-custom">info@upworx.lv</p>
            </div>
            <div>
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Darba laiks</h3>
              <p className="text-lg font-bold uppercase">Pirmdiena - Piektdiena</p>
              <p className="text-lg text-gray-600">08:30 - 17:30</p>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="lg:col-span-2 relative h-[500px] bg-zinc-100 overflow-hidden group">
            <div 
              className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-1000"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200")' }}
            ></div>
            <div className="absolute inset-0 bg-teal-custom/10"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black text-white p-10 shadow-2xl transform group-hover:scale-105 transition-transform">
                <p className="font-black text-xl mb-2">UPWORX LATVIA HQ</p>
                <p className="text-xs text-teal-custom uppercase font-bold tracking-widest">Atvērt kartē</p>
              </div>
            </div>
          </div>
        </div>

        {/* Callback Section */}
        <div className="bg-zinc-950 p-12 lg:p-24 flex flex-col lg:flex-row items-center gap-16 shadow-2xl relative overflow-hidden">
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
            <div className="bg-white p-10 lg:p-12 shadow-xl">
              <h3 className="text-black text-2xl font-bold uppercase mb-8">Lūdzu piezvaniet man</h3>
              <form className="space-y-6">
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">+371</span>
                  <input 
                    type="tel" 
                    className="w-full bg-gray-50 border-2 border-gray-100 px-16 py-5 text-black font-bold focus:outline-none focus:border-teal-custom transition-colors" 
                    placeholder="20 000 000"
                  />
                </div>
                <button className="w-full bg-teal-custom hover:bg-teal-600 text-white font-black py-5 uppercase tracking-widest transition-all shadow-lg shadow-teal-900/20 flex items-center justify-center group">
                  PIETEIKT ATZVANU
                  <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
                  </svg>
                </button>
                <p className="text-[10px] text-gray-400 text-center uppercase tracking-tighter">
                  Mēs garantējam Jūsu datu drošību un privātumu.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
