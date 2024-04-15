import React from 'react';
import './Resume.css'; // Make sure to import the CSS file

const Resume = () => {
  return (
    <div className="resume-container">
      <h2>Resume</h2>
      <a href="/path_to_resume.pdf" className="resume-download" download>Download my resume</a>
      <h3>Front-end Proficiencies</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>Responsive design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>
      <h3>Back-end Proficiencies</h3>
      <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
      </ul>
    </div>
  );
};

export default Resume;
