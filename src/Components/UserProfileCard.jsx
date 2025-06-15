import React from "react";
import PricingAndFAQ from "./PricingAndFAQ";
function StatsGrid() {
  const stats = [
     {
      title: "150,000+",
      subtitle: "Unique Users",
      desc: "Reached over 15k users monthly through active engagement.",
    },
    {
      title: "3.7M+",
      subtitle: "Impressions",
      desc: "Built visibility across US, GB, IN, and EU audiences.",
    },
    {
      title: "50,000+",
      subtitle: "Product Clicks",
      desc: "Encouraged users to explore products via smart CTAs.",
    },
    {
      title: "300,000+",
      subtitle: "Page Views",
      desc: "Kept users engaged with consistent site traffic.",
    },
  ];

  return (
    <>
    <section className="w-full px-6 md:px-16 py-16 ">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-600 text-center">All Time Reach</h2>
        <p className="text-sm text-gray-400 mt-2 font-semibold">
          Get Traction with Infinity

 
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-md transition"
            >
              <h3 className="text-3xl font-extrabold text-blue-600">
                {stat.title}
              </h3>
              <p className="text-sm font-medium text-gray-700 mt-1">
                {stat.subtitle}
              </p>
              <p className="text-xs text-gray-500 mt-1">{stat.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-400 mt-8">Last updated: June 2025</p>
      </div>
    </section>
    <PricingAndFAQ />
    </>
  );
}

export default StatsGrid;
