import React from "react";
import "./ExperienceSection.css";

function ExperienceSection() {
  return (
    <div className="experience-section" id="experience">
      <div className="experience-container">
        {/* Heading */}
        <h2 className="experience-title">Work Experience</h2>

        {/* Content */}
        <div className="experience-grid">
          {/* Left - Role Info */}
          <div>
            <h3 className="role-title">Full Stack Developer</h3>
            <p className="company-name">SLK Software Pvt Ltd</p>
            <p className="duration">Sep 2023 - Present</p>
          </div>

          {/* Right - Responsibilities */}
          <div className="responsibility-list">
            {[
              "Around 2 years of experience in developing scalable and efficient full-stack applications using .NET Core and React JS.",
              "Proficient in the software development lifecycle (SDLC), including requirement analysis, design, development, testing, deployment, and support.",
              "Developed robust applications using .NET Core, ASP.NET, React.js and Entity Framework while meeting strict deadlines.",
              "Actively contributed to Agile methodologies, including sprint planning, daily stand-ups, and client interactions.",
              "Deployed applications on Azure and IIS, ensuring high availability, scalability, and performance optimization.",
              "Configured CI/CD pipelines for automated deployments, reducing manual effort and improving release efficiency.",
            ].map((item, idx) => (
              <p key={idx}>
                <span>▸</span>
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceSection;
