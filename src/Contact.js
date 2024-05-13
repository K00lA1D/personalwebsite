import React, { useState } from 'react';
import './style/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
    const { ref, inView } = useInView({
      triggerOnce: false,
      threshold: 0.1  
    });
  
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});
    const [isTextareaFocused, setIsTextareaFocused] = useState(false);
    const maxLength = 150;
  
    const validateForm = () => {
      let tempErrors = {};
      let formIsValid = true;
  
      if (!name) {
        formIsValid = false;
        tempErrors["name"] = "Please enter a name";
      } else if (name.length > 20) {
        formIsValid = false;
        tempErrors["name"] = "Name must be under 20 characters";
      }
  
      if (!email) {
        formIsValid = false;
        tempErrors["email"] = "Please enter an email";
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        formIsValid = false;
        tempErrors["email"] = "Please enter a valid email";
      }
  
      if (!message) {
        formIsValid = false;
        tempErrors["message"] = "Please enter a message";
      } else if (message.length > maxLength) {
        formIsValid = false;
        tempErrors["message"] = `Message must be under ${maxLength} characters`;
      }
  
      setErrors(tempErrors);
      return formIsValid;
    };
  
    const handleMessageChange = (event) => {
      if (event.target.value.length <= maxLength) {
        setMessage(event.target.value);
        setErrors({ ...errors, message: '' });
      }
    };
  
    const handleSubmit = async (e) => {
        /*
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
      */
    };

    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = '/Sid_Nair_Resume_2024.pdf'; 
        link.download = 'Sid_Nair_Resume_2024.pdf'; 
        link.click();
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
              className="Contact-Input"
            />
            {errors.name && <div className="tooltip">{errors.name}</div>}
            
            <input 
              type="email" 
              value={email} 
              onChange={(e) => { setEmail(e.target.value); setErrors({...errors, email: ''}); }}
              placeholder="Email"
              className="Contact-Input"
            />
            {errors.email && <div className="tooltip">{errors.email}</div>}
  
            <textarea 
              value={message} 
              onChange={handleMessageChange}
              onFocus={() => setIsTextareaFocused(true)}
              onBlur={() => setIsTextareaFocused(false)}
              placeholder="Message"
              className="Contact-Input contact-textarea"
            />
            {errors.message && <div className="tooltip">{errors.message}</div>}
            {isTextareaFocused && (
              <div className="char-count">{maxLength - message.length} characters left</div>
            )}
  
            <button type="submit" className="Contact-Button">Send</button>
          </form>
          <div className="Contact-Info">
            <p><FontAwesomeIcon icon={faPhone} /> 415-933-1361</p>
            <p><FontAwesomeIcon icon={faEnvelope} /> sidnair2003@gmail.com</p>
            <div className="social-links">
              {/*<a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>*/}
              {/*<a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>*/}
              <a href="https://www.linkedin.com/in/siddhartha-n-0b5601226" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
              <a href="https://github.com/K00lA1D" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
              <button className="Download-Button" onClick={downloadResume}>Download Resume</button>
            </div>

          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;
