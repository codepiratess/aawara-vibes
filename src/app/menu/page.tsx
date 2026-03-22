'use client';

import React, { useState, useEffect } from 'react';
import { products, Product } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import gsap from 'gsap';

const MenuPage: React.FC = () => {
  const categories = ['All', 'Coffee', 'Pizza'] as const;
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>('All');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  useEffect(() => {
    // Filter logic
    if (activeCategory === 'All') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(p => p.category === activeCategory));
    }

    // Animation on list change
    gsap.fromTo('.product-item', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out' }
    );
  }, [activeCategory]);

  return (
    <div className="pt-40 pb-32 min-h-screen bg-black overflow-hidden relative">
      {/* Decorative gradient */}
      <div className="fixed top-0 left-0 w-full h-1/2 bg-[radial-gradient(circle_at_top_left,rgba(217,164,65,0.05),transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-20 text-center animate-in zoom-in-95 duration-700">
          <span className="text-amber font-display font-black tracking-widest uppercase text-xs mb-4 block">The Selection</span>
          <h1 className="text-6xl md:text-8xl font-display font-black text-white italic tracking-tighter uppercase leading-[0.8] mb-12">
            Fuel Your <span className="text-amber">Spirit</span>.
          </h1>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 bg-espresso/30 p-2 rounded-3xl border border-white/5 inline-flex backdrop-blur-xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-10 py-4 rounded-2xl font-bold tracking-widest uppercase text-xs transition-all duration-300 ${
                  activeCategory === cat 
                  ? 'bg-amber text-black shadow-[0_10px_30px_rgba(217,164,65,0.2)] scale-105' 
                  : 'text-cream/40 hover:text-amber hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-item">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-40 border-2 border-dashed border-white/5 rounded-3xl bg-charcoal/50">
            <p className="text-cream/40 text-2xl font-display font-medium tracking-wider uppercase mb-6 italic">No items found in this category.</p>
            <button 
              onClick={() => setActiveCategory('All')} 
              className="px-8 py-3 bg-amber/10 text-amber font-bold rounded-full hover:bg-amber hover:text-black transition-all"
            >
              Show All Items
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuPage;
