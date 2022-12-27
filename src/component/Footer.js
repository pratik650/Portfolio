import React from 'react'
import github from '../Images/github.png'
import './footer.css'
import  LinkedIn  from '../Images/linkedin.png';
import Instagram from '../Images/insta.png'

export const Footer = () => {
  return (
    <div>
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="footer-col">
              <h4>Pratik Kumbhkar</h4>
              <ul>
                <li>
                  Hello I am an Enthusiast web developer and content creator I
                  love to design the website with hight ui experience.
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Contact us</h4>
              <ul>
                <li>
                  <a class="mailto" href="mailto:pratikprajapati650@gmail.com">
                    pratikprajapati650@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:6266124546">+91-6266124546</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Hire me!</h4>
              <ul>
                <li>
                  <a href="https://drive.google.com/file/d/1rpL3f8p44zkWDhqvYietFCK0dErC1uQv/view?usp=sharing">
                    Resume
                  </a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>follow us</h4>
              <div class="social-links">
                <a href="https://github.com/pratik650">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="https://www.instagram.com/pratik9485/">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/pratik-kumbhkar-89a427214/">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
		<center><hr className='linelast'></hr></center>
		
        <div className='footer_bottom'>
          <h5>© pratikprajapati designs</h5>
        </div>
      </footer>
    </div>
  );
}
