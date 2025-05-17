import React ,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import android from '../../assets/android.png'
import ios from "../../assets/ios.png"
import customizeapps from "../../assets/customize-app.jpg"
import hybrid from "../../assets/hybrid-app-software.jpg"
function Appsandsoftwares() {
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
                <h1 className="mb-5">Apps & Software</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="digital-marketing-section2 my-5">

        <div className="digital-marketing-inner py-5">
          <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
            <div className="row">
              <div className="col-md-6">
                <div className="img card-1">
                  <img src={android} alt="android" className="img-fluid" />
                </div>
                <div className="card">
                  <div className="card-body text-center">
                    <h4 className='card-title'>Android Apps</h4>
                    <p className="card-text text-justify">
	            				Android is a Linux based operating system which is mainly designed for touch screen mobile devices such as smart phones and ...</p>
                    <a href="/android" className="btn btn-primary">Read More</a>
                    </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="img card-2">
                  <img src={ios} alt="android" className="img-fluid" />
                </div>
                <div className="card">
                  <div className="card-body text-center">
                    <h4 className='card-title'>Android Apps</h4>
                    <p className="card-text text-justify">
	            				Android is a Linux based operating system which is mainly designed for touch screen mobile devices such as smart phones and ...</p>
                    <a href="/android" className="btn btn-primary">Read More</a>
                    </div>
                </div>
              </div>
              </div>
          </div>
        </div>
      </div>

 <div className="digital-marketing-section3 my-5">

        <div className="digital-marketing-inner3 py-5">
          <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
            <div className="row">
              <div className="col-md-6" data-aos="fade-up" data-aos-duration="1000">
                <div className="img card-3">
                  <img src={customizeapps} alt="customize apps" className="img-fluid" />
                </div>
                <div className="card">
                  <div className="card-body text-center">
                    <h4 className='card-title'>Customize Apps</h4>
                    <p className="card-text text-justify">

	            				A technology oriented and Pune based company, Vertech <span style={{ color: "#da251d" }}>xa</span>    Technology is one of the best software services companies providing you... </p>                <a href="/android" className="btn btn-primary">Read More</a>
                    </div>
                </div>
              </div>
              <div className="col-md-6" data-aos="fade-up" data-aos-duration="1000">
                <div className="img card-4">
                  <img src={hybrid} alt="hybrid" className="img-fluid" />
                </div>
                <div className="card">
                  <div className="card-body text-center">
                    <h4 className='card-title'>Hybrid Apps</h4>
                    <p className="card-text text-justify">
                              
	            				Vertech <span style={{ color: "#da251d" }}>xa</span>     Technology uses the Hybrid Mobile App Development to offer the most effective mobile app solution. </p>
                    <a href="/android" className="btn btn-primary">Read More</a>
                    </div>
                </div>
              </div>
              </div>
          </div>
        </div>
      </div>

      </div>


  );
}

export default Appsandsoftwares;
