import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import phone from "../../assets/phone.png";
import line from "../../assets/line.png";
function Contactus() {
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
                <h1 className="mb-5">Contact Us</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7564.621423832209!2d73.94927082103021!3d18.56002559954386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3dbcbd5f12f%3A0xcd7dd569ee6edd06!2sCity%20Vista!5e0!3m2!1sen!2sin!4v1600768780597!5m2!1sen!2sin" width="100%" height="450" frameborder="0" style={{ border: "0" }}></iframe>

      <section className="contactbg">
        <div className="contact-inner">
          <div className="container py-5">
            <div className="row">
              <div className="col-md-12 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                <div className="widget text-center">
                  <h3 className="widget-title text-center" style={{ color: "#da251d", fontSize: "37px" }}>Get In Touch</h3>
                  <p>
                    <img src={phone} alt="line" />
                    <span style={{ color: "#ffffff" }}>+91-8409620653</span><br /><br />
                    <img src={line} alt="line" />
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                <form action="https://www.vertechxa.com/ThankYou.php" method="post">
                  <div className="row">
                    <div className="col-md-6 col-sm-6">
                      <div className="field">
                        <input className="comming_place" id="y_name" autocomplete="off" name="name" type="text" placeholder="Your Name:" required="" />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <div className="field">
                        <input className="comming_place" id="e_mail" autocomplete="off" name="email" type="email" placeholder="Email Address:" required="" />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <div className="field">
                        <input className="comming_place" id="phone_no" autocomplete="off" name="mobile" type="text" placeholder="Phone Number:" required="" />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <div className="field">
                        <input className="comming_place" id="subject" autocomplete="off" name="sub" type="text" placeholder="Subject:" />
                      </div>
                    </div>
                    <div className="col-md-12 col-sm-12">
                      <div className="field">
                        <textarea className="comming_place" id="message" autocomplete="off" name="msg" placeholder="Message:"></textarea>
                      </div>
                    </div>
                    <div className="col-md-12 col-sm-12">
                      <div className="field">
                        <input style={{ border: "none", backgroundColor: "#da251d", color: "white", padding: 0 }} className="coming_place" type="submit" name="submit" id="submit" value="Submit" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contactus;
