'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const { cartCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      gsap.fromTo('.mobile-link', 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: 'power4.out', delay: 0.2 }
      );
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Our Story', href: '/our-story' },
    { name: 'Menu', href: '/menu' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled ? 'py-4 glass-morphism border-b' : 'py-8 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="text-2xl md:text-3xl font-display font-black text-amber tracking-widest uppercase flex items-center gap-2 group">
          AAWARA <span className="text-white group-hover:text-amber transition-colors">VIBES</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`text-[12px] font-bold tracking-[0.2em] uppercase hover:text-amber transition-all relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-amber after:transition-all hover:after:w-full ${pathname === link.href ? 'text-amber after:w-full' : 'text-cream/80'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/cart" className="relative group p-2 bg-white/5 rounded-full hover:bg-amber transition-all duration-300">
            <ShoppingCart className={`w-5 h-5 group-hover:text-black transition-colors ${pathname === '/cart' ? 'text-amber' : 'text-cream/80'}`} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-white text-black text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-black">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="lg:hidden flex items-center space-x-4">
          <Link href="/cart" className="relative p-2 bg-white/5 rounded-full">
            <ShoppingCart className="w-5 h-5 text-cream/80" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber text-black text-[10px] font-black w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="w-10 h-10 flex flex-col items-center justify-center space-y-1.5 focus:outline-none z-50"
            aria-label="Toggle Menu"
          >
            <span className={`w-6 h-0.5 bg-amber transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-amber transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 z-40 bg-[#0a0a09]/98 backdrop-blur-2xl transition-all duration-700 ease-expressive ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <div className="h-full flex flex-col justify-center items-center space-y-8 px-6 pt-20">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`mobile-link text-5xl font-display font-black tracking-tighter uppercase italic transition-all duration-300 hover:text-amber ${pathname === link.href ? 'text-amber' : 'text-cream/60'}`}
            >
              {link.name}
            </Link>
          ))}
          <div className="mobile-link pt-10 border-t border-white/10 w-full max-w-xs text-center">
             <p className="text-[10px] uppercase tracking-widest text-cream/30 font-bold mb-6">Aawara Vibes Global</p>
             <div className="flex justify-center space-x-8">
                <div className="w-10 h-10 rounded-full bg-white/5 hover:bg-amber transition-colors" />
                <div className="w-10 h-10 rounded-full bg-white/5 hover:bg-amber transition-colors" />
                <div className="w-10 h-10 rounded-full bg-white/5 hover:bg-amber transition-colors" />
             </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
