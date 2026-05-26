import React, { useRef, useEffect } from 'react';
import { gsap, ScrollTrigger } from '../lib/gsap-setup';
import { TextReveal, MaskReveal, ScrollScale } from '../utils/animations';

const History = () => {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  const chapters = [
    {
      year: "1991", badge: "THE SPARK",
      title: "From a Coffee Table Conversation to an Educational Revolution",
      text: "In 1991, five visionary young minds — including Pradipta, an Aeronautical Engineer from IIT Kanpur, and Prabir, an alumnus of Xavier's Institute of Management — gathered around a coffee table debating a bold question: Why can't India have world-class, self-financed education like Harvard, Stanford, and MIT?",
      image: "/history/1.png"
    },
    {
      year: "1995", badge: "THE ACTION",
      title: "A Movement, Not Just a Dream",
      text: "That conversation sparked a movement. Rather than waiting for change, they acted — founding Trident Softech Private Limited (TSPL) and launching Trident's Advanced Computer Training, a corporate finishing school that trained engineers in cutting-edge software platforms like Oracle, Sybase, and DB2, fast-tracking careers in global markets.",
      image: "/history/2.jpeg"
    },
    {
      year: "2005", badge: "THE GROWTH",
      title: "From Training to a Full Educational Ecosystem",
      text: "What began as a single training division grew into a full-fledged educational ecosystem. By 1998, Trident had launched its first MCA colleges, followed by a Biotechnology college in 2002, and a premier Engineering College in 2005 — each institution built on the founding belief that quality education, backed by private enterprise and world-class infrastructure, transforms lives.",
      image: "/history/3.jpeg"
    },
    {
      year: "2023", badge: "THE VINDICATION",
      title: "Ahead of Its Time",
      text: "Vindicated by the Supreme Court's landmark rulings in Unni Krishnan (1993), TMA Pai Foundation, and PA Inamdar, Trident's founding vision proved ahead of its time: that self-financing private institutions are not commercialization — they are the engine of India's knowledge revolution.",
      image: "/history/4.png"
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (timelineRef.current) {
        gsap.fromTo(timelineRef.current, { scaleY: 0 }, {
          scaleY: 1, ease: 'none',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 50%', end: 'bottom 40%', scrub: 1 },
        });
      }

      gsap.utils.toArray('.chapter-block').forEach((block) => {
        gsap.from(block, {
          opacity: 0, y: 60, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: block, start: 'top 80%', once: true },
        });
      });

      gsap.utils.toArray('.chapter-year').forEach((el) => {
        gsap.to(el, {
          yPercent: -30, ease: 'none',
          scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 md:py-44 relative overflow-hidden" style={{ backgroundColor: '#F5F2EB' }}>
      
      {/* Thick oblique bands - solid colors */}
      <div className="absolute top-[10%] right-[-10%] w-[120%] h-[80px] bg-[#EAE6DD] rotate-[15deg] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[150%] h-[60px] bg-[#DFDAD0] rotate-[-25deg] pointer-events-none" />
      <div className="absolute top-[50%] left-[-20%] w-[140%] h-[100px] bg-[#D5D0C5] rotate-[-10deg] pointer-events-none" />

      <div className="container-custom relative z-10">
        
        <div className="text-center mb-24">
          <span className="editorial-label text-slate-500 justify-center mb-8 block">THE JOURNEY</span>
          <TextReveal stagger={0.03}>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black text-slate-900 mb-6 tracking-tight">
              Our <span className="italic text-brand-primary font-light">Story</span>
            </h2>
          </TextReveal>
          <MaskReveal delay={200}>
            <p className="text-lg text-slate-600 max-w-xl mx-auto font-medium">
              A journey that started with a bold question and grew into an educational revolution.
            </p>
          </MaskReveal>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div ref={timelineRef} className="absolute top-0 bottom-0 left-8 lg:left-1/2 w-[2px] bg-gradient-to-b from-slate-900/20 via-slate-900/10 to-slate-900/5 lg:-translate-x-1/2 origin-top" />

          <div className="space-y-32 md:space-y-40">
            {chapters.map((ch, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={i} className="chapter-block relative flex flex-col lg:flex-row items-start w-full">
                  
                  <div className="absolute left-8 lg:left-1/2 top-4 lg:top-8 -translate-x-1/2 z-20">
                    <div className="w-4 h-4 rounded-full bg-brand-primary ring-4 ring-[#F5F2EB] shadow-lg" />
                  </div>

                  <div className={`w-full lg:w-1/2 pl-20 lg:px-16 ${isEven ? 'lg:order-1 lg:text-right' : 'lg:order-2'}`}>
                    <div className="chapter-year text-[120px] md:text-[180px] font-black font-serif text-slate-900/[0.04] leading-none select-none pointer-events-none -mb-12 md:-mb-20">
                      {ch.year}
                    </div>
                    
                    <span className="text-[10px] font-black tracking-[4px] uppercase text-brand-primary mb-4 inline-block">
                      {ch.badge}
                    </span>
                    
                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight tracking-tight">
                      {ch.title}
                    </h3>
                    
                    <p className="text-slate-700 font-medium leading-relaxed text-base md:text-lg">
                      {ch.text}
                    </p>
                    
                    <div className={`w-16 h-[2px] bg-slate-900/20 mt-8 ${isEven ? 'lg:ml-auto' : ''}`} />
                  </div>

                  <div className={`w-full lg:w-1/2 pl-20 lg:px-16 mt-8 lg:mt-0 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <ScrollScale from={1} to={1.04}>
                      <div className="aspect-[4/3] overflow-hidden bg-white p-2 shadow-xl group">
                        <div className="w-full h-full relative overflow-hidden">
                          <img src={ch.image} alt={ch.title} className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-[#F5F2EB]/10 mix-blend-multiply pointer-events-none" />
                        </div>
                      </div>
                    </ScrollScale>
                  </div>
                </div>
              );
            })}
          </div>

          <MaskReveal className="mt-32">
            <div className="pl-20 lg:pl-0 max-w-3xl mx-auto text-center">
              <div className="relative py-16">
                <div className="absolute top-0 left-0 w-12 h-12 border-t-[2px] border-l-[2px] border-slate-900/20 pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-[2px] border-r-[2px] border-slate-900/20 pointer-events-none" />
                
                <p className="text-2xl md:text-4xl font-serif font-black text-slate-900 leading-snug">
                  Three decades on, that coffee table conversation
                  <span className="text-brand-primary italic block mt-2">continues to shape futures.</span>
                </p>
              </div>
            </div>
          </MaskReveal>
        </div>
      </div>
    </section>
  );
};

export default History;
