import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import './Contact.css';  // Import the CSS file

function Contact() {
  return (
    <div name="contact" className="contact-section">
      <div className="max-w-[1000px] mx-auto">
        <h2>Get In Touch</h2>
        <p>
          I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out and I'll get back to you as soon as possible!
        </p>

        <div className="contact-info">
          <div>
            <FaEnvelope />
            <span>vinayhn2019@gmail.com</span>
          </div>
          <div>
            <FaPhoneAlt />
            <span>+91 7483538785</span>
          </div>
          <div>
            <FaMapMarkerAlt />
            <span>Davanagere-577002, Karnataka, India</span>
          </div>
        </div>

        <div className="social-icons">
          <a href="https://www.linkedin.com/in/vinay-h-n-97061b1a9/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/V-code578/" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
