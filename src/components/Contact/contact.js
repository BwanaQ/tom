import React from 'react';
import './contact.css'
import client1 from'../../assets/client-1.png'
import client2 from'../../assets/client-2.webp'
import client3 from'../../assets/client-3.png'
const Contact = () => {
  return (
    <section id="contactPage">
        <div id="clients">
            <span className="contactPageTitle">Happy Clients</span>
            {/* <p className="clientDesc">Some of the notable clients I have had the opportunity to work with include</p> */}
            <div className="clientImgs">
                <img src={client1} alt="Picha safari" className="clientImg" />
                <img src={client3} alt="Workfleek Technologies" className="clientImg" />
                <img src={client2} alt="Hotel San Marino Kitui" className="clientImg" />
            </div>
        </div>
        <div id="contact">

        </div>
    </section>
  );
}

export default Contact;
