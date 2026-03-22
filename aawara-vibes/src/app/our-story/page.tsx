'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StoryPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.reveal-item', {
        opacity: 0,
        y: 50,
        stagger: 0.3,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      });

      // Parallax for story images
      gsap.utils.toArray('.parallax-img').forEach((img: any) => {
        gsap.to(img, {
          yPercent: 15,
          ease: 'none',
          scrollTrigger: {
            trigger: img,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/vibe.png" 
            alt="Our Story" 
            fill 
            className="object-cover brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </div>
        <div className="relative z-10 text-center px-6">
          <span className="text-amber font-display font-black tracking-widest uppercase text-sm mb-6 block animate-pulse">Our Genesis</span>
          <h1 className="text-6xl md:text-9xl font-display font-black italic tracking-tighter uppercase leading-[0.8] mb-8">
            The <span className="text-amber">Aawara</span> <br/>Way.
          </h1>
        </div>
      </section>

      {/* Narrative Sections */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-32 space-y-40 md:space-y-64">
           {/* Section 1 */}
           <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-32">
             <div className="w-full lg:w-1/2 space-y-8 reveal-item">
               <h2 className="text-4xl md:text-6xl font-display font-black text-white italic uppercase leading-none">
                 Born in the <br/><span className="text-amber">Urban Chaos</span>.
               </h2>
               <p className="text-cream/60 text-lg leading-relaxed font-light">
                 Aawara Vibes didn't start in a boardroom. It started in a crowded garage in the heart of the city, where three friends refused to accept mediocre coffee and corporate atmospheres.
               </p>
               <div className="p-8 border-l-2 border-amber bg-white/5 italic text-cream/80 text-xl font-medium">
                 "We wanted a place that felt like home, but with better beans and louder music."
               </div>
             </div>
             <div className="w-full lg:w-1/2 relative aspect-square rounded-[3rem] overflow-hidden parallax-img">
               <Image src="/assets/origin.png" alt="Origins" fill className="object-cover" />
             </div>
           </div>

           {/* Section 2 */}
           <div className="flex flex-col lg:flex-row-reverse items-center gap-16 md:gap-32">
             <div className="w-full lg:w-1/2 space-y-8 reveal-item">
               <h2 className="text-4xl md:text-6xl font-display font-black text-white italic uppercase leading-none">
                 The <span className="text-amber">Vibe</span> <br/>is Everything.
               </h2>
               <p className="text-cream/60 text-lg leading-relaxed font-light">
                 We believe that the environment you consume in is just as important as what you consume. Our spaces are curated galleries of urban youth culture—raw, expressive, and unapologetically bold.
               </p>
               <ul className="space-y-4 text-amber font-display font-bold uppercase tracking-widest text-sm">
                 <li className="flex items-center gap-4">
                   <span className="w-8 h-[1px] bg-amber" /> Community First
                 </li>
                 <li className="flex items-center gap-4">
                   <span className="w-8 h-[1px] bg-amber" /> Art in Every Cup
                 </li>
                 <li className="flex items-center gap-4">
                   <span className="w-8 h-[1px] bg-amber" /> No Compromise
                 </li>
               </ul>
             </div>
             <div className="w-full lg:w-1/2 relative aspect-[4/5] rounded-[3rem] overflow-hidden parallax-img">
               <Image src="/assets/hero.png" alt="Creative Vibe" fill className="object-cover" />
             </div>
           </div>

           {/* Timeline/Values */}
           <div className="py-20 text-center space-y-20">
              <h2 className="text-5xl md:text-7xl font-display font-black text-white uppercase italic reveal-item">Our <span className="text-amber">Ethos</span></h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                 <div className="p-12 bg-charcoal rounded-[2.5rem] border border-white/5 space-y-6 reveal-item">
                   <span className="text-5xl font-display font-black text-amber/20">01</span>
                   <h3 className="text-2xl font-display font-bold text-white uppercase">Sourcing</h3>
                   <p className="text-cream/40 text-sm leading-relaxed">Direct-trade beans from single estates that respect the Earth and the farmer.</p>
                 </div>
                 <div className="p-12 bg-charcoal rounded-[2.5rem] border border-amber/20 space-y-6 reveal-item scale-105 shadow-2xl">
                   <span className="text-5xl font-display font-black text-amber">02</span>
                   <h3 className="text-2xl font-display font-bold text-white uppercase">Craft</h3>
                   <p className="text-cream/40 text-sm leading-relaxed">Micro-roasting and long-fermentation dough. We take the time because it matters.</p>
                 </div>
                 <div className="p-12 bg-charcoal rounded-[2.5rem] border border-white/5 space-y-6 reveal-item">
                   <span className="text-5xl font-display font-black text-amber/20">03</span>
                   <h3 className="text-2xl font-display font-bold text-white uppercase">Culture</h3>
                   <p className="text-cream/40 text-sm leading-relaxed">A sanctuary for the nocturnal creators and the afternoon dreamers.</p>
                 </div>
              </div>
           </div>
      </div>

      {/* Quote Banner */}
      <section className="bg-amber py-32 md:py-48 mt-20">
         <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-7xl font-display font-black text-black uppercase italic leading-tight tracking-tighter">
              "Stay Aawara, <br/>Stay Inspired."
            </h2>
            <p className="mt-8 text-black/60 font-bold uppercase tracking-[0.3em] text-sm md:text-base">— Founders of Aawara Vibes</p>
         </div>
      </section>
    </div>
  );
};

export default StoryPage;
