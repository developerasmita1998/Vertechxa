import React from 'react'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import php_img from "../../../assets/img-php.png";

function Phpdevelopment() {
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
                <h1 className="mb-5">PHP DEVELOPMENT</h1>
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
                        Vertech
                        <span style={{ color: "#da251d" }}>xa</span>
                       provides expert PHP development services from India, gaining expertise from years of experience in PHP web development and PHP application development. We have been working on various PHP application development frameworks and PHP services. We offer expert PHP web design and programming services for global clients. Our PHP coders own a strong grip on all the popular frameworks like CodeIgniter, Laravel, Yii, Symfony, CakePHP, and many more. We can even suggest you the right framework that suits well with your requirement. We are versed with all the PHP agile development methodologies, and incorporated as well efficaciously. This fosters dynamic PHP environment to deliver excellent solutions to short and long-term projects.
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
export default Phpdevelopment;