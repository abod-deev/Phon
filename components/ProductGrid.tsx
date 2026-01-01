
import React from 'react';
import { Product } from '../types';

interface ProductGridProps {
  products: Product[];
  onProductClick: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, onProductClick, onAddToCart }) => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-white">أحدث الهواتف</h2>
          <div className="flex gap-2">
            <button className="p-2 bg-slate-800 rounded-lg text-gray-400 hover:text-white">فلترة</button>
            <button className="p-2 bg-slate-800 rounded-lg text-gray-400 hover:text-white">ترتيب</button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group bg-slate-900 rounded-[2.5rem] border border-white/5 overflow-hidden hover:border-indigo-500/30 transition-all hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              <div 
                className="aspect-square relative cursor-pointer overflow-hidden bg-white/5"
                onClick={() => onProductClick(product)}
              >
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {product.isOffer && (
                  <div className="absolute top-4 right-4 bg-rose-500 text-white text-xs font-bold px-3 py-1 rounded-full">خصم</div>
                )}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur text-white flex items-center justify-center hover:bg-white hover:text-slate-950 transition-all">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="p-8 text-right">
                <div className="flex items-center justify-end gap-1 mb-2">
                  <span className="text-amber-400 text-sm font-bold">{product.rating}</span>
                  <svg className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">{product.name}</h3>
                <div className="flex items-center justify-end gap-3 mb-6">
                  {product.oldPrice && (
                    <span className="text-gray-500 line-through text-sm">{product.oldPrice} ر.س</span>
                  )}
                  <span className="text-2xl font-black text-white">{product.price} ر.س</span>
                </div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onAddToCart(product);
                  }}
                  className="w-full py-4 bg-indigo-600/10 hover:bg-indigo-600 text-indigo-400 hover:text-white font-bold rounded-2xl border border-indigo-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                  أضف للسلة
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
