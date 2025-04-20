import React from "react";
import { FaUsers, FaGraduationCap } from "react-icons/fa"; // Add missing icon imports
import teamAward from "../assets/team-award.svg"; // Import team award image
import educationAward from "../assets/education-award.svg"; // Import education award image
import './Achievements.css'; // Import the CSS file

function Achievements() {
  const achievements = [
    {
      title: "Team Player Award (2024)",
      issuer: "SLK Software",
      description:
        "Recognized for outstanding collaboration, effective communication, and contributions to project success. This award acknowledges team members who consistently support colleagues and help create a positive work environment.",
      icon: <FaUsers className="text-3xl text-cyan-400" />,
      image: teamAward, // Use imported image variable here
      alt: "Team Player Award Logo"
    },
    {
      title: "Best Outgoing Student",
      issuer: "GM Institute of Technology",
      description:
        "Recognized for academic excellence, strong ethics, and achievements in extracurriculars and sports in engineering. This prestigious award is given to students who demonstrate outstanding overall performance during their academic journey.",
      icon: <FaGraduationCap className="text-3xl text-cyan-400" />,
      image: educationAward, // Use imported image variable here
      alt: "Best Outgoing Student Logo"
    }
  ];

  return (
    <div name="achievements" className="achievements-section">
      <div className="max-w-[1200px] mx-auto px-8">
        <h2>Achievements</h2>

        <div className="achievements-grid">
          {achievements.map((achieve, i) => (
            <div key={i} className="achievement-card">
              <div className="achievement-header">
                <div className="achievement-icon">
                  {achieve.icon}
                </div>
                <div>
                  <h3>{achieve.title}</h3>
                  <p>Awarded By {achieve.issuer}</p>
                </div>
              </div>
              <div>
  <div className="achievement-image-container">
    <img
      src={achieve.image}
      alt={achieve.alt}
      className="achievement-image"
    />
  </div>
  <p className="achievement-description">
    {achieve.description}
  </p>
</div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Achievements;
