import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, TrendingUp, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-50 min-h-[85vh] flex items-center">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-brand-200 to-transparent"></div>
          <div className="absolute left-0 bottom-0 w-1/3 h-1/3 bg-blue-100 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            
            {/* Special Startup Banner */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 inline-block"
            >
              <a 
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=I%20am%20a%20new%20startup%20owner.%20I%20need%20the%20special%20guideline.`}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 bg-gradient-to-r from-brand-600 to-brand-500 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-brand-300/50 hover:scale-105 transition-all duration-300 cursor-pointer border border-brand-400"
              >
                <span className="text-xl">🚀</span>
                <span className="font-semibold text-sm sm:text-base">Special Guideline for New Startups</span>
                <span className="bg-white/20 px-2 py-0.5 rounded text-xs uppercase tracking-wider font-bold group-hover:bg-white/30">WhatsApp Now</span>
              </a>
            </motion.div>

            {/* Main Headings */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6"
            >
              Complete Packaging Solutions for <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-blue-600">
                New & Growing Businesses
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              We help startups launch faster with affordable, reliable, and custom packaging. From initial concept to delivery.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-brand-500/30 hover:bg-brand-700 hover:-translate-y-1 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Now
              </a>
              <Link
                to="/products"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 hover:text-brand-600 hover:border-brand-200 transition-all cursor-pointer"
              >
                View Products
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow text-center">
                 <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-6 h-6" />
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 mb-2">Startup Friendly</h3>
                 <p className="text-slate-600">Low minimum order quantities to help you start small and grow big.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow text-center">
                 <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6" />
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 mb-2">Fast Delivery</h3>
                 <p className="text-slate-600">Quick turnaround times ensuring you never run out of stock.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow text-center">
                 <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck className="w-6 h-6" />
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 mb-2">Quality Assured</h3>
                 <p className="text-slate-600">Premium materials that protect your products and impress customers.</p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;