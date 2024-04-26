import React, { useState } from 'react';
import './style/About.css';
import profileImage from './loadstar_logo.png';
import { useInView } from 'react-intersection-observer';

const TabContent = ({ title, content }) => (
  <>
    <h3 style={{ color: '#3498db', fontSize: '1.5em', marginBottom: '0.5em' }}>{title}</h3>
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
    about: {
      title: "About me",
      content: "Third year undergraduate computer engineering student"
    },
    skills: {
      title: "Technical Skills",
      content: "Proficient in Python, JavaScript, and other programming languages..."
    },
    experience: {
      title: "Professional Experience",
      content: "Worked as a developer in various projects involving complex backend systems..."
    },
    education: {
      title: "Educational Background",
      content: "Completed a degree in Computer Science with a focus on software engineering..."
    },
    projects: {
      title: "Recent Projects",
      content: "Developed an award-winning app that solves real-world problems..."
    }
  };

  return (
    <section id="about" className={`about-section ${inView ? 'visible' : ''}`} ref={ref}>
      <div className="container">
        <div className="tabs-container">
          <div className="tab">
            {Object.keys(tabs).map((tab) => (
              <button
                key={tab}
                className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
          <div className="tab-content">
            <TabContent
              title={tabs[activeTab].title}
              content={tabs[activeTab].content}
            />
          </div>
        </div>
        <div className="image-container">
          <img src={profileImage} alt="Profile image" className="responsive-image"/>
        </div>
      </div>
    </section>
  );
};

export default About;