import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/LandingFunnels.module.css";
import { Col, Row, Container, Accordion } from "react-bootstrap";
import TestForms from "@/components/WebsiteForm";
import { BsFillPatchQuestionFill } from "react-icons/bs";

function LandingFunnels() {
  return (
    <>
      <Head>
        <title>Landing Page & Funnels - Nextupgrad USA</title>
      </Head>
      <div className={styles.landingFunnel}>
        <section className={styles.landingFunnelBnr}>
          <Container>
            <Row className={`justify-content-between ${styles.bannerRow}`}>
              <Col className="col-md-6 align-content-center">
                <h1>
                  Get More Quality Leads With Powerful{" "}
                  <span>Landing Pages & Funnels</span>
                </h1>
                <p>
                  Think of landing pages as an integral part of your marketing
                  and advertising strategy. {"NextUpgrad's"} professional
                  landing page design services will help you do that. We help
                  clients boost sales, enhance the standard of leads, and
                  generate more revenue through our tailor-made designs. Let
                  NextUpgrad customize the landing pages for you.
                </p>
                <TestForms />
              </Col>
              <Col className="col-md-5">
                <Image
                  src="/assets/banner-socmedad.png"
                  alt="banner-socmedad"
                  width={670}
                  height={454}
                  className={styles.bnrImg}
                />
              </Col>
            </Row>
          </Container>
        </section>
        <section className={styles.problems}>
          <Container>
            <Row className="mb-5">
              <Col>
                <h2>
                  <span>Problem</span>
                  <br />
                  What Problems We Solve
                </h2>
              </Col>
            </Row>
            <Row className={`"mb-5" ${styles.probs}`}>
              {[
                {
                  title: "Struggling to Make a Memorable First Impression",
                  description:
                    "Your PPC campaigns are driving traffic, but conversions are lagging. Visitors bounce because your landing pages fail to engage or guide them effectively. At NextUpgrad, we create conversion-focused landing pages that are optimized for PPC campaigns. Our designs captivate your audience, provide clear value propositions, and drive more actions—from clicks to conversions.",
                },
                {
                  title: "Why Effective Landing Pages Matte",
                  description:
                    "Generic or poorly structured landing pages confuse users and dilute your PPC budget. This results in lower quality scores, higher costs, and fewer leads. NextUpgrad designs highly targeted landing pages that align with your PPC ads. With clear messaging and visually appealing layouts, we ensure visitors stay, engage, and convert.",
                },
                {
                  title: "Optimized for Every Stage of the Funnel",
                  description:
                    "Not all visitors are ready to buy immediately. Without customized messaging, you risk losing valuable leads who aren’t quite ready to commit. We design custom landing pages for each stage of your sales funnel. Whether it's raising awareness, generating leads, or closing sales, our pages guide users seamlessly toward their next step.",
                },
                {
                  title: "Mobile-First Design for Maximum Reach",
                  description:
                    "A significant portion of PPC traffic comes from mobile users. If your landing pages aren’t mobile-friendly, you’re missing out on valuable opportunities. NextUpgrad specializes in responsive, mobile-first landing page designs. Every element is optimized for a seamless experience across devices, ensuring you capture every lead, no matter how they arrive.",
                },
                {
                  title: "A/B Testing for Continuous Improvement",
                  description:
                    "Without data-driven testing, you can’t identify which designs or messaging resonate best with your audience. This can lead to stagnation in performance. We implement A/B testing to refine and optimize your landing pages. By analyzing user behavior, we continuously enhance layouts, copy, and CTAs to maximize results and ROI.",
                },
              ].map((problem, index) => (
                <Col key={index} className={`${styles.cardCol} col-md-6 mb-4`}>
                  <div className={styles.problemCard}>
                    <h3 className={styles.cardTitle}>
                      <span>
                        <BsFillPatchQuestionFill />
                      </span>
                      {problem.title}
                    </h3>
                    <p className={styles.cardDescription}>
                      {problem.description}
                    </p>
                  </div>
                </Col>
              ))}
            </Row>
            <Row className="text-center">
              <Col>
                <Link href="#" title="Contact Us" className={styles.ctaBtn}>
                  Send a Proposal Now
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={styles.faqs}>
          <Container>
            <Row className="mb-5">
              <Col>
                <h2>
                  <span>FAQs</span>
                  <br />
                  FAQs About Landing Page Design Services
                </h2>
                <p>
                  Looking to learn more about landing page design services?
                  Browse our FAQ:
                </p>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col className="col-md-11">
                <Accordion defaultActiveKey="0" flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className={styles.accordHead}>
                      Q1 - What are landing page design services?
                    </Accordion.Header>
                    <Accordion.Body>
                      <strong>Answer - </strong>Our landing page design services
                      increase conversion rates from ad campaigns, email
                      marketing, and other initiatives through
                      conversion-focused designs. We handle the entire process:
                      designing, building, testing, and launching your landing
                      page.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header className={styles.accordHead}>
                      Q2 - Why do I need landing pages for PPC campaigns?
                    </Accordion.Header>
                    <Accordion.Body>
                      <Image
                        src="/assets/landing-faq.png"
                        alt="Why Landing Pages"
                        title="Why Landing Pages"
                        width={512}
                        height={311}
                      />
                      <p>
                        <strong>Answer - </strong>Driving traffic to your site
                        through search engine optimization and online
                        advertising is important, but converting that traffic
                        into sales is critical. This is where landing page
                        design services for PPC can make a significant impact.
                      </p>
                      <p>
                        Landing pages are designed to persuade visitors to take
                        specific actions, such as making a purchase or sharing
                        your page within online communities. Instead of sending
                        visitors to a generic homepage, direct them to a
                        targeted landing page that guides them through the next
                        steps in your sales funnel.
                      </p>
                      <p>
                        By leveraging professional landing page design services,
                        your company can increase business, reduce bounce rates,
                        and reap other valuable benefits.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header className={styles.accordHead}>
                      Q3 - How do landing pages guide your audience?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        <strong>Answer - </strong>To better understand this
                        concept, consider landing pages in terms of continuity.
                        Suppose you own a luxury pet care business and are
                        running a Google Ads campaign targeting search terms
                        related to dog walking services.
                      </p>
                      <p>
                        Without a dedicated landing page, customers who click on
                        your ad searching for dog walking services will land on
                        your homepage. Since your business offers a wide range
                        of pet care services and products, they must navigate
                        through your site to find dog walking information. This
                        cumbersome process leads to low conversion rates.
                      </p>
                      <p>
                        By creating a custom landing page specific to dog
                        walking, you can guide potential customers directly to
                        relevant information, pricing, and offerings. This
                        specialized page increases the likelihood of engagement
                        and conversion.
                      </p>
                      <p>
                        Humans prefer consistency, and landing pages effectively
                        deliver that. By reducing disruptions and distractions,
                        you streamline your sales funnel and improve customer
                        experience.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
}

export default LandingFunnels;
