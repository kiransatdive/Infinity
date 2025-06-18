// src/components/AnimatedBubbles.jsx
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { getRandomColor } from "../utils/colorUtils";

const AnimatedBubbles = ({ count = 30 }) => {
  const bubbles = Array.from({ length: count });

  return (
    <div className="absolute inset-0 pointer-events-none z-0 ">
      {bubbles.map((_, i) => {
        const angle = Math.random() * 2 * Math.PI;
        const distance = 200 + Math.random() * 150;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        const size = 10 + Math.random() * 20;
        const duration = 3 + Math.random() * 3;
        const delay = Math.random() * 2;

        return (
          <motion.div
            key={i}
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{ x, y, opacity: [0, 1, 0] }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeOut",
            }}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: size,
              height: size,
              borderRadius: "50%",
              backgroundColor: getRandomColor(),
              opacity: 0.7,
            }}
          />
        );
      })}
    </div>
  );
};

export default AnimatedBubbles;
