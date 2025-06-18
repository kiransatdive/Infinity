import React, { useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
// eslint-disable-next-line no-unused-vars
import { getRandomColor } from "../utils/colorUtils";
import AnimatedBubbles from "./AnimatedBubbles";
import AutoTypingCard from "./AutoTypingCard";
function ProductCard() {
  const cardRef = useRef(null);
  // eslint-disable-next-line no-unused-vars
  const [style, setStyle] = useState({});

  // eslint-disable-next-line no-unused-vars
  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 3;
    const rotateY = ((x - centerX) / centerX) * -3;

    setStyle({
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`,
      transition: "transform 0.2s ease-out",
    });
  };

  // eslint-disable-next-line no-unused-vars
  const resetStyle = () => {
    setStyle({
      transform: "rotateX(0deg) rotateY(0deg) scale(1)",
      transition: "transform 0.3s ease-out",
    });
  };

  return (
    <>
    <section className=" bg-amber-50 py-16 px-6 md:px-20  dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-30 ">
        {/* ✅ LEFT SIDE - TEXT */}
        <div className="w-full md:w-1/2">
          <p className="text-indigo-600 font-semibold mb-2">
            Built for modern teams
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 dark:text-white leading-tight">
            Launch quickly with stunning components
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            Ready-to-use, responsive elements that save time and look great on
            any device — no design team needed.
          </p>
          <button className="py-4 mt-4 px-6 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300">
            Try it for free
          </button>
        </div>

        {/* ✅ RIGHT SIDE - ANIMATED SECTION WITH BUBBLES AND TITLE */}
        {/* ✅ RIGHT SIDE - ANIMATED SECTION WITH BUBBLES AND TITLE */}
        <div className="group mt-12  w-full md:w-1/2 relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-xl shadow-xl bg-white dark:bg-black transition-transform duration-300 ease-in-out hover:scale-105">
          <AnimatedBubbles count={25} />
          <div className="relative  z-10 flex flex-col items-center justify-center h-full px-4 text-center transition-transform duration-300">
            <h2 className="transform group-hover:scale-110 transition-transform duration-500 bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-100 dark:to-white text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight">
              Crafted for Creators.
            </h2>
          </div>
        </div>
      </div>
    </section>
    <AutoTypingCard />
    </>
  );
}



export default ProductCard;
