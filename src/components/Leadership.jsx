import React from 'react';
import { motion } from 'framer-motion';

const BoardPortrait = ({ img, name, role, desc, delay }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="flex flex-col items-center text-center group"
    >
      <div className="w-full aspect-square max-w-[280px] overflow-hidden rounded-full shadow-2xl relative mb-8 border-4 border-white">
        <img 
          src={img} 
          alt={name} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" 
        />
        <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.1)] pointer-events-none mix-blend-overlay" />
      </div>
      <h3 className="text-2xl font-serif font-black mb-1 text-slate-900 group-hover:text-brand-accent transition-colors">{name}</h3>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary mb-4">{role}</p>
      <p className="text-sm font-medium text-slate-500 leading-relaxed max-w-[240px]">{desc}</p>
      <div className="w-px h-12 bg-brand-primary/20 mt-6" />
    </motion.div>
  );
};

const Leadership = () => {
  return (
    <section id="leadership" className="pt-32 pb-40 bg-soft overflow-hidden relative">
      
      {/* Decorative Blueprint Background */}
      <div className="absolute inset-0 bg-blueprint-subtle opacity-50" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/40 blur-[100px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Principal Message - Architectural Layout */}
        <div id="principal" className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center mb-40">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center"
          >
            {/* Wrapper to bind text precisely to the image */}
            <div className="relative">
              
              {/* Immersive Portrait */}
              <div className="w-[380px] max-w-[85vw] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative border-8 border-white">
                <img 
                  src="/principal_passport.png" 
                  alt="Prof. (Dr) D. N. Pattanayak" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out hover:scale-105" 
                  style={{ objectPosition: 'center 10%' }}
                />
                <div className="absolute inset-0 bg-brand-primary/10 mix-blend-multiply pointer-events-none" />
              </div>
              
              {/* Elegant Name Plate overlapping image */}
              <div className="absolute -bottom-8 -right-8 bg-white p-6 md:p-8 shadow-xl max-w-[250px] border-b-4 border-brand-primary">
                <h3 className="text-xl font-black font-serif text-slate-900 leading-tight mb-2">Prof. (Dr) D. N. Pattanayak</h3>
                <span className="text-xs font-bold text-brand-primary uppercase tracking-widest">Principal</span>
              </div>

            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 pl-0 lg:pl-12 mt-12 lg:mt-0"
          >
            <span className="text-xs font-bold tracking-[0.4em] text-slate-400 uppercase mb-8 block flex items-center gap-4">
              <div className="w-12 h-px bg-slate-400" /> LEADERSHIP VOICE
            </span>
            <div className="relative pt-8 md:pt-16 mb-12">
              <span className="text-[120px] md:text-[200px] leading-none font-serif text-brand-primary/5 absolute top-0 left-0 md:-left-10 pointer-events-none select-none">"</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-black text-slate-900 leading-tight relative z-10">
                At Trident, we don't just teach technology; <br />
                <span className="italic text-brand-accent font-light">we cultivate the innovators</span> of tomorrow.
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10 text-slate-600 text-lg leading-relaxed font-medium">
              <p>
                Our institution stands on the solid foundations of innovation, integrity, and excellence. We believe in providing our students with a holistic environment where world-class infrastructure meets personalized guidance. 
              </p>
              <p>
                We are dedicated to shaping minds that are not only technically proficient but are also responsible global citizens. Join us in our journey of continuous learning and professional growth.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Governing Board */}
        <div id="governance" className="mb-32 flex flex-col items-center text-center">
          <span className="text-xs font-bold tracking-[0.4em] text-slate-400 uppercase mb-6 block">GOVERNANCE</span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-black text-slate-900 mb-8">
            Board of <span className="italic text-brand-primary">Directors</span>
          </h2>
          <div className="w-px h-16 bg-brand-primary/30" />
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
          <BoardPortrait 
            img="/chairperson_panigrahi_1775112672468.png"
            name="Smt. S. Panigrahi"
            role="Chairperson"
            desc="Trustee – D. Foundation"
            delay={0}
          />
          <BoardPortrait 
            img="/member_nanda_portrait_1775112695824.png"
            name="Dr. B. K. Nanda"
            role="Member"
            desc="Ex-Vice Chancellor, VSSUT, Burla (Ph.D, Mechanical)"
            delay={0.1}
          />
          <BoardPortrait 
            img="https://tat.ac.in/wp-content/uploads/2026/02/Passport_Size_Photo_Final.png"
            name="Prof. (Dr) D. N. Pattanayak"
            role="Member Secretary"
            desc="Principal (Ph.D, JU, Electrical Engg)"
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
};

export default Leadership;
