import React from 'react';
import './style/Projects.css'
//import Basys3Demo from './Basys3_FullAdder_Demo.mp4';
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
      description: `
      <ul>
        <li>Designed front/backend application through React/Javascript</li>
        <li>Utilized Microsoft Azure Map API to animate user-defined, point-to-point paths across interactive schedule input</li>
        <li>Originally developed as 2024 Dimonad Hacks hackathon submission, later expanded into a complete project</li>
      </ul>
      `,
      image: navucsd,
      link: "https://navigateucsd.com/",
      githublink: "https://github.com/K00lA1D/navigateucsd"
    },
    {
      title: 'Digital Design Projects',
      subtitle: 'FPGA',
      tag: 'something',
      description: `
      <ul>
        <li>Implemented Verilog modules for 8-bit counter, 2-to-1 multiplexer, and 4-bit full adder</li>
        <li>Simulated, synthesized, and programmed bitstreams into FPGA through Vivado</li>
        <li>Utilized switches, buttons, and LEDs for real-time user interaction</li>
      </ul>
      `,
      image: navucsd,
      link: '/multi_video_player.html',
      githublink: "https://github.com/K00lA1D/FPGA"
    },
    {
      title: 'RISC V Processor Design',
      subtitle: 'FPGA',
      tag: 'something',
      description: `
      <ul>
        <li>RISC-V processor RTL model with modular design of components (Control Unit, ALU, Memory, Register, Program Counter)</li>
        <li>Supports all modern RISC-V register, immediate, load, and store instructions</li>
        <li>Simulated, synthesized, and programmed bitstreams into FPGA through Vivado</li>
        <li>LED indicators for real-time interaction and on-board reset functionality</li>
      </ul>
      `,
      image: navucsd,
      link: '/multi_video_player.html',
      githublink: "https://github.com/K00lA1D/FPGA/tree/main/Basys3/RISCV"

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
        <div dangerouslySetInnerHTML={{ __html: project.description }} />
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
  