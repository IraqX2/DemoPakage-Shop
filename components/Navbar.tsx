import React, { useState, useEffect } from 'react';
import { Menu, X, Package, ChevronDown } from 'lucide-react';
import { NAV_LINKS, BUSINESS_INFO, PRODUCTS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Offset for fixed header
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    } else if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-md py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div 
              onClick={() => handleScrollTo('hero')}
              className="flex items-center gap-2 group relative z-50 cursor-pointer"
            >
              <div className="bg-brand-600 p-2 rounded-lg group-hover:bg-brand-700 transition-colors">
                <Package className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl text-slate-800 tracking-tight">PrimePack</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {NAV_LINKS.map((link) => {
              if (link.name === "Products") {
                return (
                  <div className="relative group" key={link.name}>
                    <button
                      onClick={() => handleScrollTo(link.href)}
                      className="flex items-center gap-1 font-medium transition-colors text-sm uppercase tracking-wide py-2 cursor-pointer text-slate-600 hover:text-brand-600"
                    >
                      {link.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {/* Desktop Dropdown */}
                    <div className="absolute top-full left-0 w-72 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden py-1">
                        {PRODUCTS.map(product => (
                          <button 
                            key={product.id}
                            onClick={() => handleScrollTo(product.id)}
                            className="w-full text-left block px-4 py-3 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-700 border-b border-slate-50 last:border-0 cursor-pointer"
                          >
                            {product.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              }
              return (
                <button
                  key={link.name}
                  onClick={() => handleScrollTo(link.href)}
                  className="font-medium transition-colors text-sm uppercase tracking-wide cursor-pointer text-slate-600 hover:text-brand-600"
                >
                  {link.name}
                </button>
              )
            })}
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="bg-brand-600 text-white px-5 py-2 rounded-full font-medium hover:bg-brand-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer relative z-50"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-brand-600 focus:outline-none p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg animate-fade-in-down max-h-[85vh] overflow-y-auto">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {NAV_LINKS.map((link) => {
               if (link.name === "Products") {
                  return (
                    <div key={link.name} className="border-b border-gray-50 pb-2">
                      <button 
                        onClick={() => setProductDropdownOpen(!productDropdownOpen)}
                        className="w-full flex items-center justify-between px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-brand-600 hover:bg-brand-50"
                      >
                        <span>{link.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${productDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {productDropdownOpen && (
                        <div className="pl-4 space-y-1 bg-slate-50 rounded-md mb-2 py-2">
                           {PRODUCTS.map(product => (
                              <button 
                                key={product.id}
                                onClick={() => handleScrollTo(product.id)}
                                className="w-full text-left block px-3 py-3 text-sm text-slate-600 hover:text-brand-600 border-l-2 border-transparent hover:border-brand-300"
                              >
                                {product.name}
                              </button>
                           ))}
                        </div>
                      )}
                    </div>
                  )
               }
               return (
                <button
                  key={link.name}
                  onClick={() => handleScrollTo(link.href)}
                  className="w-full text-left block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-brand-600 hover:bg-brand-50 border-b border-gray-50 last:border-0"
                >
                  {link.name}
                </button>
               )
            })}
            <div className="pt-4 px-3">
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full text-center bg-brand-600 text-white px-5 py-3 rounded-xl font-bold hover:bg-brand-700 shadow-sm"
                >
                  Get Quote
                </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;