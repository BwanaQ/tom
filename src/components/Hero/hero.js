import React from 'react';
import './hero.css'
import bg from '../../assets/hero-bg.png'
import {Link} from 'react-scroll';
import briefCaseImg from '../../assets/briefcase.png'

const Hero = () => {
  return (
    <section id='hero'>
        <div className="heroContent">
            <span className="hello">Hello,</span>
            <span className="heroText">I'm <span className="heroName">Tom Hunja</span><br/>A Full-stack developer</span>
            <p className="heroParagraph">With years of building pixel perfect solutions for the web and <br />beyond.</p>
            <Link><button className="btn"><img src={briefCaseImg} alt="briefcase" className='briefCaseButtonImage'/>Download Resume</button></Link>
        </div>
        <img src={bg} alt="my profile" className="bg" />
    </section>
  );
}

export default Hero;
