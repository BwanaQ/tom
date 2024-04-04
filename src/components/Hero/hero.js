import React from 'react';
import './hero.css'
import bg from '../../assets/hero-bg.png'
import {Link} from 'react-scroll';
import briefCaseImg from '../../assets/briefcase.png'
import pdfFile from '../../assets/TOM+HUNJA+RESUME.pdf'
const Hero = () => {
  const downloadPdf = () => {
    // Using the imported pdfFile
    const pdfUrl = pdfFile;
    
    // Creating a temporary anchor element
    const link = document.createElement('a');
    link.href = pdfUrl;
    
    // Setting the download attribute and file name
    link.download = 'Tom Hunja Resume.pdf';
    
    // Simulating a click to trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section id='hero'>
        <div className="heroContent">
            <span className="hello">Hello,</span>
            <span className="heroText">I'm <span className="heroName">Tom Hunja</span><br/>A Full-stack developer</span>
            <p className="heroParagraph">With years of building pixel perfect solutions for the web and <br />beyond.</p>
            <Link><button className="btn" onClick={downloadPdf}><img src={briefCaseImg} alt="briefcase" className='briefCaseButtonImage'/>Download Resume</button></Link>
        </div>
        <img src={bg} alt="my profile" className="bg" />
    </section>
  );
}

export default Hero;
