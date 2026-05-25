import React from 'react';
import { motion } from 'framer-motion';

const Identity = () => {
  return (
    <section id="identity" className="pt-32 pb-48 bg-white relative divider-slant-bottom z-10 overflow-hidden">
      
      {/* Animated Glowing Orbs Background */}
      <div className="glow-orb-1" />
      <div className="glow-orb-2" />

      {/* Creative Watermark Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden pointer-events-none opacity-[0.03] select-none">
        <h2 className="text-[300px] font-black font-serif text-brand-primary leading-none -rotate-90 origin-bottom-right translate-x-32 translate-y-32 text-gradient">
          TRIDENT
        </h2>
      </div>

      <div className="container-custom relative z-10">
        
        {/* Asymmetric Top Grid */}
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            {/* Minimalist Line Divider */}
            <div className="w-24 h-1 bg-gradient-to-r from-brand-primary to-brand-accent mb-8" />
            
            <h2 className="text-5xl md:text-7xl font-serif font-black text-slate-900 mb-10 leading-tight">
              A Legacy of <br />
              <span className="text-gradient">Excellence.</span>
            </h2>
            
            <p className="text-lg md:text-xl font-medium text-slate-600 leading-relaxed mb-12">
              Established in 2005, Trident Academy of Technology has rapidly become one of the most respected names in technical education in Odisha and India — a reputation built not on marketing, but on measurable outcomes and unwavering commitment to quality. Our campus thrives on intellectual curiosity, collaborative energy, and a belief that the most powerful education lives at the intersection of rigorous academics and genuine passion. What truly sets Trident apart is our holistic approach: we nurture character alongside competence, shaping graduates who carry strong values and sanskars alongside technical expertise — producing not just industry-ready professionals, but compassionate, principled leaders prepared to drive the global technological revolution.
            </p>


          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 flex justify-center lg:justify-end"
          >
            {/* Immersive Image with Glowing Drop Shadow */}
            <div className="relative w-full max-w-[500px]">
              {/* Animated Glow behind the image */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-accent rounded-[40px] blur-2xl opacity-30 animate-pulse" />
              
              <div className="w-full aspect-[4/5] rounded-[40px] overflow-hidden relative border border-white/50 shadow-2xl">
                <img 
                  src="/Gemini_Generated_Image_e1ma6xe1ma6xe1ma.png" 
                  alt="Students collaborating in modern campus" 
                  className="w-full h-full object-cover transition-all duration-1000 ease-out hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/40 to-transparent pointer-events-none" />
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Identity;
