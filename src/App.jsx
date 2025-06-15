import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Link } from "react-router-dom";
import Hero from "./Components/Hero";
import Docs from "./Pages/Docs";
import Components from "./Pages/Components";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import SignIn from "./Auth/Signin";
import Signup from "./Auth/Signup";
import Figma from "./Pages/Figma";

const router = createBrowserRouter([
  {
    path: "",
    element: <div>
      <Navbar />
      <Hero />
    </div>,
  },
  {
    path: "/docs",
    element: (
      <div>
        <Navbar />
        <Docs />
      </div>
    ),
  },
  // Add more routes here
  {
    path: "/components",
    element: <div>
        <Navbar />
        <Components />
      </div>,
  },
  {
    path: "/blog",
    element: <div>
        <Navbar />
        <Blog />
      </div>,
  },
  {
    path: "/contact",
    element: <div>
        <Navbar />
        <Contact />
      </div>,
  },
   {
    path: "/figma",
    element: <div>
        <Navbar />
        <Figma />
      </div>,
  },
  {
    path: "/signin",
    element:<SignIn/> ,
  },
   {
    path: "/signup",
    element:<Signup/> ,
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
