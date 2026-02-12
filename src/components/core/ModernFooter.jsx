const ModernFooter = () => {
    return (
        <footer className="bg-black text-gray-300 font-sans pt-8 sm:pt-10 md:pt-12 pb-6 sm:pb-8 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 relative overflow-hidden">
            {/* Subtle glow effect at top */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>

            <div className="max-w-7xl mx-auto ">
                {/* Main 4-column grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4 md:gap-20 mb-8 sm:mb-10 md:mb-12">

                    {/* Left Section - Newsletter */}
                    <div className="space-y-3 sm:space-y-3 lg:col-span-1">
                        <h3 className="text-white font-medium text-base sm:text-lg tracking-tight font-clash-display font-500">Subscribe to Newsletter</h3>
                        <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                            Get monthly insights from founders around the globe.
                            <br />
                            No spam – promise.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <div className="flex-1 min-w-[320px] relative">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full bg-[#1E1E1E66] text-[#3A3A3A]  rounded-2xl py-2 sm:py-3 px-3 sm:px-4 pr-20  placeholder-gray-500 focus:outline-none  focus:ring-1 focus:ring-purple-500/30 transition-all duration-200 text-sm sm:text-base"
                                />
                                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#5552FF] text-white font-medium py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-purple-500/50 whitespace-nowrap text-xs sm:text-sm">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Middle Section - Company */}
                    <div className="space-y-4 sm:space-y-5 ml-12">
                        <h4 className="text-white font-semibold mb-3 sm:mb-5 text-base sm:text-lg">Company</h4>
                        <ul className="space-y-2 sm:space-y-3">
                            {['Roadmap', 'About', 'Benefits'].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm hover:pl-1 transform hover:translate-x-1 block"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Middle Section - Product */}
                    <div className="space-y-4 sm:space-y-5 ml-12">
                        <h4 className="text-white font-semibold mb-3 sm:mb-5 text-base sm:text-lg">Product</h4>
                        <ul className="space-y-2 sm:space-y-3">
                            {['Analysis', 'Scale', 'Developer', 'API', 'Pricing'].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm hover:pl-1 transform hover:translate-x-1 block"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Section - Pages */}
                    <div className="space-y-4 sm:space-y-5 ml-12">
                        <h4 className="text-white font-semibold mb-3 sm:mb-5 text-base sm:text-lg">Pages</h4>
                        <ul className="space-y-2 sm:space-y-3">
                            {['Var 1.0', 'Var 1.1', 'Var 1.2'].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm hover:pl-1 transform hover:translate-x-1 block"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="pt-6 sm:pt-8 border-t border-gray-900 flex flex-col lg:flex-row justify-between items-center gap-4 sm:gap-6">
                    {/* Left Branding */}
                    <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center">
                            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M20.4476 0.00023271C20.9574 -0.0114192 21.3607 0.416048 21.35 0.931873L21.1976 8.20043C21.1866 8.71949 20.7598 9.12874 20.2475 9.15844C18.2353 9.27507 16.2804 9.90668 14.5726 11.0002C12.6027 12.2618 11.0494 14.0816 10.1098 16.2287C9.17014 18.3761 8.88579 20.7554 9.29335 23.0647C9.70092 25.374 10.7824 27.5104 12.3998 29.2034C14.0171 30.8961 16.0984 32.0696 18.3803 32.5754C20.6623 33.0813 23.0426 32.8968 25.2201 32.0452C27.3975 31.1935 29.2747 29.7133 30.6137 27.7912C31.773 26.1271 32.484 24.1957 32.6859 22.1858C32.738 21.6693 33.1596 21.2553 33.6723 21.2659L40.931 21.4192C41.4408 21.43 41.8465 21.8563 41.8129 22.3713C41.5631 26.1935 40.2752 29.8814 38.0814 33.0305C35.7098 36.4348 32.3853 39.0573 28.5287 40.5657C24.6721 42.074 20.4562 42.4011 16.4144 41.5051C12.3726 40.6091 8.68631 38.5299 5.82167 35.5315C2.95706 32.5331 1.04256 28.7496 0.320694 24.6594C-0.40115 20.5693 0.101907 16.3562 1.76601 12.553C3.43019 8.74971 6.18105 5.52675 9.6703 3.29222C12.9001 1.22392 16.629 0.0883808 20.4476 0.00023271Z" fill="#5552FF" />
                                <path d="M24.9446 19.1965C24.4316 19.199 24.0156 18.7826 24.0156 18.2663L24.0157 1.16763C24.0157 0.323105 25.0405 -0.0932854 25.6182 0.516485L41.7432 17.5351C42.3049 18.1279 41.8855 19.1124 41.0697 19.1165L24.9446 19.1965Z" fill="#D251FF" />
                            </svg>

                        </div>
                        <div>
                            <div className="text-white font-bold text-sm sm:text-lg tracking-tight">Gen 1.</div>
                            <div className="text-xs text-gray-500">by DesignPad.</div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="text-gray-500 text-xs sm:text-sm text-center lg:text-left order-3 lg:order-2">
                        2026 NeuroPredict – All rights reserved
                    </div>

                    {/* Right Links */}
                    <div className="flex items-center gap-4 sm:gap-6 order-2 lg:order-3">
                        <a href="#" className="text-gray-500 hover:text-gray-300 text-xs sm:text-sm transition-colors duration-200">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-300 text-xs sm:text-sm transition-colors duration-200">
                            Terms & Conditions
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default ModernFooter;