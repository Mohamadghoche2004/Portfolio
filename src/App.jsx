import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";

import Navbar from "./Components/layout/Navbar/Navbar";
import Home from "./Components/screens/home/Home";
import Resume from "./Components/screens/resume/Resume";
import Footer from "./Components/layout/Footer/Footer";
import Contact from "./Components/screens/contact/Contact";
import Project from "./Components/screens/projects/Project";

// Layout component to include Navbar and Footer
const Layout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/projects",
        element: <Project />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
