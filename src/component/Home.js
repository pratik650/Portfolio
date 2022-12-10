import React from 'react'
import './HomeStyle.css'
import img from '../Images/logo2.png'
import img1 from '../Images/coderdpreal.png'
import {Parallax} from "react-parallax"
import video from '../Images/Hacker.mp4'
import { Achievements } from './Achievements'


export const Home = () => {
  
  return (
    <div className="container-fluid" id="contmain">
      <div className="navbar fixed-top">
        <img id="pklogo" className="img-fluid" src={img} alt="Images" />

        {/* Say hello button at the top */}

        <a href={"/contact"}>
          <div id="container">
            <button id="btn1" class="learn-more">
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">Say Hello</span>
            </button>
          </div>
        </a>
      </div>

      <div className="ParallaxVideo">
        <video autoPlay muted loop id="Videobg">
          <source src={video} type="video/mp4"></source>
        </video>
        <center id="afterheader">
          <h2 class="animate-charcter">Web Designer & Mern Developer</h2>
        </center>
      </div>

      <div id="Introdiv">
        {/* Introdiv part 1 */}
        
        
              <p id="heading">HEY, I'M PRATIK KUMBHKAR</p>
            
            <center>
              <p id="Paragraph">
                I am an undergraduate professional, a web design enthusiast and
                love translating design onto our screens with the help of code.
                Implementation is easy but designing an interface which speaks
                with the user is the difficult part & I love my profession as it's my passion.
              </p>
            </center>
   
      
      </div>
      <Achievements />
      <div></div>
    </div>
  );
}
