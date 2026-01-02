
import React from 'react';
import { Product } from '../types';

interface PhoneDetailsProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

const PhoneDetails: React.FC<PhoneDetailsProps> = ({ product, onClose, onAddToCart }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-slate-900 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] border border-white/10 shadow-2xl custom-scrollbar animate-in fade-in zoom-in duration-300">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 left-6 p-2 bg-white/5 hover:bg-white/10 rounded-xl text-white transition-all z-10"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Product Images - Reduced container width */}
          <div className="p-6 lg:p-12 bg-white/5 flex flex-col items-center gap-6">
            <div className="w-full max-w-[280px] aspect-square rounded-2xl overflow-hidden shadow-xl bg-slate-800">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-contain p-4"
              />
            </div>
            <div className="grid grid-cols-3 gap-3 w-full max-w-[280px]">
              {[1, 2, 3].map(i => (
                <div key={i} className="aspect-square rounded-xl bg-white/10 overflow-hidden cursor-pointer hover:border-indigo-500 border border-transparent transition-all p-2">
                  <img src={`https://picsum.photos/seed/phone${i}/200/200`} alt="Gallery" className="w-full h-full object-contain" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="p-8 lg:p-12 text-right">
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 text-[10px] font-bold mb-3">
              {product.brand}
            </span>
            <h2 className="text-3xl font-extrabold text-white mb-4 leading-tight">{product.name}</h2>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              {product.description}
            </p>

            <div className="flex items-center justify-end gap-3 mb-8">
              {product.oldPrice && (
                <span className="text-gray-500 line-through text-lg">{product.oldPrice} ر.س</span>
              )}
              <span className="text-3xl font-black text-white">{product.price} ر.س</span>
            </div>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <p className="text-gray-500 text-[10px] mb-0.5">المعالج</p>
                <p className="text-white font-bold text-xs">{product.specs.processor}</p>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <p className="text-gray-500 text-[10px] mb-0.5">الشاشة</p>
                <p className="text-white font-bold text-xs">{product.specs.screen}</p>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <p className="text-gray-500 text-[10px] mb-0.5">البطارية</p>
                <p className="text-white font-bold text-xs">{product.specs.battery}</p>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <p className="text-gray-500 text-[10px] mb-0.5">الكاميرا</p>
                <p className="text-white font-bold text-xs">{product.specs.camera}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button 
                onClick={() => onAddToCart(product)}
                className="flex-1 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all shadow-xl shadow-indigo-600/30 text-sm"
              >
                إضافة إلى السلة
              </button>
              <button className="px-6 py-3.5 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl border border-white/10 transition-all text-sm">
                مشاركة
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneDetails;
