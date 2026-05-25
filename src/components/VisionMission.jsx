import React from 'react';
import { motion } from 'framer-motion';

const VisionMission = () => {
  const missions = [
    "To foster holistic excellence in the new generation of students.",
    "To instill in them, the power of aggressive positive thinking, insatiable desire for information and knowledge, a penchant for out-of-the box ideation and capacity of execution.",
    "To contribute to the society with honesty and integrity through innovative research in the multi-disciplinary areas of evolving and upcoming technologies."
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container-custom relative z-10">
        
        {/* Vision Section */}
        <div className="max-w-4xl mx-auto text-center mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center gap-4 mb-8">
              <span className="w-16 h-[3px] bg-brand-accent rounded-full"></span>
              <h2 className="text-sm md:text-base font-black tracking-[5px] text-brand-primary uppercase">Our Vision</h2>
              <span className="w-16 h-[3px] bg-brand-accent rounded-full"></span>
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-slate-900 leading-tight">
              "To become a sustainable institution of excellence, advancing innovative education, research and development."
            </h3>
          </motion.div>
        </div>

        {/* Mission Section */}
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-black font-serif text-slate-900">Our Mission</h2>
            <div className="h-[2px] flex-1 bg-gradient-to-r from-slate-200 to-transparent"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {missions.map((mission, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_15px_50px_-15px_rgba(0,0,0,0.05)] border border-slate-100 relative group hover:-translate-y-2 transition-all duration-300"
              >
                {/* Decorative top bar */}
                <div className="absolute top-0 right-10 w-12 h-1.5 bg-brand-accent rounded-b-md transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                
                {/* Number Badge */}
                <div className="w-16 h-16 rounded-2xl bg-brand-primary/5 text-brand-primary flex items-center justify-center text-3xl font-black mb-8 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                  0{index + 1}
                </div>
                
                {/* Mission Text */}
                <p className="text-slate-600 font-medium leading-relaxed text-lg">
                  {mission}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.02]">
        <div className="absolute top-1/4 -right-64 w-96 h-96 rounded-full bg-brand-primary blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-64 w-96 h-96 rounded-full bg-brand-accent blur-3xl"></div>
      </div>
    </section>
  );
};

export default VisionMission;
