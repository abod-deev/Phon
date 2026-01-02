
import React from 'react';
import { CATEGORIES } from '../constants';
import { ViewState } from '../types';

interface CategoriesProps {
  onCategoryClick: (view: ViewState) => void;
}

const Categories: React.FC<CategoriesProps> = ({ onCategoryClick }) => {
  const categoryToView: Record<string, ViewState> = {
    'apple': 'iphone',
    'samsung': 'samsung',
    'xiaomi': 'xiaomi',
    'huawei': 'huawei'
  };

  return (
    <section className="py-12 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white">تسوق حسب الماركة</h2>
          <button className="text-indigo-400 text-sm font-semibold hover:text-indigo-300 transition-colors">عرض الكل</button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {CATEGORIES.map((cat) => (
            <div 
              key={cat.id} 
              onClick={() => onCategoryClick(categoryToView[cat.id])}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-slate-800 border border-white/5 transition-all hover:border-indigo-500/50 hover:shadow-lg"
            >
              {/* Reduced aspect ratio height */}
              <div className="aspect-[16/7] relative">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              </div>
              <div className="absolute bottom-3 right-4 text-right">
                <h3 className="text-lg font-bold text-white mb-0.5">{cat.name}</h3>
                <p className="text-indigo-400 text-[10px] font-medium">{cat.count} منتج</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
