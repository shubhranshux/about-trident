import React, { useRef, useEffect } from 'react';
import { gsap } from '../lib/gsap-setup';
import { TextReveal, MaskReveal, StaggerChildren } from '../utils/animations';

const VisionMission = () => {
  const sectionRef = useRef(null);

  const missions = [
    {
      title: "Holistic Excellence",
      text: "To foster holistic excellence in the new generation of students, nurturing both their academic brilliance and human values."
    },
    {
      title: "Aggressive Ideation",
      text: "To instill the power of aggressive positive thinking, an insatiable desire for knowledge, and a penchant for out-of-the-box ideation."
    },
    {
      title: "Societal Impact",
      text: "To contribute to society with honesty and integrity through innovative research in multi-disciplinary areas of evolving technologies."
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.mission-line', {
        scaleX: 0,
        duration: 1.5,
        ease: 'expo.out',
        stagger: 0.2,
        scrollTrigger: { trigger: '.missions-container', start: 'top 80%', once: true }
      });
      
      gsap.from('.mission-number', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: { trigger: '.missions-container', start: 'top 80%', once: true }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 md:py-44 relative overflow-hidden" style={{ backgroundColor: '#E3DEC6' }}>

      {/* Thick background diagonals - solid colors */}
      <div className="absolute top-[-5%] left-[-10%] w-[130%] h-[120px] bg-[#D9D3B9] rotate-[-15deg] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-20%] w-[100%] h-[70px] bg-[#CFCAA9] rotate-[25deg] pointer-events-none" />
      <div className="absolute top-[70%] left-[-10%] w-[120%] h-[50px] bg-[#C5C09A] rotate-[-5deg] pointer-events-none" />

      {/* Watermark Background Typography */}
      <div className="absolute top-[10%] right-0 -translate-y-1/2 pointer-events-none select-none opacity-[0.03] overflow-hidden">
        <span className="text-[40vw] font-black font-serif text-slate-900 leading-none block -mr-20">V&M</span>
      </div>

      <div className="container-custom relative z-10">
        
        {/* VISION SECTION - Massive Statement */}
        <div className="max-w-6xl mb-32 md:mb-48 relative">
          <div className="flex justify-between items-end mb-16">
            <TextReveal delay={200}>
              <h2 className="text-4xl md:text-5xl font-black font-serif text-slate-900">
                Our <span className="italic text-slate-600 font-light">Vision</span>
              </h2>
            </TextReveal>
          </div>
          
          <div className="pl-0 md:pl-16 lg:pl-32 border-l-4 border-slate-900">
            <TextReveal stagger={0.015}>
              <h3 className="text-4xl md:text-6xl lg:text-7xl font-serif font-black text-slate-900 leading-[1.05] tracking-tight">
                To become a sustainable institution of excellence, <span className="italic font-light text-slate-600">advancing innovative education,</span> research and development.
              </h3>
            </TextReveal>
          </div>
        </div>

        {/* MISSION SECTION - Swiss Grid Layout */}
        <div className="missions-container relative">
          <div className="flex justify-between items-end mb-16">
            <TextReveal delay={200}>
              <h2 className="text-4xl md:text-5xl font-black font-serif text-slate-900">
                Our <span className="italic text-slate-600 font-light">Mission</span>
              </h2>
            </TextReveal>
          </div>

          <div className="grid md:grid-cols-3 gap-x-12 gap-y-16">
            {missions.map((mission, index) => (
              <div key={index} className="relative group">
                <div className="mission-line w-full h-[2px] bg-slate-900 origin-left mb-8 transition-colors duration-500 group-hover:bg-brand-primary" />
                
                <div className="flex flex-col h-full">
                  <div className="mission-number text-7xl md:text-8xl font-serif font-black text-slate-900/10 leading-none mb-6 group-hover:text-brand-primary/20 transition-colors duration-500">
                    0{index + 1}
                  </div>
                  
                  <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">
                    {mission.title}
                  </h4>
                  
                  <p className="text-slate-700 font-medium leading-relaxed">
                    {mission.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default VisionMission;
