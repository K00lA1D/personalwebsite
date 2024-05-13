import React, { useState } from 'react';
import './style/WorkExperience.css';
import intel_logo from './intel_logo.png'
import loadstar_logo from './loadstar_logo.png'
import { useInView } from 'react-intersection-observer';

const WorkExperience = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2  
  });

  const jobs = [
    {
        company: 'Intel Corporation',
        title: 'Soc Logic Design Engineer Intern',
        description: `-Developed a multi-script consolidation program using Python, Bash, Perl to streamline the validation testing of the project SOC, reducing setup time over 90%
        -Ran customizable regressions on several chip designs and models, and then populate and share data through outlook in html, text, and xlsx using Python
        -Utilized Microsoft Azure to automate 100+ regressions into Power Bi reports, cutting down the generation time from hours to near seconds
        -Formatted these reports into the network sharepoint, allowing data-driven decision-making from management
        -Developed 4+ SystemVerilog projects, each with tailored modules and testbenches, simulated them through VCS, conducted waveform analysis through Verdi
        -Configured 200+ IP repositories to their appropriate format by analyzing the structure of RTL files and simulating through VCS
        `,
        image: intel_logo,
        link: "https://www.intel.com/content/www/us/en/homepage.html"
      },
    {
        company: 'Loadstar Sensors',
      title: 'Software Engineer Intern',
      description: `-Developed Python cross-platform programs using serial communication to display and analyze multi-channel data from 20+ inputs
      -Compatible with all Loadstar products, including both capacitive and resistive variations devices of different units (force/pressure/temperature/displacement/voltage) 
      -Capable of reading and plotting continuous data of up to 1k Hz, displaying results in fully customizable layout
      -Facilitated the CEO and Head of Marketing in executing their responsibilities
      -Corrected 3 bugs in current company developed software programs, enhancing stability for end users
      -Organized, assembled, and calibrated orders with state-of-the-art Instron machines for shipment
      -Awarded as the most valuable intern directly from the CEO
        `,
       image: loadstar_logo,
        link: "https://www.loadstarsensors.com/"
    },
    {
        company: 'Loadstar Sensors',
        title: 'Technical Associate',
        description: `-Assembled and flashed 100+ Raspberry Pi touch display computers with custom operating system configurations, including company logo boot-up and program integration
        -Expedited the generation of invoices and order preparation for streamlined shipping processes
        -Diagnosed and resolved hardware and software malfunctions in 5+ laptop and desktop computers
        `,
        image: loadstar_logo,
        link: "https://www.loadstarsensors.com/"
      }
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
        />
      ))}
      </div>
    </div>
  );
};

const ExperienceCard = ({ experience, onClick, isExpanded }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1  
  });

  return (
    <div className={`WorkExperience-Card ${inView ? 'visible' : ''}`} onClick={onClick} ref={ref}>
      <div className="WorkExperience-Content">
        <a href={experience.link} class="WorkExperience-Card-Link">
          <h3 className="WorkExperience-Header">{experience.company} </h3>
          <h3 className="WorkExperience-SubHeader">{experience.title}</h3>
          <p>{experience.description}</p>
        </a>
      </div>
      <img src={experience.image} alt={`${experience.title} image`} className="WorkExperience-Image"/>
    </div>
  );
};
export default WorkExperience;

