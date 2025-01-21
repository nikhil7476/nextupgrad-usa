import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Offcanvas,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import Image from "next/image";
import styles from "@/styles/MobHeader.module.css";

function OffcanvasNavbar() {
  return (
    <>
      <Navbar
        className={styles.mobHeader}
        bg="dark"
        variant="dark"
        expand={false}
        fixed="top"
      >
        <Container fluid>
          <Navbar.Brand href="/">
            <Image
              src={"/assets/ftrLogo.webp"}
              alt="Nextupgrad_USA_Logo"
              width={150}
              height={50}
              title="Nextupgrad USA Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            className={styles.toggleNav}
          />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/">Home</Nav.Link>
                <NavDropdown
                  title="SEO & Lead Generation"
                  id="offcanvasNavbarDropdown"
                >
                  <h3 className="text-center">Organic SEO</h3>
                  <NavDropdown.Item href="/seo-services">
                    SEO Services
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/local-seo-services">
                    Local SEO Services
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/enterprise-seo-services">
                    Enterprise SEO Services
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/digital-marketing-services">
                    Digital Marketing Services
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/google-local-services">
                    Google Local Services Ads Management
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/seo-audits">
                    SEO Audits
                  </NavDropdown.Item>
                  <h3 className="text-center">Digital Advertising</h3>
                  <NavDropdown.Item href="/ppc-management-services">
                    PPC Management Services
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/social-media-advertising">
                    Social Media Advertising
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/ios-app-development">
                    iOS App Development
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/landing-page-and-funnels">
                    Landing Page & Funnels
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/email-marketing-services">
                    Email Marketing Services
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/android-app-development">
                    Android App Development
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/contact-us">Contact Us</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasNavbar;
