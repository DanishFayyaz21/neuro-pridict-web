export default function Hero() {
    return (
    <div className="text-center max-w-4xl mx-auto relative z-10 pt-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-2">
            Unlock Product Insights
          </h1>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6"
            style={{
              background: 'linear-gradient(90deg, #5653FF, #D252FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Make Better Decisions
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            NeuroPredict Labs™ helps brands and designers stop guessing.
          </p>
          <button className="inline-flex items-center gap-2 bg-[#5552FF] hover:bg-purple-700 text-white text-xs px-4 py-2 rounded-full transition-colors">
            New in Private Beta
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>  
    )           
}