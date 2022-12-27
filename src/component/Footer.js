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
  	 				<li><a href="#">Hello I am an Enthusiast web developer and content creator I love to design the website with hight ui experience.</a></li>
  	 				
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Contact us</h4>
  	 			<ul>
  	 				<li><a href="#">pratikprajapati650@gmail.com</a></li>
  	 				<li><a href="#">+91-6266124546</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Hire me!</h4>
  	 			<ul>
  	 				<li><a href="#">Resume</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
  	 				<a href="#"><i class="fab fa-facebook-f"></i></a>
  	 				<a href="#"><i class="fab fa-instagram"></i></a>
  	 				<a href="#"><i class="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>

    </div>
  );
}
