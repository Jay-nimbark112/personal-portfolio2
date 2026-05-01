import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Services } from "./components/Services";
import { Experience } from "./components/Experience";
import { Portfolio } from "./components/Portfolio";
import { Testimonial } from "./components/Testimonial";
import { Contact } from "./components/Contact";

function App() {
  const [projects, setProjects] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  // toggle theme
  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  // ✅ safer body theme handling
  useEffect(() => {
    document.body.classList.remove(
      "bg-black",
      "bg-white",
      "text-white",
      "text-dark"
    );

    if (darkMode) {
      document.body.classList.add("bg-black", "text-white");
    } else {
      document.body.classList.add("bg-white", "text-dark");
    }
  }, [darkMode]);

  // ✅ fetch projects with error handling
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get(
          "https://personal-portfolio2-2.onrender.com"
        );
        setProjects(res.data);
      } catch (err) {
        console.log("Error loading projects:", err);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />

      <Home darkMode={darkMode} />
      <Services />
      <Experience />

      {/* ✅ pass projects here */}
      <Portfolio projects={projects} />

      <Testimonial darkMode={darkMode} />

      {/* Contact form stays same */}
      <Contact />
    </>
  );
}

export default App;