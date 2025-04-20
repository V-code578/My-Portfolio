import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";
import './Footer.css';  // Import the CSS file

function Footer() {
  const [isHomeVisible, setIsHomeVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      const homeSectionPosition = homeSection.getBoundingClientRect();

      // Check if the home section is fully visible
      if (homeSectionPosition.top <= 0 && homeSectionPosition.bottom >= 0) {
        setIsHomeVisible(true);
      } else {
        setIsHomeVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check in case the page is loaded scrolled down
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className="w-full bg-[#0a192f] text-gray-400 py-6 px-4 text-sm flex flex-col md:flex-row justify-between items-center relative">
      <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Vinay H N. All rights reserved.</p>
      
      <div className="flex space-x-6 text-base">
        <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-pink-500">
          Home
        </Link>
        <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-pink-500">
          About
        </Link>
        <Link to="experience" smooth={true} duration={500} className="cursor-pointer hover:text-pink-500">
          Experience
        </Link>
        <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-pink-500">
          Projects
        </Link>
        <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-pink-500">
          Contact
        </Link>
      </div>
      
      {/* Only show the scroll-to-top button if Home is not in view */}
      {!isHomeVisible && (
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="fixed bottom-6 right-6 bg-blue-500 text-white p-3 rounded-full cursor-pointer hover:bg-blue-600"
        >
          <FaArrowUp />
        </Link>
      )}
    </footer>
  );
}

export default Footer;
