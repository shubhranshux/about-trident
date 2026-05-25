import React from 'react';
import { motion } from 'framer-motion';

const Recognitions = () => {
  return (
    <section id="academics" className="pt-32 pb-40 bg-[#1A1817] overflow-hidden relative divider-slant-top z-30">
      
      {/* Background Texture for Richness */}
      <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
           style={{
             backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
             backgroundSize: '32px 32px'
           }}
      />
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-to-l from-brand-accent/5 to-transparent pointer-events-none" />

      <div className="container-custom relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center max-w-4xl mx-auto"
        >
          <span className="text-[10px] font-bold tracking-[0.4em] text-white/40 uppercase mb-6 block">RANKINGS & RECOGNITION</span>
          <h2 className="text-5xl md:text-6xl font-serif font-black text-white leading-tight mb-8">
            Trident Academy of <span className="italic text-brand-yellow font-light">Technology</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/70 font-medium font-serif italic border-y border-white/10 py-6 inline-block">
            "Consistently ranked among India's finest — measured not by ambition, but by achievement."
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Section 1: Top 100 - Full Width Card */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden group hover:bg-white/10 transition-colors duration-500"
          >
            {/* Decorative large number */}
            <div className="absolute -bottom-10 -right-10 text-[200px] lg:text-[300px] font-black font-serif text-white/5 leading-none pointer-events-none select-none transition-transform duration-700 group-hover:scale-110">
              #25
            </div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-1 bg-brand-yellow mb-8" />
                <h3 className="text-3xl md:text-5xl font-black font-serif text-white mb-6 leading-tight">
                  Ranked among India's <br className="hidden md:block"/>
                  <span className="text-brand-yellow">Top 100</span> Engineering Institutions
                </h3>
              </div>
              <div>
                <p className="text-lg text-white/70 leading-relaxed font-medium">
                  In a state where formal institutional rankings were long absent, Trident Academy of Technology rose above the silence — earning national recognition on merit alone. For five consecutive years, Trident has featured in the prestigious DataQuest Magazine survey, standing shoulder to shoulder with IITs, IIITs, NITs, and Deemed Universities in the list of India's Top 100 Engineering Institutions.
                  <br/><br/>
                  In the most recently concluded DataQuest CMR Rankings, Trident claimed the <strong className="text-white">#25 spot nationally</strong> — a testament to its relentless pursuit of academic excellence, infrastructure, and industry relevance.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Section 2: Dominating Odisha */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-slate-100 to-transparent rounded-bl-full pointer-events-none" />
            
            <h3 className="text-3xl md:text-4xl font-black font-serif text-slate-900 mb-6">
              Dominating the Rankings in Odisha
            </h3>
            <p className="text-slate-600 mb-10 text-lg leading-relaxed font-medium">
              Closer to home, Trident's dominance is equally compelling. In the most recent local rankings conducted under Biju Patnaik University of Technology (BPUT), Odisha, Trident swept the board:
            </p>

            <div className="space-y-6">
              {[
                { icon: "🥇", rank: "#1", title: "MCA Institution in Odisha", desc: "Trident Academy of Technology, Bhubaneswar" },
                { icon: "🥇", rank: "#1", title: "Biotechnology College in Odisha", desc: "Trident Academy of Technology, Bhubaneswar" },
                { icon: "🏅", rank: "#4", title: "Private Engineering College", desc: "under BPUT, Odisha — Trident Academy of Technology" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-5 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow group">
                  <div className="text-3xl mt-1 grayscale group-hover:grayscale-0 transition-all duration-300">{item.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1 flex items-center gap-3">
                      <span className="text-brand-accent">{item.rank}</span> {item.title}
                    </h4>
                    <p className="text-slate-500 text-sm font-medium uppercase tracking-wide">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Section 3: Outcomes */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 bg-gradient-to-br from-brand-accent to-orange-600 rounded-3xl p-8 md:p-12 flex flex-col justify-center relative overflow-hidden text-white"
          >
            {/* Abstract Background Elements */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-black/20 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <svg className="w-12 h-12 text-white/30 mb-8" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
              
              <h3 className="text-3xl font-black font-serif mb-6 leading-tight">
                Rankings Built on Real Outcomes
              </h3>
              
              <div className="space-y-6 text-white/90 text-lg leading-relaxed font-medium">
                <p>
                  These rankings are not numbers on a wall — they are the collective reflection of thousands of students who graduated prepared, hundreds of faculty who taught with dedication, and an institution that never compromised on its founding promise: world-class education, grounded in values.
                </p>
                <div className="h-px w-full bg-white/20" />
                <p className="italic font-serif text-2xl">
                  At Trident, every ranking is a milestone — and every milestone is a new starting line.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Recognitions;
