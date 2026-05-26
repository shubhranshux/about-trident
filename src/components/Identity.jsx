import React, { useRef, useEffect } from 'react';
import { gsap, ScrollTrigger } from '../lib/gsap-setup';
import { TextReveal, MaskReveal, ScrollScale } from '../utils/animations';

const Identity = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.identity-accent', {
        scaleX: 0,
        duration: 1.5,
        ease: 'expo.out',
        stagger: 0.2,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', once: true },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 md:py-44 relative overflow-hidden" style={{ backgroundColor: '#F5F2EB' }}>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.03]">
        <span className="text-[25vw] font-black font-serif text-slate-900 leading-none block whitespace-nowrap">LEGACY</span>
      </div>

      {/* Thick oblique elements */}
      <div className="identity-accent absolute top-[0%] right-[-10%] w-[120%] h-[100px] bg-amber-700/5 rotate-[-8deg] origin-left pointer-events-none" />
      <div className="identity-accent absolute bottom-[10%] left-[-10%] w-[150%] h-[60px] bg-emerald-700/5 rotate-[15deg] origin-right pointer-events-none" />
      <div className="identity-accent absolute top-[40%] right-[-20%] w-[80%] h-[80px] bg-slate-400/10 rotate-[-30deg] pointer-events-none" />

      <div className="container-custom relative z-10">
        <span className="editorial-label text-slate-500 mb-16 block">OUR IDENTITY</span>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          <div className="lg:col-span-5">
            <ScrollScale from={1} to={1.04} className="w-full">
              <div className="relative p-3 bg-white shadow-xl">
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img 
                    src="/Gemini_Generated_Image_e1ma6xe1ma6xe1ma.png" 
                    alt="Students collaborating" 
                    className="w-full h-full object-cover object-left"
                  />
                  <div className="absolute inset-0 bg-[#F5F2EB]/10 mix-blend-multiply pointer-events-none" />
                </div>
              </div>
            </ScrollScale>
          </div>

          <div className="lg:col-span-7">
            <div className="w-24 h-[2px] bg-slate-900/20 mb-10" />
            
            <TextReveal className="mb-10" stagger={0.02}>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black text-slate-900 leading-[0.95] tracking-tight">
                A Legacy of<br />
                <span className="text-brand-primary italic font-light">Excellence.</span>
              </h2>
            </TextReveal>
            
            <MaskReveal delay={200}>
              <p className="editorial-drop-cap text-lg md:text-xl text-slate-700 leading-[1.9] font-medium max-w-2xl">
                Established in 2005, Trident Academy of Technology has rapidly become one of the most respected names in technical education in Odisha and India — a reputation built not on marketing, but on measurable outcomes and unwavering commitment to quality. Our campus thrives on intellectual curiosity, collaborative energy, and a belief that the most powerful education lives at the intersection of rigorous academics and genuine passion. What truly sets Trident apart is our holistic approach: we nurture character alongside competence, shaping graduates who carry strong values and sanskars alongside technical expertise — producing not just industry-ready professionals, but compassionate, principled leaders prepared to drive the global technological revolution.
              </p>
            </MaskReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Identity;
