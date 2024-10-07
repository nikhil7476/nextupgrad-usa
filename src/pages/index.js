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
                      <img
                        src={"/assets/google-logo.svg"}
                        alt="google-logo"
                        title="Google-Logo"
                      />
                    </li>
                    <li>
                      <img
                        src={"/assets/clutch-logo.svg"}
                        alt="clutch-logo"
                        title="Clutch-Logo"
                      />
                    </li>
                    <li>
                      <img
                        src={"/assets/g2-logo.svg"}
                        alt="g2-logo"
                        title="G2-Logo"
                      />
                    </li>
                  </ul>
                </div>
                <div className={styles.devs}>
                  <ul>
                    <li>
                      <img
                        src={"/assets/developer-one.webp"}
                        alt="developer-one"
                        title="Developer"
                      />
                    </li>
                    <li>
                      <img
                        src={"/assets/developer-two.webp"}
                        alt="developer-two"
                        title="Developer"
                      />
                    </li>
                    <li>
                      <img
                        src={"/assets/developer-three.webp"}
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
              <img
                src={"/assets/achievements.webp"}
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
      <div className={styles.vettProc}>
        <Container>
          <Row className={`text-center ${styles.procHead}`}>
            <h2>
              The <span>Nextupgrad</span> Vetting Process
            </h2>
          </Row>
          <Row className={styles.proc}>
            <Col className="col-md-4">
              <Row>
                <p>
                  Our{" "}
                  <strong>AI examines each profile from our talent pool</strong>
                  , shortlisting only the top software developers based on their
                  resumes and previous roles.
                </p>
              </Row>
              <Row>
                <p>
                  Our <strong>rigorous technical assessments</strong> vet
                  software engineers for their technical prowess, ensuring only
                  top-tier candidates move ahead.
                </p>
              </Row>
            </Col>
            <Col className="col-md-4">
              <video
                width="100%"
                height="auto"
                title="Video"
                autoPlay
                muted
                loop
              >
                <source src="/assets/process.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Col>
            <Col className="col-md-4">
              <Row>
                <p>
                  Beyond technical know-how, we evaluate{" "}
                  <strong>
                    communication skills, problem-solving abilities, and
                    personal strengths
                  </strong>{" "}
                  of the developers.
                </p>
              </Row>
              <Row>
                <p>
                  Our expert TA team aims to understand the candidate's goals,
                  competitiveness, and learning agility to{" "}
                  <strong>ensure you hire top talent.</strong>
                </p>
              </Row>
            </Col>
          </Row>
          <Row className={styles.procHire}>
            <h3>
              <span>Only 1.2%</span>
              <br />
              of Senior Developers Pass
            </h3>
            <Link href="#" target="_blank" title="Hire Now">
              Hire Now <FaArrowRightLong />
            </Link>
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
                <Col className={styles.indsCol}>
                  <div className={`${styles.indsImg} ${styles.indsOne}`}>
                    <img
                      src={"/assets/e-commerce.svg"}
                      alt="E-Cart"
                      width={100}
                      height={100}
                      title="E-Commerce"
                    />
                  </div>
                  <p>E-commerce</p>
                </Col>
                <Col className={styles.indsCol}>
                  <div className={`${styles.indsImg} ${styles.indsTwo}`}>
                    <img
                      src={"/assets/healthcare.svg"}
                      alt="Heart"
                      width={100}
                      height={100}
                      title="Healthcare"
                    />
                  </div>
                  <p>Healthcare</p>
                </Col>
                <Col className={styles.indsCol}>
                  <div className={`${styles.indsImg} ${styles.indsThree}`}>
                    <img
                      src={"/assets/education.svg"}
                      alt="Degree-Cap"
                      width={100}
                      height={100}
                      title="E-Learning"
                    />
                  </div>
                  <p>E-Learning</p>
                </Col>
                <Col className={styles.indsCol}>
                  <div className={`${styles.indsImg} ${styles.indsFour}`}>
                    <img
                      src={"/assets/media.svg"}
                      alt="Camera"
                      width={100}
                      height={100}
                      title="News & Media"
                    />
                  </div>
                  <p>News & Media</p>
                </Col>
                <Col className={styles.indsCol}>
                  <div className={`${styles.indsImg} ${styles.indsFive}`}>
                    <img
                      src={"/assets/real-estate.svg"}
                      alt="Crane"
                      width={100}
                      height={100}
                      title="Real Estate"
                    />
                  </div>
                  <p>Real Estate</p>
                </Col>
              </Row>
              <Row className={styles.inds}>
                <Col className={styles.indsCol}>
                  <div className={`${styles.indsImg} ${styles.indsSix}`}>
                    <img
                      src={"/assets/logistics.svg"}
                      alt="Shipment-Truck"
                      width={100}
                      height={100}
                      title="Logistics & Distributions"
                    />
                  </div>
                  <p>Logistics & Distributions</p>
                </Col>
                <Col className={styles.indsCol}>
                  <div className={`${styles.indsImg} ${styles.indsSeven}`}>
                    <img
                      src={"/assets/retail.svg"}
                      alt="Retail"
                      width={100}
                      height={100}
                      title="Retail Shops"
                    />
                  </div>
                  <p>Retail Shops</p>
                </Col>
                <Col className={styles.indsCol}>
                  <div className={`${styles.indsImg} ${styles.indsEight}`}>
                    <img
                      src={"/assets/fast-food.svg"}
                      alt="Fast-Food"
                      width={100}
                      height={100}
                      title="Food & Beverages"
                    />
                  </div>
                  <p>Food & Beverages</p>
                </Col>
                <Col className={styles.indsCol}>
                  <div className={`${styles.indsImg} ${styles.indsNine}`}>
                    <img
                      src={"/assets/fmcg.svg"}
                      alt="FMCG"
                      width={100}
                      height={100}
                      title="FMCG"
                    />
                  </div>
                  <p>FMCG</p>
                </Col>
                <Col className={styles.indsCol}>
                  <div className={`${styles.indsImg} ${styles.indsTen}`}>
                    <img
                      src={"/assets/travel.svg"}
                      alt="Aeroplane"
                      width={100}
                      height={100}
                      title="Hotel & Travel"
                    />
                  </div>
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
                  <img
                    src={"/assets/quote.svg"}
                    alt="Quote-Icon"
                    title="Quote"
                  />
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
                View All <FaArrowRightLong />
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
                  <img
                    src={"/assets/google-logo.svg"}
                    alt="google-logo"
                    title="Google-Logo"
                  />
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
                  <img
                    src={"/assets/clutch-logo.svg"}
                    alt="clutch-logo"
                    title="Clutch-Logo"
                  />
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
          <Row className={styles.case}>
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
                View All <FaArrowRightLong />
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
