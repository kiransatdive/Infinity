import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import ParallaxButton from "./ParallaxButton";
import AutoScrollingTestimonials from "./AutoScrollingTestimonials";
function ProductCard() {
  return (
    <>
    <section className="flex items-center justify-center min-h-[60vh] px-4 sm:px-6 md:px-12 lg:px-30 py-16 md:py-20 bg-gray  ">
      <div className="  border w-full max-w-6xl bg-gray-200 rounded-md p-6 md:p-10 border-gray-300 shadow-2xl transition-all duration-300">
        <div className="w-full max-w-6xl bg-white rounded-md p-6 md:p-10 transition-all duration-300 items-center justify-center">
          <h2 className="text-2xl font-bold p-3 text-gray-600 text-center">
            Explore Features!
          </h2>
          <h1 className="text-gray-400 mt-4 font-semibold text-lg px-3 text-center italic">
            Hover over this box to see the shadow effect.
          </h1>

          <div className="flex flex-col lg:flex-row items-start gap-10 mt-8">
            {/* First half: code block */}
            <div className="w-full lg:w-1/2 bg-[#1e1e1e] rounded-xl overflow-hidden shadow-xl">
              <div className="flex items-center gap-2 p-3 bg-[#2d2d2d] border-b border-gray-700">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              </div>
              <pre className="text-sm overflow-x-auto p-4 sm:p-6 text-gray-100 font-mono whitespace-pre-line leading-relaxed">
                {`<motion.button
                     onClick={handleClick}
                     style={{ rotateX, rotateY }}
                     transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="px-12 py-6 text-2xl bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:shadow-xl"
                 >
                       💖 Celebrate
                    </motion.button>`}
              </pre>
            </div>
            {/* Second half: live button */}
            <ParallaxButton />
          </div>
        </div>
      </div>
    </section>
    <AutoScrollingTestimonials/>
    </>
  );
}

export default ProductCard;
