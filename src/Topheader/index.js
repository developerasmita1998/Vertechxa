import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome (or use CDN in index.html)
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import phone from "../assets/phone.png"
import email from "../assets/email.png"
const Topheader = () => {
  return (
    <div className="topheader-start" style={{ backgroundColor: '#d7281f', color: '#fff',height:'32px' }}>
      <div className="container-fluid  px-1">
        <div className="row align-items-center  text-lg-start header-custom-style">
          
          {/* Left side */}
          <div className="col-12 col-lg-6 mb-4 mb-lg-0 d-lg-flex align-items-center justify-content-start gap-3 header-custom-style-inner">
            <div className="d-flex align-items-center gap-2">
             <img src={phone} alt="Phone" width="20" height="20" />
              <span className="top-email">+918409620653</span>
            </div>
            <div className="d-flex align-items-center gap-2">
             <img src={email} alt="Email" width="20" height="20" />
              <span className="top-email" >vertechxa@gmail.com</span>
            </div>
          </div>

          {/* Right side */}
          <div className="col-12 col-lg-6 d-lg-flex align-items-center justify-content-end gap-3 topheader-right-side">
            <span className="me-2 query">FOR ANY QUERY +918409620653</span>
            <button
              className="btn fw-bold text-white free-quote"
             
            >
              FREE QUOTE
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Topheader;
