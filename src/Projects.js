import React from 'react';
import './style/Projects.css'
import navucsd from './nav_ucsd.png'
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1  
  });

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
    <a href={project.link} className="Project-Card-Link" ref={ref}>
      <div className={`Project-Card ${inView ? 'visible' : ''}`} ref={ref}>
        <div className="Project-Content">
            <h3 className="Project-Header">{project.title}</h3>
            <p>{project.description}</p>
        </div>
        <img src={project.image} alt={`${project.title} image`} className="Project-Image"/>
      </div>
    </a>
  );
};


export default Projects;
  