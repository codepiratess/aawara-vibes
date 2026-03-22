'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, ArrowRight, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="pt-40 pb-32 min-h-screen bg-black flex flex-col items-center justify-center text-center px-6">
        <div className="w-32 h-32 bg-espresso/50 border border-white/5 flex items-center justify-center rounded-full mb-10 text-cream/20 shadow-inner group transition-all hover:scale-110 hover:border-amber/20">
          <ShoppingBag className="w-12 h-12" />
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-black text-white italic tracking-tighter uppercase mb-6 drop-shadow-lg">
          Your Bag is <span className="text-amber">Empty</span>.
        </h1>
        <p className="text-cream/50 text-xl font-light mb-12 max-w-md mx-auto">
          Fuel your spirit. Add some artisan pizza or specialty coffee to get started. 🚀
        </p>
        <Link href="/menu" className="btn-primary hover:scale-110 transition-transform">
          Start Exploring
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-40 pb-32 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Cart Items List */}
          <div className="w-full lg:w-2/3 space-y-10">
            <div className="flex justify-between items-end border-b border-white/10 pb-10">
              <h1 className="text-4xl md:text-7xl font-display font-black text-white italic tracking-tighter uppercase">
                Your <span className="text-amber">Bag</span>.
              </h1>
              <button 
                onClick={clearCart}
                className="text-white/40 hover:text-amber text-xs font-bold uppercase tracking-widest transition-colors mb-2"
              >
                Clear All
              </button>
            </div>

            <div className="space-y-6">
              {cart.map((item) => (
                <div 
                  key={item.id} 
                  className="group relative flex flex-col sm:flex-row items-center gap-8 bg-charcoal border border-white/5 rounded-3xl p-8 transition-all hover:border-amber/20 hover:-translate-y-1 shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
                >
                  <div className="relative w-full sm:w-32 aspect-square rounded-2xl overflow-hidden shadow-2xl grow-0 shrink-0">
                    <Image 
                      src={item.image} 
                      alt={item.name} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  
                  <div className="flex-grow flex flex-col justify-center space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-[10px] font-bold text-amber tracking-widest uppercase mb-1 block opacity-60 group-hover:opacity-100 transition-opacity">{item.category}</span>
                        <h3 className="text-2xl font-display font-black text-white group-hover:text-amber transition-colors">{item.name}</h3>
                      </div>
                      <span className="text-xl font-display font-bold text-cream/90">₹{item.price * item.quantity}</span>
                    </div>
                    
                    <div className="flex items-center justify-between pt-6 border-t border-white/5">
                      <div className="flex items-center space-x-6 bg-black/60 backdrop-blur-md rounded-2xl px-5 py-3 border border-white/10">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="text-cream/40 hover:text-amber transition-colors hover:scale-125 p-1"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-white font-bold w-6 text-center tabular-nums">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="text-cream/40 hover:text-amber transition-colors hover:scale-125 p-1"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="p-3 text-white/20 hover:text-red-500/80 transition-all hover:bg-red-500/10 rounded-xl"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/menu" className="inline-flex items-center space-x-3 text-amber font-bold tracking-widest uppercase text-xs group py-8 px-2">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" />
              <span>Back to Selection</span>
            </Link>
          </div>

          {/* Order Summary Sidebar */}
          <div className="w-full lg:w-1/3">
            <div className="bg-espresso border border-white/5 rounded-[2.5rem] p-10 sticky top-40 shadow-[0_30px_60px_rgba(0,0,0,0.8)]">
              <h2 className="text-2xl font-display font-black text-white italic tracking-tighter uppercase mb-10 border-b border-white/10 pb-6">
                Order Summary
              </h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex justify-between text-cream/40 text-sm font-medium">
                  <span>Subtotal</span>
                  <span className="text-cream font-bold tabular-nums">₹{cartTotal}</span>
                </div>
                <div className="flex justify-between text-cream/40 text-sm font-medium">
                  <span>Vibe Tax (18%)</span>
                  <span className="text-cream font-bold tabular-nums">₹{Math.round(cartTotal * 0.18)}</span>
                </div>
                <div className="flex justify-between text-cream/40 text-sm font-medium">
                  <span>Free Delivery</span>
                  <span className="text-amber font-black italic">GRATIS</span>
                </div>
                <div className="pt-6 border-t border-white/10 flex justify-between items-baseline">
                  <span className="text-xl font-display font-black text-white uppercase tracking-widest">Total</span>
                  <span className="text-4xl font-display font-black text-amber tabular-nums drop-shadow-[0_0_20px_rgba(217,164,65,0.4)]">
                    ₹{cartTotal + Math.round(cartTotal * 0.18)}
                  </span>
                </div>
              </div>

              <button className="w-full btn-primary py-6 text-xl tracking-widest font-black uppercase italic group hover:scale-105 transition-all shadow-[0_15px_40px_rgba(217,164,65,0.2)]">
                Checkout 
                <span className="ml-3 group-hover:translate-x-2 transition-transform inline-block">→</span>
              </button>
              
              <p className="mt-8 text-center text-cream/30 text-[10px] uppercase font-bold tracking-widest px-4">
                Powered by Aawara Vibes Global Payments. Secured with SHA-256.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
