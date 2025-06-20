import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Docs from "./Pages/Docs";
import Components from "./Pages/Components";
import Contact from "./Pages/Contact";
import SignIn from "./Auth/Signin";
import Signup from "./Auth/Signup";
import Figma from "./Pages/Figma";

import Blog from "./Pages/Blog";
import BlogList from "./Pages/BlogList";
import Footer from "./Components/Footer";
const router = createBrowserRouter([
  {
    path: "",
    element: (
      <div>
        <Navbar />
        <Hero />

      </div>
    ),
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
    element: (
      <div>
        <Navbar />
        <Components />
        <Footer />
      </div>
    ),
  },
 
  {
    path: "/blog",
    element: 
    <div>
      <Navbar />
      <BlogList />
      <Footer />
    </div>
    ,
    errorElement: <h1 className="text-center mt-10 text-red-600 text-2xl">404 - Page Not Found</h1>,
  },
  {
    path: "/blog/:slug",
    element:
    <div>
      <Navbar />
      <Blog />
      <Footer />,
    </div>
    
  },

  {
    path: "/contact",
    element: (
      <div>
        <Navbar />
        <Contact />
        
      </div>
    ),
  },
  {
    path: "/figma",
    element: (
      <div>
        <Navbar />
        <Figma />
       
      </div>
    ),
  },
  {
    path: "/signin",
    element: 
    <div>
      <Navbar />
     <SignIn />
     <Footer />
     
    </div>
    
  },
  {
    path: "/signup",
   
    element: 
     <div>
      <Navbar />
      <Signup />
      <Footer />
    </div>
    
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      
    </>
  );
}

export default App;
