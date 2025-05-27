import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from "../../src/assets/logo.svg"
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();

  const navigateRoutes = (path) => {
    navigate(`/${path}`);
    setIsMenuOpen(false);
  };

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <nav className="shadow bg-white px-4 py-2 position-relative d-flex align-items-center justify-content-between">
      {/* Logo always left */}
      <div href="/" className="d-flex align-items-center logo-container" onClick={() => navigateRoutes('')}>
        <img src={logo} alt="Logo" width="135" height="60" />
      </div>

      {/* Desktop Menu aligned right */}
      <div className="d-none d-md-flex align-items-center gap-4"  style={{ marginRight: '12rem' }}>
        <a  style={{fontSize:'12px'}} href='/' className="custom-header-dropdown text-dark text-decoration-none cursor-pointer text-uppercase">Home</a>
        {/* Dropdown */}
        <div className="dropdown">
          <a
            className="dropdown-toggle text-dark text-decoration-none cursor-pointer text-uppercase"
             style={{fontSize:'12px'}}
href="/aboutus"
          >
            About Us <i className="fas fa-angle-double-down ms-2"></i>
          </a>
          <ul className="dropdown-menu show-on-hover"  style={{marginTop:'31%',left:'-50%'}}>
            <li><a className="dropdown-item cursor-pointer text-uppercase" onClick={() => navigateRoutes('aboutus/whoweare')} >Who we are?</a></li>
            <li><a className="dropdown-item cursor-pointer text-uppercase" onClick={() => navigateRoutes('aboutus/ourclients')}>Our Clients</a></li>
          </ul>
        </div>
          <div className="dropdown">
          <a
            className="dropdown-toggle text-dark text-decoration-none cursor-pointer text-uppercase"
             style={{fontSize:'12px'}}
href="/webdevelopment"
          >
            Web Development <i className="fas fa-angle-double-down ms-2"></i>
          </a>
          <ul className="dropdown-menu show-on-hover" style={{marginTop:'19%',left:'-15%'}}>
            <li><a className="dropdown-item cursor-pointer text-uppercase" onClick={() => navigateRoutes('webdevelopment/webiste-development')}>Website Development</a></li>
            <li><a className="dropdown-item cursor-pointer text-uppercase"  onClick={() => navigateRoutes('webdevelopment/e-commerce-development')}>E - Commerce Development</a></li>
            <li><a className="dropdown-item cursor-pointer text-uppercase"  onClick={() => navigateRoutes('webdevelopment/cms-development')}>CMS Development</a></li>
            <li><a className="dropdown-item cursor-pointer text-uppercase"  onClick={() => navigateRoutes('webdevelopment/php-development')}>PHP Development</a></li>
          </ul>
        </div>
          <div className="dropdown">
          <a
            className="dropdown-toggle text-dark text-decoration-none cursor-pointer text-uppercase"
             style={{fontSize:'12px'}}
href="/digitalmarketing"
          >
            Digital Marketing <i className="fas fa-angle-double-down ms-2"></i>
          </a>
          <ul className="dropdown-menu show-on-hover" style={{marginTop:'19%',left:'-17%'}}>
            <li><a className="dropdown-item cursor-pointer text-uppercase"  onClick={() => navigateRoutes('digitalmarketing/search-engine-optimization')}>Search engine optimization</a></li>
            <li><a className="dropdown-item cursor-pointer text-uppercase"  onClick={() => navigateRoutes('digitalmarketing/social-media-optimization')}>Social Media optimization</a></li>
            <li><a className="dropdown-item cursor-pointer text-uppercase"  onClick={() => navigateRoutes('digitalmarketing/social-media-marketing')}>Social Media marketing</a></li>
            <li><a className="dropdown-item cursor-pointer text-uppercase"  onClick={() => navigateRoutes('digitalmarketing/branding')}>Branding</a></li>
            <li><a className="dropdown-item cursor-pointer text-uppercase"  onClick={() => navigateRoutes('digitalmarketing/logo-designing')}>Logo designing</a></li>
            <li><a className="dropdown-item cursor-pointer text-uppercase"  onClick={() => navigateRoutes('digitalmarketing/video-and-text-marketing')}>Video & Text marketing</a></li>          </ul>
        </div>
          <div className="dropdown">
          <a
            className="dropdown-toggle text-dark text-decoration-none cursor-pointer text-uppercase"
            style={{fontSize:'12px'}}
