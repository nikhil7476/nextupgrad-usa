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
                  Maximize Your ROI with Expert-Managed PPC Services
                </h2>
                <p>
                  Unlock the full potential of your advertising budget with
                  NextUpgrad PPC services in New Jersey. Our comprehensive
                  pay-per-click management solutions cover every aspect, from
                  strategy creation to execution and ongoing management.
                  Customize our services to meet your specific needs and see how
                  {"we've"} generated over $2 million in revenue for our
                  clients. Let us boost your business success today.
                </p>
                <p>
                  <strong>Summary : </strong>Stop micromanaging your PPC
                  campaigns with minimal results. Our PPC company utilizes
                  expert optimizations and advanced technology to boost your ROI
                  from paid advertising.
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
                            PPC Audit
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="second"
                            className={styles.tabLinkText}
                          >
                            Ad Creatives
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="third"
                            className={styles.tabLinkText}
                          >
                            Bid Management
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="fourth"
                            className={styles.tabLinkText}
                          >
                            Landing Page Creation & Optimization
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="fifth"
                            className={styles.tabLinkText}
                          >
                            Keyword Research
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={8} className={styles.delTabCont}>
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <h3>PPC Audit</h3>
                          <p>
                            A complete PPC audit allows your dedicated account
                            manager to provide data-driven recommendations for
                            your pay-per-click strategy. They will also assess
                            the health of your PPC ad management campaigns by
                            verifying the setup and optimization of your
                            account, campaigns, and ad groups.
                          </p>
                          <p>The audit will cover:</p>
                          <ol>
                            <li>Competitor ads</li>
                            <li>Bid Optimization</li>
                            <li>
                              Advertising assets{" "}
                              {"(images, landing pages, ad copy)"}
                            </li>
                            <li>Tracking and more</li>
                          </ol>
                          <p>
                            Using insights from our PPC management {"company’s"}
                            research, your account manager will create a
                            customized PPC marketing strategy for your business.
                          </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <h3>Ad Creatives</h3>
                          <p>
                            NextUpgrad makes building, launching, and optimizing
                            ad campaigns effortless with its complete
                            pay-per-click {"(PPC)"} services. As a full-service
                            PPC management company, we have the expertise to
                            handle every aspect of your ad campaign, including:
                          </p>
                          <Row>
                            <Col md={6}>
                              <ol style={{ listStylePosition: "inside" }}>
                                <li>Set-up ad campaigns</li>
                                <li>Designing ad graphics</li>
                                <li>Writing ad copy</li>
                              </ol>
                            </Col>
                            <Col md={6}>
                              <ol
                                start={4}
                                style={{ listStylePosition: "inside" }}
                              >
                                <li>Building ad web landing pages</li>
                                <li>Creating audio or video ads</li>
                              </ol>
                            </Col>
                          </Row>
                          <p>
                            With NextUpgrad, you can surpass the competition by
                            quickly launching compelling ads that effectively
                            attract and convert your target audience. Our
                            services eliminate the hassle of securing in-house
                            design time and the drawbacks of hiring freelancers.
                          </p>
                          <p>
                            Switch to {"NextUpgrad's"} PPC Management Services
                            and experience a seamless, efficient approach to
                            your advertising needs.
                          </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <h3>Bid Management</h3>
                          <p>
                            Forget wasted ad spend. With {"NextUpgrad’s"} PPC
                            management services.
                          </p>
                          <p>Our complete bid management includes:</p>
                          <ol>
                            <li>Monitoring for fraudulent activity</li>
                            <li>Optimizing bids to maximize ROI</li>
                            <li>
                              Leveraging AI to meet monthly ad spend targets
                            </li>
                          </ol>
                          <p>
                            With our proactive Google PPC Management Services,
                            your team can focus on high-priority projects
                            instead of constantly monitoring ad accounts.
                          </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fourth">
                          <h3>Landing Page Creation & Optimization</h3>
                          <p>
                            Transform your ad campaigns from start to finish
                            with {"NextUpgrad's"} pay-per-click management
                            services.
                          </p>
                          <p>
                            Increase your leads and revenue by converting more
                            paid traffic through our landing page library; our
                            clients have captured 10% more leads from their
                            landing pages.
                          </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fifth">
                          <h3>Keyword Research</h3>
                          <h4>Keyword Research and Analysis</h4>
                          <p>
                            Keyword Analysis for Accurate Targeting Find out the
                            terms people search for in your audience, so you get
                            your message to the right people at the right time.
                          </p>
                          <h4>Ongoing keyword optimizations</h4>
                          <p>
                            Continuously refining your keyword strategy in real
                            time enables you to stay ahead in a dynamic
                            environment. Adapt to market trends and audience
                            behavior seamlessly for maximum impact and
                            cost-efficiency.
                          </p>
                          <h4>Dynamic Keyword Insertion into Ads</h4>
                          <p>
                            Enhance engagement with personalized ad content.
                            Automatically integrate search terms into your ads,
                            making them highly relevant to user queries, driving
                            clicks, and improving conversion rates.
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
                  <h3>Online Visibility</h3>
                  <p>
                    Leveraging targeted keyword research and ad placements to
                    ensure your business appears prominently in search results.
                    With our PPC management, expect to dominate search engines
                    and expand your {"brand's"} digital footprint.
                  </p>
                </div>
              </Col>
              <Col className="col-md-6 align-content-center">
                <div>
                  <h3>Increased Website Traffic</h3>
                  <p>
                    Drive high-impact traffic to your website through strategic
                    ad campaigns. Our team ensures you capture your target
                    {"audience's"} attention and lead them to take action.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col className="col-md-6 align-content-center">
                <div>
                  <h3>Improved ROI {"(Return on Investment)"}</h3>
                  <p>
                    Maximize every dollar spent with precise ad targeting and
                    continuous campaign optimization. Our experts use analytics
                    and A/B testing to deliver measurable results and
                    high-performing campaigns.
                  </p>
                </div>
              </Col>
              <Col className="col-md-6">
                <div className={styles.resultCard}>
                  <h3>Measurable Success with Data Insights</h3>
                  <p>
                    Gain clarity on campaign performance through detailed
                    reports. Understand customer behavior, refine strategies,
                    and celebrate proven results.
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
                  Stages of Our PPC Management Services
                </h2>
              </Col>
            </Row>
            <Row className={styles.resultRow}>
              <Col className="col-md-4">
                <div className={styles.resultCard}>
                  <h3>Discovery & Goal Setting</h3>
                  <p>
                    First, gain a deep understanding of the {"client's"}{" "}
                    business, goals, and target audience. Set measurable
                    objectives like lead generation or sales. Identify key
                    performance indicators {"(KPIs)"}, like click-through rates{" "}
                    {"(CTR)"} or return on investment {"(ROI)"}, to ensure the
                    campaign aligns with the
                    {"business's"} vision and priorities.
                  </p>
                </div>
              </Col>
              <Col className="col-md-4 align-content-center">
                <div>
                  <h3>Competitor Analysis</h3>
                  <p>
                    Analyze {"competitors’"} strategies, industry trends, and
                    audience behaviors. Identify untapped opportunities and
                    niche markets. Use these insights to craft a targeted
                    strategy for maximum impact.
                  </p>
                </div>
              </Col>
              <Col className="col-md-4">
                <div className={styles.resultCard}>
                  <h3>Campaign Strategy Development</h3>
                  <p>
                    Choose platforms, budgets, and campaign structures that
                    align with your goals. Create ad types and bidding
                    strategies tailored to your {"client's"} needs. This
                    approach ensures campaigns are efficient, scalable, and
                    effective, delivering results within budget limits.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col className="col-md-4 align-content-center">
                <div>
                  <h3>Ad Creation & Copywriting</h3>
                  <p>
                    Create persuasive ad copy accompanied by visually appealing
                    designs. Tailor messages to the {"audience's"} needs and
                    highlight strong calls to action {"(CTAs)"}. Effective ads
                    attract clicks, build brand awareness, and lead users
                    towards desired actions, such as making purchases or signing
                    up
                  </p>
                </div>
              </Col>
              <Col className="col-md-4">
                <div className={styles.resultCard}>
                  <h3>Scaling & Continuous Improvement</h3>
                  <p>
                    Expand successful campaigns by increasing budgets or
                    targeting new markets. Introduce remarketing strategies.
                    Stay updated on trends to maintain competitiveness, ensuring
                    campaigns evolve alongside the business for long-term
                    results.
                  </p>
                </div>
              </Col>
              <Col className="col-md-4 align-content-center">
                <div>
                  <h3>Reporting & Insights</h3>
                  <p>
                    Provide transparent reports showcasing campaign metrics like
                    clicks and ROI. Share actionable insights and
                    recommendations. Regular updates keep the client informed,
                    and campaigns are aligned with evolving business objectives
                    for sustained success.
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
                      Q1 - Why invest in PPC?
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
                      Q2 - What are PPC services?
                    </Accordion.Header>
                    <Accordion.Body>
                      <strong>Answer - </strong>PPC management services offer
                      professional oversight of your pay-per-click strategy and
                      campaigns for a set fee. These services can include
                      developing strategies, managing bids, creating ad copy,
                      and more.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header className={styles.accordHead}>
                      Q3 - What do PPC services include?
                    </Accordion.Header>
                    <Accordion.Body>
                      <strong>Answer - </strong>The deliverables for PPC
                      {"(Pay-Per-Click)"} services vary based on the provider
                      and chosen plan. Generally, PPC management services
                      include advertising on Google and Bing, keyword targeting,
                      bid management, and routine reporting.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header className={styles.accordHead}>
                      Q4 - Why work with a PPC management company?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        <strong>Answer - </strong>How Hiring A PPC Agency Is The
                        Best Business Decision You Make
                      </p>
                      <p>
                        Search engine marketing requires ongoing management.
                        {"It’s"} not a {"“set it and forget it”"} approach;
                        regular tweaks are important for optimal performance.
                      </p>
                      <p>
                        As a business owner whose responsibilities would include
                        writing checks, ordering inventory and
                        managing operations, you probably {"won’t"} have the
                        time to set up PPC campaigns properly. This is the point
                        at which employing a PPC agency offers immeasurable
                        value. A professional agency can give you back-to-back
                        services so that you can concentrate on handling your
                        business while experts manage and optimize your PPC
                        campaigns.
                      </p>
                      <p>Why You Should Hire a PPC Agency: Key Benefits</p>
                      <ol>
                        <li>
                          <p>
                            <strong>Avoid the Learning Curve</strong>
                            <br />
                            Are you a PPC expert? Otherwise, learning how to use
                            PPC advertising is steep learning curve. Good
                            campaigns require working knowledge of PPC
                            tactics and mechanics. It is also not practical
                            to train someone in your team, as you lose out on
                            workforce resources. With a pay per click management
                            agency, you avoid having to seek in-house expertise
                            and instead hire specialists.
                          </p>
                        </li>
                        <li>
                          <strong>Save Time</strong>
                          <br />
                          Hiring a PPC management company saves you significant
                          time. Becoming a PPC expert requires many hours of
                          study and practice—time that could otherwise be
                          invested in your core business operations. An agency
                          ensures your campaigns are vigilantly monitored for
                          best results, relieving you of daily oversight tasks.
                        </li>
                        <li>
                          <strong>Achieve Targeted Results</strong>
                          <br />A PPC agency aligns with your advertising goals,
                          whether {"you’re"} aiming to target specific keywords,
                          demographics, or initiate a remarketing campaign.
                          Their expertise ensures your campaign is structured
                          for success and tailored to achieve your desired
                          outcomes.
                        </li>
                        <li>
                          <strong>Leverage Expert Knowledge</strong>
                          <br />
                          PPC agency professionals are seasoned experts. With
                          thousands of hours dedicated to refining their skills,
                          they possess the in-depth knowledge necessary for
                          crafting successful PPC campaigns. Instead of trial
                          and error, rely on experts to execute strategies that
                          elevate your business success.
                        </li>
                      </ol>
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
