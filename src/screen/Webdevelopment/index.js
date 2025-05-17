import React ,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import webdevelopment1 from "../../assets/web-development.png"
import ecommerce from "../../assets/e-commerce.png"
import cmsdev from "../../assets/cms-development.png"
import php from "../../assets/php-development.png"
function Webdevelopment() {
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
                <h1 className="mb-5">Web Development</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="digital-marketing-section1 py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="web-development-content1 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                <p className="text-center text-secondary">
                IoT development projects are everywhere, and affordable,
							advanced technology is the driving force behind this fast-growing phenomenon. Smaller, more
							accessible hardware and the flexibility to use common programming languages make it easier
							than ever before to develop these embedded IoT systems.
                  </p>  
              </div>
            </div>
          </div>
        </div>
      </div>
       <div className="digital-marketing-section3 my-5">

        <div className="digital-marketing-inner3 py-5">
          <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
            <div className="row">
              <div className="col-md-6" data-aos="fade-up" data-aos-duration="1000">
                <div className="img card-3">
                  <img src={webdevelopment1} alt="customize apps" className="img-fluid" />
                </div>
                <div className="card">
                  <div className="card-body text-center">
                    <h4 className='card-title'>Website Development</h4>
                    <p className="card-text text-justify">
									Vertech <span style={{ color: "#da251d" }}>xa</span>    is an excellent Website Development Company in Pune, India. We thoroughly
									comprehend the objective of website development for each of our clients. Whether you
									are looking at improving sales of your physical products through online presence or
									selling digitals products or may be seeking it as a means of advertisement to your
									clients.<br /><br/>
                  </p><a href="/android" className="btn btn-primary">Read More</a>                    </div>
                </div>
              </div>
                <div className="col-md-6" data-aos="fade-up" data-aos-duration="1000">
                <div className="img card-4">
                  <img src={ecommerce} alt="hybrid" className="img-fluid" />
                </div>
                <div className="card">
                  <div className="card-body text-center">
                    <h4 className='card-title'>E-Commerce Development</h4>
                      <p className="card-text text-justify">
                      Best way to start an online business is to have an e-commerce website. In order to
                      connect with customers across the world, you absolutely need a well-designed
                      website. A well-designed website helps you distinguish yourself from spammy ones
                      that are hard to trust. It’s not uncommon for conversion rates to be low since your
                      website does not look like a trusted one to the user.</p>
                      <a href="/android" className="btn btn-primary">Read More</a>
                    </div>
                </div>
              </div>
             
            
              </div>
          </div>
        </div>
      </div>
         <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
          <div className="row py-5">
            <div className="col-md-6  aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
              <div className="img">
                <img src={cmsdev} alt="customize apps" className="img-fluid" />
              </div>
              <div className="card custom-card-new">
                <div className="card-body text-center">
                 <h4 className='card-title'>CMS Development</h4>
                  <p className="card-text text-justify">
      							At Vertech  <span style={{ color: "#da251d" }}>xa</span> , we offer economical CMS Web Design and Development Services for individuals
                    and enterprises from all around the globe. With our CMS Development Services, we enable you
                    to choose from an array of content management systems. We provide customized features like
                    the ability to edit and modify, add or delete pages, banner ads management etc.
                  </p>
                  <a href="/android" className="btn btn-primary">Read More</a>
                </div>
              </div>
            </div>
             <div className="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
              <div className="img">
                <img src={php} alt="customize apps" className="img-fluid" />
              </div>
              <div className="card custom-card-new">
                <div className="card-body text-center">
                 <h4 className='card-title'>PHP Development</h4>
                  <p className="card-text text-justify">
      							At Vertech  <span style={{ color: "#da251d" }}>xa</span>  provides expert PHP development services from India, gaining expertise from years
							of experience in PHP web development and PHP application development. We have been working
							in PHP for the last 3+ years and have gained expertise on various PHP application
							development frameworks and PHP services. We offer expert PHP web design and programming
							services for global clients.
                  </p>
                  <a href="/android" className="btn btn-primary">Read More</a>
                </div>
              </div>
            </div>
          </div>
         </div>
        <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
          <div className="row py-5">
            <div className="col-md-6  aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
              <div className="img">
                <img src={cmsdev} alt="customize apps" className="img-fluid" />
              </div>
              <div className="card custom-card-new">
                <div className="card-body text-center">
                 <h4 className='card-title'>IOT Development</h4>
                  <p className="card-text text-justify">
      							At Vertech  <span style={{ color: "#da251d" }}>xa</span> , we offer economical CMS Web Design and Development Services for individuals
							and enterprises from all around the globe. With our CMS Development Services, we enable you
							to choose from an array of content management systems. We provide customized features like
							the ability to edit and modify, add or delete pages, banner ads management etc.
                  </p>
                  <a href="/android" className="btn btn-primary">Read More</a>
                </div>
              </div>
            </div>
           
          </div>
         </div>
    </div>
  )
}

export default Webdevelopment; 
