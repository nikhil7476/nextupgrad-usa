import React, { useState } from 'react';
import '@/styles/Header.module.css'; // Assuming you have the CSS file for styles

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header" id="header">
      <nav className="navbar container">
        {/* Navbar Left Section */}
        <section className="navbar__left">
          <a href="#" className="brand">
            <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 192.756 192.756">
              <g fillRule="evenodd" clipRule="evenodd">
                <path fill="#fff" fillOpacity="0" d="M0 0h192.756v192.756H0V0z" />
                <path
                  d="M130.424 44.314c6.051-3.026 9.156-2.561 9.234.465.076 3.957-.545 9.233-.934 13.035-2.326 20.64-6.051 37.477-6.361 58.737..."
                  fill="#c7232f"
                />
              </g>
            </svg>
          </a>
          <div className={`burger ${menuOpen ? 'active' : ''}`} id="burger" onClick={toggleMenu}>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </div>
        </section>

        {/* Navbar Center Section */}
        <section className={`navbar__center ${menuOpen ? 'open' : ''}`}>
          <span className="overlay" onClick={toggleMenu}></span>
          <div className="menu" id="menu">
            <div className="menu__header">
              <span className="menu__arrow"><i className="bx bx-chevron-left"></i></span>
              <span className="menu__title"></span>
            </div>
            <ul className="menu__inner">
              <li className="menu__item"><a href="#" className="menu__link">Home</a></li>
              <li className="menu__item menu__dropdown">
                <a href="#" className="menu__link">
                  SEO & Lead Generation
                  <i className="bx bx-chevron-right"></i>
                </a>
                <div className="submenu megamenu__text">
                  {/* Submenu Content */}
                  <div className="submenu__inner">
                    <h4 className="submenu__title">Organic SEO</h4>
                    <ul className="submenu__list">
                      <li><a href="#">SEO Services</a></li>
                      <li><a href="#">Local SEO Services</a></li>
                      <li><a href="#">Digital Marketing Services</a></li>
                      <li><a href="#">Enterprise SEO Services</a></li>
                      <li><a href="#">Google Local Services Ads Management</a></li>
                      <li><a href="#">SEO Audits</a></li>
                    </ul>
                  </div>
                  {/* Repeat for other categories */}
                </div>
              </li>
              {/* Repeat for Design & Development */}
            </ul>
          </div>
        </section>
      </nav>
    </header>
  );
};

export default Header;
