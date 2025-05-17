import React from 'react'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import line from "../../../assets/line.png";
import Hybrid from "../../../assets/software-customize.png";

function Customizesoftware() {
  return (
    <div>
      <div className="about-section1">
        <div className="container">
          <div className="menu">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <h1 className="mb-5">Customize Software</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section2">
        <div className="inner-section py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                    <div className="widget">
                        <img src={Hybrid} alt="Hybrid-img" className="img-fluid" />
                    </div>
                    </div>
                    <div className="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                    <div className="widget justify-text">
                        <h3 className="widget-title" style={{fontSize:"36px"}}>Customize Software</h3>
                        <img src={line} alt="line" className="line" />
 <p class="text-justify text-secondary" style={{fontSize: "16px"}}>A technology oriented and Pune based company, Vertech<span style={{color:"#da251d"}}>xa</span>        technology is one of the best software services companies providing you a customized solution. With a highly dedicated team, we deliver standard solutions to you.
						<br/><br/> Vertech<span style={{color:"#da251d"}}>xa</span> technology undergoes all phases of SDLC (Software Development Life Cycle) for dozens of custom solutions and renders software development and website designing services to the clients. Through SDLC phases which are planning, designing, creating, testing and delivering, we create software applications and websites with unmatched quality. We have been providing multi-dimensional IT services to our clients including online marketing and online website designing solutions. Other arenas of service we provide globally are content management system, SEO, e commerce solutions, enterprise portal solutions, web development and all custom web services.

						</p>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
<p class="text-justify text-secondary" style={{fontSize: "16px"}}>
						<br/> We are open, friendly and dynamic fostering latest technology and excellent working environment for our team.
						 We follow high standards to compete in the fast pace global market and provide sophisticated software solutions to our clients. We believe in creating long term relationship with our clients creating a better connection every time we interact.</p>                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
export default Customizesoftware;