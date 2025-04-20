import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ExperienceSection from "./components/ExperienceSection";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { motion } from "framer-motion";

const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function App() {
  return (
    <div className="scroll-smooth bg-[#0a192f] text-white font-sans">
      <Navbar />

      <motion.section id="home" variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Hero />
      </motion.section>

      <motion.section id="about" variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <About />
      </motion.section>

      <motion.section id="experience" variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <ExperienceSection />
      </motion.section>

      <motion.section id="projects" variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Projects />
      </motion.section>

      <motion.section id="skills" variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Skills />
      </motion.section>

      <motion.section id="achievements" variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Achievements />
      </motion.section>

      <motion.section id="contact" variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Contact />
      </motion.section>

      <Footer />
    </div>
  );
}

export default App;
