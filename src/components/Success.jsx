import React, { useRef, useEffect } from 'react';
import { gsap, ScrollTrigger } from '../lib/gsap-setup';
import { TextReveal, MaskReveal } from '../utils/animations';

const MinimalistQuote = ({ quote, img, name, detail, index }) => {
  const imgRef = useRef(null);

  useEffect(() => {
    if (!imgRef.current) return;
    const st = ScrollTrigger.create({
      trigger: imgRef.current,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.fromTo(imgRef.current, 
          { scale: 0.95, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.2, ease: 'power2.out' }
        );
      },
    });
    return () => st.kill();
  }, []);

  return (
    <MaskReveal delay={index * 150}>
      <div className="py-16 border-b border-slate-900/10 flex flex-col md:flex-row gap-8 lg:gap-16 items-start group relative transition-colors duration-500 hover:bg-white/[0.2] -mx-8 px-8">
        
        <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 overflow-hidden shadow-lg border-2 border-white/50 relative mt-2">
          <img
            ref={imgRef}
            src={img}
            alt={name}
            className="w-full h-full object-cover"
            style={{ opacity: 0 }}
          />
          <div className="absolute inset-0 bg-[#E3DEC6]/20 mix-blend-multiply pointer-events-none" />
        </div>
        
        <div className="flex-1 relative">
          <div className="absolute -top-10 -left-6 text-8xl font-serif text-slate-900/[0.04] select-none pointer-events-none leading-none">
            "
          </div>
          <p className="text-2xl md:text-3xl font-serif text-slate-800 leading-relaxed italic mb-8 relative z-10">
            {quote}
          </p>
          <div className="flex items-center gap-6">
            <div className="w-12 h-px bg-slate-900/30" />
            <div>
              <h4 className="text-lg font-black text-slate-900 tracking-tight">{name}</h4>
              <span className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em]">{detail}</span>
            </div>
          </div>
        </div>
      </div>
    </MaskReveal>
  );
};

const Success = () => {
  return (
    <section id="success" className="py-32 md:py-44 overflow-hidden relative" style={{ backgroundColor: '#E3DEC6' }}>
      
      {/* Thick background diagonals - solid colors */}
      <div className="absolute top-[5%] right-[-10%] w-[120%] h-[70px] bg-[#DED9BF] rotate-[12deg] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[130%] h-[90px] bg-[#D8D4B7] rotate-[-18deg] pointer-events-none" />
      <div className="absolute top-[50%] left-[-20%] w-[150%] h-[60px] bg-[#D3CFA8] rotate-[25deg] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="mb-24">
          <span className="editorial-label text-slate-500 mb-8 block">STUDENT SUCCESS</span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-slate-900/10 pb-8">
            <TextReveal>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black text-slate-900 leading-tight tracking-tight">
                Voices of <br/> <span className="italic text-brand-primary font-light">Excellence</span>
              </h2>
            </TextReveal>
            <MaskReveal delay={200}>
              <p className="text-lg font-medium text-slate-600 max-w-sm pb-2">
                Hear from our alumni who have gone on to shape the global technological landscape.
              </p>
            </MaskReveal>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <MinimalistQuote 
            quote="Trident provided me with the perfect blend of technical rigor and creative freedom. The labs are truly world-class and fostered my ability to innovate."
            img="/student_rahul_sharma_cse_portrait_1775288690112.png"
            name="Rahul Sharma"
            detail="CSE, Batch of 2024"
            index={0}
          />
          <MinimalistQuote 
            quote="The faculty mentorship here is unparalleled. I was able to publish two research papers before graduating, which directly led to my master's acceptance."
            img="/student_anjali_priya_etc_portrait_1775288708312.png"
            name="Anjali Priya"
            detail="ETC, Batch of 2023"
            index={1}
          />
        </div>
      </div>
    </section>
  );
};

export default Success;
