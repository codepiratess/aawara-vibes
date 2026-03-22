'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance Animations
      const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.5 } });

      tl.fromTo('.hero-title-line', 
        { y: 100, opacity: 0 }, 
        { y: 0, opacity: 1, stagger: 0.2, delay: 0.5 }
      )
      .fromTo('.hero-subtext', 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1 }, 
        '-=1'
      )
      .fromTo('.hero-cta', 
        { scale: 0.9, opacity: 0 }, 
        { scale: 1, opacity: 1, stagger: 0.2 }, 
        '-=0.8'
      )
      .fromTo(imageRef.current, 
        { scale: 1.1, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 2 }, 
        '0'
      );

      // Parallax Effect on Scroll
      gsap.to(imageRef.current, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Text parallax
      gsap.to(textRef.current, {
        yPercent: -10,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image Wrapper */}
      <div ref={imageRef} className="absolute inset-0 z-0">
        <Image 
          src="/assets/hero.png" 
          alt="Aawara Vibes Cafe" 
          fill 
          className="object-cover brightness-[0.4]"
          priority
        />
        {/* Gradients to blend */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
      </div>

      <div ref={textRef} className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <div className="space-y-4 mb-10 overflow-hidden">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-black tracking-tighter uppercase leading-[0.9]">
            <span className="hero-title-line block text-white">Awaken Your</span>
            <span className="hero-title-line block text-amber">Free Spirit</span>
          </h1>
        </div>
        
        <p className="hero-subtext text-cream/70 text-lg md:text-2xl max-w-2xl mx-auto mb-12 font-medium tracking-wide">
          Specialty coffee meets creative culture. Join the tribe that lives on the edge of every sip.
        </p>

        <div className="hero-cta flex flex-wrap justify-center gap-6">
          <Link href="/menu" className="btn-primary flex items-center group">
            Order Now
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <button className="btn-secondary">
            Explore Menu
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <div className="w-[1px] h-16 bg-gradient-to-b from-amber to-transparent mx-auto" />
      </div>
    </section>
  );
};

export default Hero;
