'use client'

import React, { useState } from 'react'

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
    }

    return (
        <nav className="relative flex bg-black items-center justify-between px-6 lg:px-12 py-4 font-sans">
            <div className="flex items-center gap-8">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img src="/images/logo.png" alt="NeuroPredict Logo" width="200" height="200" />
                    
                </div>

                {/* Nav Links - Desktop */}
                <div className="hidden md:flex items-center gap-6">
                    <button className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors">
                        Tools
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <button className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors">
                        Product
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">Blogs</a>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
                </div>
            </div>

            {/* Auth Buttons - Desktop */}
            <div className="hidden md:flex items-center gap-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Log In</a>
                <button className="bg-[#5552FF]  text-white px-5 py-2 rounded-full transition-colors">
                    Get Started
                </button>
            </div>

            {/* Mobile Get Started Button */}
            <div className="hidden md:hidden">
                <button className="bg-[#5552FF] hover:bg-purple-700 text-white px-4 py-2 rounded-full transition-colors text-sm">
                    Get Started
                </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
                onClick={toggleMobileMenu}
                className="md:hidden flex flex-col items-center justify-center w-8 h-8 gap-1"
            >
                <span className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-balck shadow-2xl border-t border-gray-700/50 backdrop-blur-lg z-40">
                    <div className="px-4 py-6 space-y-1">
                        {/* Main Navigation */}
                        <div className="space-y-1">
                            <button onClick={closeMobileMenu} className="w-full group flex items-center gap-3 px-4 py-3 text-left rounded-lg hover:bg-white/10 transition-all duration-200 text-gray-300 hover:text-white">
                                <div className="w-8 h-8 rounded-lg bg-gray-700/50 flex items-center justify-center group-hover:bg-gray-600/50 transition-all duration-200">
                                    <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                    </svg>
                                </div>
                                <span className="font-medium text-gray-200">Tools</span>
                                <svg className="w-4 h-4 ml-auto text-gray-400 group-hover:text-gray-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                            
                            <button onClick={closeMobileMenu} className="w-full group flex items-center gap-3 px-4 py-3 text-left rounded-lg hover:bg-white/10 transition-all duration-200 text-gray-300 hover:text-white">
                                <div className="w-8 h-8 rounded-lg bg-gray-700/50 flex items-center justify-center group-hover:bg-gray-600/50 transition-all duration-200">
                                    <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                </div>
                                <span className="font-medium ">Product</span>
                                <svg className="w-4 h-4 ml-auto text-gray-500 group-hover:text-gray-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                            
                            <a href="#" onClick={closeMobileMenu} className="w-full group flex items-center gap-3 px-4 py-3 text-left rounded-lg hover:bg-white/10 transition-all duration-200 text-gray-300 hover:text-white">
                                <div className="w-8 h-8 rounded-lg bg-gray-700/50 flex items-center justify-center group-hover:bg-gray-600/50 transition-all duration-200">
                                    <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                    </svg>
                                </div>
                                <span className="font-medium">Blogs</span>
                            </a>
                            
                            <a href="#" onClick={closeMobileMenu} className="w-full group flex items-center gap-3 px-4 py-3 text-left rounded-lg hover:bg-white/10 transition-all duration-200 text-gray-300 hover:text-white">
                                <div className="w-8 h-8 rounded-lg bg-gray-700/50 flex items-center justify-center group-hover:bg-gray-600/50 transition-all duration-200">
                                    <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <span className="font-medium">Pricing</span>
                            </a>
                        </div>
                        
                        {/* Divider */}
                        <div className="border-t border-gray-700/50 my-4"></div>
                        
                        {/* Auth Section */}
                        <div className="space-y-2">
                            <a href="#" onClick={closeMobileMenu} className="w-full flex items-center justify-center px-4 py-3 text-center rounded-lg border border-gray-600/50 text-gray-300 hover:border-gray-500 hover:text-white transition-all duration-200 font-medium">
                                Log In
                            </a>
                            <button onClick={closeMobileMenu} className="hidden w-full flex items-center justify-center px-4 py-3 text-center rounded-lg bg-gradient-to-r from-[#5552FF] to-[#7C3AED] hover:from-[#4A41E8] hover:to-[#6D28D9] text-white font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02]">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}