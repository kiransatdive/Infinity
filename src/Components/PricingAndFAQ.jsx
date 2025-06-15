import React, { useState } from "react";
import Footer from "./Footer";
function PricingAndFAQ() {
  const faqs = [
    {
      question: "What is Infinity?",
      answer:
        "Infinity is a platform to promote your product with visibility, SEO boost, and user feedback tools.",
    },
    {
      question: "What's the difference between Pro and Regular launch?",
      answer:
        "Pro launches come with featured placement, extended visibility, and custom support, while Regular is basic exposure.",
    },
    {
      question: "How long does a launch campaign last?",
      answer: "Typically, campaigns last 7–14 days depending on the plan.",
    },
    {
      question: "What kind of reach can I expect?",
      answer:
        "With a Pro Bundle, you can reach 10K–50K+ impressions based on audience and timing.",
    },
    {
      question: "What kind of support do I get?",
      answer:
        "Dedicated support via email and chat during your campaign window.",
    },
    {
      question: "What SEO and long-term benefits do I get?",
      answer:
        "Each launch gets a permanent SEO-friendly page that continues to rank on search engines and drive traffic.",
    },
    {
      question: "How is Infinity different from Product Hunt?",
      answer:
        "Infinity focuses on targeted, extended exposure and ongoing traffic vs. a single-day spike.",
    },
    {
      question: "Do I need to promote my launch?",
      answer:
        "Infinity helps you gain organic traction, but external promotion is always a plus.",
    },
    {
      question: "Can I collect feedback and testimonials?",
      answer:
        "Yes, feedback widgets and testimonial requests are built into the platform.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <section className="bg-white dark:bg-neutral-900 px-6 md:px-12 py-16">
      {/* Pricing Section */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
          Get Started with the Pro Bundle
        </h2>

        <div className="bg-gray-50 dark:bg-neutral-800 rounded-xl p-8 border border-gray-200 shadow-md">
          <div className="text-sm font-medium text-blue-600 uppercase mb-1">
            Save $66
          </div>
          <div className="text-4xl font-extrabold text-gray-800 dark:text-white">
            $179
            <span className="text-sm font-medium text-gray-500 line-through ml-2">
              $245
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Best for startups, incubators, growth agencies, serial
            entrepreneurs.
          </p>

          <ul className="text-gray-700 dark:text-gray-300 mt-6 space-y-2 text-sm text-left max-w-md mx-auto">
            <li>✅ 5x Pro Launches (All Features)</li>
            <li>✅ Multi-Product or Multi-Month Support</li>
            <li>✅ Save 27% compared to individual plans</li>
          </ul>

          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto mt-16">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center">
          Frequently Asked Questions
        </h3>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded-md"
            >
              <button
                onClick={() => toggle(index)}
                className="flex items-center justify-between w-full p-4 text-left text-gray-800 dark:text-white font-medium focus:outline-none"
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-4 h-4 transform transition-transform duration-200 ${
                    openIndex === index
                      ? "rotate-90 text-blue-600"
                      : "text-gray-500"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-sm text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}

export default PricingAndFAQ;
