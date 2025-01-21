import Head from "next/head";
import Link from "next/link";
import CountUp from "react-countup";
import styles from "@/styles/Enterprise.module.css";
import { Col, Row, Container, Tab, Nav, Accordion } from "react-bootstrap";
import TestForms from "@/components/WebsiteForm";
import { TbTargetArrow } from "react-icons/tb";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { MdOutlineSupportAgent } from "react-icons/md";
import { GiTeamIdea } from "react-icons/gi";
import { AiOutlineFileSearch } from "react-icons/ai";
import Image from "next/image";

const caseStudies = [
  {
    title: "Transforming security solutions with innovative technology",
    stats: [
      { end: 100, suffix: "+", label: "Global Brands Empowered" },
      { end: 1000, suffix: "+", label: "Integrated Security Deployments" },
      { end: 20, suffix: "%", label: "Quicker Incident Responses" },
    ],
    backgroundImage: "url('/assets/case-study-0ne.webp')",
  },
  {
    title: "Optimizing logistics operations with AI and IoT",
    stats: [
      { end: 200, suffix: "+", label: "Warehouses Digitized" },
      { end: 5000, suffix: "+", label: "Deliveries Optimized" },
      { end: 30, suffix: "%", label: "Cost Reduction" },
    ],
    backgroundImage: "url('/assets/case-study-Two.webp')",
  },
  {
    title: "Revolutionizing retail with omnichannel strategies",
    stats: [
      { end: 300, suffix: "+", label: "Stores Transformed" },
      { end: 10000, suffix: "+", label: "Products Sold" },
      { end: 50, suffix: "%", label: "Customer Retention Boost" },
    ],
    backgroundImage: "url('/assets/case-study-three.png')",
  },
];

