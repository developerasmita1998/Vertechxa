import React from 'react'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const ecommerce = require("../../../assets/e-commerce-img.jpg");

function Ecommercedevelopmant() {

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
                      <h1 className="mb-5">E-Commerce Development</h1>
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
                              <img src={ecommerce} alt="website" className="img-fluid" />
                          </div>
                       </div>
                      </div>
                      <div className="row aos-init" data-aos="fade-up" data-aos-duration="1000">
                       <div className="col-md-12 col-sm-12">
                         <div className="website-development-content1">
                             <p className="text-justify text-color-custom">
                               At Vertech
                              <span style={{ color: "#da251d" }}>xa</span>
                               , we tailor ecommerce development
								services to all our customer segments – ecommerce startups, companies already
								established in the market and those going omnichannel. For some, our assistance will
								mean a powerful business launch with the right technology stack. For others – a
								possibility to give their business a fresh start by re-platforming successfully or
								growing into an omnichannel venture. We have a strong development team with good years
								of experience in ecommerce store development. Our core expertise lies in Magento
								ecommerce, Woocommerce, Opencart ecommerce and custom ecommerce website development.
								Best way to start an online business is to have an e-commerce website. In order to
								connect with customers across the world, you absolutely need a well-designed website. A
								well-designed website helps you distinguish yourself from spammy ones that are hard to
								trust. It’s not uncommon for conversion rates to be low since your website does not look
								like a trusted one to the user.
      
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

export default Ecommercedevelopmant
