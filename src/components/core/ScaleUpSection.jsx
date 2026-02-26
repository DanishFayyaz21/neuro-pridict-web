"use client";

import { motion } from "framer-motion";

const ScaleUpSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-60">
      {/* Background wavy pattern */}
      <div className="absolute inset-0 opacity-0">
        <div className="absolute inset-0"></div>
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M0,400 C360,600 720,200 1440,400 L1440,800 L0,800 Z"
            fill="url(#gradient1)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,600 C480,400 960,800 1440,600 L1440,800 L0,800 Z"
            fill="url(#gradient2)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-clash font-normal text-white mb-6 leading-tight" style={{ fontWeight: 400, fontStyle: 'normal', fontSize: '64px' }}>
            Scale up your{" "}
            <span className="text-white bg-clip-text">
              SaaS, Ecommerce
            </span>{" "}
            and more with
          </h1>
          
          <motion.h2
            className="text-5xl sm:text-6xl lg:text-8xl font-clash font-medium mb-12 bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent"
            style={{ fontWeight: 500, fontStyle: 'normal', fontSize: '64px' }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            AI powered Analytics
          </motion.h2>

          <motion.button
            className="px-12 py-5 bg-[#6353FF] hover:from-purple-700 hover:to-purple-800 mr-12 text-white font-semibold text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Start
          </motion.button>
        </motion.div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default ScaleUpSection;
