"use client";

import { useState, useEffect } from "react";
import { X, Sparkles } from "lucide-react";

export default function ComingSoonModal({ isOpen, onClose }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Glow effect following mouse
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    if (isOpen) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Backdrop with blur */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Mouse-follow glow effect */}
      <div 
        className="absolute pointer-events-none"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 85, 247, 0.12), transparent 40%)`,
          width: '100%',
          height: '100%',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 1
        }}
      />

      {/* Modal - max height 70% of screen */}
      <div className="relative z-10 w-full max-w-md mx-4 max-h-[70vh]">
        {/* Subtle border glow - REDUCED */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/40 to-fuchsia-600/40 rounded-xl blur-md opacity-40" />
        
        {/* Main modal content */}
        <div className="relative bg-gray-900 rounded-xl border border-purple-500/20 overflow-y-auto max-h-[70vh]">
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-purple-400 transition-colors z-20"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Content */}
          <div className="p-8">
            {/* Coming Soon badge */}
            <div className="flex justify-center mb-5">
              <span className="px-3 py-1 text-xs font-semibold text-purple-300 bg-purple-500/10 border border-purple-500/30 rounded-full flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                COMING SOON
              </span>
            </div>

            {/* Main heading */}
            <h2 className="text-3xl font-bold text-center mb-3">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-fuchsia-400">
                Something Amazing is on the Way
              </span>
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-center text-base leading-relaxed">
              We're putting the finishing touches on something extraordinary. 
              Stay tuned for the launch of Neuro Predict.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}