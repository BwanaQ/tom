import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'
import client1 from'../../assets/client-1.png'
import client2 from'../../assets/client-2.webp'
import client3 from'../../assets/client-3.png'
import linkedIn from'../../assets/linkedin_icon.png'
import github from'../../assets/github.png'

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
  
    // Validating form fields
    const name = form.current.from_name.value.trim();
    const email = form.current.from_email.value.trim();
    const message = form.current.message.value.trim();
  
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }
  
    // Validating email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    setLoading(true);
  
    emailjs
      .sendForm('tom_hunja_portfolio', 'template_v8ztf4e', form.current, {
        publicKey: 'fDqtspqunmXi2ivGX',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Your Email has been Sent.")
          e.target.reset();
          setLoading(false);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setLoading(false);
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
              <button type="submit" value="send" className={`submitBtn${loading ? ' loading' : ''}`} disabled={loading}>
                {loading ? <div className="spinner"></div> : 'Submit'}
              </button>
              <div className="links">
                <a href="https://www.linkedin.com/in/tom-hunja/" target="_blank" rel="noopener noreferrer"><img src={linkedIn} alt="LinkedIn" className="link" /></a>
                <a href="https://www.github.com/BwanaQ/" target="_blank" rel="noopener noreferrer"><img src={github} alt="Github" className="link" /></a>
              </div>
            </form>
        </div>
    </section>
  );
}
export default Contact;