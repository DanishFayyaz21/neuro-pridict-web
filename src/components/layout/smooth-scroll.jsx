'use client';

import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

export default function SmoothScroll({ children }) {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const scrollYRef = useRef(0);
  const prevScrollYRef = useRef(0);
  const animationFrameRef = useRef(null);
  const timeRef = useRef(0);

  const COLORS = [
    'rgba(82, 83, 255, 0.25)',
    'rgba(107, 76, 255, 0.22)',
    'rgba(134, 83, 255, 0.28)',
    'rgba(162, 86, 255, 0.2)',
    'rgba(210, 82, 255, 0.24)',
    'rgba(255, 81, 240, 0.22)',
  ];

  const BASE_PARTICLES = 5;
  const MAX_PARTICLES = 10; // slightly more allowed now that motion is calmer

  const createParticle = (width, height, fromBottom = false) => {
    const size = 300 + Math.random() * 700;
    const baseY = fromBottom ? height + size * 0.8 : Math.random() * height * 1.3 - size * 0.5;

    return {
      x: Math.random() * (width * 1.4) - width * 0.2,
      y: baseY,
      size,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      vx: (Math.random() - 0.5) * 0.25,           // gentler horizontal drift
      baseVy: 0.15 + Math.random() * 0.45,        // slow upward tendency
      scrollVyMultiplier: 0.8 + Math.random() * 1.0,
      alpha: 0.07 + Math.random() * 0.16,
      blur: 90 + Math.random() * 160,
      pulseSpeed: 0.0006 + Math.random() * 0.0009,
      pulsePhase: Math.random() * Math.PI * 2,
      // Water-float specific
      bobAmplitude: 0.8 + Math.random() * 1.4,    // vertical bobbing strength
      bobFrequency: 0.4 + Math.random() * 0.7,    // how fast it bobs
      bobPhase: Math.random() * Math.PI * 2,
      wobblePhase: Math.random() * Math.PI * 2,
      driftPhase: Math.random() * Math.PI * 2,
    };
  };

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6,
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 0.82,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      if (particlesRef.current.length < BASE_PARTICLES) {
        particlesRef.current = Array.from({ length: BASE_PARTICLES }, () =>
          createParticle(canvas.width, canvas.height)
        );
      }
    };
    resize();
    window.addEventListener('resize', resize);

    window.addEventListener('scroll', () => {
      scrollYRef.current = window.scrollY;
    }, { passive: true });

    const animate = () => {
      const width = canvas.width;
      const height = canvas.height;
      const t = (timeRef.current += 0.016); // ≈60fps delta
      const scrollY = scrollYRef.current;
      const scrollDelta = scrollY - prevScrollYRef.current;
      prevScrollYRef.current = scrollY;

      ctx.fillStyle = '#030014';
      ctx.fillRect(0, 0, width, height);

      // Spawn new orbs when scrolling down
      if (scrollDelta > 1.5 && particlesRef.current.length < MAX_PARTICLES) {
        const howMany = Math.min(1 + Math.floor(scrollDelta / 120), 2);
        for (let i = 0; i < howMany; i++) {
          if (particlesRef.current.length < MAX_PARTICLES) {
            particlesRef.current.push(createParticle(width, height, true));
          }
        }
      }

      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const p = particlesRef.current[i];

        // ─── Water-like floating motion ───────────────────────────────
        // 1. Slow organic horizontal drifting (like current)
        const drift = Math.sin(t * 0.3 + p.driftPhase) * 0.4;
        p.x += p.vx + drift;

        // 2. Gentle constant upward bias + scroll boost
        let vy = p.baseVy;
        if (scrollDelta > 0) {
          vy += scrollDelta * p.scrollVyMultiplier * 0.012;
        } else if (scrollDelta < -0.5) {
          vy += scrollDelta * 0.006; // slight downward push when scrolling up
        }
        p.y -= vy; // negative because y=0 is top

        // 3. Classic water bob / float up-down oscillation
        const bob = Math.sin(t * p.bobFrequency + p.bobPhase) * p.bobAmplitude;
        p.y -= bob;

        // 4. Very slow wobble (extra organic feel)
        p.x += Math.cos(t * 0.8 + p.wobblePhase) * 0.18;
        p.y += Math.sin(t * 1.1 + p.wobblePhase * 1.4) * 0.12;

        // Remove when far above top
        if (p.y + p.size * 0.7 < -300) {
          particlesRef.current.splice(i, 1);
          continue;
        }

        // Gentle horizontal wrapping
        if (p.x + p.size < -150) p.x = width + p.size * 0.5;
        if (p.x - p.size > width + 150) p.x = -p.size * 0.5;

        // Pulse (breathing / glow)
        const pulse = 0.94 + Math.sin(t * p.pulseSpeed * 60 + p.pulsePhase) * 0.06;

        // Draw
        ctx.shadowColor = p.color;
        ctx.shadowBlur = p.blur * pulse * 1.1;

        const match = p.color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
        if (match) {
          const [_, r, g, b] = match.map(Number);
          const alpha = Math.min(p.alpha + Math.abs(scrollDelta) * 0.0006, 0.36);

          const grad = ctx.createRadialGradient(
            p.x - p.size * 0.16,
            p.y - p.size * 0.16,
            0,
            p.x,
            p.y,
            p.size * 0.54
          );
          grad.addColorStop(0,   `rgba(${r},${g},${b},${alpha * 0.95 * pulse})`);
          grad.addColorStop(0.45,`rgba(${r},${g},${b},${alpha * 0.48 * pulse})`);
          grad.addColorStop(1,   `rgba(${r},${g},${b},0)`);

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 0.5, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();

          // Tiny highlight / caustics-like shine
          ctx.shadowBlur *= 0.35;
          ctx.beginPath();
          ctx.arc(p.x - p.size * 0.14, p.y - p.size * 0.18, p.size * 0.18, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r},${g},${b},${alpha * 0.16})`;
          ctx.fill();
        }
      }

      ctx.shadowBlur = 0;
      ctx.shadowColor = 'transparent';

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      lenis.destroy();
      window.removeEventListener('scroll', () => {});
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{ display: 'block' }}
      />
      {children}
    </>
  );
}