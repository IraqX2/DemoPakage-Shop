import React from 'react';
import { motion } from 'framer-motion';
import { PRODUCTS, BUSINESS_INFO } from '../constants';
import { MessageCircle } from 'lucide-react';

const ProductCard: React.FC<{ product: typeof PRODUCTS[0]; index: number }> = ({ product, index }) => {
  return (
    <motion.div
      id={product.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full overflow-hidden hover:-translate-y-2 scroll-mt-28"
    >
      <div className="relative h-56 overflow-hidden bg-slate-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-sm">
          <product.icon className="w-6 h-6 text-brand-600" />
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
        <p className="text-slate-600 text-sm mb-4 line-clamp-2 flex-grow">{product.description}</p>
        
        <div className="mt-auto">
          <div className="mb-4">
            <span className="inline-block bg-brand-50 text-brand-700 px-3 py-1 rounded-full text-sm font-semibold border border-brand-100">
              {product.price}
            </span>
          </div>
          
          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=I%20am%20interested%20in%20${encodeURIComponent(product.name)}`}
            target="_blank"
            rel="noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-3 rounded-xl font-medium group-hover:bg-brand-600 transition-colors duration-300"
          >
            <MessageCircle className="w-4 h-4" />
            Order via WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Products: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-brand-600 tracking-wide uppercase mb-2">Our Solutions</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Packaging That Builds Your Brand
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            Choose from our range of startup-friendly packaging options.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;