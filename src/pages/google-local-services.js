import Head from "next/head";
import Link from "next/link";
import CountUp from "react-countup";
import styles from "@/styles/Enterprise.module.css";
import { Col, Row, Container, Tab, Nav, Accordion } from "react-bootstrap";
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

function GoogleServices() {
  return (
    <>
      <Head>
        <title>Google Local Services Ads Management - Nextupgrad USA</title>
      </Head>
      <div className={styles.enterprise}>
        <section className={styles.enterpriseBnr}>
          <Container>
            <Row className={`justify-content-between ${styles.bannerRow}`}>
              <Col className="col-md-6 align-content-center">
                <h1>
                  <span>Google Local Services</span> Ads Management
                </h1>
                <p>
                  Looking to attract more local customers, increase foot
                  traffic, and boost your {"business's"} conversion rates?
                  Google Local Services ads are an excellent investment, and
                  NextUpgrad simplifies the ad management process for you. Call
                  us at +1 408-400-3232, or continue reading to find out more.
                </p>
                <Link href="#" title="Contact Us" className={styles.ctaBtn}>
                  Send A Proposal Now
                </Link>
              </Col>
              <Col className="col-md-4">
                <img src="https://picsum.photos/350/400" />
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
                  title: "Inconsistent Leads",
                  description:
                    "Inconsistent lead flow can hurt your business, causing spikes in demand followed by frustrating slow periods. With Google Local Services Ads Management, you can attract a steady stream of qualified leads. Whether you're targeting customers for local ads near New York or enhancing your visibility, this approach ensures consistent inquiries and bookings. Predictable lead generation helps optimize staffing and resources, maximizing your revenue potential.",
                },
                {
                  title: "Low Conversion Rates",
                  description:
                    "Grabbing attention is easy; converting it into customers is the real challenge. Traditional marketing struggles, but Google Local Services Ads with expert Google Ads management connect you to qualified leads actively seeking your services. Nextupgrad’s Google Ads management delivers optimized campaigns that drive inquiries and maximize conversions, and make every click count. Say goodbye to wasted efforts and hello to effective lead generation and successful transactions with Nextupgrad.",
                },
                {
                  title: "Limited Visibility",
                  description:
                    "If your business lacks online visibility, you're missing a significant market opportunity. Many potential customers use online searches to find local businesses. Google Local Services ads in Newyork can boost your visibility, ensuring your business appears prominently in relevant search results. This boost translates to greater brand awareness and a larger customer base.",
                },
                {
                  title: "Lack of Data & Insights",
                  description:
                    "Making informed business decisions without data is like driving blindfolded. Google Local Services ads offer valuable insights into customer behavior and campaign performance. These insights enable you to track key metrics, spot areas for improvement, and make data-driven decisions to optimize your campaigns for maximum ROI.",
                },
                {
                  title: "Lost in the Digital Noise",
                  description:
                    "In today’s hyperconnected world, people often rely on online searches to find local businesses. It can be challenging to get noticed, as customers may have trouble finding your services amidst many options. Google Local Services ads help your business stand out, making it easier for local customers to find the services you offer.",
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
                  {"What's"} Included in Our Google Local Services Ad Management
                  Plans?
                </h2>
                <p>
                  {"Here's"} a detailed overview of the features included in our
                  ad management plans:
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
                            Voice Search Optimization
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="second"
                            className={styles.tabLinkText}
                          >
                            Budget Management
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="third"
                            className={styles.tabLinkText}
                          >
                            Geographic Targeting
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="fourth"
                            className={styles.tabLinkText}
                          >
                            Dedicated Local Marketing Expert
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="fifth"
                            className={styles.tabLinkText}
                          >
                            Custom Reporting
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={8} className={styles.delTabCont}>
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <h3>Search Engine Optimization {"(SEO)"} Services</h3>
                          <p>
                            Rank higher in organic search results on Google,
                            Bing, and other search engines with NextUpgrad.
                            Using strategic search engine optimization {"(SEO)"}
                            , we help drive more traffic, increase visibility,
                            and elevate your online presence. Partner with our
                            award-winning digital marketing services in New York
                            to get a custom strategy and start generating
                            revenue today.
                          </p>
                          <p>
                            Some areas of SEO a hired agency may focus on
                            include:
                          </p>
                          <ol>
                            <li>
                              <strong>On-Page SEO:</strong> focuses on
                              optimizing the website internally to rank higher
                              {
                                "(e.g., blog posts, articles, landing pages, schema, etc.)."
                              }
                            </li>
                            <li>
                              <strong>Off-Page SEO:</strong> helps optimize the
                              website externally using outside tactics like
                              link-building.
                            </li>
                            <li>
                              <strong>Technical SEO:</strong> involves
                              optimizations to website and servers to help bots
                              crawl and index your site.
                            </li>
                          </ol>
                          <Link
                            href="#"
                            title="Contact Us"
                            className={styles.ctaBtn}
                          >
                            Explore SEO Services
                          </Link>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <h3>Pay-Per-Click {"(PPC)"} Marketing</h3>
                          <p>
                            Reach and convert high-value consumers and business
                            buyers into clients using Google Ads, Microsoft
                            Advertising, and other effective ad networks.
                            Request a proposal today to see how to transform
                            your company with Nextupgrad Boston PPC Services.
                          </p>
                          <p>Some ad types include:</p>
                          <ol>
                            <li>
                              <strong>Shopping:</strong> a carousel of ads from
                              available online marketplaces
                            </li>
                            <li>
                              <strong>Display:</strong> image-based or
                              video-based ads
                            </li>
                            <li>
                              <strong>Search:</strong> text-based ads
                            </li>
                            <li>
                              <strong>Social:</strong> ads that appear on social
                              media
                            </li>
                          </ol>
                          <Link
                            href="#"
                            title="Contact Us"
                            className={styles.ctaBtn}
                          >
                            Explore PPC Services
                          </Link>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <h3>Social Media Marketing</h3>
                          <p>
                            Explore social media marketing in Dallas as a
                            powerful digital marketing channel to enhance brand
                            awareness, customer loyalty, and client
                            satisfaction. We optimize every aspect of your
                            social strategy, from increasing engagement to
                            achieving targeted reach.
                          </p>
                          <Accordion
                            className="mb-4"
                            defaultActiveKey="0"
                            flush
                          >
                            <Accordion.Item eventKey="0">
                              <Accordion.Header className={styles.accordHead}>
                                Organic Social Media Management
                              </Accordion.Header>
                              <Accordion.Body>
                                Strengthen your brand presence, boost
                                engagement, and connect with your audience
                                through regular posts on Facebook, Twitter{" "}
                                {"(now X)"}, Instagram, LinkedIn, and other
                                platforms.
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                              <Accordion.Header className={styles.accordHead}>
                                Paid Social Advertising
                              </Accordion.Header>
                              <Accordion.Body>
                                Expand your reach, engage and re-engage your
                                audience, and drive revenue with paid ads on
                                Facebook, LinkedIn, YouTube, and more.
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                          <Link
                            href="#"
                            title="Contact Us"
                            className={styles.ctaBtn}
                          >
                            Explore Social Media Services
                          </Link>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fourth">
                          <h3>Content Marketing Services {"(CMS)"}</h3>
                          <p>
                            Some common forms used in content marketing are:
                          </p>
                          <Row className="mb-4">
                            <Col className="col-md-4">
                              <ul>
                                <li>Blog Posts & Articles</li>
                                <li>Case Studies</li>
                                <li>Social Media Posts</li>
                                <li>Press Releases</li>
                              </ul>
                            </Col>
                            <Col className="col-md-4">
                              <ul>
                                <li>White Papers</li>
                                <li>Emails</li>
                                <li>Newsletter</li>
                                <li>Infographics</li>
                              </ul>
                            </Col>
                            <Col className="col-md-4">
                              <ul>
                                <li>Landing Pages</li>
                                <li>Videos</li>
                                <li>Webinars</li>
                                <li>Podcasts</li>
                              </ul>
                            </Col>
                          </Row>
                          <Link
                            href="#"
                            title="Contact Us"
                            className={styles.ctaBtn}
                          >
                            Explore Content Marketing Services
                          </Link>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fifth">
                          <h3>Email Marketing Services</h3>
                          <p>
                            Our expert email marketing team creates targeted and
                            engaging campaigns to boost open rates, click rates,
                            and conversions, ultimately driving revenue for your
                            business to inform them about.
                          </p>
                          <Row className="mb-4">
                            <Col className="col-md-4">
                              <ul>
                                <li>Special Offers</li>
                                <li>New Products</li>
                              </ul>
                            </Col>
                            <Col className="col-md-4">
                              <ul>
                                <li>News updates</li>
                                <li>Ebooks or Other New Content</li>
                              </ul>
                            </Col>
                            <Col className="col-md-4">
                              <ul>
                                <li>Webinars</li>
                                <li>Your Brand</li>
                              </ul>
                            </Col>
                          </Row>
                          <Link
                            href="#"
                            title="Contact Us"
                            className={styles.ctaBtn}
                          >
                            Explore Email Marketing Services
                          </Link>
                        </Tab.Pane>
                        <Tab.Pane eventKey="sixth">
                          <h3>Website Design & Development Services</h3>
                          <p className="mb-4">
                            Prevent your business from losing clients, leads,
                            and revenue to competitors. Invest in a professional
                            website design or redesign that adheres to SEO and
                            conversion rate optimization best practices.
                          </p>
                          <Link
                            href="#"
                            title="Contact Us"
                            className={styles.ctaBtn}
                          >
                            Explore Design & Development Services
                          </Link>
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
                  What Results We Provide
                </h2>
                <p>
                  Our digital marketing company in New York delivers tangible
                  results that contribute to your {"business's"} success. Here
                  are some of the key outcomes you can expect:
                </p>
              </Col>
            </Row>
            <Row className={styles.resultRow}>
              <Col className="col-md-6">
                <div className={styles.resultCard}>
                  <h3>Improved Brand Awareness</h3>
                  <p>
                    We ensure your brand is recognized and remembered by your
                    target audience, boosting overall awareness and visibility.
                  </p>
                </div>
              </Col>
              <Col className="col-md-6 align-content-center">
                <div>
                  <h3>Enhanced Customer Trust & Loyalty</h3>
                  <p>
                    We build trust and loyalty with your clients through
                    effective reputation management and consistent
                    communication.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col className="col-md-6 align-content-center">
                <div>
                  <h3>Increase Reach and Traffic</h3>
                  <p>
                    We utilize various digital channels to broaden your audience
                    and drive more traffic to your website, boosting your
                    campaign performance.
                  </p>
                </div>
              </Col>
              <Col className="col-md-6">
                <div className={styles.resultCard}>
                  <h3>Drive Sales and Grow Your Business</h3>
                  <p>
                    Our comprehensive strategy increases visibility and helps
                    turn potential customers into loyal buyers, leading to
                    higher sales and sustainable growth for your business.
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
                  Stages of Our Digital Marketing Services
                </h2>
                <p>
                  Our digital marketing services utilize a structured process
                  designed to ensure the success of your business initiatives.
                  The stages include:
                </p>
              </Col>
            </Row>
            <Row className={styles.resultRow}>
              <Col className="col-md-6">
                <div className={styles.resultCard}>
                  <h3>Analysing the current situation </h3>
                  <p>
                    We begin by evaluating your online presence to identify its
                    strengths, weaknesses, and opportunities for improvement.
                  </p>
                </div>
              </Col>
              <Col className="col-md-6 align-content-center">
                <div>
                  <h3>Formation of Strategy</h3>
                  <p>
                    Following our thorough analysis, we develop a customized
                    strategy that aligns with your business goals and
                    effectively targets your specific audience.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col className="col-md-6 align-content-center">
                <div>
                  <h3>Implementation of the Campaign</h3>
                  <p>
                    Our team executes the strategy using a range of tools and
                    platforms. These include media outreach, content creation,
                    and social media management.
                  </p>
                </div>
              </Col>
              <Col className="col-md-6">
                <div className={styles.resultCard}>
                  <h3>Monitoring and Reporting</h3>
                  <p>
                    We monitor your {"campaign's"} performance and deliver
                    regular reports to ensure transparency and accountability.
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
              <Col className="col-md-8">
                <Accordion defaultActiveKey="0" flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className={styles.accordHead}>
                      Q1 - Would my business benefit from digital marketing?
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
                      Q2 - How much do digital marketing services cost?
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
                      Q3 - What can Internet marketing services help with?
                    </Accordion.Header>
                    <Accordion.Body>
                      <strong>Answer - </strong>The main mistakes of clients
                      when promoting the setting of unrealistic goals, the wrong
                      choice of a company for promotion, and the wrong choice of
                      KPI.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header className={styles.accordHead}>
                      Q4 - What can a website marketing company do for you?
                    </Accordion.Header>
                    <Accordion.Body>
                      <strong>Answer - </strong>The main mistakes of clients
                      when promoting the setting of unrealistic goals, the wrong
                      choice of a company for promotion, and the wrong choice of
                      KPI.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header className={styles.accordHead}>
                      Q5 - How do I choose a digital marketing agency?
                    </Accordion.Header>
                    <Accordion.Body>
                      <strong>Answer - </strong>The main mistakes of clients
                      when promoting the setting of unrealistic goals, the wrong
                      choice of a company for promotion, and the wrong choice of
                      KPI.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="5">
                    <Accordion.Header className={styles.accordHead}>
                      Q6 - What digital marketing services does your company
                      provide?
                    </Accordion.Header>
                    <Accordion.Body>
                      <strong>Answer - </strong>Nextupgrad offers a
                      comprehensive suite of digital marketing services,
                      including but not limited to SEO, social media management,
                      content marketing, PPC advertising, email marketing, and
                      more. Our goal is to provide end-to-end solutions for your
                      online presence.
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

export default GoogleServices;
