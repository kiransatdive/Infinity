// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function Components() {
  const sections = [
    { heading: "Follow for updates", items: ["Twitter @Infinity"] },
    {
      heading: "Installation",
      items: ["Install Next.js", "Install Tailwind CSS", "Add utilities"],
    },
    { heading: "CLI", items: ["All Components"] },
    {
      heading: "Components",
      items: ["Comming Soon..."],
    },
  ];

  // const card = [
  //   {
  //     title: "Employee Tracker",
  //     description:
  //       "A command line application that allows you to manage a company's employees, departments, and roles.",
  //     link: "https://aceternity.com/cdn-cgi/image/width=2048/https://assets.aceternity.com/background-lines.webp",
  //     href: "",
  //   },
  //   {
  //     title: "SAMSTRACK",
  //     description:
  //       "A web application for managing and tracking your personal finances, built with Angular and Backend(Java).",
  //     link: "https://aceternity.com/cdn-cgi/image/width=2048/https://assets.aceternity.com/background-lines.webp",
  //     href: "",
  //   },
  //   {
  //     title: "Motion Components",
  //     description:
  //       "A collection of reusable motion components for React, built with Framer Motion.",
  //     link: "https://aceternity.com/cdn-cgi/image/width=2048/https://assets.aceternity.com/background-lines.webp",
  //     href: "",
  //   },
  //   {
  //     title: "Background Lines",
  //     description:
  //       "A set of svg paths that animate in a wave pattern. Good for hero sections background, as seen on height.app",
  //     link: "https://aceternity.com/cdn-cgi/image/width=2048/https://assets.aceternity.com/background-lines.webp",
  //     href: "#",
  //   },
  // ];

  return (
   <div className=" flex flex-col md:flex-row">
  {/* Sidebar (only visible on md and above) */}
  <aside className="border-r border-gray-200 dark:border-gray-700 hidden md:block md:w-80 h-screen overflow-y-auto p-6 md:p-10 mt-16 bg-white ">
    {sections.map((section, si) => (
      <div key={si} className="mb-8 last:mb-0">
        <h3 className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-4">
          {section.heading}
        </h3>
        <ul className="space-y-3">
          {section.items.map((item, i) => (
            <li key={i} className="group">
              <a
                href="#"
                className="relative flex items-center pl-4 transition-all duration-200 text-sm text-gray-400 group-hover:text-indigo-600 group-hover:pl-6"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </aside>

  {/* Cards Grid */}
  <div className="p-25 ">Comming Soon...</div>
  {/* <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 p-4 sm:p-8 md:p-12 lg:p-16 mt-10 ">
    {card.map((project, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{
          duration: 0.4,
          delay: 0.1 * index,
          ease: "easeInOut",
        }}
        className="flex flex-col items-start group"
      >
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group w-full block"
        >
          <div className="relative overflow-hidden rounded-lg transition duration-200 group-hover:shadow-xl dark:border dark:border-white/[0.1] bg-neutral-900 aspect-video">
            <img
              src={project.link}
              alt={project.title}
              loading="lazy"
              decoding="async"
              className="transition duration-300 blur-0 rounded-md group-hover:scale-105 w-full h-full object-cover"
            />
          </div>
        </a>
        <div className="mt-4">
          <h2 className="text-lg sm:text-xl font-bold text-neutral-800 dark:text-neutral-300">
            {project.title}
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
            {project.description}
          </p>
        </div>
      </motion.div>
    ))}
  </div> */}
</div>

  );
}

export default Components;
