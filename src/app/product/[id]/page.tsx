'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import { MOCK_PRODUCTS } from '@/data/products';
import { ArrowLeft, Star, ShieldCheck, Truck } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetailPage({ params }: PageProps) {
  // Unwrap params using React.use() wrapper to safely handle async runtime logic
  const resolvedParams = use(params);
  const targetProduct = MOCK_PRODUCTS.find((p) => p.id === resolvedParams.id);
  const addToCart = useCartStore((state) => state.addToCart);
  const [quantity, setQuantity] = useState(1);

  if (!targetProduct) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-xl font-bold text-slate-800">Product Not Found</h2>
        <Link href="/" className="text-[#0052B4] inline-flex items-center gap-2 mt-4 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Return to catalog listings
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-colors mb-8 text-sm font-medium">
        <ArrowLeft className="w-4 h-4" /> Back to Product Listings
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
        {/* Left Aspect Viewport Panel */}
        <div className="aspect-square relative rounded-xl overflow-hidden bg-slate-50 border border-slate-100">
          <img
            src={targetProduct.image}
            alt={targetProduct.title}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Metric Details Panel */}
        <div className="flex flex-col justify-between">
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-[#0052B4] bg-blue-50 px-3 py-1 rounded-full">
                {targetProduct.category}
              </span>
              <h1 className="text-3xl font-bold text-slate-900 mt-3">{targetProduct.title}</h1>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-3xl font-black text-slate-900">${targetProduct.price}</span>
              <div className="flex items-center gap-1 text-amber-400 border-l border-slate-200 pl-4">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-slate-400 mt-0.5">(24 Reviews)</span>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed text-sm">{targetProduct.description}</p>
            
            {/* Custom Quantity Step Selector Module */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Quantity Selection</label>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 font-bold"
                >
                  -
                </button>
                <span className="w-12 text-center font-mono font-bold text-slate-800">{quantity}</span>
                <button 
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 font-bold"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Checkout CTA Form Array */}
          <div className="space-y-4 pt-8 border-t border-slate-100 mt-8">
            <button
              onClick={() => {
                for (let i = 0; i < quantity; i++) addToCart(targetProduct);
              }}
              className="w-full bg-[#0052B4] hover:bg-[#004395] text-white font-bold py-3.5 rounded-xl transition-colors shadow-sm"
            >
              Add to Shopping Cart
            </button>
            <div className="flex items-center justify-between text-xs text-slate-400 px-2">
              <span className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-emerald-500" /> Free Shipping Worldwide</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-500" /> 2-Year Warranty Cover</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}