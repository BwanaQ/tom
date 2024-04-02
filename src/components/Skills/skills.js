import React from 'react';
import './skills.css';
import pantone from '../../assets/pantone.png';
import layers from '../../assets/layers.png';
import laptop from '../../assets/laptop.png';

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillsTitle">What I do</span>
      <span className="skillsDescription">I build and maintain both the front-end and back-end components of web applications. This means I work on everything from designing user interfaces and creating responsive layouts using HTML, CSS, and JavaScript, to developing server-side logic, APIs, and databases.</span>
      <div className="skillBars">
      <div className="skillBar">
          <img src={pantone} alt="UI/UX Design" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={layers} alt="Front-end" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Front-end</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={laptop} alt="Back-end" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Back-end</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </section>
  );
} 

export default Skills;
