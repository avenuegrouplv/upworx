import React from 'react';

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
      id: 'automated-cutting',
      title: 'Metālapstrāde',
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800',
      count: '12'
    },
    {
      id: 'laser-profile',
      title: 'Lāzera Griešana',
      image: 'https://images.unsplash.com/photo-1565264317065-253ac0794939?auto=format&fit=crop&q=80&w=800',
      count: '08'
    },
    {
      id: 'heavy-duty',
      title: 'CNC Iekārtas',
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=800',
      count: '24'
    },
    {
      id: 'bevelling',
      title: 'Automatizācija',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
      count: '05'
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoriesList.map((cat) => (
            <div key={cat.id} className="flex flex-col">
              {/* Image Card without circular arrow */}
              <div 
                onClick={() => handleCategoryClickUnits(cat.id)}
                className="group relative h-[420px] overflow-hidden cursor-pointer rounded-sm"
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

              {/* Navigation button under the card matching site aesthetics */}
              <button
                onClick={() => handleCategoryClickUnits(cat.id)}
                className="mt-3 w-full bg-zinc-950 hover:bg-teal-custom text-white hover:text-zinc-950 font-bold uppercase tracking-wider text-xs py-4 px-5 transition-colors rounded-sm flex items-center justify-between border border-zinc-900 hover:border-teal-custom cursor-pointer shadow-sm"
              >
                <span>Uzzināt vairāk</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
