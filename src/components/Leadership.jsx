import React, { useRef, useEffect } from 'react';
import { gsap, ScrollTrigger } from '../lib/gsap-setup';
import { TextReveal, MaskReveal } from '../utils/animations';

const Leadership = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.governance-row').forEach((row, i) => {
        gsap.from(row, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          delay: i * 0.05,
          ease: 'power2.out',
          scrollTrigger: { trigger: row, start: 'top 95%', once: true },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const boardMembers = [
    { id: 1, name: "Smt. S. Panigrahi", role: "Trustee – D. Foundation (Chairperson)", tech: "-", nonTech: "M.Sc. (Life Science)", ind: "-", oth: "-" },
    { id: 2, name: "Dr. B. K. Nanda", role: "Ex-Vice Chancellor, VSSUT, Burla", tech: "Ph. D (Mechanical)", nonTech: "-", ind: "-", oth: "-" },
    { id: 3, name: "Sri. K. K. Mishra", role: "Retd. General Manager, Indian Rlys", tech: "B.Tech (Civil), IIT, Kharagpur", nonTech: "-", ind: "-", oth: "-" },
    { id: 4, name: "Sri S. Mishra", role: "Managing Director, SPARC(p) Ltd.", tech: "B.Tech (Gold Medallist), NIT Kurukhsetra", nonTech: "-", ind: "-", oth: "-" },
    { id: 5, name: "Prof. (Dr.) Sakuntala Mahapatra", role: "Dean (SoE)", tech: "Ph.D (Electronics)", nonTech: "-", ind: "-", oth: "-" },
    { id: 6, name: "Prof. (Dr) D. N. Pattanayak", role: "Principal and Member Secretary (GB)", tech: "Ph.D, JU, (Electrical Engg)", nonTech: "-", ind: "-", oth: "-" },
    { id: 7, name: "Prof. (Dr.) Amarendra Baral", role: "Dean (SSH)", tech: "-", nonTech: "Ph.D. (Mathematics)", ind: "-", oth: "-" },
    { id: 8, name: "Mr. Ashok Kumar Sarangi", role: "Asst. Professor", tech: "-", nonTech: "M.Sc. (Biotechnology)", ind: "-", oth: "-" },
  ];

  return (
    <section ref={sectionRef} className="py-32 md:py-44 overflow-hidden relative" style={{ backgroundColor: '#F5F2EB' }}>
      
      <div className="absolute top-0 right-0 w-[60vw] h-full bg-gradient-to-l from-slate-900/[0.02] to-transparent pointer-events-none" />
      {/* Thick colorful diagonals - solid colors */}
      <div className="absolute top-[15%] left-[-10%] w-[120%] h-[80px] bg-[#EFEADB] rotate-[-15deg] pointer-events-none" />
      <div className="absolute bottom-[5%] right-[-20%] w-[140%] h-[100px] bg-[#E9E4D4] rotate-[20deg] pointer-events-none" />

      <div className="container-custom relative z-10">
        
        <span className="editorial-label text-slate-500 mb-16 block">LEADERSHIP</span>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start mb-40">
          
          <div className="lg:col-span-4 relative">
            <div className="aspect-[3/4] w-full overflow-hidden border border-slate-900/10 relative p-3 bg-white shadow-xl">
              <div className="w-full h-full relative overflow-hidden">
                <img 
                  src="/principal_passport.png" 
                  alt="Prof. (Dr) D. N. Pattanayak" 
                  className="w-full h-full object-cover" 
                  style={{ objectPosition: 'center 10%' }}
                />
                <div className="absolute inset-0 bg-[#F5F2EB] mix-blend-multiply opacity-40 pointer-events-none" />
              </div>
            </div>
            
            <div className="pt-6 border-t border-slate-900/10 mt-6 text-center">
              <h3 className="text-xl font-black font-serif text-slate-900 leading-tight mb-1">Prof. (Dr) D. N. Pattanayak</h3>
              <span className="text-xs font-bold text-brand-primary uppercase tracking-widest">Principal</span>
            </div>
          </div>

          <div className="lg:col-span-8 lg:pl-12">
            <div className="relative mb-12">
              <span className="text-[120px] md:text-[200px] leading-none font-serif text-slate-900/[0.03] absolute -top-12 -left-8 md:-left-12 pointer-events-none select-none">"</span>
              <TextReveal stagger={0.015}>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-slate-900 leading-[1.1] relative z-10">
                  At Trident, we don't just teach technology; <br />
                  <span className="italic text-brand-primary font-light">we cultivate the innovators</span> of tomorrow.
                </h2>
              </TextReveal>
            </div>
            
            <MaskReveal>
              <div className="grid md:grid-cols-2 gap-10 text-slate-700 text-lg leading-relaxed font-medium">
                <p>
                  Our institution stands on the solid foundations of innovation, integrity, and excellence. We believe in providing our students with a holistic environment where world-class infrastructure meets personalized guidance. 
                </p>
                <p>
                  We are dedicated to shaping minds that are not only technically proficient but are also responsible global citizens. Join us in our journey of continuous learning and professional growth.
                </p>
              </div>
            </MaskReveal>
          </div>
        </div>

        <div className="mt-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div>
              <span className="editorial-label text-slate-500 mb-4 block">GOVERNANCE</span>
              <TextReveal>
                <h2 className="text-4xl md:text-5xl font-serif font-black text-slate-900">
                  Governing <span className="italic text-brand-primary">Board</span>
                </h2>
              </TextReveal>
            </div>
          </div>

          <div className="w-full overflow-x-auto border-t-[3px] border-slate-900 pt-2">
            <table className="w-full text-left border-collapse min-w-[900px]">
              <thead>
                <tr>
                  <th className="py-3 px-4 font-bold text-slate-500 text-[10px] tracking-[0.2em] uppercase whitespace-nowrap w-[60px] border-b border-slate-900/10">No.</th>
                  <th className="py-3 px-4 font-bold text-slate-500 text-[10px] tracking-[0.2em] uppercase border-b border-slate-900/10">Members</th>
                  <th className="py-3 px-4 font-bold text-slate-500 text-[10px] tracking-[0.2em] uppercase border-b border-slate-900/10">Tech Background</th>
                  <th className="py-3 px-4 font-bold text-slate-500 text-[10px] tracking-[0.2em] uppercase border-b border-slate-900/10">Non-Tech Background</th>
                  <th className="py-3 px-4 font-bold text-slate-500 text-[10px] tracking-[0.2em] uppercase border-b border-slate-900/10">Industry</th>
                  <th className="py-3 px-4 font-bold text-slate-500 text-[10px] tracking-[0.2em] uppercase border-b border-slate-900/10">Others</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-900/5">
                {boardMembers.map((row, index) => (
                  <tr key={index} className="governance-row hover:bg-white/[0.4] transition-colors">
                    <td className="py-4 px-4 text-xs font-bold text-slate-400">{`0${row.id}`}</td>
                    <td className="py-4 px-4">
                      <div className="font-bold text-slate-900 text-sm mb-0.5">{row.name}</div>
                      <div className="text-[11px] font-medium text-slate-500 uppercase tracking-wide">{row.role}</div>
                    </td>
                    <td className="py-4 px-4 text-sm font-medium text-slate-700">{row.tech}</td>
                    <td className="py-4 px-4 text-sm font-medium text-slate-700">{row.nonTech}</td>
                    <td className="py-4 px-4 text-sm font-medium text-slate-700">{row.ind}</td>
                    <td className="py-4 px-4 text-sm font-medium text-slate-700">{row.oth}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Leadership;
