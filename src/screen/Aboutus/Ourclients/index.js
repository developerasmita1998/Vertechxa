import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import line from "../../../assets/line.png";
import person from "../../../assets/mission.png";
import vision from "../../../assets/vision.png";
function Ourclients() {
  useEffect(() => {
  AOS.init({
    once: false, 
    duration: 1000 
  });
}, []);
  return (
    <div>
      {/* Section 1 */}
      <div className="about-section1">
        <div className="container">
          <div className="menu">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <h1 className="mb-5">About Us</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section 2 */}
      <div className="about-section2 py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="aboutus text-center aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                <div className="widget">
                  <h3 className="widget-title">Who We are?</h3>
                  <img src={line} alt="line" className="line" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="aboutus text-center aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                <p className="text-center text-secondary">
                Vertech
                <span style={{ color: "#da251d" }}>xa</span> is a Product, Service and Software development
							company. We are focused on IoT, Mobile and Web Applications Development. We provide
							end-to-end solutions to OEMs interested in IoT enabled products. End-to-end development of
							Mobile and Web based applications. We are expert in Hardware Design, Embedded Software,
							Cloud, Web and Mobile Applications.
              <br/><br/>
              We provide end-to-end solutions to OEMs
							interested in IoT enabled products. End-to-end development of Mobile and Web based
							applications. We are expert in Hardware Design, Embedded Software, Cloud, Web and Mobile
							Applications
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section 3 */}
        <div className="about-section3 py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
             <div className="widget">
              <img src={person} alt="person" className="img-fluid" />
             </div>
            </div>
        
           <div className="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
             <div className="widget justify-text">
                <h3 className="widget-title">Our Mission</h3>
                <img src={line} alt="line" className="line" />
                <p className="justify-text text-secondary" style={{ fontSize: "16px" }}>
                  To serve our customers to the
							best by delivering technically sound and affordable business solutions while ensuring
							exceptional customer support throughout the process. Vertech<span style={{ color: "#da251d" }}>xa</span>  will continuously strive to
							improve in order to exist as the industry leader and a premier outsourcing company in the
							field of web design, development, mobile web and application development. It aims to achieve
							this through excellent services and unmatched professional skill by building life-long
							relationships with the clients along with achieving the highest client satisfaction.
              </p>
             </div>
            </div>
              </div>
        </div>
      </div>

      {/* Section 4 */}
  <div className="about-section3 py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
             <div className="widget justify-text">
                <h3 className="widget-title">Our Vision</h3>
                <img src={line} alt="line" className="line" />
                <p className="justify-text text-secondary" style={{ fontSize: "16px" }}>
                  Involve and encourage the values
							of honesty and integrity amongst the team members by creating a supportive work culture in
							the company. To become a prime performer in the global marketplace by providing highly
							innovative web designing, web development and internet marketing services that will drive
							our clients' business towards growth. Worldwide reputation is the dream of every company and
							we want to achieve it through our work. To establish excellent communication within the team
							and with the clients in order to keep them in continuous reach. To offer best services in
							the field of open source technology. 
              </p>
             </div>
            </div>
            <div className="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
             <div className="widget">
              <img src={vision} alt="person" className="img-fluid" />
             </div>
            </div>
        
           
              </div>
        </div>
      </div>

      </div>

  )
}

export default Ourclients;