href="/apps-and-software"
          >
            Apps & Software <i className="fas fa-angle-double-down ms-2"></i>
          </a>
          <ul className="dropdown-menu show-on-hover" style={{marginTop:'19%',left:'-18%'}}>
            <li><a className="dropdown-item cursor-pointer text-uppercase"  onClick={() => navigateRoutes('apps-and-software/andriod-apps')}>Andriod apps</a></li>
            <li><a className="dropdown-item cursor-pointer text-uppercase"  onClick={() => navigateRoutes('apps-and-software/ios-apps')}>IOS Apps</a></li>
            <li><a className="dropdown-item cursor-pointer text-uppercase"  onClick={() => navigateRoutes('apps-and-software/hybrid-apps')}>Hybrid Apps</a></li>
            <li><a className="dropdown-item cursor-pointer text-uppercase"  onClick={() => navigateRoutes('apps-and-software/customize-software')}>Customize software</a></li>
          </ul>
        </div>
        
        <a onClick={() => navigateRoutes('company')} style={{fontSize:'12px'}} href="/contactus" className="custom-header-dropdown text-dark text-decoration-none cursor-pointer text-uppercase">Contact Us</a>
 </div>

      {/* Hamburger on right for mobile */}
      <button
        className="btn btn-link text-dark p-2 d-md-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {!isMenuOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        )}
      </button>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="position-absolute top-100 start-0 w-100 bg-white shadow p-3 z-3 d-md-none">
          <a href='/' className="d-block text-dark py-2 cursor-pointer text-uppercase">Home</a>
          <div>
  <a
    className="d-block text-dark py-2 cursor-pointer text-uppercase"
    onClick={() => toggleDropdown('About')}
  >
    About Us
    <i
      className={`fas ${
        activeDropdown === 'About'
          ? 'fa-angle-double-up'
          : 'fa-angle-double-down'
      } ms-2`}
    />
  </a>

  {activeDropdown === 'About' && (
    <div className="ps-3">
      <a onClick={() => navigateRoutes('aboutus/whoweare')} className="d-block text-dark py-1 cursor-pointer text-uppercase">Who we are?</a>
      <a className="d-block text-dark py-1 cursor-pointer text-uppercase"onClick={() => navigateRoutes('aboutus/ourclients')}>Our Clients</a>
    </div>
  )}
</div>

           <div>
            <a
              className="d-block text-dark py-2 cursor-pointer text-uppercase"
              onClick={() => toggleDropdown('webd')}
            >
              Web Development   <i
      className={`fas ${
        activeDropdown === 'webd'
          ? 'fa-angle-double-up'
          : 'fa-angle-double-down'
      } ms-2`}
    />
            </a>
            {activeDropdown === 'webd' && (
              <div className="ps-3">
                <a className="d-block text-dark py-1 cursor-pointer text-uppercase"  onClick={() => navigateRoutes('webdevelopment/webiste-development')}>Website Development</a>
                <a className="d-block text-dark py-1 cursor-pointer text-uppercase" onClick={() => navigateRoutes('webdevelopment/e-commerce-development')}>E - Commerce Development</a>
                <a className="d-block text-dark py-1 cursor-pointer text-uppercase" onClick={() => navigateRoutes('webdevelopment/cms-development')}>CMS Development</a>
                <a className="d-block text-dark py-1 cursor-pointer text-uppercase" onClick={() => navigateRoutes('webdevelopment/php-development')}>PHP Development</a>
</div>
            )}
          </div>
          <div>
            <a
              className="d-block text-dark py-2 cursor-pointer text-uppercase"
              onClick={() => toggleDropdown('digital')}
            >
              Digital Marketing   <i
      className={`fas ${
        activeDropdown === 'digital'
          ? 'fa-angle-double-up'
          : 'fa-angle-double-down'
      } ms-2`}
    />
            </a>
            {activeDropdown === 'digital' && (
              <div className="ps-3">
                <a className="d-block text-dark py-1 cursor-pointer text-uppercase" onClick={() => navigateRoutes('digitalmarketing/search-engine-optimization')}>Search engine optimization</a>
                <a className="d-block text-dark py-1 cursor-pointer text-uppercase"  onClick={() => navigateRoutes('digitalmarketing/social-media-optimization')}>Social Media optimization</a>
                <a className="d-block text-dark py-1 cursor-pointer text-uppercase" onClick={() => navigateRoutes('digitalmarketing/social-media-marketing')}>Social Media marketing</a>
                <a className="d-block text-dark py-1 cursor-pointer text-uppercase" onClick={() => navigateRoutes('digitalmarketing/branding')}>Branding</a>
                <a className="d-block text-dark py-1 cursor-pointer text-uppercase"  onClick={() => navigateRoutes('digitalmarketing/logo-designing')}>Logo designing</a>
                <a className="d-block text-dark py-1 cursor-pointer text-uppercase" onClick={() => navigateRoutes('digitalmarketing/video-and-text-marketing')}>Video & Text marketing</a>
              </div>
            )}
          </div>
          <div>
            <a
              className="d-block text-dark py-2 cursor-pointer text-uppercase"
              onClick={() => toggleDropdown('apps')}
            >
              Apps & Software   <i
      className={`fas ${
        activeDropdown === 'apps'
          ? 'fa-angle-double-up'
          : 'fa-angle-double-down'
      } ms-2`}
    />
            </a>
            {activeDropdown === 'apps' && (
              <div className="ps-3">
                <a className="d-block text-dark py-1 cursor-pointer text-uppercase" onClick={() => navigateRoutes('apps-and-software/andriod-apps')}>Andriod apps</a>
                <a className="d-block text-dark py-1 cursor-pointer text-uppercase" onClick={() => navigateRoutes('apps-and-software/ios-apps')}>IOS Apps</a>
                <a className="d-block text-dark py-1 cursor-pointer text-uppercase" onClick={() => navigateRoutes('apps-and-software/hybrid-apps')}>Hybrid Apps</a>
                <a className="d-block text-dark py-1 cursor-pointer text-uppercase" onClick={() => navigateRoutes('apps-and-software/customize-software')}>Customize software</a>
              </div>
            )}
          </div>
          
           <a href="/contactus" onClick={() => navigateRoutes('contact')} className="d-block text-dark py-2 cursor-pointer text-uppercase">Contact Us</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
