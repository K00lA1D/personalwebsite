import React, { useState } from 'react';
import './style/About.css';
import profileImage from './profilepic.jpg';
import { useInView } from 'react-intersection-observer';

const TabContent = ({ content }) => (
  <div dangerouslySetInnerHTML={{ __html: content }} />
);

const About = () => {
  const [activeTab, setActiveTab] = useState('education');
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1  // Adjust as needed
  });

  const tabs = {
    education: {
      content: `
      <p><strong class="blue-text">University of California, San Diego</strong> — B.S. Computer Engineering <span style="color: #00BFFF; float: right;">(Expected) Spring 2025</span></p>
      <p><strong class="blue-text">Relevant Coursework:</strong></p>
      <ul style="list-style-type: none; padding: 0;">
        <li style="padding-left: 20px;"><strong class="blue-text">Digital and Hardware Design:</strong></li>
        <ul style="list-style-type: none; padding: 0;">
          <li style="padding-left: 40px;"><strong>CSE 140 - Components and Design Techniques for Digital Systems</strong> <span style="color: #00BFFF; float: right;">(Winter 2024)</span></li>
          <ul style="list-style-type: disc; padding-left: 60px;">
            <li>Digital logic design, Boolean logic, finite state machines, combinational and sequential logic, timing and canonical analysis</li>
          </ul>
          <li style="padding-left: 40px;"><strong>CSE 140L - Digital Design Laboratory</strong> <span style="color: #00BFFF; float: right;">(Winter 2024)</span></li>
          <ul style="list-style-type: disc; padding-left: 60px;">
            <li>Combinational logic, CAD FSM synthesis</li>
          </ul>
          <li style="padding-left: 40px;"><strong>ECE 111 - Advanced Digital Design Project</strong> <span style="color: #00BFFF; float: right;">(Spring 2024)</span></li>
          <ul style="list-style-type: disc; padding-left: 60px;">
            <li>Advanced digital systems, hazard elimination, CAD sync/async FSM synthesis, synchronization, pipelining, resource and timing analysis</li>
          </ul>
        </ul>
        <li style="padding-left: 20px;"><strong class="blue-text">Software Engineering:</strong></li>
        <ul style="list-style-type: none; padding: 0;">
          <li style="padding-left: 40px;"><strong>CSE 100 - Advanced Data Structures</strong> <span style="color: #00BFFF; float: right;">(Winter 2024)</span></li>
          <ul style="list-style-type: disc; padding-left: 60px;">
            <li>High-performance data structures and supporting algorithms</li>
          </ul>
          <li style="padding-left: 40px;"><strong>CSE 101 - Design and Analysis of Algorithms</strong> <span style="color: #00BFFF; float: right;">(Winter 2024)</span></li>
          <ul style="list-style-type: disc; padding-left: 60px;">
            <li>Design and analysis of efficient algorithms</li>
          </ul>
        </ul>
      </ul>
      `
    },
    skills: {
      content: `
      <p><strong class="blue-text">Programming Languages:</strong></p>
      <ul style="list-style-type: disc; padding-left: 20px; color: white;">
        <li>SystemVerilog, Verilog, C++, C, Python, Java, JavaScript, React, MATLAB, Assembly</li>
      </ul>
      <p><strong class="blue-text">Software Tools:</strong></p>
      <ul style="list-style-type: disc; padding-left: 20px; color: white;">
        <li>ModelSim, Quartus Prime, Vivado, VCS, Verdi, GitHub, Git, Visual Studio Code</li>
      </ul>
      <p><strong class="blue-text">Cloud and Data Tools:</strong></p>
      <ul style="list-style-type: disc; padding-left: 20px; color: white;">
        <li>Microsoft Azure, Power BI, SharePoint, Excel, WSL, Unix, Vercel</li>
      </ul>
      <p><strong class="blue-text">Algorithms/Data Structures:</strong></p>
      <ul style="list-style-type: disc; padding-left: 20px; color: white;">
        <li>Graphs, Trees, Arrays, Stacks, Queues, Hashing, Sorting, Dynamic Programming, Recursion</li>
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
            I am passionate about hardware and digital design, software development, and system design. 
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
