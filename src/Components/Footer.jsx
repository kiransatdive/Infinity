import React, { useRef, useState } from "react";
import { FiMail, FiMessageCircle } from "react-icons/fi";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";

function Footer() {
  const form = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_3eb7z7b",
        "template_rwbk6bl",
        form.current,
        "5aiSk_1sX1vMMMElt"
      )
      .then(
        () => {
          alert("Message sent!");
          form.current.reset();
          setIsOpen(false);
        },
        () => alert("Failed to send message.")
      );
  };

  return (
    <footer className="bg-white text-gray-900 px-6 md:px-12 py-12 rounded-md shadow-[0_-4px_10px_rgba(0,0,0,0.1)] relative">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-2">
            <img src="/infinity.png" alt="Logo" className="h-8 w-8  border-3 " />
            <h2 className="text-4xl font-bold">Infinity</h2>
          </Link>
          <p className="text-sm text-gray-800">Products loved and used by makers</p>
          <div className="mt-4 flex items-center gap-2">
            <FiMail className="text-xl" />
            <span className="text-sm">hello@infinity.com</span>
          </div>
        </div>

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

        <div>
          <h3 className="text-lg font-semibold mb-3">Premium</h3>
          <ul className="space-y-2 text-sm">
            <li>Pro launches</li>
            <li>Sponsorships</li>
            <li>Partners</li>
            <li>Browse Products</li>
          </ul>
        </div>

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

      {/* Bottom bar */}
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

      {/* Social links */}
      <div className="mt-6 flex justify-center gap-6 text-xl text-gray-600">
        <a href="https://github.com/kiransatdive"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/kiran-satdive?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaInstagram /></a>
      </div>

      {/* Message Button and Small Popup */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition"
        >
          <FiMessageCircle className="text-xl" />
        </button>

        {isOpen && (
          <div className="absolute bottom-20 right-0 w-72 bg-white p-4 rounded-lg shadow-xl z-50 border">
            <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-3">
              <h2 className="text-md font-semibold text-gray-800 text-center">Quick Message</h2>
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                required
                className="border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
              <textarea
                name="message"
                rows="2"
                placeholder="Message"
                required
                className="border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              ></textarea>
              <button
                type="submit"
                className="bg-indigo-600 text-white text-sm py-2 rounded hover:bg-indigo-700 transition"
              >
                Send
              </button>
            </form>
          </div>
        )}
      </div>
    </footer>
  );
}

export default Footer;
