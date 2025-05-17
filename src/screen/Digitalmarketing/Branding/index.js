import React from 'react'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import blog from "../../../assets/blog-img.png";
import line from "../../../assets/line.png";

function Branding() {
     useEffect(() => {
          AOS.init({
            once: false, // Animation happens only once
            duration: 1000 // Global duration fallback
          });
        }, []);
        return(
            <div>
 {/* Section 1 */}
      <div className="about-section1">
        <div className="container">
          <div className="menu">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <h1 className="mb-5">Branding</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
            <div className="section2">
                <div className="inner-section2 py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                                <div className="widget">
                                    <img src={blog} alt="Branding" className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                             <div className="widget justify-text">
                                <h3 className="widget-title">Branding</h3>
                                <img src={line} alt="line" className="img-fluid" />
                                <p className="text-secondary text-justify" style={{lineHeight:"1.8",fontSize:"18px"}}>
                                    A brand represents the sum
								of people’s perception of a company’s customer service,
								reputation, advertising and logo. And when all of these parts of the business are
								working well together, the overall brand tends to be healthy.
								
                                    </p>
                             </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/* Section 3 */}
            <div>
                <div>
                    <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                    <div className="row">
                       <div className="col-md-4">
                            <div className="card" style={{height: "500px"}}>
                                <div className="card-body text-center" style={{marginTop: "5px"}}> 
                                    <h4 className="card-title" style={{color:"#1cabe8",fontSize:"29px"}}>Branding improves recognition</h4>
                                    <p className="card-text text-justify" style={{lineheight:"1.8",fontSize:"18px"}}>
                                        
                                        One of the major components of a brand is a logo because, as the “face” of a
                                        business, it’s what people instantly recognize. A professional logo design is simple
                                        enough to be memorable, but powerful enough to give the desired impression of your
                                        company.
                                    
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card" style={{height: "500px"}}>
                                <div className="card-body text-center" style={{marginTop: "5px"}}> 
                                    <h4 className="card-title" style={{color:"#1cabe8",fontSize:"29px"}}>Branding creates trust</h4>
                                    <p className="card-text text-justify" style={{lineheight:"1.8",fontSize:"18px"}}>
                                        
                                       
									Just as people are more likely to purchase from a business that appears polished and
									legitimate, families need to feel comfortable before committing to a child care
									program.
									The Deluxe team used the business’s new logo on business cards, staff T-shirts and
									the outside of the building to give the business the professional image it deserved.
									Passersby and others who encounter the logo can now easily identify the business as
									a
									trusted center for education in the community.
								
                                    
                                    </p>
                                </div>
                            </div>
                        </div>
                         <div className="col-md-4">
                            <div className="card" style={{height: "500px"}}>
                                <div className="card-body text-center" style={{marginTop: "5px"}}> 
                                    <h4 className="card-title" style={{color:"#1cabe8",fontSize:"29px"}}>Branding supports advertising</h4>
                                    <p className="card-text text-justify" style={{lineheight:"1.8",fontSize:"18px"}}>
                                        
                                       
									Advertising is another important component of a brand. Both the medium chosen and
									demographic targeted for advertisements help build a brand. Discover, Learn &
									Grow added its logo to apparel, packaging and printed materials to spread the
									word about the business and stand out from the competition.
								
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                    <div className="row">
                       <div className="col-md-4">
                            <div className="card" style={{height: "500px"}}>
                                <div className="card-body text-center" style={{marginTop: "5px"}}> 
                                    <h4 className="card-title" style={{color:"#1cabe8",fontSize:"29px"}}>Branding builds financial value</h4>
                                    <p className="card-text text-justify" style={{lineheight:"1.8",fontSize:"18px"}}>
                                        
                                       
									Companies who publicly trade on a stock exchange are valued at many times the actual
									hard assets of the company. Much of this value is due to the branding of the
									company.
									A strong brand often guarantees future business.
								
                                    
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card" style={{height: "500px"}}>
                                <div className="card-body text-center" style={{marginTop: "5px"}}> 
                                    <h4 className="card-title" style={{color:"#1cabe8",fontSize:"29px"}}>Branding inspires employees</h4>
                                    <p className="card-text text-justify" style={{lineheight:"1.8",fontSize:"18px"}}>
                                        
                                   
									Many employees need more than just work — they need something to work toward.
									When employees understand the mission of a business and its reason for being, they
									are more likely to feel that same pride and work in the same direction to achieve
									the
									goals the business owner has set. Having a strong brand is like turning the company
									logo into a flag the rest of the company can rally around.
								
								
                                    
                                    </p>
                                </div>
                            </div>
                        </div>
                         <div className="col-md-4">
                            <div className="card" style={{height: "500px"}}>
                                <div className="card-body text-center" style={{marginTop: "5px"}}> 
                                    <h4 className="card-title" style={{color:"#1cabe8",fontSize:"29px"}}>Branding generates new customers</h4>
                                    <p className="card-text text-justify" style={{lineheight:"1.8",fontSize:"18px"}}>
                                        
                                   
									Branding can also help a business get word-of-mouth referrals. After all, would a
									client
									be able to tell a friend about Discover, Learn & Grow if they couldn’t remember the
									brand of the learning center? The most profitable companies, small and large, have a
									single thing in common. They have established themselves as a leader in their
									particular
									industry by building a strong brand, starting with a strong logo.
								
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
export default Branding;