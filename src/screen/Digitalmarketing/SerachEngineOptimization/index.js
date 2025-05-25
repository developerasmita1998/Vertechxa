import React from 'react'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import line from "../../../assets/line.png";
import seo from "../../../assets/seoptimization.png";

function SearchEngineOptimization() {
  return (
    <div>
      <div className="about-section1">
        <div className="container">
          <div className="menu">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <h1 className="mb-5">Search Engine Optimization</h1>
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
                        <img src={seo} alt="seo" className="img-fluid" />
                    </div>
                    </div>
                    <div className="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                    <div className="widget justify-text ">
                        <h3 className="widget-title" style={{fontSize:"36px"}}>Search Engine Optimization</h3>
                        <img src={line} alt="line" className="line" />
                        <p className="justify-text text-color-custom" style={{fontSize:"16px"}}>
                        Vertech
                         <span style={{ color: "#da251d" }}>xa</span>
                          team provides complete support with best and high quality service SEO Services (Website Promotion) to their clients. Vertech
                        <span style={{ color: "#da251d" }}>xa</span>
                         is the best SEO Company in Pune, Search Engine Optimization is the process of improving the “organic” search rankings of your site on Google and other search engines.
						<br/><br/>
                        
						Appear on the Front Page of Google. Optimising your web site to rank on the first page of google is our specialty.
						Our SEO strategies will make our website a higher ranking in search engines. We’ll provide a complete SEO keyword rankings , quality link building report and indexed page details.
						<br/><br/>
                        
						We help businesses of all sizes get better ranking on search engines(SEO). Each folks loves what we perform and we believe that spirit helps result in the quality of our work.
						
                        </p>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                    <p className='text-justify text-color-custom' style={{fontSize:"16px"}}>
                    
SEO is a method by which a business firm can generate greater online traffic that can then be used for increasing sales conversions. Every website creates content of its own in order to lure in more customers. This content can come in many forms, such as text, images and videos. Such content should be optimized with the right kind of keywords that are most searched by the target audience. By using all the highly searched keywords that are applicable for a content and business type, it is possible for the SEO specialists to improve the ranking of a website.
<br/><br/>
<b>How does SEO work?</b>
<br/>
Google makes use of a complex algorithm to decide which website should be ranked the highest and which websites are not really following the doctrines of efficient high quality ranking practices. The ranking of the websites are based on that. Google always tries to come up with new updates for their algorithms that would in turn improve the user experience of people who are visiting online websites as they carry out online searches to find what they are looking for.
<br/><br/>

There are many factors based on which the online ranking of a site depends. For instance, it can depend on the general quality and design of a site, the number of sites linked to the website, the overall value online visitors ascribe to a website, the mobile-friendliness of a site and loads of other factors. Anyone looking to have his or her website ranked highly would need to make sure that it scores high points in all the categories based on which it is evaluated by Google. The best thing about the whole process is that there are multiple categories based on which Google evaluates a website. Therefore even if a site ranks in a poor or mediocre way in some categories, it may still have a high ranking if it scores well on some other categories. It is due to this reason that all websites put a lot of emphasis on making the best use of SEO techniques.
<br/><br/>

SEO professionals make use of every possible white hat SEO methods that can improve the ranking of a website. The progress made by a website in terms of SEO can be measured with SEO auditing tools. If the ranking of the website still needs improvement, then the SEO professionals try to find out the areas that they need to work on and come up with a better strategy which in turn can improve the ranking of that website.
                    </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
export default SearchEngineOptimization;