import React from 'react'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import line from "../../../assets/line.png";
import seo from "../../../assets/video.png";

function Videoandtextmarketing() {
  return (
    <div>
      <div className="about-section1">
        <div className="container">
          <div className="menu">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <h1 className="mb-5">Video And Text Marketing</h1>
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
                        <h3 className="widget-title" style={{fontSize:"36px"}}> VIDEO AND TEXT MARKETING</h3>
                        <img src={line} alt="line" className="line" />
                       <p class="text-justify text-secondary" style={{fontSize: "16px"}}>Video Marketing Services
						Take a Look at What the Best Video Marketing Looks.
						<br/><br/>
						YouTube is the second most popular search engine after Google, and web pages with videos in them generally experience a 157% increase in organic traffic. By 2019, videos will account for 85% of online traffic in the US.
						<br/><br/>
						If you’re looking to incorporate video into your marketing plan, you’re making a smart move, and your customers (and your wallet) will thank you. Vertech<span style={{color:"#da251d"}}>xa</span> has a proven track record of creating engaging videos for all types of video marketing campaigns, including social media videos, website videos, and video advertising. If you want your videos to pack a punch and captivate your audience, we’re the video marketing company for you.
						</p>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                    <p class="text-justify text-secondary" style={{fontSize: "16px"}}>
    Half of the consumers who watch online product videos say it helps them make more confident purchasing decisions
    Studies that 74% of users who watched an explainer-video about a product subsequently bought it.
    <br/><br/>
    People who watch videos stay on a site two minutes longer on average and are 64% more likely to make a purchase
    A video by itself is 50 times more likely to appear on the first page of Google than traditional web pages
Company profile videos, product reviews, and “how-to” videos are a proven way to improve your search engine real estate and increase the performance of your business’ search engine optimization campaign.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
export default Videoandtextmarketing;