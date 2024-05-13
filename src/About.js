import React, { useState } from 'react';
import './style/About.css';
import profileImage from './profilepic.jpg';
import { useInView } from 'react-intersection-observer';

const TabContent = ({ content }) => (
  <div dangerouslySetInnerHTML={{ __html: content }} />
);

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1  // Adjust as needed
  });

  const tabs = {
    skills: {
      content: `
        <p><strong class="blue-text">Programming Languages:</strong> Python, Java, JavaScript, React, C, C++, Verilog/SystemVerilog, MATLAB, Assembly</p>
        <p><strong class="blue-text">Software Tools:</strong> ModelSim, Intel Quartus, Vivado, VCS, Verdi, GitHub, Git, Visual Studio Code</p>
        <p><strong class="blue-text">Cloud and Data Tools:</strong> Microsoft Azure, Power BI, SharePoint, Excel</p>
        <p><strong class="blue-text">Systems:</strong> WSL, Unix</p>
        <p><strong class="blue-text">Algorithms/Data Structures:</strong> Graphs, Trees, Arrays, Stacks, Queues, Hashing, Sorting, Dynamic Programming, Recursion</p>
      `
    },
    experience: {
      content: `<p><strong class="blue-text">Intel Corporation</strong> - SoC Logic Design Engineer Intern (June 2023 – December 2023)</p>
      
      <p><strong class="blue-text">Loadstar Sensors</strong> - Software Engineer, Hardware Technician Intern (June 2022 – September 2022)</p>
      
      <p><strong class="blue-text">Loadstar Sensors</strong> - Technical Associate (November 2019 – September 2021)</p>`
    },
    education: {
      content: `
      <p><strong class="blue-text">University of California, San Diego</strong> - B.S. in Computer Engineering (September 2021 – June 2025 (expected))</p>
      <p><strong class="blue-text">Relevant Coursework:</strong></p>
      <ul>
        <li><strong class="blue-text">Computer Science Courses:</strong> Object-Oriented Programming (CSE11), Data Structures/Algorithms (CSE12, CSE 21, 101), Systems Programming/Assembly (CSE 30), Digital Design (CSE 140, 140L)</li>
        <li><strong class="blue-text">Mathematics Courses:</strong> Discrete Math (CSE 20), Linear Algebra (MATH 18)</li>
        <li><strong class="blue-text">Physics Courses:</strong> Mechanics/Electromagnetism/Thermodynamics (PHYS 2A, 2B, 2C)</li>
        <li><strong class="blue-text">Engineering Courses:</strong> Analog Design/Systems (ECE 35, 45, 101)</li>
      </ul>
    `
    }
  };

  return (
    <section id="about" className={`About ${inView ? 'visible' : ''}`} ref={ref}>
      <div className="About-Container">
        <div className="Tabs-Container">
          <p> 
            Hi there! Welcome to my website. I’m Sid Nair, a third-year Computer Engineering student at UCSD. 
            I am passionate about software development, system design, and data analysis. 
            I love tackling complex problems and am always eager to learn new technologies. 
            My goal is to drive innovation and excellence in every project I undertake.
          </p>
          <div className="Tab">
            {Object.keys(tabs).map((tab) => (
              <button
                key={tab}
                className={`Tab-Button ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
          <div className="Tab-Content">
            <TabContent
              content={tabs[activeTab].content}
            />
          </div>
        </div>
        <div className="Image-Container">
          <img src={profileImage} alt="Profile image" className="Responsive-Image"/>
        </div>
      </div>
    </section>
  );
};

export default About;
