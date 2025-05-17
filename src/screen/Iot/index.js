import React from 'react'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import line from "../../assets/line.png";
import IOT from "../../assets/vertechxa-iot-development.jpg";

function Iot() {
  return (
    <div>
      <div className="about-section1">
        <div className="container">
          <div className="menu">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <h1 className="mb-5">Iot</h1>
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
                        <img src={IOT} alt="seo" className="img-fluid" />
                    </div>
                    </div>
                    <div className="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                    <div className="widget justify-text">
                        <h3 className="widget-title" style={{fontSize:"36px"}}>IOT</h3>
                        <img src={line} alt="line" className="line" />
<p class="text-justify text-secondary" style={{fontSize: "16px"}}>An IoT development projects are everywhere, 
and affordable,
 advanced technology is the driving force 
behind this fast-growing phenomenon.</p>
 <p class="text-justify text-secondary" style={{fontSize: "16px"}}>The Internet of Things (IoT) describes the network of physical objects “things” that are embedded with sensors, software, and other technologies for the purpose of connecting and exchanging data with other devices and systems over
 the internet.</p>
 
                    </div>
                    </div>
                </div>
               
            </div>
        </div>
      </div>
    </div>
  );
}
export default Iot;