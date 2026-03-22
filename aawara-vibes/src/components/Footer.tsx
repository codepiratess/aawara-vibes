import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-espresso pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-display font-bold text-amber mb-6 tracking-widest uppercase">Aawara <span className="text-white">Vibes</span></h2>
          <p className="text-cream/60 leading-relaxed mb-8">
            A sanctuary for the free-spirited, where the aroma of freshly roasted beans meets the crackle of wood-fired ovens. Join the vibe.
          </p>
          <div className="flex items-center space-x-4">
            <a href="#" className="p-2 border border-white/10 rounded-full text-amber hover:bg-amber hover:text-black transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 border border-white/10 rounded-full text-amber hover:bg-amber hover:text-black transition-all">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 border border-white/10 rounded-full text-amber hover:bg-amber hover:text-black transition-all">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Quick Links</h3>
          <ul className="space-y-4">
            <li><Link href="/" className="text-cream/60 hover:text-amber transition-colors">Home</Link></li>
            <li><Link href="/menu" className="text-cream/60 hover:text-amber transition-colors">Menu</Link></li>
            <li><Link href="/#about" className="text-cream/60 hover:text-amber transition-colors">Our Story</Link></li>
            <li><Link href="/cart" className="text-cream/60 hover:text-amber transition-colors">Your Order</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3 text-cream/60">
              <MapPin className="w-5 h-5 text-amber shrink-0" />
              <span>123 Creative Lane, Urban District, Downtown 560001</span>
            </li>
            <li className="flex items-center space-x-3 text-cream/60">
              <Phone className="w-5 h-5 text-amber shrink-0" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center space-x-3 text-cream/60">
              <Mail className="w-5 h-5 text-amber shrink-0" />
              <span>hello@aawaravibes.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Open Hours</h3>
          <ul className="space-y-4">
            <li className="flex justify-between text-cream/60">
              <span>Mon - Fri:</span>
              <span>10:00 AM - 11:00 PM</span>
            </li>
            <li className="flex justify-between text-cream/60">
              <span>Sat - Sun:</span>
              <span>08:00 AM - 10:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-cream/30 text-sm">
        <p>© 2026 Aawara Vibes. Crafted for the free-spirited.</p>
        <div className="flex space-x-8 mt-4 md:mt-0">
          <a href="#" className="hover:text-amber transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-amber transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