function LocalSeoServices() {
  return (
    <>
      <Head>
        <title>Local SEO Services - Nextupgrad USA</title>
      </Head>
      <div className={styles.enterprise}>
        <section className={styles.enterpriseBnr}>
          <Container>
            <Row className={`justify-content-between ${styles.bannerRow}`}>
              <Col className="col-md-6 align-content-center">
                <h1>
                  <span>Local SEO Services</span> for New York Businesses
                </h1>
                <p>
                  Dominate local search results and attract more customers with
                  our expert SEO services.
                </p>
                <TestForms />
              </Col>
              <Col className="col-md-4">
                <Image
                  src="https://picsum.photos/350/400"
                  alt="dummy-image"
                  title="dummy"
                  width={350}
                  height={400}
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
                  <span>Methodology</span>
                  <br />
                  Our Methodology
                </h2>
              </Col>
            </Row>
            <Row className={`"mb-5" ${styles.probs}`}>
              {[
                {
                  title: "On-Page Optimization",
                  description:
                    "We optimize every aspect of your website, from content and structure to technical elements, ensuring everything is search-engine friendly.",
                },
                {
                  title: "Keyword Research & Analysis",
                  description:
                    "We identify high-volume search terms and uncover opportunities to improve your rankings, helping you stay ahead of the competition.",
                },
                {
                  title: "Off-Page Optimization",
                  description:
                    "We enhance your website's authority with high-quality backlinks, boosting your site’s credibility and visibility on search engines.",
                },
                {
                  title: "Local Citations & Directories",
                  description:
                    "We make sure your business appears in relevant local directories, like Google My Business, helping you attract more local customers.",
                },
                {
                  title: "Review Management",
                  description:
                    "We actively manage your online reputation by encouraging positive reviews and addressing negative feedback, building trust with customers.",
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
        <section className={styles.services}>
          <Container>
            <Row className="mb-5">
              <Col>
                <h2>
                  <span>Services</span>
                  <br />
                  What do our local SEO services include?
                </h2>
              </Col>
            </Row>
            <Row>
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
                            Local Search Optimization
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="second"
                            className={styles.tabLinkText}
                          >
                            On-page Optimization
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="third"
                            className={styles.tabLinkText}
                          >
                            Citation Building
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="fourth"
                            className={styles.tabLinkText}
                          >
                            Review Management
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="fifth"
                            className={styles.tabLinkText}
                          >
                            Reporting & Analytics
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={8} className={styles.delTabCont}>
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <h3>Local Search Optimization</h3>
                          <Row>
                            <Col className="col-md-6">
                              <h4>1. Google My Business {"(GMB)"}</h4>
                              <p>
                                laim and optimize your Google My Business
                                listing to ensure accurate information about
                                your business, including your address, phone
                                number, website, and hours of operation.
                                Engaging with customers through GMB allows you
                                to respond to reviews, post updates, and share
                                photos and videos, showcasing your business and
                                driving local traffic.
                              </p>
                            </Col>
                            <Col className="col-md-6">
                              <h4>2. Local Directories</h4>
                              <p>
                                List your business on other relevant local
                                directories such as Yelp, TripAdvisor, and
                                Yellow Pages. Ensuring consistency across these
                                directories is crucial for local SEO, as search
                                engines rely on this information to determine
                                your {"business's"} legitimacy and visibility.
                              </p>
                            </Col>
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <h3>On-page Optimization</h3>
                          <Row>
                            <Col className="col-md-6">
                              <h4>1. Content Optimization</h4>
                              <p>
                                We ensure your website content is relevant,
                                engaging, and optimized for target keywords.
                                This includes writing high-quality content,
                                structuring it for readability, and using
                                keyword-rich headings and subheadings.
                              </p>
                            </Col>
                            <Col className="col-md-6">
                              <h4>2. Technical SEO</h4>
                              <p>
                                We optimize your {"website's"} technical aspects,
                                such as site speed, mobile responsiveness, and
                                structured data, to improve its crawlability and
                                user experience.
                              </p>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="col-md-6">
                              <h4>3. Meta Data Optimization</h4>
                              <p>
                                We craft compelling title tags and meta
                                descriptions that accurately describe your
                                {"website's"} content and attract clicks from search
                                engine results pages.
                              </p>
                            </Col>
                            <Col className="col-md-6">
                              <h4>4. Internal Linking</h4>
                              <p>
                                We implement a strategic internal linking
                                strategy to improve website navigation and
                                distribute link juice throughout your site.
                              </p>
                            </Col>
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <h3>Citation Building</h3>
                          <Row>
                            <Col className="col-md-6">
                              <h4>1. Local Directories</h4>
                              <p>
                                We ensure your business is listed on major local
                                directories like Google My Business, Yelp, and
                                TripAdvisor. Accurate and consistent information
                                across these platforms strengthens your online
                                presence and increases visibility in local
                                search results.
                              </p>
                            </Col>
                            <Col className="col-md-6">
                              <h4>2. Online Business Profiles</h4>
                              <p>
                                We create and optimize online business profiles
                                on platforms relevant to your industry, such as
                                {"Angie's"} List, HomeAdvisor, and others. This
                                expands your reach to a wider audience and helps
                                build trust and credibilit.
                              </p>
                            </Col>
                          </Row>
                          <h4>3. Industry-Specific Directories</h4>
                          <p>
                            We leverage industry-specific directories relevant
                            to your business, such as those focused on
                            healthcare, legal services, or restaurants. This
                            ensures you are reaching the most targeted audience
                            and maximizing your visibility within your niche.
                          </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fourth">
                          <h3>Review Management</h3>
                          <Row>
                            <Col className="col-md-6">
                              <h4>1. Encouraging Reviews</h4>
                              <p>
                                We guide you on how to strategically request
                                reviews from your satisfied customers, providing
                                easy-to-use tools and templates for review
                                requests. We encourage your customers to leave
                                reviews across various platforms like Google My
                                Business, Yelp, and TripAdvisor, enhancing your
                                online reputation.
                              </p>
                            </Col>
                            <Col className="col-md-6">
                              <h4>2. Responding to Reviews</h4>
                              <p>
                                We help you respond to reviews promptly and
                                professionally, building customer relationships
                                and showcasing your commitment to service
                                excellence. We craft thoughtful replies that
                                address customer concerns, acknowledge positive
                                feedback, and maintain a consistent brand voice.
                              </p>
                            </Col>
                          </Row>
                          <h4>3. Review Monitoring & Analysis</h4>
                          <p>
                            We track and analyze your online reviews,
                            identifying trends and insights to understand
                            customer sentiment and make data-driven
                            improvements. By monitoring your reviews, we can
                            identify areas for improvement and proactively
                            address any negative feedback to maintain a strong
                            online reputation.
                          </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fifth">
                          <h3>Reporting & Analytics</h3>
                          <Row>
                            <Col className="col-md-6">
                              <h4>1. Regular Reporting</h4>
                              <p>
                                We provide comprehensive reports tracking your
                                {"website's"} performance, including keyword
                                rankings, traffic, and conversion rates. This
                                data helps gauge the effectiveness of your SEO
                                strategy and highlights improvement areas,
                                offering you insights to enhance local
                                visibility and drive growth.
                              </p>
                            </Col>
                            <Col className="col-md-6 align-content-center">
                              <h4>2. Data Analysis</h4>
                              <p>
                                Our team analyzes data to reveal valuable
                                insights and discover optimization
                                opportunities. By providing actionable
                                recommendations tailored to your goals, we
                                ensure that your local SEO campaign stays
                                aligned with your business objectives and
                                delivers consistent, measurable results for
                                maximum impact.
                              </p>
                            </Col>
                          </Row>
                          <h4>3. Performance Tracking</h4>
                          <p>
                            We monitor your local SEO {"campaign’s"} progress,
                            delivering updates and insights into your {"website's"}
                            growth and performance. This enables us to adjust
                            strategies as needed, supporting continuous
                            improvement in search engine rankings and enhancing
                            visibility to drive long-term, sustainable success.
                          </p>
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={styles.results}>
          <Container>
            <Row className="mb-5">
              <Col>
                <h2>
                  <span>Deliverables</span>
                  <br />
                  Our Deliverables
                </h2>
              </Col>
            </Row>
            <Row className={styles.resultRow}>
              <Col className="col-md-4">
                <div className={styles.resultCard}>
                  <h3>Comprehensive SEO Audit</h3>
                  <p>
                    A thorough analysis of your {"website's"} current SEO
                    performance, identifying strengths, weaknesses, and
                    opportunities for improvement.
                  </p>
                </div>
              </Col>
              <Col className="col-md-4 align-content-center">
                <div>
                  <h3>Keyword Research & Strategy</h3>
                  <p>
                    Identification of high-value keywords relevant to your
                    target audience and industry, forming the foundation for
                    your content and optimization efforts.
                  </p>
                </div>
              </Col>
              <Col className="col-md-4">
                <div className={styles.resultCard}>
                  <h3>On-Page Optimization</h3>
                  <p>
                    Optimization of your {"website's"} content, structure, and
                    technical elements to improve its ranking in local search
                    results.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className={styles.resultRow}>
              <Col className="col-md-4 align-content-center">
                <div>
                  <h3>Off-Page Optimization</h3>
                  <p>
                    Building high-quality backlinks from reputable websites to
                    enhance your {"website's"} authority and credibility.
                  </p>
                </div>
              </Col>
              <Col className="col-md-4">
                <div className={styles.resultCard}>
                  <h3>Local Citations & Directory Listings</h3>
                  <p>
                    Ensuring your business is listed accurately and consistently
                    across major local directories, enhancing your visibility
                    and driving local traffic.
                  </p>
                </div>
              </Col>
              <Col className="col-md-4 align-content-center">
                <div>
                  <h3>Review Management & Monitoring</h3>
                  <p>
                    Active management of online reviews, encouraging positive
                    feedback and addressing negative reviews professionally to
                    build trust and credibility.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col className="col-md-4">
                <div className={styles.resultCard}>
                  <h3>Review Management & Monitoring</h3>
                  <p>
                    Active management of online reviews, encouraging positive
                    feedback and addressing negative reviews professionally to
                    build trust and credibility.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={styles.whyChoose}>
          <Container>
            <Row className="mb-5">
              <Col>
                <h2>
                  <span>Why</span>
                  <br />
                  Why Nextupgrad
                </h2>
              </Col>
            </Row>
            <Row>
              <Col className="col-md-3">
                <div className={styles.whyCard}>
                  <TbTargetArrow />
                  <h3>Results-Driven Approach</h3>
                  <p>
                    We prioritize measurable results and use data-driven
                    strategies to deliver tangible improvements in your local
                    search rankings and business growth.
                  </p>
                </div>
              </Col>
              <Col className="col-md-3">
                <div className={styles.whyCard}>
                  <MdOutlineSupportAgent />
                  <h3>Dedicated Team & Support</h3>
                  <p>
                    Our team of experienced SEO professionals is committed to
                    delivering exceptional service and providing ongoing support
                    throughout your campaign.
                  </p>
                </div>
              </Col>
              <Col className="col-md-3">
                <div className={styles.whyCard}>
                  <GiTeamIdea />
                  <h3>NYC Expertise & Experience</h3>
                  <p>
                    We have a deep understanding of the New York City market,
                    its unique search landscape, and the specific needs of local
                    businesses.
                  </p>
                </div>
              </Col>
              <Col className="col-md-3">
                <div className={styles.whyCard}>
                  <AiOutlineFileSearch />
                  <h3>Transparent Communication</h3>
                  <p>
                    We believe in open and transparent communication, keeping
                    you informed about the progress of your campaign and
                    addressing any questions you may have.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={styles.caseStudy}>
          <Container>
            <Row className="mb-5">
              <Col>
                <h2>
                  <span>Cases</span>
                  <br />
                  Case Studies
                </h2>
                <p>
                  Check out our SEO services, which have helped businesses
                  across industries achieve exceptional results.
                  <br />
                  {"Here’s"} a glimpse of what {"we’ve"} done for our clients:
                </p>
              </Col>
            </Row>
            <Row className="mb-5">
              {caseStudies.map((caseStudy, index) => (
                <Col key={index} className="col-md-4">
                  <div
                    className={styles.caseCard}
                    style={{ backgroundImage: caseStudy.backgroundImage }}
                  >
                    <div className={styles.caseHead}>
                      <h3>{caseStudy.title}</h3>
                    </div>
                    <div className={styles.caseStat}>
                      {caseStudy.stats.map((stat, i) => (
                        <p key={i}>
                          <span>
                            <CountUp
                              end={stat.end}
                              duration={5}
                              suffix={stat.suffix}
                            />
                          </span>
                          <br />
                          {stat.label}
                        </p>
                      ))}
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
            <Row className="text-center">
              <Col>
                <Link
                  href="#"
                  title="Schedule a Call Now"
                  className={styles.ctaBtn}
                >
                  Schedule a Call Now
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
                  Frequently Asked Questions
                </h2>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col className="col-md-11">
                <Accordion defaultActiveKey="0" flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className={styles.accordHead}>
                      Q1 - What is the cost of corporate enterprise SEO
                      services?
                    </Accordion.Header>
                    <Accordion.Body>
                      <strong>Answer - </strong>The cost of enterprise SEO
                      services is higher than for other segments. The exact
                      price is calculated individually after analyzing the
                      competition and the website.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header className={styles.accordHead}>
                      Q2 - When to expect the results of the enterprise SEO
                      services?
                    </Accordion.Header>
                    <Accordion.Body>
                      <strong>Answer - </strong>Competition in promotion for
                      enterprise companies is tight compared to other segments.
                      So the first noticeable results are possible after 4-9
                      months of activities.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header className={styles.accordHead}>
                      Q3 - What mistakes do customers make when using corporate
                      SEO services?
                    </Accordion.Header>
                    <Accordion.Body>
                      <strong>Answer - </strong>The main mistakes of clients
                      when promoting the setting of unrealistic goals, the wrong
                      choice of a company for promotion, and the wrong choice of
                      KPI.
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

export default LocalSeoServices;
