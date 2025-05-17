import React from 'react'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import line from "../../../assets/line.png";
import seo from "../../../assets/social-media.png";

function SocialMediaMarketing() {
  return (
    <div>
      <div className="about-section1">
        <div className="container">
          <div className="menu">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <h1 className="mb-5">Social Media Marketing</h1>
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
                        <h3 className="widget-title" style={{fontSize:"36px"}}>Social Media Marketing</h3>
                        <img src={line} alt="line" className="line" />
                       <p class="text-justify text-secondary" style={{fontSize: "16px"}}>Spreading the content of your site through social networks leads not only to the growth of the site’s SEO positions but also promotes the company or brand among Internet users. In actual conditions, the distribution of the content of your site through social networks helps to increase the level of trust of the target audience of users to your company, brand, offered goods or services.
						<br/><br/>
						It is necessary to regularly optimize the site for social networks in accordance with constantly changing requirements and algorithms of various social networks. Actual market conditions require mandatory effective presence of materials on your site in social networks.
						</p>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                   <p class="text-justify text-secondary" style={{fontSize: "16px"}}>
						<br/>
						Social Media Channels become major ways of business promotion as well as gaining popularity in the market. Most people or businesses are also become aware about importance of Social Media Optimization and accepted to make business presence in global market. Reaching to targeted audience is very simple through such advertising procedure. FB, Twitter, Google Plus etc are such place where millions of users spend most hours and do activities personally and professionally.
						<br/><br/>
						Reaching the people had never been so easy, thanks to social media such as Facebook, Instagram, Twitter, Linkedin etc platforms, through which we can target our audience and reach there. In order to engage followers on your social media platforms, we create impressive content. 
						<br/><br/>
						Social Media has become a part of the modern generation which is going to lead the nations. So nowadays everybody is going mobile which has a great impact on engaging people with social media through social media optimization services.
						As per the record of 2017, Facebook has crossed 2.2 billion monthly users that are active. even in 2012 Facebook had crossed the 1 billion mark of monthly users, which makes it the first social media network to do so.
						<br/><br/>
						<b>Why we use SMO or social media marketing?</b>
						<br/>
						    ► Awareness:- social media marketing increases awareness of your brand and product.<br/>
						    ► Promotional event:- it also helps to promote your product with the help of videos, images, and blogs.<br/>
						    ► Direct communication with your audience.<br/>
						    ► Generate leads<br/>
						    ► Group formation for the product<br/>
						    ► Understand and engage your customers<br/>
						    ► Cost-effective:- cheaper than any other promotional activity or advertisements.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
export default SocialMediaMarketing;