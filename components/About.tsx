import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, TrendingUp, Truck, Users } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    { icon: TrendingUp, text: "স্টার্টআপ-বান্ধব মূল্য" },
    { icon: Truck, text: "দ্রুত ও নির্ভরযোগ্য ডেলিভারি" },
    { icon: Users, text: "লোকাল ব্যবসার বিশ্বস্ত সহযোগী" },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Background decorative element */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-brand-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-base font-semibold text-brand-600 tracking-wide uppercase mb-2">আমাদের সম্পর্কে</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              উদ্যোক্তাদের পাশে আমরা, <br /> Idea থেকে Launch পর্যন্ত
            </h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              প্রাইমপ্যাক প্যাকেজিং , একটি ঢাকা-ভিত্তিক প্যাকেজিং সরবরাহকারী প্রতিষ্ঠান। আমরা নতুন স্টার্টআপ এবং ছোট ব্যবসার প্রবৃদ্ধিতে সাশ্রয়ী ও নির্ভরযোগ্য প্যাকেজিং সমাধান দিয়ে থাকি।
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              বক্স এবং পাউচ থেকে শুরু করে কাস্টম ব্র্যান্ডিং উপকরণ—আমরা স্থানীয় বাজারের চাহিদা বুঝি এবং আপনার বাজেটের মধ্যে সেরা সমাধান প্রদান করি।
            </p>

            <div className="space-y-4">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (idx * 0.1) }}
                  className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                >
                  <div className="bg-brand-100 p-2 rounded-full text-brand-600">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <span className="font-semibold text-slate-800">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-brand-600 rounded-2xl transform rotate-3 opacity-10"></div>
            <img 
              src="https://picsum.photos/id/445/800/800" 
              alt="PrimePack Warehouse" 
              className="relative rounded-2xl shadow-2xl w-full object-cover aspect-square"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden sm:block">
              <div className="flex items-center gap-4">
                 <div className="bg-green-100 p-3 rounded-full">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                 </div>
                 <div>
                    <p className="text-3xl font-bold text-slate-900">৫০০+</p>
                    <p className="text-sm text-slate-500 font-medium">হ্যাপি ক্লায়েন্ট</p>
                 </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;