import './style/SectionStyles.css'
import React from 'react';
import { useInView } from 'react-intersection-observer';


const ProjectCard = ({ project }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1  
  });

  return (
    <a href={project.link} className="section-card-link" ref={ref}>
      <div className={`section-card ${inView ? 'visible' : ''}`}>
        <div className="section-header">
          <img src={project.image} alt={`${project.title} image`} className="project-image"/>
        </div>
        <div className="section-content">
            <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;

