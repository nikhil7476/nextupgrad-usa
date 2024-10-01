import React from "react";
import Link from "next/link";
import styles from "@/styles/Megamenu.module.css";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { useState } from "react";

function MegaMenu() {
  const [activeKey, setActiveKey] = useState("first");
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
                            <li className="list-group-item">
                              <Link href="#">SEO Services</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">Enterprise SEO Services</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">Digital Marketing Services</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">
                                Google Local Services Ads Management
                              </Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">SEO Audits</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">
                                Generative Engine & Chat Optimization
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-xs-12 col-sm">
                          <h3>Digital Advertising</h3>
                          <ul className="list-group">
                            <li className="list-group-item">
                              <Link href="#">PPC Management Services</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">
                                Enterprise PPC Management Services
                              </Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">Social Media Advertising</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">
                                Enterprise Social Media Advertising
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-xs-12 col-sm">
                          <h3>Ecommerce</h3>
                          <ul className="list-group">
                            <li className="list-group-item">
                              <Link href="#">Ecommerce SEO Services</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">Ecommerce PPC Services</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">
                                Ecommerce Social Media Advertising
                              </Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">B2B Ecommerce Enablement</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">
                                Ecommerce Digital Marketing Services
                              </Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">
                                Ecommerce Marketing Resources
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-xs-12 col-sm">
                          <h3>Learn</h3>
                          <ul className="list-group">
                            <li className="list-group-item">
                              <Link href="#">Our SEO Results</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">Our SEO Case Studies</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">What Is an SEO Company?</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">
                                How to Find the Best SEO Company
                              </Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">
                                SEO Guide for Marketing Managers
                              </Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">What Is Digital Marketing?</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">Best Digital Marketing Tools</Link>
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
                              <Link href="#">Conversion Rate Optimization</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">User Experience Testing</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">Landing Pages & Funnels</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">Online Review Acceleration</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">Website Personalization</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-xs-12 col-sm">
                          <h3>Marketing Automation</h3>
                          <ul className="list-group">
                            <li className="list-group-item">
                              <Link href="#">
                                Account-Based Marketing Services
                              </Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">Lead Nurture Email Marketing</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">Email Marketing Management</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">
                                Salesforce Marketing Automation
                              </Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">
                                Microsoft Dynamics Marketing Automation
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-xs-12 col-sm">
                          <h3>E-commerce Platefom</h3>
                          <ul className="list-group">
                            <li className="list-group-item">
                              <Link href="#">SEO for Amazon</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">
                                Advertising Management for Amazon
                              </Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">
                                Shopify Optimization Services
                              </Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">
                                Facebook Marketplace for Business
                              </Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">
                                Influencer Marketing Services
                              </Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">
                                Walmart Marketplace Advertising
                              </Link>
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
                            <li className="list-group-item">
                              <Link href="#">Website Design</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">Website Redesign</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">Rapid Website Design</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">Social Media Design</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">E-commerce website Design</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">
                                Email Marketing Testing & Design
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-xs-12 col-sm">
                          <h3>Content Marketing</h3>
                          <ul className="list-group">
                            <li className="list-group-item">
                              <Link href="#">SEO Copywriting</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">Content Marketing Services</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">Social Media Management</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">
                                Inforgraphic & Motion Graphics
                              </Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">Youtube Advertising</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-xs-12 col-sm">
                          <h3>Website Development</h3>
                          <ul className="list-group">
                            <li className="list-group-item">
                              <Link href="#">
                                Digital Experience Development
                              </Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">
                                Shopify E-commerce Development
                              </Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">
                                Magento E-commerce Development
                              </Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">WordPress Development</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">Wix</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">Duda</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">Square Space</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">Web Flow</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">Custom Website Development</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">
                                Web Infrastructure & Maintenance
                              </Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">AI & GPT Integration</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">Content Management Systems</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-xs-12 col-sm">
                          <h3>Mobile App Development</h3>
                          <ul className="list-group">
                            <li className="list-group-item">
                              <Link href="#">iOS App Development</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">Android App Development</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">
                                Cross-Platform App Development
                              </Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">
                                Progressive Web App Development
                              </Link>
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
                      {/* <div className="row">
                        <div className="col-xs-12 col-sm">
                          <h3>Revenue Acceleration Platform</h3>
                          <ul className="list-group">
                            <li className="list-group-item">
                              <Link href="#">Cras justo odio</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">Dapibus ac facilisis in</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">Morbi leo risus</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">Porta ac consectetur ac</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">Vestibulum at eros</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">Vestibulum at eros</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-xs-12 col-sm">
                          <h3>Measurement</h3>
                          <ul className="list-group">
                            <li className="list-group-item">
                              <Link href="#">Cras justo odio</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">Dapibus ac facilisis in</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">Morbi leo risus</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">Porta ac consectetur ac</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">Vestibulum at eros</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">Vestibulum at eros</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-xs-12 col-sm">
                          <h3>Resorces</h3>
                          <ul className="list-group">
                            <li className="list-group-item">
                              <Link href="#">What Is a CRM?</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">Data-Driven Marketing Guide</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">What Is a CDP?</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">What Is ERP?</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">What Is AI Marketing?</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">What are CRM Integrations?</Link>
                            </li>
                          </ul>
                        </div>
                      </div> */}
                      <Tab.Container
                        id="left-tabs-example"
                        activeKey={activeKey}
                      >
                        <Row>
                          <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                              <Nav.Item>
                                <Nav.Link
                                  eventKey="first"
                                  onMouseEnter={() => setActiveKey("first")}
                                >
                                  Design
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link
                                  eventKey="second"
                                  onMouseEnter={() => setActiveKey("second")}
                                >
                                  Content Marketing
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link
                                  eventKey="third"
                                  onMouseEnter={() => setActiveKey("third")}
                                >
                                  Website Development
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link
                                  eventKey="fourth"
                                  onMouseEnter={() => setActiveKey("fourth")}
                                >
                                  Mobile App Development
                                </Nav.Link>
                              </Nav.Item>
                            </Nav>
                          </Col>
                          <Col sm={9}>
                            <Tab.Content>
                              <Tab.Pane eventKey="first">
                                <Container>
                                  <Row>
                                    <div className="col-xs-12 col-sm">
                                      <ul className="list-group">
                                        <li className="list-group-item">
                                          <Link href="#">Website<br/>Design</Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">Website<br/>Redesign</Link>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-xs-12 col-sm">
                                      <ul className="list-group">
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Rapid Website<br/>Design
                                          </Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Social Media<br/>Design
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-xs-12 col-sm">
                                      <ul className="list-group">
                                        <li className="list-group-item">
                                          <Link href="#">
                                            E-commerce website<br/>Design
                                          </Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Email Marketing<br/>Testing & Design
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </Row>
                                </Container>
                              </Tab.Pane>
                              <Tab.Pane eventKey="second">
                                <Container>
                                  <Row>
                                    <div className="col-xs-12 col-sm">
                                      <ul className="list-group">
                                        <li className="list-group-item">
                                          <Link href="#">SEO<br/>Copywriting</Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Content Marketing<br/>Services
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-xs-12 col-sm">
                                      <ul className="list-group">
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Social Media<br/>Management
                                          </Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Inforgraphic &<br/>Motion Graphics
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-xs-12 col-sm">
                                      <ul className="list-group">
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Youtube<br/>Advertising
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </Row>
                                </Container>
                              </Tab.Pane>
                              <Tab.Pane eventKey="third">
                                <Container>
                                  <Row>
                                    <div className="col-xs-12 col-sm">
                                      <ul className="list-group">
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Digital Experience<br/>Development
                                          </Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Shopify E-commerce<br/>Development
                                          </Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">Square Space</Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Web Infrastructure<br/>& Maintenance
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-xs-12 col-sm">
                                      <ul className="list-group">
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Magento E-commerce<br/>Development
                                          </Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">
                                            WordPress<br/>Development
                                          </Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">Web Flow</Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">
                                            AI & GPT<br/>Integration
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-xs-12 col-sm">
                                      <ul className="list-group">
                                        <li className="list-group-item">
                                          <Link href="#">Wix</Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">Duda</Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Custom Website<br/>Development
                                          </Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Content Management<br/>Systems
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </Row>
                                </Container>
                              </Tab.Pane>
                              <Tab.Pane eventKey="fourth">
                                <Container>
                                  <Row>
                                    <div className="col-xs-12 col-sm">
                                      <ul className="list-group">
                                        <li className="list-group-item">
                                          <Link href="#">
                                            iOS App<br/>Development
                                          </Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Progressive Web<br/>App Development
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-xs-12 col-sm">
                                      <ul className="list-group">
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Android App<br/>Development
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-xs-12 col-sm">
                                      <ul className="list-group">
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Cross-Platform<br/>App Development
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </Row>
                                </Container>
                              </Tab.Pane>
                            </Tab.Content>
                          </Col>
                        </Row>
                      </Tab.Container>
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
                            <li className="list-group-item">
                              <Link href="#">Our Approach</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">About Us</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">Careers (We Are Hiring!)</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">Contact Info</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">WebFX Reviews</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">Awards</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-xs-12 col-sm">
                          <h3>Community Impact</h3>
                          <ul className="list-group">
                            <li className="list-group-item">
                              <Link href="#">Company Values</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">Community Impact</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">FXBuilds</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">Equality at WebFX</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">STEMFX Program</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">WebFX History</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-xs-12 col-sm">
                          <h3>Pricing Guides</h3>
                          <ul className="list-group">
                            <li className="list-group-item">
                              <Link href="#">
                                How Much Should a Website Cost?
                              </Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">How Much Does PPC Cost?</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">Email Marketing Pricing</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">Social Media Pricing</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">SEO Pricing</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">Local SEO Pricing</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-xs-12 col-sm">
                          <h3>Content Library</h3>
                          <ul className="list-group">
                            <li className="list-group-item">
                              <Link href="#">Cras justo odio</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">Dapibus ac facilisis in</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">Morbi leo risus</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">Porta ac consectetur ac</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">Vestibulum at eros</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-xs-12 col-sm">
                          <h3>Resource</h3>
                          <ul className="list-group">
                            <li className="list-group-item">
                              <Link href="#">Infographic</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">Blog</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">E-Books</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">Lead Magnet</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">Podcast</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">What Is an SEO Company?</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">
                                How to Find the Best SEO Company
                              </Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">
                                SEO Guide for Marketing Managers
                              </Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">What Is Digital Marketing?</Link>
                            </li>
                            <li className="list-group-item">
                              <Link href="#">Best Digital Marketing Tools</Link>
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
