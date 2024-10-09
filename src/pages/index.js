import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  FaLinkedin,
  FaGooglePlusSquare,
  FaStar,
  FaStarHalf,
  FaBolt,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import CountUp from "react-countup";
import styles from "@/styles/Home.module.css";
import HomeTab from "@/components/HomeTabs";
import Services from "@/components/ServiceTab";
import ContactForm from "@/components/ContactForm";
import { LuMessagesSquare } from "react-icons/lu";

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
                Digital Transformation
                <br />
                Services & Solutions <br />
                For {""}
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
                        src={"/assets/google-logo.svg"}
                        alt="google-logo"
                        title="Google-Logo"
                        width={100}
                        height={50}
                      />
                    </li>
                    <li>
                      <Image
                        src={"/assets/clutchco.svg"}
                        alt="clutch-logo"
                        title="Clutch-Logo"
                        width={100}
                        height={50}
                      />
                    </li>
                    <li>
                      <Image
                        src={"/assets/g2-logo.svg"}
                        alt="g2-logo"
                        title="G2-Logo"
                        width={100}
                        height={50}
                      />
                    </li>
                  </ul>
                </div>
                <div className={styles.devs}>
                  <ul>
                    <li>
                      <Image
                        src={"/assets/developer-one.webp"}
                        alt="developer-one"
                        title="Developer"
                        width={100}
                        height={100}
                      />
                    </li>
                    <li>
                      <Image
                        src={"/assets/developer-two.webp"}
                        alt="developer-two"
                        title="Developer"
                        width={100}
                        height={100}
                      />
                    </li>
                    <li>
                      <Image
                        src={"/assets/developer-three.webp"}
                        alt="developer-three"
                        title="Developer"
                        width={100}
                        height={100}
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
                src={"/assets/achievements.webp"}
                alt="achievements"
                className={styles.bannerImg}
                title="Achievements"
                priority="true"
                width={100}
                height={100}
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.homeTabs}>
        <Container>
          <Row>
            <Col>
              <h2>
                <span>Solution</span>
                <br />
                Problems We Solve
              </h2>
              <p>
                We help businesses enhance efficiency, drive digital
                transformation, and improve customer engagement with tailored
                solutions to overcome industry challenges.
              </p>
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
            <Col className={`col-md-4 ${styles.procLeft}`}>
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
            <Col className={`col-md-4 ${styles.procRight}`}>
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
                  {
                    "Our expert TA team aims to understand the candidate's goals, competitiveness, and learning agility to"
                  }{" "}
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
      <div className={styles.nextServices}>
        <Container>
          <Row>
            <Col>
              <h2>
                <span>Services</span>
                <br />
                Business-Oriented Mobile App & Web Development Services
              </h2>
              <p>
                Discover growth-driven business opportunities with our
                comprehensive services.
              </p>
              <Services />
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
                <Col className={styles.indsCol}>
                  <div className={`${styles.indsImg} ${styles.indsOne}`}>
                    <Image
                      src={"/assets/e-commerce.svg"}
                      alt="E-Cart"
                      width={60}
                      height={60}
                      title="E-Commerce"
                    />
                  </div>
                  <p>E-commerce</p>
                </Col>
                <Col className={styles.indsCol}>
                  <div className={`${styles.indsImg} ${styles.indsTwo}`}>
                    <Image
                      src={"/assets/healthcare.svg"}
                      alt="Heart"
                      width={60}
                      height={60}
                      title="Healthcare"
                    />
                  </div>
                  <p>Healthcare</p>
                </Col>
                <Col className={styles.indsCol}>
                  <div className={`${styles.indsImg} ${styles.indsThree}`}>
                    <Image
                      src={"/assets/education.svg"}
                      alt="Degree-Cap"
                      width={60}
                      height={60}
                      title="E-Learning"
                    />
                  </div>
                  <p>E-Learning</p>
                </Col>
                <Col className={styles.indsCol}>
                  <div className={`${styles.indsImg} ${styles.indsFour}`}>
                    <Image
                      src={"/assets/media.svg"}
                      alt="Camera"
                      width={60}
                      height={60}
                      title="News & Media"
                    />
                  </div>
                  <p>News & Media</p>
                </Col>
                <Col className={styles.indsCol}>
                  <div className={`${styles.indsImg} ${styles.indsFive}`}>
                    <Image
                      src={"/assets/real-estate.svg"}
                      alt="Crane"
                      width={60}
                      height={60}
                      title="Real Estate"
                    />
                  </div>
                  <p>Real Estate</p>
                </Col>
              </Row>
              <Row className={styles.inds}>
                <Col className={styles.indsCol}>
                  <div className={`${styles.indsImg} ${styles.indsSix}`}>
                    <Image
                      src={"/assets/logistics.svg"}
                      alt="Shipment-Truck"
                      width={60}
                      height={60}
                      title="Logistics & Distributions"
                    />
                  </div>
                  <p>Logistics & Distributions</p>
                </Col>
                <Col className={styles.indsCol}>
                  <div className={`${styles.indsImg} ${styles.indsSeven}`}>
                    <Image
                      src={"/assets/retail.svg"}
                      alt="Retail"
                      width={60}
                      height={60}
                      title="Retail Shops"
                    />
                  </div>
                  <p>Retail Shops</p>
                </Col>
                <Col className={styles.indsCol}>
                  <div className={`${styles.indsImg} ${styles.indsEight}`}>
                    <Image
                      src={"/assets/fast-food.svg"}
                      alt="Fast-Food"
                      width={60}
                      height={60}
                      title="Food & Beverages"
                    />
                  </div>
                  <p>Food & Beverages</p>
                </Col>
                <Col className={styles.indsCol}>
                  <div className={`${styles.indsImg} ${styles.indsNine}`}>
                    <Image
                      src={"/assets/fmcg.svg"}
                      alt="FMCG"
                      width={60}
                      height={60}
                      title="FMCG"
                    />
                  </div>
                  <p>FMCG</p>
                </Col>
                <Col className={styles.indsCol}>
                  <div className={`${styles.indsImg} ${styles.indsTen}`}>
                    <Image
                      src={"/assets/travel.svg"}
                      alt="Aeroplane"
                      width={60}
                      height={60}
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
                  <Image
                    src={"/assets/quote.svg"}
                    alt="Quote-Icon"
                    title="Quote"
                    width={100}
                    height={100}
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
                  <Image
                    src={"/assets/google-logo.svg"}
                    alt="google-logo"
                    title="Google-Logo"
                    width={100}
                    height={100}
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
                  <Image
                    src={"/assets/clutchco.svg"}
                    alt="clutch-logo"
                    title="Clutch-Logo"
                    width={100}
                    height={100}
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
      <div className={styles.featured}>
        <Container>
          <h2>
            We Have <span>been Featured</span> On
          </h2>
          <Row className={styles.featureImg}>
            <Col className="col-md-2">
              <Image
                src="/assets/forbes-logo.png"
                title="Forbes_Logo"
                width={100}
                height={100}
              />
            </Col>
            <Col className="col-md-2">
              <Image
                src="/assets/fortune-logo.png"
                title="Fortune_Logo"
                width={100}
                height={100}
              />
            </Col>
            <Col className="col-md-2">
              <Image
                src="/assets/yahoo-logo.png"
                title="Yahoo_Logo"
                width={100}
                height={100}
              />
            </Col>
            <Col className="col-md-2">
              <Image
                src="/assets/aol-logo.png"
                title="AOL_Logo"
                width={100}
                height={100}
              />
            </Col>
            <Col className="col-md-2">
              <Image
                src="/assets/ani-news-logo.png"
                title="ANI_News_Logo"
                width={100}
                height={100}
              />
            </Col>
            <Col className="col-md-2">
              <Image
                src="/assets/yourstory-logo.png"
                title="Yourstory_Logo"
                width={100}
                height={100}
              />
            </Col>
          </Row>
          <Row className={styles.featRate}>
            <Col className="col-md-4">
              <FaBolt />
              <h3>Faster</h3>
              <p>
                Get top vetted profiles
                <br />
                within 24-48 hours
              </p>
            </Col>
            <Col className="col-md-4">
              <LuMessagesSquare />
              <h3>Reliable</h3>
              <p>
                Dedicated Account Manager Just one
                <br />
                email/whatsapp away
              </p>
            </Col>
            <Col className="col-md-4">
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalf />
              <h3>Trusted</h3>
              <p>
                4.6 Google | 4.4 Clutch
                <br />
                4.8 G2
              </p>
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
      <div className={styles.contactForm}>
        <Container>
          <Row className={styles.cont}>
            <Col className={`col-md-6 ${styles.contLeft}`}>
              <h2>
                <span>COntact Us</span>
                <br />
                {"Let’s Partner For Your Next Amazing Project"}
              </h2>
              <p>
                Allow us to be your technical aid in another of your successful
                business venture. Mail, Chat, Call or better meet us over a cup
                of coffee and share with us your development plan.
              </p>
              <h3>What Happens next?</h3>
              <ul>
                <li>
                  <span>01</span>
                  <p>
                    An expert contacts you after
                    <br />
                    having analyzed your requirements.
                  </p>
                </li>
                <li>
                  <span>02</span>
                  <p>
                    If needed, we sign an NDA to ensure
                    <br />
                    the highest privacy level.
                  </p>
                </li>
                <li>
                  <span>03</span>
                  <p>
                    We submit a comprehensive project proposal
                    <br />
                    with estimates, timelines, CVs, etc.
                  </p>
                </li>
              </ul>
            </Col>
            <Col className={`col-md-6 ${styles.contRight}`}>
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Home;
