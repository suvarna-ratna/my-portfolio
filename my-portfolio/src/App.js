import React from "react";
import About from "./compoenents/About";
import Contact from "./compoenents/Contact";
import Education from "./compoenents/Education";
import Navbar from "./compoenents/Navbar";
import Projects from "./compoenents/Projects";
import Skills from "./compoenents/Skills";
import Experience from "./compoenents/Experience";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </main>
  );
}