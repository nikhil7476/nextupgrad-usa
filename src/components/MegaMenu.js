import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Megamenu.module.css";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";
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
            <div
              className="collapse navbar-collapse justify-content-right"
              id="navbarColor01"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nvv-item">
                  <Link className="nav-link" href="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item mega-dropdown">
                  <Link className="nav-link" href="#">
                    SEO & Lead Generation <IoIosArrowDown />
                  </Link>
                  <div className="megamenu">
                    <div className="container">
                      <Tab.Container
                        id="left-tabs-example"
                        activeKey={activeKey}
                      >
                        <Row>
                          <Col sm={3} className="menuItem">
                            <Nav variant="pills" className="flex-column">
                              <Nav.Item>
                                <Nav.Link
                                  eventKey="first"
                                  onMouseEnter={() => setActiveKey("first")}
                                >
                                  <Image
                                    src="/assets/menu/organic-seo.png"
                                    width={50}
                                    height={50}
                                    alt="Organic SEO"
                                    title="Organic SEO"
                                  />
                                  Organic SEO
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link
                                  eventKey="second"
                                  onMouseEnter={() => setActiveKey("second")}
                                >
                                  <Image
                                    src="/assets/menu/digital-ads.png"
                                    width={50}
                                    height={50}
                                    alt="Digital Advertising"
                                    title="Digital Advertising"
                                  />
                                  Digital Advertising
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
                                            <Image
                                              src="/assets/menu/seo-services.png"
                                              width={50}
                                              height={50}
                                              alt="SEO Services"
                                              title="SEO Services"
                                            />
                                            SEO Services
                                          </Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="/local-seo-services">
                                            <Image
                                              src="/assets/menu/local-seo.png"
                                              width={50}
                                              height={50}
                                              alt="Local SEO Services"
                                              title="Local SEO Services"
                                            />
                                            Local SEO Services
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-xs-12 col-sm">
                                      <ul className="list-group">
                                        <li className="list-group-item">
                                          <Link href="/digital-marketing-services">
                                            <Image
                                              src="/assets/menu/digital-marketing-services.png"
                                              width={50}
                                              height={50}
                                              alt="Digital Marketing Services"
                                              title="Digital Marketing Services"
                                            />
                                            Digital Marketing Services
                                          </Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="/enterprise-seo-services">
                                            <Image
                                              src="/assets/menu/enterprise-seo-services.png"
                                              width={50}
                                              height={50}
                                              alt="Enterprise SEO Servicess"
                                              title="Enterprise SEO Services"
                                            />
                                            Enterprise SEO Services
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-xs-12 col-sm">
                                      <ul className="list-group">
                                        <li className="list-group-item">
                                          <Link href="/seo-audit">
                                            <Image
                                              src="/assets/menu/seo-audit.png"
                                              width={50}
                                              height={50}
                                              alt="SEO Audits"
                                              title="SEO Auditss"
                                            />
                                            SEO Audits
                                          </Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="/google-local-services">
                                            <Image
                                              src="/assets/menu/google-adwords.png"
                                              width={50}
                                              height={50}
                                              alt="Google Local Services"
                                              title="Google Local Services"
                                            />
                                            Google Local Services Ads Management
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
                                            <Image
                                              src="/assets/menu/ppc-services.png"
                                              width={50}
                                              height={50}
                                              alt="PPC Management Services"
                                              title="PPC Management Services"
                                            />
                                            PPC Management Services
                                          </Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="/landing-page-and-funnels">
                                            <Image
                                              src="/assets/menu/landing-pages.png"
                                              width={50}
                                              height={50}
                                              alt="Landing Pages & Funnels"
                                              title="Landing Pages & Funnels"
                                            />
                                            Landing Pages & Funnels
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-xs-12 col-sm">
                                      <ul className="list-group">
                                        <li className="list-group-item">
                                          <Link href="/social-media-advertising">
                                            <Image
                                              src="/assets/menu/social-media.png"
                                              width={50}
                                              height={50}
                                              alt="Social Media Advertising"
                                              title="Social Media Advertising"
                                            />
                                            Social Media Advertising
                                          </Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="/email-marketing-services">
                                            <Image
                                              src="/assets/menu/email-marketing.png"
                                              width={50}
                                              height={50}
                                              alt="Email Marketing Services"
                                              title="Email Marketing Services"
                                            />
                                            Email Marketing Services
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
                    Design & Development <IoIosArrowDown />
                  </Link>
                  <div className="megamenu">
                    <div className="container">
                      <Tab.Container
                        id="left-tabs-example"
                        activeKey={activeKey}
                      >
                        <Row>
                          <Col sm={3} className="menuItem">
                            <Nav variant="pills" className="flex-column">
                              <Nav.Item>
                                <Nav.Link
                                  eventKey="first"
                                  onMouseEnter={() => setActiveKey("first")}
                                >
                                  <Image
                                    src="/assets/menu/website-development.png"
                                    width={50}
                                    height={50}
                                    alt="Website Development"
                                    title="Website Development"
                                  />
                                  Website Development
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link
                                  eventKey="second"
                                  onMouseEnter={() => setActiveKey("second")}
                                >
                                  <Image
                                    src="/assets/menu/mobile-app.png"
                                    width={50}
                                    height={50}
                                    alt="Mobile App Development"
                                    title="Mobile App Development"
                                  />
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
                                          <Link href="/shopify">
                                            <Image
                                              src="/assets/menu/shopify.png"
                                              width={50}
                                              height={50}
                                              alt="Shopify E-commerce Development"
                                              title="Shopify E-commerce Development"
                                            />
                                            Shopify E-commerce Development
                                          </Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="/magento-ecommerce-development">
                                            <Image
                                              src="/assets/menu/magento.png"
                                              width={50}
                                              height={50}
                                              alt="Magento E-commerce Development"
                                              title="Magento E-commerce Development"
                                            />
                                            Magento E-commerce Development
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-xs-12 col-sm">
                                      <ul className="list-group">
                                        <li className="list-group-item">
                                          <Link href="/wordPress-development">
                                            <Image
                                              src="/assets/menu/wordpress.png"
                                              width={50}
                                              height={50}
                                              alt="WordPress Development"
                                              title="WordPress Development"
                                            />
                                            WordPress Development
                                          </Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="/custom-website-development">
                                            <Image
                                              src="/assets/menu/website-dev.png"
                                              width={50}
                                              height={50}
                                              alt="Custom Website Development"
                                              title="Custom Website Development"
                                            />
                                            Custom Website Development
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
                                          <Link href="/ios-app-development">
                                            <Image
                                              src="/assets/menu/ios-app.png"
                                              width={50}
                                              height={50}
                                              alt="iOS App Development"
                                              title="iOS App Development"
                                            />
                                            iOS App Development
                                          </Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="/android-app-development">
                                            <Image
                                              src="/assets/menu/android-app.png"
                                              width={50}
                                              height={50}
                                              alt="Android App Development"
                                              title="Android App Development"
                                            />
                                            Android App Development
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-xs-12 col-sm">
                                      <ul className="list-group">
                                        <li className="list-group-item">
                                          <Link href="/cross-platform-app-development">
                                            <Image
                                              src="/assets/menu/app-development.png"
                                              width={50}
                                              height={50}
                                              alt="Cross-Platform App Development"
                                              title="Cross-Platform App Development"
                                            />
                                            Cross-Platform App Development
                                          </Link>
                                        </li>
                                        <li className="list-group-item">
                                          <Link href="/progressive-web-app-development">
                                            <Image
                                              src="/assets/menu/web-app-development.png"
                                              width={50}
                                              height={50}
                                              alt="Progressive Web App Development"
                                              title="Progressive Web App Development"
                                            />
                                            Progressive Web App Development
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
                <li className="nvv-item">
                  <Link className="nav-link" href="/blog">
                    Blogs
                  </Link>
                </li>
                <li className="nvv-item">
                  <Link className="nav-link" href="/contact-us">
                    Contact
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
