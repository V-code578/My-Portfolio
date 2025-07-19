import React from "react";
import './Skills.css';

// Import images
import AspNet from "../assets/ASP.jpeg";
import CSharp from "../assets/C#.png";
import Sql from "../assets/SQL.png";
import ReactLogo from "../assets/React.png";
import DotNetCore from "../assets/.Net Core.png";
import VisualStudio from "../assets/VS.png";
import VsCode from "../assets/VS_Code.png";
import Azure from "../assets/Azure.png";
import MsSql from "../assets/sqlserver-logo.svg";
import GitHub from "../assets/Github.png";
import Postman from "../assets/postman.png";
import Ocelot from "../assets/ocelot.png";
import Hangfire from "../assets/Hangfire.png";
import Jwt from "../assets/Jwt.png";
import OAuth from "../assets/oauth.svg";
import AzureApi from "../assets/Azure-Api.png";
import Iis from "../assets/IIS.png";
import RestApi from "../assets/Rest.png";
import OOPS from "../assets/OOPS.jpeg";
import Entity from "../assets/EntityFramework.png";
import Java from "../assets/Java.png";
import JavaScript from "../assets/Javascript.png";
import Angular from "../assets/Angular.png";

const ImageIcon = ({ src, alt }) => (
  <img src={src} alt={alt} className="skill-icon-img" />
);

const SkillBar = ({ name, icon, percent }) => (
  <div className="skill-bar">
    <div className="skill-bar-header">
      <div className="skill-info">
        {icon}
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

        <div className="skills-grid">
          {/* Programming Languages */}
          <div className="skills-category">
            <h3>Programming Languages</h3>
            <SkillBar name="C#" icon={<ImageIcon src={CSharp} alt="C#" />} percent={90} />
            <SkillBar name="SQL" icon={<ImageIcon src={Sql} alt="SQL" />} percent={85} />
            <SkillBar name="Java" icon={<ImageIcon src={Java} alt="Java" />} percent={75} />
            <SkillBar name="JavaScript" icon={<ImageIcon src={JavaScript} alt="JS" />} percent={80} />
          </div>

          {/* Frameworks & Technologies */}
          <div className="skills-category">
            <h3>Frameworks & Technologies</h3>
            <SkillBar name=".NET Core" icon={<ImageIcon src={DotNetCore} alt=".NET Core" />} percent={95} />
            <SkillBar name="ASP.NET MVC" icon={<ImageIcon src={AspNet} alt="ASP.NET MVC" />} percent={90} />
            <SkillBar name="Angular" icon={<ImageIcon src={Angular} alt="Angular" />} percent={85} />
            <SkillBar name="React.js" icon={<ImageIcon src={ReactLogo} alt="React" />} percent={80} />
          </div>

          {/* Tools & Deployment */}
          <div className="skills-category">
            <h3>Tools & Deployment</h3>
            <SkillBar name="Visual Studio" icon={<ImageIcon src={VisualStudio} alt="Visual Studio" />} percent={95} />
            <SkillBar name="VS Code" icon={<ImageIcon src={VsCode} alt="VS Code" />} percent={90} />
            <SkillBar name="MS SQL Server" icon={<ImageIcon src={MsSql} alt="MS SQL Server" />} percent={85} />
            <SkillBar name="Azure & CI/CD" icon={<ImageIcon src={Azure} alt="Azure" />} percent={80} />
          </div>
        </div>

        {/* Additional Expertise */}
        <div className="expertise-section">
          <h3>Additional Expertise</h3>
          <div className="expertise-tags">
            {[
              { name: "REST APIs", icon: RestApi },
              { name: "OOPS", icon: OOPS },
              { name: "Hangfire", icon: Hangfire },
              { name: "IIS", icon: Iis },
              { name: "Postman", icon: Postman },
              { name: "GitHub", icon: GitHub },
              { name: "OAuth", icon: OAuth },
              { name: "JWT", icon: Jwt },
              { name: "Azure API Management", icon: AzureApi },
              { name: "Ocelot API Gateway", icon: Ocelot },
            ].map((item, idx) => (
              <div key={idx} className="expertise-tag">
                {item.icon && <img src={item.icon} alt={item.name} className="tag-icon" />} {item.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
