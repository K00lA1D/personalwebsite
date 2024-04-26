import React from 'react';
//import './style/SectionStyles.css';
import intel_logo from './intel_logo.png'
import loadstar_logo from './loadstar_logo.png'
import ExperienceCard from './ExperienceCard.js'

const WorkExperience = () => {
  const jobs = [
    {
        company: 'Intel Corporation',
        title: 'Soc Logic Design Engineer Intern',
        description: `-Developed a multi-script consolidation program using Python, Bash, 
        Perl to streamline the validation testing of the project SOC, reducing setup time over 90%`,
        image: intel_logo,
        link: "https://www.intel.com/content/www/us/en/homepage.html"
      },
    {
        company: 'Loadstar Sensors',
      title: 'Software Engineer Intern',
      description: `-Developed Python cross-platform programs using serial communication to display and analyze multi-channel data from 20+ inputs
      -Compatible with all Loadstar products, including both capacitive and resistive variations devices of different units (force/pressure/temperature/displacement/voltage)  `,
       image: loadstar_logo,
        link: "https://www.loadstarsensors.com/"
    },
    {
        company: 'Loadstar Sensors',
        title: 'Technical Associate',
        description: `-Assembled and flashed 100+ Raspberry Pi touch display computers with custom operating system configurations, including company logo boot-up and program integration
        -Expedited the generation of invoices and order preparation for streamlined shipping processes
        -Diagnosed and resolved hardware and software malfunctions in 5+ laptop and desktop computers`,
        image: loadstar_logo,
        link: "https://www.loadstarsensors.com/"
      }
  ];

  return (
    <div id="work-experience" className="section">
      <h2 className="header">Work Experience</h2>
      <div className="section-container">
        {jobs.map((job, index) => (
          <ExperienceCard key={index} experience={job} />
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;

