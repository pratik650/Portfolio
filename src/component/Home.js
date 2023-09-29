import React from 'react'
import './CSS/HomeStyle.css'
import img from '../Images/logo2.png'
import { Parallax } from "react-parallax"
import video from '../Images/Hacker.mp4'
import { Footer } from './Footer'
import { Skill } from './Skill'
import { Link } from 'react-router-dom'
import Typewriter from 'typewriter-effect'

export const Home = () => {

  return (
    <div className="container-fluid" id="contmain">
      <div className="navbar fixed-top">
        <img id="pklogo" className="img-fluid" src={img} alt="Images" />

        {/* Say hello button at the top */}
        <Link to="/contact">

          <div id="container">
            <button id="btn1" class="learn-more">
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">Say Hello</span>
            </button>
          </div>

        </Link>
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

        <div id="heading">
  <Typewriter
    options={{
      strings: [
        '<span style="color: #5DEDCC;">Hey!!</span>',
        '<span style="color: #5DEDCC;">I\'M PRATIK KUMBHKAR...</span>',
      ],
      autoStart: true,
      loop: true,
    }}
  />
</div>

        <center>
          <p id="Paragraph">
            A Results-oriented and analytically-driven individual with a passion for problem-solving and leveraging quantitative models which drive effective solutions. Presently Seeking a challenging opportunity where I can apply my expertise in analyzing processes, optimizing efficiency, and generating actionable insights to contribute to the organizational success and its growth along with mine.

          </p>
        </center>

      </div>
      <Skill/>

      <Footer />

    </div>
  );
}
