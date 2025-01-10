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

function PpcManagement() {
  return (
    <>
      <Head>
        <title>PPC Management Services - Nextupgrad USA</title>
      </Head>
      <div className={styles.enterprise}>
        <section className={styles.enterpriseBnr}>
          <Container>
            <Row className={`justify-content-between ${styles.bannerRow}`}>
              <Col className="col-md-6 align-content-center">
                <h1>
                  PPC Management Services: Drive Revenue Growth with{" "}
                  <span>Strategic PPC Campaigns</span>
                </h1>
                <p>
                  Convert clicks into revenue with our PPC management services.
                  By integrating your sales data with your campaigns, {"we’ve"}
                  helped businesses achieve an average 25% increase in ROI.
                  Utilize our expertise and award-winning technology for similar
                  results. Request your free strategy proposal today!
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
                  title: "Inefficient Budget Spending",
                  title_desc:
                    "Small businesses often waste money on underperforming ads.",
                  description:
                    "Our PPC management service identifies underperforming areas in your campaigns, reallocating your budget to high-performing strategies. With continuous monitoring and optimization, we ensure every dollar is spent effectively, maximizing your ROI and reducing unnecessary costs.",
                },
                {
                  title: "Low Click-Through Rates (CTR)",
                  title_desc:
                    "Ads may not grab user attention or entice clicks.",
                  description:
                    "We create attention-grabbing headlines, engaging visuals, and compelling ad copy customized to your audience. Our strategies are designed to improve CTR by testing various ad formats and placements, ensuring your ads connect with potential clients and encourage more clicks.",
                },
                {
                  title: "Target Audience Mismatch",
                  title_desc: "Ads fail to reach the right demographic.",
                  description:
                    "Using advanced audience targeting tools, we identify and engage your ideal clients. By analyzing user behavior, location, and preferences, we ensure your ads appear in front of those most likely to engage, increasing the effectiveness of your campaigns.",
                },
                {
                  title: "Poor Conversion Rates",
                  title_desc: "Traffic doesn’t translate to leads or sales.",
                  description:
                    "We enhance your landing pages, streamline the user experience, and employ conversion-focused strategies. By testing calls-to-action and simplifying customer journeys, we transform ad clicks into meaningful actions, like purchases or inquiries, boosting your overall conversions.",
                },
                {
                  title: "Inadequate Performance Tracking",
                  title_desc: "Unclear ROI from ad campaigns.",
                  description:
                    "Our detailed analytics and performance reports give you clear insights into every campaign’s success. We use tracking tools to measure impressions, clicks, and conversions, offering actionable recommendations to refine your approach and maximize returns.",
                },
                {
                  title: "Overwhelming Management Workload",
                  title_desc: "Managing PPC ads can consume valuable time.",
                  description:
                    "We take over the complexities of managing your PPC campaigns, from strategy creation to daily optimizations. With our dedicated team, you’ll save time while ensuring your campaigns perform at their best, letting you focus on growing your business.",
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
                      {problem.title_desc}
                    </p>
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
                          <h3>Voice Search Optimization</h3>
                          <p>
                            By 2025, half of American consumers will use voice
                            search every day.
                          </p>
                          <p>
                            With the growing popularity of voice search for
                            finding local services, {"it’s"} essential to
                            optimize your ad content for this technology.
                          </p>
                          <p>
                            At NextUpgrad, our Local Services ad management
                            plans include voice search optimization. This
                            enables you to reach more qualified leads and
                            ensures you {"don’t"} miss out on potential revenue.
                          </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <h3>Budget Management</h3>
                          <p>
                            By partnering with our paid ad specialists,{" "}
                            {"you'll"}
                            make the most of your ad spend while reaching your
                            business objectives.
                          </p>
                          <p>
                            We strive to keep the ad process hassle-free,
                            allowing us to handle the complexities so you
                            achieve maximum ROI. As your Google Ads management
                            partner, NextUpgrad ensures you {"won't"} have to
                            worry about exceeding your campaign budget.
                          </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <h3>Geographic Targeting</h3>
                          <p>
                            Our ad management solutions include sophisticated
                            geographic targeting designed to reach your ideal
                            customers.
                          </p>
                          <p>
                            Seamlessly connect with leads in lucrative areas
                            close to your business. This targeting feature
                            enables you to optimize your ad budget and engage
                            with the most valuable customers in your vicinity.
                          </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fourth">
                          <h3>Dedicated Local Marketing Expert</h3>
                          <p>
                            NextUpgrad has been delivering exceptional results
                            for clients for more than a decade.
                          </p>
                          <p>
                            By choosing to work with us, {"you'll"} collaborate
                            with a dedicated local marketing expert committed to
                            making your ad campaigns successful. With our
                            extensive industry knowledge, {"we'll"} help you
                            generate relevant leads, boost conversions, and
                            increase revenue for your business.
                          </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fifth">
                          <h3>Custom Reporting</h3>
                          <p>
                            We provide custom ad reporting, giving you clear
                            insights into your spending.
                          </p>
                          <p>
                            Moreover, we help you identify and implement
                            necessary adjustments to boost your ad{" "}
                            {"campaigns'"}
                            effectiveness. Our basic plans come with monthly
                            reports, and you can choose to upgrade to our
                            aggressive or market leader plans for automatic
                            monthly cloud updates.
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
                  What Results We Provide
                </h2>
              </Col>
            </Row>
            <Row className={styles.resultRow}>
              <Col className="col-md-6">
                <div className={styles.resultCard}>
                  <h3>Increased Leads & Bookings</h3>
                  <p>
                    Google Local Services Ads {"(LSAs)"} help your business
                    reach local customers who are actively seeking your
                    services. With our expert management, {"you’ll"} see a
                    significant rise in qualified leads and direct bookings,
                    leading to increased revenue growth.
                  </p>
                </div>
              </Col>
              <Col className="col-md-6 align-content-center">
                <div>
                  <h3>Enhanced Brand Visibility</h3>
                  <p>
                    Local service ads {"(LSA)"} highlight your business details,
                    such as service areas, customer reviews, and the Google
                    Guarantee {"(when applicable)"}. This helps boost your{" "}
                    {"brand's"} visibility, fosters trust with potential
                    customers, and positions your business as a leading option
                    in your local market.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col className="col-md-6 align-content-center">
                <div>
                  <h3>Improved ROI</h3>
                  <p>
                    We use data-driven strategies to optimize your LSA campaigns
                    for maximum ROI. By tracking key metrics and adjusting bids
                    and budgets in real time, we ensure you only pay for
                    qualified leads that convert into paying customers.
                  </p>
                </div>
              </Col>
              <Col className="col-md-6">
                <div className={styles.resultCard}>
                  <h3>Peace of Mind</h3>
                  <p>
                    Let our skilled team take care of the complexities of LSA
                    management. We manage campaign setup, continuous
                    optimization, and performance reporting, allowing you to
                    concentrate on running your business.
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
                  Stages of Our Google Local Services
                </h2>
              </Col>
            </Row>
            <Row className={styles.resultRow}>
              <Col className="col-md-4 align-content-center">
                <div>
                  <h3>Campaign Setup & Optimization</h3>
                  <p>
                    This initial stage focuses on building a strong foundation
                    for your LSA campaign. It involves:
                  </p>
                  <ol>
                    <li>
                      <strong>Keyword Research & Targeting:</strong> Identifying
                      relevant keywords and location-based targeting options to
                      reach the right audience.
                    </li>
                    <li>
                      <strong>Ad Copy & Visuals:</strong> Crafting compelling ad
                      copy and selecting high-quality images or videos that
                      showcase your business and services.
                    </li>
                    <li>
                      <strong>Budget Allocation & Bidding Strategies:</strong>{" "}
                      Determining your daily budget and setting appropriate bids
                      to maximize your return on investment.
                    </li>
                    <li>
                      <strong>Performance Tracking & Analysis:</strong>{" "}
                      Implementing conversion tracking and analyzing key metrics
                      like call volume, leads, and customer reviews to identify
                      areas for improvement.
                    </li>
                  </ol>
                </div>
              </Col>
              <Col className="col-md-4">
                <div className={styles.resultCard}>
                  <h3>Lead Qualification & Management</h3>
                  <p>
                    Once leads start coming in, effective management includes:
                  </p>
                  <ol>
                    <li>
                      <strong>Lead Routing System:</strong> Set up a system to
                      route leads to the appropriate team members or
                      departments.
                    </li>
                    <li>
                      <strong>Qualify Leads:</strong> Quickly assess and
                      prioritize leads most likely to convert into paying
                      customers.
                    </li>
                    <li>
                      <strong>Respond Promptly:</strong> Acknowledge and respond
                      to all leads swiftly to build trust and maintain interest.
                    </li>
                    <li>
                      <strong>Track Lead Sources & Conversion Rates:</strong>{" "}
                      Monitor the effectiveness of various lead sources and
                      track conversions throughout the customer journey.
                    </li>
                  </ol>
                </div>
              </Col>
              <Col className="col-md-4 align-content-center">
                <div>
                  <h3>Customer Service & Review Management</h3>
                  <ol>
                    <li>
                      <strong>Delivering Exceptional Service:</strong> Going
                      above and beyond to meet customer expectations and exceed
                      their satisfaction.
                    </li>
                    <li>
                      <strong>Encouraging Customer Reviews:</strong> promptly
                      requesting and actively encouraging customer reviews on
                      Google and other relevant platforms.
                    </li>
                    <li>
                      <strong>Monitoring and Responding to Reviews:</strong>{" "}
                      Regularly monitoring online reviews and responding
                      promptly and professionally to both positive and negative
                      feedback.
                    </li>
                    <li>
                      <strong>
                        Building Long-Term Customer Relationships:
                      </strong>{" "}
                      cultivating strong relationships with your customers to
                      foster loyalty and repeat business.
                    </li>
                  </ol>
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
                      Q1 - How does voice search optimization benefit my
                      business?
                    </Accordion.Header>
                    <Accordion.Body>
                      <strong>Answer - </strong>Voice search optimization can
                      significantly increase your business by making it easier
                      for potential customers to find you. As more people use
                      voice-enabled devices, optimizing for voice search ensures
                      your content is personalized to natural, conversational
                      queries. This improves your visibility in search results,
                      increasing traffic to your website. By focusing on local
                      search terms and providing concise, clear answers, you can
                      also improve your chances of appearing in featured
                      snippets, which often drive higher engagement. Ultimately,
                      voice search optimization enhances the user experience,
                      providing faster, more accurate responses, and helps your
                      business stay competitive in a digital-first world.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header className={styles.accordHead}>
                      Q2 - What is the process for setting up a Google Local
                      Services ad?
                    </Accordion.Header>
                    <Accordion.Body>
                      <strong>Answer - </strong>Voice search optimization
                      benefits your business by enhancing visibility and
                      accessibility. It allows you to reach a broader audience,
                      as more users rely on voice commands for local searches,
                      which can significantly increase foot traffic.
                      Additionally, optimizing for voice search improves the
                      user experience by providing quick and convenient access
                      to information, fostering customer satisfaction and
                      loyalty. This approach also helps improve your overall SEO
                      strategy, as voice-friendly content often ranks better in
                      traditional search results. Ultimately, embracing voice
                      search optimization positions your business competitively
                      in a rapidly evolving digital landscape.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header className={styles.accordHead}>
                      Q3 - How do you handle lead disputes in your management
                      plans?
                    </Accordion.Header>
                    <Accordion.Body>
                      <strong>Answer - </strong>Lead disputes are managed
                      through an automated system provided by Google in our
                      management plans. The system uses machine learning to
                      review and credit accounts for poor-quality leads, so the
                      account does not need to be disputed manually. Advertisers
                      will have quicker resolutions and more effective crediting
                      of invalid leads. With credits for{" "}
                      {'"job type not serviced"'}
                      and {'"geo not serviced"'} no longer offered, overall the
                      number of credits is expected to rise. Additionally,
                      advertisers can provide feedback on leads through a Lead
                      Feedback survey to help improve future lead quality.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header className={styles.accordHead}>
                      Q4 - What kind of reporting can I expect from your ad
                      management services?
                    </Accordion.Header>
                    <Accordion.Body>
                      <strong>Answer - </strong>Our ad management services
                      include detailed reporting to help you understand the
                      outcomes of each campaign.
                      <ol>
                        <li>
                          <strong>Performance Metrics:</strong> click-through
                          rates and conversion and ROI insights. Training for
                          all dates until October 2023.
                        </li>
                        <li>
                          <strong>Audience Insights:</strong> demographic and
                          behavioral data about your target audience.{" "}
                        </li>
                        <li>
                          <strong>Custom Reports:</strong> reports focusing on
                          what you want to achieve.
                        </li>
                        <li>
                          <strong>Continuous Insights:</strong> Regular
                          performance recaps and actionable enhancements for
                          optimization.
                        </li>
                      </ol>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header className={styles.accordHead}>
                      Q5 - How do your plans differ in terms of geographic
                      targeting?
                    </Accordion.Header>
                    <Accordion.Body>
                      <strong>Answer - </strong>We have a variety of plans
                      with different levels of geographic targeting for your
                      business needs:
                      <ol>
                        <li>
                          <strong>Basic Plan:</strong> The basic plan
                          targets regional or country-specific audiences so you
                          can reach audiences locally.
                        </li>
                        <li>
                          <strong>Business Plan:</strong> This will allow you to
                          target a larger audience with the help of advanced
                          targeting options, like cities or neighborhoods.
                        </li>
                        <li>
                          <strong>Premium Plan:</strong> Zip Code Targeting &
                          market-based segmentation of the audience to target.
                        </li>
                      </ol>
                      Whether your geographic goals are will allow you to
                      maximize your {"campaign's"}
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

export default PpcManagement;
