import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

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
  const { t } = useLanguage();
  const c = t.categories;

  const categoriesList: CategoryCardItem[] = [
    {
      id: 'metalapstrade',
      title: c.metalworking,
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800',
      count: '4'
    },
    {
      id: 'lazera-griesana',
      title: c.laserCutting,
      image: 'https://images.pexels.com/photos/224924/pexels-photo-224924.jpeg?auto=compress&cs=tinysrgb&w=800',
      count: '4'
    },
    {
      id: 'cnc-iekartas',
      title: c.cncEquipment,
      image: 'https://images.pexels.com/photos/3846554/pexels-photo-3846554.jpeg?auto=compress&cs=tinysrgb&w=800',
      count: '4'
    },
    {
      id: 'automatizacija',
      title: c.automation,
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
    <section id="categories-section" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-10 sm:mb-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter text-gray-900 mb-4">
              {c.catalogTitle1} <span className="text-teal-custom">{c.catalogTitle2}</span>
            </h2>
            <div className="h-1 w-24 bg-teal-custom mb-5"></div>
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
              {c.subtitle}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoriesList.map((cat) => (
            <div key={cat.id} className="flex flex-col group/item">
              {/* Image Card with subtle frame and shadow on hover */}
              <div 
                onClick={() => handleCategoryClickUnits(cat.id)}
                className="group relative h-[420px] overflow-hidden cursor-pointer rounded-sm border border-zinc-200 hover:border-teal-custom hover:shadow-xl hover:ring-1 hover:ring-teal-custom/60 transition-all duration-300"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${cat.image})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent group-hover:from-teal-950/80 transition-colors duration-500"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <p className="text-teal-custom font-bold text-xs uppercase tracking-widest mb-2">{cat.count} {c.machinesLabel}</p>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight leading-tight">{cat.title}</h3>
                </div>
              </div>

              {/* Navigation button under the card: Distinct background, expressive border & round contour around bold arrow */}
              <button
                onClick={() => handleCategoryClickUnits(cat.id)}
                className="mt-3 w-full bg-zinc-100 hover:bg-zinc-200/80 text-zinc-900 border border-zinc-400 hover:border-teal-custom font-bold uppercase tracking-wider text-xs py-3 px-4 rounded-sm flex items-center justify-center transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md"
              >
                <span>{c.viewCategory}</span>
                <span className="w-7 h-7 rounded-full border border-teal-custom text-teal-custom flex items-center justify-center ml-2.5 shrink-0">
                  <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2.8} />
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

