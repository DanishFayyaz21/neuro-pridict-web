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
              x="13%"
              y="33%"
              width="75%"
              height="30%"
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
            className="absolute top-[50%] left-[20%] w-22 md:w-16"
            style={{ transform: "rotate (5566deg)" }}
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

                    {/* Arrow 2 → Top Right */}
                    <div
                        className="absolute top-[26%] right-[20%] w-22 md:w-36 opacity-80"
                        style={{ transform: 'rotate(45deg)' }}
                    >
                        <svg width="77" height="77" viewBox="0 0 120 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M178.659 63.9315C101.654 101.454 24.0518 29.239 2.04705 2.35624M2.04705 2.35624L25.5518 7.84258M2.04705 2.35624L2.04705 19.3637"
                                stroke="white"
                                strokeWidth="4"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>

                    {/* Arrow 3 → Bottom Left */}
                    <div
                        className="absolute bottom-[38%] left-[37%] w-32 md:w-36 opacity-80"
                        style={{ transform: 'rotate(222deg)' }}
                    >
                        <svg width="50" height="77" viewBox="0 0 120 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M178.659 63.9315C101.654 101.454 24.0518 29.239 2.04705 2.35624M2.04705 2.35624L25.5518 7.84258M2.04705 2.35624L2.04705 19.3637"
                                stroke="white"
                                strokeWidth="4"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>

                    {/* Arrow 4 → Bottom Right */}
                    <div
                        className="absolute bottom-[52%] right-[52%] w-32 md:w-36 opacity-80"
                        style={{ transform: 'rotate(50deg)' }}
                    >
                        <svg width="100" height="77" viewBox="0 0 120 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M178.659 63.9315C101.654 101.454 24.0518 29.239 2.04705 2.35624M2.04705 2.35624L25.5518 7.84258M2.04705 2.35624L2.04705 19.3637"
                                stroke="white"
                                strokeWidth="4"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>

                    {/* Grid of feature cards */}
                    <div className="relative grid grid-cols-2 pb-16 gap-8 md:gap-16 z-10">

                        {/* Top Left Feature */}
                        <div className="flex justify-start">
                            <div className="bg-[#1a1a1a] backdrop-blur rounded-2xl  w-[130%] h-[100%] border border-zinc-700 text-center">
                                <p className="text-sm text-white">
                                    <span className="text-white">Avoid confusion</span><br />
                                    detect friction early
                                </p>
                            </div>
                        </div>

                        {/* Top Right Feature */}
                        <div className="flex justify-end">
                            <div className="bg-[#1a1a1a] backdrop-blur rounded-2xl pl-1 w-[130%] h-[100%] border border-zinc-700">
                                <p className="text-sm text-white text-center">
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
                            <div className="bg-[#1a1a1a] backdrop-blur rounded-2xl pl-2 w-[126%] h-[92%] border border-zinc-700">
                                <p className="text-sm text-white">
                                    See if your message flows<br />
                                    in the right <span className="font-bold">visual order</span>
                                </p>
                            </div>
                        </div>

                        {/* Bottom Right Feature */}
                        <div className="flex justify-end mt-6">
                            <div className="bg-[#1a1a1a] backdrop-blur rounded-2xl pl-2 w-[126%] h-[102%] border border-zinc-700">
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
