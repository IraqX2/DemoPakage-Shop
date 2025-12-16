import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Location: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Visit Our Packaging Shop</h2>
          <p className="text-lg text-slate-600">Easy access for local business owners in Dhaka.</p>
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-4 rounded-3xl shadow-sm border border-slate-100"
        >
          <div className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden shadow-inner group">
             {/* 
                Since we cannot resolve short links to embed codes dynamically without a backend, 
                we use a generic Dhaka view for the embed and a prominent button for the specific location.
             */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.8223908687!2d90.27923710515152!3d23.780887457084543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1714567890123!5m2!1sen!2sbd" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
            ></iframe>

            <div className="absolute inset-0 pointer-events-none flex items-center justify-center bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
               <span className="bg-white px-4 py-2 rounded-full shadow-lg text-sm font-semibold flex items-center gap-2">
                 <MapPin className="w-4 h-4 text-brand-600" /> Use Controls to Zoom
               </span>
            </div>
          </div>
          
          <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-6 px-4">
            <div className="flex items-start gap-4">
              <div className="bg-brand-100 p-3 rounded-full shrink-0">
                <MapPin className="w-6 h-6 text-brand-700" />
              </div>
              <div>
                 <h4 className="font-bold text-slate-900 text-lg">Store Location</h4>
                 <p className="text-slate-600">{BUSINESS_INFO.address}</p>
              </div>
            </div>
            
            <a 
              href={BUSINESS_INFO.mapLink} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white border border-slate-300 text-slate-700 px-6 py-3 rounded-xl font-semibold hover:bg-slate-50 hover:text-brand-600 hover:border-brand-300 transition-all shadow-sm"
            >
              Open Google Maps <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Location;