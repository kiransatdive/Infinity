import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import TechIcons from "./TechIcons";
import { Link } from "react-router-dom";

const Hero = () => {
  const words = ["beautiful", "modern", "accessible", "powerful"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <>
      <section className="flex items-center justify-center min-h-[60vh] px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-20 bg-white dark:bg-neutral-900">
        <div className="w-full max-w-5xl text-center space-y-8">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight"
          >
            Build{" "}
            <span className="inline-flex relative h-[1.2em] overflow-hidden text-indigo-600">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[index]}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block"
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </span>{" "}
            UI Custom Components Tailored for Your Users
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Fast, accessible, and flexible React components for modern web apps.
            <br className="hidden sm:block" />
            Built to help you ship faster with consistent and reusable design.
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/components" className="w-full sm:w-auto bg-indigo-600 text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-medium hover:bg-indigo-700 transition hover:shadow-2xl">
             
              Explore Components
            </Link>
          </motion.div>
        </div>
      </section>

      <TechIcons />
    </>
  );
};

export default Hero;
