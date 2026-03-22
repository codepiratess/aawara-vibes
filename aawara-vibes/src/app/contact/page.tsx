'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Send, CheckCircle, AlertCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <div className="pt-40 pb-32 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20">
          <span className="text-amber font-display font-black tracking-widest uppercase text-sm mb-4 block">Connect with us</span>
          <h1 className="text-6xl md:text-8xl font-display font-black text-white italic tracking-tighter uppercase leading-[0.8]">
            Get in <span className="text-amber">Touch</span>.
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div className="space-y-12">
            <p className="text-cream/60 text-xl font-light leading-relaxed max-w-lg">
              Have a question, an idea, or just want to vibe? Reach out and we'll get back to you faster than a fresh espresso pull.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-amber group-hover:bg-amber group-hover:text-black transition-all">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-2">Location</h3>
                  <p className="text-cream/70">123 Creative Lane, Urban District, Downtown 560001</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-amber group-hover:bg-amber group-hover:text-black transition-all">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-2">Phone</h3>
                  <p className="text-cream/70">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-amber group-hover:bg-amber group-hover:text-black transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-2">Email</h3>
                  <p className="text-cream/70">hello@aawaravibes.com</p>
                </div>
              </div>
            </div>

            <div className="pt-8 flex items-center space-x-6">
              <a href="#" className="p-4 bg-white/5 rounded-2xl text-cream/40 hover:text-amber hover:bg-white/10 transition-all">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="p-4 bg-white/5 rounded-2xl text-cream/40 hover:text-amber hover:bg-white/10 transition-all">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="p-4 bg-white/5 rounded-2xl text-cream/40 hover:text-amber hover:bg-white/10 transition-all">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-charcoal border border-white/5 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {status === 'success' && (
              <div className="absolute inset-0 bg-black/90 backdrop-blur-md z-10 flex flex-col items-center justify-center text-center p-8 animate-in fade-in zoom-in duration-300">
                <CheckCircle className="w-20 h-20 text-amber mb-6" />
                <h3 className="text-3xl font-display font-black text-white uppercase italic mb-4">Message Sent!</h3>
                <p className="text-cream/60 mb-8">Thanks for reaching out. We'll get back to you soon.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="btn-primary"
                >
                  Send Another
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-cream/40 uppercase tracking-[0.2em] ml-2">Name</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full bg-black/40 border ${errors.name ? 'border-red-500/50' : 'border-white/10'} rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-amber transition-colors`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-red-500 text-[10px] uppercase font-bold tracking-widest ml-2">{errors.name}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-cream/40 uppercase tracking-[0.2em] ml-2">Email</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full bg-black/40 border ${errors.email ? 'border-red-500/50' : 'border-white/10'} rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-amber transition-colors`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-500 text-[10px] uppercase font-bold tracking-widest ml-2">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-cream/40 uppercase tracking-[0.2em] ml-2">Message</label>
                <textarea 
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full bg-black/40 border ${errors.message ? 'border-red-500/50' : 'border-white/10'} rounded-3xl px-6 py-4 text-white focus:outline-none focus:border-amber transition-colors resize-none`}
                  placeholder="What's on your mind?"
                />
                {errors.message && <p className="text-red-500 text-[10px] uppercase font-bold tracking-widest ml-2">{errors.message}</p>}
              </div>

              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full btn-primary flex items-center justify-center space-x-3 py-5 group disabled:opacity-50"
              >
                <span className="font-black uppercase italic tracking-widest">
                  {status === 'loading' ? 'Sending...' : 'Transmit Vibes'}
                </span>
                {status !== 'loading' && <Send className="w-5 h-5 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
