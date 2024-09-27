import Head from "next/head";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  FaLinkedin,
  FaGooglePlusSquare,
  FaStar,
  FaStarHalf,
} from "react-icons/fa";
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
        <title>Nextupgrad USA</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/logo.webp" />
      </Head>
      <div>
        <Container>
          <Row>
            <Col className="col-md-6">
              <h1>
                Hire Software Developers Perfectly Matched by{" "}
                <span>AI, 10X Faster!</span>
              </h1>
              <p>
                Skip CV screening, interview rounds, &{" "}
                <strong>save 90% time</strong> by either hiring a software
                developer or your entire engineering team with us.
              </p>
              <div className={styles.bannerBtn}>
                <Link href="#">
                  Hire Developers <FaArrowRightLong />
                </Link>
                <Link href="#">Contact Us</Link>
              </div>
              <div>
                <div>
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
                      <FaStarHalf />
                    </li>
                    <li>
                      <p>20,000+ Reviews</p>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Image src={google} alt="google-logo" />
                    </li>
                    <li>
                      <Image src={clutch} alt="clutch-logo"/>
                    </li>
                    <li>
                      <Image src={gtwo} alt="g2-logo"/>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>
                      <Image src={devOne} alt="developer-one"/>
                    </li>
                    <li>
                      <Image src={devTwo} alt="developer-two"/>
                    </li>
                    <li>
                      <Image src={devThree} alt="developer-three"/>
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
            <Col className="col-md-6">
              <Image src={achieve} width={"100%"} height={"100%"} alt="achievements"/>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Home;
