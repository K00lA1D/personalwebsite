import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import WorkExperience from './WorkExperience';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import './style/App.css'

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
      <NavBar scrollToSection={scrollToSection} />
      <Home />
      <About />
      <WorkExperience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;