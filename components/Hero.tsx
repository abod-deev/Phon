
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-purple-600/10 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-right">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-semibold mb-6 border border-indigo-500/20">
              وصل حديثاً: آيفون 15 برو ماكس
            </span>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-8">
              مستقبل الهواتف <br />
              <span className="text-gradient">بين يديك الآن</span>
            </h1>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              اكتشف أحدث التقنيات وأقوى الأداء مع مجموعتنا المختارة بعناية من أفضل الهواتف الذكية في العالم. تسوق الآن واحصل على عروض حصرية.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="w-full sm:w-auto px-10 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl transition-all shadow-xl shadow-indigo-600/30 hover:scale-105">
                اكتشف الهواتف
              </button>
              <button className="w-full sm:w-auto px-10 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl border border-white/10 transition-all hover:scale-105">
                عروض اليوم
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 relative">
            <div className="relative z-10 w-full max-w-md mx-auto aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://picsum.photos/seed/phonehero/800/800" 
                alt="Latest Phone" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
            </div>
            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 bg-slate-900/90 backdrop-blur border border-white/10 p-4 rounded-2xl shadow-2xl animate-bounce">
              <div className="text-indigo-400 font-bold">20% خصم</div>
              <div className="text-xs text-gray-400">لفترة محدودة</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
