import React from 'react'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import line from "../../../../assets/line.png";
import Hybrid from "../../../../assets/hybrid-apps.png";

function Hybridapps() {
  return (
    <div>
      <div className="about-section1">
        <div className="container">
          <div className="menu">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <h1 className="mb-5">Hybrid Apps</h1>
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
                        <h3 className="widget-title" style={{fontSize:"36px"}}>Hybrid Apps</h3>
                        <img src={line} alt="line" className="line" />
                     <p class="text-justify text-secondary" style={{fontSize: "16px"}}>Vertech<span style={{color:"#da251d"}}>xa</span> 
uses the Hybrid Mobile App Development to offer
 the most effective mobile app solution. Our professional 
developers take the development advances to higher level, 
by choosing native app development, hybrid app development and web app
 development. Our developers possess significant knowledge and experience in HTML, 
Javascript, CSS and other advanced technology with the aim to offer an ultimate experience
 to our clients. Vertech<span style={{color:"#da251d"}}>xa</span> is a leading development company and 
engaged to offer the best IT solutions to its prestigious clients.
 <br/>
</p>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
<p class="text-justify text-secondary" style={{fontSize:"16px"}}>
						<br/>
						 Our hybrid developers not only help you build a system that delivers your services to your customers, but also asses the key metrics in order to understand the much-needed industry prerequisites that must be aimed for to serve customers with the best features. Be it Ideation, wireframing, designing, development, or quality testing. We take care of all anything and everything that’s related to your hybrid application. When done right, user experience, retention, interaction, and app usage combine to help you achieve the most loyal user base ever. Consequently leading to higher business profits.
<br/><br/>
There are several factors behind an immensely successful Hybrid Mobile App and those include stunning designs and outstanding performance.
<br/>
        At Vertech<span style={{color:"#da251d"}}>xa</span>, we have the necessary expertise to reduce all cognitive load to enable easy and smooth app browsing and usage.
        Your clients remain more committed to you when they have a friction-free App-interaction that is sure to lead to more conversions.
        We do this as our experienced App design and development team work in complete unison to understand your business and the customer spectrum to be met.
        Accordingly, we make us of the best design layouts, color schemes and font-family that complement the mind and taste of your target groups.
</p>                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
export default Hybridapps;