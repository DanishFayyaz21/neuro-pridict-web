"use client";

import { useEffect, useRef } from "react";

export default function LargeScrollParticles() {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const scrollYRef = useRef(0);
  const animationFrameRef = useRef(null);
  const timeRef = useRef(0);

  const COLORS = [
    "rgba(82, 83, 255, 0.25)",   // #5253FF
    "rgba(107, 76, 255, 0.22)",  // #6B4CFF
    "rgba(134, 83, 255, 0.28)",  // #8653FF
    "rgba(162, 86, 255, 0.2)",   // #A256FF
    "rgba(210, 82, 255, 0.24)",  // #D252FF
    "rgba(255, 81, 240, 0.22)"   // #FF51F0
  ];
  
  const MAX_PARTICLES = 5;

  const createParticle = (width, height) => {
    const size = 300 + Math.random() * 600; // Even larger circles
    return {
      x: Math.random() * (width + size) - size/2,
      y: Math.random() * (height + size) - size/2,
      size: size,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      // Extremely slow base speeds
      speedY: 0.002 + Math.random() * 0.003, // Very slow vertical drift
      speedX: (Math.random() - 0.5) * 0.001, // Almost imperceptible horizontal drift
      alpha: 0.1 + Math.random() * 0.2, // Start with some opacity
      blur: 60 + Math.random() * 100, // More blur for softer edges
      pulseSpeed: 0.0005 + Math.random() * 0.001, // Very slow pulse
      pulsePhase: Math.random() * Math.PI * 2,
      driftDirection: Math.random() * Math.PI * 2, // Random drift direction
    };
  };

  useEffect(() => {
    const onScroll = () => (scrollYRef.current = window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const setDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particlesRef.current = Array.from({ length: MAX_PARTICLES }, () =>
        createParticle(canvas.width, canvas.height)
      );
    };
    setDimensions();
    window.addEventListener("resize", setDimensions);

    const animate = () => {
      const { width, height } = canvas;
      
      timeRef.current += 0.002; // Slower time increment
      const scrollY = scrollYRef.current;
      
      // Very subtle scroll influence
      const scrollInfluence = Math.min(scrollY / 1000, 0.3); // Capped at 0.3 for subtlety
      
      // Dark, static background
      ctx.fillStyle = "#030014";
      ctx.fillRect(0, 0, width, height);

      particlesRef.current.forEach((p) => {
        // Extremely slow, drifting movement - never directional like rain
        const time = timeRef.current;
        
        // Organic, floating movement using sine waves
        // This creates a gentle drifting effect, not directional movement
        p.y += Math.sin(time * 2 + p.driftDirection) * 0.008 + (scrollInfluence * 0.01);
        p.x += Math.cos(time * 1.5 + p.driftDirection) * 0.008;
        
        // Very subtle secondary movement
        p.y += Math.sin(time * 1 + p.pulsePhase) * 0.003;
        p.x += Math.cos(time * 1.3 + p.pulsePhase) * 0.003;

        // Gentle pulse
        const pulse = Math.sin(time * p.pulseSpeed * 10 + p.pulsePhase) * 0.1 + 0.9;

        // Wrap around edges very slowly and gently
        if (p.y - p.size > height) {
          p.y = -p.size;
          p.driftDirection = Math.random() * Math.PI * 2; // New direction when respawning
        } else if (p.y + p.size < 0) {
          p.y = height + p.size;
          p.driftDirection = Math.random() * Math.PI * 2;
        }
        
        if (p.x - p.size > width) {
          p.x = -p.size;
        } else if (p.x + p.size < 0) {
          p.x = width + p.size;
        }

        // Soft blur for dreamy effect
        ctx.shadowColor = p.color;
        ctx.shadowBlur = p.blur * pulse;
        
        const colorMatch = p.color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
        if (colorMatch) {
          const [_, r, g, b] = colorMatch.map(Number);
          
          // Very subtle scroll-based opacity change
          const alpha = Math.min(p.alpha + scrollInfluence * 0.1, 0.4);
          
          // Draw main circle with gradient
          const gradient = ctx.createRadialGradient(
            p.x - p.size/6, p.y - p.size/6, 0,
            p.x, p.y, p.size/2
          );
          
          gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${alpha * 0.8 * pulse})`);
          gradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${alpha * 0.3 * pulse})`);
          gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
          
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size/2, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();

          // Add subtle inner glow for depth
          ctx.shadowBlur = p.blur * 0.5;
          ctx.beginPath();
          ctx.arc(p.x - 5, p.y - 5, p.size/4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha * 0.2})`;
          ctx.fill();
        }
      });

      // Reset shadow
      ctx.shadowBlur = 0;
      ctx.shadowColor = 'transparent';

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", setDimensions);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{ 
        pointerEvents: "none",
        display: "block",
        outline: "none",
      }}
    />
  );
}