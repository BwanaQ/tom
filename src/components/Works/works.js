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
          <div className="workImgContainer">
            <img src={portfolio1} alt="picha safari website" className="workImg" />
            <div className="workImgOverlay">
                <a href="https://pichasafari.co.ke" target="_blank" rel="noopener noreferrer"><span className="overlayText">Picha Safari</span></a>
            </div>
          </div>
          <div className="workImgContainer">
            <img src={portfolio2} alt="hotel san marino" className="workImg" />
            <div className="workImgOverlay">
                <a href="https://hotelsanmarino.co.ke/" target="_blank" rel="noopener noreferrer"><span className="overlayText">Hotel San Marino <br />Kitui</span></a>
            </div>
          </div>
          <div className="workImgContainer">
            <img src={portfolio3} alt="picha safari dashboard" className="workImg" />
            <div className="workImgOverlay">
                <a href="https://pichasafari.co.ke/dashboard" target="_blank" rel="noopener noreferrer"><span className="overlayText">Picha Safari Dashboard</span></a>
            </div>
          </div>
          <div className="workImgContainer">
            <img src={portfolio4} alt="WELC chatbot" className="workImg" />
            <div className="workImgOverlay">
                <a href="https://welc.wipo.int/" target="_blank" rel="noopener noreferrer"><span className="overlayText">WELc <br />Chatbot</span></a>
            </div>
          </div>
          <div className="workImgContainer">
            <img src={portfolio1} alt="picha safari website" className="workImg" />
            <div className="workImgOverlay">
                <a href="https://pichasafari.co.ke" target="_blank" rel="noopener noreferrer"><span className="overlayText">Picha Safari</span></a>
            </div>
          </div>
          <div className="workImgContainer">
            <img src={portfolio2} alt="hotel san marino" className="workImg" />
            <div className="workImgOverlay">
                <a href="https://hotelsanmarino.co.ke/" target="_blank" rel="noopener noreferrer"><span className="overlayText">Hotel San Marino <br />Kitui</span></a>
            </div>
          </div>
        </div>
        <button className="worksBtn">View More</button>
    </section>
  );
}

export default Works;
