import React from 'react'
import phone from '../assets/phone.png';
import email from '../assets/email.png';

function Topheader() {
  return (
     <div className="top-header">
      <div className="left-info">
        <img src={phone} alt="phone" />
        <span className='left-info-span-number'> +91-8400632063</span>
        <img src={email} alt="email" />

        <span className='left-info-span-email'>vertesbvc@gmail.com</span>
       </div>
        <div className="right-info">
        <span className='right-info-span'>FOR ANY QUERY +91-8400632063</span>
        <button className="quote-btn">FREE QUOTE</button>
      </div>
    </div>
  )
}

export default Topheader;
