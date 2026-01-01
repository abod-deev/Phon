
import React from 'react';
import { CATEGORIES } from '../constants';
import { ViewState } from '../types';

interface CategoriesProps {
  onCategoryClick: (view: ViewState) => void;
}

const Categories: React.FC<CategoriesProps> = ({ onCategoryClick }) => {
  // خريطة لتحويل معرف الفئة إلى اسم العرض المناسب
  const categoryToView: Record<string, ViewState> = {
    'apple': 'iphone',
    'samsung': 'samsung',
    'xiaomi': 'xiaomi',
    'huawei': 'huawei'
  };

  return (
    <section className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-white">تسوق حسب الماركة</h2>
          <button className="text-indigo-400 font-semibold hover:text-indigo-300 transition-colors">عرض الكل</button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => (
            <div 
              key={cat.id} 
              onClick={() => onCategoryClick(categoryToView[cat.id])}
              className="group relative cursor-pointer overflow-hidden rounded-3xl bg-slate-800 border border-white/5 transition-all hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10"
            >
              <div className="aspect-[4/3] relative">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              </div>
              <div className="absolute bottom-6 right-6 text-right">
                <h3 className="text-2xl font-bold text-white mb-1">{cat.name}</h3>
                <p className="text-indigo-400 text-sm font-medium">{cat.count} منتج</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
