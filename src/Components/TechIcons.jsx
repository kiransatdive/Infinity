// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
const companies = [
  { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
];

const logos = [...companies, ...companies];

const TrustedByScroller = () => {
  return (
    <>
    <section className="w-full bg-white dark:bg-black py-2 px-4 sm:px-8 md:px-70">
      <div className="overflow-hidden">
        <motion.div
          className="flex min-w-fit gap-8 sm:gap-10 md:gap-14 px-[10vw] sm:px-[15vw] md:px-[20vw]"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
        >
          {logos.map((tech, idx) => (
            <img
              key={idx}
              src={tech.logo}
              alt={tech.name}
              title={tech.name}
              className="h-8 sm:h-10 md:h-12 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300  "
            />
          ))}
        </motion.div>
      </div>
     
    </section>
     <ProductCard />
     </>
  );
};

export default TrustedByScroller;
