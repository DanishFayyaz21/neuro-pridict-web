"use client";

import { motion } from "framer-motion";
import FeatureCard from "../ui/feature-card";

const FeatureDiagram = () => {
  return (
    <div className="relative">
      <div className="relative mx-auto px-6 lg:px-12 pb-8 flex justify-center items-center min-h-[770px] lg:min-h-[840px] xl:min-h-[875px]">
        
        {/* Main Container */}
        <div className="relative mb-[-12%] border w-[85%] xl:w-[70%] bg-black/5 backdrop-blur-md rounded-t-2xl p-8 md:p-12 overflow-hidden border-b-0">

          {/* Background SVG Rectangle */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 600 500"
            preserveAspectRatio="none"
            fill="none"
          >
            <rect
              x="25%"
              y="30%"
              width="50%"
              height="36%"
              rx="12"
              stroke="white"
              strokeWidth="3"
              strokeDasharray="50 30"
            />
          </svg>

          {/* ================= ARROWS ================= */}

          {/* Arrow 1 → Top Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 0.8, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="absolute top-[16%] left-[18%] w-40 md:w-52"
            style={{ transform: "rotate(-5deg)" }}
          >
            <svg viewBox="0 0 120 77" fill="none">
              <path
                d="M178.659 63.9315C101.654 101.454 24.0518 29.239 2.04705 2.35624M2.04705 2.35624L25.5518 7.84258M2.04705 2.35624L2.04705 19.3637"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>

          {/* Arrow 2 → Top Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 0.8, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="absolute top-[5%] right-[15%] w-44 md:w-56"
            style={{ transform: "rotate(-10deg)" }}
          >
            <svg viewBox="0 0 165 109" fill="none">
              <path
                d="M1.8156 106.657C26.8612 64.5165 58.7146 -32.0867 161.82 34.0031M161.82 34.0031L120.814 38.4212M161.82 34.0031L141.95 1.60314"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>

          {/* Arrow 3 → Bottom Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 0.8, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="absolute top-[49%] left-[17%] w-44 md:w-60"
            style={{ transform: "rotate(1deg)" }}
          >
            <svg viewBox="0 0 219 104" fill="none">
              <path
                d="M216.737 1.82694C198.29 18.1648 134.118 54.0869 77.461 34.6738C20.8035 15.2607 11.0834 71.0025 13.3023 101.3M13.3023 101.3L25.926 89.8802M13.3023 101.3L1.82668 89.7333"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>

          {/* Arrow 4 → Bottom Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 0.8, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="absolute top-[54%] right-[20%] w-40 md:w-48"
            style={{ transform: "rotate(0deg)" }}
          >
            <svg viewBox="0 0 117 124" fill="none">
              <path
                d="M1.50721 1.49246C5.67805 37.2478 34.2878 103.149 113.418 112.673M113.418 112.673L95.7436 121.771M113.418 112.673L98.7143 99.4051"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>

          {/* ================= TOP FEATURES ================= */}
          <div className="relative grid grid-cols-2 gap-8 md:gap-16 z-10">
            <FeatureCard align="start">
              <span className="font-bold">Avoid confusion</span>
              <br />
              detect friction early
            </FeatureCard>

            <FeatureCard align="end">
              Know exactly
              <br />
              what to change,
              <br />
              and <span className="font-bold">why</span>
            </FeatureCard>
          </div>

          {/* ================= CENTER BUTTON ================= */}
          <div className="flex justify-center my-12 md:my-16 z-10 relative">
            <button
              className="flex items-center gap-3 bg-[#0F0F0F] border border-white
                         text-white px-8 py-4 rounded-full
                         text-lg lg:text-xl font-semibold
                         hover:bg-white hover:text-black
                         transition-all duration-300"
            >
              Start Testing Now
            </button>
          </div>

          {/* ================= BOTTOM FEATURES ================= */}
          <div className="relative grid grid-cols-2 gap-8 md:gap-16 mt-8 z-10">
            <FeatureCard align="start">
              See if your message flows
              <br />
              in the right <span className="font-bold">visual order</span>
            </FeatureCard>

            <FeatureCard align="end">
              Predict where
              <br />
              eyes go first and
              <br />
              what gets <span className="font-bold">ignored</span>
            </FeatureCard>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FeatureDiagram;