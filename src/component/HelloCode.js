import React from 'react'
import Typewriter from 'typewriter-effect'
import '../App.css'


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
    <a id="btn" href={'/home'}><span data-attr="About">About</span><span data-attr="Me">Me</span></a>
    </center>
    </div>;
}
