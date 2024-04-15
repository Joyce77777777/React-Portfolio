import React from 'react';
import './Portfolio.css'; // Make sure to import the CSS file

const projects = [
  {
    title: 'Surf Report',
    description: 'MERN Stack',
    imageUrl: '/path_to_surf_report_image.jpg', // Replace with the path to your image
    // Include other project details as necessary
  },
  {
    title: 'Pastel Puzzles',
    description: 'MERN Stack',
    imageUrl: '/path_to_pastel_puzzles_image.jpg', // Replace with the path to your image
    // Include other project details as necessary
  },
  // Add more projects as needed
];

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <h2>Portfolio</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

