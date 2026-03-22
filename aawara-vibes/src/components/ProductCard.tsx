'use client';

import React from 'react';
import Image from 'next/image';
import { Plus, ShoppingCart } from 'lucide-react';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group relative bg-[#121211] border border-white/5 rounded-[2.5rem] p-8 transition-all duration-700 hover:border-amber/30 hover:-translate-y-3 hover:shadow-[0_40px_80px_rgba(0,0,0,0.6)] cursor-pointer overflow-hidden">
      {/* Glossy overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-amber/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      <div className="relative aspect-square mb-10 overflow-hidden rounded-[2rem] shadow-2xl">
        <Image 
          src={product.image} 
          alt={product.name} 
          fill 
          className="object-cover transition-transform duration-1000 ease-expressive group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-700" />
      </div>

      <div className="relative z-10 space-y-4 mb-4">
        <div className="flex justify-between items-start">
          <div className="flex-grow">
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-amber mb-3 block opacity-60 group-hover:opacity-100 transition-opacity">{product.category}</span>
            <h3 className="text-2xl font-display font-black text-white group-hover:text-amber transition-colors leading-none">{product.name}</h3>
          </div>
          <span className="text-2xl font-display font-black text-cream flex items-start">
            <span className="text-xs mt-1 mr-0.5 opacity-40">₹</span>
            {product.price}
          </span>
        </div>

        <p className="text-cream/30 text-xs leading-relaxed font-light line-clamp-2 italic">
          {product.description}
        </p>
      </div>

      <button 
        onClick={(e) => {
          e.stopPropagation();
          addToCart(product);
        }}
        className="relative z-10 w-full flex items-center justify-center space-x-3 bg-white/5 border border-white/5 hover:bg-amber py-5 rounded-2xl text-cream/70 hover:text-black font-black uppercase text-[10px] tracking-[0.2em] transition-all duration-300 group/btn"
      >
        <Plus className="w-4 h-4 group-hover/btn:rotate-90 transition-transform" />
        <span>Add to Bag</span>
      </button>
    </div>
  );
};

export default ProductCard;
