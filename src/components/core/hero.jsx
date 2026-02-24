'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const { scrollY } = useScroll();
    
    // Parallax effects
    const parallaxY = useTransform(scrollY, [0, 1000], [0, -200]);
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);
    const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

    // Container variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2,
                ease: "easeOut"
            }
        }
    };

    // Item variants for individual elements
    const itemVariants = {
        hidden: { 
            opacity: 0, 
            y: 50,
            scale: 0.95
        },
        visible: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    return (
        <motion.div 
            ref={ref}
            className="text-center max-w-4xl mx-auto relative z-10 pt-18"
            style={{
                y: parallaxY,
                opacity,
                scale
            }}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-clash lg:text-6xl  mb-2"
            variants={itemVariants}
            style={{
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '76px',
              lineHeight: '70px',
              letterSpacing: '0%',
              textAlign: 'center'
            }}
          >
            Unlock Product Insights
          </motion.h1>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-clash lg:text-6xl  mb-6"
            variants={itemVariants}
            style={{
              fontWeight: 500,
              fontStyle: 'normal',
              fontSize: '76px',
              lineHeight: '70px',
              letterSpacing: '0%',
              textAlign: 'center',
              background: 'linear-gradient(90deg, #5653FF, #D252FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Make Better Decisions
          </motion.h2>
          
          <motion.p 
            className="text-gray-400 text-sm md:text-lg mb-8"
            variants={itemVariants}
          >
            NeuroPredict Labs helps brands and designers stop guessing.
          </motion.p>
          
          <motion.button 
            className="inline-flex items-center gap-2 bg-[#5552FF] text-white text-xs px-4 py-2 rounded-full"
            variants={itemVariants}
          >
            New in Private Beta
            <motion.svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 6l7 7-7 7" />
            </motion.svg>
          </motion.button>
        </motion.div>  
    )           
}