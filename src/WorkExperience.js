import React, { useState } from 'react';
import './style/WorkExperience.css';
import intel_logo from './intel_logo.png';
import loadstar_logo from './loadstar_logo.png';
import { useInView } from 'react-intersection-observer';

const WorkExperience = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const jobs = [
    {
      company: 'Intel Corporation',
      title: 'Soc Logic Design Engineer Intern',
      description: `
        <ul>
          <li>Streamlined SOC validation testing with a Python, Bash, and Perl script, reducing setup time by 90%</li>
          <li>Ran customizable regressions and shared data via Python in HTML, text, and xlsx formats</li>
          <li>Automated 100+ regressions into Power BI reports using Microsoft Azure</li>
          <li>Formatted reports into SharePoint for data-driven decision making</li>
          <li>Developed and simulated 4+ SystemVerilog projects using VCS and Verdi</li>
          <li>Configured 200+ IP repositories by analyzing RTL files and simulating through VCS</li>
        </ul>
      `,
      image: intel_logo,
      link: 'https://www.intel.com/content/www/us/en/homepage.html',
    },
    {
      company: 'Loadstar Sensors',
      title: 'Software Engineer Intern',
      description: `
        <ul>
          <li>Developed Python programs to display and analyze multi-channel data from 20+ inputs</li>
          <li>Ensured compatibility with capacitive and resistive devices</li>
          <li>Read and plotted continuous data up to 1k Hz in a customizable layout</li>
          <li>Assisted CEO and Head of Marketing in their responsibilities</li>
          <li>Fixed 3 software bugs, enhancing stability for end users</li>
          <li>Organized, assembled, and calibrated orders with Instron machines</li>
          <li>Awarded most valuable intern by the CEO</li>
        </ul>
      `,
      image: loadstar_logo,
      link: 'https://www.loadstarsensors.com/',
    },
    {
      company: 'Loadstar Sensors',
      title: 'Technical Associate',
      description: `
        <ul>
          <li>Assembled and configured 100+ Raspberry Pi touch display computers</li>
          <li>Streamlined invoice generation and order preparation</li>
          <li>Resolved hardware and software malfunctions in 5+ computers</li>
        </ul>
      `,
      image: loadstar_logo,
      link: 'https://www.loadstarsensors.com/',
    },
  ];

  const [expandedJobIndex, setExpandedJobIndex] = useState(null);

  const toggleJob = (index) => {
    setExpandedJobIndex(expandedJobIndex === index ? null : index);
  };

  return (
    <div id="work-experience" className={`WorkExperience ${inView ? 'visible' : ''}`} ref={ref}>
      <h2 className="WorkExperience-Header">Work Experience</h2>
      <div className="WorkExperience-Container">
        {jobs.map((job, index) => (
          <ExperienceCard
            key={index}
            experience={job}
            onClick={() => toggleJob(index)}
            isExpanded={expandedJobIndex === index}
          />
        ))}
      </div>
    </div>
  );
};

const ExperienceCard = ({ experience, onClick, isExpanded }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div className={`WorkExperience-Card ${inView ? 'visible' : ''}`} onClick={onClick} ref={ref}>
      <div className="WorkExperience-Content">
        <a href={experience.link} className="WorkExperience-Card-Link">
          <h3 className="WorkExperience-Header">{experience.company}</h3>
          <h4 className="WorkExperience-SubHeader">{experience.title}</h4>
          <div dangerouslySetInnerHTML={{ __html: experience.description }} />
        </a>
      </div>
      <img src={experience.image} alt={`${experience.title} image`} className="WorkExperience-Image" />
    </div>
  );
};

export default WorkExperience;
