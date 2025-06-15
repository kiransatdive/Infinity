import React from 'react';

function Components() {
  const sections = [
    { heading: "Follow for updates", items: ["Twitter @Infinity"] },
    { heading: "Installation", items: ["Install Next.js", "Install Tailwind CSS", "Add utilities"] },
    { heading: "CLI", items: ["All Components"] },
    {
      heading: "Components",
      items: [
        "3D Card Effect",
        "3D Marquee",
        "3D Pin",
        // … etc
      ],
    },
  ];

  return (
    <aside className="sidebar w-80  h-screen overflow-y-auto p-4 mt-16 px-18">
      {sections.map((section, si) => (
        <div key={si} className="mb-8 last:mb-0">
          <h3 className=" text-sm font-bold text-gray-700 dark:text-gray-300  mb-4">
            {section.heading}
          </h3>
          <ul className="space-y-3">
            {section.items.map((item, i) => (
              <li key={i} className="group">
                <a
                  href="#"
                  className="
                    relative flex items-center
                    pl-4 transition-all duration-200
                    text-sm text-gray-400
                    group-hover:text-indigo-600
                    group-hover:pl-6
                  "
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}

export default Components;
