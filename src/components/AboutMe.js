
import React from 'react';
import './AboutMe.css'; // Make sure to import the CSS file

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <h2>About me</h2>
      <div className="avatar-container">
        <img src="/path_to_avatar.jpg" alt="Avatar" className="avatar" />
      </div>
      <p className="bio">
      Have been studying and working in Accounting industry for 12 years and currently trying to 
                explore a pathway which could be a combination of accounting and web developing. When working in accounting 
                I spent much unnecessary time in data entry and repetitive tasks, which are meaningless for personal development. 
                Hope the skill set in computer could help get rid of these tasks and make everything more efficient, so here are some projects I 
                tried to build in this area.
        {/* Your bio goes here */}
      </p>
      <div className="social-icons">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          {/* GitHub Icon */}
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          {/* LinkedIn Icon */}
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
          {/* Twitter Icon */}
        </a>
        {/* Add more social icons as needed */}
      </div>
    </div>
  );
};

export default AboutMe;
