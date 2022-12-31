import React from 'react'
import Typewriter from 'typewriter-effect'
import '../App.css'
import { Link } from 'react-router-dom'


export const HelloCode = () => {
  return <div id="Maintag" className='container'>
    <center>
      <h4>
    <div id="Typewriter">
    <Typewriter
  options={{
    strings: ['Hello Folks!', 'I am Pratik Kumbhkar','A Passionate Web Developer and Content Designer'],
    autoStart: true,
    loop: true,
  }}
/>
    </div>
    </h4>
    <Link id="btn" to="/home"><span data-attr="About">About</span><span data-attr="Me">Me</span></Link>
    </center>
    </div>;
}
