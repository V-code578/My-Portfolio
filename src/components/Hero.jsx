import React, { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import "./Hero.css";
import heroImage from "../assets/Vinay.png";

export default function Hero() {
  const imgRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX: mouseX, clientY: mouseY } = event;
      const { innerWidth: windowWidth, innerHeight: windowHeight } = window;

      const rotateX = (mouseY / windowHeight - 0.5) * 30;
      const rotateY = (mouseX / windowWidth - 0.5) * -30;

      if (imgRef.current) {
        imgRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Vinay_H_N_Resume.pdf"; // Path in the public folder
    link.download = "Vinay_H_N_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-text">
        <p className="intro">Hi, my name is</p>
        <h1 className="name">Vinay H N</h1>
        <h2 className="tagline">I build things for the web.</h2>
        <p className="description">
          I'm a Full Stack Developer specializing in building exceptional digital
          experiences with .NET Core and React JS. Currently, I'm focused on
          building scalable and efficient applications at{" "}
          <a href="https://www.slksoftware.com" target="_blank" rel="noopener noreferrer">
            SLK Software
          </a>.
        </p>
        <div className="hero-buttons">
          <Link to="contact" smooth={true} duration={500}>
            <button className="btn-primary">Contact Me</button>
          </Link>
          <button className="btn-outline" onClick={handleDownload}>
            Download Resume
          </button>
        </div>
      </div>
      <div className="hero-image-container">
        <img
          ref={imgRef}
          src={heroImage}
          alt="Vinay H N"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
