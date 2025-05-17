import React from 'react'
import logo from "../assets/logo.svg"
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';


function Navbar() {

  return (
    <div className='container'>
<div className='navbar-parent'>
      <nav className='navbar'>
<div className='navbar-logo'>      
<img src={logo} />
</div>
      <nav className='navbar-inner'>

<Link className='nav-link-home' to="/">HOME</Link>
              <div className="dropdown">
               <div className="dropdown-menu">
              <Link to="/aboutus/who-we-are">WHO WE ARE</Link>
              <Link to="/aboutus/clients">OUR CLIENTS</Link>
               </div>
               </div>

<div className="dropdown">
  <Link className="nav-link" to="/aboutus">
    ABOUT US <span className="dropdown-icon"><i class="fas fa-angle-double-down"></i>
</span>
  </Link>
  <div className="dropdown-menu">
    <Link to="/aboutus/whoweare">WHO WE ARE?</Link>
    <Link to="/aboutus/ourclients" className="last-item">OUR CLIENTS</Link>
  </div>
</div>

<div className="dropdown">
  <Link className="nav-link" to="/webdevelopment">
    WEB DEVELOPMENT <span className="dropdown-icon"><i class="fas fa-angle-double-down"></i>
</span>
  </Link>
               <div className="dropdown-menu">
              <Link to="/webdevelopment/webiste-development">WEBSITE DEVELOPMENT</Link>
              <Link to="/webdevelopment/e-commerce-development">E-COMMERCE DEVELOPMENT</Link>
              <Link to="/webdevelopment/cms-development">CMS DEVELOPMENT</Link>
              <Link to="/webdevelopment/php-development">PHP DEVELOPMENT</Link>
               </div>
               </div>
<div className="dropdown">
  <Link className="nav-link" to="/digitalmarketing">DIGITAL MARKETING 
<span className="dropdown-icon"><i class="fas fa-angle-double-down"></i>
</span>
  </Link>
               <div className="dropdown-menu">
              <Link to="/digitalmarketing/search-engine-optimization">SEARCH ENGINE OPTIMIZATION</Link>
              <Link to="/digitalmarketing/social-media-optimization">SOCIAL MEDIA OPTIMIZATION</Link>
              <Link to="/digitalmarketing/social-media-marketing">SOCIAL MEDIA MARKETING </Link>
              <Link to="/digitalmarketing/branding">BRANDING</Link>
              <Link to="/digitalmarketing/logo-designing">LOGO DESIGNING</Link>
              <Link to="/digitalmarketing/video-and-text-marketing">VIDEO & TEXT MARKETING</Link>

               </div>
               </div>
<div className="dropdown">
  <Link className="nav-link" to="/apps-and-software">
    APPS & SOFTWARE<span className="dropdown-icon"><i class="fas fa-angle-double-down"></i>
</span>
  </Link>
   <div className="dropdown-menu">
              <Link to="/apps-and-software/andriod-apps">ANDRIOD APPS</Link>
              <Link to="/apps-and-software/ios-apps">IOS APPS</Link>
              <Link to="/apps-and-software/hybrid-apps">HYBRID APPS</Link>
              <Link to="/apps-and-software/customize-software" className="last-item">CUSTOMIZE SOFTWARE</Link>
               </div>
               </div>

<Link className='nav-link-contact' to="/contactus">CONTACT US</Link>



     </nav>


     </nav>
    </div></div>
  )
}

export default Navbar;
