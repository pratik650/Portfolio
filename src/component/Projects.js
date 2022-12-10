import React from 'react'
import './Projects.css'
import img7 from '../Images/project.png'
import { Footer } from './Footer';

export const Projects = () => {
  return (
    <div className="container-fluid" id="contmainer">
      <center>
        <div className="project_header">
          <div className="Acheader">Project</div>
        </div>
      </center>
      <div className="projects">
        <div className='projectlist'> 
        <ul>
          <li>Smart India Hackathon Finalist</li>
          <li>Codechef Executive Member</li>
          <li>150+ questions on Geeks for Geeks</li>
        </ul>
        </div>
        <img  className='img-fluid' id="projectimg" src={img7} alt="project img"/>
        
      </div>
      <Footer />
    </div>
  );
}
