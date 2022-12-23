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
          <li>Student's Corner</li>
          <li>Quiz Application</li>
          <li>Spotify Clone</li>
        </ul>
        </div>
       
      </div>
      <Footer />
    </div>
  );
}
