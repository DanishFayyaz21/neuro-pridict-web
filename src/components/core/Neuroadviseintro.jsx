const Neuroadviseintro = () => {
  return (
    <section className="relative py-16 md:py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden">
      {/* Background Glow Orbs – slightly smaller & repositioned */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">

        {/* Top Arrow – closer to logo */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-8">
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-4 bg-gradient-to-r from-white/20 to-white/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-500"></div>
              <svg width="80" height="94" viewBox="0 0 100 117" fill="none" xmlns="http://www.w3.org/2000/svg" className="scale-80">
                <path d="M2.43388 72.3768L43.9964 113.939C45.5552 115.498 47.6691 116.373 49.8733 116.373C52.0775 116.373 54.1914 115.498 55.7503 113.939L97.3128 72.3768C98.8714 70.8181 99.7471 68.7041 99.7471 66.4998C99.7471 65.4084 99.5321 64.3276 99.1144 63.3192C98.6967 62.3109 98.0845 61.3947 97.3128 60.6229C96.541 59.8511 95.6248 59.2389 94.6164 58.8212C93.608 58.4036 92.5273 58.1886 91.4358 58.1886C89.2315 58.1886 87.1175 59.0642 85.5589 60.6229L58.1858 87.9959L58.1858 8.31232C58.1858 6.10771 57.31 3.99339 55.7511 2.4345C54.1922 0.875603 52.0779 -0.000175476 49.8733 -0.000175476C47.6687 -0.000175476 45.5544 0.875603 43.9955 2.4345C42.4366 3.99339 41.5608 6.10771 41.5608 8.31232L41.5608 87.9959L14.1878 60.6229C13.4176 59.8483 12.5019 59.2336 11.4933 58.8141C10.4847 58.3947 9.40315 58.1787 8.31082 58.1787C7.21849 58.1787 6.13694 58.3947 5.12836 58.8141C4.11978 59.2336 3.20406 59.8483 2.43388 60.6229C0.875534 62.1817 9.91821e-05 64.2956 9.91821e-05 66.4998C9.91821e-05 68.704 0.875534 70.8179 2.43388 72.3768Z" fill="url(#paint0_linear_1_12465)" />
                <defs>
                  <linearGradient id="paint0_linear_1_12465" x1="49.8736" y1="-0.000175476" x2="49.8736" y2="116.373" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#8A2BE2" />
                    <stop offset="0.5" stopColor="white" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        {/* Logo + Subtitle – very tight */}
        <div className="relative mb-5">
          <div className="absolute -top-12 -bottom-12 -left-12 -right-12 bg-gradient-radial from-purple-600/10 via-transparent to-transparent opacity-30"></div>

          <div className="flex justify-center items-center mb-2">
            <img
              src="/images/logo neuroadvise ps.png"
              alt="NEURO ADVISE"
              className="max-w-xl w-full h-auto drop-shadow-2xl"
              loading="eager"
            />
          </div>

          <div className="mt-1">
            <span className="text-sm md:text-base text-white/90 font-medium tracking-wide">
              AI-Powered Creative Recommendations
            </span>
          </div>
        </div>

        {/* Description – minimal margin, slightly less padding */}
        <div className="relative mb-4">
          <div className="absolute -inset-5 bg-gradient-to-r from-purple-900/10 via-black/50 to-blue-900/10 rounded-3xl blur-xl"></div>
          <div className="relative bg-gradient-to-b from-gray-900/30 to-black/30 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 md:p-8">
            <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-light tracking-tight">
              <span className="text-gray-300 font-normal">Neuroadvise</span> transforms insights from{' '}
              <span className="text-gray-300 font-normal">Attention</span>,{' '}
              <span className="text-gray-300 font-normal">Empath</span>, and{' '}
              <span className="text-gray-300 font-normal">Lumina</span> into clear, actionable recommendations.
              <br className="hidden md:block" />
              <br className="hidden md:block" />
              Instead of raw data, you get concrete suggestions:{' '}
              <span className="text-gray-300">what to change</span>,{' '}
              <span className="text-gray-300">why it matters</span>, and{' '}
              <span className="text-gray-300">how it will likely impact performance</span>.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Neuroadviseintro;