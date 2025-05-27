import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import axios from "axios";
import man1 from "../../assets/man-image.png";
import carasole1 from "../../assets/Homepage-carasol-1.jpg";
import carasole2 from "../../assets/home-page-carasole-2.jpg";
import carasole3 from "../../assets/Home-page-carasol-3.jpg";
import carasole4 from "../../assets/home-page-carasole-4.jpg";
import carasole5 from "../../assets/Home-page-carasole-5.jpg";
import line from "../../assets/line.png"
import sne from "../../assets/sne.jpg";
import suravansh from "../../assets/suryansh.jpg";
import consult from "../../assets/consult.jpg";
import dhs from "../../assets/dhs.jpg";
import sdp from "../../assets/sd.jpg";
import dep from "../../assets/disha.jpg";
import bwc from "../../assets/bwc.jpg";
import andriod from "../../assets/android.jpg";
import ios from "../../assets/ios.jpg";
import windows from "../../assets/windows.jpg";
import java from "../../assets/java.jpg";
import ractnative from "../../assets/reactNative.jpg";
import python from "../../assets/python.jpg";
import js from "../../assets/javaScript.jpg";
import html from "../../assets/html5.jpg";
import angular from "../../assets/angular.jpg";
import reatjs from "../../assets/reactJS.jpg";
import joomla from "../../assets/joomla.jpg";
import wordpress from "../../assets/wordpress.jpg";
import php from "../../assets/php.jpg";
import cakephp from "../../assets/cakephp.jpg";
import larvel from "../../assets/laravel.jpg";
import drupal from "../../assets/drupal.jpg";
import magneto from "../../assets/magento.jpg";
import code from "../../assets/code_ignitor.jpg";
import node from "../../assets/nodeJS.jpg";
import dotnet from "../../assets/dotnet.jpg";
import mongodb from "../../assets/mongoDB.jpg";
import mysql from "../../assets/mySql.jpg";
import rails from "../../assets/rails.jpg";
import oracle from "../../assets/oracle.jpg";
import woo from "../../assets/woocommerce.jpg";
import presta from "../../assets/prestashop.jpg";
import ecommerce from "../../assets/occommerce.jpg";
import opencart from "../../assets/opencart.jpg";
import xcart from "../../assets/x-cart.jpg";
import zencart from "../../assets/zencart.jpg";
import agile from "../../assets/vertechxa-agile-development.jpg";
import mobile1 from "../../assets/vertechxa-mobile-development.jpg";
import poc from "../../assets/vertechxa-poc.jpg"
import it from "../../assets/vertechxa-IT-consulting.jpg"
import ui from "../../assets/vertechxa-ui-ux.jpg"
import iot from "../../assets/vertechxa-iot-development.jpg"
import man from "../../assets/man.png"
import { useNavigate, Link } from 'react-router-dom';


