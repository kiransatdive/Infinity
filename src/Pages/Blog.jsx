// src/pages/Blog.jsx
import React from "react";
import { useParams } from "react-router-dom";

const blogPosts = {
  backend: (
    <>
      <p className="text-gray-500 mb-4">Jun 20, 2025 by kiran Satdive</p>
      <h1 className="text-4xl font-bold mb-4">
        Spring Boot Interview: Most Asked Questions with Code
      </h1>
      <p className="text-gray-500 mb-4">Updated June 2025</p>

      <h2 className="text-2xl font-semibold mb-2 mt-6">
        1. What is Spring Boot?
      </h2>
      <p className="mb-4">
        Spring Boot is a framework built on top of the Spring Framework that
        makes it easier to build stand-alone, production-grade Spring-based
        applications with minimal configuration.
      </p>

      <h2 className="text-2xl font-semibold mb-2 mt-6">
        2. How do you create a simple REST API in Spring Boot?
      </h2>
      <pre className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code>
          {`@RestController
@RequestMapping("/api")
public class HelloController {

    @GetMapping("/hello")
    public String sayHello() {
        return "Hello, Spring Boot!";
    }
}`}
        </code>
      </pre>

      <h2 className="text-2xl font-semibold mb-2 mt-6">
        3. What is Dependency Injection in Spring?
      </h2>
      <p className="mb-4">
        Dependency Injection (DI) is a design pattern where dependencies are
        provided by an external source rather than being created inside the
        class. Spring uses constructor injection, setter injection, and field
        injection.
      </p>

      <h2 className="text-2xl font-semibold mb-2 mt-6">
        4. How does Spring Boot auto-configuration work?
      </h2>
      <p className="mb-4">
        Spring Boot uses the classpath and existing bean definitions to guess
        and configure the application automatically. It uses
        `@EnableAutoConfiguration` or `@SpringBootApplication` to make decisions
        based on what’s on the classpath.
      </p>

      <h2 className="text-2xl font-semibold mb-2 mt-6">
        5. How to connect Spring Boot with a database?
      </h2>
      <p className="mb-2 font-semibold">
        In <code>application.properties</code>:
      </p>
      <pre className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code>
          {`spring.datasource.url=jdbc:mysql://localhost:3306/testdb
spring.datasource.username=root
spring.datasource.password=root
spring.jpa.hibernate.ddl-auto=update`}
        </code>
      </pre>
      <p className="mb-2 font-semibold">JPA Entity Example:</p>
      <pre className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code>
          {`@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
}`}
        </code>
      </pre>

      <h2 className="text-2xl font-semibold mb-2 mt-6">
        6. How do you handle exceptions globally?
      </h2>
      <pre className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code>
          {`@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleAllExceptions(Exception ex) {
        return new ResponseEntity<>("An error occurred: " + ex.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
}`}
        </code>
      </pre>

      <p className="mt-6 text-lg font-semibold">
        ✅ These are just a few commonly asked questions. For more, include:
      </p>
      <ul className="list-disc list-inside mb-8 mt-2 space-y-1">
        <li>Spring Security basics</li>
        <li>Bean lifecycle</li>
        <li>REST vs SOAP</li>
        <li>Custom annotations</li>
        <li>Unit testing with Mockito</li>
      </ul>
    </>
  ),
  frontend: (
    <>
      <p className="text-gray-500 mb-4">Jun 20, 2025 by kiran Satdive</p>
      <h1 className="text-4xl font-bold mb-4">
        React Frontend Interview: Most Asked Questions with Code
      </h1>
      <p className="text-gray-500 mb-4">Updated June 2025</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. What is JSX?</h2>
      <p className="mb-4">
        JSX stands for JavaScript XML. It allows writing HTML-like syntax inside
        JavaScript, which gets transpiled to React.createElement calls.
      </p>
      <pre className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code>{`const element = <h1>Hello, world!</h1>;`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mb-2">2. What are React Hooks?</h2>
      <p className="mb-4">
        Hooks let you use state and other React features without writing a
        class. Common hooks include <code>useState</code>,{" "}
        <code>useEffect</code>, <code>useContext</code>.
      </p>
      <pre className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code>
          {`const [count, setCount] = useState(0);

useEffect(() => {
  console.log("Component mounted or updated");
}, [count]);`}
        </code>
      </pre>

      <h2 className="text-2xl font-semibold mb-2">
        3. How does Virtual DOM work?
      </h2>
      <p className="mb-4">
        Virtual DOM is a lightweight copy of the real DOM. React updates the
        Virtual DOM, compares it with the previous version (diffing), and
        updates only the changed parts in the real DOM, improving performance.
      </p>

      <h2 className="text-2xl font-semibold mb-2">
        4. What is the difference between controlled and uncontrolled
        components?
      </h2>
      <p className="mb-2 font-semibold">Controlled:</p>
      <pre className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code>
          {`const [input, setInput] = useState("");

<input value={input} onChange={(e) => setInput(e.target.value)} />`}
        </code>
      </pre>
      <p className="mb-2 font-semibold">Uncontrolled:</p>
      <pre className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code>{`<input ref={inputRef} />`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mb-2">
        5. What is prop drilling and how do you avoid it?
      </h2>
      <p className="mb-4">
        Prop drilling refers to passing data through multiple components even if
        intermediate components don't need it. You can avoid it using{" "}
        <code>useContext</code> or state management libraries like Redux or
        Zustand.
      </p>

      <h2 className="text-2xl font-semibold mb-2">
        6. What is the use of keys in lists?
      </h2>
      <p className="mb-4">
        Keys help React identify which items have changed, are added, or are
        removed. They should be unique and consistent.
      </p>
      <pre className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code>
          {`{items.map(item => (
  <li key={item.id}>{item.name}</li>
))}`}
        </code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Bonus Topics You May Be Asked
      </h2>
      <ul className="list-disc list-inside mb-6 space-y-1">
        <li>React Router</li>
        <li>React.lazy and Suspense</li>
        <li>Error boundaries</li>
        <li>Redux or Context API</li>
        <li>Performance optimization (memo, lazy loading)</li>
      </ul>

      <p className="text-lg font-semibold">
        ✅ Prepare short answers, code examples, and be ready to explain the
        “why” behind each choice!
      </p>
    </>
  ),
  tailwind: (
    <>
      <p className="text-gray-500 mb-4">Jun 19, 2025 by kiran Satdive</p>
      <h1 className="text-4xl font-bold mb-4">
        Tailwind CSS Interview: Most Asked Questions with Examples
      </h1>
      <p className="text-gray-500 mb-4">Updated June 2025</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        1. What is Tailwind CSS?
      </h2>
      <p className="mb-4">
        Tailwind CSS is a utility-first CSS framework that provides low-level
        utility classes to build custom designs directly in your markup without
        writing traditional CSS.
      </p>

      <h2 className="text-2xl font-semibold mb-2">
        2. How does Tailwind differ from Bootstrap?
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Tailwind:</strong> Utility-first, highly customizable, no
          pre-defined components.
        </li>
        <li>
          <strong>Bootstrap:</strong> Component-first with pre-styled UI
          components.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">
        3. Example: Responsive Button
      </h2>
      <pre className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code>
          {`<button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded md:text-lg">
  Click Me
</button>`}
        </code>
      </pre>

      <h2 className="text-2xl font-semibold mb-2">
        4. How do you customize Tailwind?
      </h2>
      <p className="mb-2">
        Using <code>tailwind.config.js</code>:
      </p>
      <pre className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code>
          {`module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8",
      },
    },
  },
};`}
        </code>
      </pre>

      <h2 className="text-2xl font-semibold mb-2">
        5. How does Tailwind handle responsiveness?
      </h2>
      <p className="mb-4">
        Tailwind uses mobile-first breakpoints like <code>sm</code>,{" "}
        <code>md</code>, <code>lg</code>, and <code>xl</code>:
      </p>
      <pre className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code>
          {`<div className="text-sm md:text-lg lg:text-xl">Responsive Text</div>`}
        </code>
      </pre>

      <h2 className="text-2xl font-semibold mb-2">
        6. How to conditionally apply classes?
      </h2>
      <p className="mb-2">
        Use libraries like <code>clsx</code> or <code>classnames</code>:
      </p>
      <pre className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code>
          {`import clsx from 'clsx';

const Button = ({ primary }) => (
  <button className={clsx('px-4 py-2', primary ? 'bg-blue-600' : 'bg-gray-600')}>
    Submit
  </button>
);`}
        </code>
      </pre>

      <h2 className="text-2xl font-semibold mb-2">
        7. How to handle dark mode in Tailwind?
      </h2>
      <p className="mb-4">Tailwind supports class-based dark mode:</p>
      <pre className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code>
          {`// tailwind.config.js
darkMode: 'class'`}
        </code>
      </pre>
      <pre className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code>
          {`<div className="bg-white dark:bg-gray-900 text-black dark:text-white">
  Dark mode aware UI
</div>`}
        </code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Bonus Questions</h2>
      <ul className="list-disc list-inside mb-6 space-y-1">
        <li>How does JIT mode in Tailwind improve performance?</li>
        <li>What are @apply and when should you use it?</li>
        <li>How to integrate Tailwind with React/Next.js?</li>
        <li>How to handle animations and transitions?</li>
        <li>How to purge unused CSS in production?</li>
      </ul>

      <p className="text-lg font-semibold">
        ✅ Tip: Employers love when you can pair Tailwind with good component
        design and accessibility!
      </p>
    </>
  ),
};

function Blog() {
  const { slug } = useParams();
  const postContent = blogPosts[slug];

  return (
    <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto py-16 px-6">
      {postContent || <h1>404 - Blog Not Found</h1>}
    </div>
  );
}

export default Blog;
