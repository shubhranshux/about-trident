import React from 'react';
import { motion } from 'framer-motion';

const MinimalistQuote = ({ quote, img, name, detail, delay }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="py-12 border-b border-slate-200 flex flex-col md:flex-row gap-8 lg:gap-16 items-start md:items-center group"
    >
      <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-full overflow-hidden shadow-lg border-2 border-white">
        <img src={img} alt={name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
      </div>
      
      <div className="flex-1 relative">
        <div className="absolute -top-6 -left-4 text-6xl font-serif text-brand-primary/10 select-none -z-10 leading-none">
          "
        </div>
        <p className="text-2xl md:text-3xl font-serif text-slate-800 leading-relaxed italic mb-4 relative z-10">
          {quote}
        </p>
        <div className="flex items-center gap-4">
          <div className="w-8 h-px bg-brand-primary/50" />
          <div>
            <h4 className="text-lg font-black text-slate-900 tracking-tight">{name}</h4>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">{detail}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Success = () => {
  return (
    <section id="success" className="pt-32 pb-40 bg-white overflow-hidden relative">
      
      {/* Subtle Texture */}
      <div className="absolute inset-0 bg-academic-noise opacity-30 pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="mb-20">
          <span className="text-xs font-bold tracking-[0.4em] text-slate-400 uppercase mb-4 block">STUDENT SUCCESS</span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="text-5xl md:text-7xl font-serif font-black text-slate-900 leading-tight">
              Voices of <br/> <span className="italic text-brand-primary font-light">Excellence</span>
            </h2>
            <p className="text-lg font-medium text-slate-500 max-w-sm pb-2">
              Hear from our alumni who have gone on to shape the global technological landscape.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto border-t border-slate-200">
          <MinimalistQuote 
            quote="Trident provided me with the perfect blend of technical rigor and creative freedom. The labs are truly world-class and fostered my ability to innovate."
            img="/student_rahul_sharma_cse_portrait_1775288690112.png"
            name="Rahul Sharma"
            detail="CSE, Batch of 2024"
            delay={0.1}
          />
          <MinimalistQuote 
            quote="The faculty mentorship here is unparalleled. I was able to publish two research papers before graduating, which directly led to my master's acceptance."
            img="/student_anjali_priya_etc_portrait_1775288708312.png"
            name="Anjali Priya"
            detail="ETC, Batch of 2023"
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
};

export default Success;
