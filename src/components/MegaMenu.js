import React from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";
import styles from "@/styles/Megamenu.module.css";

function MegaMenu() {
  return (
    <>
      <div className={styles.megaMenuHdr}>
        <Container>
          <nav className="navbar navbar-expand-sm navbar-dark">
            <Link className="navbar-brand" href="#">
              Nextupgrad USA
            </Link>
            <label
              className="navbar-toggler navbar-toggler-right"
              htmlFor="nav-toggle-check"
            >
              <span className="navbar-toggler-icon"></span>
            </label>
            <input type="checkbox" className="hidden" id="nav-toggle-check" />
            <div className="collapse navbar-collapse" id="navbarColor01">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item mega-dropdown">
                  <Link className="nav-link" href="#">
                    SEO & Lead Generation
                  </Link>
                  <div className="megamenu">
                    <div className="container">
                      <div className="row">
                        <div className="col-xs-12 col-sm">
                          <h3>Organic SEO</h3>
                          <ul className="list-group">
                            <li className="list-group-item">SEO Services</li>
                            <li className="list-group-item">
                              Enterprise SEO Services
                            </li>
                            <li className="list-group-item">
                              Digital Marketing Services
                            </li>
                            <li className="list-group-item">
                              Google Local Services Ads Management
                            </li>
                            <li className="list-group-item">SEO Audits</li>
                            <li className="list-group-item">
                              Generative Engine & Chat Optimization
                            </li>
                          </ul>
                        </div>
                        <div className="col-xs-12 col-sm">
                          <h3>Digital Advertising</h3>
                          <ul className="list-group">
                            <li className="list-group-item">
                              PPC Management Services
                            </li>
                            <li className="list-group-item">
                              Enterprise PPC Management Services
                            </li>
                            <li className="list-group-item">
                              Social Media Advertising
                            </li>
                            <li className="list-group-item">
                              Enterprise Social Media Advertising
                            </li>
                          </ul>
                        </div>
                        <div className="col-xs-12 col-sm">
                          <h3>Ecommerce</h3>
                          <ul className="list-group">
                            <li className="list-group-item">
                              Ecommerce SEO Services
                            </li>
                            <li className="list-group-item">
                              Ecommerce PPC Services
                            </li>
                            <li className="list-group-item">
                              Ecommerce Social Media Advertising
                            </li>
                            <li className="list-group-item">
                              B2B Ecommerce Enablement
                            </li>
                            <li className="list-group-item">
                              Ecommerce Digital Marketing Services
                            </li>
                            <li className="list-group-item">
                              Ecommerce Marketing Resources
                            </li>
                          </ul>
                        </div>
                        <div className="col-xs-12 col-sm">
                          <h3>Learn</h3>
                          <ul className="list-group">
                            <li className="list-group-item">Our SEO Results</li>
                            <li className="list-group-item">
                              Our SEO Case Studies
                            </li>
                            <li className="list-group-item">
                              What Is an SEO Company?
                            </li>
                            <li className="list-group-item">
                              How to Find the Best SEO Company
                            </li>
                            <li className="list-group-item">
                              SEO Guide for Marketing Managers
                            </li>
                            <li className="list-group-item">
                              What Is Digital Marketing?
                            </li>
                            <li className="list-group-item">
                              Best Digital Marketing Tools
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item mega-dropdown">
                  <Link className="nav-link" href="#">
                    Revenue Marketing & CRO
                  </Link>
                  <div className="megamenu">
                    <div className="container">
                      <div className="row">
                        <div className="col-xs-12 col-sm">
                          <h3>Conversion</h3>
                          <ul className="list-group">
                            <li className="list-group-item">
                              Conversion Rate Optimization
                            </li>
                            <li className="list-group-item">
                              User Experience Testing
                            </li>
                            <li className="list-group-item">
                              Landing Pages & Funnels
                            </li>
                            <li className="list-group-item">
                              Online Review Acceleration
                            </li>
                            <li className="list-group-item">
                              Website Personalization
                            </li>
                          </ul>
                        </div>
                        <div className="col-xs-12 col-sm">
                          <h3>Marketing Automation</h3>
                          <ul className="list-group">
                            <li className="list-group-item">
                              Account-Based Marketing Services
                            </li>
                            <li className="list-group-item">
                              Lead Nurture Email Marketing
                            </li>
                            <li className="list-group-item">
                              Email Marketing Management
                            </li>
                            <li className="list-group-item">
                              Salesforce Marketing Automation
                            </li>
                            <li className="list-group-item">
                              Microsoft Dynamics Marketing Automation
                            </li>
                          </ul>
                        </div>
                        <div className="col-xs-12 col-sm">
                          <h3>E-commerce Platefom</h3>
                          <ul className="list-group">
                            <li className="list-group-item">SEO for Amazon</li>
                            <li className="list-group-item">
                              Advertising Management for Amazon
                            </li>
                            <li className="list-group-item">
                              Shopify Optimization Services
                            </li>
                            <li className="list-group-item">
                              Facebook Marketplace for Business
                            </li>
                            <li className="list-group-item">
                              Influencer Marketing Services
                            </li>
                            <li className="list-group-item">
                              Walmart Marketplace Advertising
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item mega-dropdown">
                  <Link className="nav-link" href="#">
                    Design & Development
                  </Link>
                  <div className="megamenu">
                    <div className="container">
                      <div className="row">
                        <div className="col-xs-12 col-sm">
                          <h3>Design</h3>
                          <ul className="list-group">
                            <li className="list-group-item">Website Design</li>
                            <li className="list-group-item">
                              Website Redesign
                            </li>
                            <li className="list-group-item">
                              Rapid Website Design
                            </li>
                            <li className="list-group-item">
                              Social Media Design
                            </li>
                            <li className="list-group-item">
                              E-commerce website Design
                            </li>
                            <li className="list-group-item">
                              Email Marketing Testing & Design
                            </li>
                          </ul>
                        </div>
                        <div className="col-xs-12 col-sm">
                          <h3>Content Marketing</h3>
                          <ul className="list-group">
                            <li className="list-group-item">SEO Copywriting</li>
                            <li className="list-group-item">
                              Content Marketing Services
                            </li>
                            <li className="list-group-item">
                              Social Media Management
                            </li>
                            <li className="list-group-item">
                              Inforgraphic & Motion Graphics
                            </li>
                            <li className="list-group-item">
                              Youtube Advertising
                            </li>
                          </ul>
                        </div>
                        <div className="col-xs-12 col-sm">
                          <h3>Website Development</h3>
                          <ul className="list-group">
                            <li className="list-group-item">
                              Digital Experience Development
                            </li>
                            <li className="list-group-item">
                              Shopify E-commerce Development
                            </li>
                            <li className="list-group-item">
                              Magento E-commerce Development
                            </li>
                            <li className="list-group-item">
                              WordPress Development
                            </li>
                            <li className="list-group-item">Wix</li>
                            <li className="list-group-item">Duda</li>
                            <li className="list-group-item">Square Space</li>
                            <li className="list-group-item">Web Flow</li>
                            <li className="list-group-item">
                              Custom Website Development
                            </li>
                            <li className="list-group-item">
                              Web Infrastructure & Maintenance
                            </li>
                            <li className="list-group-item">
                              AI & GPT Integration
                            </li>
                            <li className="list-group-item">
                              Content Management Systems
                            </li>
                          </ul>
                        </div>
                        <div className="col-xs-12 col-sm">
                          <h3>Mobile App Development</h3>
                          <ul className="list-group">
                            <li className="list-group-item">
                              iOS App Development
                            </li>
                            <li className="list-group-item">
                              Android App Development
                            </li>
                            <li className="list-group-item">
                              Cross-Platform App Development
                            </li>
                            <li className="list-group-item">
                              Progressive Web App Development
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item mega-dropdown">
                  <Link className="nav-link" href="#">
                    Technology
                  </Link>
                  <div className="megamenu">
                    <div className="container">
                      <div className="row">
                        <div className="col-xs-12 col-sm">
                          <h3>Revenue Acceleration Platform</h3>
                          <ul className="list-group">
                            <li className="list-group-item">Cras justo odio</li>
                            <li className="list-group-item">
                              Dapibus ac facilisis in
                            </li>
                            <li className="list-group-item">Morbi leo risus</li>
                            <li className="list-group-item">
                              Porta ac consectetur ac
                            </li>
                            <li className="list-group-item">
                              Vestibulum at eros
                            </li>
                            <li className="list-group-item">
                              Vestibulum at eros
                            </li>
                          </ul>
                        </div>
                        <div className="col-xs-12 col-sm">
                          <h3>Measurement</h3>
                          <ul className="list-group">
                            <li className="list-group-item">Cras justo odio</li>
                            <li className="list-group-item">
                              Dapibus ac facilisis in
                            </li>
                            <li className="list-group-item">Morbi leo risus</li>
                            <li className="list-group-item">
                              Porta ac consectetur ac
                            </li>
                            <li className="list-group-item">
                              Vestibulum at eros
                            </li>
                            <li className="list-group-item">
                              Vestibulum at eros
                            </li>
                          </ul>
                        </div>
                        <div className="col-xs-12 col-sm">
                          <h3>Resorces</h3>
                          <ul className="list-group">
                            <li className="list-group-item">What Is a CRM?</li>
                            <li className="list-group-item">
                              Data-Driven Marketing Guide
                            </li>
                            <li className="list-group-item">What Is a CDP?</li>
                            <li className="list-group-item">What Is ERP?</li>
                            <li className="list-group-item">
                              What Is AI Marketing?
                            </li>
                            <li className="list-group-item">
                              What are CRM Integrations?
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item mega-dropdown">
                  <Link className="nav-link" href="#">
                    Who We Are
                  </Link>
                  <div className="megamenu">
                    <div className="container">
                      <div className="row">
                        <div className="col-xs-12 col-sm">
                          <h3>Who We Are</h3>
                          <ul className="list-group">
                            <li className="list-group-item">Our Approach</li>
                            <li className="list-group-item">About Us</li>
                            <li className="list-group-item">
                              Careers (We Are Hiring!)
                            </li>
                            <li className="list-group-item">Contact Info</li>
                            <li className="list-group-item">WebFX Reviews</li>
                            <li className="list-group-item">Awards</li>
                          </ul>
                        </div>
                        <div className="col-xs-12 col-sm">
                          <h3>Community Impact</h3>
                          <ul className="list-group">
                            <li className="list-group-item">Company Values</li>
                            <li className="list-group-item">
                              Community Impact
                            </li>
                            <li className="list-group-item">FXBuilds</li>
                            <li className="list-group-item">
                              Equality at WebFX
                            </li>
                            <li className="list-group-item">STEMFX Program</li>
                            <li className="list-group-item">WebFX History</li>
                          </ul>
                        </div>
                        <div className="col-xs-12 col-sm">
                          <h3>Pricing Guides</h3>
                          <ul className="list-group">
                            <li className="list-group-item">
                              How Much Should a Website Cost?
                            </li>
                            <li className="list-group-item">
                              How Much Does PPC Cost?
                            </li>
                            <li className="list-group-item">
                              Email Marketing Pricing
                            </li>
                            <li className="list-group-item">
                              Social Media Pricing
                            </li>
                            <li className="list-group-item">SEO Pricing</li>
                            <li className="list-group-item">
                              Local SEO Pricing
                            </li>
                          </ul>
                        </div>
                        <div className="col-xs-12 col-sm">
                          <h3>Content Library</h3>
                          <ul className="list-group">
                            <li className="list-group-item">Cras justo odio</li>
                            <li className="list-group-item">
                              Dapibus ac facilisis in
                            </li>
                            <li className="list-group-item">Morbi leo risus</li>
                            <li className="list-group-item">
                              Porta ac consectetur ac
                            </li>
                            <li className="list-group-item">
                              Vestibulum at eros
                            </li>
                          </ul>
                        </div>
                        <div className="col-xs-12 col-sm">
                          <h3>Resource</h3>
                          <ul className="list-group">
                            <li className="list-group-item">Infographic</li>
                            <li className="list-group-item">Blog</li>
                            <li className="list-group-item">E-Books</li>
                            <li className="list-group-item">Lead Magnet</li>
                            <li className="list-group-item">Podcast</li>
                            <li className="list-group-item">
                              What Is an SEO Company?
                            </li>
                            <li className="list-group-item">
                              How to Find the Best SEO Company
                            </li>
                            <li className="list-group-item">
                              SEO Guide for Marketing Managers
                            </li>
                            <li className="list-group-item">
                              What Is Digital Marketing?
                            </li>
                            <li className="list-group-item">
                              Best Digital Marketing Tools
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#">
                    {"Let's Talk"}
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </Container>
      </div>
    </>
  );
}

export default MegaMenu;
