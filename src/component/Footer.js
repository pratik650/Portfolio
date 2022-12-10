import React from 'react'
import './footer.css'
import instagram from '../Images/insta.png'
import linkdn from '../Images/linkedin.png'
import github from '../Images/github.png'


export const Footer = () => {
  return (
    <div className="container-fluid" id="footbottom">
      
      <footer className="" id="myfooter">
        <ul className='social_icon'>
          <li><a href=''><img src={instagram}/></a></li>
          <li><a href=''><img src={linkdn}/></a></li>
          <li><a href=''><img src={github}/></a></li>
          
        </ul>
        <p>© PK Developers Official</p>
      </footer>

    </div>
  );
}
