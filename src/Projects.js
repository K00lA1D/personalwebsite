import React from 'react';
import './style/Projects.css'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import navucsd from './NavUCSD.png'
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1  
  });

  const projects = [
    {
      title: 'Navigate UCSD',
      subtitle: 'Full-Stack Application',
      tag: 'something',
      description: `Web based application for navigate UCSD given schedule`,
      image: navucsd,
      link: "https://navigateucsd.com/",
      githublink: "https://github.com/K00lA1D/navigateucsd"
    },
    {
        title: 'Digital Design ',
        subtitle: 'FPGA',
        tag: 'something',
        description: `Project using Diligent Basys 3 FPGA board`,
        image: navucsd,
        link: "https://sidrnair.com",
        githublink: "https://github.com/K00lA1D/FPGA"
      }
  ];
  
  return (
    <div id="projects" className={`Project ${inView ? 'visible' : ''}`}  ref={ref}>
      <h2 className="Project-Header">Projects</h2>
      <div className="Project-Container">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1  
  });

  return (
    <div className={`Project-Card ${inView ? 'visible' : ''}`} ref={ref}>
      <div className="Project-Content">
        <h3 className="Project-Title">{project.title}</h3>
        <h4 className="Project-Subheader">{project.subtitle}</h4>
        <p>{project.description}</p>
      </div>
      <div className="Button-Container">
          <button 
            onClick={() => window.open(project.githublink, '_blank', 'noopener,noreferrer')}
            className="Project-Button"
          >
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </button>
          <button 
            onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
            className="Project-Button"
          >
            Demo
          </button>
      </div>
    </div>
  );
};



export default Projects;
  