import React from 'react'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import line from "../../assets/line.png";
import consulting from "../../assets/vertechxa-IT-consulting.jpg";

function Itconsulting() {
  return (
    <div>
      <div className="about-section1">
        <div className="container">
          <div className="menu">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <h1 className="mb-5">IT CONSULTING</h1>
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
                        <img src={consulting} alt="seo" className="img-fluid" />
                    </div>
                    </div>
                    <div className="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                    <div className="widget justify-text">
                        <h3 className="widget-title" style={{fontSize:"36px"}}>IT CONSULTING</h3>
                        <img src={line} alt="line" className="line" />
<p class="text-justify text-secondary" style={{fontSize: "16px"}}>Vertech<span style={{color:"#da251d"}}>xa</span> provide 
consulting services to help customers to make 
the correct technical choices during the early and decisive stages of a project.</p>

 <p class="text-justify text-secondary" style={{fontSize: "16px"}}>We offer IT consulting services that will help you improve your
 software architecture, create a tech-driven digital strategy, and improve operations by optimising your software portfolio. Our software engineers 
will finish your digital transformation journey through careful planning and effective execution of the outlined IT strategy.</p>
                    </div>
                    </div>
                </div>
               
            </div>
        </div>
      </div>
    </div>
  );
}
export default Itconsulting;