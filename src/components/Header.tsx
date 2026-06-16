'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { ShoppingCart, Search, User } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';

export default function Header() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const cart = useCartStore((state) => state.cart);
  
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const currentSearch = searchParams.get('search') || '';

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams.toString());
    if (e.target.value) {
      params.set('search', e.target.value);
    } else {
      params.delete('search');
    }
    router.push(`/?${params.toString()}`);
  };

  return (
    <header className="bg-[#0052B4] text-white px-6 py-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight hover:opacity-90">
          Logo
        </Link>

        {/* Central Search Bar */}
        <div className="flex-1 max-w-xl relative">
          <span className="absolute left-3 top-2.5 text-slate-300">
            <Search className="w-5 h-5" />
          </span>
          <input
            type="text"
            placeholder="Search for products..."
            value={currentSearch}
            onChange={handleSearchChange}
            // className="w-full bg-[#004395] text-white placeholder-slate-300 text-sm pl-10 pr-4 py-2 rounded border border-transparent focus:outline-none focus:border-white transition-all"
            className="w-full bg-[#004395] text-white placeholder-slate-300 text-sm pl-10 pr-4 py-3 rounded-lg border border-white/50 focus:outline-none focus:border-white transition-all"          />
        </div>

        {/* Action Widgets */}
        <div className="flex items-center gap-6">
          <Link href="/cart" className="flex items-center bg-[#003372] hover:bg-[#002654] px-4 py-2 rounded transition-colors relative">
            <ShoppingCart className="w-4 h-4 mr-2" />
            <span className="text-sm font-semibold">Cart</span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                {totalItems}
              </span>
            )}
          </Link>
          <div className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center text-[#0052B4] font-bold cursor-pointer hover:opacity-90">
            <User className="w-5 h-5" />
          </div>
        </div>
      </div>
    </header>
  );
}