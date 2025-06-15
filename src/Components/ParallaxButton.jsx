import React, { useRef, useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useMotionValue, useTransform } from "framer-motion";
import Confetti from "react-confetti";

function FastParallaxButton() {
  const containerRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [20, -20]);
  const rotateY = useTransform(x, [-100, 100], [-20, 20]);

  const [showConfetti, setShowConfetti] = useState(false);
  const [boxSize, setBoxSize] = useState({ width: 300, height: 300 });
  const [, setBoxPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setBoxSize({ width: rect.width, height: rect.height });
        setBoxPosition({ x: rect.left, y: rect.top });
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseMove = (event) => {
    const rect = containerRef.current.getBoundingClientRect();
    const offsetX = event.clientX - (rect.left + rect.width / 2);
    const offsetY = event.clientY - (rect.top + rect.height / 2);
    x.set(offsetX);
    y.set(offsetY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleClick = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 2000);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full h-80 lg:w-1/2 bg-gray-200 rounded-xl flex justify-center items-center py-12 relative"
    >
      {showConfetti && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            pointerEvents: "none",
            zIndex: 10,
          }}
        >
          <Confetti
            width={boxSize.width}
            height={boxSize.height}
            numberOfPieces={200}
            recycle={false}
            gravity={0.3}
            colors={["#FF007F", "#FFD700", "#00FFFF", "#FF4500", "#8A2BE2"]}
          />
        </div>
      )}

      <motion.button
        onClick={handleClick}
        style={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="px-12 py-6 text-2xl bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:shadow-xl"
      >
        💖 Celebrate
      </motion.button>
    </div>
  );
}

export default FastParallaxButton;
