import React from 'react';
import { Phone, Mail, Clock, MapPin, Facebook } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-slate-900 text-white pt-32 pb-20 min-h-[80vh] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">We are here to help your business grow. Reach out to us via phone, WhatsApp, or visit our shop.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold text-white mb-6">PrimePack</h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Your partner for affordable, high-quality packaging solutions in Bangladesh. Let's grow your business together.
            </p>
            <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-600 transition-colors">
                    <Facebook className="w-5 h-5" />
                </a>
                <a href={`https://wa.me/${BUSINESS_INFO.whatsapp}`} className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-green-600 transition-colors">
                    <Phone className="w-5 h-5" />
                </a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="col-span-1 lg:col-span-1">
             <h4 className="text-lg font-bold text-white mb-6">Quick Contact</h4>
             <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-brand-500 mt-1 shrink-0" />
                    <div>
                        <p className="text-sm text-slate-400">Phone / WhatsApp</p>
                        <p className="font-semibold text-lg">{BUSINESS_INFO.phone}</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-brand-500 mt-1 shrink-0" />
                    <div>
                        <p className="text-sm text-slate-400">Email Address</p>
                        <p className="font-medium text-lg text-slate-200">{BUSINESS_INFO.email}</p>
                    </div>
                </div>
             </div>
          </div>

           {/* Address & Hours */}
          <div className="col-span-1 lg:col-span-1">
             <h4 className="text-lg font-bold text-white mb-6">Visit Us</h4>
             <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-brand-500 mt-1 shrink-0" />
                    <div>
                        <p className="text-sm text-slate-400">Business Hours</p>
                        <p className="font-medium text-slate-200">{BUSINESS_INFO.hours}</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-brand-500 mt-1 shrink-0" />
                    <div>
                        <p className="text-sm text-slate-400">Address</p>
                        <p className="font-medium text-slate-200 max-w-[200px]">{BUSINESS_INFO.address}</p>
                    </div>
                </div>
             </div>
          </div>
        </div>

        <div className="bg-slate-800 rounded-2xl p-8 text-center">
             <h4 className="text-xl font-bold text-white mb-4">Need a Quick Quote?</h4>
             <p className="text-slate-400 text-sm mb-6">Send us your requirements via WhatsApp and get an instant price estimation.</p>
             <a 
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-brand-600 hover:bg-brand-500 text-white font-bold py-3 px-8 rounded-xl transition-colors"
             >
                Chat on WhatsApp
             </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;