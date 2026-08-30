
import React from 'react';

const ProductItem: React.FC<{ name: string; brand: string; img: string }> = ({ name, brand, img }) => (
  <div className="bg-gray-50 p-6 group cursor-pointer transition-all hover:shadow-2xl hover:-translate-y-1">
    <div className="relative mb-8 overflow-hidden h-64 flex items-center justify-center">
      <img src={img} alt={name} className="max-h-full group-hover:scale-110 transition-transform duration-500" />
      <div className="absolute top-0 right-0 bg-white shadow-sm px-3 py-1">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{brand}</span>
      </div>
    </div>
    <div className="border-t border-gray-200 pt-6">
      <h4 className="text-xl font-bold uppercase mb-2 group-hover:text-teal-custom transition-colors">{name}</h4>
      <p className="text-sm text-gray-500 mb-6 uppercase tracking-wider">Augstas precizitātes apstrādes centrs</p>
      <div className="flex justify-between items-center">
        <span className="text-teal-custom font-bold text-sm tracking-widest uppercase group-hover:underline underline-offset-4">Specifikācija</span>
        <button className="bg-gray-900 group-hover:bg-teal-custom text-white p-2 rounded-sm transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
    </div>
  </div>
);

export const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <p className="text-teal-custom font-bold uppercase tracking-widest text-xs mb-4">Mūsu lepnums</p>
          <h2 className="text-4xl font-black uppercase tracking-tighter">JAUNĀKIE <span className="text-teal-custom">PIEDĀVĀJUMI</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductItem 
            name="Alpha Precision X-500" 
            brand="DMG MORI" 
            img="https://images.unsplash.com/photo-1590950751299-1426691ec50e?auto=format&fit=crop&q=80&w=400" 
          />
          <ProductItem 
            name="LaserCut Pro Infinity" 
            brand="TRUMPF" 
            img="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=400" 
          />
          <ProductItem 
            name="CNC Master-H" 
            brand="MAZAK" 
            img="https://images.unsplash.com/photo-1565264317065-253ac0794939?auto=format&fit=crop&q=80&w=400" 
          />
        </div>

        <div className="mt-16 text-center">
            <button className="bg-gray-900 hover:bg-black text-white px-12 py-5 text-xs font-bold uppercase tracking-widest transition-all rounded-sm">
                Apskatīt Visas Iekārtas (45+)
            </button>
        </div>
      </div>
    </section>
  );
};
