import React from "react";

const Docs = () => {
    const sections = [
    { heading: "Documentation", items: ["Installation"] },
    
   
  ];
  return (
    <div className=" flex flex-col md:flex-row">
  {/* Sidebar (only visible on md and above) */}
  {/* <aside className="border-r border-gray-200 dark:border-gray-700 hidden md:block md:w-80 h-screen overflow-y-auto p-6 md:p-10 mt-16 bg-white ">
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
  </aside> */}

 <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800 font-sans">
      <h1 className="text-4xl font-bold mb-4">📘 React + Tailwind CSS Setup Guide</h1>
      <p className="text-gray-600 mb-6">A quickstart guide to set up Tailwind CSS with a React project.</p>

      {/* Section: Prerequisites */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">📋 Prerequisites</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Node.js and npm installed</li>
          <li>Create React App or Vite installed</li>
        </ul>
      </section>

      {/* Section: Installation */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🚀 Installation Steps</h2>
        <p className="mb-2">Run the following commands in your React project root:</p>
        <div className="bg-gray-100 p-4 rounded-lg overflow-auto text-sm font-mono text-gray-700">
          <pre>
{`npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p`}
          </pre>
        </div>
      </section>

      {/* Section: Configure Tailwind */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">⚙️ Configure Tailwind</h2>
        <p className="mb-2">Edit your <code>tailwind.config.js</code> file like this:</p>
        <div className="bg-gray-100 p-4 rounded-lg overflow-auto text-sm font-mono text-gray-700">
          <pre>
{`module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};`}
          </pre>
        </div>
      </section>

      {/* Section: Add Tailwind to CSS */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🎨 Add Tailwind to Your CSS</h2>
        <p className="mb-2">In <code>src/index.css</code> or <code>src/App.css</code>, add:</p>
        <div className="bg-gray-100 p-4 rounded-lg overflow-auto text-sm font-mono text-gray-700">
          <pre>
{`@tailwind base;
@tailwind components;
@tailwind utilities;`}
          </pre>
        </div>
      </section>

      {/* Section: Example */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">📦 Example Tailwind Component</h2>
        <div className="bg-gray-100 p-4 rounded-lg overflow-auto text-sm font-mono text-gray-700 mb-4">
          <pre>
{`<button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
  Click Me
</button>`}
          </pre>
        </div>
        <p>This button uses Tailwind classes to apply styles directly in JSX.</p>
      </section>

      {/* Footer */}
      <p className="text-center text-gray-500 text-sm mt-12">
        Created by Kiran Satdive • React + Tailwind Documentation • 2025
      </p>
    </div>
     
    </div>
  );
};

export default Docs;
