import React, { useRef, useEffect } from 'react';
import { gsap, ScrollTrigger } from '../lib/gsap-setup';
import { TextReveal, MaskReveal } from '../utils/animations';

const Recognitions = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.rank-item').forEach((item, i) => {
        gsap.from(item, {
          opacity: 0,
          x: 30,
          duration: 0.7,
          delay: i * 0.15,
          ease: 'power3.out',
          scrollTrigger: { trigger: item, start: 'top 85%', once: true },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 md:py-44 overflow-hidden relative" style={{ backgroundColor: '#1A1C18' }}>
      
      {/* Thick background diagonals - solid colors */}
      <div className="absolute top-[-5%] left-[-10%] w-[130%] h-[90px] bg-[#20231D] rotate-[-10deg] pointer-events-none" />
      <div className="absolute bottom-[15%] right-[-15%] w-[120%] h-[70px] bg-[#262A22] rotate-[20deg] pointer-events-none" />
      <div className="absolute top-[60%] left-[-20%] w-[150%] h-[60px] bg-[#2D3128] rotate-[-25deg] pointer-events-none" />

      <div className="container-custom relative z-10">
        
        <div className="mb-24 text-center max-w-4xl mx-auto">
          <span className="editorial-label text-white/30 justify-center mb-8 block">RANKINGS & RECOGNITION</span>
          <TextReveal stagger={0.02}>
            <h2 className="text-5xl md:text-7xl font-serif font-black text-white leading-[1.1] mb-8">
              Trident Academy of <span className="italic text-brand-gold font-light">Technology</span>
            </h2>
          </TextReveal>
          <div className="h-px w-32 bg-white/20 mx-auto mb-8" />
          <MaskReveal delay={200}>
            <p className="text-xl md:text-2xl text-white/60 font-medium font-serif italic">
              "Consistently ranked among India's finest — measured not by ambition, but by achievement."
            </p>
          </MaskReveal>
        </div>

        <div className="grid lg:grid-cols-12 gap-x-12 gap-y-20">
          
          <div className="lg:col-span-12 relative">
            <div className="absolute -top-16 -left-10 text-[250px] font-black font-serif text-white/[0.02] leading-none select-none pointer-events-none">
              #25
            </div>

            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-4xl md:text-5xl font-black font-serif text-white mb-6 leading-tight">
                  Ranked among India's <br/>
                  <span className="text-brand-gold">Top 100</span> Engineering Institutions
                </h3>
                <div className="w-16 h-1 bg-brand-gold" />
              </div>
              <div className="text-lg text-white/60 leading-relaxed font-medium">
                <p className="mb-6">
                  In a state where formal institutional rankings were long absent, Trident Academy of Technology rose above the silence — earning national recognition on merit alone. For five consecutive years, Trident has featured in the prestigious DataQuest Magazine survey, standing shoulder to shoulder with IITs, IIITs, NITs, and Deemed Universities in the list of India's Top 100 Engineering Institutions.
                </p>
                <p>
                  In the most recently concluded DataQuest CMR Rankings, Trident claimed the <strong className="text-white">#25 spot nationally</strong> — a testament to its relentless pursuit of academic excellence, infrastructure, and industry relevance.
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-12 h-px bg-white/10 my-4" />

          <div className="lg:col-span-6 relative">
            <h3 className="text-3xl font-black font-serif text-white mb-8">
              Dominating the Rankings in Odisha
            </h3>
            
            <div className="space-y-0 divide-y divide-white/5 border-t border-white/5">
              {[
                { icon: "01", rank: "#1", title: "MCA Institution in Odisha", desc: "Trident Academy of Technology, Bhubaneswar" },
                { icon: "02", rank: "#1", title: "Biotechnology College in Odisha", desc: "Trident Academy of Technology, Bhubaneswar" },
                { icon: "03", rank: "#4", title: "Private Engineering College", desc: "under BPUT, Odisha — Trident Academy of Technology" }
              ].map((item, i) => (
                <div key={i} className="rank-item flex items-start gap-6 py-6 group">
                  <div className="text-4xl font-serif text-white/5 font-black leading-none group-hover:text-brand-gold/30 transition-colors">{item.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-3">
                      <span className="text-brand-gold">{item.rank}</span> {item.title}
                    </h4>
                    <p className="text-white/40 text-xs font-bold uppercase tracking-widest">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 relative">
            <h3 className="text-3xl font-black font-serif mb-8 leading-tight text-white">
              Rankings Built on Real Outcomes
            </h3>
            
            <div className="space-y-8 text-white/60 text-lg leading-relaxed font-medium">
              <p>
                These rankings are not numbers on a wall — they are the collective reflection of thousands of students who graduated prepared, hundreds of faculty who taught with dedication, and an institution that never compromised on its founding promise: world-class education, grounded in values.
              </p>
              
              <div className="pl-6 border-l-2 border-brand-gold/50">
                <p className="italic font-serif text-2xl text-white">
                  At Trident, every ranking is a milestone — and every milestone is a new starting line.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Recognitions;
