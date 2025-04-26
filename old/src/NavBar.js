import React from 'react';
import './style/NavBar.css';

const NavBar = ({ scrollToSection }) => {
  return (
    <div className="NavBar">
      <span className="brand-name">Sid Nair</span>
      <div className="nav-buttons">
        <button onClick={() => scrollToSection('home')}>Home</button>
        <button onClick={() => scrollToSection('about')}>About</button>
        <button onClick={() => scrollToSection('work-experience')}>Work Experience</button>
        <button onClick={() => scrollToSection('projects')}>Projects</button>
        <button onClick={() => scrollToSection('contact')}>Contact</button>
      </div>
    </div>
  );
};

export default NavBar;