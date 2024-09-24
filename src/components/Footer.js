import React from "react";
import Image from "next/image";
import Link from "next/link";
import brand from "../assets/logo.webp";
import styles from "@/styles/Footer.module.css";
import { FaLinkedin } from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";

function Footer() {
  return (
    <>
      <div className={styles.ftrMain}>
        <Container>
          <Row>
            <Col className="col-md-3">
              <Link href="/">
                <Image src={brand} width={"100%"} height={100} />
              </Link>
              <div className={styles.inStartups}>
                <Link href="https://www.linkedin.com/company/nextupgrad-usa" target="_blank">
                  <p class="text-nowrap">
                    <FaLinkedin /> Top 20 Indian Startups of 2023
                  </p>
                </Link>
              </div>
            </Col>
            <Col className="col-md-3">
              <h2>Nextupgrad</h2>
            </Col>
            <Col className="col-md-3">
              <h2>USA</h2>
            </Col>
            <Col className="col-md-3">
              <h2>!!</h2>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Footer;
