import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import './contact.css';
import client1 from '../../assets/client-1.png';
import client2 from '../../assets/client-2.webp';
import client3 from '../../assets/client-3.png';
import linkedIn from '../../assets/linkedin.png';
import github from '../../assets/github.png';

const Contact = () => {
  const form = useRef();
  const recaptchaRef = useRef();
  const siteKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY;
  const sendEmail = (e) => {
    e.preventDefault();

    // Verify reCAPTCHA response
    recaptchaRef.current.executeAsync().then((token) => {
      emailjs
        .sendForm('tom_hunja_portfolio', 'template_v8ztf4e', form.current, {
          publicKey: 'fDqtspqunmXi2ivGX',
          'g-recaptcha-response': token, // Add reCAPTCHA token to the request
        })
        .then(
          () => {
            console.log('SUCCESS!');
            alert('Your Email has been Sent.');
            e.target.reset();
          },
          (error) => {
            console.log('FAILED...', error.text);
          }
        );
    });
  };

  return (
    <section id="contactPage">
      <div id="clients">
        <span className="contactPageTitle">Happy Clients</span>
        <br />
        <br />
        <span className="clientDesc">Some of the notable clients I have had the opportunity to work with include</span>
        <div className="clientImgs">
          <img src={client1} alt="Picha safari" className="clientImg" />
          <img src={client3} alt="Workfleek Technologies" className="clientImg" />
          <img src={client2} alt="Hotel San Marino Kitui" className="clientImg" />
        </div>
      </div>
      <div id="contact">
        <span className="contactPageTitle">Contact Me</span>
        <br />
        <br />
        <span className="contactDesc">Feel free to reach out to me directly for collaborations, inquiries, or just to say hello!</span>
        <form ref={form} className="contactForm" onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your Name" name="from_name" />
          <input type="email" className="email" placeholder="Your Email" name="from_email" />
          <textarea name="message" className="msg" placeholder="Your Message" rows="5"></textarea>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey = {siteKey}
            size="invisible"
            badge="bottomright"
          />
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
