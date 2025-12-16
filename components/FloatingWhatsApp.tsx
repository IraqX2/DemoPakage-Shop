import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { BUSINESS_INFO } from '../constants';

const FloatingWhatsApp: React.FC = () => {
  return (
    <motion.a
      href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center group"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
    >
      <span className="absolute right-full mr-4 bg-white text-slate-800 px-3 py-1.5 rounded-lg shadow-md text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat with us
      </span>
      <div className="relative">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <div className="relative bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-green-500/50 transition-all hover:scale-110 flex items-center justify-center">
             <MessageCircle className="w-8 h-8 fill-current" />
        </div>
      </div>
    </motion.a>
  );
};

export default FloatingWhatsApp;