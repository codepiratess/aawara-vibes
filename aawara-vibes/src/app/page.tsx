'use client';

import React, { useEffect, useRef } from 'react';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Star, Coffee, Zap, Moon, Heart, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const featuredProducts = products.slice(0, 3);
  const featuredRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const whyRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // General section reveal utility
      const reveals = ['.reveal-item', '.card-reveal', '.section-header'];
      reveals.forEach(selector => {
        gsap.utils.toArray(selector).forEach((el: any) => {
          gsap.from(el, {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: 'back.out(1.4)',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
            }
          });
        });
      });

      // Staggered reveals for cards
      gsap.from('.stagger-card', {
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.stagger-container',
          start: 'top 75%',
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-black">
      <Hero />

      {/* About Preview Section */}
      <section ref={aboutRef} className="py-32 px-6 md:px-12 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-10">
          <div className="section-header">
            <span className="text-amber font-display font-black tracking-widest uppercase text-xs mb-4 block">Our Origin Story</span>
            <h2 className="text-4xl md:text-7xl font-display font-black text-white italic tracking-tighter uppercase leading-[0.8]">
              More than a <span className="text-amber underline decoration-white/10 underline-offset-8 italic">Cafe</span>.
            </h2>
          </div>
          <p className="reveal-item text-cream/70 text-lg md:text-2xl max-w-2xl leading-relaxed font-light font-display">
             Born in the heart of urban chaos, curated for the nocturnal creators. Aawara Vibes is a sanctuary where high-performance roasting meets free-spirited creative culture.
          </p>
          <Link href="/our-story" className="reveal-item btn-secondary group flex items-center space-x-4">
             <span>Unfold the Story</span>
             <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Featured Section */}
      <section ref={featuredRef} className="section-padding bg-charcoal relative">
        <div className="max-w-7xl mx-auto mb-20 flex flex-col md:flex-row justify-between items-end gap-10 stagger-container">
          <div className="max-w-xl">
            <span className="text-amber font-display font-black tracking-widest uppercase text-xs mb-4 block animate-pulse">Signature Vibes</span>
            <h2 className="text-4xl md:text-6xl font-display font-black text-white leading-tight stagger-card italic">
              Cult Favorites <br/>Sipped by the <span className="text-amber">Free</span>.
            </h2>
          </div>
          <Link href="/menu" className="btn-secondary group flex items-center stagger-card mb-4 min-w-[200px]">
            Explore All 
            <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform w-4 h-4" />
          </Link>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {featuredProducts.map((product) => (
            <div key={product.id} className="reveal-item">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section ref={whyRef} className="section-padding bg-black relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(217,164,65,0.05),transparent_70%)] pointer-events-none" />
         <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-display font-black text-white uppercase italic tracking-widest mb-20 reveal-item">The <span className="text-amber">DNA</span> of Aawara.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              <div className="space-y-6 reveal-item group p-8 bg-charcoal/50 border border-white/5 rounded-3xl hover:border-amber/20 transition-all duration-500">
                <Coffee className="w-10 h-10 text-amber group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-display font-bold text-white uppercase">Artisan Small Batch</h3>
                <p className="text-cream/40 text-sm leading-relaxed">Direct-trade beans, meticulously roasted for flavor profiles that hit different.</p>
              </div>
              <div className="space-y-6 reveal-item group p-8 bg-charcoal/50 border border-white/5 rounded-3xl hover:border-amber/20 transition-all duration-500">
                <Moon className="w-10 h-10 text-amber group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-display font-bold text-white uppercase">Atmospheric Soul</h3>
                <p className="text-cream/40 text-sm leading-relaxed">Curated soundscapes and gritty aesthetics for the nocturnal creators.</p>
              </div>
              <div className="space-y-6 reveal-item group p-8 bg-charcoal/50 border border-white/5 rounded-3xl hover:border-amber/20 transition-all duration-500">
                <Zap className="w-10 h-10 text-amber group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-display font-bold text-white uppercase">Pure Energy</h3>
                <p className="text-cream/40 text-sm leading-relaxed">Fresh ingredients, bold flavors, and double-shot espresso in every vibe.</p>
              </div>
              <div className="space-y-6 reveal-item group p-8 bg-charcoal/50 border border-white/5 rounded-3xl hover:border-amber/20 transition-all duration-500">
                <Heart className="w-10 h-10 text-amber group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-display font-bold text-white uppercase">Community Spirit</h3>
                <p className="text-cream/40 text-sm leading-relaxed">A sanctuary for the dreamers, the misunderstood, and the free-spirits.</p>
              </div>
            </div>
         </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialRef} className="section-padding bg-charcoal relative">
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between mb-20 gap-8">
               <h2 className="text-4xl md:text-6xl font-display font-black text-white italic uppercase reveal-item">Heard in the <br/><span className="text-amber underline decoration-white/10 underline-offset-8">Shadows</span>.</h2>
               <div className="flex gap-4 reveal-item">
                  <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full text-amber"><Star className="fill-amber" size={16} /></div>
                  <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full text-amber"><Star className="fill-amber" size={16} /></div>
                  <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full text-amber"><Star className="fill-amber" size={16} /></div>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                 { name: "Armaan V.", quote: "The Midnight Espresso is the only thing keeping my creative agency alive. Best roast in the city, hands down.", title: "Creative Designer" },
                 { name: "Sanya M.", quote: "Finally a place that doesn't feel clinical. The vibe is gritty, real, and the pizza... oh, the pizza is pure art.", title: "Musician" },
                 { name: "Rohan D.", quote: "Met my tribe here. Aawara isn't just a cafe; it's the heart of local urban culture. Stay away if you want plain vanilla.", title: "Code Poetic" }
               ].map((t, idx) => (
                 <div key={idx} className="reveal-item p-10 bg-black/40 border border-white/5 rounded-[2.5rem] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                    <p className="text-cream/80 text-xl font-display italic mb-10 leading-relaxed font-light italic">"{t.quote}"</p>
                    <div>
                       <p className="text-white font-black uppercase tracking-widest text-sm">{t.name}</p>
                       <p className="text-amber font-display text-xs uppercase italic mt-1">{t.title}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Final CTA Banner */}
      <section className="bg-amber py-32 md:py-48 mt-20 relative overflow-hidden group">
         <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity" />
         <div className="max-w-5xl mx-auto px-6 text-center space-y-12 relative z-10">
            <h2 className="text-5xl md:text-9xl font-display font-black text-black uppercase italic leading-[0.8] tracking-tighter reveal-item">
               Join the <br/>Tribe.
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-8 reveal-item pt-10">
               <Link href="/menu" className="px-12 py-6 bg-black text-amber text-xl font-black uppercase italic rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-4 group/btn">
                  Order Now 
                  <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform" />
               </Link>
               <Link href="/contact" className="px-12 py-6 border-2 border-black/20 text-black text-xl font-black uppercase italic rounded-full hover:bg-black/5 transition-colors">
                  Find Us
               </Link>
            </div>
         </div>
      </section>

      {/* Newsletter */}
      <section className="bg-black py-32 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,var(--amber),transparent_70%)]" />
        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <h2 className="text-5xl md:text-7xl font-display font-black text-white mb-10 tracking-tight leading-none uppercase">
            Stay in the <span className="text-amber italic">Vibe</span>
          </h2>
          <p className="text-cream/60 text-xl font-light mb-16 max-w-2xl mx-auto">
            Get exclusive access to new drops, secret menu items, and private creative events. No spam, just pure vibes.
          </p>
          <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow bg-charcoal border border-white/10 rounded-2xl px-8 py-5 text-white focus:outline-none focus:border-amber transition-colors"
            />
            <button className="btn-primary hover:scale-105 transition-transform">
              Join the Tribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
