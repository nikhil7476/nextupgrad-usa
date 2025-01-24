import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import style from "@/styles/LandingPage.module.css";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaYoutube,
  FaPinterestSquare,
  FaArrowRight,
  FaMailBulk,
  FaPhoneAlt,
  FaBlenderPhone,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import LandingPageForm from "@/components/LandingPageForm";

const SeoService = () => {
  return (
    <>
      <Head>
        <title>Landing Page - Nextupgrad USA</title>
      </Head>
      <div className={style.landing}>
        <section className={style.landingHead}>
          <Container>
            <Row>
              <Col>
                <div className={style.headLand}>
                  <Image
                    src={"/assets/ftrLogo.webp"}
                    alt="Nextupgrad_USA_Logo"
                    width={150}
                    height={50}
                    title="Nextupgrad USA Logo"
                  />
                  <Link
                    href="/contact-us"
                    title="Contact-us"
                    className={style.cta}
                  >
                    Get Early Access
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={style.landingForms}>
          <Container
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="1500"
          >
            <Row className={style.bnrRow}>
              <Col className="col-md-6">
                <h1>
                  <span>Nextupgrad USA</span>
                  <br />
                  NextUpgrad Dedicated Developers-Crafting Digital Excellence
                  Worldwide
                </h1>
                <p>
                  At NextUpgrad, we provide a comprehensive range of software
                  development and digital marketing services tailored to meet
                  the unique needs of your business. Whether you aim to build an
                  engaging web application or a performance-oriented mobile app,
                  our team of dedicated developers is ready to turn your vision
                  into reality. Our services cover the entire development cycle,
                  from initial design to final deployment, ensuring your project
                  is completed to the highest standards and delivered on time
                  and within budget.
                </p>
              </Col>
              <Col className="col-md-6 align-content-center">
                <LandingPageForm />
              </Col>
            </Row>
          </Container>
        </section>
        <section className={style.marqSec}>
          <Container
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="1500"
          >
            <Row>
              <Col>
                <div className={style.marque}>
                  <div className={style.marqueGroup}>
                    <Image
                      src={"/assets/ftrLogo.webp"}
                      alt="Nextupgrad_USA_Logo"
                      width={150}
                      height={50}
                      title="Nextupgrad USA Logo"
                    />
                    <Image
                      src={"/assets/ftrLogo.webp"}
                      alt="Nextupgrad_USA_Logo"
                      width={150}
                      height={50}
                      title="Nextupgrad USA Logo"
                    />
                    <Image
                      src={"/assets/ftrLogo.webp"}
                      alt="Nextupgrad_USA_Logo"
                      width={150}
                      height={50}
                      title="Nextupgrad USA Logo"
                    />
                    <Image
                      src={"/assets/ftrLogo.webp"}
                      alt="Nextupgrad_USA_Logo"
                      width={150}
                      height={50}
                      title="Nextupgrad USA Logo"
                    />
                    <Image
                      src={"/assets/ftrLogo.webp"}
                      alt="Nextupgrad_USA_Logo"
                      width={150}
                      height={50}
                      title="Nextupgrad USA Logo"
                    />
                  </div>
                  <div className={style.marqueGroup}>
                    <Image
                      src={"/assets/ftrLogo.webp"}
                      alt="Nextupgrad_USA_Logo"
                      width={150}
                      height={50}
                      title="Nextupgrad USA Logo"
                    />
                    <Image
                      src={"/assets/ftrLogo.webp"}
                      alt="Nextupgrad_USA_Logo"
                      width={150}
                      height={50}
                      title="Nextupgrad USA Logo"
                    />
                    <Image
                      src={"/assets/ftrLogo.webp"}
                      alt="Nextupgrad_USA_Logo"
                      width={150}
                      height={50}
                      title="Nextupgrad USA Logo"
                    />
                    <Image
                      src={"/assets/ftrLogo.webp"}
                      alt="Nextupgrad_USA_Logo"
                      width={150}
                      height={50}
                      title="Nextupgrad USA Logo"
                    />
                    <Image
                      src={"/assets/ftrLogo.webp"}
                      alt="Nextupgrad_USA_Logo"
                      width={150}
                      height={50}
                      title="Nextupgrad USA Logo"
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={style.missionSec}>
          <Container
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="1500"
          >
            <Row className={`justify-content-between ${style.missionRow}`}>
              <Col className="col-md-5">
                <h2>
                  <span>Our Mission</span>
                  <br />
                  Premier Web & Mobile App Development Services
                </h2>
              </Col>
              <Col className="col-md-5 align-content-center">
                <p>
                  Healthcare is broken. Especially paying for it. The current
                  system is slow, messy, and a terrible experience for patients,
                  providers, and health plans.
                </p>
                <p>We deserve better.</p>
                <p>
                  {"That’s"} why {"we’re"} building a new era of healthcare
                  payments with <span>speed</span>, <span>accuracy</span>, and{" "}
                  <span>transparency</span> built in.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={style.offerSec}>
          <Container
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="1500"
          >
            <Row className={`justify-content-between ${style.offerRow}`}>
              <Col className="col-md-7">
                <h2>
                  <span>What we offer</span>
                  <br />
                  Claims Acceleration. Lightning fast payments.
                </h2>
                <Row className="mb-4">
                  <Col className="col-md-6">
                    <div className={style.offers}>
                      <h3>Web Application Development</h3>
                      <p>
                        Create powerful, scalable, and secure web applications
                        tailored to your business requirements.
                      </p>
                    </div>
                  </Col>
                  <Col className="col-md-6">
                    <div className={style.offers}>
                      <h3>iOS App Development</h3>
                      <p>
                        Create stunning, smooth, and engaging iOS applications
                        that reach the vast audience of iPhone and iPad users.
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col className="col-md-6">
                    <div className={style.offers}>
                      <h3>Android App Development</h3>
                      <p>
                        Tap into the largest global mobile market with your
                        ideal Android app optimized for user engagement and
                        maximum reach.
                      </p>
                    </div>
                  </Col>
                  <Col className="col-md-6">
                    <div className={style.offers}>
                      <h3>Cross-Platform Development</h3>
                      <p>
                        Our cross-platform solutions reduce development time and
                        costs while maintaining performance and usability across
                        all platforms.
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col className="col-md-6">
                    <div className={style.offers}>
                      <h3>Front-end and Back-end development</h3>
                      <p>
                        We ensure a sleek, responsive front-end and a robust
                        back-end, allowing your application to run smoothly and
                        efficiently.
                      </p>
                    </div>
                  </Col>
                  <Col className="col-md-6">
                    <div className={style.offers}>
                      <h3>Digital Marketing Solutions</h3>
                      <p>
                        Enhance your reach and engagement through strategic
                        digital marketing services, encompassing everything from
                        SEO to social media campaigns.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col className="col-md-4 align-content-center">
                <Image
                  src="/assets/first-right.jpg"
                  width={698}
                  height={765}
                  alt="We Offer"
                />
              </Col>
            </Row>
          </Container>
        </section>
        <section className={style.hireSec}>
          <Container
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="1500"
          >
            <Row className={`justify-content-between ${style.hireRow}`}>
              <Col className="col-md-4 align-content-center">
                <Image
                  src="/assets/second-left.jpg"
                  width={697}
                  height={771}
                  alt="hire developers"
                />
              </Col>
              <Col className="col-md-7">
                <h2>
                  <span>Hire Developers</span>
                  <br />
                  Why Hire NextUpgrad Dedicated Developers?
                </h2>
                <Row>
                  <Col className="col-md-6">
                    <div className={style.offers}>
                      <h3>Experienced Team</h3>
                      <p>
                        Our developers, designers, and marketers are not just
                        experts in their fields; they are also committed to your
                        {"project's"} success.
                      </p>
                    </div>
                  </Col>
                  <Col className="col-md-6">
                    <div className={style.offers}>
                      <h3>Client-Centric Approach</h3>
                      <p>
                        We take the time to understand your business objectives,
                        tailoring our services to meet your needs and ensure
                        those goals are achieved.
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col className="col-md-6">
                    <div className={style.offers}>
                      <h3>Quality and Efficiency</h3>
                      <p>
                        Quality is at the heart of our operations, with
                        efficient processes in place to ensure timely delivery
                        that exceeds your expectations.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={style.testSec}>
          <Container
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="1500"
          >
            <Row className={style.testRow}>
              <Col className="col-md-6">
                <h2>
                  <span>Client Testimonials</span>
                  <br />
                  Our Happy Client
                </h2>
                <div className={style.vidTest}>
                  <div>
                    <h3>Commendation received from Mr. Patrick</h3>
                    <p>
                      {"I’m"} working with nextupgrad since April, 2023 and
                      these guys are amazing team. They have been there from day
                      1 for me. They also worked on weekends just to make sure
                      my website and products were up to the standard.
                    </p>
                  </div>
                  <div>
                    <h4>Mr. Patrick</h4>
                    <p>Client for Website Development & Digital Marketing</p>
                  </div>
                </div>
              </Col>
              <Col className="col-md-6">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/IEhbAFH5JC4?si=GOpYLaUd5g2dNRBm"
                  title="CLients's Video Testimonial"
                  frameBorder="0"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </Col>
            </Row>
          </Container>
        </section>
        <section className={style.contSec}>
          <Container
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="1500"
          >
            <Row className={style.contRow}>
              <Col className="col-md-6">
                <h2>
                  <span>Get Started</span>
                  <br />
                  Ready to Start Your Project with Us?
                </h2>
                <p>
                  Please provide your contact information and project details,
                  and one of our representatives will reach out to discuss your
                  needs further.
                </p>
              </Col>
              <Col className="col-md-6">
                <LandingPageForm />
              </Col>
            </Row>
          </Container>
        </section>
        <section className={style.ctaSec}>
          <Container
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="1500"
          >
            <Row className={`mb-5 ${style.ctaRow}`}>
              <Col className="col-md-6">
                <h2>
                  <span>Follow Us</span>
                  <br />
                  Connect With Us
                </h2>
                <p>
                  Follow us on social media for updates and insights into
                  current trends in app and web development.
                </p>
              </Col>
              <Col className="col-md-6 align-content-center">
                <ul>
                  <li>
                    <Link
                      href="https://www.instagram.com/nextupgradusa/"
                      target="_blank"
                      title="Instagram"
                    >
                      <FaInstagramSquare />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.facebook.com/nextupgrad.usa/"
                      target="_blank"
                      title="Facebook"
                    >
                      <FaFacebookSquare />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://twitter.com/nextupgrad_usa"
                      target="_blank"
                      title="Twitter"
                    >
                      <FaSquareXTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.youtube.com/@nextupgrad-usa"
                      target="_blank"
                      title="Youtube"
                    >
                      <FaYoutube />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.pinterest.com/nextupgradusa/"
                      target="_blank"
                      title="Pinterest"
                    >
                      <FaPinterestSquare />
                    </Link>
                  </li>
                </ul>
                <h3>Our Commitment: Your Success is Our Achievement</h3>
                <p>
                  We look forward to partnering with you to create something
                  extraordinary!
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={style.landFooter}>
          <Container
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="1500"
          >
            <Row className={`mb-4 ${style.ftrRow}`}>
              <Col className="col-md-4">
                <div>
                  <Image
                    src={"/assets/ftrLogo.webp"}
                    alt="Nextupgrad_USA_Logo"
                    width={150}
                    height={50}
                    title="Nextupgrad USA Logo"
                  />
                  <h2>Nextupgrad USA</h2>
                  <p>
                    Personalize your success journey today with our expert
                    panel, save 90% time by unlocking precision in digital
                    solutions crafted just for you!
                  </p>
                  <p>244 Fifth Avenue, Suite D261 New York, N.Y. 10001</p>
                </div>
              </Col>
              <Col className="col-md-4">
                <div className={style.ftr}>
                  <h2>Visit Us</h2>
                  <ul>
                    <li>
                      <Link href="/about-us" title="About Us">
                        <FaArrowRight /> About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog" title="About Us">
                        <FaArrowRight /> Blog
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact-us" title="About Us">
                        <FaArrowRight /> Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col className="col-md-4">
                <div className={style.ftr}>
                  <h2>Drop Us A Line</h2>
                  <ul>
                    <li>
                      <Link href="mailto:hello@nextupgrad.us" title="Mail Us">
                        <FaMailBulk /> hello@nextupgrad.us
                      </Link>
                    </li>
                    <li>
                      <Link href="tel:+1(408)400-3232" title="Call Us">
                        <FaPhoneAlt /> +1 {"(408)"} 400-3232
                      </Link>
                    </li>
                    <li>
                      <Link href="tel:+1(315)871-5558" title="Call Us">
                        <FaPhoneAlt />
                        +1 {"(315)"} 871-5558
                      </Link>
                    </li>
                    <li>
                      <Link href="tel:18005700144" title="Toll Free">
                        <FaBlenderPhone /> Toll Free: 18005700144
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
            <Row className={style.ftrSign}>
              <Col>
                <p>
                  Copyright &copy; {new Date().getFullYear()}{" "}
                  <Link href="/" title="Nextupgrad USA">
                    Nextupgrad USA
                  </Link>
                  . All rights reserved.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
};

export default SeoService;
