import React from 'react'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import line from "../../../assets/line.png";
import Ios from "../../../assets/ios.png";

function Iosapps() {
  return (
    <div>
      <div className="about-section1">
        <div className="container">
          <div className="menu">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <h1 className="mb-5">Ios Apps</h1>
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
                        <img src={Ios} alt="Hybrid-img" className="img-fluid" />
                    </div>
                    </div>
                    <div className="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                    <div className="widget text-center">
                        <h3 className="widget-title" style={{fontSize:"36px"}}>Ios Apps</h3>
                        <img src={line} alt="line" className="line" />
                     <p class="text-justify text-secondary-custom" style={{fontSize: "16px"}}>Vertech<span style={{color:"#da251d"}}>xa</span>iOS is a proprietary mobile operating system which runs on all Apple products i.e. iPhone, iPad and iPod Touch. iOS is based on Mac OS X operating system for desktops and laptops. The iOS developer kit provides tools that allow iOS App Design.
							<br/><br/>
We are one of the best iOS App Development Services in Pune. We have earned this success by developing interactive iPhone app at affordable cost which helps your business to grow. We at Vertech<span style={{color:"#da251d"}}>xa</span>, make a proper blend of objective-C and Apple inc. latest programming platform-Swift for developing custom iPhone apps which can work as miracle for their owners in terms of revenue and brand value. We offer a wide array of app sophisticated and high-quality services, due to which we are the primary choice of clients for all sorts of iOS/iPhone development solutions.
						</p>                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
<p class="text-justify text-secondary" style={{fontSize: "16px"}}>
						<br/>
						  Along with quality of the app we also focus on timely delivery of the project. We are an iOS Application Development Company where we not only match up with the increasing competition but also meet the complex requirements competently. 
						<br/><br/>
Being a top iOS App Development Company in Pune, we develop best in class native and cross platform mobile applications. We adopt cutting-edge strategy to support your business achieve the best of traffic and conversions. Not only we develop great iPhone apps for both native and cross-platform apps, but we also help in terms of app design and marketing. With the ready to use framework and robust team of keen designers, developers and implementers we create high performance intuitive apps across enterprise platforms.</p>                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
export default Iosapps;