import React from 'react'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import website from "../../../assets/website.png";

function WebsiteDevelopment() {
     useEffect(() => {
      AOS.init({
        once: false, 
        duration: 1000 
      });
    }, []);
  return (
    <div> 
      <div className="about-section1">
        <div className="container">
          <div className="menu">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <h1 className="mb-5">Website Development</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="wd-section2">
        <div className="innerweb">
            <div className="col-sm-12 col-md-12">
            <div className="container py-5">
                <div className="row aos-init " data-aos="fade-up" data-aos-duration="1000">
                 <div className="col-md-12 col-sm-12">
                    <div className="text-center">
                        <img src={website} alt="website" className="img-fluid" />
                    </div>
                 </div>
                </div>
                <div className="row aos-init" data-aos="fade-up" data-aos-duration="1000">
                 <div className="col-md-12 col-sm-12">
                   <div className="website-development-content1">
                       <p className="text-justify text-color-custom">
                        Vertech
                        <span style={{ color: "#da251d" }}>xa</span>
                         is an excellent Website Development Company in Pune Maharashtra, India. We thoroughly comprehend the objective of website development for each of our clients. Whether you are looking at improving sales of your physical products through online presence or selling digitals products or may be seeking it as a means of advertisement to your clients. Vertech
                        <span style={{ color: "#da251d" }}>xa</span>
                         makes sites that rank on Google to grow your business. We are offering cost effective Web Designing, Web Development, Logo Designing, SEO Services, digital marketing & internet marketing solutions. We make affordable websites and offer trusted web solutions with astonishing results. We understand your needs and then market completely. That’s why we provide the best professional website designs and offers the best E-commerce website designing services as per the need of the client. Our dedicated and expert team of professionals with insurmountable knowledge will surely help you to live your dream and serve your purpose. 

                        </p> 
                   </div>
                </div>
                </div>
            </div>
            </div>
        </div>
      </div>

      </div>
  )
}
export default WebsiteDevelopment