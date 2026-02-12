export default function Navbar() {

    return (
        <nav className="flex items-center justify-between px-6 lg:px-12 py-4 font-sans">
            <div className="flex items-center gap-8">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img src="/images/logo.png" alt="NeuroPredict Logo" width="200" height="200" />
                    
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
                <button className="bg-[#5552FF] hover:bg-purple-700 text-white px-5 py-2 rounded-full transition-colors">
                    Get Started
                </button>
            </div>
        </nav>
    )
}