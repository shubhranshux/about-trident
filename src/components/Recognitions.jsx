import React from 'react';
import { motion } from 'framer-motion';

const StatRow = ({ number, label, desc, delay }) => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    className="py-10 border-b border-white/10 flex flex-col md:flex-row md:items-center gap-6 md:gap-12 group hover:bg-white/5 transition-colors px-6 -mx-6 rounded-2xl"
  >
    <div className="md:w-1/3 shrink-0">
      <h3 className="text-4xl lg:text-6xl font-black font-serif text-brand-yellow group-hover:text-white transition-colors">{number}</h3>
      {label && <p className="text-xs font-bold text-white/50 uppercase tracking-[0.2em] mt-2">{label}</p>}
    </div>
    <div className="md:w-2/3">
      <p className="text-lg font-medium leading-relaxed text-white/80 group-hover:text-white transition-colors">{desc}</p>
    </div>
  </motion.div>
);

const Recognitions = () => {
  return (
    <section id="academics" className="pt-32 pb-48 bg-primary overflow-hidden relative divider-slant-top z-30">
      
      {/* Background Texture for Richness */}
      <div className="absolute inset-0 bg-academic-noise opacity-20 pointer-events-none mix-blend-soft-light" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/20 to-transparent pointer-events-none" />

      <div className="container-custom relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left: Main Highlight */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <span className="text-xs font-bold tracking-[0.3em] text-white/50 uppercase mb-6 block">ACADEMIC RECOGNITION</span>
            <h2 className="text-5xl md:text-7xl font-serif font-black text-white leading-tight mb-12">
              Benchmark of <br />
              <span className="italic text-brand-yellow font-light">Success.</span>
            </h2>
            
            <div className="bg-white/5 backdrop-blur-md rounded-[32px] p-10 md:p-14 relative overflow-hidden border border-white/10 shadow-2xl">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />
              <h3 className="text-7xl lg:text-[100px] font-black font-serif text-white mb-6 leading-none">Top 100</h3>
              <div className="w-16 h-1 bg-brand-yellow mb-8" />
              <p className="text-xl font-medium text-white/80 leading-relaxed">
                Consistently ranked among the Top 100 Engineering Institutions in India by DataQuest, standing proudly alongside leading IITs and NITs.
              </p>
            </div>
          </motion.div>

          {/* Right: Structured List */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="border-t border-white/10">
              <StatRow 
                number="No. 1"
                label="IN ODISHA"
                desc="Ranked #1 MCA Institution in the state for unparalleled academic excellence."
                delay={0.1}
              />
              <StatRow 
                number="#25"
                label="NATIONWIDE"
                desc="Secured 25th position nationally in the DataQuest CMR Rankings."
                delay={0.2}
              />
              <StatRow 
                number="No. 4"
                label="PRIVATE ENGG"
                desc="Ranked 4th among Private Engineering Colleges under BPUT, Odisha."
                delay={0.3}
              />
              <StatRow 
                number="100%"
                label="PLACEMENT"
                desc="Comprehensive placement assistance yielding industry-leading packages for our graduates."
                delay={0.4}
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Recognitions;
