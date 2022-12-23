import React from 'react'
import Typewriter from 'typewriter-effect'
import '../App.css'
import { Link } from 'react-router-dom'


export const HelloCode = () => {
  return <div id="Maintag" className='container'>
    <center>
      <h3>
    <div id="Typewriter">
    <Typewriter
  options={{
    strings: ['Hello Peers', 'My name is Pratik Kumbhkar','I am The Web Developer and Content designer'],
    autoStart: true,
    loop: true,
  }}
/>
    </div>
    </h3>
    <Link id="btn" to="/home"><span data-attr="About">About</span><span data-attr="Me">Me</span></Link>
    </center>
    </div>;
}
