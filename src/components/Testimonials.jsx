import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TESTIMONIALS = [
  { 
    id: 1, 
    text: "Since joining Local Bazaar, my organic snacks reach more customers without delivery hassles. The Click & Collect model works great!", 
    image: "https://i.pravatar.cc/100?img=47" 
  },
  { 
    id: 2, 
    text: "Listing my stationery shop here has brought in local students and families. The community support is amazing.", 
    image: "https://i.pravatar.cc/100?img=12" 
  },
  { 
    id: 3, 
    text: "As a tutor, I found verified local clients easily. The domain system makes it easy for customers to find me.", 
    image: "https://i.pravatar.cc/100?img=33" 
  }
];

const Testimonials = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Staggered parallax for the 3 columns
  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const transforms = [y1, y2, y3];

  return (
    <div ref={containerRef} className="w-full max-w-7xl mx-auto py-20 px-6">
      
      <motion.div 
        style={{ y: y1 }}
        className="text-center mb-16"
      >
<h2 className="text-sm font-black uppercase tracking-widest text-gray-800">
           What our community says
         </h2>
      </motion.div>

      <div className="flex items-center justify-between gap-4 md:gap-8 relative">
        {/* Left Arrow */}
        <button className="hidden md:flex w-10 h-10 rounded-full border border-gray-300 items-center justify-center text-gray-400 hover:text-black hover:border-black transition-colors flex-shrink-0">
          ←
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
          {TESTIMONIALS.map((review, index) => (
            <motion.div 
              key={testimonial.id} 
              style={{ y: transforms[index] }}
              className="bg-white/40 backdrop-blur-md rounded-3xl p-8 border border-white/60 shadow-lg flex flex-col items-center text-center relative mt-8 hover:-translate-y-2 transition-transform duration-300"
            >
              {/* User Avatar - Overlapping top */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full border-4 border-[#f0f9f1] overflow-hidden shadow-sm">
                <img src={testimonial.image} alt="User" className="w-full h-full object-cover" />
              </div>
              
              <p className="text-sm text-gray-600 font-medium leading-relaxed italic mb-6">
                "{testimonial.text}"
              </p>
              

            </motion.div>
          ))}
        </div>

        {/* Right Arrow */}
        <button className="hidden md:flex w-10 h-10 rounded-full border border-gray-300 items-center justify-center text-gray-400 hover:text-black hover:border-black transition-colors flex-shrink-0">
          →
        </button>
      </div>

    </div>
  );
};

export default Testimonials;
