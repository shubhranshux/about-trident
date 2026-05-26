import React, { useRef, useEffect } from 'react';
import { gsap, ScrollTrigger } from '../lib/gsap-setup';

const StatsCounter = () => {
  const sectionRef = useRef(null);

  const stats = [
    { label: "Trusted Brand", sub: "Established reputation across India" },
    { label: "Leaders & Humans", sub: "Holistic development beyond academics" },
    { label: "Values & Sanskars", sub: "Core philosophy shaping character" },
    { label: "Industry-Ready", sub: "Career readiness from day one" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.stat-item').forEach((item, i) => {
        gsap.from(item, {
          opacity: 0,
          y: 80,
          duration: 1,
          delay: i * 0.15,
          ease: 'expo.out',
          scrollTrigger: { trigger: item, start: 'top 85%', once: true },
        });
      });
      gsap.from('.stat-divider', {
        scaleY: 0,
        duration: 1.2,
        ease: 'expo.out',
        stagger: 0.1,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', once: true },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 md:py-44 relative overflow-hidden" style={{ backgroundColor: '#14191F' }}>
      
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-[1]" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")` }} 
      />

      {/* Thick diagonal lines - solid colors */}
      <div className="absolute top-[5%] left-[-10%] w-[120%] h-[70px] bg-[#181D24] rotate-[-12deg] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[80%] h-[90px] bg-[#1C2229] rotate-[30deg] pointer-events-none" />
      <div className="absolute top-[60%] left-[-20%] w-[140%] h-[50px] bg-[#20272E] rotate-[-20deg] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <span className="editorial-label text-slate-400 justify-center mb-6 block">WHAT DEFINES US</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item relative flex flex-col items-center text-center py-12 px-6 group">
              {i > 0 && (
                <div className="stat-divider hidden lg:block absolute left-0 top-[15%] bottom-[15%] w-px bg-white/10 origin-top" />
              )}
              
              <span className="text-8xl md:text-9xl font-black font-serif text-white/[0.03] leading-none absolute top-4 select-none pointer-events-none transition-colors duration-500 group-hover:text-white/[0.05]">
                0{i + 1}
              </span>

              <div className="w-2 h-2 rounded-full bg-slate-600 mb-8 transition-colors duration-500 group-hover:bg-brand-gold" />
              
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-tight leading-tight">
                {stat.label}
              </h3>
              <p className="text-slate-400 text-sm font-medium tracking-wide uppercase leading-relaxed">
                {stat.sub}
              </p>

              <div className="w-12 h-[2px] bg-slate-700 mt-8 transition-colors duration-500 group-hover:bg-brand-gold/50" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
