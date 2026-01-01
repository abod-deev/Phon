
import React, { useState } from 'react';
import { ViewState } from '../types';

interface NavbarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
  cartCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate, cartCount }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBrandsOpen, setIsBrandsOpen] = useState(false);

  const navLinks = [
    { name: 'الرئيسية', view: 'home' as ViewState },
    { name: 'المقارنات', view: 'comparison' as ViewState },
    { name: 'العروض', view: 'offers' as ViewState },
  ];

  const brandLinks = [
    { name: 'آيفون', view: 'iphone' as ViewState },
    { name: 'سامسونج', view: 'samsung' as ViewState },
    { name: 'شاومي', view: 'xiaomi' as ViewState },
    { name: 'هواوي', view: 'huawei' as ViewState },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="flex-shrink-0 cursor-pointer flex items-center gap-2"
            onClick={() => onNavigate('home')}
          >
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-white">فون<span className="text-indigo-500">زون</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="mr-10 flex items-center space-x-8 space-x-reverse">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => onNavigate(link.view)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentView === link.view 
                    ? 'text-indigo-400' 
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              
              {/* Brands Dropdown */}
              <div className="relative">
                <button 
                  onMouseEnter={() => setIsBrandsOpen(true)}
                  className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    ['iphone','samsung','xiaomi','huawei'].includes(currentView)
                    ? 'text-indigo-400' 
                    : 'text-gray-300 hover:text-white'
                  }`}
                >
                  الهواتف
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isBrandsOpen && (
                  <div 
                    onMouseLeave={() => setIsBrandsOpen(false)}
                    className="absolute top-full right-0 mt-2 w-48 bg-slate-900 border border-white/10 rounded-2xl shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                  >
                    {brandLinks.map((brand) => (
                      <button
                        key={brand.name}
                        onClick={() => {
                          onNavigate(brand.view);
                          setIsBrandsOpen(false);
                        }}
                        className="block w-full text-right px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        {brand.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <div className="relative group cursor-pointer p-2 hover:bg-white/5 rounded-full transition-all">
              <svg className="w-6 h-6 text-gray-300 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-indigo-600 rounded-full">
                  {cartCount}
                </span>
              )}
            </div>
            
            <button className="hidden sm:block px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl transition-all shadow-lg shadow-indigo-600/20 active:scale-95">
              تسجيل الدخول
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-400 hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-white/5 px-2 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => {
                onNavigate(link.view);
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-right px-3 py-4 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              {link.name}
            </button>
          ))}
          <div className="border-t border-white/5 my-2 pt-2">
            <p className="px-3 py-2 text-xs font-bold text-gray-500 uppercase tracking-wider">الماركات</p>
            {brandLinks.map((brand) => (
              <button
                key={brand.name}
                onClick={() => {
                  onNavigate(brand.view);
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-right px-3 py-4 rounded-md text-base font-medium text-indigo-400 hover:bg-white/5 transition-colors"
              >
                {brand.name}
              </button>
            ))}
          </div>
          <button className="w-full mt-4 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl">
            تسجيل الدخول
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
