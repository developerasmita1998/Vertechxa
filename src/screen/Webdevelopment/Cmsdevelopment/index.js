import React from 'react'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import php_img from "../../../assets/img-php.png";

function Cmsdevelopment() {
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
                <h1 className="mb-5">CMS DEVELOPMENT</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wd-section2">
        <div className="innerweb">
            <div className="col-sm-12 col-md-12">
            <div className="container py-5">
                <div className="row aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                 <div className="col-md-12 col-sm-12">
                    <div className="text-center">
                        <img src={php_img} alt="website" className="Php" />
                    </div>
                 </div>
                </div>
                <div className="row aos-init" data-aos="fade-up" data-aos-duration="1000">
                 <div className="col-md-12 col-sm-12">
                   <div className="website-development-content1">
                       <p className="text-justify text-color-custom">
                       At Vertech
                        <span style={{ color: "#da251d" }}>xa</span>
                         , we offer economical CMS Web Design and
								Development Services for individuals and enterprises from all around the globe. With our
								CMS Development Services, we enable you to choose from an array of content management
								systems. By using content management systems for our custom websites, ActiveMedia's web
								development team creates attractive websites that act as the cornerstone of your online
								presence. You'll love how easy it is to update, modify, and create content on your
								CMS-backed website's user-friendly interface. We’re backed up by a team of expert
								designers and developers who have in-depth knowledge of designing and development
								respectively. They have a look at your requirements and the budget. Based on their
								analysis, they offer the most appropriate solution. Our team members are well versed in
								Drupal, Magento, Joomla, WordPress, oscommerce and many more.
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
export default Cmsdevelopment;