import React from "react";

const BlogPost = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 font-sans text-gray-800">
      <h1 className="text-4xl font-bold mb-4">How to Use useState in React</h1>
      <p className="text-sm text-gray-500 mb-6">By Kiran Satdive | June 17, 2025</p>

      <p className="mb-4">
        In this blog, we will explore the <code>useState</code> hook in React, which allows
        you to add state to functional components.
      </p>

      <h2 className="text-2xl font-semibold mb-2">📌 What is useState?</h2>
      <p className="mb-4">
        <code>useState</code> is a React Hook that lets you manage state inside a functional component.
      </p>

      <div className="bg-gray-100 p-4 rounded-lg overflow-auto text-sm font-mono text-gray-700 mb-6">
        <pre>
          <code>
{`import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`}
          </code>
        </pre>
      </div>

      <p className="mb-4">
        In the example above, clicking the button increases the count. This is the simplest
        demonstration of how state works in React.
      </p>

      <h2 className="text-2xl font-semibold mb-2">✅ When to Use It</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Storing user input (e.g. form fields)</li>
        <li>Tracking UI state (e.g. toggle, modals)</li>
        <li>Simple app logic (e.g. counters, toggles)</li>
      </ul>

      <p className="italic text-gray-500">Happy coding with React! 💻</p>
    </div>
  );
};

export default BlogPost;
