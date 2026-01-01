
import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

const Comparison: React.FC = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>(['1', '2']);
  
  const handleSelect = (index: number, id: string) => {
    const newSelected = [...selectedIds];
    newSelected[index] = id;
    setSelectedIds(newSelected);
  };

  const selectedProducts = selectedIds.map(id => PRODUCTS.find(p => p.id === id)!);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white mb-4">قارن بين الهواتف</h2>
          <p className="text-gray-400">اختر هاتفين للمقارنة بين المواصفات والميزات</p>
        </div>

        <div className="bg-slate-900/50 rounded-[3rem] border border-white/5 overflow-hidden">
          <table className="w-full text-right border-collapse">
            <thead>
              <tr className="border-b border-white/5">
                <th className="p-10 text-gray-500 font-medium">المواصفات</th>
                {selectedIds.map((id, idx) => (
                  <th key={idx} className="p-10">
                    <select 
                      value={id}
                      onChange={(e) => handleSelect(idx, e.target.value)}
                      className="bg-slate-800 text-white font-bold p-4 rounded-2xl border border-white/10 w-full outline-none focus:border-indigo-500"
                    >
                      {PRODUCTS.map(p => (
                        <option key={p.id} value={p.id}>{p.name}</option>
                      ))}
                    </select>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-lg">
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-10 text-gray-400">السعر</td>
                {selectedProducts.map(p => (
                  <td key={p.id} className="p-10 text-white font-black">{p.price} ر.س</td>
                ))}
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-10 text-gray-400">المعالج</td>
                {selectedProducts.map(p => (
                  <td key={p.id} className="p-10 text-white">{p.specs.processor}</td>
                ))}
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-10 text-gray-400">الشاشة</td>
                {selectedProducts.map(p => (
                  <td key={p.id} className="p-10 text-white">{p.specs.screen}</td>
                ))}
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-10 text-gray-400">البطارية</td>
                {selectedProducts.map(p => (
                  <td key={p.id} className="p-10 text-white">{p.specs.battery}</td>
                ))}
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-10 text-gray-400">الكاميرا</td>
                {selectedProducts.map(p => (
                  <td key={p.id} className="p-10 text-white">{p.specs.camera}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
