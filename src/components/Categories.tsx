import React from 'react';
import { ArrowUp } from 'lucide-react';

interface CategoryCardItem {
  id: string;
  title: string;
  image: string;
  count: string;
}

interface CategoriesProps {
  onViewAll?: () => void;
  onSelectCategory?: (categoryId: string) => void;
}

export const Categories: React.FC<CategoriesProps> = ({ onViewAll, onSelectCategory }) => {
  const categoriesList: CategoryCardItem[] = [
    {
      id: 'metalapstrade',
      title: 'Metālapstrāde',
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800',
      count: '4'
    },
    {
      id: 'lazera-griesana',
      title: 'Lāzera Griešana',
      image: 'https://images.unsplash.com/photo-1565264317065-253ac0794939?auto=format&fit=crop&q=80&w=800',
      count: '3'
    },
    {
      id: 'cnc-iekartas',
      title: 'CNC Iekārtas',
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=800',
      count: '5'
    },
    {
      id: 'automatizacija',
      title: 'Automatizācija',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
      count: '4'
    }
  ];

  const handleCategoryClickUnits = (categoryId: string) => {
    if (onSelectCategory) {
      onSelectCategory(categoryId);
    } else if (onViewAll) {
      onViewAll();
    }
  };

  return (
    <section id="categories-section" className="py-24 bg-white">
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
          <button 
            id="view-all-solutions-btn"
            onClick={onViewAll}
            className="border-b-2 border-teal-custom text-teal-custom font-bold uppercase tracking-widest text-sm py-2 hover:text-gray-900 hover:border-gray-900 transition-colors cursor-pointer"
          >
            Apskatīt visus risinājumus
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoriesList.map((cat) => (
            <div key={cat.id} className="flex flex-col group/item">
              {/* Image Card */}
              <div 
                onClick={() => handleCategoryClickUnits(cat.id)}
                className="group relative h-[420px] overflow-hidden cursor-pointer rounded-sm border border-zinc-200 hover:border-teal-custom/60 transition-colors"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${cat.image})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent group-hover:from-teal-950/80 transition-colors duration-500"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <p className="text-teal-custom font-bold text-xs uppercase tracking-widest mb-2">{cat.count} IEKĀRTAS</p>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight leading-tight">{cat.title}</h3>
                </div>
              </div>

              {/* Navigation button under the card: White, Gray, Teal Palette with upward arrow in round frame */}
              <button
                onClick={() => handleCategoryClickUnits(cat.id)}
                className="mt-3 w-full bg-zinc-50 hover:bg-white text-zinc-900 font-bold uppercase tracking-wider text-xs py-3.5 px-4 transition-all rounded-sm flex items-center justify-between border border-zinc-200 hover:border-teal-custom cursor-pointer shadow-sm group hover:shadow-md"
              >
                <span className="text-zinc-800 group-hover:text-teal-custom transition-colors font-extrabold">
                  Uzzināt vairāk
                </span>
                <span className="w-7 h-7 rounded-full bg-white group-hover:bg-teal-custom border border-zinc-300 group-hover:border-teal-custom text-zinc-700 group-hover:text-white flex items-center justify-center transition-all shrink-0 ml-2 shadow-xs">
                  <ArrowUp className="w-3.5 h-3.5" />
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
