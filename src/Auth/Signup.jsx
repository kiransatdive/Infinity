import React, { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation & submission logic
    console.log("Sign up data:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-neutral-900 px-4">
      <div className="max-w-md w-full bg-white dark:bg-neutral-800 p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Create an Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">Name</label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 focus:ring-indigo-500 focus:outline-none dark:bg-neutral-700 dark:text-white"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 focus:ring-indigo-500 focus:outline-none dark:bg-neutral-700 dark:text-white"
              placeholder="example@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">Password</label>
            <input
              type="password"
              name="password"
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 focus:ring-indigo-500 focus:outline-none dark:bg-neutral-700 dark:text-white"
              placeholder="********"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 focus:ring-indigo-500 focus:outline-none dark:bg-neutral-700 dark:text-white"
              placeholder="********"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg font-medium transition"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <a href="/signin" className="text-indigo-600 hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
