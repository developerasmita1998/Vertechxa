import React from 'react'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import line from "../../../assets/line.png";
import seo from "../../../assets/android.png";

function Androidapps() {
  return (
    <div>
      <div className="about-section1">
        <div className="container">
          <div className="menu">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <h1 className="mb-5">Android Apps</h1>
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
                        <img src={seo} alt="seo" className="img-fluid" />
                    </div>
                    </div>
                    <div className="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                    <div className="widget justify-text">
                        <h3 className="widget-title" style={{fontSize:"36px"}}>Android Apps</h3>
                        <img src={line} alt="line" className="line" />
                      <p class="text-justify text-secondary" style={{fontSize:"16px"}}>Android is a Linux based operating system which is mainly designed for touch screen mobile devices such as smart phones and tablet computers. In last 15 years many operating systems has been developed for black and white phones to recent smart phones or mini computers. One of the most popular and widely used mobile Operating System these days is Android.
							           <br/><br/>
                      We at Vertech<span style={{color:"#da251d"}}>xa</span> offer the best Android App Development in Pune, loaded with user friendly features, to boost your business with latest niche technology and optimum cost. We develop the application discovering the future-proof technology and app trend by comprehending all significant aspects. 
	                    <br/><br/>
                         With mobile apps becoming increasingly popular, most of the web development companies are moving towards providing this type of services. So finding a mobile app development service is not a big deal, the main challenge is to locate the right app development company.
					            	</p>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                   <p class="text-justify text-secondary" style={{fontSize: "16px"}}>
						<br/>
						 Choosing the wrongapp development partner means indefinite delays, bad user experiences, bad codes and most importantly wastage of hundreds and thousands of dollars.
	<br/><br/>
Vertech<span style={{color:"#da251d"}}>xa</span> is a Dedicated and well-known Mobile App Development Company and we carefully craft every single app to give the end-user the best product experience possible, our app developers have good work experience in developing mobile apps across diverse industry segments. To stay focused in today's market, businesses must transition to a mobile mind-set and deliver high quality, unified mobile experiences that enhance the way they engage with their customers and that’s all you get under the roof of Vertech<span style={{color:"#da251d"}}>xa</span> we deliver quality application with some exciting user-friendly features to help you cater more clients.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
export default Androidapps;