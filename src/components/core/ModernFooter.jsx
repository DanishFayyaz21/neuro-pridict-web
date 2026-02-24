"use client";
import { motion } from "framer-motion";

const ModernFooter = () => {
    return (
        <footer className="relative bg-black text-gray-300 font-sans pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 overflow-hidden">
            {/* Creative top border with rounded edges - transparent outside */}
            <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none overflow-visible">
                {/* Left curved corner */}
                <div className="absolute top-0 left-0 w-40 h-40">
                    <div className="absolute top-0 left-0 w-full h-full">
                        <div className="absolute top-0 left-0 w-32 h-32 rounded-tl-[80px] border-t-2 border-l-2 border-purple-500/30 blur-[2px]"></div>
                        <div className="absolute top-2 left-2 w-28 h-28 rounded-tl-[70px] border-t border-l border-purple-400/20"></div>
                    </div>
                </div>
                
                {/* Right curved corner */}
                <div className="absolute top-0 right-0 w-40 h-40">
                    <div className="absolute top-0 right-0 w-full h-full">
                        <div className="absolute top-0 right-0 w-32 h-32 rounded-tr-[80px] border-t-2 border-r-2 border-purple-500/30 blur-[2px]"></div>
                        <div className="absolute top-2 right-2 w-28 h-28 rounded-tr-[70px] border-t border-r border-purple-400/20"></div>
                    </div>
                </div>
            </div>
            
            {/* Cinematic light leaks */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.3, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute top-20 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full filter blur-[120px]"
            />
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.2, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                className="absolute -bottom-20 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full filter blur-[100px]"
            />
            
            {/* Subtle grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)] pointer-events-none"></div>

            {/* Main content */}
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Main grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12 lg:mb-16">
                    {/* Left Section - Newsletter - wider */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="lg:col-span-5 space-y-4"
                    >
                        <motion.h3 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-white font-semibold tracking-tight text-2xl sm:text-3xl bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
                        >
                            Subscribe to Newsletter
                        </motion.h3>
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-sm text-gray-400 leading-relaxed max-w-md"
                        >
                            Get monthly insights from founders around the globe.
                            <br />
                            <span className="text-purple-400/80">No spam – promise.</span>
                        </motion.p>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-3 pt-2"
                        >
                            <div className="flex-1 relative group">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full bg-white/5 backdrop-blur-sm text-white rounded-2xl py-3.5 px-5 pr-28 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300 text-sm border border-white/10 hover:border-white/20"
                                />
                                <motion.button 
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white py-2 px-5 rounded-xl text-sm font-medium transition-all duration-300 shadow-lg shadow-purple-600/25 hover:shadow-purple-600/40"
                                >
                                    Subscribe
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Middle Section - Company & Product */}
                    <div className="lg:col-span-7">
                        <div className="grid grid-cols-2 gap-8 md:gap-16">
                            {/* Company */}
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="space-y-5"
                            >
                                <motion.h4 
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.6 }}
                                    className="text-white/90 font-semibold text-xl tracking-tight border-l-4 border-purple-500 pl-3"
                                >
                                    Company
                                </motion.h4>
                                <ul className="space-y-3">
                                    {['Roadmap', 'About', 'Benefits'].map((item, index) => (
                                        <motion.li 
                                            key={item}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                                        >
                                            <a
                                                href="#"
                                                className="text-gray-400 hover:text-white hover:translate-x-2 inline-block transition-all duration-300 text-base group"
                                            >
                                                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat bg-left-bottom group-hover:bg-[length:100%_2px] transition-all duration-500">
                                                    {item}
                                                </span>
                                            </a>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                            
                            {/* Product */}
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="space-y-5"
                            >
                                <motion.h4 
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.6 }}
                                    className="text-white/90 font-semibold text-xl tracking-tight border-l-4 border-blue-500 pl-3"
                                >
                                    Product
                                </motion.h4>
                                <ul className="space-y-3">
                                    {['Analysis', 'Scale', 'Developer'].map((item, index) => (
                                        <motion.li 
                                            key={item}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                                        >
                                            <a
                                                href="#"
                                                className="text-gray-400 hover:text-white hover:translate-x-2 inline-block transition-all duration-300 text-base group"
                                            >
                                                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-[length:0%_2px] bg-no-repeat bg-left-bottom group-hover:bg-[length:100%_2px] transition-all duration-500">
                                                    {item}
                                                </span>
                                            </a>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section - with animated separator line */}
                <div className="relative pt-8 mt-8">
                    {/* Animated gradient line */}
                    <motion.div 
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut" }}
                        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent origin-left"
                    />
                    
                    {/* Pulsing glow on the line */}
                    <motion.div 
                        animate={{ 
                            opacity: [0.3, 0.6, 0.3],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{ 
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-px bg-purple-500 blur-sm"
                    />
                    
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                        {/* Left Branding with dummy SVG */}
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.9 }}
                            className="flex items-center gap-4 group"
                        >
                            <motion.div 
                                whileHover={{ rotate: 360, scale: 1.1 }}
                                transition={{ duration: 0.8 }}
                            >
                                {/* Dummy SVG Logo */}
                                                         <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M20.4476 0.00023271C20.9574 -0.0114192 21.3607 0.416048 21.35 0.931873L21.1976 8.20043C21.1866 8.71949 20.7598 9.12874 20.2475 9.15844C18.2353 9.27507 16.2804 9.90668 14.5726 11.0002C12.6027 12.2618 11.0494 14.0816 10.1098 16.2287C9.17014 18.3761 8.88579 20.7554 9.29335 23.0647C9.70092 25.374 10.7824 27.5104 12.3998 29.2034C14.0171 30.8961 16.0984 32.0696 18.3803 32.5754C20.6623 33.0813 23.0426 32.8968 25.2201 32.0452C27.3975 31.1935 29.2747 29.7133 30.6137 27.7912C31.773 26.1271 32.484 24.1957 32.6859 22.1858C32.738 21.6693 33.1596 21.2553 33.6723 21.2659L40.931 21.4192C41.4408 21.43 41.8465 21.8563 41.8129 22.3713C41.5631 26.1935 40.2752 29.8814 38.0814 33.0305C35.7098 36.4348 32.3853 39.0573 28.5287 40.5657C24.6721 42.074 20.4562 42.4011 16.4144 41.5051C12.3726 40.6091 8.68631 38.5299 5.82167 35.5315C2.95706 32.5331 1.04256 28.7496 0.320694 24.6594C-0.40115 20.5693 0.101907 16.3562 1.76601 12.553C3.43019 8.74971 6.18105 5.52675 9.6703 3.29222C12.9001 1.22392 16.629 0.0883808 20.4476 0.00023271Z" fill="#5552FF" />
                                <path d="M24.9446 19.1965C24.4316 19.199 24.0156 18.7826 24.0156 18.2663L24.0157 1.16763C24.0157 0.323105 25.0405 -0.0932854 25.6182 0.516485L41.7432 17.5351C42.3049 18.1279 41.8855 19.1124 41.0697 19.1165L24.9446 19.1965Z" fill="#D251FF" />
                            </svg>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 1.0 }}
                            >
                                <div className="text-white font-bold text-xl tracking-tight">Gen 1.</div>
                                <div className="text-xs text-gray-600">by DesignPad.</div>
                            </motion.div>
                        </motion.div>

                        {/* Copyright */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.1 }}
                            className="text-gray-600 text-sm text-center lg:text-left order-3 lg:order-2"
                        >
                            2026 NeuroPredict – <span className="text-gray-500">All rights reserved</span>
                        </motion.div>

                        {/* Right Links */}
                        <motion.div 
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                            className="flex items-center gap-6 order-2 lg:order-3"
                        >
                            {['Privacy Policy', 'Terms & Conditions'].map((item, index) => (
                                <motion.a
                                    key={item}
                                    href="#"
                                    whileHover={{ y: -2 }}
                                    className="text-gray-500 hover:text-white text-sm transition-all duration-300 relative group"
                                >
                                    {item}
                                    <motion.span 
                                        initial={{ width: 0 }}
                                        whileHover={{ width: '100%' }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute -bottom-1 left-0 h-px bg-gradient-to-r from-purple-500 to-blue-500"
                                    />
                                </motion.a>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default ModernFooter;