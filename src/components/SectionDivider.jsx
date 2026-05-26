import React, { useRef, useEffect } from 'react';
import { gsap, ScrollTrigger } from '../lib/gsap-setup';

/**
 * SectionDivider — Seamless color-to-color transitions
 * Uses translateY and scaleY to ensure zero subpixel gaps
 */
const SectionDivider = ({ 
  variant = 'diagonal', 
  topColor = '#000000',
  bottomColor = '#ffffff',
  flip = false,
  className = '',
  height = 120,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const inner = el.querySelector('.divider-inner');
    if (!inner) return;

    gsap.fromTo(inner,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 95%',
          once: true,
        },
      }
    );
  }, []);

  // Universal style to kill any gap
  const wrapperStyle = {
    height,
    marginTop: -1,
    marginBottom: -1,
    backgroundColor: topColor,
    display: 'block',
    lineHeight: 0,
    fontSize: 0,
    zIndex: 10,
    position: 'relative'
  };

  const svgStyle = {
    display: 'block',
    width: '100%',
    height: '100%',
    transform: `${flip ? 'scaleX(-1)' : ''} translateY(1px) scaleY(1.02)`,
    transformOrigin: 'bottom'
  };

  if (variant === 'diagonal') {
    return (
      <div ref={ref} className={`w-full overflow-hidden ${className}`} style={wrapperStyle}>
        <svg viewBox={`0 0 1440 ${height}`} preserveAspectRatio="none" className="divider-inner" style={svgStyle}>
          <polygon points={`0,${height} 1440,0 1440,${height}`} fill={bottomColor} />
        </svg>
      </div>
    );
  }

  if (variant === 'wave') {
    return (
      <div ref={ref} className={`w-full overflow-hidden ${className}`} style={wrapperStyle}>
        <svg viewBox={`0 0 1440 ${height}`} preserveAspectRatio="none" className="divider-inner" style={svgStyle}>
          <path d={`M0,${height * 0.7} C240,${height * 0.1} 480,${height * 0.9} 720,${height * 0.4} C960,${height * 0.0} 1200,${height * 0.8} 1440,${height * 0.3} L1440,${height} L0,${height} Z`} fill={bottomColor} />
        </svg>
      </div>
    );
  }

  if (variant === 'slant') {
    return (
      <div ref={ref} className={`w-full overflow-hidden ${className}`} style={wrapperStyle}>
        <svg viewBox={`0 0 1440 ${height}`} preserveAspectRatio="none" className="divider-inner" style={svgStyle}>
          <polygon points={`0,${height * 0.6} 1440,0 1440,${height} 0,${height}`} fill={bottomColor} />
        </svg>
      </div>
    );
  }

  if (variant === 'arrow') {
    return (
      <div ref={ref} className={`w-full overflow-hidden ${className}`} style={wrapperStyle}>
        <svg viewBox={`0 0 1440 ${height}`} preserveAspectRatio="none" className="divider-inner" style={svgStyle}>
          <polygon points={`0,0 720,${height} 1440,0 1440,${height} 0,${height}`} fill={bottomColor} />
        </svg>
      </div>
    );
  }

  // Fallback: hard line
  return (
    <div ref={ref} className={`relative w-full ${className}`} style={{ height: 2, backgroundColor: bottomColor }} />
  );
};

export default SectionDivider;
