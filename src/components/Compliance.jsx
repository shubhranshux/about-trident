import React from 'react';
import { motion } from 'framer-motion';

const DocItem = ({ title, links, index }) => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="flex flex-col xl:flex-row xl:items-center justify-between py-12 border-b border-white/10 group relative"
  >
    {/* Architectural Line Fill on Hover */}
    <div className="absolute bottom-0 left-0 h-[1px] bg-brand-yellow w-0 group-hover:w-full transition-all duration-700 ease-out" />
    
    <div className="flex-1 mb-8 xl:mb-0 xl:pr-12">
      <div className="text-[10px] font-bold text-white/40 tracking-[0.3em] uppercase mb-3">0{index + 1} // DOCUMENT</div>
      <h4 className="text-3xl md:text-4xl font-serif font-black text-white group-hover:text-brand-yellow transition-colors leading-tight">{title}</h4>
    </div>
    
    <div className="flex flex-col gap-3 w-full xl:w-auto">
      {links.map((link, i) => (
        <a 
          key={i} 
          href={link.href || "#"} 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-6 py-3.5 border border-white/20 rounded-full text-white/80 font-medium hover:bg-brand-yellow hover:text-slate-900 hover:border-brand-yellow transition-all duration-300 text-sm tracking-wide flex items-center justify-between group/btn min-w-[320px]"
        >
          <span>{link.name}</span>
          <svg className="w-4 h-4 ml-4 opacity-50 group-hover/btn:opacity-100 transform group-hover/btn:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </a>
      ))}
    </div>
  </motion.div>
);

const Compliance = () => {
  return (
    <section id="compliance" className="pt-32 pb-40 bg-[#1A1817] text-white overflow-hidden relative divider-slant-top z-20 mt-20">
      {/* Background Architectural Lines */}
      <div className="absolute top-0 bottom-0 left-[10%] w-px bg-white/5 -z-10" />
      <div className="absolute top-0 bottom-0 right-[10%] w-px bg-white/5 -z-10" />
      <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -z-10" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4"
          >
            <span className="text-[10px] font-bold tracking-[0.4em] text-white/40 uppercase mb-8 block border-l-2 border-brand-yellow pl-4">INSTITUTIONAL INTEGRITY</span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-black mb-10 text-white leading-tight">
              Transparency & <br/> <span className="italic text-brand-yellow font-light">Compliance</span>
            </h2>
            <p className="text-lg font-medium text-white/60 leading-relaxed mb-12">
              Trident Academy of Technology maintains the highest standards of transparency in its operations and financial management. Access our official documents and regulatory approvals here.
            </p>
            
            {/* Museum Plaque Style Quote */}
            <div className="p-8 border border-white/10 bg-white/5 shadow-sm relative hidden lg:block">
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-brand-yellow" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b border-r border-brand-yellow" />
              <p className="text-white/80 font-serif italic text-xl leading-relaxed">
                "Governance rooted in trust and unwavering institutional integrity."
              </p>
            </div>
          </motion.div>

          <div className="lg:col-span-8 flex flex-col pt-4">
            <div className="border-t border-white/10" />
            
            <DocItem 
              title="Audit & Approvals" 
              index={0}
              links={[
                { name: "Audited Statement FY 2024-2025 (Provisional)" },
                { name: "Audited Statement FY 2023-2024" },
                { name: "Audited Statement FY 2022-2023" }
              ]} 
            />
            
            <DocItem 
              title="AICTE Approvals" 
              index={1}
              links={[
                { name: "Audited Statement FY 2024-2025 (Provisional)" },
                { name: "Audited Statement FY 2023-2024" },
                { name: "Audited Statement FY 2022-2023" }
              ]} 
            />
            
            <DocItem 
              title="Rules & Regulations" 
              index={2}
              links={[
                { name: "FACULTY HAND BOOK" },
                { name: "STUDENTS HAND BOOK" },
                { name: "HR POLICIES" }
              ]} 
            />
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Compliance;
