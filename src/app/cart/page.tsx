'use client';

import React from 'react';
import Link from 'next/link';
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useCartStore();
  const baseSubtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="max-w-md mx-auto px-4 py-20 text-center space-y-4">
        <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto text-slate-400">
          <ShoppingBag className="w-8 h-8" />
        </div>
        <h2 className="text-xl font-bold text-slate-800">Your Cart is Empty</h2>
        <p className="text-slate-400 text-sm">Looks like you haven&apos;t added any products to your cart yet.</p>
        <Link href="/" className="inline-block bg-[#0052B4] text-white text-sm font-semibold px-6 py-2.5 rounded-lg hover:bg-[#004395] transition-colors">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold text-slate-900 mb-8">Shopping Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Cart Items List */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="bg-white border border-slate-100 p-4 rounded-xl flex gap-4 items-center shadow-sm">
              <div className="w-20 h-20 relative rounded-lg overflow-hidden bg-slate-50 flex-shrink-0">
                <img src={item.image} alt={item.title} className="object-cover w-full h-full" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-slate-800 text-sm truncate">{item.title}</h3>
                <p className="text-xs text-slate-400 mt-0.5">{item.category}</p>
                <p className="text-sm font-bold text-slate-900 mt-1">${item.price}</p>
              </div>
              {/* Stepper controls */}
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="w-7 h-7 border border-slate-200 rounded flex items-center justify-center text-sm font-bold text-slate-600 hover:bg-slate-50"
                >
                  -
                </button>
                <span className="w-6 text-center font-mono text-sm font-bold text-slate-800">{item.quantity}</span>
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-7 h-7 border border-slate-200 rounded flex items-center justify-center text-sm font-bold text-slate-600 hover:bg-slate-50"
                >
                  +
                </button>
              </div>
              {/* Destructive Item Removal */}
              <button 
                onClick={() => removeFromCart(item.id)}
                className="p-2 text-slate-400 hover:text-red-500 rounded-lg hover:bg-red-50 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Price Summary Panel */}
        <div className="bg-white border border-slate-100 p-6 rounded-xl shadow-sm h-fit space-y-4">
          <h2 className="text-lg font-bold text-slate-900">Order Summary</h2>
          <div className="space-y-2 text-sm text-slate-600 border-b border-slate-100 pb-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-mono font-semibold text-slate-900">${baseSubtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="text-emerald-500 font-medium">Free</span>
            </div>
          </div>
          <div className="flex justify-between text-base font-bold text-slate-900">
            <span>Total Cost</span>
            <span className="font-mono">${baseSubtotal}</span>
          </div>
          <button className="w-full bg-[#0052B4] hover:bg-[#004395] text-white font-medium text-sm py-3 rounded-xl flex items-center justify-center gap-2 transition-colors mt-2 shadow-sm">
            Proceed to Checkout <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}