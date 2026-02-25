'use client';

import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import Hero from '../neural-network-hero';

export default function SmoothScroll({ children }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6,
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 0.9,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    document.documentElement.style.backgroundColor = '#000';
    document.body.style.backgroundColor = '#000';

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width, height;
    
    // Fewer particles, more subtle
    const particles = [];
    const particleCount = 40;

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random(),
        y: Math.random(),
        vx: (Math.random() - 0.5) * 0.0005, // Slower movement
        vy: (Math.random() - 0.5) * 0.0005,
        size: 0.5 + Math.random() * 1, // Smaller
        opacity: 0.1 + Math.random() * 0.2, // Much more subtle
      });
    }

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Update and draw particles
      particles.forEach(p => {
        // Move particles
        p.x += p.vx;
        p.y += p.vy;
        
        // Wrap around edges
        if (p.x < 0) p.x = 1;
        if (p.x > 1) p.x = 0;
        if (p.y < 0) p.y = 1;
        if (p.y > 1) p.y = 0;
        
        // Draw subtle particle
        const x = p.x * width;
        const y = p.y * height;
        
        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        
        // Soft, modern color - slight blue/cyan tint
        ctx.fillStyle = `rgba(180, 230, 255, ${p.opacity})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 5,
        }}
      />

      {/* Global Shader Background */}
      <div className="absolute inset-0 opacity-90">
        <Hero />
      </div>

      {/* Page Content */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        {children}
      </div>
    </>
  );
}