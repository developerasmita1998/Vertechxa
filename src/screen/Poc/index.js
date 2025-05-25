import React from 'react'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import line from "../../assets/line.png";
import poc from "../../assets/vertechxa-poc.jpg";

function Poc() {
  return (
    <div>
      <div className="about-section1">
        <div className="container">
          <div className="menu">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <h1 className="mb-5">PoC(Proof of Concept)</h1>
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
                <div className="widget">
                  <img src={poc} alt="seo" className="img-fluid" style={{paddingTop:"9%", paddingLeft:"20%"}}/>
                </div>
              </div>
              <div className="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                <div className="widget justify-text">
                  <h3 className="widget-title" style={{ fontSize: "36px" }}>POC</h3>
                  <img src={line} alt="line" className="line" />
                  <p class="text-justify " style={{ fontSize: "16px" }}>Vertech<span style={{ color: "#da251d" }}>xa</span> develop Proof of concept (PoC). PoC may also
                    refer to partial solutions involving a small number of users acting in business roles to establish whether a system satisfies certain requirements. A PoC (proof of concept) is
                    an advanced demo project that reflects a real-world scenario a common use case in the software industry for PoCs involves developers examining the client's requirements,
                    choosing a few to focus on, and creating a proof of concept to solve
                    those requirements.</p>
                  <p class="text-justify " style={{ fontSize: "16px" }}>PoC helps to avoid possible technical and
                    other problems in the future, and allow you to obtain valuable feedback at an early
                    stage of the development cycle,
                    thus reducing unnecessary risks.</p>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
export default Poc;