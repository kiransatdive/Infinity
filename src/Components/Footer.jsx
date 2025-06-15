import React from "react";
import { FiMail } from "react-icons/fi"; // Inbox/Mail icon
import { FaRocket } from "react-icons/fa"; // Placeholder logo icon

function Footer() {
  return (
    <footer className="bg-gray-200 text-gray-900 px-6 md:px-12 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo & Tagline */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <img src="/infinity.png" alt="Logo" className="h-8 w-8 border border-3 " />
            
            <h2 className="text-4xl font-bold">Infinity</h2>
          </div>
          <p className="text-sm text-gray-800">
            Products loved and used by makers
          </p>
          <div className="mt-4 flex items-center gap-2">
            <FiMail className="text-xl" />
            <span className="text-sm">hello@infinity.com</span>
          </div>
        </div>

        {/* Platform */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Platform</h3>
          <ul className="space-y-2 text-sm">
            <li>Leaderboard</li>
            <li>Community</li>
            <li>Trends</li>
            <li>Hall of Fame</li>
            <li>Browse products</li>
          </ul>
        </div>

        {/* Premium */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Premium</h3>
          <ul className="space-y-2 text-sm">
            <li>Pro launches</li>
            <li>Sponsorships</li>
            <li>Partners</li>
            <li>Browse Products</li>
          </ul>
        </div>

        {/* Tools & Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>AI Tools</li>
            <li>Productivity Tools</li>
            <li>Marketing & Growth Tools</li>
            <li>Dev Tools</li>
            <li>Social Media Tools</li>
          </ul>
        </div>
      </div>

      {/* Bottom section */}
      <div className="mt-12 border-t border-gray-300 pt-6 text-sm text-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-wrap gap-4">
          <a href="#" className="hover:underline">Privacy policy</a>
          <a href="#" className="hover:underline">Terms & conditions</a>
          <a href="#" className="hover:underline">Cookies</a>
        </div>
        <div className="text-center">
          <p>© Copyright Infinity 2025 👨‍🚀</p>
        </div>
        <div>
          <a href="#" className="hover:underline">Go to your product HQ</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
