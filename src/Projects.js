import React from 'react';
import './style/SectionStyles.css'
import navucsd from './nav_ucsd.png'
import ProjectCard from './ProjectCard.js'; // Make sure the path is correct

const Projects = () => {
  const projects = [
    {
      title: 'Navigate UCSD',
      tag: 'something',
      description: `Web based application for navigate UCSD given schedule`,
      image: navucsd,
      link: "https://navigateucsd-hojmf88c8-sid-nairs-projects.vercel.app/",
    },
    {
      title: 'Navigate UCSD',
      tag: 'something',
      description: `Web based application for navigate UCSD given schedule`,
      image: navucsd,
      link: "https://navigateucsd-hojmf88c8-sid-nairs-projects.vercel.app/",
    },
    {
        title: 'FPGA Project',
        tag: 'something',
        description: `Project using Diligent Basys 3 FPGA board`,
        image: navucsd,
        link: "https://navigateucsd-hojmf88c8-sid-nairs-projects.vercel.app/"
      }
  ];
  
  return (
    <div id="projects" className="section">
      <h2>Projects</h2>
      <div className="section-container">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
  