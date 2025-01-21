import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import ContactPageForm from "@/components/ContactPageForm";
import styles from "@/styles/ContactUs.module.css";
import { Col, Row, Container } from "react-bootstrap";

function ContactUs() {
  return (
    <>
      <Head>
        <title>Contact US - NextUpgrad USA</title>
        <meta name="title" content="Contact US - NextUpgrad USA" />
        <meta
          name="description"
          content="Contact us for personalized solutions. From inquiries to collaboration, we're here to support your needs. Reach out today, and let's shape your success together."
        />
      </Head>
      <div className={styles.contUs}>
        <section className={styles.contBnr}>
          <Container>
            <Row className="justify-content-evenly">
              <Col className="col-md-5 align-content-center">
                <div className={styles.contDet}>
                  <h1>Contact Us</h1>
                  <p>
                    Ready to take your project to the next level? Provide the
                    necessary details in the form, and our dedicated team will
                    reach out promptly.
                  </p>
                  <p>
                    {"Let’s"} transform your ideas into reality by addressing
                    all yourqueries. We look forward to connecting with you!
                  </p>
                  <div className={`mb-4 ${styles.query}`}>
                    <p>Business & Queries</p>
                    <Link href="mailto:hello@nextupgrad.us" title="Mail Us">
                      hello@nextupgrad.us
                    </Link>
                  </div>
                  <Link
                    href="tel:+1(408)400-3232"
                    title="Call Us"
                    className={styles.ctaBtn}
                  >
                    Call Us: +1 {"(408)"} 400-3232
                  </Link>
                </div>
              </Col>
              <Col className="col-md-6">
                <ContactPageForm />
              </Col>
            </Row>
          </Container>
        </section>
        <section className={styles.visit}>
          <Container>
            <Row className="mb-4">
              <Col>
                <h2>
                  <span>Visit</span>
                  <br />
                  Visit Us At
                </h2>
              </Col>
            </Row>
            <Row>
              <Col className="col-md-6">
                <div className="text-center">
                  <Image
                    src="/assets/usa-location.webp"
                    alt="USA Location"
                    title="Nextupgrad USA"
                    width={295}
                    height={353}
                    className="mb-4"
                  />
                  <h3>
                    <span>USA</span>
                    <br />
                    New York
                  </h3>
                  <p>244 Fifth Avenue, Suite D261 New York, N.Y. 10001</p>
                </div>
              </Col>
              <Col className="col-md-6">
                <div className="text-center">
                  <Image
                    src="/assets/uae-location.webp"
                    alt="UAE Location"
                    title="Nextupgrad UAE"
                    width={295}
                    height={353}
                    className="mb-4"
                  />
                  <h3>
                    <span>UAE</span>
                    <br />
                    Abu Dhabi
                  </h3>
                  <p>
                    05-2nd Floor, Hamdan Bin Mohammed St- Zone 1- E3-02, Abu
                    Dhabi
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={styles.location}>
          <Container>
            <Row className="mb-4">
              <Col>
                <h2>
                  <span>Location</span>
                  <br />
                  Explore Our Location!
                </h2>
                <p>
                  Ready to take your project to the next level?
                  <br />
                  Find us on the map below and visit our office to discuss your
                  ideas. Our dedicated team is always ready to assist you.{" "}
                  {"Let’s"} transform your vision into reality. We look forward
                  to meeting you in person!
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.790405992793!2d-73.99029452546645!3d40.744637235619244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a614ccab0b%3A0xf9f5eeef578aa3c4!2s244%205th%20Ave%20d261%2C%20New%20York%2C%20NY%2010001%2C%20USA!5e0!3m2!1sen!2sin!4v1719568200443!5m2!1sen!2sin"
                  width={"100%"}
                  height={330}
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
}

export default ContactUs;
