import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  { name: "IKIGAI LMS", id: "ikigai", image: "/lovable-uploads/ikigai-logo-bw.png" },
  { name: "TRIPLE J HOMES", id: "triplej", image: "/lovable-uploads/triple-j-homes-text-only.png" },
  { name: "CHARINGO", id: "charingo" },
  { name: "AMASS RESEARCH", id: "amass" },
  { name: "MINHPHUC MOBILE", id: "minhphuc" }
];

const LogoStrip = () => {
  return (
    <div className="w-full bg-white border-y border-gray-100 py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-sm md:text-base text-gray-500 font-medium tracking-wide uppercase">
            Partnering with Tanoshi Vietnam on the journey of digital transformation and value breakthrough
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-24">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            >
              {brand.image ? (
                <img 
                  src={brand.image} 
                  alt={brand.name} 
                  className="h-8 md:h-10 lg:h-12 w-auto object-contain"
                />
              ) : (
                <span className="text-lg md:text-xl font-black tracking-tighter text-black whitespace-nowrap">
                  {brand.name}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoStrip;
