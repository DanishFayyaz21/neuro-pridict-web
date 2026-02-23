'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const NeuroLabPredict = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  // Individual refs for each card
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  const card1InView = useInView(card1Ref, { once: false, amount: 0.3 });
  const card2InView = useInView(card2Ref, { once: false, amount: 0.3 });
  const card3InView = useInView(card3Ref, { once: false, amount: 0.3 });

  // Animation variants
  const leftVariants = {
    hidden: { x: -100, opacity: 0, scale: 0.8 },
    visible: { 
      x: 0, 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const rightVariants = {
    hidden: { x: 100, opacity: 0, scale: 0.8 },
    visible: { 
      x: 0, 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const containerVariants = {
    hidden: { y: 80, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  return (
    <div ref={ref} className="min-h-screen bg-black text-gray-200 mt-0">
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-center text-4xl sm:text-5xl md:text-7xl font-semibold mb-0 tracking-tight">
          <span className="bg-gradient-to-r from-[#5653FF] to-[#D252FF] font-darker bg-clip-text text-transparent">Welcome to</span>
        </h1>
        <motion.div 
          className="flex justify-center items-center mb-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        >
          <img src="/images/labwhite.png" alt="LAB" className="max-w-md w-full h-auto" loading="eager" />
        </motion.div>
      </motion.div>

      <div className="max-w-7xl mx-auto space-y-16 mt-22">
        {/* Attention Card - Image Left, Details Right */}
        <motion.div 
          ref={card1Ref}
          className="group relative bg-black backdrop-blur-xl rounded-2xl p-8 md:p-10"
          variants={containerVariants}
          initial="hidden"
          animate={card1InView ? "visible" : "hidden"}
        >
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <motion.div 
              className="w-full md:w-1/2 h-32 flex items-center justify-center"
              variants={leftVariants}
            >
              <img
                src="/logos/app icon aittention.png"
                alt="Attention"
                className="max-w-[200px] w-full h-auto drop-shadow-[0_0_80px_#5754FFFF] group-hover:scale-105 transition-transform duration-400"
                loading="eager"
              />
            </motion.div>
            <motion.div 
              className="w-full md:w-1/2 text-left"
              variants={rightVariants}
            >
              <motion.div 
                className="flex items-start ml-4 justify-start mb-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: card1InView ? 1 : 0 }}
                transition={{ delay: 0.3 }}
              >
                <img src="/images/aittention.png" alt="attention" className="h-16 w-auto" loading="eager" />
              </motion.div>
              <motion.div className="text-[#AAAAAA] ml-10 text-lg leading-relaxed mb-8">
                <p className="font-semibold font-darker text-white">Predict Visual Attention Before You Publish</p> 
                <br />
                Aittention uses neuroscience-inspired AI to predict exactly where people will look when they see your creative. Heatmaps reveal visual saliency in seconds, helping you optimize layouts, hierarchies, and focal points before launch, no eye-tracking hardware required.
              </motion.div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: card1InView ? 1 : 0 }}
                transition={{ delay: 0.5 }}
              >
                <a
                  href="#"
                  className="inline-block px-8 py-3 ml-12 bg-[#1A1A1A] rounded-full font-semibold text-white transition-all duration-300 hover:-translate-y-1"
                >
                  Learn More →
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Empath Card - Details Left, Image Right */}
        <motion.div 
          ref={card2Ref}
          className="group relative bg-black backdrop-blur-xl rounded-2xl p-8 md:p-10 transition-all duration-300"
          variants={containerVariants}
          initial="hidden"
          animate={card2InView ? "visible" : "hidden"}
        >
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
            <motion.div 
              className="w-full md:w-1/2 h-32 flex items-center justify-center"
              variants={rightVariants}
            >
              <img
                src="/logos/empathlogo.png"
                alt="Empath"
                className="max-w-[200px] w-full h-auto drop-shadow-[0_0_80px_#2CB06B] group-hover:scale-105 transition-transform duration-400"
                loading="eager"
              />
            </motion.div>
            <motion.div 
              className="w-full md:w-1/2 text-center md:text-left"
              variants={leftVariants}
            >
              <motion.div 
                className="flex items-start mr-1 justify-start mb-5 -ml-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: card2InView ? 1 : 0 }}
                transition={{ delay: 0.3 }}
              >
                <img src="/images/empath.png" alt="empath" className="h-26 w-auto md:-ml-1 ml-4" loading="eager" />
              </motion.div>
              <motion.p 
                className="text-[#AAAAAA] text-lg leading-relaxed mb-8 font-light font-popins"
                initial={{ opacity: 0 }}
                animate={{ opacity: card2InView ? 1 : 0 }}
                transition={{ delay: 0.4 }}
              >
                Empath analyzes visual and contextual cues to predict emotional responses triggered by your content. Understand whether your creative evokes trust, excitement, comfort, or rejection, and adjust messaging to better resonate with your audience.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: card2InView ? 1 : 0 }}
                transition={{ delay: 0.5 }}
              >
                <a
                  href="#"
                  className="inline-block px-8 py-3 bg-[#1A1A1A] rounded-full font-semibold text-white transition-all duration-300 hover:-translate-y-1"
                >
                  Learn More →
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Lumina Card - Image Left, Details Right */}
        <motion.div 
          ref={card3Ref}
          className="group relative bg-black backdrop-blur-xl rounded-2xl p-8 md:p-10 transition-all duration-300"
          variants={containerVariants}
          initial="hidden"
          animate={card3InView ? "visible" : "hidden"}
        >
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <motion.div 
              className="w-full md:w-1/2 h-32 mr-6 flex items-center justify-center"
              variants={leftVariants}
            >
              <img
                src="/logos/luminalogo.png"
                alt="Lumina"
                className="max-w-[200px] w-full h-auto drop-shadow-[0_0_80px_#2945F5] group-hover:scale-105 transition-transform duration-400"
                loading="eager"
              />
            </motion.div>
            <motion.div 
              className="w-full md:w-1/2 text-center md:text-left"
              variants={rightVariants}
            >
              <motion.div 
                className="flex items-start justify-start mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: card3InView ? 1 : 0 }}
                transition={{ delay: 0.3 }}
              >
                <img src="/images/lumina.png" alt="lumina" className="h-20 w-auto" loading="eager" />
              </motion.div>
              <motion.div 
                className="text-[#AAAAAA] text-lg leading-relaxed mb-8 font-light font-popins"
                initial={{ opacity: 0 }}
                animate={{ opacity: card3InView ? 1 : 0 }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-white font-darker font-semibold">Reveal Behavioral Patterns & User Intent</p> 
                <br />
                Lumina goes beyond what users do, it helps explain why they do it. By analysing interaction flows and behavioural signals, Lumina highlights friction points, engagement drivers, and hidden opportunities to improve user experience and performance.
              </motion.div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: card3InView ? 1 : 0 }}
                transition={{ delay: 0.5 }}
              >
                <a
                  href="#"
                  className="inline-block px-8 py-3 bg-[#1A1A1A] rounded-full font-semibold text-white transition-all duration-300 hover:-translate-y-1"
                >
                  Learn More →
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NeuroLabPredict;