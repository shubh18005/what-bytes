'use client';

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const CATEGORIES = ['All', 'Electronics', 'Clothing', 'Home'];

export default function SidebarFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedCategory = searchParams.get('category') || 'All';
  const priceMax = parseInt(searchParams.get('price') || '1000', 10);

  const updateFilters = (category: string, price: number) => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (category && category !== 'All') {
      params.set('category', category);
    } else {
      params.delete('category');
    }
    
    if (price !== 1000) {
      params.set('price', price.toString());
    } else {
      params.delete('price');
    }

    router.push(`/?${params.toString()}`);
  };

  return (
    <div className="space-y-6">
      {/* Visual Primary Block matching Mockup */}
      <div className="bg-[#0052B4] text-white p-5 rounded-xl space-y-5 shadow-sm">
        <h3 className="text-lg font-bold border-b border-blue-400 pb-2">Filters</h3>
        
        {/* Category Radios */}
        <div>
          <h4 className="text-sm font-semibold mb-3 opacity-90">Category</h4>
          <div className="space-y-2.5">
            {CATEGORIES.map((cat) => (
              <label key={cat} className="flex items-center gap-3 cursor-pointer text-sm font-medium">
                <input
                  type="radio"
                  name="category"
                  checked={selectedCategory === cat}
                  onChange={() => updateFilters(cat, priceMax)}
                  className="w-4 h-4 accent-white bg-transparent border-white cursor-pointer"
                />
                <span>{cat}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Slider Range */}
        <div>
          <h4 className="text-sm font-semibold mb-2 opacity-90">Price</h4>
          <input
            type="range"
            min="0"
            max="1000"
            value={priceMax}
            onChange={(e) => updateFilters(selectedCategory, parseInt(e.target.value, 10))}
            className="w-full accent-white bg-blue-800 h-1.5 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs mt-1 font-mono opacity-80">
            <span>0</span>
            <span>{priceMax}</span>
          </div>
        </div>
      </div>

      {/* Auxiliary Plain Bottom Panel matching the image reference */}
      <div className="bg-white border border-slate-100 p-5 rounded-xl space-y-5 shadow-sm">
        <h3 className="text-slate-900 font-bold text-base">Cacyroy</h3>
        <div className="space-y-2">
          {CATEGORIES.map((cat) => (
            <label key={`aux-${cat}`} className="flex items-center gap-3 cursor-pointer text-sm text-slate-600">
              <input
                type="radio"
                name="aux-category"
                checked={selectedCategory === cat}
                onChange={() => updateFilters(cat, priceMax)}
                className="w-4 h-4 accent-[#0052B4] border-slate-300"
              />
              <span>{cat}</span>
            </label>
          ))}
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-700 mb-2">Price</h4>
          <input
            type="number"
            value={priceMax}
            onChange={(e) => updateFilters(selectedCategory, parseInt(e.target.value || '0', 10))}
            className="w-full border border-slate-200 px-3 py-1.5 rounded text-sm font-mono text-slate-700 focus:outline-none focus:border-[#0052B4]"
          />
        </div>
      </div>
    </div>
  );
}