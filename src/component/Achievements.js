import React from 'react'
import './Achieve.css'
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
          <li>Codechef Executive Member</li>
          <li>150+ questions on Geeks for Geeks</li>
        </ul>
      </div>
      <Projects />
    </div>
  );
}
