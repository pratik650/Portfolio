import React from 'react'
import './Language.css'
import { Cards } from './card'
import { Studentdata } from './Skillsdata'
import arrow from '../Images/arow1.png'

export const Language = () => {
  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <div className="container-fluid">
      <center>
        <div className="Acheader">Skills & Languages</div>
      </center>
      <img className='key' src={arrow} alt="img" />
      <div className='Maincontainer'>
       
      <div className='wrapper'>
     
        <Cards
        imgsrc = {Studentdata[0].imgsrc}
        title  = {Studentdata[0].title}
        description = {Studentdata[0].description}
        link = {Studentdata[0].link}
        />
        <Cards
        id="card2"
        imgsrc = {Studentdata[1].imgsrc}
        title  = {Studentdata[1].title}
        description = {Studentdata[1].description}
        link = {Studentdata[1].link}
        />
         <Cards
        imgsrc = {Studentdata[3].imgsrc}
        title  = {Studentdata[3].title}
        description = {Studentdata[3].description}
        link = {Studentdata[3].link}
        />
        <Cards
        imgsrc = {Studentdata[2].imgsrc}
        title  = {Studentdata[2].title}
        description = {Studentdata[2].description}
        link = {Studentdata[2].link}
        />
       
        </div>
        </div>
      </div>
  );
}
