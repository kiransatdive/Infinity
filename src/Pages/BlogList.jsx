import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const posts = [
  {
    title: "Spring Boot Interview Questions Every Backend Developer Must Know",
    slug: "backend",
    date: "Jun 20, 2025",
    excerpt:
      "Crack your backend interviews with confidence — from core Java to Spring Boot, databases, REST APIs, security, and system design.",
  },
  {
    title: "React JS Interview Preparation Guide for Freshers & Experienced",
    slug: "frontend",
    date: "Jun 20, 2025",
    excerpt:
      "React has become one of the most popular JavaScript libraries for building modern web applications. Whether you're a fresher or an experienced developer, React is a must-know skill for frontend and full stack development roles.",
  },
    {
    title: "Tailwind CSS Interview: Most Asked Questions with Examples",
    slug: "tailwind",
    date: "Jun 19, 2025",
    excerpt:
      "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs directly in your markup without writing traditional CSS."
  },
];

function BlogList() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 font-sans">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-2">📝 Blog</h1>
      <p className="text-lg text-gray-600">
        Hey there! 👋 Welcome to my corner of the internet.
      </p>

      {/* Search Bar */}
      <div className="relative mt-6 w-full sm:max-w-md">
        <input
          type="text"
          placeholder="Search Blog..."
          className="w-full px-10 py-3 text-sm border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <FaSearch className="absolute left-3 top-3.5 text-gray-400 text-lg" />
      </div>

      {/* Blog Posts */}
      <div className="divide-y divide-gray-200 mt-12">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="grid sm:grid-cols-4 gap-6 py-8 text-gray-800"
          >
            {/* Date */}
            <p className="text-sm font-mono uppercase text-gray-500">
              {post.date.toUpperCase()}
            </p>

            {/* Post Content */}
            <div className="sm:col-span-3">
              <Link to={`/blog/${post.slug}`} className="text-xl font-semibold mb-1">{post.title}</Link>
              <p className="text-sm text-gray-600 mb-2">{post.excerpt}</p>
              <Link
                to={`/blog/${post.slug}`}
                className="text-sm text-blue-600 hover:underline font-medium"
              >
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
