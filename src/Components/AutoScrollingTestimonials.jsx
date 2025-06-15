import React, { useEffect, useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import UserProfileCard from "./UserProfileCard";
const testimonials = [
  {
    name: "Travis Mathis",
    handle: "Founder of SvelteLaunch",
    message:
      "Microlaunch had our best couple days ever and you've provided the most traffic to the site this month!",
  },
  {
    name: "Paul Xue",
    handle: "Founder of Spacestation Labs",
    message:
      "I launched my 500K Agency offer in April. The community support was more than anything I could have expected!",
  },
  {
    name: "Tyler Shukert",
    handle: "DevRel @ Supabase",
    message: "Sweet! MicroLaunch is awesome!",
  },
  {
    name: "Nathan Chua",
    handle: "Founder of Snipowl",
    message:
      "Hit the ground running on Microlaunch.. This platform is a beast, a top-tier alternative to ProductHunt!",
  },
  {
    name: "Tim White",
    handle: "VP Marketing, WildSEO",
    message: "Definitely helped us make more sales!",
  },
  {
    name: "Serg Karakhanyan",
    handle: "Founder of Larafast",
    message:
      "Microlaunch helped me to get a lot of traffic and feedback about my products. Thank you!",
  },
];

function AutoScrollingTestimonials() {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const [hoverRow1, setHoverRow1] = useState(false);
  const [hoverRow2, setHoverRow2] = useState(false);

  useEffect(() => {
    const scrollSpeed = 1;
    const interval = 20;

    const scroll = (ref, direction = "left") => {
      if (!ref.current) return;

      if (direction === "left") {
        ref.current.scrollLeft += scrollSpeed;
        if (ref.current.scrollLeft >= ref.current.scrollWidth / 2) {
          ref.current.scrollLeft = 0;
        }
      } else {
        ref.current.scrollLeft -= scrollSpeed;
        if (ref.current.scrollLeft <= 0) {
          ref.current.scrollLeft = ref.current.scrollWidth / 2;
        }
      }
    };

    const id1 = setInterval(() => {
      if (!hoverRow1) scroll(row1Ref, "left");
    }, interval);

    const id2 = setInterval(() => {
      if (!hoverRow2) scroll(row2Ref, "right");
    }, interval);

    return () => {
      clearInterval(id1);
      clearInterval(id2);
    };
  }, [hoverRow1, hoverRow2]);

  const all = [...testimonials, ...testimonials]; // duplicate for seamless loop

  return (
    <>
    <section className="bg-white dark:bg-neutral-900 py-16 px-4 md:px-12">
      <h2 className="text-3xl font-bold text-center text-gray-600 mt-4">
        Loved by Thousands
      </h2>
      <p className="text-sm text-gray-400  font-semibold text-center mt-2 mb-8 ">Founders & Startups love us ❤️</p>

      {/* Row 1 */}
      <div
        ref={row1Ref}
        className="flex overflow-hidden whitespace-nowrap space-x-4"
        onMouseEnter={() => setHoverRow1(true)}
        onMouseLeave={() => setHoverRow1(false)}
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
        }}
      >
        {all.map((t, i) => (
          <motion.div
            key={`r1-${i}`}
            className="min-w-[300px] max-w-[320px] bg-white border border-gray-200 shadow-md rounded-lg p-6 flex-shrink-0 overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-gray-700 text-sm mb-4 text-center break-words overflow-hidden">
              "{t.message}"
            </p>
            <div className="text-center overflow-hidden">
              <div className="font-semibold text-gray-800 break-words">
                {t.name}
              </div>
              <div className="text-sm text-gray-500 break-words">
                {t.handle}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Spacer */}
      <div className="h-10" />

      {/* Row 2 (opposite scroll) */}
      <div
        ref={row2Ref}
        className="flex overflow-hidden whitespace-nowrap space-x-4"
        onMouseEnter={() => setHoverRow2(true)}
        onMouseLeave={() => setHoverRow2(false)}
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
        }}
      >
        {all.map((t, i) => (
          <motion.div
            key={`r2-${i}`}
            className="min-w-[300px] max-w-[320px] bg-white border border-gray-200 shadow-md rounded-lg p-6 flex-shrink-0 overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-gray-700 text-sm mb-4 text-center break-words overflow-hidden">
              "{t.message}"
            </p>
            <div className="text-center overflow-hidden">
              <div className="font-semibold text-gray-800 break-words">
                {t.name}
              </div>
              <div className="text-sm text-gray-500 break-words">
                {t.handle}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
    <UserProfileCard />
    </>
  );
}

export default AutoScrollingTestimonials;
