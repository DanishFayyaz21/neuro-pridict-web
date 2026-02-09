export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation Header */}
      <nav className="flex items-center justify-between px-6 lg:px-12 py-4">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="14" cy="14" r="12" stroke="#8b5cf6" strokeWidth="2"/>
              <path d="M14 6C10 6 8 9 8 12C8 15 10 16 10 18C10 20 12 22 14 22C16 22 18 20 18 18C18 16 20 15 20 12C20 9 18 6 14 6Z" fill="#8b5cf6" opacity="0.3"/>
              <circle cx="11" cy="11" r="2" fill="#8b5cf6"/>
              <circle cx="17" cy="11" r="2" fill="#8b5cf6"/>
              <path d="M10 15C10 15 12 17 14 17C16 17 18 15 18 15" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span className="text-xl font-semibold">Neur<span className="text-purple-400">o</span>Predict</span>
          </div>
          
          {/* Nav Links */}
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
        
        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Log In</a>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-full transition-colors">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative px-6 lg:px-12 pt-16 pb-24">
        {/* Background Holographic Effects */}
        <div className="absolute bottom-0 left-0 w-96 h-96 holographic-bg rounded-full opacity-60"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 holographic-bg rounded-full opacity-60"></div>
        
        {/* Hero Content */}
        <div className="text-center max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-2">
            Unlock Product Insights
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold gradient-text mb-6">
            Make Better Decisions
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            NeuroPredict Labs™ helps brands and designers stop guessing.
          </p>
          <button className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white text-sm px-6 py-3 rounded-full transition-colors">
            New in Private Beta
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Feature Diagram */}
        <div className="relative max-w-4xl mx-auto mt-20">
          {/* Diagram Container */}
          <div className="relative bg-zinc-900/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-zinc-800">
            {/* SVG Lines connecting elements */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 400" fill="none" preserveAspectRatio="xMidYMid meet">
              {/* Top left to center */}
              <path d="M150 80 Q 250 80 300 150 Q 350 200 400 200" stroke="white" strokeWidth="2" className="dashed-line" fill="none"/>
              {/* Top right from center */}
              <path d="M400 200 Q 450 200 500 150 Q 550 80 650 80" stroke="white" strokeWidth="2" className="dashed-line" fill="none"/>
              {/* Bottom left to center */}
              <path d="M150 320 Q 250 320 300 250 Q 350 200 400 200" stroke="white" strokeWidth="2" className="dashed-line" fill="none"/>
              {/* Bottom right from center */}
              <path d="M400 200 Q 450 200 500 250 Q 550 320 650 320" stroke="white" strokeWidth="2" className="dashed-line" fill="none"/>
              
              {/* Curved arrows */}
              {/* Top curve */}
              <path d="M200 60 Q 400 -20 600 60" stroke="white" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
              {/* Bottom curve */}
              <path d="M600 340 Q 400 420 200 340" stroke="white" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
              
              {/* Arrow marker definition */}
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="white"/>
                </marker>
              </defs>
            </svg>

            {/* Grid of feature cards */}
            <div className="relative grid grid-cols-2 gap-8 md:gap-16">
              {/* Top Left Feature */}
              <div className="flex justify-start md:justify-end">
                <div className="bg-zinc-800/80 backdrop-blur rounded-2xl p-4 max-w-[180px] border border-zinc-700">
                  <p className="text-sm text-white">
                    <span className="text-purple-400">Avoid confusion</span><br/>
                    detect friction early
                  </p>
                </div>
              </div>
              
              {/* Top Right Feature */}
              <div className="flex justify-end md:justify-start">
                <div className="bg-zinc-800/80 backdrop-blur rounded-2xl p-4 max-w-[180px] border border-zinc-700">
                  <p className="text-sm text-white">
                    Know exactly<br/>
                    what to change,<br/>
                    and <span className="font-bold">why</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Center Button */}
            <div className="flex justify-center my-8 md:my-12">
              <button className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                Start Testing Now
              </button>
            </div>

            {/* Bottom Features */}
            <div className="relative grid grid-cols-2 gap-8 md:gap-16">
              {/* Bottom Left Feature */}
              <div className="flex justify-start md:justify-end">
                <div className="bg-zinc-800/80 backdrop-blur rounded-2xl p-4 max-w-[180px] border border-zinc-700">
                  <p className="text-sm text-white">
                    See if your message flows<br/>
                    in the right <span className="font-bold">visual order</span>
                  </p>
                </div>
              </div>
              
              {/* Bottom Right Feature */}
              <div className="flex justify-end md:justify-start">
                <div className="bg-zinc-800/80 backdrop-blur rounded-2xl p-4 max-w-[180px] border border-zinc-700">
                  <p className="text-sm text-white">
                    Predict where<br/>
                    eyes go first and<br/>
                    what gets <span className="font-bold">Ignored</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
