import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function Components() {
  const [searchTerm, setSearchTerm] = useState("");

  const sections = [
    {
      heading: "Installation",
      items: [
        { name: "Install Tailwind CSS", url: "https://tailwindcss.com/docs/installation" },
        { name: "Framer Motion", url: "https://www.framer.com/motion/" },
      ],
    },
    {
      heading: "Components",
      items: [
        { name: "Flipping Text", url: "#" },
        { name: "Background Bubbles", url: "#" },
        { name: "Auto Typing Playground", url: "#" },
        { name: "Cards Swapping", url: "#" },
      ],
    },
  ];

  const card = [
    {
      title: "Flip Text",
      description: "Animate a text element to flip on hover.",
      link: "/public/text-flip.png",
      href: "https://text-flip-kiransatdives-projects.vercel.app/",
    },
    {
      title: "Background Bubbles",
      description: "Background elements that animate in a spread bubbles.",
      link: "/public/BackgrounBubbles.png",
      href: "",
    },
    {
      title: "Auto typing playground",
      description: "A simple auto typing effect.",
      link: "/public/Autotyping.png",
      href: "",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="border-r border-gray-200 dark:border-gray-700 hidden md:block md:w-80 h-screen overflow-y-auto p-6 md:p-10 mt-16 bg-white dark:bg-neutral-900">
        {/* Search Box */}
        <div className="mb-8">
          <label className="relative block text-gray-500 dark:text-gray-300">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="h-5 w-5 fill-current text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387-1.414 1.414-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
              className="w-full bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-700 rounded-md py-2 pl-10 pr-4 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
            />
          </label>
        </div>

        {/* Sidebar Sections with Filter */}
        {sections.map((section, si) => {
          const filteredItems = section.items.filter((item) =>
            item.name.toLowerCase().includes(searchTerm)
          );

          if (filteredItems.length === 0) return null;

          return (
            <div key={si} className="mb-8 last:mb-0">
              <h3 className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-4">
                {section.heading}
              </h3>
              <ul className="space-y-3">
                {filteredItems.map((item, i) => (
                  <li key={i} className="group">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative flex items-center pl-4 transition-all duration-200 text-sm text-gray-400 group-hover:text-indigo-600 group-hover:pl-6"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </aside>

      {/* Cards Section */}
      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 sm:px-8 md:px-12 lg:px-16 py-12 md:py-20">
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

          <div className="col-span-full text-center mt-16 text-gray-500 dark:text-gray-400 text-lg italic">
            More Components Coming Soon...
          </div>
        </div>
      </section>
    </div>
  );
}

export default Components;
