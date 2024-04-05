import React, { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

import './contact.css';
import client1 from'../../assets/client-1.png';
import client2 from'../../assets/client-2.webp';
import client3 from'../../assets/client-3.png';
import linkedIn from'../../assets/linkedin.png';
import github from'../../assets/github.png';

const Contact = () => {
  const form = useRef();
  const siteKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY;
  useEffect(() => {
    const loadReCaptchaScript = () => {
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
      script.async = true;
      document.body.appendChild(script);
    };

    loadReCaptchaScript();
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();

    // Execute reCAPTCHA v3 to get a token
    const token = await window.grecaptcha.execute('YOUR_SITE_KEY', { action: 'submit' }); // Replace YOUR_SITE_KEY with your actual reCAPTCHA v3 site key

    // Include the obtained token in the form data
    const formData = new FormData(form.current);
    formData.append('token', token);

    // Send the form data with the token to your backend for verification
    emailjs
      .sendForm('tom_hunja_portfolio', 'template_v8ztf4e', formData, {
        publicKey: 'fDqtspqunmXi2ivGX',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Your Email has been Sent.");
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id="contactPage">
      <div id="clients">
        <span className="contactPageTitle">Happy Clients</span>
        <br /><br />
        <span className="clientDesc">Some of the notable clients I have had the opportunity to work with include</span>
        <div className="clientImgs">
          <img src={client1} alt="Picha safari" className="clientImg" />
          <img src={client3} alt="Workfleek Technologies" className="clientImg" />
          <img src={client2} alt="Hotel San Marino Kitui" className="clientImg" />
        </div>
      </div>
      <div id="contact">
        <span className="contactPageTitle">Contact Me</span>
        <br /><br />
        <span className="contactDesc">Feel free to reach out to me directly for collaborations, inquiries, or just to say hello!</span>
        <form ref={form} className="contactForm" onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your Name" name="from_name" />
          <input type="email" className="email" placeholder="Your Email" name="from_email" />
          <textarea name="message" className="msg" placeholder="Your Message" rows="5"></textarea>
          <button type="submit" value="send" className="submitBtn">Submit</button>
          <div className="links">
            <a href="https://www.linkedin.com/in/tom-hunja/" target="_blank" rel="noopener noreferrer"><img src={linkedIn} alt="LinkedIn" className="link" /></a>
            <a href="https://www.github.com/BwanaQ/" target="_blank" rel="noopener noreferrer"><img src={github} alt="Github" className="link" /></a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
