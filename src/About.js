import React, { useState } from 'react';
import './style/About.css';
import profileImage from './profilepic.jpg';
import { useInView } from 'react-intersection-observer';

const TabContent = ({content }) => (
  <>
    <p>{content}</p>
  </>
);

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1  // Adjust as needed
  });

  const tabs = {
    skills: {
      content: "Proficient in Python, JavaScript, and other programming languages..."
    },
    experience: {
      content: "Worked as a developer in various projects involving complex backend systems..."
    },
    education: {
      content: "Completed a degree in Computer Science with a focus on software engineering..."
    },
    projects: {
      content: "Developed an award-winning app that solves real-world problems..."
    }
  };

  return (
    <section id="about" className={`About ${inView ? 'visible' : ''}`} ref={ref}>
      <div className="About-Container">
        <div className="Tabs-Container">

          <p> My name is Sid and I'm a third year undergraduate student
            majoring in Computer Engineering at UCSD.
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