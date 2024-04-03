import React from 'react';
import './footer.css'
import heart from '../../assets/heart.png'

const Footer = () => {
  return (
    <footer className="footer">
        &copy; 2024. Built with lots of<img src={heart} alt="love" className="heart" />by <a href="/" target="_self" rel="noopener noreferrer">Tom Hunja</a>
    </footer>
  );
}

export default Footer;
