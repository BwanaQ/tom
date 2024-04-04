import React, { useState } from "react";import './navbar.css'
import logo from '../../assets/logo.png'
import contactImg from '../../assets/contact.png'
import hamburger from '../../assets/hamburger.png'
import {Link} from 'react-scroll';


const Navbar = () => {
  const [showMenu, setshowMenu] = useState(false);
  return (
    <nav className='navbar'>
        <a href="/" target="_self" rel="noopener noreferrer">
          <img src={logo} alt='Tom Hunja Logo' className='logo'/>
        </a>
        <div className="desktopMenu">
          <Link activeClass='active' to='hero' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
          <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Portfolio</Link>
          <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Clients</Link>
        </div>
        <button className="desktopMenuBtn" onClick={()=>{
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
          <img src={contactImg} alt="text Bubble" className="desktopMenuImg" />
          Contact Me
        </button>
        
        
        <img src={hamburger} alt='Menu' className='mobMenu' onClick={()=>setshowMenu(!showMenu)}/>
        <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
          <Link activeClass='active' to='hero' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>setshowMenu(false)}>Home</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>setshowMenu(false)}>About</Link>
          <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>setshowMenu(false)}>Portfolio</Link>
          <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-80} duration={500} className="ListItem" onClick={()=>setshowMenu(false)}>Clients</Link>
          <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-80} duration={500} className="ListItem" onClick={()=>setshowMenu(false)}>Contact</Link>
        </div> 
    </nav>
  )
}

export default Navbar;
