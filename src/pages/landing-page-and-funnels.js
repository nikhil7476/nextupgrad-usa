import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import styles from "@/styles/LandingFunnels.module.css";
import { Col, Row, Container, Accordion, Tab, Nav } from "react-bootstrap";
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
            <Row className="mb-4">
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
        <section className={styles.expectations}>
          <Container>
            <Row className="mb-4">
              <Col>
                <h2>
                  <span>Expectations</span>
                  <br />
                  What to expect from our landing page design company
                </h2>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <Row className="justify-content-evenly">
                    <Col sm={3} className="delTab">
                      <Nav variant="pills" className="flex-column">
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="first"
                            className={styles.tabLinkText}
                          >
                            In-depth analysis of your PPC campaign and goals
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="second"
                            className={styles.tabLinkText}
                          >
                            Acquire High-Quality Leads
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="third"
                            className={styles.tabLinkText}
                          >
                            Landing page creation and launch
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="fourth"
                            className={styles.tabLinkText}
                          >
                            Maximize eCommerce Profits
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={8} className={styles.delTabCont}>
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <h3>
                            In-depth analysis of your PPC campaign and goals
                          </h3>
                          <p>
                            To create revenue-generating landing pages, we need
                            to understand your goals. Whether you have an
                            existing PPC campaign or are starting from scratch
                            with our PPC services,
                            {"we'll"} evaluate {"what's"} working and identify
                            areas for improvement.
                          </p>
                          <p>We will discuss:</p>
                          <Row>
                            <Col md={6}>
                              <ol style={{ listStylePosition: "inside" }}>
                                <li>
                                  Your current landing page design{" "}
                                  {"(if available)"}
                                </li>
                                <li>
                                  Our market research and targeting
                                  recommendations
                                </li>
                              </ol>
                            </Col>
                            <Col md={6}>
                              <ol
                                start={3}
                                style={{ listStylePosition: "inside" }}
                              >
                                <li>Your PPC budget</li>
                                <li>Your copy and keyword usage</li>
                              </ol>
                            </Col>
                          </Row>
                          <p>
                            This analysis will help us determine the necessary
                            enhancements for your landing pages to achieve the
                            desired results.
                          </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <h3>Acquire High-Quality Leads</h3>
                          <p>
                            To increase your marketing efforts, we offer landing
                            page design services with custom form solutions
                            aimed at improving your MQLs. Our focus is on
                            transforming prospects into qualified leads and
                            boosting conversions.
                          </p>
                          <p>{"Here’s"} what we cover:</p>
                          <ol>
                            <li>
                              Custom landing page design to capture the
                              attention
                            </li>
                            <li>
                              Custom form integrations for effective lead
                              qualification
                            </li>
                            <li>
                              Optimization strategies for higher conversion
                              rates
                            </li>
                          </ol>
                          <p>
                            Our approach ensures that your landing pages not
                            only attract but also convert, resulting in more
                            qualified prospects and successful outcomes.
                          </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <h3>Landing page creation and launch</h3>
                          <p>
                            After we outline a plan together, our team of
                            marketers, copywriters, and designers will start
                            drafting and testing the corresponding landing pages
                            for your ads. You can choose to be as involved as
                            you like during this stage.
                          </p>
                          <p>
                            Our landing page design company researches the top
                            keywords and design practices in your industry to
                            create pages customized to your {"audience's"}{" "}
                            preferences. You will review and approve the copy
                            and design before we launch the page and start
                            tracking the results.
                          </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fourth">
                          <h3>Maximize eCommerce Profits</h3>
                          <p>
                            Optimize campaigns with a customized eCommerce
                            landing page design company for increased sales and
                            efficiency.
                          </p>
                          <p>
                            After we outline a plan together, our team of
                            skilled marketers, experienced copywriters, and
                            creative designers will start drafting and testing
                            the corresponding landing pages for your ads. You
                            can choose to be as involved as you like during this
                            stage.
                          </p>
                          <p>
                            Our landing page design company conducts thorough
                            research on the top-ranking keywords and best design
                            practices in your industry to create pages that are
                            specifically tailored to your {"audience’s"}{" "}
                            preferences. You will have the opportunity to review
                            and approve the copy and design before we launch the
                            page and begin tracking the results.
                          </p>
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </Col>
            </Row>
            <Row className="text-center">
              <Col>
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
        <section className={styles.serviceCont}>
          <Container>
            <Row className="mb-4">
              <Col>
                <h2>
                  <span>Service Components</span>
                  <br />
                  Our Landing Page Design Services Comes With These Components
                </h2>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col md={3}>
                <div className={styles.serveDark}>
                  <h3>Effective White Space</h3>
                  <p>
                    Strategically placed white space increases readability and
                    creates a clean, uncluttered design, guiding the {"user's"}
                    focus to key elements seamlessly.
                  </p>
                </div>
              </Col>
              <Col md={3}>
                <div className={styles.serveDark}>
                  <h3>Engaging Visuals</h3>
                  <p>
                    Capture attention instantly with stunning, high-quality
                    visuals that resonate with your audience. Every image and
                    graphic is designed to tell your {"brand's"} story at a
                    glance.
                  </p>
                </div>
              </Col>
              <Col md={3}>
                <div className={styles.serveDark}>
                  <h3>Readable Typography</h3>
                  <p>
                    Crafted with clarity in mind, our typography ensures
                    effortless reading across all devices. Experience clean,
                    modern fonts that enhance engagement and accessibility.
                  </p>
                </div>
              </Col>
              <Col md={3}>
                <div className={styles.serveDark}>
                  <h3>Color Psychology</h3>
                  <p>
                    Discover the power of colors in influencing emotions and
                    behaviors. Unleash the potential of hues to captivate your
                    audience and inspire action effortlessly.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col md={3}>
                <div className={styles.serveDark}>
                  <h3>Fast Load Times</h3>
                  <p>
                    Experience lightning-fast page speeds that keep visitors
                    engaged and reduce bounce rates. Optimize performance and
                    deliver content instantly, every time.
                  </p>
                </div>
              </Col>
              <Col md={3}>
                <div className={styles.serveDark}>
                  <h3>Mobile Responsiveness</h3>
                  <p>
                    Seamlessly accessible on any device, our design ensures your
                    website looks stunning and functions flawlessly on
                    smartphones, tablets, and desktops. Reach your audience
                    wherever they are!
                  </p>
                </div>
              </Col>
              <Col md={3}>
                <div className={styles.serveDark}>
                  <h3>User-friendly Forms</h3>
                  <p>
                    Seamlessly designed forms that are intuitive and easy to
                    navigate ensure a hassle-free user experience and faster
                    submissions.
                  </p>
                </div>
              </Col>
              <Col md={3}>
                <div className={styles.serveDark}>
                  <h3>Intuitive Navigation</h3>
                  <p>
                    Effortlessly explore with our user-friendly interface,
                    designed for seamless browsing and quick access to what
                    matters most.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="text-center">
              <Col>
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
        <section className={styles.compete}>
          <Container>
            <Row>
              <Col md={6} className="align-content-center">
                <h2 className="mb-4">Stay Ahead of Your Competitors</h2>
                <p className="mb-5">
                  Take charge of your online presence and start generating more
                  leads and conversions now. Click the button below to schedule
                  a free consultation with our landing page experts. {"Let's"}
                  collaborate to help your business thrive.
                </p>
                <Link
                  href="#"
                  title="Tell Us About Your Project"
                  className={styles.ctaBtn}
                >
                  Tell Us About Your Project
                </Link>
              </Col>
              <Col md={6}>
                <Image
                  src="/assets/compete.png"
                  alt="Competitors"
                  title="Competitors"
                  width={243}
                  height={195}
                />
              </Col>
            </Row>
          </Container>
        </section>
        <section className={styles.whyUs}>
          <Container>
            <Row className="mb-4">
              <Col>
                <h2>
                  <span>Why Nextupgrad</span>
                  <br />
                  Why choose NextUpgrad as your landing page designer?
                </h2>
                <p>
                  Partnering with NextUpgrad and our award-winning team of
                  in-house landing page designers provides your company with a
                  competitive edge. Our turn-key landing page design services
                  help you create, launch, and optimize landing pages
                  effectively, resulting in more leads, sales, and revenue for
                  your business.
                </p>
              </Col>
            </Row>
            <Row className="align-items-center mb-5">
              <Col md={4}>
                <div className={styles.whyDark}>
                  <h3 className="text-center">Custom Design</h3>
                  <p>
                    We specialize in creating custom landing page designs
                    customized to your industry, business, and audience. Unlike
                    generic templates, our personalized approach drives sales,
                    generates leads, and boosts revenue.
                  </p>
                </div>
              </Col>
              <Col md={4}>
                <div className={styles.whyDark}>
                  <h3 className="text-center">Market Research</h3>
                  <p>
                    To create a landing page that effectively generates leads,
                    sales, and revenue, we begin with thorough market research.
                    By understanding your ideal customer, industry, and
                    offerings, we design a visually appealing, user-friendly,
                    and fast-loading landing page.
                  </p>
                </div>
              </Col>
              <Col md={4}>
                <div className={styles.whyDark}>
                  <h3 className="text-center">CRO Testing</h3>
                  <p>
                    To achieve the highest ROI from your landing page,
                    continuous testing is essential. Our landing page design
                    services handle everything from copy to color testing,
                    ensuring your business maximizes sign-ups, phone calls, and
                    sales.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="text-center">
              <Col>
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
        <section className={styles.frames}>
          <Container>
            <Row className="mb-4">
              <Col>
                <h2>
                  <span>Frameworks</span>
                  <br />
                  Our Landing Page Design Proven Frameworks
                </h2>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col md={6}>
                <div className={styles.frameDark}>
                  <h3>Understanding Your Goals</h3>
                  <p>
                    To begin, we thoroughly understand your project
                    requirements, goals, and expectations. This includes
                    identifying your target audience, marketing objectives, and
                    any specific design or branding preferences.
                  </p>
                </div>
              </Col>
              <Col md={6} className="align-content-center">
                <div>
                  <h3>Competitive Research Advantage</h3>
                  <p>
                    Our team performs thorough competitor research to uncover
                    industry trends, best practices, and opportunities for
                    enhancement. This analysis enables us to devise a strategy
                    that distinguishes your landing page designs from the
                    competition.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col md={6} className="align-content-center">
                <div>
                  <h3>Gaining a Competitive Edge</h3>
                  <p>
                    We develop wireframes to outline the structure, layout, and
                    user flow of your landing pages. These wireframes act as
                    blueprints for the design process, ensuring that all
                    elements are strategically placed to optimize user
                    experience and boost conversion rates.
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <div className={styles.frameDark}>
                  <h3>Creating User-Focused Wireframes</h3>
                  <p>
                    We design wireframes to map out the structure, layout, and
                    user flow of your landing pages. These wireframes act as
                    blueprints for the design process, ensuring that every
                    element is strategically positioned to enhance user
                    experience and boost conversion rates.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col md={6}>
                <div className={styles.frameDark}>
                  <h3>Designing for Conversions</h3>
                  <p>
                    Using the wireframes as a guide, our designers create
                    visually appealing mock-ups that embody your brand identity
                    and follow best practices in conversion-centered design. We
                    work closely with you to refine these mock-ups and ensure
                    they meet your expectations.
                  </p>
                </div>
              </Col>
              <Col md={6} className="align-content-center">
                <div>
                  <h3>Efficient Landing Page Builds</h3>
                  <p>
                    After finalizing the designs, our developers create the
                    landing pages on your chosen platform, such as Unbounce,
                    ClickFunnels, WordPress, or HubSpot. We ensure these pages
                    are responsive, fast-loading, and compatible with multiple
                    devices and browsers.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col md={6} className="align-content-center">
                <div>
                  <h3>Pre-Launch Optimization</h3>
                  <p>
                    Before launching your landing pages, our team performs
                    comprehensive quality assurance {"(QA)"} testing. This
                    process identifies and resolves potential issues related to
                    functionality, performance, responsiveness, and
                    cross-browser compatibility.
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <div className={styles.frameDark}>
                  <h3>Landing Page Launch</h3>
                  <p>
                    Once the quality assurance process is complete, we launch
                    your landing pages and seamlessly integrate them with your
                    existing marketing systems, including CRM, email marketing,
                    and analytics tools.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col md={6}>
                <div className={styles.frameDark}>
                  <h3>Performance Tracking</h3>
                  <p>
                    We set up tracking and analytics to monitor your landing
                    {"page's"} performance. This data helps us evaluate the
                    success of our strategies and make informed decisions for
                    future optimizations.
                  </p>
                </div>
              </Col>
              <Col md={6} className="align-content-center">
                <div>
                  <h3>Continuous Conversion Optimization</h3>
                  <p>
                    Based on our tracking data, we continually optimize your
                    landing pages to enhance conversion rates and overall
                    performance. By analyzing user behavior, testing various
                    design elements, and refining our strategies, we ensure your
                    landing pages deliver exceptional results consistently.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="text-center">
              <Col>
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
