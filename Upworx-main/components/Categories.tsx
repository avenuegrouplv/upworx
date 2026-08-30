
import React from 'react';

interface CategoryCardProps {
  title: string;
  image: string;
  count: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, image, count }) => (
  <div className="group relative h-[450px] overflow-hidden cursor-pointer">
    <div 
      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
      style={{ backgroundImage: `url(${image})` }}
    ></div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent group-hover:from-teal-900/80 transition-all duration-500"></div>
    <div className="absolute bottom-0 left-0 p-8 w-full transform transition-transform duration-500 group-hover:-translate-y-2">
      <div className="flex justify-between items-end">
        <div>
          <p className="text-teal-custom font-bold text-xs uppercase tracking-widest mb-2">{count} IEKĀRTAS</p>
          <h3 className="text-2xl font-black text-white uppercase tracking-tight leading-none">{title}</h3>
        </div>
        <div className="bg-white/10 group-hover:bg-teal-custom p-3 rounded-full transition-colors">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </div>
  </div>
);

export const Categories: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter text-gray-900 mb-6">
              IEKĀRTU <span className="text-teal-custom">KATALOGS</span>
            </h2>
            <div className="h-1 w-24 bg-teal-custom mb-6"></div>
            <p className="text-gray-600 leading-relaxed text-lg">
              Izvēlieties atbilstošo kategoriju, lai iepazītos ar mūsu plašo industriālo risinājumu klāstu. 
              Mēs piedāvājam tikai pārbaudītu ražotāju tehniku.
            </p>
          </div>
          <button className="border-b-2 border-teal-custom text-teal-custom font-bold uppercase tracking-widest text-sm py-2 hover:text-gray-900 hover:border-gray-900 transition-all">
            Apskatīt visus risinājumus
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <CategoryCard 
            title="Metālapstrāde" 
            image="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800" 
            count="12" 
          />
          <CategoryCard 
            title="Lāzera Griešana" 
            image="https://images.unsplash.com/photo-1565264317065-253ac0794939?auto=format&fit=crop&q=80&w=800" 
            count="08" 
          />
          <CategoryCard 
            title="CNC Iekārtas" 
            image="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=800" 
            count="24" 
          />
          <CategoryCard 
            title="Automatizācija" 
            image="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" 
            count="05" 
          />
        </div>
      </div>
    </section>
  );
};
