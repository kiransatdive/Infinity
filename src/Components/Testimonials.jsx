/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import PricingAndFAQ from "./PricingAndFAQ";

// Testimonials data
const testimonials = [
  {
    name: "Kiran Satdive",
    role: "Founder",
    company: "Infinity.com",
    avatar: "https://ui-avatars.com/api/?name=Kiran+Satdive",
    text: "Infinity offers free components, while Infinity Pro gives you the best premium components and templates pack to help your website stand out. Professional, clean, and modern components designed to help you build faster and get more done!",
  },
];

export default function Testimonials() {
  return (
    <>
    <section className="py-16 dark:bg-neutral-950 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          🥳Our Infinity🥳
        </h2>

        <div
          className={`${
            testimonials.length === 1
              ? "flex justify-center"
              : "grid gap-10 md:grid-cols-2"
          }`}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="relative bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-2xl border border-gray-200 dark:border-white/10 w-full max-w-2xl min-h-[300px]" // updated width and height
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <FaQuoteLeft className="text-4xl text-amber-400 mb-6" />{" "}
              {/* slightly larger icon */}
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                {t.text}
              </p>{" "}
              {/* increased text size */}
              <div className="flex items-center gap-4 mt-6">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-indigo-500"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {t.name}
                  </h4>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    {t.role} at {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <PricingAndFAQ />
    </>
  );
}
