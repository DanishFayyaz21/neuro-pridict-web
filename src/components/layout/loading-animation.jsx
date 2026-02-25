// "use client";

// import { useEffect, useState } from "react";
// import { 
//   CircuitBoard, 
//   Cpu, 
//   Network, 
//   Eye, 
//   BrainCircuit,
//   Sparkles,
//   Orbit,
//   Globe
// } from "lucide-react";

// export default function LoadingAnimation() {
//   const [progress, setProgress] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [glitchEffect, setGlitchEffect] = useState(false);
  
//   const icons = [CircuitBoard, Cpu, Network, Eye, BrainCircuit, Orbit, Globe];
//   const messages = [
//     "Awakening neural pathways...",
//     "Calibrating quantum sensors...",
//     "Establishing secure connection...",
//     "Loading cognitive modules...",
//     "Initializing predictive algorithms...",
//     "Synchronizing data streams...",
//     "Almost there..."
//   ];

//   // Sophisticated progress animation
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProgress(prev => {
//         if (prev >= 100) return 100;
//         // Slow down as it approaches 100
//         const increment = Math.max(0.5, (100 - prev) / 25);
//         return Math.min(100, prev + increment);
//       });
//     }, 100);

//     return () => clearInterval(interval);
//   }, []);

//   // Random glitch effect for cinematic feel
//   useEffect(() => {
//     const glitchInterval = setInterval(() => {
//       setGlitchEffect(true);
//       setTimeout(() => setGlitchEffect(false), 150);
//     }, 3000);

//     return () => clearInterval(glitchInterval);
//   }, []);

//   // Loading state management
//   useEffect(() => {
//     if (document.readyState === "complete") {
//       setTimeout(() => setLoading(false), 500); // Smooth exit
//     } else {
//       const handleLoad = () => setTimeout(() => setLoading(false), 500);
//       window.addEventListener("load", handleLoad);
      
//       const timeout = setTimeout(() => setLoading(false), 5000);
      
//       return () => {
//         window.removeEventListener("load", handleLoad);
//         clearTimeout(timeout);
//       };
//     }
//   }, []);

//   if (!loading) return null;

//   const CurrentIcon = icons[Math.floor(progress / 15) % icons.length];

//   return (
//     <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black">
//       {/* Cinematic gradient overlays */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_0%,transparent_50%)]" />
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,255,255,0.03)_0%,transparent_50%)]" />
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,0,255,0.03)_0%,transparent_50%)]" />
      
//       {/* Animated grid background */}
//       <div className="absolute inset-0 opacity-20">
//         <div className="absolute inset-0" style={{
//           backgroundImage: `
//             linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
//           `,
//           backgroundSize: '50px 50px',
//           transform: 'perspective(500px) rotateX(60deg)',
//           transformOrigin: 'center bottom',
//         }} />
//       </div>

//       {/* Main content */}
//       <div className={`relative z-10 flex flex-col items-center max-w-2xl px-8 transition-all duration-300 ${glitchEffect ? 'translate-x-[2px] translate-y-[1px]' : ''}`}>
        
//         {/* Logo with cinematic animation */}
//         <div className="mb-12 relative">
//                             <img src="/images/logo.png" alt="NeuroPredict Logo" width="261" height="121" />
//           <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-transparent to-purple-600/20 blur-3xl -z-10" />
//         </div>

//         {/* Animated icon with cinematic effects */}
//         <div className="relative mb-12">
//           {/* Outer glow rings */}
//           <div className="absolute inset-0 rounded-full animate-ping">
//             <div className="w-32 h-32 rounded-full border-2 border-cyan-500/30" />
//           </div>
//           <div className="absolute -inset-8 rounded-full border border-white/10 animate-spin-slow" />
          
//           {/* Icon container */}
//           <div className="relative w-32 h-32 flex items-center justify-center">
//             <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-full blur-2xl animate-pulse" />
//             <div className="relative bg-black/50 rounded-full p-6 backdrop-blur-sm border border-white/10">
//               <CurrentIcon className="w-20 h-20 text-white animate-pulse-slow" />
//             </div>
//           </div>

//           {/* Orbiting particles */}
//           <div className="absolute -inset-16">
//             <div className="absolute top-0 left-1/2 w-1 h-1 bg-cyan-500 rounded-full animate-orbit" />
//             <div className="absolute bottom-0 left-1/2 w-1.5 h-1.5 bg-purple-500 rounded-full animate-orbit-reverse" />
//             <div className="absolute top-1/2 left-0 w-1 h-1 bg-blue-500 rounded-full animate-orbit-diagonal" />
//           </div>
//         </div>

//         {/* Loading message with cinematic typing effect */}
//         <div className="mb-8 h-12">
//           <p className="text-lg md:text-xl text-gray-400 font-light tracking-wider animate-fade-in-up">
//             {messages[Math.floor(progress / 15) % messages.length]}
//             <span className="animate-pulse">...</span>
//           </p>
//         </div>

//         {/* Cinematic progress bar */}
//         <div className="w-80 md:w-96 relative">
//           {/* Background track */}
//           <div className="h-[2px] bg-gray-800 rounded-full overflow-hidden">
//             <div 
//               className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 relative"
//               style={{ width: `${progress}%` }}
//             >
//               {/* Scanning line effect */}
//               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-scan" />
//             </div>
//           </div>

//           {/* Progress percentage */}
//           <div className="absolute -bottom-6 right-0 text-xs text-gray-600 font-mono">
//             {Math.floor(progress)}%
//           </div>
//         </div>

     
//       </div>

//       {/* Bottom fade */}
//       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />

//       {/* Keyframe animations */}
//       <style jsx>{`
//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//         .animate-spin-slow {
//           animation: spin-slow 8s linear infinite;
//         }

//         @keyframes pulse-slow {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0.7; }
//         }
//         .animate-pulse-slow {
//           animation: pulse-slow 3s ease-in-out infinite;
//         }

//         @keyframes orbit {
//           0% { transform: rotate(0deg) translateX(80px) rotate(0deg); }
//           100% { transform: rotate(360deg) translateX(80px) rotate(-360deg); }
//         }
//         .animate-orbit {
//           animation: orbit 4s linear infinite;
//         }

//         @keyframes orbit-reverse {
//           0% { transform: rotate(0deg) translateX(90px) rotate(0deg); }
//           100% { transform: rotate(-360deg) translateX(90px) rotate(360deg); }
//         }
//         .animate-orbit-reverse {
//           animation: orbit-reverse 5s linear infinite;
//         }

//         @keyframes orbit-diagonal {
//           0% { transform: rotate(45deg) translateX(70px) rotate(-45deg); }
//           100% { transform: rotate(405deg) translateX(70px) rotate(-405deg); }
//         }
//         .animate-orbit-diagonal {
//           animation: orbit-diagonal 6s linear infinite;
//         }

//         @keyframes fade-in-up {
//           0% {
//             opacity: 0;
//             transform: translateY(10px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fade-in-up {
//           animation: fade-in-up 0.5s ease-out;
//         }

//         @keyframes scan {
//           0% { transform: translateX(-100%); }
//           100% { transform: translateX(100%); }
//         }
//         .animate-scan {
//           animation: scan 2s ease-in-out infinite;
//         }
//       `}</style>
//     </div>
//   );
// }