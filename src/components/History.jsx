import React from 'react';
import { motion } from 'framer-motion';

const History = () => {
  const milestones = [
    { year: "1991", title: "Founding Spark", desc: "Incorporation of Trident Softech Private Limited by five visionary technocrats.", img: "/visionary_meeting_journey_1774669005557.png" },
    { year: "1995", title: "Education Focus", desc: "Started as a corporate finishing school providing industry-ready tech training.", img: "/milestones_vibrant_timeline_nodes_1774672926576.png" },
    { year: "2005", title: "Academy Founding", desc: "Trident Academy of Technology established as a premium degree engineering college.", img: "/campus_hero_modern_1774668970671.png" },
    { year: "2023", title: "Autonomous Journey", desc: "Continuous evolution as a UGC Autonomous institution with industry-leading placements.", img: "/vision_vibrant_colorful_students_1774672909834.png" },
  ];

  return (
    <section id="milestones" className="pt-24 pb-48 bg-[#FDF8EE] overflow-hidden relative bg-blueprint-subtle divider-curve-bottom z-20">
      <div className="container-custom relative z-10">
        
        {/* Header */}
        <div className="mb-32 text-center flex flex-col items-center">
          <span className="text-xs font-bold tracking-[0.4em] text-slate-400 uppercase mb-6 block">THE JOURNEY</span>
          <h2 className="text-5xl md:text-7xl font-serif font-black text-slate-900 mb-8">
            Our <span className="italic text-brand-primary font-light">History</span>
          </h2>
          <div className="w-px h-16 bg-brand-primary/30" />
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Architectural Line */}
          <div className="absolute top-0 bottom-0 left-8 md:left-1/2 w-px bg-brand-primary/20 -translate-x-1/2 hidden md:block" />

          <div className="space-y-32">
            {milestones.map((m, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={`flex flex-col md:flex-row items-center gap-12 lg:gap-24 relative ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Dot (Desktop only) */}
                  <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#FDF8EE] border-4 border-brand-primary z-20" />

                  {/* Image Block */}
                  <div className="w-full md:w-1/2 flex justify-center">
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl relative border border-brand-primary/10">
                      <img 
                        src={m.img} 
                        alt={m.title} 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out hover:scale-105" 
                      />
                      <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.2)] mix-blend-overlay pointer-events-none" />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className={`w-full md:w-1/2 flex flex-col relative ${isEven ? 'md:text-right md:items-end' : 'md:text-left md:items-start'} items-center text-center`}>
                    <span className="text-[100px] md:text-[140px] font-black font-serif text-brand-yellow/30 leading-none select-none tracking-tighter absolute top-1/2 -translate-y-1/2 -z-10">
                      {m.year}
                    </span>
                    <div className="relative z-10 pt-8 pb-8">
                      <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">{m.title}</h3>
                      <p className="text-lg md:text-xl font-medium text-slate-600 leading-relaxed max-w-sm">
                        {m.desc}
                      </p>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default History;
