import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import CountUp from "react-countup";
import styles from "@/styles/AboutUs.module.css";
import { Col, Row, Container, Tab, Nav } from "react-bootstrap";

function AboutUs() {
  return (
    <>
      <Head>
        <title>About US - NextUpgrad USA</title>
        <meta name="title" content="Contact US - NextUpgrad USA" />
        <meta
          name="description"
          content="Contact us for personalized solutions. From inquiries to collaboration, we're here to support your needs. Reach out today, and let's shape your success together."
        />
      </Head>
      <div className={styles.about}>
        <section className={styles.abtBnr}>
          <Container>
            <Row>
              <Col className="col-md-6">
                <h1>
                  Welcome to <span>NextUpgrad USA</span>, Where Businesses Forge
                  their Digital Destiny!
                </h1>
                <p>
                  At NextUpgrad, our mission is to empower businesses and
                  individuals by delivering cutting-edge software, website , and
                  mobile app development solutions, coupled with innovative
                  digital marketing strategies. We are committed to leveraging
                  technology to enhance our {"client's"} online presence,
                  streamline their operations, and drive sustainable growth.
                </p>
              </Col>
              <Col className="col-md-6 align-content-center">
                <div className={styles.bnrImg}>
                  <Image
                    src="/assets/logo-2orange-1.webp"
                    alt="Nextupgrad_Logo"
                    title="Nextupgrad USA"
                    width={1024}
                    height={413}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={styles.ceoCol}>
          <Container>
            <Row className="mb-4">
              <Col>
                <h2>
                  <span>About</span>
                  <br />
                  About NextUpgrad USA
                </h2>
              </Col>
            </Row>
            <Row className="justify-content-evenly">
              <Col className="col-md-5">
                <div className={styles.ceoImg}>
                  <Image
                    src="/assets/ceo.webp"
                    alt="CEO Image"
                    title="Deepak Tandon"
                    width={1200}
                    height={1200}
                  />
                </div>
              </Col>
              <Col className="col-md-5">
                <p>
                  A decade ago, <span>Deepak Tandon</span>, aka Mac Robinson,
                  envisioned <span>{"“NextUpgrad”"}</span> as a response to the
                  pitfalls of customer experience in the US IT market. Starting
                  his journey in 2010, he witnessed the {"industry’s"}{" "}
                  shortcomings firsthand. Fueled by a commitment to elevate
                  expectations, Deepak turned his dream into reality. In just 3+
                  years, he nurtured {"“NextUpgrad”"} from a team of 3 to a
                  family of 100+, treating it like his own child.
                </p>
                <p>
                  Today, <span>{"“NextUpgrad”"}</span> is more than a tech
                  solution provider—{"it’s"} a guide for businesses. Beyond
                  crafting digital presences, the company is a beacon for
                  effective marketing strategies, ensuring clients not only
                  thrive online but see a surge in sales. The story of{" "}
                  <span>{"“NextUpgrad”"}</span> is one of resilience, growth,
                  and a commitment to transforming challenges into
                  opportunities.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={styles.commune}>
          <Container>
            <Row className="mb-4">
              <Col>
                <h2>
                  <span>Community</span>
                  <br />
                  Our Community
                </h2>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col className="col-md-4">
                <div className={styles.abtCount}>
                  <CountUp end={60} duration={5} suffix={"+"} />
                  <p>Expert Developers in 15 Innovative.</p>
                </div>
              </Col>
              <Col className="col-md-4">
                <div className={styles.abtCount}>
                  <CountUp end={60} duration={5} suffix={"+"} />
                  <p>Digital Marketers in 10 Different Verticals.</p>
                </div>
              </Col>
              <Col className="col-md-4">
                <div className={styles.abtCount}>
                  <CountUp end={60} duration={5} suffix={"+"} />
                  <p>Customer Served in 5+ Countries.</p>
                </div>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col className="col-md-4">
                <div className={styles.abtCount}>
                  <CountUp end={10} duration={5} suffix={"+"} />
                  <p>Quality Assurance Resources</p>
                </div>
              </Col>
              <Col className="col-md-4">
                <div className={styles.abtCount}>
                  <CountUp end={400} duration={5} suffix={"+"} />
                  <p>Client Satisfied</p>
                </div>
              </Col>
              <Col className="col-md-4">
                <div className={styles.abtCount}>
                  <CountUp end={75} duration={5} suffix={"+"} />
                  <p>Technology Certified Resources</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="text-center">
                <Link
                  href="#"
                  title="Send Us A Proposal"
                  className={styles.ctaBtn}
                >
                  Send Us A Proposal
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={styles.integrity}>
          <Container>
            <Row className="mb-4">
              <Col>
                <h2>
                  <span>integrity</span>
                  <br />
                  Our integrity
                </h2>
                <p>
                  NextUpgrad boasts a robust presence in the US market,
                  recognized for its unwavering integrity and exemplary work
                  ethics. As a result, it stands out as a reliable, promising,
                  and unique brand—an ideal long-term technology partner.
                </p>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col className="col-md-6">
                <div className={styles.abtCount}>
                  <h3>Customer-Centric Philosophy</h3>
                  <p>
                    We always place the customer at the core of business
                    decisions and operations that form the foundation for their
                    growth.
                  </p>
                </div>
              </Col>
              <Col className="col-md-6">
                <div className={styles.abtCount}>
                  <h3>Unparalleled Customer Experience</h3>
                  <p>
                    Proactively addressing customer needs, actively listening to
                    concerns, and providing solutions define our commitment to
                    exceptional customer experiences.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col className="col-md-6">
                <div className={styles.abtCount}>
                  <h3>Driving Innovation and Adaptability</h3>
                  <p>
                    Staying at the forefront of technological advancements, we
                    consistently explore new ideas and technologies to handle
                    projects with innovation and adaptability.
                  </p>
                </div>
              </Col>
              <Col className="col-md-6">
                <div className={styles.abtCount}>
                  <h3>Executing Agile Development</h3>
                  <p>
                    Embracing agile methodologies enhances collaboration,
                    flexibility, and responsiveness to change in our project
                    execution.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col className="col-md-6">
                <div className={styles.abtCount}>
                  <h3>Unprecedented client Satisfaction</h3>
                  <p>
                    Our 24×7 real-time communication system ensures prompt
                    responses to customer inquiries through various channels,
                    reinforcing our commitment to unparalleled client
                    satisfaction.
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="text-center">
                <Link
                  href="#"
                  title="Send Us A Proposal"
                  className={styles.ctaBtn}
                >
                  Send Us A Proposal
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={styles.certified}>
          <Container>
            <Row className="mb-4">
              <h2>
                <span>Certifications</span>
                <br />
                Our Certifications
              </h2>
              <p>
                {"We’ve"} achieved a lot because {"we’ve"} worked really hard
                and stayed committed to being excellent. Our accomplishments
                show how dedicated we are to doing our best.
              </p>
            </Row>
            <Row className="mb-4">
              <Col className="col-md-3 align-content-center text-center">
                <div className={styles.abtCount}>
                  <Image
                    src="/assets/hubspot.webp"
                    alt="Hubspot"
                    title="Hubspot"
                    width={1143}
                    height={575}
                  />
                  <p>Certified Marketing Expert</p>
                </div>
              </Col>
              <Col className="col-md-3 text-center">
                <div className={styles.abtCount}>
                  <Image
                    src="/assets/adobe.webp"
                    alt="Adobe"
                    title="Adobe"
                    width={500}
                    height={500}
                  />
                  <p>Adobe Certified Professional</p>
                </div>
              </Col>
              <Col className="col-md-3 align-content-center text-center">
                <div className={styles.abtCount}>
                  <Image
                    src="/assets/Hubspot-Agency.webp"
                    alt="Hubspot_Agency"
                    title="Hubspot_Agency"
                    width={1143}
                    height={581}
                  />
                  <p>Leading HubSpot Partner</p>
                </div>
              </Col>
              <Col className="col-md-3 text-center">
                <div className={styles.abtCount}>
                  <Image
                    src="/assets/pmp.webp"
                    alt="PMP"
                    title="PMP"
                    width={300}
                    height={300}
                  />
                  <p>Project Management Professional</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="text-center">
                <Link
                  href="#"
                  title="Send Us A Proposal"
                  className={styles.ctaBtn}
                >
                  Send Us A Proposal
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={styles.ctaSec}>
          <Container>
            <Row className="mb-4">
              <Col className="text-center">
                <h2>
                  Looking for a committed partnership to boost your business?
                </h2>
              </Col>
            </Row>
            <Row>
              <Col className="text-center">
                <Link
                  href="/contact-us"
                  title="Send Us A Proposal"
                  className={styles.ctaBtn}
                >
                  Call Us Now
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
}

export default AboutUs;
