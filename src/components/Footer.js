import React from "react";
import styles from "@/styles/Footer.module.css";
import { Col, Container, Row } from "react-bootstrap";

function Footer() {
  return (
    <>
      <div className={styles.ftrMain}>
        <Container>
          <Row>
            <Col className="col-md-3">
              <h2>Hello</h2>
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
