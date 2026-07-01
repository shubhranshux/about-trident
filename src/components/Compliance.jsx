import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextReveal, StaggerChildren, MagneticButton } from '../utils/animations';

const Compliance = () => {
  const [showPolicies, setShowPolicies] = useState(false);

  const documents = [
    { title: "AICTE Approval Letters", desc: "Mandatory disclosures and yearly approval extensions", year: "2023-24", url: "/aicte-disclosure" },
    { title: "BPUT Affiliation", desc: "Permanent affiliation certificates from Biju Patnaik University of Technology", year: "2023", url: "/bput-affiliation" },
    { title: "NBA Accreditation", desc: "National Board of Accreditation status for eligible programs", year: "Active", url: "/nba" },
    { title: "NAAC Assessment", desc: "Grade and institutional assessment metrics", year: "A Grade", url: "/naac" },
    { title: "Audit Reports", desc: "Annual financial statements and academic audits", year: "2022-23", url: "/financial-audits" },
    { title: "Anti-Ragging Policy", desc: "UGC guidelines and committee details", year: "Updated", url: "/anti-ragging" }
  ];

  const policies = [
    { title: "Zero Emission Policy", url: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/institutional+documents/Zero-Emission-Policy.pdf" },
    { title: "Energy Conservation Pledge", url: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/institutional+documents/Energy-Conservation-Pledge.pdf" },
    { title: "Sustainable Policy", url: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/institutional+documents/Sustainable-Policy.pdf" },
    { title: "Start-up Policy", url: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/institutional+documents/Start-up-Policy.pdf" },
    { title: "Climate Action Policy", url: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/institutional+documents/Climate-Action-Policy.pdf" },
    { title: "Policy to safeguard individuals reporting discrimination", url: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/institutional+documents/Policy-to-safeguard-individuals-reporting-discrimination.pdf" },
    { title: "Anti-discrimination and Equal Employment Opportunity Policy", url: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/institutional+documents/Anti-discrimination-and-Equal-Employment-Opportunity-Policy-1.pdf" },
    { title: "Policy promoting women's applications and enrolment", url: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/institutional+documents/Policy-promoting-womens-applications-and-enrolment.pdf" },
    { title: "Smoke free Policy", url: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/institutional+documents/Smoke-free-Policy.pdf" },
    { title: "Scholarship Policy", url: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/institutional+documents/Scholarship_Policy.pdf" },
    { title: "Pay scale equality policy", url: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/institutional+documents/Pay-scale-equality-policy.pdf" },
    { title: "Annual Increment criteria for Academic Staff", url: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/institutional+documents/Annual-Increment-criteria-for-Academic-Staff.pdf" },
    { title: "Leave Policy", url: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/institutional+documents/Leave-Policy.pdf" },
    { title: "Water Reuse Policy", url: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/institutional+documents/Water-Reuse-Policy.pdf" },
    { title: "Food Waste Management Policy", url: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/institutional+documents/Food-Waste-Management-Policy.pdf" },
    { title: "Energy Efficiency standards for buildings Policy", url: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/institutional+documents/Energy-Efficiency-standards-for-buildings-Policy.pdf" },
    { title: "AICTE Approval Letters (EOA Report)", url: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/institutional+documents/EOA-Report-25-26.pdf" },
    { title: "Audit Reports (Provisional BS)", url: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/institutional+documents/PROVISIONAL-BS.pdf" },
    { title: "NIRF Ranking", url: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/institutional+documents/NIRF-Engineering-Trident-Academy-of-Technology-TAT20260314.pdf" }
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
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">
                {doc.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                {doc.desc}
              </p>
              
              <MagneticButton strength={0.2}>
                {doc.url?.startsWith('/') ? (
                  <Link to={doc.url} className="inline-flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest hover:text-brand-accent transition-colors group/btn">
                    View Document 
                    <span className="w-6 h-px bg-white/50 group-hover/btn:w-10 group-hover/btn:bg-brand-accent transition-all duration-300" />
                  </Link>
                ) : (
                  <a href={doc.url || "#"} target={doc.url && doc.url !== "#" ? "_blank" : "_self"} rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest hover:text-brand-accent transition-colors group/btn">
                    View Document 
                    <span className="w-6 h-px bg-white/50 group-hover/btn:w-10 group-hover/btn:bg-brand-accent transition-all duration-300" />
                  </a>
                )}
              </MagneticButton>
            </div>
          ))}
        </StaggerChildren>

        {/* Policies Dropdown View */}
        <div className="max-w-4xl mx-auto mt-32 relative z-20">
          <button 
            onClick={() => setShowPolicies(!showPolicies)}
            className="w-full group flex items-center justify-between p-6 bg-[#1D222D]/80 hover:bg-[#222834] border border-white/10 hover:border-brand-accent/50 transition-all duration-300"
          >
            <h3 className="text-2xl md:text-3xl font-serif font-black text-white">
              Institutional <span className="italic text-brand-accent font-light">Policies</span>
            </h3>
            <div className={`text-brand-accent transition-transform duration-500 flex items-center justify-center ${showPolicies ? 'rotate-180' : ''}`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>
          
          <div className={`overflow-hidden transition-all duration-700 ease-in-out ${showPolicies ? 'max-h-[3000px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
            <StaggerChildren className="flex flex-col space-y-3" stagger={0.05}>
              {policies.map((policy, index) => (
                <div 
                  key={index}
                  className="group flex items-center justify-between p-5 md:p-6 bg-[#1D222D]/80 hover:bg-brand-accent/5 border border-white/5 hover:border-brand-accent/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 md:gap-6">
                    <span className="text-brand-accent font-mono text-sm opacity-40 group-hover:opacity-100 transition-opacity">{(index + 1).toString().padStart(2, '0')}</span>
                    <span className="text-base md:text-lg text-white/70 group-hover:text-white font-medium transition-colors">{policy.title}</span>
                  </div>
                  <MagneticButton strength={0.1}>
                    <a href={policy.url} target="_blank" rel="noopener noreferrer" className="opacity-0 group-hover:opacity-100 text-brand-accent text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2">
                      Read 
                      <span className="w-4 h-px bg-brand-accent block group-hover:w-8 transition-all duration-300" />
                    </a>
                  </MagneticButton>
                </div>
              ))}
            </StaggerChildren>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Compliance;