function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setmessage] = useState("");
  const [error, setError] = useState('')

  const navigate = useNavigate();
  const goToAgile = () => {
    navigate('/agile-web-development');
    navigate('/apps-and-software');
    navigate('/poc');
    navigate('/iot');
    navigate('/itconsulting');
    navigate('/ux');
    navigate('/aboutus');

  };

 


  return (
    <div>
      <div id="slider" className="carousel slide" data-bs-ride="carousel" data-interval="2000">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#slider" data-bs-slide-to="0" className="active" aria-current="true"></button>
          <button type="button" data-bs-target="#slider" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#slider" data-bs-slide-to="2"></button>
          <button type="button" data-bs-target="#slider" data-bs-slide-to="3"></button>
          <button type="button" data-bs-target="#slider" data-bs-slide-to="4"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={carasole1} className="img-fluid" alt="Slide 1" />
            <div className="carousel-caption">
              <h3 className="swap28">Web Design & Hosting</h3>
              <ul>
                <li>Clear, User-friendly Navigation</li>
                <li>Responsive Design</li>
                <li>Lite-weight & SEO Friendly</li>
              </ul>
              <a href="contact.html" className="btn button">Read More</a>
            </div>

          </div>
          <div className="carousel-item">
            <img src={carasole2} className="img-fluid" alt="Slide 2" />
            <div className="carousel-caption">
              <h3 className="swap28">Mobile APP <br />Development</h3>
              <ul>
                <li>Brand awareness</li>
                <li>Adwords to get instant results</li>
                <li>Branding of social media</li>
              </ul>
              <a href="contact.html" className="btn button">Read More</a>
            </div>

          </div>
          <div className="carousel-item">
            <img src={carasole3} className="img-fluid" alt="Slide 3" />
            <div className="carousel-caption">
              <h3 className="swap28">Digital Marketing</h3>
              <ul>
                <li>Simplicity & Speed</li>
                <li>Flexibility & Security</li>
                <li>Push notifications & Feedback</li>
              </ul>
              <a href="contact.html" className="btn button">Read More</a>
            </div>

          </div>
          <div className="carousel-item">
            <img src={carasole4} className="img-fluid" alt="Slide 4" />
            <div className="carousel-caption">
              <h3 className="swap28">Branding</h3>
              <ul>
                <li>Host a Domain With Free Emails</li>
                <li>Free SSL With Annual Plan</li>
                <li>99.9% Uptime & 24/7 Support</li>
              </ul>
              <a href="contact.html" className="btn button">Read More</a>
            </div>

          </div>
          <div className="carousel-item">
            <img src={carasole5} className="img-fluid" alt="Slide 5" />
            <div className="carousel-caption">
              <h3 className="swap28">Mobile APP <br />Development</h3>
              <ul>
                <li>Brand awareness</li>
                <li>Adwords to get instant results</li>
                <li>Branding of social media</li>
              </ul>
              <a href="contact.html" className="btn button">Read More</a>
            </div>

          </div>
        </div>
        <a className="carousel-control-prev" href="#slider" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </a>

        <button className="carousel-control-prev" type="button" data-bs-target="#slider" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#slider" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <section className="entry-content mt-5 py-5 swap-py" id="aboutus">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
              <h1 className="widget-title text-center">
                Welcome To <span className="vertech-black">Vertech</span>
                <span className="vertech-red">xa</span>
              </h1>
              <img className="line" src={line} alt="Software Development Company in Pune" />
              <p className="text-secondary">
                Vertech<span className="vertech-red">xa</span> is a Product, Service and Software development company.
                We are focused on IoT, Mobile and Web Applications Development.
              </p>
              <p className="text-secondary">
                We provide end-to-end solutions to OEMs interested in IoT enabled products.
                End-to-end development of Mobile and Web based applications.
                We are expert in Hardware Design, Embedded Software, Cloud, Web and Mobile Applications.
              </p>
              <Link className="btn" to="/aboutus">Know More</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="graybg ceo-sec entry-content mt-5 fq">
        <div className="container">
          <div className="row">
            <div className="col-sm-7 quote-img">
              <img src={man} alt="ceo" className="img-fluid" />
            </div>
            <div className="col-sm-5 ceo-info py-5 text-center fbg aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
              <h1 className="widget-title text-center" id="freeQuote">Free Quote</h1>
              <img src={line} alt="line" className="line mx-auto d-block" />
             <form onSubmit={(e) => {
  e.preventDefault();
  
  const formData = {
    name,
    email,
    mobile,
    subject,
    message
  };

  // Get existing submissions
  const existing = JSON.parse(localStorage.getItem("formSubmissions")) || [];

  // Append new one
  existing.push(formData);

  // Save back to localStorage
  localStorage.setItem("formSubmissions", JSON.stringify(existing));

  alert("Form submitted and saved locally!");

  // Reset form
  setName("");
  setEmail("");
  setMobile("");
  setSubject("");
  setmessage("");
}}>
              <div className="field">
                <input
                  className="comming_place"
                  name="name"
                  type="text"
                  placeholder="Your Name:"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                />
                <input
                  className="comming_place"
                  name="email"
                  type="email"
                  placeholder="Email Address:"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
                <input
                  className="comming_place"
                  name="mobile"
                  type="text"
                  placeholder="Phone Number:"
                  value={mobile}
                  onChange={(e)=>setMobile(e.target.value)}
                />
                <input
                  className="comming_place"
                  name="sub"
                  type="text"
                  placeholder="What We Can Do For You:"
                  value={subject}
                  onChange={(e)=>setSubject(e.target.value)}
                />
                <textarea
                  className="comming_place"
                  name="msg"
                  placeholder="Comment:"
                  value={message}
                  onChange={(e)=>setmessage(e.target.value)}></textarea>
                <input
                  className="coming_place"
                  id="submit"
                  type="submit"
                  value="Submit"
                />
              </div>
            </form>
            </div>
          </div>

        </div>

      </section>
      <section className="entry-content mt-5">
        <div className="container">
          <h1 className="widget-title text-center">Our Services</h1>
          <img src={line} alt="line" className="line mx-auto d-block" />
          <div className="row">
            <div className="col-sm-4 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
              <div className="spser">
                <div className="effect-box4">
                  <img src={agile} alt="service" />
                  <div className="overlay4">
                    <div className="text4">
                      <p>
                        IoT development projects are everywhere, and affordable, advanced technology is
                        the driving force behind this fast-growing phenomenon.
                      </p>
                      <Link className="btn" to="/agile-web-development">Know More</Link>

                    </div>
                  </div>
                </div>
                <h4>Agile Web Development</h4>
              </div>
            </div>
            <div className="col-sm-4 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
              <div className="spser">
                <div className="effect-box4">
                  <img src={mobile1} alt="service" />
                  <div className="overlay4">
                    <div className="text4">
                      <p>
                        IoT development projects are everywhere, and affordable, advanced technology is
                        the driving force behind this fast-growing phenomenon.
                      </p>
                      <Link className="btn" to="/apps-and-software">Know More</Link>
                    </div>
                  </div>
                </div>
                <h4>Agile Web Development</h4>
              </div>
            </div>

            <div className="col-sm-4 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
              <div className="spser">
                <div className="effect-box4">
                  <img src={poc} alt="service" />
                  <div className="overlay4">
                    <div className="text4">
                      <p>
                        IoT development projects are everywhere, and affordable, advanced technology is
                        the driving force behind this fast-growing phenomenon.
                      </p>
                      <Link className="btn" to="/poc">Know More</Link>
                    </div>
                  </div>
                </div>
                <h4>POC</h4>
              </div>
            </div>
            <div className="col-sm-4 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
              <div className="spser">
                <div className="effect-box4">
                  <img src={iot} alt="service" />
                  <div className="overlay4">
                    <div className="text4">
                      <p>
                        IoT development projects are everywhere, and affordable, advanced technology is
                        the driving force behind this fast-growing phenomenon.
                      </p>
                      <Link className="btn" to="/iot">Know More</Link>
                    </div>
                  </div>
                </div>
                <h4>IOT Development</h4>
              </div>
            </div>
            <div className="col-sm-4 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
              <div className="spser">
                <div className="effect-box4">
                  <img src={it} alt="service" />
                  <div className="overlay4">
                    <div className="text4">
                      <p>
                        IoT development projects are everywhere, and affordable, advanced technology is
                        the driving force behind this fast-growing phenomenon.
                      </p>
                      <Link className="btn" to="/itconsulting">Know More</Link>
                    </div>
                  </div>
                </div>
                <h4>IT Consulting</h4>
              </div>
            </div>
            <div className="col-sm-4 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
              <div className="spser">
                <div className="effect-box4">
                  <img src={ui} alt="service" />
                  <div className="overlay4">
                    <div className="text4">
                      <p>
                        IoT development projects are everywhere, and affordable, advanced technology is
                        the driving force behind this fast-growing phenomenon.
                      </p>
                      <Link className="btn" to="/ux">Know More</Link>
                    </div>
                  </div>
                </div>
                <h4>UI/UX Design</h4>
              </div>
            </div>

          </div>

        </div>

      </section>



      <section className="entry-content mt-5 graybg tg">
        <div className="container">
          <h1 className="widget-title text-center">Technology We Work</h1>
          <img src={line} alt="line" className="line mx-auto d-block" />
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <ul className="tech-list">
                <li className="aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                  <img src={andriod} alt="tech" />
                </li>
                <li className="aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                  <img src={ios} alt="tech" />
                </li>
                <li className="aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                  <img src={windows} alt="tech" />
                </li>
                <li className="aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                  <img src={java} alt="tech" />
                </li>
                <li className="aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                  <img src={ractnative} alt="tech" />
                </li>
                <li className="aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                  <img src={python} alt="tech" />
                </li>
                <li className="aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                  <img src={js} alt="tech" />
                </li>
                <li className="aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                  <img src={html} alt="tech" />
                </li>
                <li className="aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                  <img src={angular} alt="tech" />
                </li>
                <li className="aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                  <img src={reatjs} alt="tech" />
                </li>
                <li className="aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                  <img src={joomla} alt="tech" />
                </li>
                <li className="aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                  <img src={wordpress} alt="tech" />
                </li>
                <li className="aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                  <img src={php} alt="tech" />
                </li>
                <li className="aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                  <img src={cakephp} alt="tech" />
                </li>
                <li className="aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                  <img src={larvel} alt="tech" />
                </li>
                <li className="aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                  <img src={drupal} alt="tech" />
                </li>
                <li className="aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                  <img src={magneto} alt="tech" />
                </li>
                <li className="aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                  <img src={code} alt="tech" />
                </li>
                <li className="aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                  <img src={node} alt="tech" />
                </li>
                <li className="aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                  <img src={dotnet} alt="tech" />
                </li>
                <li className="aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                  <img src={mongodb} alt="tech" />
                </li>
                <li className="aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                  <img src={mysql} alt="tech" />
                </li>
                <li className="aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                  <img src={rails} alt="tech" />
                </li>
                <li className="aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                  <img src={oracle} alt="tech" />
                </li>
                <li className="aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                  <img src={woo} alt="tech" />
                </li>
                <li className="aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                  <img src={presta} alt="tech" />
                </li>
                <li className="aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                  <img src={ecommerce} alt="tech" />
                </li>
                <li className="aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                  <img src={opencart} alt="tech" />
                </li>
                <li className="aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                  <img src={xcart} alt="tech" />
                </li>
                <li className="aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                  <img src={zencart} alt="tech" />
                </li>
              </ul>
            </div>
          </div>
        </div>


      </section>

      <section className="entry-content mt-5 py-5" id="our-client">
        <div className="container">
          <h1 className="widget-title text-center">Our Clients</h1>
          <img src={line} alt="line" className="line mx-auto d-block" />
          <div className="row aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
            <div className="col-sm-6 col-lg-4 swap25">
              <div className="item">
                <img src={sne} alt="client" />
              </div>
              <h5 className="swaphd">Shri Naryan Engineering</h5>
            </div>
            <div className="col-sm-6 col-lg-4 swap25">
              <div className="item">
                <img src={suravansh} alt="client" />
              </div>
              <h5 className="swaphd"> Suryansh Enterprises</h5>
            </div>
            <div className="col-sm-6 col-lg-4 swap25">
              <div className="item">
                <img src={consult} alt="client" />
              </div>
              <h5 className="swaphd"> Consult Way</h5>
            </div>
          </div>
          <div className="row aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
            <div className="col-sm-6 col-lg-4 swap25">
              <div className="item">
                <img src={dhs} alt="client" />
              </div>
              <h5 className="swaphd"> DHS</h5>
            </div>
            <div className="col-sm-6 col-lg-4 swap25">
              <div className="item">
                <img src={sdp} alt="client" />
              </div>
              <h5 className="swaphd">  S.D. Public School</h5>
            </div>
            <div className="col-sm-6 col-lg-4 swap25">
              <div className="item">
                <img src={dep} alt="client" />
              </div>
              <h5 className="swaphd">  Disha ek Prayas</h5>
            </div>
          </div>
          <div className="row aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
            <div className="col-sm-6 col-lg-4 swap25">
              <div className="item">
                <img src={bwc} alt="client" />
              </div>
              <h5 className="swaphd">  Bihar Women's Creation</h5>
            </div>
          </div>
        </div>
      </section>
    </div>

  );
}

export default Home;
