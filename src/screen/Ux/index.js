import React from 'react'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import line from"../../assets/line.png";
import ux from "../../assets/vertechxa-ui-ux.jpg";

function Ux() {
  return (
    <div>
      <div className="about-section1">
        <div className="container">
          <div className="menu">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <h1 className="mb-5">UX/UI Design</h1>
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
                        <img src={ux} alt="seo" className="img-fluid" />
                    </div>
                    </div>
                    <div className="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                    <div className="widget justify-text">
                        <h3 className="widget-title" style={{fontSize:"36px"}}>UX/UI DESIGN</h3>
                        <img src={line} alt="line" className="line" />
                      <p class="text-justify text-secondary" style={{fontSize: "16px"}}>UI/UX Divided into four distinct 
phases&hairsp;—&hairsp;Discover, Define, Develop and Deliver
                            the Double Diamond is a simple visual map of the design process.</p>
<p class="text-justify text-secondary" style={{fontSize: "16px"}}>The “UI” in UI design stands for “user interface.”
 The user interface is the graphical layout of an application. It consists of the buttons users click on, the text they read, the images, sliders, text entry fields, and all the rest of the items the user interacts with. This includes screen layout, transitions, interface animations and every single micro-interaction. Any sort of visual element, interaction, 
or animation must all be designed.</p>
<p class="text-justify text-secondary"  style={{fontSize: "16px"}}>“UX” stands for
 “user experience.” A user’s experience of the app is
 determined by how they interact with it. </p>
                    </div>
                    </div>
                </div>
             <div class="row">
                    <div class="col-md-12 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000"><br/>
                        <p class="text-justify text-secondary" style={{fontSize: "16px"}}>
                        Is the experience smooth and intuitive or clunky and confusing? Does navigating the app 
feel logical or does it feel arbitrary? 
Does interacting with the app give people the sense 
that they’re efficiently accomplishing the tasks they set out to achieve or does it feel like a struggle? User experience is determined by how easy or difficult it is to interact with the user interface elements that the UI designers have created.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
export default Ux;