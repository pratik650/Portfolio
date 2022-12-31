import React from 'react'
import './Projects.css'
import { Language } from './Language'

export const Projects = () => {
  return (
    <div className="container-fluid" id="contmain">
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
          <li>Scietific Calculator</li>
        </ul>
        </div>
      </div>
      <Language/>
    </div>
    
  );
}
