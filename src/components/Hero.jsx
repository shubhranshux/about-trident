import React, { useRef, useEffect, useState, useCallback } from 'react';
import { gsap, ScrollTrigger } from '../lib/gsap-setup';
import { TextReveal, MaskReveal } from '../utils/animations';

const SLIDER_IMAGES = [
  { src: '/slider/slider 1.png', alt: 'Trident Campus View 1' },
  { src: '/slider/slider 2.png', alt: 'Trident Campus View 2' },
  { src: '/slider/slider 32.png', alt: 'Trident Campus View 3' },
];

const SLIDE_INTERVAL = 5000; // 5 seconds

const Hero = () => {
  const sectionRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);

  // Auto-advance slides
  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDER_IMAGES.length);
    }, SLIDE_INTERVAL);
  }, []);

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startAutoPlay]);

  // Go to specific slide
  const goToSlide = (index) => {
    setCurrentSlide(index);
    startAutoPlay(); // Reset timer on manual navigation
  };

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
      
      {/* BACKGROUND IMAGE SLIDER */}
      <div className="absolute inset-0 z-0 bg-black">
        {SLIDER_IMAGES.map((slide, index) => (
          <img
            key={index}
            src={slide.src}
            alt={slide.alt}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              opacity: currentSlide === index ? 1 : 0,
              transition: 'opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
              willChange: 'opacity',
            }}
          />
        ))}
        


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
              <span>ABOUT TRIDENT ACADEMY</span>
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

      {/* Slide Indicator Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3 items-center">
        {SLIDER_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className="group relative p-1"
          >
            <span
              className="block rounded-full transition-all duration-500 ease-out"
              style={{
                width: currentSlide === index ? '32px' : '10px',
                height: '10px',
                backgroundColor: currentSlide === index ? 'rgba(212, 175, 55, 1)' : 'rgba(255, 255, 255, 0.4)',
                borderRadius: currentSlide === index ? '5px' : '50%',
              }}
            />
          </button>
        ))}
      </div>

      <div className="absolute left-0 top-0 w-1.5 h-full bg-brand-accent/40 z-20" />
    </section>
  );
};

export default Hero;
