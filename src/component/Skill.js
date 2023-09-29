import React from 'react'
import './CSS/Skill.css'
import { Achievements } from './Achievements'
import Typewriter from 'typewriter-effect'
import image1 from '../Images/pratik.jpg'

export const Skill = () => {
  return (
    <div className="container-fluid" id="whatdo">
      <div>
        <div className="img-fuid" id="boyimg">
          <center>
            <img src={image1} alt="boydp" />
          </center>
        </div>
        <center>
          <header>
            <h3 className="typewriterh4">
              <Typewriter
                options={{
                  strings: ["My Tech-Stacks",],
                  color:"#5DEDCC",
                  autoStart: true,
                  loop: true,
                }}
              />
            </h3>
          </header>
          <div id="Headingfordp1">
            <h4 id="head1">Website Development</h4>
            <p>
            "I'm proficient in the MERN (MongoDB, Express.js, React, Node.js) stack, which equips me to develop modern, data-driven web applications efficiently."
            </p>
          </div>
          <div id="Headingfordp2">
            <h4 id="head2">Android Development</h4>
            <p>
            Experienced in designing and building native Android applications using Java.Proficient in developing user-friendly and responsive Android interfaces that adhere to best UI/UX practices.
            </p>
          </div>
        </center>
        <p></p>
      </div>
      <Achievements />
    </div>
  );
}
