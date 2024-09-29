import Head from "next/head";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
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
                <Link href="#" className={styles.btnHire}>
                  Hire Developers <FaArrowRightLong />
                </Link>
                <Link href="#" className={styles.btnCont}>
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
                      <Image src={google} alt="google-logo" />
                    </li>
                    <li>
                      <Image src={clutch} alt="clutch-logo" />
                    </li>
                    <li>
                      <Image src={gtwo} alt="g2-logo" />
                    </li>
                  </ul>
                </div>
                <div className={styles.devs}>
                  <ul>
                    <li>
                      <Image src={devOne} alt="developer-one" />
                    </li>
                    <li>
                      <Image src={devTwo} alt="developer-two" />
                    </li>
                    <li>
                      <Image src={devThree} alt="developer-three" />
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
                  >
                    <p class="text-nowrap">
                      <FaLinkedin /> Top 20 Indian Startups of 2023
                    </p>
                  </Link>
                </div>
                <div className={styles.inStartups}>
                  <Link
                    href="https://www.linkedin.com/company/nextupgrad-usa"
                    target="_blank"
                  >
                    <p class="text-nowrap">
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
              />
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
                    Project Developed<br/>
                    <span>
                      <CountUp end={100} duration={5} suffix="+" />
                    </span>
                  </p>
                </Col>
                <Col>
                  <p>
                    Industries<br/>
                    <span>
                      <CountUp end={25} duration={5} suffix="+" />
                    </span>
                  </p>
                </Col>
                <Col>
                  <p>
                    Website Design<br/>
                    <span>
                      <CountUp end={500} duration={5} suffix="+" />
                    </span>
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    Number of Countries Operations<br/>
                    <span>
                      <CountUp end={14} duration={5} suffix="+" />
                    </span>
                  </p>
                </Col>
                <Col>
                  <p>
                    Search Engine Optimisation Projects<br/>
                    <span>
                      <CountUp end={254} duration={5} suffix="+" />
                    </span>
                  </p>
                </Col>
                <Col>
                  <p>
                    Paid Campaign Advertisement & Projects<br/>
                    <span>
                      <CountUp end={139} duration={5} suffix="+" />
                    </span>
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
