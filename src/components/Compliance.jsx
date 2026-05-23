import React from 'react';
import { motion } from 'framer-motion';

const DocItem = ({ title, links, index }) => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="flex flex-col md:flex-row md:items-end justify-between py-10 border-b border-white/10 group relative"
  >
    {/* Architectural Line Fill on Hover */}
    <div className="absolute bottom-0 left-0 h-[1px] bg-brand-yellow w-0 group-hover:w-full transition-all duration-700 ease-out" />
    
    <div className="flex-1 mb-6 md:mb-0">
      <div className="text-[10px] font-bold text-white/40 tracking-[0.3em] uppercase mb-2">0{index + 1} // DOCUMENT</div>
      <h4 className="text-3xl md:text-5xl font-serif font-black text-white group-hover:text-brand-yellow transition-colors">{title}</h4>
    </div>
    <div className="flex flex-col gap-4 md:items-end">
      {links.map((link, i) => (
        <a 
          key={i} 
          href={link.href} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white/60 font-medium hover:text-white transition-colors flex items-center gap-3 group/link text-right text-sm tracking-wide"
        >
          {link.name}
          <div className="w-8 h-[1px] bg-white/20 group-hover/link:w-16 group-hover/link:bg-brand-yellow transition-all duration-300" />
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
        <div className="grid lg:grid-cols-12 gap-24 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <span className="text-[10px] font-bold tracking-[0.4em] text-white/40 uppercase mb-8 block border-l-2 border-brand-yellow pl-4">INSTITUTIONAL INTEGRITY</span>
            <h2 className="text-5xl md:text-7xl font-serif font-black mb-10 text-white leading-tight">
              Transparency & <br/> <span className="italic text-brand-yellow font-light">Compliance</span>
            </h2>
            <p className="text-lg font-medium text-white/60 leading-relaxed max-w-sm mb-12">
              Trident Academy of Technology maintains the highest standards of transparency in its operations and financial management. Access our official documents and regulatory approvals here.
            </p>
            
            {/* Museum Plaque Style Quote */}
            <div className="p-8 border border-white/10 bg-white/5 shadow-sm relative">
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-brand-yellow" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b border-r border-brand-yellow" />
              <p className="text-white/80 font-serif italic text-xl leading-relaxed">
                "Governance rooted in trust and unwavering institutional integrity."
              </p>
            </div>
          </motion.div>

          <div className="lg:col-span-7 flex flex-col pt-4">
            <div className="border-t border-white/10" />
            <DocItem 
              title="Audited Financials" 
              index={0}
              links={[
                { name: "FY 2024-2025 (Provisional)", href: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/PROVISIONAL-BS.pdf" },
                { name: "FY 2023-2024", href: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/D.Foundation-2023-24.pdf" }
              ]} 
            />
            <DocItem 
              title="Rules & Regulations" 
              index={1}
              links={[
                { name: "Student Hand Book", href: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/Student-Hand-Book-Revised.pdf" },
                { name: "HR Policies", href: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/HR-POLICY.pdf" }
              ]} 
            />
            <DocItem 
              title="AICTE Approvals" 
              index={2}
              links={[
                { name: "Approval Letter 2025-26", href: "https://tat.ac.in/wp-content/uploads/2025/09/EOA-Report-25-26.pdf" }
              ]} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Compliance;
