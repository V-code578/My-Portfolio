import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-left">
        <h2 className="about-title">About Me</h2>
        <p>
          I am a highly skilled <span className="blue-highlight">.NET Full Stack Developer</span> with approximately 2 years of experience in C#, ASP.NET Core, and React JS. I specialize in API development, secure authentication, and data optimization.
        </p>
        <p>
          My technical expertise includes developing robust applications using .NET Core, ASP.NET, React.js, and Entity Framework while meeting strict deadlines. I have a proven track record of working on high-impact projects like the Payroll Input System and SupportZone, with a focus on workflow automation and role-based access control.
        </p>
        <p>
          I'm passionate about building scalable, efficient, and user-friendly web applications that solve real-world problems. My approach combines technical excellence with a commitment to continuous learning and improvement.
        </p>
      </div>

      <div className="about-right">
        <div className="about-card">
          <h3 className="card-title">Education</h3>
          <ul>
            <li>
              <span className="dot" />
              <div>
                <strong>Bachelor of Information Science and Engineering</strong>
                <p className="card-subtitle">GM INSTITUTE OF TECHNOLOGY</p>
                <p className="card-details">2019 - 2023</p>
                <p className="card-location">Davanagere, Karnataka</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="about-card">
          <h3 className="card-title">Current Role</h3>
          <ul>
            <li>
              <span className="dot" />
              <div>
                <strong>Full Stack Developer</strong>
                <p className="card-subtitle">SLK Software Pvt Ltd</p>
                <p className="card-details">Sep 2023 - Present</p>
                <p className="card-location">Bengaluru, Karnataka</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
