import Hero from '../neural-network-hero.jsx';

const FeatureDiagramMobile = () => {
    return (
        <div className="relative mt-32">
            {/* Background Image */}
            <div className="absolute inset-0 opacity-50">
                <Hero />    
                {/* <img src="/images/hero.png" alt="Hero Background" className="w-full h-full object-cover" /> */}
            </div>

            <div className="relative mx-auto px-6 lg:px-12 pb-24 flex justify-center items-center min-h-[600px]">
                {/* Diagram Container */}
                <div className="relative bg-[#0F0F0F] w-[100%] backdrop-blur-sm rounded-3xl p-8 md:p-12 overflow-hidden">

                    {/* SVG Lines + Arrows Container */}
                    <svg
                        className="absolute inset-0 w-full h-full pointer-events-none"
                        viewBox="0 0 600 500"  // Adjusted viewBox to match container size roughly
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {/* Optional: existing dashed rect – keeping it if you want */}
                        <rect x="50" y="170" width="500" height="200" rx="12" stroke="white" strokeWidth="1.5" strokeDasharray="15 15" />
                    </svg>

                    {/* Arrow 2 → Top Left box */}
                    <div
                        className="absolute top-[19%] left-[20%] bottom-[70%] w-44 md:w-52 opacity-80"
                        style={{ transform: 'rotate(-300deg)' }}
                    >
                        <svg width="251" height="60" viewBox="0 0 120 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M178.659 63.9315C101.654 101.454 24.0518 29.239 2.04705 2.35624M2.04705 2.35624L25.5518 7.84258M2.04705 2.35624L2.04705 19.3637"
                                stroke="white"
                                strokeWidth="3.89672"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>

                    {/* Arrow 3 → Bottom left box */}
                    <div
                        className="absolute top-[53%] left-[17%] w-52 md:w-60 opacity-80"
                        style={{ transform: 'rotate(1deg)' }} // mirrored + slight rotate
                    >
                        <svg width="145" height="77" viewBox="0 0 219 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M216.737 1.82694C198.29 18.1648 134.118 54.0869 77.461 34.6738C20.8035 15.2607 11.0834 71.0025 13.3023 101.3M13.3023 101.3L25.926 89.8802M13.3023 101.3L1.82668 89.7333"
                                stroke="white"
                                strokeWidth="3.65271"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>

                    {/* Arrow 4 → Bottom right box */}
                    <div
                        className="absolute bottom-[12%] right-[35%]  left-[55%] top-[52%]  w-40 md:w-48 opacity-80"
                        style={{ transform: 'rotate(10deg)' }}
                    >
                        <svg width="84" height="80" viewBox="0 0 117 124" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                        <svg width="110" height="140" viewBox="0 0 165 109" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                            <div className="bg-bg-[#1a1a1a] backdrop-blur rounded-2xl p-4 w-[90%] h-[90%] border border-zinc-700">
                                <p className="text-sm text-white">
                                    Know exactly<br />
                                    what to change,<br />
                                    and <span className="font-bold">why</span>
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Center Button */}
                    <div className="flex justify-center my-6 sm:my-8 md:my-10 z-10 relative">
                        <button className="flex items-center gap-2 sm:gap-3  text-white border px-3 sm:px-4 py-2 sm:py-2.5 rounded-full font-medium  text-xs sm:text-sm">
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
