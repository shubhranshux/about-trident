import React from 'react';
import { motion } from 'framer-motion';

const History = () => {
  const chapters = [
    {
      year: "1991",
      badge: "THE SPARK",
      title: "From a Coffee Table Conversation to an Educational Revolution",
      text: "In 1991, five visionary young minds — including Pradipta, an Aeronautical Engineer from IIT Kanpur, and Prabir, an alumnus of Xavier's Institute of Management — gathered around a coffee table debating a bold question: Why can't India have world-class, self-financed education like Harvard, Stanford, and MIT?",
      accent: "from-amber-500 to-orange-600",
      image: "/history/1.png"
    },
    {
      year: "1995",
      badge: "THE ACTION",
      title: "A Movement, Not Just a Dream",
      text: "That conversation sparked a movement. Rather than waiting for change, they acted — founding Trident Softech Private Limited (TSPL) and launching Trident's Advanced Computer Training, a corporate finishing school that trained engineers in cutting-edge software platforms like Oracle, Sybase, and DB2, fast-tracking careers in global markets.",
      accent: "from-blue-500 to-indigo-600",
      image: "/history/2.jpeg"
    },
    {
      year: "2005",
      badge: "THE GROWTH",
      title: "From Training to a Full Educational Ecosystem",
      text: "What began as a single training division grew into a full-fledged educational ecosystem. By 1998, Trident had launched its first MCA colleges, followed by a Biotechnology college in 2002, and a premier Engineering College in 2005 — each institution built on the founding belief that quality education, backed by private enterprise and world-class infrastructure, transforms lives.",
      accent: "from-emerald-500 to-teal-600",
      image: "/history/3.jpeg"
    },
    {
      year: "2023",
      badge: "THE VINDICATION",
      title: "Ahead of Its Time",
      text: "Vindicated by the Supreme Court's landmark rulings in Unni Krishnan (1993), TMA Pai Foundation, and PA Inamdar, Trident's founding vision proved ahead of its time: that self-financing private institutions are not commercialization — they are the engine of India's knowledge revolution.",
      accent: "from-violet-500 to-purple-600",
      image: "/history/4.png"
    },
  ];

  return (
    <section id="milestones" className="pt-24 pb-32 bg-[#FDF8EE] overflow-hidden relative z-20">
      <div className="container-custom relative z-10">
        
        {/* Header */}
        <div className="mb-20 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-bold tracking-[0.4em] text-slate-400 uppercase mb-6 block">THE JOURNEY</span>
            <h2 className="text-5xl md:text-7xl font-serif font-black text-slate-900 mb-6">
              Our <span className="italic text-brand-primary font-light">Story</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-xl mx-auto font-medium">
              A journey that started with a bold question and grew into an educational revolution.
            </p>
          </motion.div>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-6xl mx-auto">
          {/* Central line */}
          <div className="absolute top-0 bottom-0 left-6 lg:left-1/2 w-[2px] bg-gradient-to-b from-brand-primary/30 via-brand-accent/30 to-brand-primary/10 lg:-translate-x-1/2" />

          <div className="space-y-24">
            {chapters.map((ch, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="relative flex flex-col lg:flex-row items-center w-full"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 lg:left-1/2 top-8 lg:top-1/2 lg:-translate-y-1/2 -translate-x-1/2 z-20 hidden md:block">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${ch.accent} ring-4 ring-[#FDF8EE] shadow-lg`} />
                  </div>

                  {/* Text Content */}
                  <div className={`w-full lg:w-1/2 pl-16 lg:px-12 ${isEven ? 'lg:order-1 text-left lg:text-right' : 'lg:order-2 text-left'}`}>
                    <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.06)] border border-slate-100 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-shadow duration-500 group relative overflow-hidden text-left">
                      {/* Accent top strip */}
                      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${ch.accent} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                      
                      {/* Year + Badge */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                        <span className="text-5xl md:text-6xl font-black font-serif text-slate-900/10 leading-none select-none">
                          {ch.year}
                        </span>
                        <span className={`text-[10px] font-black tracking-[3px] uppercase bg-gradient-to-r ${ch.accent} text-white px-4 py-1.5 rounded-full w-max`}>
                          {ch.badge}
                        </span>
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-4 leading-tight tracking-tight">
                        {ch.title}
                      </h3>
                      
                      <p className="text-slate-600 font-medium leading-relaxed text-[15px] md:text-base">
                        {ch.text}
                      </p>
                    </div>
                  </div>

                  {/* Associated Image */}
                  <div className={`w-full lg:w-1/2 pl-16 lg:px-12 mt-8 lg:mt-0 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative group">
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                      <img 
                        src={ch.image} 
                        alt={ch.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      />
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

          {/* Closing statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-32 text-center relative"
          >
            {/* Final timeline dot */}
            <div className="absolute left-6 lg:left-1/2 -top-12 -translate-x-1/2 z-20 hidden md:block">
              <div className="w-6 h-6 rounded-full bg-brand-accent ring-4 ring-[#FDF8EE] shadow-lg flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>
            </div>

            <div className="pl-16 lg:pl-0 max-w-3xl mx-auto">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 md:p-14 text-center shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 pointer-events-none"
                     style={{
                       backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                       backgroundSize: '24px 24px'
                     }}
                />
                <p className="text-xl md:text-3xl font-serif font-black text-white leading-snug relative z-10">
                  Three decades on, that coffee table conversation <br className="hidden md:block" />
                  <span className="text-brand-accent italic"> continues to shape futures.</span>
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-1/4 -right-32 w-80 h-80 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default History;
