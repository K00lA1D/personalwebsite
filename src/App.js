import React from 'react';
import Navbar from './NavBar';
import Home from './Home';
import About from './About';
import WorkExperience from './WorkExperience';
import Projects from './Projects';
import Contact from './Contact';

const App = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // This value can be adjusted to increase or decrease the gap
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="App">
      <Navbar scrollToSection={scrollToSection} />
      <main>
        <Home />
        <About />
        <WorkExperience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;