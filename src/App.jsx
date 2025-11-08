import React from "react";
import Navbar from "./Navbar/Navbar.jsx";
import BlurBlob from "./Navbar/BlurBlob.jsx";
import About from "./Navbar/About.jsx";
import Skills from "./Navbar/Skills.jsx";
import Exp from "./Navbar/Experience.jsx";
import Pro from "./Navbar/Projects.jsx";
import Education from "./Navbar/Education.jsx";
import Contact from "./Navbar/Contact.jsx";





function App() {
  return (
    <div className="bg-[#050414] min-h-screen relative overflow-hidden">
      <BlurBlob
        position={{ top: "35%", left: "20%" }}
        size={{ width: "30%", height: "40%" }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[14px_24px] [mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="relative pt-20">
        <Navbar />
        <About />
        <Skills />
        <Exp />
        <Pro />
        <Education />
        <Contact />
      </div>
    </div>
  );
}

export default App;
