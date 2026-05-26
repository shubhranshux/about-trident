import React from 'react';
import { TextReveal, StaggerChildren, MagneticButton } from '../utils/animations';

const Compliance = () => {
  const documents = [
    { title: "AICTE Approval Letters", desc: "Mandatory disclosures and yearly approval extensions", year: "2023-24" },
    { title: "BPUT Affiliation", desc: "Permanent affiliation certificates from Biju Patnaik University of Technology", year: "2023" },
    { title: "NBA Accreditation", desc: "National Board of Accreditation status for eligible programs", year: "Active" },
    { title: "NAAC Assessment", desc: "Grade and institutional assessment metrics", year: "A Grade" },
    { title: "Audit Reports", desc: "Annual financial statements and academic audits", year: "2022-23" },
    { title: "Anti-Ragging Policy", desc: "UGC guidelines and committee details", year: "Updated" }
  ];

  return (
    <section id="compliance" className="py-32 md:py-44 relative overflow-hidden" style={{ backgroundColor: '#181C25' }}>
      
      {/* Thick background diagonals - solid colors */}
      <div className="absolute top-[-5%] left-[-15%] w-[140%] h-[80px] bg-[#1D222D] rotate-[-12deg] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[120%] h-[60px] bg-[#222834] rotate-[22deg] pointer-events-none" />
      <div className="absolute top-[60%] left-[-10%] w-[130%] h-[100px] bg-[#282F3D] rotate-[-28deg] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <span className="editorial-label text-white/30 justify-center mb-8 block">TRANSPARENCY</span>
          <TextReveal stagger={0.02}>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-black text-white leading-tight mb-8">
              Statutory <span className="italic text-brand-accent font-light">Compliance</span>
            </h2>
          </TextReveal>
          <div className="h-px w-24 bg-white/20 mx-auto mb-8" />
          <p className="text-lg text-white/50 max-w-2xl mx-auto font-medium">
            We believe in complete institutional transparency. All our statutory approvals, accreditations, and mandatory disclosures are available for public review.
          </p>
        </div>

        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 max-w-6xl mx-auto" stagger={0.1}>
          {documents.map((doc, index) => (
            <div 
              key={index} 
              className="group border-t border-white/10 pt-8 hover:border-brand-accent transition-colors duration-500"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase">{`DOC 0${index + 1}`}</span>
                <span className="text-xs font-bold text-brand-accent bg-brand-accent/10 px-3 py-1">{doc.year}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">
                {doc.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                {doc.desc}
              </p>
              
              <MagneticButton strength={0.2}>
                <a href="#" className="inline-flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest hover:text-brand-accent transition-colors group/btn">
                  View Document 
                  <span className="w-6 h-px bg-white/50 group-hover/btn:w-10 group-hover/btn:bg-brand-accent transition-all duration-300" />
                </a>
              </MagneticButton>
            </div>
          ))}
        </StaggerChildren>

      </div>
    </section>
  );
};

export default Compliance;
