const PridictHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#020617] text-white font-sans overflow-hidden px-6 py-20">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      
      {/* Dynamic Gradient Spheres */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-spin-slow"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-spin-slow-reverse"></div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        
        {/* Main Headline with Pridict branding */}
     
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[0.95]">
          Make {" "}
          <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-purple-500 bg-clip-text text-transparent animate-gradient">
            confident decisions
          </span>
          <br />
          before{" "}
          <span className="relative">
            you lunch
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-red-500/30 to-pink-500/30 blur-sm"></div>
          </span>
        </h1>
        
        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          Join 500+ elite teams using <span className="text-blue-300 font-semibold">Pridict AI</span> to 
          validate decisions before shipping. Eliminate costly revisions.
        </p>
        
        {/* Action Center */}
        <div className="relative mb-16">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* Primary Action */}
            <button className="group relative bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 text-white font-semibold text-lg py-4 px-12 rounded-2xl hover:shadow-[0_0_50px_rgba(59,130,246,0.3)] transition-all duration-500 transform hover:-translate-y-1">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative flex items-center justify-center gap-3">
                <span>Launch Pridict AI</span>
                <svg 
                  className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300 group-hover:rotate-12" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </button>
            
            {/* Secondary Action */}
            <button className="group border-2 border-gray-800 bg-gray-900/40 backdrop-blur-sm text-white font-semibold text-lg py-4 px-10 rounded-2xl hover:border-blue-500/50 hover:bg-gray-900/60 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] transition-all duration-300">
              <span className="flex items-center justify-center gap-2">
                <svg 
                  className="w-5 h-5 text-blue-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Request Enterprise Demo
                <svg 
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </div>
          
        
        </div>
        
        {/* Social Proof Cluster */}
        <div className="flex flex-col items-center">
          {/* Team Avatars */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((index) => (
                <div 
                  key={index}
                  className="relative w-12 h-12 rounded-full border-2 border-gray-900 overflow-hidden group hover:scale-125 transition-transform duration-300 hover:z-10"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${
                    index === 1 ? 'from-blue-500 to-cyan-500' :
                    index === 2 ? 'from-purple-500 to-pink-500' :
                    index === 3 ? 'from-green-500 to-emerald-500' :
                    index === 4 ? 'from-orange-500 to-red-500' :
                    'from-gray-600 to-gray-800'
                  }`}></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xs">
                    {`P${index}`}
                  </div>
                </div>
              ))}
            </div>
            
          </div>
          
          {/* Trial Message */}
          <p className="text-gray-500 text-sm font-medium tracking-wide">
            <span className="text-green-400"></span> No credit card required · 
            <span className="text-blue-400 ml-3"></span> 7-day free trial · 
            <span className="text-purple-400 ml-3"></span> Enterprise security
          </p>
        </div>
        
      </div>
    
    </section>
  );
};

export default PridictHero;