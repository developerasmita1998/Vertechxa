import React from 'react'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import line from "../../assets/line.png";
import Agile from "../../assets/agilesoft.png";

function Agilewebdevelopment() {
  return (
    <div>
      <div className="about-section1">
        <div className="container">
          <div className="menu">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <h1 className="mb-5">Agile Web Development</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
     <div className="dm-section2">
        <div className="innerdm py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                <div className="widget" style={{paddingTop:"11%"}}>
                  <img src={Agile} alt="seo" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                <div className="widget justify-text">
                  <h3 className="widget-title" style={{ fontSize: "36px" }}>AGILE WEB DEVELOPMENT</h3>
                  <img src={line} alt="line" className="line" />
                  <p class="justify-text text-secondary" style={{ fontSize: "16px" }}>Agile is a term used to describe approaches to software development
                    emphasizing incremental delivery, team collaboration,
                    continual planning, and continual learning, instead
                    of trying to deliver it all at once near the end.</p>
                  <p class="justify-text text-secondary" style={{ fontSize: "16px" }}>Agile focuses on keeping the process
                    lean and creating minimum viable products (MVPs) that go through a number of iterations
                    before anything is final. Feedback is gathered and implemented continually and in all, it is a much
                    more dynamic process where everyone is working
                    together towards one goal.</p>
                  <p class="justify-text text-secondary" style={{ fontSize: "16px" }}>Agile processes generally promote
                    a disciplined project management process that encourages frequent inspection and adaptation, a leadership philosophy that
                    encourages teamwork, self-organization and accountability, a set of engineering best practices intended to allow for rapid delivery of
                    high-quality software, and a business approach that aligns development with
                    customer needs and company goals.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
export default Agilewebdevelopment;