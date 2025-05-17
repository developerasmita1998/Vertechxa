import React from 'react'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import line from "../../../assets/line.png";
import seo from "../../../assets/logo_icon.png";

function Logodesigning() {
  return (
    <div>
      <div className="about-section1">
        <div className="container">
          <div className="menu">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <h1 className="mb-5">Logo Designing</h1>
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
                    <div className="widget ">
                        <img src={seo} alt="seo" className="img-fluid" />
                    </div>
                    </div>
                    <div className="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                    <div className="widget justify-text">
                        <h3 className="widget-title" style={{fontSize:"36px"}}>WHY A LOGO IS IMPORTANT</h3>
                        <img src={line} alt="line" className="line" />
                        <p class="text-justify text-secondary" style={{fontSize: "16px"}}>Every business wants their
                      company to stand out from the crowd and make a lot of profit.
                      In this competitive market, you need to stay one step ahead of your
                      rivals to reach extraordinary milestones. An attractive logo of the 
                      company can make a significant impact in the market and attract the
                         attention of potential customers.</p>
                         <p class="text-justify text-secondary" style={{fontSize: "16px"}}>A well-designed logo is a vital
                        part of the business identity, and it’s a mirror of the company. Every element in the design like colour, font, shape speaks to the business personality in a very interesting manner. Custom logo design is a 
                        way to deliver the brand’s value and 
                         personality to the people.</p>
                         <p class="text-justify text-secondary" style={{fontSize: "16px"}}>While setting up the business,
                        whether it’s online or offline, the logo is
                        always a predominant part. As it’s the most visible element 
                          of your business whenever people search for your company,
                         therefore you should not compromise with the logo.
                        It’s an excellent option to take help from any logo design
                       company to craft a modern style and attractive identity for
                       your company.</p>
                    </div>
                    </div>
                </div>
               
            </div>
        </div>
      </div>
    </div>
  );
}
export default Logodesigning;