'use client';

import { motion, useInView, useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';

const Neuroadviseintro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const { scrollY } = useScroll();
  
  // Parallax effects
  const parallaxY = useTransform(scrollY, [0, 500], [0, -100]);

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
    <motion.section 
      ref={ref}
      className="relative py-24 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden mt-35"
      style={{
        y: parallaxY
      }}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Background Glow Orbs – slightly smaller & repositioned */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px]  bg-blue-600/5 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">

        {/* Top Arrow – closer to logo */}
        <motion.div 
          className="flex justify-center mt-4"
          variants={itemVariants}
        >
          <div className="inline-flex items-center gap-8">
            <motion.div 
              className="relative group cursor-pointer"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-white/20 to-white/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-500"></div>
              <svg width="80" height="94" viewBox="0 0 100 117" fill="none" xmlns="http://www.w3.org/2000/svg" className="scale-80">
                <path d="M2.43388 72.3768L43.9964 113.939C45.5552 115.498 47.6691 116.373 49.8733 116.373C52.0775 116.373 54.1914 115.498 55.7503 113.939L97.3128 72.3768C98.8714 70.8181 99.7471 68.7041 99.7471 66.4998C99.7471 65.4084 99.5321 64.3276 99.1144 63.3192C98.6967 62.3109 98.0845 61.3947 97.3128 60.6229C96.541 59.8511 95.6248 59.2389 94.6164 58.8212C93.608 58.4036 92.5273 58.1886 91.4358 58.1886C89.2315 58.1886 87.1175 59.0642 85.5589 60.6229L58.1858 87.9959L58.1858 8.31232C58.1858 6.10771 57.31 3.99339 55.7511 2.4345C54.1922 0.875603 52.0779 -0.000175476 49.8733 -0.000175476C47.6687 -0.000175476 45.5544 0.875603 43.9955 2.4345C42.4366 3.99339 41.5608 6.10771 41.5608 8.31232L41.5608 87.9959L14.1878 60.6229C13.4176 59.8483 12.5019 59.2336 11.4933 58.8141C10.4847 58.3947 9.40315 58.1787 8.31082 58.1787C7.21849 58.1787 6.13694 58.3947 5.12836 58.8141C4.11978 59.2336 3.20406 59.8483 2.43388 60.6229C0.875534 62.1817 9.91821e-05 64.2956 9.91821e-05 66.4998C9.91821e-05 68.704 0.875534 70.8179 2.43388 72.3768Z" fill="url(#paint0_linear_1_12465)" />
                <defs>
                  <linearGradient id="paint0_linear_1_12465" x1="49.8736" y1="-0.000175476" x2="49.8736" y2="116.373" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#8A2BE2" />
                    <stop offset="0.5" stopColor="white" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </div>
        </motion.div>

        {/* Logo + Subtitle – very tight */}
        <motion.div 
          className="relative mb-1"
          variants={itemVariants}
        >
          <div className="absolute -top-13 -bottom-15 -left-12 -right-12  "></div>

          <div className="flex justify-center items-center mt-4 px-8">
            <motion.img
              src="/images/logo neuroadvise ps.png"
              alt="NEURO ADVISE"
              className="max-w-xl w-full h-auto drop-shadow-2xl"
              loading="eager"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            />
          </div>

          <motion.div 
            className="mb-10"
            variants={itemVariants}
          >
            <span className="text-white font-normal font-darker text-2xl">
              AI-Powered Creative Recommendations
            </span>
          </motion.div>
        </motion.div>

        {/* Description – minimal margin, slightly less padding */}
        <motion.div 
          className="relative mb-1"
          variants={itemVariants}
        >
          <div className="absolute -inset-5 bg-black rounded-3xl blur-xl"></div>
          <div className="relative text-[#AAAAAA] bg-black  rounded-2xl p-6 md:p-8">
            <motion.p 
              className="text-base md:text-lg lg:text-xl text-[#AAAAAA] leading-relaxed max-w-3xl mx-auto "
              variants={itemVariants}
            >
               NeuroAdvise transforms insights from Aittention, Empath, and Lumina into clear, actionable recommendations. Instead of raw data, you get concrete suggestions: what to change, why it matters, and how it will likely impact performance.
            </motion.p>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Neuroadviseintro;