import React from "react";
import payrollImg from "../assets/payroll-project-enhanced.svg";
import supportzoneImg from "../assets/support-zone-project-enhanced.svg";
import './Projects.css'; // Ensure this path is correct

const ProjectCard = ({ title, techStack, description, points, image, reverse }) => (
  <div className={`project-card ${reverse ? "reverse" : ""}`}>
    {/* Text Section */}
    <div className="project-text">
      <h3>{title}</h3>
      <div className="tech-stack">
        {techStack.map((tech, idx) => (
          <span key={idx}>{tech}</span>
        ))}
      </div>
      <p className="project-description">{description}</p>
      <ul className="project-points">
        {points.map((point, idx) => (
          <li key={idx}>
            <span>▸</span>
            {point}
          </li>
        ))}
      </ul>
    </div>

    {/* Image Section */}
    <div className="project-image">
      <img src={image} alt={title} />
    </div>
  </div>
);

const Projects = () => {
  return (
    <div className="projects-section" id="projects">
      <div className="projects-container">
        <h2 className="projects-title">Featured Projects</h2>

        {/* Project 1 */}
        <ProjectCard
          title="Payroll Input System"
          techStack={["C#", ".Net Core 8.0", "React.js", "MS SQL Server", "Entity Framework"]}
          description="A comprehensive payroll management system that streamlines workflows and provides secure, role-based access to payroll data. The system integrates with existing organization systems and provides a user-friendly interface for managing payroll inputs."
          points={[
            "Worked on streamlining payroll workflows by developing backend components using .NET Core Web APIs.",
            "Optimized data handling through Entity Framework Core, ensuring efficient and scalable data processing.",
            "Designed and implemented role-based access control (RBAC) for payroll workflows, ensuring secure data access.",
            "Integrated Authentication and Authorization using JWT, OAuth, and Active Directory for enhanced security.",
            "Automated background jobs and scheduled tasks using Hangfire, ensuring smooth execution of payroll processing.",
          ]}
          image={payrollImg}
        />

        {/* Project 2 */}
        <ProjectCard
          title="SupportZone"
          techStack={["C#", ".Net Core 8.0", "Microsoft Graph API", "Postman", "Ocelot Gateway"]}
          description="A robust support management platform that integrates with ServiceNow for incident management and provides secure handling of support tickets and attachments. The system features enhanced security and efficient API connections."
          points={[
            "Designed and implemented APIs to integrate with ServiceNow for managing incidents and handling attachments.",
            "Focused on building secure API connections with structured error logging to ensure reliable performance.",
            "Developed scalable solutions for fetching and managing incident data, aligning with organizational requirements.",
            "Enhanced security with Azure SSO, JWT Tokens, and routing via Ocelot Gateway.",
            "Optimized ServiceNow API interactions, reducing response times and improving overall system efficiency.",
          ]}
          image={supportzoneImg}
          reverse
        />
      </div>
    </div>
  );
};

export default Projects;
