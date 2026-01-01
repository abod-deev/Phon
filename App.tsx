
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProductGrid from './components/ProductGrid';
import PhoneDetails from './components/PhoneDetails';
import Comparison from './components/Comparison';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { Product, ViewState } from './types';
import { PRODUCTS } from './constants';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartCount, setCartCount] = useState(0);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = (product: Product) => {
    setCartCount(prev => prev + 1);
  };

  const closeDetails = () => setSelectedProduct(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const renderBrandPage = (brandName: string, brandKey: string) => {
    // تصفية المنتجات حسب الماركة واختيار 5 هواتف كحد أقصى كما هو مطلوب
    const brandProducts = PRODUCTS
      .filter(p => p.brand.toLowerCase() === brandKey.toLowerCase())
      .slice(0, 5);

    return (
      <div className="pt-32 pb-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-right">
          <div className="flex items-center gap-4 mb-4">
             <button 
               onClick={() => setCurrentView('home')}
               className="p-2 bg-white/5 hover:bg-white/10 rounded-xl text-gray-400 hover:text-white transition-all"
             >
               <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
               </svg>
             </button>
             <h1 className="text-5xl font-black text-white">هواتف {brandName}</h1>
          </div>
          <p className="text-gray-400 text-xl">أفضل 5 هواتف مختارة من {brandName} متوفرة لدينا الآن.</p>
          <div className="h-1.5 w-24 bg-indigo-600 rounded-full mt-6"></div>
        </div>
        <ProductGrid 
          products={brandProducts} 
          onProductClick={handleProductClick} 
          onAddToCart={handleAddToCart}
        />
        {brandProducts.length === 0 && (
          <div className="text-center py-20 text-gray-500">لا توجد منتجات متوفرة حالياً لهذه الماركة.</div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar 
        currentView={currentView} 
        onNavigate={setCurrentView} 
        cartCount={cartCount} 
      />

      <main>
        {currentView === 'home' && (
          <>
            <Hero />
            <Categories onCategoryClick={setCurrentView} />
            <div className="max-w-7xl mx-auto px-4 pt-20">
              <h2 className="text-3xl font-bold text-white mb-2">مقترحاتنا لك</h2>
              <div className="h-1 w-20 bg-indigo-600 rounded-full mb-8"></div>
            </div>
            <ProductGrid 
              products={PRODUCTS.slice(0, 8)} 
              onProductClick={handleProductClick} 
              onAddToCart={handleAddToCart}
            />
            <Testimonials />
          </>
        )}

        {currentView === 'comparison' && (
          <div className="pt-20">
            <Comparison />
          </div>
        )}

        {currentView === 'offers' && (
          <div className="pt-32 pb-20 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 text-center mb-16">
              <h2 className="text-5xl font-black text-white mb-4">أقوى العروض الحصرية</h2>
              <p className="text-gray-400 text-xl italic">خصومات تصل إلى 30% على هواتف مختارة</p>
            </div>
            <ProductGrid 
              products={PRODUCTS.filter(p => p.isOffer || p.oldPrice)} 
              onProductClick={handleProductClick} 
              onAddToCart={handleAddToCart}
            />
          </div>
        )}

        {/* Brand Pages */}
        {currentView === 'iphone' && renderBrandPage('آيفون', 'Apple')}
        {currentView === 'samsung' && renderBrandPage('سامسونج', 'Samsung')}
        {currentView === 'xiaomi' && renderBrandPage('شاومي', 'Xiaomi')}
        {currentView === 'huawei' && renderBrandPage('هواوي', 'Huawei')}
      </main>

      {/* Overlays */}
      {selectedProduct && (
        <PhoneDetails 
          product={selectedProduct} 
          onClose={closeDetails} 
          onAddToCart={handleAddToCart}
        />
      )}

      <Footer />
    </div>
  );
};

export default App;
