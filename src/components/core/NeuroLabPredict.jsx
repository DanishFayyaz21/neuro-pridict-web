import React from 'react';

const NeuroLabPredict = () => {
  return (
    <div className="min-h-screen bg-black text-gray-200">
      <h1 className="text-center text-4xl sm:text-5xl md:text-6xl font-semibold mb-0 tracking-tight">
        <span className="bg-gradient-to-r from-[#5653FF] to-[#D252FF] bg-clip-text text-transparent">Welcome to</span>
      </h1>
      <div className="flex justify-center items-center mb-4">
        <img src="/images/labwhite.png" alt="LAB" className="max-w-lg w-full h-auto" loading="eager" />
      </div>

      <div className="max-w-7xl mx-auto space-y-16 mt-22">
        {/* Attention Card - Image Left, Details Right */}
        <div className="group relative bg-black backdrop-blur-xl  rounded-2xl p-8 md:p-10">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/2 h-32 flex items-center justify-center">
              <img
                src="/logos/app icon aittention.png"
                alt="Attention"
                className="max-w-[200px] w-full h-auto drop-shadow-[0_0_25px_#5754FFFF] group-hover:scale-105 transition-transform duration-400"
                loading="eager"
              />
            </div>
            <div className="w-full md:w-1/2 text-left">
              <div className="flex items-start ml-4  justify-start mb-5">
                <img src="/images/aittention.png" alt="attention" className="h-16 w-auto" loading="eager" />
              </div>
              <div className="text-[#AAAAAA] ml-10 text-lg leading-relaxed mb-8">
                <p className="font-semibold text-white">Predict Visual Attention Before You Publish</p> 
                <br />
                Aittention uses neuroscience-inspired AI to predict exactly where people will look when they see your creative. Heatmaps reveal visual saliency in seconds, helping you optimize layouts, hierarchies, and focal points before launch, no eye-tracking hardware required.
              </div>
              <div>
                <a
                  href="#"
                  className="inline-block px-8 py-3  ml-12 bg-[#1A1A1A] rounded-full font-semibold text-white transition-all duration-300 hover:-translate-y-1"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Empath Card - Details Left, Image Right */}
        <div className="group relative bg-black backdrop-blur-xl rounded-2xl p-8 md:p-10 transition-all duration-300 ">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/2 h-32 flex items-center justify-center">
              <img
                src="/logos/empathlogo.png"
                alt="Empath"
                className="max-w-[200px] w-full h-auto drop-shadow-[0_0_25px_#2CB06B] group-hover:scale-105 transition-transform duration-400"
                loading="eager"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <div className="flex items-start mr-1 justify-start mb-5 -ml-6">
                <img src="/images/empath.png" alt="empath" className="h-26 w-auto " loading="eager" />
              </div>
              <p className="text-[#AAAAAA] text-lg leading-relaxed mb-8 font-light font-popins">
                Empath analyzes visual and contextual cues to predict emotional responses triggered by your content. Understand whether your creative evokes trust, excitement, comfort, or rejection, and adjust messaging to better resonate with your audience.
              </p>
              <div>
                <a
                  href="#"
                  className="inline-block px-8 py-3  bg-[#1A1A1A] rounded-full font-semibold text-white transition-all duration-300 hover:-translate-y-1"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Lumina Card - Image Left, Details Right */}
        <div className="group relative bg-black backdrop-blur-xl rounded-2xl  p-8 md:p-10 transition-all duration-300 ">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/2 h-32 mr-6 flex items-center justify-center">
              <img
                src="/logos/luminalogo.png"
                alt="Lumina"
                className="max-w-[200px] w-full h-auto drop-shadow-[0_0_25px_#2945F5] group-hover:scale-105 transition-transform duration-400"
                loading="eager"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <div className="flex items-start justify-start mb-8">
                <img src="/images/lumina.png" alt="lumina" className="h-20 w-auto" loading="eager" />
              </div>
              <div className="text-[#AAAAAA] text-lg leading-relaxed mb-8 font-light font-popins">
                <p className="text-white font-semibold">Reveal Behavioral Patterns & User Intent</p> 
                <br />
                Lumina goes beyond what users do, it helps explain why they do it. By analysing interaction flows and behavioural signals, Lumina highlights friction points, engagement drivers, and hidden opportunities to improve user experience and performance.
              </div>
              <div>
                <a
                  href="#"
                  className="inline-block px-8 py-3  bg-[#1A1A1A] rounded-full font-semibold text-white  transition-all duration-300 hover:-translate-y-1"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeuroLabPredict;