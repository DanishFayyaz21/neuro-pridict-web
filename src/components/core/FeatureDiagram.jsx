"use client";

import { motion } from "framer-motion";
import FeatureCard from "../ui/feature-card";

const FeatureDiagram = () => {
    return (
        <div className="relative">
            <div className="relative mx-auto px-6 backdrop-blur-xl lg:px-12 pb-8 flex justify-center items-center min-h-[570px] lg:min-h-[640px] xl:min-h-[675px] 2xl:min-h-[675px]">

                {/* Main Container */}
                <div className="relative mb-[-12%] border w-[85%] xl:w-[70%] 2xl:w-[70%] bg-black/5 backdrop-blur-md rounded-t-2xl p-8 md:p-12 overflow-visible border-b-0 min-h-[500px] md:min-h-[550px] lg:min-h-[600px]">

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
                            strokeDasharray="35 20"
                        />
                    </svg>

                    {/* ================= ARROWS ================= */}

                    {/* Arrow 1 → Top Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 0.8, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="absolute top-[25%] left-[15%] w-32 sm:w-36 md:w-40 lg:w-44"
                        style={{ transform: "rotate(-8deg)" }}
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

                    {/* Arrow 2 → Top Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 0.8, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="absolute top-[8%] right-[15%] w-36 sm:w-40 md:w-44 lg:w-48"
                        style={{ transform: "rotate(-30deg)" }}
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

                    {/* Arrow 3 → Bottom Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 0.8, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="absolute bottom-[25%] left-[10%] w-36 sm:w-40 md:w-44 lg:w-48"
                        style={{ transform: "rotate(1deg)" }}
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

                    {/* Arrow 4 → Bottom Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 0.8, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="absolute bottom-[28%] right-[15%] w-32 sm:w-36 md:w-40 lg:w-44"
                        style={{ transform: "rotate(0deg)" }}
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

                    {/* ================= FIXED POSITION FEATURE CARDS ================= */}
                    
                    {/* Card 1 - Top Left - MOVED MUCH MORE INSIDE */}
                    <div className="absolute top-0 left-0 z-20 translate-x-[35%] translate-y-[35%] sm:translate-x-[30%] sm:translate-y-[30%] md:translate-x-[28%] md:translate-y-[28%] lg:translate-x-[25%] lg:translate-y-[25%]">
                        <FeatureCard align="start">
                            <span className="font-bold">Avoid confusion</span>
                            <br />
                            detect friction early
                        </FeatureCard>
                    </div>

                    {/* Card 2 - Top Right - MOVED MUCH MORE INSIDE */}
                    <div className="absolute top-0 right-0 z-20 -translate-x-[35%] translate-y-[35%] sm:-translate-x-[30%] sm:translate-y-[30%] md:-translate-x-[28%] md:translate-y-[28%] lg:-translate-x-[25%] lg:translate-y-[25%]">
                        <FeatureCard align="end">
                            Know exactly
                            <br />
                            what to change,
                            <br />
                            and <span className="font-bold">why</span>
                        </FeatureCard>
                    </div>

                    {/* ================= CENTER BUTTON ================= */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                        <button
                            className="flex items-center gap-3 bg-[#0F0F0F] border border-white
                                     text-white px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 rounded-full
                                     text-base sm:text-lg lg:text-xl font-semibold
                                     transition-all duration-300 whitespace-nowrap"
                        >
                            <svg
                                width="20"
                                height="35"
                                viewBox="0 0 24 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-6 sm:w-5 sm:h-7 md:w-6 md:h-8"
                                style={{
                                    filter:
                                        "drop-shadow(0 0 25px rgba(236, 72, 153, 1)) drop-shadow(0 0 15px rgba(236, 72, 153, 0.9)) drop-shadow(0 0 8px rgba(236, 72, 153, 0.8))",
                                }}
                            >
                                <path
                                    d="M12 10L8 14M12 10L16 14M12 10V18"
                                    stroke="white"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M4 18V24C4 25.1046 4.89543 26 6 26H18C19.1046 26 20 25.1046 20 24V18"
                                    stroke="white"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            Start Testing Now
                        </button>
                    </div>

                    {/* Card 3 - Bottom Left - MOVED MUCH MORE INSIDE */}
                    <div className="absolute bottom-0 left-0 z-20 translate-x-[35%] -translate-y-[35%] sm:translate-x-[30%] sm:-translate-y-[30%] md:translate-x-[28%] md:-translate-y-[28%] lg:translate-x-[25%] lg:-translate-y-[25%]">
                        <FeatureCard align="start">
                            See if your message flows
                            <br />
                            in the right <span className="font-bold">visual order</span>
                        </FeatureCard>
                    </div>

                    {/* Card 4 - Bottom Right - MOVED MUCH MORE INSIDE */}
                    <div className="absolute bottom-0 right-0 z-20 -translate-x-[35%] -translate-y-[35%] sm:-translate-x-[30%] sm:-translate-y-[30%] md:-translate-x-[28%] md:-translate-y-[28%] lg:-translate-x-[25%] lg:-translate-y-[25%]">
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