import Head from "next/head";
import style from "@/styles/LandingPage.module.css";
import { Col, Container, Row } from "react-bootstrap";
import CountdownTimer from "@/components/CountDown";

const SeoService = () => {
    return (
        <>
            <Head>
                <title>Landing Page - Nextupgrad USA</title>
            </Head>
            <div className={style.landing}>
                <section className={style.landMain}>
                    <Container>
                        <Row>
                            <Col>
                                <CountdownTimer />
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        </>
    );
};

export default SeoService;
