import React from "react";
import Link from "next/link";
import Image from "next/image";
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
            <Link className="navbar-brand" href="/">
              <Image
                src={"/assets/ftrLogo.png"}
                alt="nextupgrad_usa_logo"
                title="Nextupgrad USA"
                width={150}
                height={50}
              />
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
                                  Organic SEO
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link
                                  eventKey="second"
                                  onMouseEnter={() => setActiveKey("second")}
                                >
                                  Digital Advertising
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link
                                  eventKey="third"
                                  onMouseEnter={() => setActiveKey("third")}
                                >
                                  E-Commerce
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link
                                  eventKey="fourth"
                                  onMouseEnter={() => setActiveKey("fourth")}
                                >
                                  Learn
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
                                          <Link href="/seo-services">
                                            SEO
                                            <br />
                                            Services
                                          </Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="/local-seo">
                                            Local
                                            <br />
                                            SEO Services
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-xs-12 col-sm">
                                      <ul className="list-group">
                                        <li className="list-group-item">
                                          <Link href="/digital-marketing-services">
                                            Digital Marketing
                                            <br />
                                            Services
                                          </Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="/enterprise-seo-services">
                                            Enterprise
                                            <br />
                                            SEO Services
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-xs-12 col-sm">
                                      <ul className="list-group">
                                        <li className="list-group-item">
                                          <Link href="/google-local-services">
                                            Google Local Services
                                            <br />
                                            Ads Management
                                          </Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="/seo-audit">
                                            SEO
                                            <br />
                                            Audits
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
                                          <Link href="/ppc-management-services">
                                            PPC Management Services
                                          </Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="/landing-page-and-funnels">
                                            Landing Pages & Funnels
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-xs-12 col-sm">
                                      <ul className="list-group">
                                        <li className="list-group-item">
                                          <Link href="/social-media-advertising">
                                            Social Media Advertising
                                          </Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="/email-marketing-services">
                                            Email Marketing Services
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-xs-12 col-sm">
                                      <ul className="list-group">
                                        <li className="list-group-item">
                                          <Link href="/ios-app-development">
                                            iOS App Development
                                          </Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="/android-app-development">
                                            Android App Development
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
                                            Ecommerce SEO
                                            <br />
                                            Services
                                          </Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Ecommerce PPC
                                            <br />
                                            Services
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-xs-12 col-sm">
                                      <ul className="list-group">
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Ecommerce Social
                                            <br />
                                            Media Advertising
                                          </Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">
                                            B2B Ecommerce
                                            <br />
                                            Enablement
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-xs-12 col-sm">
                                      <ul className="list-group">
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Ecommerce Digital
                                            <br />
                                            Marketing Services
                                          </Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Ecommerce Marketing
                                            <br />
                                            Resources
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
                                          <Link href="#">Our SEO Results</Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Our SEO Case Studies
                                          </Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Best Digital Marketing Tools
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-xs-12 col-sm">
                                      <ul className="list-group">
                                        <li className="list-group-item">
                                          <Link href="#">
                                            What Is an SEO Company?
                                          </Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">
                                            SEO Guide for Marketing Managers
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-xs-12 col-sm">
                                      <ul className="list-group">
                                        <li className="list-group-item">
                                          <Link href="#"> Marketing?</Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">
                                            How to Find the Best SEO Company
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
                    Revenue Marketing & CRO
                  </Link>
                  <div className="megamenu">
                    <div className="container">
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
                                  Conversion
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link
                                  eventKey="second"
                                  onMouseEnter={() => setActiveKey("second")}
                                >
                                  Marketing Automation
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link
                                  eventKey="third"
                                  onMouseEnter={() => setActiveKey("third")}
                                >
                                  E-Commerce Platform
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
                                          <Link href="#">
                                            Conversion Rate Optimization
                                          </Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">
                                            User Experience Testing
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-xs-12 col-sm">
                                      <ul className="list-group">
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Landing Pages & Funnels
                                          </Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Online Review Acceleration
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-xs-12 col-sm">
                                      <ul className="list-group">
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Website Personalization
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
                                          <Link href="#">
                                            Account-Based
                                            <br />
                                            Marketing Services
                                          </Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Lead Nurture
                                            <br />
                                            Email Marketing
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-xs-12 col-sm">
                                      <ul className="list-group">
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Email Marketing
                                            <br />
                                            Management
                                          </Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Salesforce Marketing
                                            <br />
                                            Automation
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-xs-12 col-sm">
                                      <ul className="list-group">
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Microsoft Dynamics
                                            <br />
                                            Marketing Automation
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
                                          <Link href="#">SEO for Amazon</Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Advertising Management for Amazon
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-xs-12 col-sm">
                                      <ul className="list-group">
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
                                      </ul>
                                    </div>
                                    <div className="col-xs-12 col-sm">
                                      <ul className="list-group">
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
                    Design & Development
                  </Link>
                  <div className="megamenu">
                    <div className="container">
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
                                          <Link href="#">
                                            Website
                                            <br />
                                            Design
                                          </Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Website
                                            <br />
                                            Redesign
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-xs-12 col-sm">
                                      <ul className="list-group">
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Rapid Website
                                            <br />
                                            Design
                                          </Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Social Media
                                            <br />
                                            Design
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-xs-12 col-sm">
                                      <ul className="list-group">
                                        <li className="list-group-item">
                                          <Link href="#">
                                            E-commerce website
                                            <br />
                                            Design
                                          </Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Email Marketing
                                            <br />
                                            Testing & Design
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
                                          <Link href="#">
                                            SEO
                                            <br />
                                            Copywriting
                                          </Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Content Marketing
                                            <br />
                                            Services
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-xs-12 col-sm">
                                      <ul className="list-group">
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Social Media
                                            <br />
                                            Management
                                          </Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Inforgraphic &<br />
                                            Motion Graphics
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-xs-12 col-sm">
                                      <ul className="list-group">
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Youtube
                                            <br />
                                            Advertising
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
                                            Digital Experience
                                            <br />
                                            Development
                                          </Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Shopify E-commerce
                                            <br />
                                            Development
                                          </Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Content Management
                                            <br />
                                            Systems
                                          </Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Web Infrastructure
                                            <br />& Maintenance
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-xs-12 col-sm">
                                      <ul className="list-group">
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Magento E-commerce
                                            <br />
                                            Development
                                          </Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">
                                            WordPress
                                            <br />
                                            Development
                                          </Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Custom Website
                                            <br />
                                            Development
                                          </Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">
                                            AI & GPT
                                            <br />
                                            Integration
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
                                          <Link href="#">Web Flow</Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">Square Space</Link>
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
                                            iOS App Development
                                          </Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Progressive Web App Development
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-xs-12 col-sm">
                                      <ul className="list-group">
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Android App Development
                                          </Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Cross-Platform App Development
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
                    Technology
                  </Link>
                  <div className="megamenu">
                    <div className="container">
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
                                  Revenue Acceleration Platform
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link
                                  eventKey="second"
                                  onMouseEnter={() => setActiveKey("second")}
                                >
                                  Measurement
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link
                                  eventKey="third"
                                  onMouseEnter={() => setActiveKey("third")}
                                >
                                  Resources
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
                                          <Link href="#">
                                            Website
                                            <br />
                                            Design
                                          </Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Website
                                            <br />
                                            Redesign
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-xs-12 col-sm">
                                      <ul className="list-group">
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Rapid Website
                                            <br />
                                            Design
                                          </Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Social Media
                                            <br />
                                            Design
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-xs-12 col-sm">
                                      <ul className="list-group">
                                        <li className="list-group-item">
                                          <Link href="#">
                                            E-commerce website
                                            <br />
                                            Design
                                          </Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Email Marketing
                                            <br />
                                            Testing & Design
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
                                          <Link href="#">
                                            SEO
                                            <br />
                                            Copywriting
                                          </Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Content Marketing
                                            <br />
                                            Services
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-xs-12 col-sm">
                                      <ul className="list-group">
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Social Media
                                            <br />
                                            Management
                                          </Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Inforgraphic &<br />
                                            Motion Graphics
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-xs-12 col-sm">
                                      <ul className="list-group">
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Youtube
                                            <br />
                                            Advertising
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
                                          <Link href="#">What Is a CRM?</Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Data-Driven Marketing Guide
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-xs-12 col-sm">
                                      <ul className="list-group">
                                        <li className="list-group-item">
                                          <Link href="#">What Is a CDP?</Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">What Is ERP?</Link>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-xs-12 col-sm">
                                      <ul className="list-group">
                                        <li className="list-group-item">
                                          <Link href="#">
                                            What Is AI Marketing?
                                          </Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">
                                            What are CRM Integrations?
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
                                  Who We Are
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link
                                  eventKey="second"
                                  onMouseEnter={() => setActiveKey("second")}
                                >
                                  Community Impact
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link
                                  eventKey="third"
                                  onMouseEnter={() => setActiveKey("third")}
                                >
                                  Pricing Guides
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link
                                  eventKey="fourth"
                                  onMouseEnter={() => setActiveKey("fourth")}
                                >
                                  Content Library
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link
                                  eventKey="fifth"
                                  onMouseEnter={() => setActiveKey("fifth")}
                                >
                                  Resources
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
                                          <Link href="#">Our Approach</Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">About Us</Link>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-xs-12 col-sm">
                                      <ul className="list-group">
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Careers (We Are Hiring!)
                                          </Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">Contact Info</Link>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-xs-12 col-sm">
                                      <ul className="list-group">
                                        <li className="list-group-item">
                                          <Link href="#">WebFX Reviews</Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">Awards</Link>
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
                                          <Link href="#">Company Values</Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">Community Impact</Link>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-xs-12 col-sm">
                                      <ul className="list-group">
                                        <li className="list-group-item">
                                          <Link href="#">FXBuilds</Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Equality at WebFX
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-xs-12 col-sm">
                                      <ul className="list-group">
                                        <li className="list-group-item">
                                          <Link href="#">STEMFX Program</Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">WebFX History</Link>
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
                                          <Link href="#">SEO Pricing</Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Local SEO Pricing
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-xs-12 col-sm">
                                      <ul className="list-group">
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Email Marketing Pricing
                                          </Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Social Media Pricing
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-xs-12 col-sm">
                                      <ul className="list-group">
                                        <li className="list-group-item">
                                          <Link href="#">
                                            How Much Does PPC Cost?
                                          </Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">
                                            How Much Should a Website Cost?
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
                                            iOS App
                                            <br />
                                            Development
                                          </Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Progressive Web
                                            <br />
                                            App Development
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-xs-12 col-sm">
                                      <ul className="list-group">
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Android App
                                            <br />
                                            Development
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-xs-12 col-sm">
                                      <ul className="list-group">
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Cross-Platform
                                            <br />
                                            App Development
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </Row>
                                </Container>
                              </Tab.Pane>
                              <Tab.Pane eventKey="fifth">
                                <Container>
                                  <Row>
                                    <div className="col-xs-12 col-sm">
                                      <ul className="list-group">
                                        <li className="list-group-item">
                                          <Link href="#">Infographic</Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">Blog</Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">Podcast</Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">
                                            Best Digital Marketing Tools
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-xs-12 col-sm">
                                      <ul className="list-group">
                                        <li className="list-group-item">
                                          <Link href="#">E-Books</Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">Lead Magnet</Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="#">
                                            What Is an SEO Company?
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-xs-12 col-sm">
                                      <ul className="list-group">
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
                                          <Link href="#">
                                            What Is Digital Marketing?
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
              </ul>
            </div>
          </nav>
        </Container>
      </div>
    </>
  );
}

export default MegaMenu;
