"use client";

import { motion } from "framer-motion";
import FeatureCard from "../ui/feature-card";

const FeatureDiagram = () => {
    return (
        <div className="relative w-full">
            <div className="relative mx-auto px-5 sm:px-6 rounded-tl-2xl rounded-tr-none md:px-8 lg:px-12 pb-12 md:pb-16 lg:pb-20 flex justify-center items-center min-h-[580px] sm:min-h-[620px] md:min-h-[680px] lg:min-h-[720px]">

                <div
                    className="
                               relative w-full max-w-[95%] 
                              sm:max-w-[90%] 
                                  md:max-w-[85%] 
    lg:max-w-[1100px]
    border border-[#FCFAFA] border-t-2xl border-b-0 rounded-t-2xl
    bg-black/5 backdrop-blur-md 
    p-6 sm:p-8 md:p-10 lg:p-12
    min-h-[480px] 
    sm:min-h-[520px] 
    md:min-h-[580px] 
    lg:min-h-[720px]
    overflow-visible
  "
                >
                    {/* Background rectangle */}
                    <svg
                        className="absolute inset-0 w-full h-full pointer-events-none z-0"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                    >
                        <rect
                            x="26"
                            y="25"
                            width="50"
                            height="45"
                            rx="3"
                            stroke="white"
                            strokeWidth="1.2"
                            strokeDasharray="7 7"
                            fill="none"
                        />
                    </svg>

                    {/* Arrows GROUP - lower z-index so cards stay on top */}
                    <div className="absolute inset-0 z-10 pointer-events-none">
                        {/* Arrow 1 Top-Left */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.85 }}
                            whileInView={{ opacity: 0.8, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="absolute top-[20%] left-[19%] w-[20%] max-w-[220px] -rotate-33deg]"
                        >
                            <svg viewBox="0 0 120 77" fill="none" className="w-full h-auto">
                                <path
                                    d="M178.659 63.9315C101.654 101.454 24.0518 29.239 2.04705 2.35624M2.04705 2.35624L25.5518 7.84258M2.04705 2.35624L2.04705 19.3637"
                                    stroke="white"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </motion.div>

                        {/* Arrow 2 Top-Right */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.85 }}
                            whileInView={{ opacity: 0.8, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="absolute top-[10%] right-[30%] w-[20%] max-w-[230px] -rotate-[25deg]"
                        >
                            <svg viewBox="0 0 165 109" fill="none" className="w-full h-auto">
                                <path
                                    d="M1.8156 106.657C26.8612 64.5165 58.7146 -32.0867 161.82 34.0031M161.82 34.0031L120.814 38.4212M161.82 34.0031L141.95 1.60314"
                                    stroke="white"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </motion.div>

                        {/* Arrow 3 Bottom-Left */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.85 }}
                            whileInView={{ opacity: 0.8, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.15 }}
                            viewport={{ once: true }}
                            className="absolute bottom-[29%] left-[15%] w-[40%] max-w-[300px] rotate-[5deg]"
                        >
                            <svg viewBox="0 0 219 104" fill="none" className="w-full h-auto">
                                <path
                                    d="M216.737 1.82694C198.29 18.1648 134.118 54.0869 77.461 34.6738C20.8035 15.2607 11.0834 71.0025 13.3023 101.3M13.3023 101.3L25.926 89.8802M13.3023 101.3L1.82668 89.7333"
                                    stroke="white"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </motion.div>

                        {/* Arrow 4 Bottom-Right */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.85 }}
                            whileInView={{ opacity: 0.8, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="absolute bottom-[15%] right-[33%] w-[15%] max-w-[230px] rotate-[3deg]"
                        >
                            <svg viewBox="0 0 117 124" fill="none" className="w-full h-auto">
                                <path
                                    d="M1.50721 1.49246C5.67805 37.2478 34.2878 103.149 113.418 112.673M113.418 112.673L95.7436 121.771M113.418 112.673L98.7143 99.4051"
                                    stroke="white"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </motion.div>
                    </div>

                    {/* Cards – higher z-index */}
                    <div className="absolute top-[4%] left-[4%] translate-x-[18%] translate-y-[18%] sm:translate-x-[15%] sm:translate-y-[15%] lg:translate-x-[12%] lg:translate-y-[12%] z-20">
                        <FeatureCard align="start">
                            <span className="font-bold">Avoid confusion</span><br />detect friction early
                        </FeatureCard>
                    </div>

                    <div className="absolute top-[4%] right-[4%] -translate-x-[18%] translate-y-[18%] sm:-translate-x-[15%] sm:translate-y-[15%] lg:-translate-x-[12%] lg:translate-y-[12%] z-20">
                        <FeatureCard align="end">
                            Know exactly<br />what to change,<br />and <span className="font-bold">why</span>
                        </FeatureCard>
                    </div>

                    <div className="absolute bottom-[4%] left-[4%] translate-x-[18%] -translate-y-[22%] sm:translate-x-[15%] sm:-translate-y-[20%] lg:translate-x-[12%] lg:-translate-y-[18%] z-20">
                        <FeatureCard align="start">
                            See if your message flows<br />in the right <span className="font-bold">visual order</span>
                        </FeatureCard>
                    </div>

                    <div className="absolute bottom-[4%] right-[4%] -translate-x-[18%] -translate-y-[25%] sm:-translate-x-[15%] sm:-translate-y-[22%] lg:-translate-x-[12%] lg:-translate-y-[20%] z-20">
                        <FeatureCard align="end">
                            Predict where<br />eyes go first and<br />what gets <span className="font-bold">ignored</span>
                        </FeatureCard>
                    </div>

                    {/* Center Button – highest z-index */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-auto">
                        <button
                            className="flex items-center gap-3 bg-[#0F0F0F] border border-white text-white px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg lg:text-xl font-semibold "
                        >
                            <svg
                                width="20"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                className="w-5 h-6 sm:w-6 sm:h-7 md:w-7 md:h-8"
                                style={{ filter: "drop-shadow(0 0 15px rgba(236, 72, 153, 1)) drop-shadow(0 0 15px rgba(236, 72, 153, 0.9)) drop-shadow(0 0 8px rgba(236, 72, 153, 0.8))" }}
                            >
                                <path d="M7 10L12 5L17 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 5V15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20 13V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Start Testing Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureDiagram;