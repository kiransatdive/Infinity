/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Testimonials  from "./Testimonials";
// Auto typing code
const codeLines = [
  '<div className="relative w-full md:w-1/2 h-[400px] flex items-center justify-center">',
  "  {cards.map((card, index) => (",
  "    <motion.div",
  "      key={card.id}",
  "      className=\"absolute w-96 h-64 p-6 rounded-2xl bg-white dark:bg-neutral-800 shadow-xl border border-neutral-200 dark:border-white/10 flex flex-col justify-between\"",
  "      style={{ zIndex: cards.length - index }}",
  "      animate={{",
  "        top: index * 15,",
  "        scale: 1 - index * 0.06,",
  "        opacity: 1,",
  "      }}",
  "      transition={{ type: 'spring', stiffness: 120 }}",
  "      whileHover={{ scale: 1.05, rotate: -1 + index * 2 }}",
  "    >",
  '      <h3 className="font-semibold text-xl mb-3 text-gray-900 dark:text-white">',
  "        {card.name}",
  "      </h3>",
  '      <p className="text-base text-gray-600 dark:text-gray-300">',
  "        {card.content}",
  "      </p>",
  '      <p className="text-sm text-neutral-500 dark:text-neutral-400">',
  "        {card.designation}",
  "      </p>",
  "    </motion.div>",
  "  ))}",
  "</div>"
];


const cardData = [
  {
    id: 1,
    content: "This is card one. It’s auto-swiping every few seconds.",
    name: "Alice",
    designation: "Designer",
  },
  {
    id: 2,
    content: "Second card in the stack with animations.",
    name: "Bob",
    designation: "Developer",
  },
  {
    id: 3,
    content: "Third card. Try hovering me too!",
    name: "Carol",
    designation: "Engineer",
  },
];

export default function AutoTypingWithVisual() {
  const [displayedCode, setDisplayedCode] = useState([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [cards, setCards] = useState(cardData);

  useEffect(() => {
    if (lineIndex < codeLines.length) {
      if (charIndex < codeLines[lineIndex].length) {
        const timeout = setTimeout(() => {
          setDisplayedCode((prev) => [
            ...prev.slice(0, lineIndex),
            (prev[lineIndex] || "") + codeLines[lineIndex][charIndex],
          ]);
          setCharIndex(charIndex + 1);
        }, 40);
        return () => clearTimeout(timeout);
      } else {
        setCharIndex(0);
        setLineIndex(lineIndex + 1);
        setDisplayedCode((prev) => [...prev, ""]);
      }
    }
  }, [charIndex, lineIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop());
        return newArray;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <section className="bg-amber-50 py-18 px-6 md:px-20 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side - Auto Typing Code Block */}
        <div className="w-full md:w-1/2">
          <div className="bg-black text-green-400 p-6 rounded-xl shadow-2xl font-mono text-sm md:text-base">
            {displayedCode.map((line, idx) => (
              <div key={idx} className="whitespace-pre-wrap">
                {line}
                {idx === lineIndex && (
                  <motion.span
                    animate={{ opacity: [0, 1] }}
                    transition={{ repeat: Infinity, duration: 0.6 }}
                    className="inline-block"
                  >
                    |
                  </motion.span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Auto-Flipping Animated Card Stack */}
        <div className="relative w-full md:w-1/2 h-[400px] flex items-center justify-center ">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              className="absolute w-100 h-75 p-6 rounded-2xl bg-white dark:bg-neutral-800 shadow-xl border border-neutral-200 dark:border-white/10 flex flex-col justify-between"
              style={{ zIndex: cards.length - index }}
              animate={{
                top: index * 15,
                scale: 1 - index * 0.06,
                opacity: 1,
              }}
              transition={{ type: "spring", stiffness: 120 }}
              whileHover={{ scale: 1.05, rotate: -1 + index * 2 }}
            >
              <h3 className="font-semibold text-xl mb-3 text-gray-900 dark:text-white">
                {card.name}
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-300">
                {card.content}
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                {card.designation}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
     <Testimonials />
    </>
  );
}
