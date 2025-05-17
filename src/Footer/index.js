import React from 'react'
import line from "../assets/line.png"
import phone from "../assets/phone.png"
import email from "../assets/email.png"
function Footer() {
return (
 <div className="back mt-5">
  <div className="footer">
    <div className="box">
      <div className="container cont-details">
        <h1 className="widget-title text-center">Get in touch</h1>
        <img src={line} alt="line" className="line mx-auto d-block" />
        <div className="row">
          <div className="col-md-12">
            <ul className="social">
              <li>
                <a>
                <i class="fa-brands fa-facebook-f"></i>
                </a>
              </li>  
              <li>
                <a>
                <i class="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a>
                <i class="fa-brands fa-twitter"></i>
                </a> 
              </li>
              <li>
                <a>
                <i class="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
            </ul>  
            </div>
          </div>
      </div>
    </div>
    <div className="container py-5 a0s-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
    <div className="row">
      <div className="col-md-12">
        <div className="widget text-center">
          <h3 className="widget-title">Why Choose Us?</h3>
          <img src={line} alt="line"/>
          <h4 className="text-light custom-line-hgt">2+ Years Experiences in Software Development</h4>
          <hr className="custom-hr"/>
          </div>
      </div>
   
    </div>
    <div className="row">
      <div className="col-md-4">
        <div className="whyus-content">
          <ul>
            <li>&raquo; Honest & Valuable Advice</li>
            <li>&raquo; Expirenced Designers</li>
            <li>&raquo;  We provide quick response</li>
            <li>&raquo;  Focusing on client success</li>
            <li>&raquo;  Competitive Prices</li>
          </ul>
        </div>
      </div>
      <div className="col-md-4"> <div className="whyus-content">
          <ul>
            <li> &raquo; Fully Managed Hosting </li>
            <li>&raquo; Focus on innovation</li>
            <li>&raquo;  Dedicated teams</li>
            <li>&raquo;  We Provide Online Marketing </li>
            <li>&raquo;  Unconditional Support</li>
          </ul>
        </div></div>
      <div className="col-md-4"> <div className="whyus-content">
          <ul>
            <li>&raquo; Advanced use of technology</li>
            <li>&raquo; Deliver Project On Time</li>
            <li>&raquo;  Available 24×7</li>
            <li>&raquo;  We Provide SEO Services</li>
            <li>&raquo;  We are known by our work.</li>
          </ul>
        </div></div>
    </div>
    </div>
    <div className="footer-bottom py-5 swap0">
  <div className="container">
    <div className="row">
      <div className="col-sm-4">
        <div className="widget">
          <h3 className="widget-titleh">Quik Link</h3>
          <ul>
            <li>
              <a href="index.html">&raquo; Home</a>
            </li>
            <li>
              <a href="index.html">&raquo; About Us</a>
            </li>
            <li>
              <a href="index.html">&raquo; Career</a>
            </li>
            <li>
              <a href="index.html">&raquo; Free Quote</a>
            </li>
            <li>
              <a href="index.html">&raquo; Support</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="widget">
          <h3 className="widget-titleh">Our Services</h3>
          <ul>
            <li>
              <a href="index.html">&raquo; Website Designing</a>
            </li>
            <li>
              <a href="index.html">&raquo; Graphics Designing</a>
            </li>
            <li>
              <a href="index.html">&raquo; Digital Marketing</a>
            </li>
            <li>
              <a href="index.html">&raquo; CMS Customization</a>
            </li>
            <li>
              <a href="index.html">&raquo; E-Commerce Development</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="widget">
          <h3 className="widget-titleh">Quick Contact</h3>
          <ul>
            <li>
              <img src={phone} alt="phone" />  +91-8409620653
            </li>
            <li>
              <img src={phone} alt="phone" />  +91-9021071626 
            </li>
            <li>
              <img src={email} alt="phone" />    vertechxa@gmail.com 
            </li>
            <li>
            <i class="fa-solid fa-location-dot"></i>  Office Number
            308, City Vista Tower, Kharadi, Pune, India.
             
            </li>
            <li>
            Pin Code - 411014
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="footercopy">
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
      Copyrights © 2018-2022 Vertech
      <span className="footercopy-custom-color">xa</span>     Technology. All Rights Reserved.
      </div>
  </div>
</div>
  </div>
</div>
 </div>

  )
}

export default Footer;
