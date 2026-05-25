import React from 'react';
import { motion } from 'framer-motion';

const HexagonItem = ({ topText, mainText, delay }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay, type: "spring", stiffness: 100 }}
      viewport={{ once: true }}
      className="relative w-[280px] h-[240px] group mx-auto"
    >
      {/* Outer wrapper for golden border using clip-path */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-accent to-brand-accent/10 transition-transform duration-300 group-hover:scale-105 p-[2px]"
           style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}>
        
        {/* Inner hexagon (background) */}
        <div className="w-full h-full bg-[#0B1120] flex flex-col items-center justify-center p-8 text-center relative"
             style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}>
          
          {/* Subtle glow on hover */}
          <div className="absolute inset-0 bg-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          
          <span className="text-slate-400 text-[11px] md:text-xs font-bold tracking-widest uppercase mb-3 z-10">
            {topText}
          </span>
          <span className="text-xl md:text-2xl font-black text-brand-accent z-10 leading-tight">
            {mainText}
          </span>
          
        </div>
      </div>
    </motion.div>
  );
};

const StatsCounter = () => {
  const stats = [
    { topText: "Established reputation", mainText: "Trusted Brand" },
    { topText: "Holistic development", mainText: "Leaders & Humans" },
    { topText: "Core philosophy", mainText: "Values & Sanskars" },
    { topText: "Career readiness", mainText: "Industry-Ready" },
  ];

  return (
    <section id="stats-counter" className="pt-32 pb-32 bg-[#0f172a] relative overflow-hidden">
      {/* Honeycomb Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='69.2820323027551' viewBox='0 0 40 69.2820323027551' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 17.32050807568877l-20 11.547005383792516L0 17.32050807568877V-5.773502691896258l20-11.547005383792516 20 11.547005383792516V17.32050807568877zm0 46.188021535171024l-20 11.547005383792516-20-11.547005383792516V40.41451884327476l20-11.547005383792516 20 11.547005383792516v23.094010767585032zM20 51.96152422706728l-20 11.547005383792516-20-11.547005383792516V28.86751345948126l20-11.547005383792516 20 11.547005383792516v23.094010767585032z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
           }} 
      />
      
      {/* Subtle top and bottom borders */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-accent/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-accent/20 to-transparent"></div>
      
      <div className="container-custom relative z-10 max-w-7xl mx-auto">
        {/* Dynamic Honeycomb Wave Layout */}
        <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-4 gap-8">
             <div className="lg:-mt-24">
               <HexagonItem topText={stats[0].topText} mainText={stats[0].mainText} delay={0.1} />
             </div>
             <div className="lg:mt-24 lg:-ml-6 z-10">
               <HexagonItem topText={stats[1].topText} mainText={stats[1].mainText} delay={0.2} />
             </div>
             <div className="lg:-mt-24 lg:-ml-6 z-20">
               <HexagonItem topText={stats[2].topText} mainText={stats[2].mainText} delay={0.3} />
             </div>
             <div className="lg:mt-24 lg:-ml-6 z-30">
               <HexagonItem topText={stats[3].topText} mainText={stats[3].mainText} delay={0.4} />
             </div>
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
