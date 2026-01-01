
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & Info */}
          <div className="text-right">
            <div className="flex items-center gap-2 justify-end mb-6">
              <span className="text-2xl font-extrabold text-white">فون<span className="text-indigo-500">زون</span></span>
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <p className="text-gray-500 leading-relaxed mb-6">
              متجرك الموثوق للحصول على أحدث الهواتف الذكية بأسعار تنافسية وضمان حقيقي.
            </p>
            <div className="flex justify-end gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-indigo-600 transition-all">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-indigo-600 transition-all">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>
              </a>
            </div>
          </div>

          {/* Links 1 */}
          <div className="text-right">
            <h4 className="text-white font-bold mb-6">تسوق</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">آيفون</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">سامسونج</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">إكسسوارات</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">العروض الخاصة</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div className="text-right">
            <h4 className="text-white font-bold mb-6">الدعم</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">الأسئلة الشائعة</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">سياسة الإرجاع</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">تتبع الطلب</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">اتصل بنا</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="text-right">
            <h4 className="text-white font-bold mb-6">النشرة البريدية</h4>
            <p className="text-gray-500 mb-6">اشترك للحصول على آخر العروض والأخبار</p>
            <div className="flex">
              <input type="email" placeholder="بريدك الإلكتروني" className="flex-1 bg-white/5 border border-white/10 rounded-r-xl px-4 text-white focus:outline-none focus:border-indigo-500" />
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-l-xl font-bold">اشترك</button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">© 2024 فون زون. جميع الحقوق محفوظة.</p>
          <div className="flex gap-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4 opacity-50 grayscale hover:grayscale-0 transition-all cursor-pointer" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4 opacity-50 grayscale hover:grayscale-0 transition-all cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
