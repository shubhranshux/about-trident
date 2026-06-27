import React from 'react';
import { TextReveal } from '../utils/animations';

const partners = [
  { name: 'NAAC', src: '/logos/naac.png' },
  { name: 'NBA', src: '/logos/nba.png' },
  { name: 'AICTE', src: '/logos/aicte.png' },
  { name: 'IMD', src: '/logos/imd.jpg' },
  { name: 'NBCC', src: '/logos/NBCC_ANNUAL_REPORT_2014_15.svg.png' },
  { name: 'ISTD', src: '/logos/istd.png' },
  { name: 'NIC', src: '/logos/nic-logo-nic-logo-1-bilingual-sans-01.jpg' },
  { name: 'IIT Bhubaneswar', src: '/logos/Indian_Institute_of_Technology_Bhubaneswar_Logo.svg.png' },
  { name: 'SAP', src: '/logos/SAP_2011_logo.svg.png' },
  { name: 'NIPM', src: '/logos/nipm.png' },
];

const Partnerships = () => {
  return (
    <section className="py-24 md:py-32 overflow-hidden relative bg-[#F5F2EB]">
      <div className="container-custom relative z-10 mb-16 text-center">
        <span className="editorial-label text-black/40 justify-center mb-6 block">ACCREDITATIONS & PARTNERS</span>
        <TextReveal stagger={0.02}>
          <h2 className="text-4xl md:text-6xl font-serif font-black text-[#14191F] leading-tight mb-6">
            Recognized by <span className="italic font-light text-brand-gold">Excellence</span>
          </h2>
        </TextReveal>
        <div className="h-px w-24 bg-black/10 mx-auto" />
      </div>

      {/* Marquee Carousel Container */}
      <div className="relative w-full overflow-hidden flex flex-col gap-8 select-none py-10"
           style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
        
        {/* Track 1 - Moving Left */}
        <div className="flex w-max animate-marquee space-x-12 px-6 items-center">
          {[...partners, ...partners].map((partner, index) => (
            <div key={`t1-${index}`} className="flex-shrink-0 w-36 h-36 md:w-48 md:h-48 bg-white rounded-full flex items-center justify-center p-6 shadow-xl shadow-black/5 border border-black/5 group relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-gold/20 cursor-pointer">
              <img 
                src={partner.src} 
                alt={partner.name}
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" 
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Fallback if logo is missing */}
              <div className="hidden absolute inset-0 bg-white flex-col items-center justify-center p-4 text-center z-10">
                <span className="font-serif font-bold text-lg md:text-xl text-[#14191F] leading-tight">{partner.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Partnerships;
