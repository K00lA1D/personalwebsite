import './style/SectionStyles.css'
import React from 'react';
import { useInView } from 'react-intersection-observer';


const ExperienceCard = ({ experience }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1  
  });

  return (

    <div className={`section-card ${inView ? 'visible' : ''}`} ref={ref}>
      <img src={experience.image} alt={`${experience.title} image`} className="experience-image"/>
      <div className="section-content">
        <h3>{experience.company}</h3>
        <h3>{experience.title}</h3>
        <p>{experience.description}</p>
        <a href={experience.link} target="_blank" rel="noopener noreferrer">Learn more</a>
      </div>
    </div>
  );
};

export default ExperienceCard;

