import Head from "next/head";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  FaLinkedin,
  FaGooglePlusSquare,
  FaStar,
  FaStarHalf,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import CountUp from "react-countup";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import google from "@/assets/google-logo.svg";
import clutch from "@/assets/clutch-logo.svg";
import gtwo from "@/assets/g2-logo.svg";
import devOne from "@/assets/developer-one.webp";
import devTwo from "@/assets/developer-two.webp";
import devThree from "@/assets/developer-three.webp";
import achieve from "@/assets/achievements.webp";
import ecart from "@/assets/e-commerce.svg";
import edu from "@/assets/education.svg";
import food from "@/assets/fast-food.svg";
import fmcg from "@/assets/fmcg.svg";
import health from "@/assets/healthcare.svg";
import logi from "@/assets/logistics.svg";
import media from "@/assets/media.svg";
import estate from "@/assets/real-estate.svg";
import travel from "@/assets/travel.svg";
import retail from "@/assets/retail.svg";
import quote from "@/assets/quote.svg";
import HomeTab from "@/components/HomeTabs";

function Home() {
  return (
    <>
      <Head>
        <title>
          Digital Transformation Services and Solutions with NextUpgrad USA
        </title>
        <meta
          name="description"
          content="Take your business forward with website development services and solutions. Drive efficiency, agility, and growth. Get a free consultation."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.bannerMain}>
        <Container>
          <Row>
            <Col className={`col-md-7 ${styles["banLeft"]}`}>
              <h1>
                Digital Transformation Services & Solutions For {""}
                {/* <span> AI, 10X Faster!</span> */}
                <TypeAnimation
                  sequence={[
                    "Designing Websites.",
                    2000,
                    "Developing Apps.",
                    2000,
                    "Engineering Software.",
                    2000,
                    "Hiring Developers.",
                    2000,
                    "Digital Marketing Services.",
                    2000,
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  preRenderFirstString
                />
              </h1>
              <p>
                Personalize your success journey today with our expert panel,
                <strong> save 90% time </strong>by unlocking precision in
                digital solutions crafted just for you!
              </p>
              <div className={styles.bannerBtn}>
                <Link
                  href="#"
                  className={styles.btnHire}
                  title="Hire-Developers"
                >
                  Hire Developers <FaArrowRightLong />
                </Link>
                <Link href="#" className={styles.btnCont} title="Contact-Us">
                  Contact Us
                </Link>
              </div>
              <div className={styles.review}>
                <div className={styles.rev}>
                  <ul className={styles.ratings}>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStarHalf />
                    </li>
                    <li>20,000+ Reviews</li>
                  </ul>
                  <ul className={styles.branding}>
                    <li>
                      <Image
                        src={google}
                        alt="google-logo"
                        title="Google-Logo"
                      />
                    </li>
                    <li>
                      <Image
                        src={clutch}
                        alt="clutch-logo"
                        title="Clutch-Logo"
                      />
                    </li>
                    <li>
                      <Image src={gtwo} alt="g2-logo" title="G2-Logo" />
                    </li>
                  </ul>
                </div>
                <div className={styles.devs}>
                  <ul>
                    <li>
                      <Image
                        src={devOne}
                        alt="developer-one"
                        title="Developer"
                      />
                    </li>
                    <li>
                      <Image
                        src={devTwo}
                        alt="developer-two"
                        title="Developer"
                      />
                    </li>
                    <li>
                      <Image
                        src={devThree}
                        alt="developer-three"
                        title="Developer"
                      />
                    </li>
                    <li>
                      <strong>2200+</strong> top Developers
                      <br />
                      for your custom needs
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.inStart}>
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
                <div className={styles.inStartups}>
                  <Link
                    href="https://www.linkedin.com/company/nextupgrad-usa"
                    target="_blank"
                    title="Google"
                  >
                    <p className="text-nowrap">
                      <FaGooglePlusSquare /> Top 20 AI Accelerator Startups of
                      2023
                    </p>
                  </Link>
                </div>
              </div>
            </Col>
            <Col className={`col-md-5 ${styles["banRight"]}`}>
              <Image
                src={achieve}
                alt="achievements"
                className={styles.bannerImg}
                title="Achievements"
                priority="true"
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.homeTabs}>
        <Container>
          <Row>
            <Col>
              <HomeTab />
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.projectBg}>
        <Container>
          <Row className={styles.projRow}>
            <Col className="col-md-8">
              <h2>Projects Accomplished & Counting</h2>
              <Row>
                <Col>
                  <p>
                    <span>
                      <CountUp end={100} duration={5} suffix="+" />
                    </span>
                    <br />
                    Project Developed
                  </p>
                </Col>
                <Col>
                  <p>
                    <span>
                      <CountUp end={25} duration={5} suffix="+" />
                    </span>
                    <br />
                    Industries
                  </p>
                </Col>
                <Col>
                  <p>
                    <span>
                      <CountUp end={500} duration={5} suffix="+" />
                    </span>
                    <br />
                    Website Design
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    <span>
                      <CountUp end={14} duration={5} suffix="+" />
                    </span>
                    <br />
                    Number of Countries Operations
                  </p>
                </Col>
                <Col>
                  <p>
                    <span>
                      <CountUp end={254} duration={5} suffix="+" />
                    </span>
                    <br />
                    Search Engine Optimisation Projects
                  </p>
                </Col>
                <Col>
                  <p>
                    <span>
                      <CountUp end={139} duration={5} suffix="+" />
                    </span>
                    <br />
                    Paid Campaign Advertisement & Projects
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.industry}>
        <Container>
          <Row>
            <Col>
              <h2>
                <span>Industry</span>
                <br />
                Delivering Industry-Focused Software Solutions
              </h2>
              <p>
                Our team of Solution Architect & Software Engineers, Analysts
                collaborates with clients from diverse industry segments, to
                understand their roadblocks and objectives, enabling us to
                develop custom software solutions that are efficient and
                scalable.
              </p>
              <Row className={styles.inds}>
                <Col>
                  <Image
                    src={ecart}
                    alt="E-Cart"
                    width={100}
                    height={100}
                    title="E-Commerce"
                  />
                  <p>E-commerce</p>
                </Col>
                <Col>
                  <Image
                    src={health}
                    alt="Heart"
                    width={100}
                    height={100}
                    title="Healthcare"
                  />
                  <p>Healthcare</p>
                </Col>
                <Col>
                  <Image
                    src={edu}
                    alt="Degree-Cap"
                    width={100}
                    height={100}
                    title="E-Learning"
                  />
                  <p>E-Learning</p>
                </Col>
                <Col>
                  <Image
                    src={media}
                    alt="Camera"
                    width={100}
                    height={100}
                    title="News & Media"
                  />
                  <p>News & Media</p>
                </Col>
                <Col>
                  <Image
                    src={estate}
                    alt="Crane"
                    width={100}
                    height={100}
                    title="Real Estate"
                  />
                  <p>Real Estate</p>
                </Col>
              </Row>
              <Row className={styles.inds}>
                <Col>
                  <Image
                    src={logi}
                    alt="Shipment-Truck"
                    width={100}
                    height={100}
                    title="Logistics & Distributions"
                  />
                  <p>Logistics & Distributions</p>
                </Col>
                <Col>
                  <Image
                    src={retail}
                    alt="Retail"
                    width={100}
                    height={100}
                    title="Retail Shops"
                  />
                  <p>Retail Shops</p>
                </Col>
                <Col>
                  <Image
                    src={food}
                    alt="Fast-Food"
                    width={100}
                    height={100}
                    title="Food & Beverages"
                  />
                  <p>Food & Beverages</p>
                </Col>
                <Col>
                  <Image
                    src={fmcg}
                    alt="FMCG"
                    width={100}
                    height={100}
                    title="FMCG"
                  />
                  <p>FMCG</p>
                </Col>
                <Col>
                  <Image
                    src={travel}
                    alt="Aeroplane"
                    width={100}
                    height={100}
                    title="Hotel & Travel"
                  />
                  <p>Hotel & Travel</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.testimonial}>
        <Container>
          <Row className={styles.viewAll}>
            <Col className="col-md-6">
              <Row className={styles.viewTest}>
                <Col className={`col-md-2 ${styles["quote"]}`}>
                  <Image src={quote} alt="Quote-Icon" title="Quote" />
                </Col>
                <Col className={`col-md-8 ${styles["trs"]}`}>
                  <h2>
                    <span className={styles.trust}>TRUSTED BY</span>
                    <br />
                    <span className={styles.clients}>
                      <CountUp end={2400} duration={5} suffix="+" />
                    </span>{" "}
                    happy clients
                  </h2>
                </Col>
              </Row>
            </Col>
            <Col className={`col-md-6 ${styles["allBtn"]}`}>
              <Link href="#" title="View Testimonials">
                View All
              </Link>
            </Col>
          </Row>
          <Row className={styles.videoTest}>
            <Col className="col-md-6">
              <div className={styles.clientReview}>
                <h2>Commendation received from Mr. Patrick</h2>
                <p>
                  {
                    "I’m working with nextupgrad since April, 2023 and these guys are amazing team. They have been there from day 1 for me. They also worked on weekends just to make sure my website and products were up to the standard."
                  }
                </p>
              </div>
              <div className={styles.clientSign}>
                <h3>Mr. Patrick</h3>
                <p>Client for Website Development & Digital Marketing</p>
              </div>
            </Col>
            <Col className="col-md-6">
              <Row>
                <Col>
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
              <Row className={styles.brandRating}>
                <Col className="col-md-3">
                  <Image src={google} alt="google-logo" title="Google-Logo" />
                </Col>
                <Col className="col-md-3">
                  <h2>4.9</h2>
                  <ul>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                  </ul>
                </Col>
                <Col className="col-md-3">
                  <Image src={clutch} alt="clutch-logo" title="Clutch-Logo" />
                </Col>
                <Col className="col-md-3">
                  <h2>4.8</h2>
                  <ul>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.caseStudy}>
        <Container>
          <Row>
            <Col className="col-md-9">
              <h2>
                <span>Case Studies</span>
                <br />
                Empowering Digital Transformation Through Software Solutions
              </h2>
              <p>
                Check how our custom software solutions have helped businesses
                achieve their strategic goals. Our technology consulting,
                development, and software outsourcing services have enabled
                companies to navigate the complexities of digitalisation.
              </p>
            </Col>
            <Col className={`col-md-3 ${styles["allCase"]}`}>
              <Link href="#" title="View Case Study">
                View All
              </Link>
            </Col>
          </Row>
          <Row className={styles.caseStd}>
            <Col className={`col-xs-12 col-sm ${styles["caseStdOne"]}`}>
              <Row>
                <Col className={styles.caseHead}>
                  <p>
                    Transforming security solutions with innovative technology
                  </p>
                </Col>
              </Row>
              <Row>
                <Col className={`col-md-4 ${styles["caseCount"]}`}>
                  <p>
                    <span>
                      <CountUp end={100} duration={5} suffix="+" />
                    </span>
                    <br />
                    Global brands empowered
                  </p>
                </Col>
                <Col className={`col-md-4 ${styles["caseCount"]}`}>
                  <p>
                    <span>
                      <CountUp end={1000} duration={5} suffix="+" />
                    </span>
                    <br />
                    Integrated Security Deployments
                  </p>
                </Col>
                <Col className={`col-md-4 ${styles["caseCount"]}`}>
                  <p>
                    <span>
                      <CountUp end={20} duration={5} suffix="%" />
                    </span>
                    <br />
                    Quicker Incident Responses
                  </p>
                </Col>
              </Row>
            </Col>
            <Col className={`col-xs-12 col-sm ${styles["caseStdTwo"]}`}>
              <Row>
                <Col className={styles.caseHead}>
                  <p>
                    Transforming security solutions with innovative technology
                  </p>
                </Col>
              </Row>
              <Row>
                <Col className={`col-md-4 ${styles["caseCount"]}`}>
                  <p>
                    <span>
                      <CountUp end={100} duration={5} suffix="+" />
                    </span>
                    <br />
                    Global brands empowered
                  </p>
                </Col>
                <Col className={`col-md-4 ${styles["caseCount"]}`}>
                  <p>
                    <span>
                      <CountUp end={1000} duration={5} suffix="+" />
                    </span>
                    <br />
                    Integrated Security Deployments
                  </p>
                </Col>
                <Col className={`col-md-4 ${styles["caseCount"]}`}>
                  <p>
                    <span>
                      <CountUp end={20} duration={5} suffix="%" />
                    </span>
                    <br />
                    Quicker Incident Responses
                  </p>
                </Col>
              </Row>
            </Col>
            <Col className={`col-xs-12 col-sm ${styles["caseStdThree"]}`}>
              <Row>
                <Col className={styles.caseHead}>
                  <p>
                    Transforming security solutions with innovative technology
                  </p>
                </Col>
              </Row>
              <Row>
                <Col className={`col-md-4 ${styles["caseCount"]}`}>
                  <p>
                    <span>
                      <CountUp end={100} duration={5} suffix="+" />
                    </span>
                    <br />
                    Global brands empowered
                  </p>
                </Col>
                <Col className={`col-md-4 ${styles["caseCount"]}`}>
                  <p>
                    <span>
                      <CountUp end={1000} duration={5} suffix="+" />
                    </span>
                    <br />
                    Integrated Security Deployments
                  </p>
                </Col>
                <Col className={`col-md-4 ${styles["caseCount"]}`}>
                  <p>
                    <span>
                      <CountUp end={20} duration={5} suffix="%" />
                    </span>
                    <br />
                    Quicker Incident Responses
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Home;
