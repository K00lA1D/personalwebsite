import React, { useState } from 'react';
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

  const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let tempErrors = {};
        let formIsValid = true;

        // Name validation
        if (!name) {
            formIsValid = false;
            tempErrors["name"] = "Please enter a name";
        } else if (name.length > 20) {
            formIsValid = false;
            tempErrors["name"] = "Name must be under 20 characters";
        }

        // Email validation
        if (!email) {
            formIsValid = false;
            tempErrors["email"] = "Please enter an email";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            formIsValid = false;
            tempErrors["email"] = "Please enter a valid email";
        }

        // Message validation
        if (!message) {
            formIsValid = false;
            tempErrors["message"] = "Please enter a message";
        } else if (message.length > 200) {
            formIsValid = false;
            tempErrors["message"] = "Message must be under 200 characters";
        }

        setErrors(tempErrors);
        return formIsValid;
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (validateForm()) {
          const formData = {
              name: name,
              email: email,
              message: message
          };
  
          try {
              const response = await fetch('http://yourserver.com/api/sendmail', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(formData)
              });
  
              const responseData = await response.json();
              if (response.ok) {
                  alert('Email sent successfully!');
                  // Clear form or handle next steps
              } else {
                  alert('Failed to send email: ' + responseData.message);
              }
          } catch (error) {
              console.error('Failed to send email:', error);
              alert('Failed to send email. Please try again later.');
          }
      }
  };

  return (
    <section id="contact" className={`Contact ${inView ? 'visible' : ''}`} ref={ref}>
      <h2 className="Contact-Header">Contact Me</h2>
      <div className="Contact-Container">
      <form className="Contact-Form" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => { setName(e.target.value); setErrors({...errors, name: ''}); }}
                    placeholder="Your Name"
                />
                {errors.name && <div className="tooltip">{errors.name}</div>}
                
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => { setEmail(e.target.value); setErrors({...errors, email: ''}); }}
                    placeholder="Email"
                />
                {errors.email && <div className="tooltip">{errors.email}</div>}

                <textarea 
                    value={message} 
                    onChange={(e) => { setMessage(e.target.value); setErrors({...errors, message: ''}); }}
                    placeholder="Message"
                />
                {errors.message && <div className="tooltip">{errors.message}</div>}

                <button type="submit" className="Contact-Button">Send</button>
            </form>
        <div className="Contact-Info">
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
