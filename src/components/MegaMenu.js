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
                      </div>
                    </div>
                  </div>
                </li>
                <li class="nav-item">
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
