import React from 'react';
import './works.css'
import portfolio1 from '../../assets/portfolio.png'
import portfolio2 from '../../assets/portfolio2.png'
import portfolio3 from '../../assets/portfolio3.png'
import portfolio4 from '../../assets/portfolio4.png'

const Works = () => {
  return (
    <section id="works">
        <h2 className="worksTitle">Portfolio</h2>
        <span className="worksDesc">Explore some of my diverse range of projects and creations showcased in the portfolio section below.</span>
        <div className="worksImgs">
            <img src={portfolio1} alt="picha safari website" className="workImg" />
            <img src={portfolio2} alt="hotel san marino" className="workImg" />
            <img src={portfolio3} alt="picha safari dashboard" className="workImg" />
            <img src={portfolio4} alt="WELC chatbot" className="workImg" />
            <img src={portfolio1} alt="picha safari website" className="workImg" />
            <img src={portfolio2} alt="hotel san marino" className="workImg" />
        </div>
        <button className="worksBtn">View More</button>
    </section>
  );
}

export default Works;
