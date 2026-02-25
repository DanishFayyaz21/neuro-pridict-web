"use client";

import { motion } from "framer-motion";

const FeatureCard = ({ children, align = "start" }) => {
  // Map alignment to Tailwind classes
  const alignmentClasses = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
  };

  return (
    <div className={`flex ${alignmentClasses[align] || alignmentClasses.start}`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-black text-white rounded-2xl
                   /* Responsive padding - REDUCED */
                   px-2 py-1.5
                   xs:px-3 xs:py-2
                   sm:px-4 sm:py-2.5
                   md:px-5 md:py-3
                   lg:px-6 lg:py-3.5
                   xl:px-7 xl:py-4
                   2xl:px-8 2xl:py-4.5
                   
                   /* Fixed width for cards - no percentage-based widths */
                   w-auto
                   
                   /* Minimum widths for each card based on content */
                   min-w-[140px]
                   xs:min-w-[160px]
                   sm:min-w-[180px]
                   md:min-w-[200px]
                   lg:min-w-[220px]
                   xl:min-w-[240px]
                   2xl:min-w-[260px]
                   
                   /* Maximum widths to prevent cards from getting too large */
                   max-w-[160px]
                   xs:max-w-[180px]
                   sm:max-w-[200px]
                   md:max-w-[220px]
                   lg:max-w-[240px]
                   xl:max-w-[260px]
                   2xl:max-w-[280px]
                   
                   border border-[#FCFAFA]
                   flex items-center justify-center
                   text-center
                   transition-all duration-300 ease-in-out
                   shadow-lg shadow-black/20"
      >
        <p
          className="font-inter font-normal
                     /* Responsive font sizes */
                     text-[12px]
                     xs:text-[13px]
                     sm:text-[14px]
                     md:text-[15px]
                     lg:text-[16px]
                     xl:text-[17px]
                     2xl:text-[18px]
                     
                     /* Responsive line heights */
                     leading-[130%]
                     xs:leading-[128%]
                     sm:leading-[125%]
                     md:leading-[122%]
                     lg:leading-[120%]
                     
                     /* Text wrapping */
                     break-words
                     
                     /* Font weight variations for emphasis */
                     [&_.font-bold]:font-bold
                     [&_.font-bold]:text-white
                     
                     /* Optional: Responsive letter spacing */
                     tracking-normal"
        >
          {children}
        </p>
      </motion.div>
    </div>
  );
};

export default FeatureCard;