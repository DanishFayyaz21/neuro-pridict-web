import React from 'react';

const NeuroLabPredict = () => {
  return (
    <div className="min-h-screen bg-black text-gray-200 px-5 sm:px-10 md:px-16 py-16 font-sans">
      <h1 className="text-center text-4xl sm:text-5xl md:text-6xl font-semibold mb-0 tracking-tight">
        <span className="text-[#5552FF]">Welcome to</span>
      </h1>
      <div className="flex justify-center items-center mb-4">
        <img src="/images/labwhite.png" alt="LAB" className="max-w-lg w-full h-auto" loading="eager" />
      </div>

      <div className="max-w-7xl mx-auto space-y-16 mt-22">
        {/* Attention Card - Image Left, Details Right */}
        <div className="group relative bg-gradient-to-b from-slate-950/80 to-black/70 backdrop-blur-xl border border-purple-900/30 rounded-2xl p-8 md:p-10 transition-all duration-300 hover:-translate-y-3 hover:border-purple-600/50 hover:shadow-2xl hover:shadow-purple-900/20">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/3 h-32 flex items-center justify-center">
              <img
                src="/logos/app icon aittention.png"
                alt="Attention"
                className="max-w-[180px] w-full h-auto drop-shadow-[0_0_25px_#ec4899] group-hover:scale-105 transition-transform duration-400"
                loading="eager"
              />
            </div>
            <div className="w-full md:w-2/3 text-left">
              <div className="flex items-start justify-start mb-5">
                <img src="/images/aittention.png" alt="attention" className="h-16 w-auto" loading="eager" />
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Predict Visual Attention Before You Publish
                <br />
                people will look when they see your creative. Heatmaps reveal where people focus in seconds, helping you optimise layouts, headlines, and focus points before launch — no eye-tracking hardware required.
              </p>
              <div>
                <a
                  href="#"
                  className="inline-block px-8 py-3  rounded-full font-semibold text-white border transition-all duration-300 hover:-translate-y-1"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Empath Card - Details Left, Image Right */}
        <div className="group relative bg-gradient-to-b from-slate-950/80 to-black/70 backdrop-blur-xl border border-cyan-900/30 rounded-2xl p-8 md:p-10 transition-all duration-300 hover:-translate-y-3 hover:border-cyan-600/50 hover:shadow-2xl hover:shadow-cyan-900/20">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/3 h-32flex items-center justify-center">
              <img
                src="/logos/empathlogo.png"
                alt="Empath"
                className="max-w-[180px] w-full h-auto drop-shadow-[0_0_25px_#22d3ee] group-hover:scale-105 transition-transform duration-400"
                loading="eager"
              />
            </div>
            <div className="w-full md:w-2/3 text-center md:text-left">
              <div className="flex items-start justify-start mb-5 -ml-6">
                <img src="/images/empath.png" alt="empath" className="h-26 w-auto " loading="eager" />
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Empath analyses visual and contextual cues to predict emotional responses triggered by your content. Understand whether your creative evokes trust, excitement, comfort, or rejection, and adjust messaging to better resonate with your audience.
              </p>
              <div>
                <a
                  href="#"
                  className="inline-block px-8 py-3 border  rounded-full font-semibold text-white transition-all duration-300 hover:-translate-y-1"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Lumina Card - Image Left, Details Right */}
        <div className="group relative bg-gradient-to-b from-slate-950/80 to-black/70 backdrop-blur-xl border border-violet-900/30 rounded-2xl p-8 md:p-10 transition-all duration-300 hover:-translate-y-3 hover:border-violet-600/50 hover:shadow-2xl hover:shadow-violet-900/20">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/3 h-32 flex items-center justify-center">
              <img
                src="/logos/luminalogo.png"
                alt="Lumina"
                className="max-w-[180px] w-full h-auto drop-shadow-[0_0_25px_#a78bfa] group-hover:scale-105 transition-transform duration-400"
                loading="eager"
              />
            </div>
            <div className="w-full md:w-2/3 text-center md:text-left">
              <div className="flex items-start justify-start mb-8">
                <img src="/images/lumina.png" alt="lumina" className="h-20 w-auto" loading="eager" />
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Reveal Behavioral Patterns & User Intent
                <br />
                Lumina goes beyond what users say — it helps explain <em>why</em> they do it. By analysing interaction flows and behavioural signals, lumina highlights friction points & engagement drivers — unlocking opportunities to improve user experience and performance.
              </p>
              <div>
                <a
                  href="#"
                  className="inline-block px-8 py-3 border  rounded-full font-semibold text-white  transition-all duration-300 hover:-translate-y-1"
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