import React from 'react'
import './Skill.css'
import { Achievements } from './Achievements'
import Typewriter from 'typewriter-effect'
import image1 from '../Images/pngwing.png'

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
                  strings: ["What", "can", "I do",],
                  color:"#5DEDCC",
                  autoStart: true,
                  loop: true,
                }}
              />
            </h3>
          </header>
          <div id="Headingfordp1">
            <h4 id="head1">Front End</h4>
            <p>
              I can develop a good User Interface using front end MERN
              technologies and non coding technologies too.
            </p>
          </div>
          <div id="Headingfordp2">
            <h4 id="head2">Back End</h4>
            <p>
             I have a good understanding of database connectivity, data manipulation and managment strategies.
            </p>
          </div>
        </center>
        <p></p>
      </div>
      <Achievements />
    </div>
  );
}
