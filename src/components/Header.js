import React from "react";
import { Navbar, Nav, NavDropdown, Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/Header.module.css";

const MegaMenuNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="p-3">
      <Container fluid>
        <Navbar.Brand href="/">Nextupgrad</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="SEO & Lead Generation" id="mega-menu">
              <Container className={`mega-menu-content ${styles.digInt}`}>
                <Row>
                  <Col className="col-md-3">
                    <h6>Digital Intelligence</h6>
                    <ul>
                      <li>
                        <li>
                          <NavDropdown.Item href="#">
                            Web Channel Call Tracking
                          </NavDropdown.Item>
                        </li>
                      </li>
                      <li>
                        <li>
                          <NavDropdown.Item href="#">
                            SEO Reporting & Forecasting
                          </NavDropdown.Item>
                        </li>
                      </li>
                      <li>
                        <li>
                          <NavDropdown.Item href="#">
                            Channel Attribution & Forecasting
                          </NavDropdown.Item>
                        </li>
                      </li>
                      <li>
                        <li>
                          <NavDropdown.Item href="#">
                            Digital Marketing Competitor Analysis
                          </NavDropdown.Item>
                        </li>
                      </li>
                    </ul>
                  </Col>
                  <Col className="col-md-3">
                    <h6>Conversion</h6>
                    <ul>
                      <li>
                        <li>
                          <NavDropdown.Item href="#">
                            Conversion Rate Optimization
                          </NavDropdown.Item>
                        </li>
                      </li>
                      <li>
                        <li>
                          <NavDropdown.Item href="#">
                            User Experience Testing
                          </NavDropdown.Item>
                        </li>
                      </li>
                      <li>
                        <li>
                          <NavDropdown.Item href="#">
                            Landing Pages & Funnels
                          </NavDropdown.Item>
                        </li>
                      </li>
                    </ul>
                  </Col>
                  <Col className="col-md-3">
                    <h6>Marketing Automation</h6>
                    <ul>
                      <li>
                        <li>
                          <NavDropdown.Item href="#">
                            Account-Based Marketing
                          </NavDropdown.Item>
                        </li>
                      </li>
                      <li>
                        <li>
                          <NavDropdown.Item href="#">
                            Lead Nurture Email Marketing
                          </NavDropdown.Item>
                        </li>
                      </li>
                      <li>
                        <li>
                          <NavDropdown.Item href="#">
                            Salesforce Marketing Automation
                          </NavDropdown.Item>
                        </li>
                      </li>
                    </ul>
                  </Col>
                  <Col className="col-md-3">
                    <h6>Commerce Platforms</h6>
                    <ul>
                      <li>
                        <li>
                          <NavDropdown.Item href="#">
                            SEO for Amazon
                          </NavDropdown.Item>
                        </li>
                      </li>
                      <li>
                        <li>
                          <NavDropdown.Item href="#">
                            Shopify Optimization
                          </NavDropdown.Item>
                        </li>
                      </li>
                      <li>
                        <li>
                          <NavDropdown.Item href="#">
                            Influencer Marketing
                          </NavDropdown.Item>
                        </li>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Container>
            </NavDropdown>

            <NavDropdown title="Revenue Marketing & CRO" id="mega-menu-2">
              <Container className={`mega-menu-content ${styles.revMar}`}>
                <Row>
                  <Col>
                    <h6>Category 1</h6>
                    <ul>
                      <li>
                        <NavDropdown.Item href="#">Item 1</NavDropdown.Item>
                      </li>
                      <li>
                        <NavDropdown.Item href="#">Item 2</NavDropdown.Item>
                      </li>
                    </ul>
                  </Col>
                  <Col>
                    <h6>Category 2</h6>
                    <ul>
                      <li>
                        <NavDropdown.Item href="#">Item 3</NavDropdown.Item>
                      </li>
                      <li>
                        <NavDropdown.Item href="#">Item 4</NavDropdown.Item>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Container>
            </NavDropdown>

            <Nav.Link href="#">UX & Interactive</Nav.Link>
            <Nav.Link href="#">Technology</Nav.Link>
            <Nav.Link href="#">Who We Are</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#" className="btn btn-primary text-white">
              Get a Proposal
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MegaMenuNavbar;
