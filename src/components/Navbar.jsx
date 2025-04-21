import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Vinay</div>
      
      {/* Hamburger menu for mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><Link to="about" smooth={true} duration={500} onClick={() => setIsOpen(false)}>About</Link></li>
        <li><Link to="experience" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Experience</Link></li>
        <li><Link to="projects" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Projects</Link></li>
        <li><Link to="skills" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Skills</Link></li>
        <li><Link to="achievements" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Achievements</Link></li>
        <li><Link to="contact" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;