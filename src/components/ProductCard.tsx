'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { Product, useCartStore } from '@/store/useCartStore';

export default function ProductCard({ product }: { product: Product }) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col group">
      {/* Image Block */}
      <Link href={`/product/${product.id}`} className="block relative aspect-square w-full bg-slate-50 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </Link>

      {/* Information Block */}
      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
          <Link href={`/product/${product.id}`} className="block">
            <h3 className="font-semibold text-slate-800 group-hover:text-[#0052B4] transition-colors text-base line-clamp-1">
              {product.title}
            </h3>
          </Link>
          <p className="text-lg font-bold text-slate-900 mt-1">${product.price}</p>
          
          {product.rating && (
            <div className="flex items-center gap-0.5 mt-1.5 text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`w-3.5 h-3.5 ${i < product.rating! ? 'fill-current' : 'text-slate-200'}`} />
              ))}
            </div>
          )}
        </div>

        {/* Call To Action */}
        <button
          onClick={() => addToCart(product)}
          className="mt-4 w-full bg-[#0052B4] hover:bg-[#004395] text-white font-medium text-sm py-2 px-4 rounded-lg transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}