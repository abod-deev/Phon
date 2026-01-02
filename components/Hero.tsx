
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-12 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-purple-600/10 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Content */}
          <div className="flex-1 text-center lg:text-right">
            <span className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-semibold mb-4 border border-indigo-500/20">
              وصل حديثاً: آيفون 15 برو ماكس
            </span>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              مستقبل الهواتف <br />
              <span className="text-gradient">بين يديك الآن</span>
            </h1>
            <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              اكتشف أحدث التقنيات وأقوى الأداء مع مجموعتنا المختارة بعناية من أفضل الهواتف الذكية في العالم.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <button className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all shadow-xl shadow-indigo-600/30 hover:scale-105">
                اكتشف الهواتف
              </button>
              <button className="w-full sm:w-auto px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl border border-white/10 transition-all hover:scale-105">
                عروض اليوم
              </button>
            </div>
          </div>

          {/* Image - Reduced max-width */}
          <div className="flex-1 relative">
            <div className="relative z-10 w-full max-w-[260px] mx-auto aspect-square rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://picsum.photos/seed/phonehero/800/800" 
                alt="Latest Phone" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
            </div>
            {/* Floating Stats */}
            <div className="absolute -top-2 -right-2 bg-slate-900/90 backdrop-blur border border-white/10 p-2 rounded-xl shadow-2xl animate-bounce">
              <div className="text-indigo-400 font-bold text-[10px]">20% خصم</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
