import React from 'react';
import './contact.css'
import client1 from'../../assets/client-1.png'
import client2 from'../../assets/client-2.webp'
import client3 from'../../assets/client-3.png'
import linkedIn from'../../assets/linkedin.png'
const Contact = () => {
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
            <form className="contactForm">
              <input type="text" className="name" placeholder="Your Name" />
              <input type="email" className="email" placeholder="Your Email" />
              <textarea name="message" className="msg" placeholder="Your Message" rows="5"></textarea>
              <button type="submit" value="send" className="submitBtn">Submit</button>
              <div className="links">
                <img src={linkedIn} alt="LinkedIn" className="link" />
              </div>
            </form>
        </div>
    </section>
  );
}

export default Contact;
