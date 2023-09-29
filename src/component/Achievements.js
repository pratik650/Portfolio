import React from 'react'
import './CSS/Achieve.css'
import { Projects } from './Projects'


export const Achievements = () => {
  return (
    <div className="container-fluid" id="contmain">
      <center>
        <div className="Acheader">Achievements</div>
      </center>
      <div className="div2Ach">
        <ul>
          <li>Smart India Hackathon Finalist</li>
          <li>Codechef competetive programming Executive Member</li>
          <li>500+ Coding questions on Codechef,Leetcode,Gfg</li>
        </ul>
      </div>
      <Projects />
    </div>
  );
}
