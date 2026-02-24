"use client";

import { useEffect, useRef } from "react";

export default function CircleBackground() {
  const canvasRef = useRef(null);
  
  // Refs for animation
  const scrollYRef = useRef(0);
  const dimensionsRef = useRef({ width: 0, height: 0 });
  const animationFrameRef = useRef(null);
  const circlesRef = useRef([]);
  const timeRef = useRef(0);

  // Colors - your brand colors
  const COLORS = [
    "#5253FF", // Deep blue
    "#8653FF", // Purple-blue
    "#D252FF", // Pink-purple
  ];

  // Initialize circles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const initCircles = (width, height) => {
      const circles = [];
      const count = 8; // Reduced for performance

      for (let i = 0; i < count; i++) {
        const side = i % 2 === 0 ? 'left' : 'right';
        
        circles.push({
          id: i,
          // Start positions - some on screen, some off
          x: side === 'right' 
            ? width + 200 + Math.random() * 400 
            : -200 - Math.random() * 400,
          y: height * (0.2 + Math.random() * 0.6),
          size: 120 + Math.random() * 180, // 120-300px
          speed: 0.08 + Math.random() * 0.12, // Slower for smoothness
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          opacity: 0.15 + Math.random() * 0.25, // Subtle
          side: side,
          blurAmount: 25 + Math.random() * 20, // 25-45px
          floatSpeed: 0.02 + Math.random() * 0.03,
          floatOffset: Math.random() * Math.PI * 2,
          floatAmount: 10 + Math.random() * 15,
        });
      }
      return circles;
    };

    // Set canvas dimensions
    const setDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      dimensionsRef.current = { width: canvas.width, height: canvas.height };
      circlesRef.current = initCircles(canvas.width, canvas.height);
    };

    setDimensions();

    // Handle resize
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(setDimensions, 150);
    };

    window.addEventListener("resize", handleResize);

    // Scroll tracking with Lenis
    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Animation
    const ctx = canvas.getContext("2d");
    
    const animate = () => {
      const { width, height } = dimensionsRef.current;
      if (width === 0 || height === 0) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      // Clear canvas
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, width, height);

      // Update time
      timeRef.current += 0.005;

      // Scroll influence (subtle)
      const scrollProgress = Math.min(scrollYRef.current / 1000, 1);
      const scrollSpeed = 1 + scrollProgress * 0.8;

      // Draw circles
      circlesRef.current.forEach((circle) => {
        // Gentle floating
        const floatY = Math.sin(
          timeRef.current * circle.floatSpeed + circle.floatOffset
        ) * circle.floatAmount;

        // Horizontal movement with scroll influence
        if (circle.side === 'right') {
          circle.x -= circle.speed * scrollSpeed;
          
          // Reset when off screen
          if (circle.x < -400) {
            circle.x = width + 400;
            circle.y = height * (0.2 + Math.random() * 0.6);
          }
        } else {
          circle.x += circle.speed * scrollSpeed;
          
          if (circle.x > width + 400) {
            circle.x = -400;
            circle.y = height * (0.2 + Math.random() * 0.6);
          }
        }

        // Calculate opacity based on position
        let opacity = circle.opacity;
        
        // Fade at edges
        if (circle.x < 300) {
          opacity *= Math.pow(circle.x / 300, 1.2);
        } else if (circle.x > width - 300) {
          opacity *= Math.pow((width - circle.x) / 300, 1.2);
        }

        // Fade at top and bottom
        if (circle.y < 150) {
          opacity *= Math.pow(circle.y / 150, 1.2);
        } else if (circle.y > height - 150) {
          opacity *= Math.pow((height - circle.y) / 150, 1.2);
        }

        // Draw circle if visible
        if (opacity > 0.02) {
          drawCircle(
            ctx,
            circle.x,
            circle.y + floatY,
            circle.size,
            circle.color,
            opacity,
            circle.blurAmount
          );
        }
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(resizeTimeout);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Draw circle function - simple and clean
  const drawCircle = (ctx, x, y, size, color, opacity, blurAmount) => {
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);

    ctx.save();
    ctx.filter = `blur(${blurAmount}px)`;
    ctx.beginPath();
    ctx.arc(x, y, size * 0.5, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
    ctx.fill();
    ctx.restore();
  };

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{ 
        background: "#000000",
        pointerEvents: "none",
        willChange: "transform",
      }}
    />
  );
}