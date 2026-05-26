import React, { useRef, useEffect, useState } from 'react';
import { gsap, ScrollTrigger } from '../lib/gsap-setup';
import { TextReveal, MaskReveal } from '../utils/animations';

const Hero = () => {
  const sectionRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "/slider/slider 1.png",
    "/slider/slider 2.png",
    "/slider/slider 3.png",
    "/slider/slider 4.png",
    "/slider/slider 5.png",
    "/slider/slider 6.png"
  ];

  useEffect(() => {
    // Slideshow interval
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.from('.hero-label', { opacity: 0, x: -30, duration: 0.8, ease: 'power3.out' })
        .from('.hero-accent-line', { scaleX: 0, duration: 1, ease: 'expo.out' }, '-=0.3')
        .from('.hero-cta', { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out' }, '-=0.4');

      // Scroll-linked parallax for the main content block
      gsap.to('.hero-content-block', {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[100vh] flex items-center pt-48 pb-32 overflow-hidden bg-black">
      
      {/* BACKGROUND SLIDESHOW */}
      <div className="absolute inset-0 z-0 bg-black">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Trident Campus ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${
              index === currentSlide ? 'opacity-60' : 'opacity-0'
            }`}
          />
        ))}
        
        {/* Static geometric overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

        <div className="absolute -left-20 -bottom-20 w-[600px] h-[600px] opacity-[0.04] z-20 pointer-events-none select-none">
          <img
            src="https://admissions-tat-tekkzy.netlify.app/logo.png"
            alt="TAT Watermark"
            className="w-full h-full object-contain rotate-12"
          />
        </div>
      </div>

      <div className="container-custom relative z-30 w-full">
        <div className="max-w-5xl hero-content-block">
          <div className="flex flex-col">

            <div className="hero-label editorial-label text-white/70 mb-10">
              <span>ISSUE 01 / ABOUT TRIDENT ACADEMY</span>
            </div>

            <TextReveal className="mb-6" delay={400} stagger={0.02}>
              <h1 className="font-serif font-black text-white leading-[1.05]">
                <span className="block text-5xl md:text-7xl lg:text-8xl mb-2">Trident Academy</span>
                <span className="block text-5xl md:text-7xl lg:text-8xl mb-4">of Technology</span>
              </h1>
            </TextReveal>

            <div className="hero-accent-line w-32 h-1 bg-brand-accent mb-8 origin-left" />

            <MaskReveal delay={800}>
              <p className="text-xl md:text-2xl lg:text-3xl text-brand-accent italic font-serif font-bold mb-10 max-w-3xl">
                Where Education Meets Excellence.
              </p>
            </MaskReveal>

            <MaskReveal delay={1000}>
              <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mb-14 font-medium border-l-4 border-brand-accent/60 pl-6">
                From a visionary coffee table discussion in 1991 to becoming a top-ranked pinnacle of technical education in Odisha.
              </p>
            </MaskReveal>

            <div className="hero-cta flex flex-wrap gap-6 items-center">
              <a href="#milestones" className="btn-magazine btn-magazine-gold">
                <span>Our Journey</span>
              </a>
              <a href="#identity" className="btn-magazine btn-magazine-white">
                <span>Our Legacy</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-16 right-16 z-30 hidden lg:flex flex-col items-center bg-white border-2 border-brand-primary/10 p-10 shadow-2xl">
        <span className="text-[11px] font-black text-slate-400 tracking-[5px] uppercase mb-1">Established</span>
        <span className="text-6xl font-serif font-black text-brand-primary">2005</span>
        <div className="w-16 h-[4px] bg-brand-accent mt-4" />
      </div>

      <div className="absolute left-0 top-0 w-1.5 h-full bg-brand-accent/40 z-20" />
    </section>
  );
};

export default Hero;
