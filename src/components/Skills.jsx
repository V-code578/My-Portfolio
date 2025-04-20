import React from "react";
import './Skills.css';

const EmojiIcon = ({ emoji, className }) => (
  <span className={`skill-icon ${className}`}>{emoji}</span>
);

const SkillBar = ({ name, icon, percent }) => (
  <div className="skill-bar">
    <div className="skill-bar-header">
      <div className="skill-info">
        <span className="skill-icon">{icon}</span>
        <span className="skill-name">{name}</span>
      </div>
      <span className="skill-percent">{percent}%</span>
    </div>
    <div className="skill-bar-bg">
      <div className="skill-bar-fill" style={{ width: `${percent}%` }} />
    </div>
  </div>
);

const Skills = () => {
  return (
    <div className="skills-section" id="skills">
      <div className="max-width">
        <h2>Technical Skills</h2>

        {/* Grid: 3 columns */}
        <div className="skills-grid">
          {/* Programming Languages */}
          <div className="skills-category">
            <h3>Programming Languages</h3>
            <SkillBar name="C#" icon={<EmojiIcon emoji="💻" />} percent={90} />
            <SkillBar name="SQL" icon={<EmojiIcon emoji="🗃️" />} percent={85} />
            <SkillBar name="Java" icon={<EmojiIcon emoji="☕" />} percent={75} />
            <SkillBar name="JavaScript" icon={<EmojiIcon emoji="🟨" />} percent={80} />
          </div>

          {/* Frameworks & Technologies */}
          <div className="skills-category">
            <h3>Frameworks & Technologies</h3>
            <SkillBar name=".NET Core" icon={<EmojiIcon emoji="🧱" />} percent={95} />
            <SkillBar name="ASP.NET MVC" icon={<EmojiIcon emoji="🌐" />} percent={90} />
            <SkillBar name="Entity Framework" icon={<EmojiIcon emoji="📚" />} percent={85} />
            <SkillBar name="React.js" icon={<EmojiIcon emoji="⚛️" />} percent={80} />
          </div>

          {/* Tools & Deployment */}
          <div className="skills-category">
            <h3>Tools & Deployment</h3>
            <SkillBar name="Visual Studio" icon={<EmojiIcon emoji="🛠️" />} percent={95} />
            <SkillBar name="VS Code" icon={<EmojiIcon emoji="📘" />} percent={90} />
            <SkillBar name="MS SQL Server" icon={<EmojiIcon emoji="🔷" />} percent={85} />
            <SkillBar name="Azure & CI/CD" icon={<EmojiIcon emoji="☁️" />} percent={80} />
          </div>
        </div>

        {/* Additional Expertise */}
        <div className="expertise-section">
  <h3>Additional Expertise</h3>
  <div className="expertise-tags">
    {[
      "REST APIs",
      "OOPS",
      "Hangfire",
      "IIS",
      "Postman",
      "GitHub",
      "OAuth",
      "JWT",
      "Azure API Management",
      "Ocelot API Gateway",
    ].map((item, idx) => (
      <div key={idx} className="expertise-tag">
        {item}
      </div>
    ))}
  </div>
</div>



      </div>
    </div>
  );
};

export default Skills;
