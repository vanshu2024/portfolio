import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and update background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Update active section while scrolling
  useEffect(() => {
    const handleActiveSection = () => {
      const sections = ["about", "skills", "experience", "projects", "education", "contact"];
      let current = "";
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section && window.scrollY >= section.offsetTop - 200) {
          current = id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleActiveSection);
    return () => window.removeEventListener("scroll", handleActiveSection);
  }, []);

  // Navbar menu items
  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-[7vw] md:px-[8vw] lg:px-[15vw] 
      ${isScrolled
        ? "bg-[#0a0118]/80 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
        : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center">
        {/* Logo */}
        <div
          className="text-xl font-bold cursor-pointer tracking-wide select-none"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Vanshika</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Gangwar</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-gray-300 font-medium">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`relative cursor-pointer transition-colors duration-200 hover:text-[#8245ec] ${
                activeSection === item.id ? "text-[#8245ec]" : ""
              }`}
            >
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className="relative group"
              >
                {item.label}
                {/* Underline hover effect */}
                <span
                  className={`absolute left-0 -bottom-1 w-full h-0.5 bg-[#8245ec] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ${
                    activeSection === item.id ? "scale-x-100" : ""
                  }`}
                ></span>
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons (Desktop) */}
        <div className="hidden md:flex space-x-5">
          <a
            href="https://github.com/vanshu2024"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec] transition-colors duration-200"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/vanshika-gangwar-3a81472b2/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec] transition-colors duration-200"
          >
            <FaLinkedin size={22} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-[90%] bg-[#0a0118]/95 backdrop-blur-md rounded-2xl shadow-xl md:hidden animate-fadeIn">
          <ul className="flex flex-col items-center space-y-5 py-6 text-gray-300 font-medium">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-[#8245ec] transition-colors duration-200 ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}

            {/* Social Icons in Mobile Menu */}
            <div className="flex space-x-6 pt-4">
              <a
                href="https://github.com/vanshu2024"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#8245ec] transition-colors duration-200"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/vanshika-gangwar-3a81472b2/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#8245ec] transition-colors duration-200"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;