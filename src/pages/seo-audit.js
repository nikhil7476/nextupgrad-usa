import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import CountUp from "react-countup";
import styles from "@/styles/Enterprise.module.css";
import { Col, Row, Container, Tab, Nav, Accordion } from "react-bootstrap";
import TestForms from "@/components/WebsiteForm";
import { TbTargetArrow } from "react-icons/tb";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { MdOutlineSupportAgent } from "react-icons/md";
import { GiTeamIdea } from "react-icons/gi";
import { AiOutlineFileSearch } from "react-icons/ai";

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

function SeoAudit() {
  return (
    <>
      <Head>
        <title>
          Comprehensive Website SEO Audit Services for Better Rankings
        </title>
        <meta
          name="title"
          content="Comprehensive Website SEO Audit Services for Better Rankings"
        />
        <meta
          name="description"
          content="Identify SEO issues and improve rankings with our detailed website SEO audit services. Get insights, strategies, and a plan for better search visibility."
        />
      </Head>
      <div className={styles.enterprise}>
        <section className={styles.enterpriseBnr}>
          <Container>
            <Row className={`justify-content-between ${styles.bannerRow}`}>
              <Col className="col-md-6 align-content-center">
                <h1>
                  Website <span>SEO Audit Services</span>: Pinpoint Issues,
                  Propel Results
                </h1>
                <p>
                  Is your website struggling to capture and convert search
                  traffic? Discover the obstacles holding you back and get a
                  customized action plan with {"NextUpgrad's"} top SEO audit
                  services in New Jersey.
                </p>
                <p>
                  Learn more about our comprehensive website SEO audit services
                  or request a custom proposal today!
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
                  <span>Problem</span>
                  <br />
                  Problems we solve with website audit service
                </h2>
                <p>
                  More than 90% of companies struggle with website development.
                  The primary reasons for this are ineffective SEO strategies
                  and a poor understanding of search algorithms. Clients can
                  overcome these challenges by choosing our best SEO audit
                  services in New Jersey and improving their online promotion
                  efforts.
                </p>
              </Col>
            </Row>
            <Row className={`"mb-5" ${styles.probs}`}>
              {[
                {
                  title: "Frequent Drops",
                  description:
                    "The decline in search result rankings negatively impacts both web traffic and brand visibility. Conducting an SEO audit helps identify errors that occurred during the website's optimization for specific search engines.",
                },
                {
                  title: "Lack of Traffic",
                  description:
                    "The website is unpopular among users, resulting in the company failing to attract new customers and losing revenue. An audit can help identify the reasons for the lack of visitors, whether it is due to poor search engine rankings or significant internal issues.",
                },
                {
                  title: "Low Conversion",
                  description:
                    "The resource attracts users, but they do not take targeted actions. By using web analytics tools, you can track visitor activity on your site in real time. This helps identify which pages users are most likely to leave and at what stages in the purchase process customers abandon their journey.",
                },
                {
                  title: "Lack of Recognition",
                  description:
                    "The brand lacks online recognition, resulting in a stagnant audience and limited business growth. By analyzing external links and mentions, you can effectively develop a promotion strategy leveraging third-party platforms, including media outlets and social networks.",
                },
                {
                  title: "Low-Quality Leads",
                  description:
                    "Leads continue to flow in but do not align with the business's objectives. Analyzing SEO helps identify the primary traffic sources, allowing us to assess their relevance and value to the company.",
                },
                {
                  title: "Low Profitability",
                  description:
                    "Promotional investments frequently fall short of expectations. Conducting a thorough SEO audit offers valuable insights into the viability of your SEO strategies. This information enables you to make well-informed decisions and plan your budget effectively.",
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
                  What Do Our SEO Audit Services Include?
                </h2>
                <p>
                  NextUpgrad SEO audit services in New Jersey provide the
                  complete solution to improve the traffic, leads, and revenue
                  for your business website. From our standard reports to
                  customized plans of action, we share with you a thorough plan
                  of action to target your {"website's"} strengths, weaknesses,
                  and opportunities. Our service identifies the SEO problems
                  that are holding back your rankings and then provides an
                  actionable audit report.
                </p>
                <p>
                  Alternatively, we can implement these recommendations for you.
                  Learn more about {"what’s"} included in your SEO audit plan
                  below.
                </p>
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
                            On-Page SEO Audit
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="second"
                            className={styles.tabLinkText}
                          >
                            Off-Page SEO Audit
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="third"
                            className={styles.tabLinkText}
                          >
                            Technical SEO Audit
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="fourth"
                            className={styles.tabLinkText}
                          >
                            SEO Report
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="fifth"
                            className={styles.tabLinkText}
                          >
                            SEO Strategy
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="sixth"
                            className={styles.tabLinkText}
                          >
                            Audit Implementation
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={8} className={styles.delTabCont}>
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <h3>On-Page SEO Audit</h3>
                          <p>
                            Your search engine optimization {"(SEO)"} audit
                            begins with on-page SEO, where we check for the
                            following issues:
                          </p>
                          <ol>
                            <li>Missing title tags & Meta descriptions</li>
                            <li>Duplicate Content</li>
                            <li>Thin Content</li>
                            <li>Keyword Stuffing And more</li>
                          </ol>
                          <p>
                            NextUpgrad will not only identify these issues but
                            also offer recommendations on how to resolve them.
                          </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <h3>Off-Page SEO Audit</h3>
                          <p>
                            Check Out Your {"Site's"} Reputation: Our
                            Foundational SEO Audit
                          </p>
                          <p>
                            Get to know the reputation of your website with our
                            complete SEO audit. In this audit, everything will
                            be analyzed in a detailed off-page way, and you can
                            compare your off-page SEO with your top competitors
                            so that you will get some useful suggestions and
                            recommendations.
                          </p>
                          <p>We assess in the following domains:</p>
                          <Row>
                            <Col md={6}>
                              <ol style={{ listStylePosition: "inside" }}>
                                <li>Backlink Quality</li>
                                <li>Backlink Anchor Text</li>
                                <li>Backlink Placement</li>
                              </ol>
                            </Col>
                            <Col md={6}>
                              <ol
                                start={4}
                                style={{ listStylePosition: "inside" }}
                              >
                                <li>Backlink Relevance</li>
                                <li>Backlink Quantity</li>
                              </ol>
                            </Col>
                          </Row>
                          <p>
                            Our recommendations are not just advice to you to
                            acquire more links. Read on for a thorough
                            approach to doing so your business attracts
                            high-quality, relevant links from reputable sites
                            within your industry. Best of all, our team of
                            off-page SEO specialists is ready to implement this
                            strategy for you.
                          </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <h3>Technical SEO Audit</h3>
                          <p>
                            Is your website invisible in search results due to
                            crawling and indexing errors? Our dedicated SEO
                            audit expert can help! As part of your SEO audit,
                            they will examine essential files and technical
                            elements, including:
                          </p>
                          <Row>
                            <Col md={6}>
                              <ol style={{ listStylePosition: "inside" }}>
                                <li>.htaccess file</li>
                                <li>Robots.txt</li>
                                <li>Sitemap</li>
                              </ol>
                            </Col>
                            <Col md={6}>
                              <ol
                                start={4}
                                style={{ listStylePosition: "inside" }}
                              >
                                <li>HTTP headers</li>
                                <li>404 error pages</li>
                                <li>Page Speed</li>
                              </ol>
                            </Col>
                          </Row>
                          <p>
                            Our technical SEO audit services also address these
                            issues. With our in-house development team, you can
                            swiftly resolve problems and begin seeing results,
                            such as having your site indexed in Google or Bing
                            search results.
                          </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fourth">
                          <h3>SEO Report</h3>
                          <p>
                            After conducting our comprehensive analysis and
                            audit, your dedicated account manager will offer
                            clear, prioritized recommendations to resolve SEO
                            issues on your site. You can choose to address these
                            issues internally or with the support of your
                            NextUpgrad team.
                          </p>
                          <p>Our recommendations could include:</p>
                          <Row>
                            <Col md={6}>
                              <ol style={{ listStylePosition: "inside" }}>
                                <li>Mobile Responsiveness</li>
                                <li>HTTPS (SSL Security)</li>
                                <li>Page Speed</li>
                                <li>Schema Markup</li>
                                <li>Site Architecture</li>
                                <li>AMP (Accelerated Mobile Pages)</li>
                                <li>Redirects</li>
                              </ol>
                            </Col>
                            <Col md={6}>
                              <ol
                                start={8}
                                style={{ listStylePosition: "inside" }}
                              >
                                <li>Custom 404 Errors</li>
                                <li>Canonicalization</li>
                                <li>Image and Hyperlink Optimization</li>
                                <li>Core Web Vitals</li>
                                <li>Multilingual SEO</li>
                                <li>Preferred Domain Versions</li>
                              </ol>
                            </Col>
                          </Row>
                          <p>
                            These are just some of the key factors that
                            NextUpgrad will tackle as part of your SEO audit
                            package. Each element plays a crucial role in
                            attracting search engine crawlers and, consequently,
                            bringing more customers to your site.
                          </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fifth">
                          <h3>SEO Strategy</h3>
                          <p>
                            Search engine optimization {"(SEO)"} is not a
                            one-time task; {"it’s"} an ongoing strategy that has
                            helped businesses expand, enter new markets, and
                            boost local economies. {"NextUpgrad's"} SEO audit
                            services provide a recommended SEO strategy, guiding
                            you on the next steps after addressing your SEO
                            issues.
                          </p>
                          <p>Our strategy considers:</p>
                          <Row>
                            <Col md={6}>
                              <ol style={{ listStylePosition: "inside" }}>
                                <li>Your business</li>
                                <li>Your business goals</li>
                                <li>Your current SEO strategy</li>
                              </ol>
                            </Col>
                            <Col md={6}>
                              <ol
                                start={4}
                                style={{ listStylePosition: "inside" }}
                              >
                                <li>Your target audience</li>
                                <li>Your {"competitor's "}analysis</li>
                              </ol>
                            </Col>
                          </Row>
                          <p>
                            The outcome? An actionable plan customized to your
                            business and future aspirations.
                          </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="sixth">
                          <h3>Audit Implementation</h3>
                          <p>Select the Best Choice for You</p>
                          <p>
                            You need to fix it yourself or have your
                            NextUpgrad team fix it for you.
                          </p>
                          <h4>Maximize Your NextUpgrad Team</h4>
                          <p>
                            Use a full-service team that includes SEO experts,
                            web developers, professional copywriters, etc., like
                            NextUpgrad. Implementing our SEO recommendations can
                            lead to getting indexed, higher ranks, as well as
                            higher traffic and revenue.
                          </p>
                          <h4>Fix Issues In-House</h4>
                          <p>
                            Prefer to handle SEO issues internally? NextUpgrad
                            can still assist you! Our SEO audit services come
                            with support and training from our team. Whether you
                            need guidance for your developers or explanations
                            for fixes, {"we’re"} here to help.
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
                  <span>Results</span>
                  <br />
                  What Results Do We Provide?
                </h2>
                <p>
                  When performing an SEO audit, we focus on the specific goals
                  of your business. This enables us to evaluate your{" "}
                  {"company's"}
                  potential and offer personalized recommendations.
                </p>
              </Col>
            </Row>
            <Row className={styles.resultRow}>
              <Col className="col-md-4">
                <div className={styles.resultCard}>
                  <h3>
                    Error
                    <br />
                    Reporting
                  </h3>
                  <p>
                    A comprehensive report highlighting the issues we discovered
                    during our SEO audit, pinpointing the {"project's"}{" "}
                    weaknesses and areas of risk.
                  </p>
                </div>
              </Col>
              <Col className="col-md-4 align-content-center">
                <div>
                  <h3>Recommendations for Improving Content</h3>
                  <p>
                    Here are valuable suggestions from our IT experts to
                    optimize your page content strategically. Follow our
                    actionable tips and proven techniques to increase engagement
                    and convert visitors into loyal customers.
                  </p>
                </div>
              </Col>
              <Col className="col-md-4">
                <div className={styles.resultCard}>
                  <h3>Instructions for Error Corrections</h3>
                  <p>
                    A series of actions to address the issues outlined in the
                    report, aligned with the {"company's"} primary goals and
                    needs.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col className="col-md-4 align-content-center">
                <div>
                  <h3>Analytical Report on Competitors</h3>
                  <p>
                    A map outlining current and potential competitors in the
                    commercial niche, along with an analysis of their SEO
                    strategies and the current state of their online presence.
                  </p>
                </div>
              </Col>
              <Col className="col-md-4">
                <div className={styles.resultCard}>
                  <h3>
                    Plan for Implementing the Best Practices in the Market
                  </h3>
                  <p>
                    Leverage competitor insights strategically by analyzing
                    their tactics, identifying gaps, and innovating your
                    approach. Adopt best practices while maintaining your unique
                    value, driving growth, and securing a leadership position in
                    your niche.
                  </p>
                </div>
              </Col>
              <Col className="col-md-4 align-content-center">
                <div>
                  <h3>Correction of the Link-Building Strategy</h3>
                  <p>
                    Update the strategy for acquiring high-quality backlinks,
                    focusing on the {"company's"} top marketing channels.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={styles.results}>
          <Container>
            <Row className="mb-5">
              <Col>
                <h2>
                  <span>Process</span>
                  <br />
                  Stages of Our SEO Audit Service
                </h2>
                <p>
                  Our SEO audit service involves a thorough examination of your
                  business. We employ a multi-stage approach to assess your
                  website and all of its components.
                </p>
              </Col>
            </Row>
            <Row className={styles.resultRow}>
              <Col className="col-md-6 align-content-center">
                <div>
                  <h3>Competitor Analysis</h3>
                  <p>
                    We analyze the resources of top-ranking competitors in
                    search results. This includes examining their strengths and
                    weaknesses, technical status, content types, and keyword
                    strategies, backlink profiles, and promotion tactics. Based
                    on this analysis, we provide recommendations to surpass
                    competitors efficiently, using optimal resources.
                  </p>
                </div>
              </Col>
              <Col className="col-md-6">
                <div className={styles.resultCard}>
                  <h3>Link Profile Audit</h3>
                  <p>
                    We evaluate the link profile of your resource and your
                    competitors to identify weaknesses and growth opportunities.
                    Then, we create a customized link-building strategy.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col className="col-md-6">
                <div className={styles.resultCard}>
                  <h3>On-Page SEO Audit</h3>
                  <p>
                    We thoroughly examine the {"client's"} business, understand
                    the values of their target audience, and analyze
                    competitors. Based on this, we create detailed technical
                    requirements that include essential optimization details and
                    valuable recommendations for developing relevant and
                    engaging content.
                  </p>
                </div>
              </Col>
              <Col className="col-md-6 align-content-center">
                <div>
                  <h3>Content Audit</h3>
                  <p>
                    We assess the quality of page titles and descriptions as
                    they appear in search results, along with keywords in tags
                    and inline titles. We also analyze the {"content's"} value
                    to the target audience and its compliance with search
                    algorithms.
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
                      Q1 - What is an SEO auditing service?
                    </Accordion.Header>
                    <Accordion.Body>
                      <strong>Answer - </strong>An SEO audit examines your
                      website for internal issues related to content, structure,
                      links, page addresses, loading speed, and more, ensuring
                      compliance with search engine guidelines. After the audit,
                      you will receive a detailed list of identified errors. By
                      addressing these issues, you can improve your search
                      result rankings, attract more visitors, and ultimately
                      increase sales.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header className={styles.accordHead}>
                      Q2 - What is the price of an SEO audit service?
                    </Accordion.Header>
                    <Accordion.Body>
                      <strong>Answer - </strong>You can order an SEO audit for
                      your website at various price points, depending on your
                      business needs and desired outcomes. After an initial
                      consultation, we provide a personalized cost estimate
                      based on the agreed scope of work and the urgency of the
                      project.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header className={styles.accordHead}>
                      Q3 - How long does a comprehensive SEO audit service take?
                    </Accordion.Header>
                    <Accordion.Body>
                      <strong>Answer - </strong>Our comprehensive SEO audit
                      service typically takes 1-2 weeks to complete. However,
                      the duration may vary based on the specifics of your
                      website, such as its business domain, subject matter,
                      scale, data volume, and the number of promotion channels.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header className={styles.accordHead}>
                      Q4 - Why invest in an SEO audit package?
                    </Accordion.Header>
                    <Accordion.Body>
                      <strong>Answer - </strong>Investing in an SEO audit
                      package benefits your business by:
                      <ol>
                        <li>Diagnosing lost or stagnant rankings</li>
                        <li>Identifying issues affecting SEO performance</li>
                        <li>Providing solutions to increase traffic</li>
                        <li>
                          <strong>
                            Our mission as your SEO services provider is
                            straightforward:{" "}
                          </strong>
                          Turn SEO into a revenue driver for your company. Our
                          comprehensive SEO audit examines every aspect, from
                          title tags to page speed.
                        </li>
                      </ol>
                      Get insights into your {"site's"} SEO needs and reach your
                      traffic and revenue goals. Contact our experienced team of
                      strategists today!
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

export default SeoAudit;
