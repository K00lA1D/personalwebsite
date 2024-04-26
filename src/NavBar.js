import React from 'react';
import './style/SectionStyles.css'

const NavBar = ({ scrollToSection }) => {
  return (
    <div className = "section">
      <nav className="NavBar">
      <button onClick={() => scrollToSection('home')}>Home</button>
      <button onClick={() => scrollToSection('about')}>About</button>
      <button onClick={() => scrollToSection('work-experience')}>Work Experience</button>
      <button onClick={() => scrollToSection('projects')}>Projects</button>
      <button onClick={() => scrollToSection('contact')}>Contact</button>
    </nav>
    </div>
  );
};

export default NavBar;