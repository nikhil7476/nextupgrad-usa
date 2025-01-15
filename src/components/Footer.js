import React from "react";
import Link from "next/link";
import Image from "next/image";
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
import { useState } from "react";
import Swal from "sweetalert2";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
    setErrors("");
  };

  const validateEmail = (email) => {
    const isValid = /\S+@\S+\.\S+/.test(email);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrors("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true); // Disable the button

    try {
      const response = await fetch(
        "https://53c50cd527.nxcli.io/nextupgrad_backend/api/postNewsletter",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();
      if (data.status == 200 || data.status == 201) {
        setEmail("");
        Swal.fire({
          title: "Subscribed!",
          text: "Thank you for subscribing to nextupgrad!",
          icon: "success",
        });
      } else if (data.status == 500) {
        Swal.fire({
          title: "Already Subscribed!",
          text: "This email is already subscribed!",
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className={styles.ftrMain}>
        <Container>
          <Row className={styles.abvFtr}>
            <Col className="col-md-3">
              <Link href="/" title="Nextupgrad-USA">
                <Image
                  src={"/assets/ftrLogo.png"}
                  width={200}
                  height={80}
                  alt="nextupgrad_usa_logo"
                  title="Nextupgrad USA Logo"
                />
              </Link>
              <h2>USA Office</h2>
              <ul>
                <li>
                  <FaMapMarkerAlt /> 244 Fifth Avenue, Suite D261 New York, N.Y.
                  10001
                </li>
                <li>
                  <Link href="tel:+1 (408) 786-5558" title="+1 (408) 786-5558">
                    <FaPhoneAlt /> +1 (408) 786-5558
                  </Link>
                </li>
              </ul>
              <h2>UAE Office</h2>
              <ul>
                <li>
                  <FaMapMarkerAlt /> 05-2nd Floor, Hamdan Bin Mohammed St- Zone
                  1- E3-02, Abu Dhabi
                </li>
                <li>
                  <Link href="tel:+1 (408) 786-5558" title="+1 (408) 786-5558">
                    <FaPhoneAlt /> +1 (408) 786-5558
                  </Link>
                </li>
              </ul>
              <h2>INDIA Office</h2>
              <ul>
                <li>
                  <FaMapMarkerAlt /> 6V 272 Sector 6 Gomti Nagar Vistar Behind
                  SSB Building, Sulabh Awas Road, Lucknow, Uttar Pradesh, India,
                  226010
                </li>
                <li>
                  <Link href="tel:+1 (408) 400-3232" title="+1 (408) 400-3232">
                    <FaPhoneAlt /> +1 (408) 400-3232
                  </Link>
                </li>
              </ul>
            </Col>
            <Col className="col-md-3">
              <h2>Company</h2>
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
              <h2>For Customers</h2>
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
              <h2>Tech Talent For</h2>
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
              <h2>Important Links</h2>
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
              <h2>Drop us A Line</h2>
              <ul>
                <li>
                  <Link
                    href="mailto:hello@nextupgrad.us"
                    title="hello@nextupgrad.us"
                  >
                    <FaMailBulk /> hello@nextupgrad.us
                  </Link>
                </li>
              </ul>
              <h2>Toll Free</h2>
              <ul>
                <li>
                  <Link href="tel:18005700144" title="18005700144">
                    <FaPhoneAlt /> 18005700144
                  </Link>
                </li>
              </ul>

              <h2>Follow Us</h2>
              <ul className={styles.social}>
                <li>
                  <Link href="https://www.instagram.com/nextupgradusa/" target="_blank" title="Instagram">
                    <FaInstagramSquare />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.facebook.com/nextupgrad.usa/" target="_blank" title="Facebook">
                    <FaFacebookSquare />
                  </Link>
                </li>
                <li>
                  <Link href="https://twitter.com/nextupgrad_usa" target="_blank" title="Twitter">
                    <FaSquareXTwitter />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.youtube.com/@nextupgrad-usa" target="_blank" title="Youtube">
                    <FaYoutube />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.pinterest.com/nextupgradusa/" target="_blank" title="Pinterest">
                    <FaPinterestSquare />
                  </Link>
                </li>
              </ul>
              <div className={styles.inStartups}>
                <Link
                  href="https://www.linkedin.com/company/nextupgrad-usa"
                  target="_blank"
                  title="LinkedIn"
                >
                  <p className="text-nowrap">
                    <FaLinkedin /> Top 20 Indian Startups of 2023
                  </p>
                </Link>
              </div>
              <h2>Locations</h2>
              <ul>
                <li>Newyork, USA</li>
                <li>Abudhabi, UAE</li>
                <li>Lucknow, India</li>
              </ul>
              <h2>Our Newsletter</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className={styles.priTxt}>
                    {"We'll never share your email with anyone else."}
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    required
                  />
                  {errors && <span className="text-danger">{errors}</span>}
                </Form.Group>
                <Button
                  className={styles.subBtn}
                  variant="primary"
                  type="submit"
                  value="Submit"
                  disabled={isSubmitting}
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
};

export default Footer;
