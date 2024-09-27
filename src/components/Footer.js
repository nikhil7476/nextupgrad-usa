import React from "react";
import Image from "next/image";
import Link from "next/link";
import brand from "../assets/ftrLogo.webp";
import styles from "@/styles/Footer.module.css";
import {
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaInstagramSquare,
  FaFacebookSquare,
  FaYoutube,
  FaPinterestSquare,
  FaMailBulk,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Col, Container, Row, Button, Form } from "react-bootstrap";

function Footer() {
  return (
    <>
      <div className={styles.ftrMain}>
        <Container>
          <Row className={styles.abvFtr}>
            <Col className="col-md-3">
              <Link href="/">
                <Image
                  src={brand}
                  width={"100%"}
                  height={100}
                  alt="nextupgrad_usa_logo"
                />
              </Link>
              <h3>USA Office</h3>
              <ul>
                <li>
                  <FaMapMarkerAlt /> 244 Fifth Avenue, Suite D261 New York, N.Y.
                  10001
                </li>
                <li>
                  <Link href="tel:+1(23) 456-7890">
                    <FaPhoneAlt /> +1(23) 456-7890
                  </Link>
                </li>
              </ul>
              <h3>UAE Office</h3>
              <ul>
                <li>
                  <FaMapMarkerAlt /> 05-2nd Floor, Hamdan Bin Mohammed St- Zone
                  1- E3-02, Abu Dhabi
                </li>
                <li>
                  <Link href="tel:+1(23) 456-7890">
                    <FaPhoneAlt /> +1(23) 456-7890
                  </Link>
                </li>
              </ul>
              <h3>INDIA Office</h3>
              <ul>
                <li>
                  <FaMapMarkerAlt /> 6V 272 Sector 6 Gomti Nagar Vistar Behind
                  SSB Building, Sulabh Awas Road, Lucknow, Uttar Pradesh, India,
                  226010
                </li>
                <li>
                  <Link href="tel:+1(23) 456-7890">
                    <FaPhoneAlt /> +1(23) 456-7890
                  </Link>
                </li>
              </ul>
            </Col>
            <Col className="col-md-3">
              <h3>Company</h3>
              <ul>
                <li>
                  <Link href="#">Our Approach</Link>
                </li>
                <li>
                  <Link href="#">About Us</Link>
                </li>
                <li>
                  <Link href="#">Careers</Link>
                </li>
                <li>
                  <Link href="#">Contact Us</Link>
                </li>
                <li>
                  <Link href="#">Blogs</Link>
                </li>
                <li>
                  <Link href="#">Reviews</Link>
                </li>
                <li>
                  <Link href="#">Awards</Link>
                </li>
              </ul>
              <h3>For Customers</h3>
              <ul>
                <li>
                  <Link href="#">Submit Enquiry</Link>
                </li>
                <li>
                  <Link href="#">Hire Developer</Link>
                </li>
              </ul>
            </Col>
            <Col className="col-md-3">
              <h3>Tech Talent For</h3>
              <ul>
                <li>
                  <Link href="#">Website Design</Link>
                </li>
                <li>
                  <Link href="#">Website Redesign</Link>
                </li>
                <li>
                  <Link href="#">Rapid Website Design</Link>
                </li>
                <li>
                  <Link href="#">Social Media Design</Link>
                </li>
                <li>
                  <Link href="#">E-commerce Website Design</Link>
                </li>
                <li>
                  <Link href="#">Email Marketing</Link>
                </li>
                <li>
                  <Link href="#">Testing & Design</Link>
                </li>
              </ul>
              <h3>Important Links</h3>
              <ul>
                <li>
                  <Link href="#">Sitemap</Link>
                </li>
                <li>
                  <Link href="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="#">Terms & Condition</Link>
                </li>
              </ul>
            </Col>
            <Col className="col-md-3">
              <h3>Drop us A Line</h3>
              <ul>
                <li>
                  <Link href="mailto:hello@nextupgrad.us">
                    <FaMailBulk /> hello@nextupgrad.us
                  </Link>
                </li>
              </ul>
              <h3>Toll Free</h3>
              <ul>
                <li>
                  <Link href="tel:18005700144"><FaPhoneAlt /> 18005700144</Link>
                </li>
              </ul>

              <h3>Follow Us</h3>
              <ul className={styles.social}>
                <li>
                  <Link href="#">
                    <FaInstagramSquare />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <FaFacebookSquare />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <FaSquareXTwitter />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <FaYoutube />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <FaPinterestSquare />
                  </Link>
                </li>
              </ul>
              <div className={styles.inStartups}>
                <Link
                  href="https://www.linkedin.com/company/nextupgrad-usa"
                  target="_blank"
                >
                  <p class="text-nowrap">
                    <FaLinkedin /> Top 20 Indian Startups of 2023
                  </p>
                </Link>
              </div>
              <h3>Locations</h3>
              <ul>
                <li>Newyork, USA</li>
                <li>Abudhabi, UAE</li>
                <li>Lucknow, India</li>
              </ul>
              <h3>Our Newsletter</h3>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className={styles.priTxt}>
                    We'll never share your email with anyone else.
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Your Email"
                    required
                  />
                </Form.Group>
                <Button
                  className={styles.subBtn}
                  variant="primary"
                  type="submit"
                >
                  Subscribe
                </Button>
              </Form>
            </Col>
          </Row>
          <Row className={styles.blwFtr}>
            <Col>
              <p>
                Copyright &copy; {new Date().getFullYear()} Nextupgrad USA. All
                rights reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Footer;
