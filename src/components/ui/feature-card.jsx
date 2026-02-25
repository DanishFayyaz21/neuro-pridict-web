"use client";

import { motion } from "framer-motion";

const FeatureCard = ({ children, align = "start" }) => {
  return (
    <div className={`flex justify-${align}`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-black text-white rounded-2xl
                   px-6 py-6
                   w-full sm:w-[75%] lg:w-[55%] xl:w-[48%] 2xl:w-[45%]
                   min-h-[120px] lg:min-h-[140px]
                   border border-[#FCFAFA]
                   flex items-center justify-center
                   text-center"
      >
        <p
          className="font-inter font-normal
                     text-[18px]
                     lg:text-[16px]
                     2xl:text-[20px]
                     leading-[120%]
                     break-words"
        >
          {children}
        </p>
      </motion.div>
    </div>
  );
};

export default FeatureCard;