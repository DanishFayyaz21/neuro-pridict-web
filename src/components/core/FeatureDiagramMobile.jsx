"use client";

import { motion } from "framer-motion";
import FeatureCard from "../ui/feature-card";

const FeatureDiagramMobile = () => {
  return (
    <div className="relative">
      <div className="relative mx-auto px-6 backdrop-blur-xl  lg:px-12 pb-8 flex justify-center items-center min-h-[570px] lg:min-h-[640px] xl:min-h-[675px]">
        
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
              height="39%"
              rx="10"
              stroke="white"
              strokeWidth="3"
              strokeDasharray="30 20"
            />
          </svg>

          {/* ================= ARROWS ================= */}

          {/* Arrow 1 → Top Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 0.8, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="absolute top-[29%] left-[22%] w-40 md:w-30 "
            style={{ transform: "rotate(-8deg)", height: "100px" }}
          >
            <svg viewBox="0 0 120 77" fill="none">
              <path
                d="M178.659 63.9315C101.654 101.454 24.0518 29.239 2.04705 2.35624M2.04705 2.35624L25.5518 7.84258M2.04705 2.35624L2.04705 19.3637"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>

                    {/* Arrow 2 → Top Left box box */}
                    <div
                        className="absolute bottom-[60%] right-[45%]  left-[50%] top-[32%]  w-40 md:w-48 opacity-80"
                        style={{ transform: 'rotate(250deg)' }}
                    >
                        <svg width="130" height="80" viewBox="0 0 117 124" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1.50721 1.49246C5.67805 37.2478 34.2878 103.149 113.418 112.673M113.418 112.673L95.7436 121.771M113.418 112.673L98.7143 99.4051"
                                stroke="white"
                                strokeWidth="3"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>

                    {/* Arrow 1 → Top leftbox */}
                    <div
                        className="absolute top-[19%] right-[55%] w-48 md:w-56 opacity-80"
                        style={{ transform: 'rotate(-100deg)' }} // mirrored for better direction
                    >
                        <svg width="100" height="110" viewBox="0 0 165 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1.8156 106.657C26.8612 64.5165 58.7146 -32.0867 161.82 34.0031M161.82 34.0031L120.814 38.4212M161.82 34.0031L141.95 1.60314"
                                stroke="white"
                                strokeWidth="3.42567"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>

                    {/* Grid of feature cards */}
                    <div className="relative grid grid-cols-2 pb-16 gap-8 md:gap-16 z-10">

                        {/* Top Left Feature */}
                        <div className="flex justify-start">
                            <div className="bg-[#1a1a1a] backdrop-blur rounded-2xl p-4 w-[84%] h-[90%] border border-zinc-700 text-center">
                                <p className="text-sm text-white">
                                    <span className="text-white">Avoid confusion</span><br />
                                    detect friction early
                                </p>
                            </div>
                        </div>

                        {/* Top Right Feature */}
                        <div className="flex justify-end">
                            <div className="bg-[#1a1a1a] backdrop-blur rounded-2xl p-4 w-[90%] h-[90%] border border-zinc-700">
                                <p className="text-sm text-white">
                                    Know exactly<br />
                                    what to change,<br />
                                    and <span className="font-bold">why</span>
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Center Button */}
                    <div className="flex justify-center my-6 sm:my-8 h-[10%] md:my-10 z-10 relative">
                        <button className="flex items-center w-[60%]  gap-2 sm:gap-3  text-white border px-3 sm:px-4 py-2 sm:py-2.5 rounded-full font-medium  text-xs sm:text-sm">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                            </svg>
                            Start Testing Now
                        </button>
                    </div>

                    {/* Bottom Features */}
                    <div className="relative grid grid-cols-2 gap-8 md:gap-16 mt-12 z-10">

                        {/* Bottom Left Feature */}
                        <div className="flex justify-start mt-6">
                            <div className="bg-[#1a1a1a] backdrop-blur rounded-2xl p-4 w-full border border-zinc-700">
                                <p className="text-sm text-white">
                                    See if your message flows<br />
                                    in the right <span className="font-bold">visual order</span>
                                </p>
                            </div>
                        </div>

                        {/* Bottom Right Feature */}
                        <div className="flex justify-end mt-6">
                            <div className="bg-[#1a1a1a] backdrop-blur rounded-2xl p-4 w-full border border-zinc-700">
                                <p className="text-sm text-white">
                                    Predict where<br />
                                    eyes go first and<br />
                                    what gets <span className="font-bold">Ignored</span>
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default FeatureDiagramMobile;
