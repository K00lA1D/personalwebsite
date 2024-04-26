import React from 'react';
import './style/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1  // Adjust threshold as needed for when the animation triggers
  });

  return (
    <section id="contact" className={`contact-section ${inView ? 'visible' : ''}`} ref={ref}>
      <h2 className="header">Contact Me</h2>
      <div className="contact-container">
        <div className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </div>
        <div className="contact-info">
          <p><FontAwesomeIcon icon={faPhone} /> 415-933-1361</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> sidnair2003@gmail.com</p>
          <div className="social-links">
            <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://www.linkedin.com"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="https://www.github.com"><FontAwesomeIcon icon={faGithub} /></a>
          </div>
        </div>
      </div>
      {/* Additional content */}
    </section>
  );
};

export default Contact;
