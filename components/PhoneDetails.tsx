
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
      
      <div className="relative bg-slate-900 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[3rem] border border-white/10 shadow-2xl custom-scrollbar animate-in fade-in zoom-in duration-300">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-8 left-8 p-3 bg-white/5 hover:bg-white/10 rounded-2xl text-white transition-all z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Product Images */}
          <div className="p-8 lg:p-16 bg-white/5 flex flex-col gap-6">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="aspect-square rounded-2xl bg-white/10 overflow-hidden cursor-pointer hover:border-indigo-500 border border-transparent transition-all">
                  <img src={`https://picsum.photos/seed/phone${i}/200/200`} alt="Gallery" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="p-8 lg:p-16 text-right">
            <span className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold mb-4">
              {product.brand}
            </span>
            <h2 className="text-4xl font-extrabold text-white mb-6 leading-tight">{product.name}</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              {product.description}
            </p>

            <div className="flex items-center justify-end gap-4 mb-10">
              {product.oldPrice && (
                <span className="text-gray-500 line-through text-xl">{product.oldPrice} ر.س</span>
              )}
              <span className="text-4xl font-black text-white">{product.price} ر.س</span>
            </div>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 gap-4 mb-12">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                <p className="text-gray-500 text-sm mb-1">المعالج</p>
                <p className="text-white font-bold">{product.specs.processor}</p>
              </div>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                <p className="text-gray-500 text-sm mb-1">الشاشة</p>
                <p className="text-white font-bold">{product.specs.screen}</p>
              </div>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                <p className="text-gray-500 text-sm mb-1">البطارية</p>
                <p className="text-white font-bold">{product.specs.battery}</p>
              </div>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                <p className="text-gray-500 text-sm mb-1">الكاميرا</p>
                <p className="text-white font-bold">{product.specs.camera}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onAddToCart(product)}
                className="flex-1 py-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl transition-all shadow-xl shadow-indigo-600/30"
              >
                إضافة إلى السلة
              </button>
              <button className="px-8 py-5 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl border border-white/10 transition-all">
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
