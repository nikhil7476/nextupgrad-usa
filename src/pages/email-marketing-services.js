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

function EmailMarketing() {
  return (
    <>
      <Head>
        <title>Email Marketing Services - Nextupgrad USA</title>
      </Head>
      <div className={styles.enterprise}>
        <section className={styles.enterpriseBnr}>
          <Container>
            <Row className={`justify-content-between ${styles.bannerRow}`}>
              <Col className="col-md-6 align-content-center">
                <h1>
                  Top-Rated <span>Email Marketing Services</span> to Drive
                  Engagement and Growth
                </h1>
                <p>
                  In {"today's"} digital era, where every click counts, email
                  marketing {"isn’t"} just an add-on; {"it’s"} a lifeline for
                  business growth and customer engagement. But generic campaigns{" "}
                  {"won't"}
                  cut it. {"That’s"} where NextUpgrad comes in.
                </p>
              </Col>
              <Col className="col-md-5">
                <div className="p-4 border">
                  <p>
                    We lead the charge in digital marketing by providing
                    customized email strategies that {"aren’t"} just templates
                    but tools designed specifically for your {"business’s"}{" "}
                    unique challenges and goals. Every email is crafted to
                    resonate with your audience, ensuring each one takes you a
                    step closer to the results you deserve.
                  </p>
                  <Link href="#" title="Let's Talk" className={styles.ctaBtn}>
                    Talk With Our Email Marketing Experts
                  </Link>
                </div>
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
                  title: "Overwhelmed by time constraints",
                  description:
                    "As a business owner, managing your email marketing can feel like a never-ending task—drafting, scheduling, analyzing, and optimizing while juggling other priorities. Our email marketing services take this burden off your plate, delivering professionally managed campaigns that save you time.",
                },
                {
                  title: "Struggling to Grow Your Email List",
                  description:
                    "Building a high-quality subscriber base is challenging, especially when you don’t know where to start or lack the right tools. We provide list-building strategies that attract the right audience with lead magnets, opt-in forms, and landing pages tailored to your business.",
                },
                {
                  title: "Low open and click-through rates",
                  description:
                    "Your emails aren’t engaging your audience, leading to poor results and wasted effort. Our expert team crafts compelling content with personalized subject lines, engaging designs, and optimized CTAs to boost engagement and conversions.",
                },
                {
                  title: "Emails Ending Up in Spam",
                  description:
                    "Your emails aren’t reaching your audience because of poor deliverability practices. We follow best deliverability practices with proper sender authentication, clean email lists, and optimized sending times to ensure your emails land in inboxes.",
                },
                {
                  title: "Can’t Track Campaign Performance",
                  description:
                    "Without actionable insights, it’s impossible to know what’s working and what’s not. We provide detailed analytics and reports, offering clear insights into open rates, clicks, and conversions so that you can measure your ROI.",
                },
                {
                  title: "Not Sure How to Scale Your Campaigns",
                  description:
                    "You’re ready to grow but don’t have the expertise to scale effectively. Our scalable email marketing solutions are tailored to your goals, leveraging automation and segmentation to help you grow while staying cost-effective.",
                },
              ].map((problem, index) => (
                <Col key={index} className={`${styles.cardCol} col-md-4 mb-4`}>
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
                  Maximize Your ROI with Email Marketing Services
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
                            Custom Campaign & Targeting Strategy
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="second"
                            className={styles.tabLinkText}
                          >
                            Custom Design & Creative Theme Development
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="third"
                            className={styles.tabLinkText}
                          >
                            Expert Email Copywriting
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="fourth"
                            className={styles.tabLinkText}
                          >
                            Email Subscriber List Management & Segmentation
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="fifth"
                            className={styles.tabLinkText}
                          >
                            Email Funnel & Automation
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={8} className={styles.delTabCont}>
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <h3>Custom Campaign & Targeting Strategy</h3>
                          <p>
                            Your business is unique, and your email marketing
                            strategy should reflect that.
                          </p>
                          <p>
                            We reject generic email campaign services. Instead,
                            our email marketing company takes the time to
                            understand your industry, target market, and goals.
                            This way, we can create a personalized email
                            marketing strategy that drives leads and conversions
                            from the start.
                          </p>
                          <p className="mb-5">
                            From crafting compelling copy and designing
                            effective landing pages to planning targeted email
                            campaigns, {"we'll"} help you develop a strategy
                            that aligns with your business goals.
                          </p>
                          <Link
                            href="#"
                            title="Send Us A Proposal"
                            className={styles.ctaBtn}
                          >
                            Send Us A Proposal
                          </Link>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <h3>Custom Design & Creative Theme Development</h3>
                          <p>
                            This will have a big influence on your lead
                            generation and even conversion rates. NextUpgrad
                            designs and develops template emails and creative
                            themes that best suit your emails to reflect
                            your brand and generate leads effectively.
                          </p>
                          <p className="mb-5">
                            Email marketing services that adorn your emails with
                            strategically placed CTA buttons at the right points
                            of the email along with beautifully crafted headers
                            and footers. We will help you bring your emails not
                            only to the professional level but also to achieve
                            results.
                          </p>
                          <Link
                            href="#"
                            title="Send Us A Proposal"
                            className={styles.ctaBtn}
                          >
                            Send Us A Proposal
                          </Link>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <h3>Expert Email Copywriting</h3>
                          <p>
                            Not rather equipped or just too busy to write your
                            emails? Let us help.
                          </p>
                          <p>
                            Our experienced in-house copywriters can write email
                            copy that resonates with your subscribers, reflects
                            your brand, highlights your unique selling points,
                            and encourages clicks.
                          </p>
                          <p className="mb-5">
                            We do it all, from newsletters to sales emails and
                            promotional content.
                          </p>
                          <Link
                            href="#"
                            title="Send Us A Proposal"
                            className={styles.ctaBtn}
                          >
                            Send Us A Proposal
                          </Link>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fourth">
                          <h3>
                            Email subscriber list management and segmentation
                          </h3>
                          <p>
                            Our email experts manage and segment your subscriber
                            list efficiently.
                          </p>
                          <p>
                            We assist in growing your list by creating custom
                            email sign-up forms and landing pages to attract
                            more subscribers.
                          </p>
                          <p>
                            Our team segments your list into categories such as:
                          </p>
                          <Row>
                            <Col md={6}>
                              <ol style={{ listStylePosition: "inside" }}>
                                <li>Industry</li>
                                <li>Purchase history</li>
                              </ol>
                            </Col>
                            <Col md={6}>
                              <ol
                                start={3}
                                style={{ listStylePosition: "inside" }}
                              >
                                <li>Interests</li>
                                <li>Job role</li>
                              </ol>
                            </Col>
                          </Row>
                          <p className="mb-5">
                            By doing so, we help you send targeted messages
                            tailored to your {"subscribers'"} unique interests
                            and needs, increasing your conversion rates.
                          </p>
                          <Link
                            href="#"
                            title="Send Us A Proposal"
                            className={styles.ctaBtn}
                          >
                            Send Us A Proposal
                          </Link>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fifth">
                          <h3>Email Funnel & Automation</h3>
                          <p className="mb-5">
                            Struggling with email marketing management in Texas?
                            NextUpgrad resolves these challenges by automating
                            your campaigns, saving time, streamlining processes,
                            and boosting engagement. From nurturing leads to
                            retaining customers, we make email marketing
                            effortless and impactful.
                          </p>
                          <Link
                            href="#"
                            title="Send Us A Proposal"
                            className={styles.ctaBtn}
                          >
                            Send Us A Proposal
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
                  Results {"You’ll"} Get with Email Marketing Services at
                  NextUpgrad
                </h2>
                <p>
                  Unlock the potential of email marketing to grow your business.
                  Discover measurable results with our impactful solutions for
                  sustainable success.
                </p>
              </Col>
            </Row>
            <Row className={styles.resultRow}>
              <Col className="col-md-4 align-content-center">
                <div>
                  <h3>Higher Open Rates</h3>
                  <p>
                    Engage your audience with personalized emails that captivate
                    attention. Our strategies ensure subject lines and content
                    align perfectly, driving open rates up to 40% higher than
                    industry averages.
                  </p>
                </div>
              </Col>
              <Col className="col-md-4">
                <div className={styles.resultCard}>
                  <h3>Increased Conversion Rates</h3>
                  <p>
                    Crafted with precision, our emails guide recipients through
                    your sales funnel, achieving up to 30% more conversions with
                    enticing CTAs and audience-focused messaging.
                  </p>
                </div>
              </Col>
              <Col className="col-md-4 align-content-center">
                <div>
                  <h3>Strengthened Customer Retention</h3>
                  <p>
                    Stay top-of-mind with customers through consistent
                    value-driven email campaigns. Experience retention rates
                    boosted by 25%, fostering stronger customer relationships
                    and repeat business.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col className="col-md-6 align-content-center">
                <div>
                  <h3>Enhanced ROI</h3>
                  <p>
                    With customized automation and segmentation, our services
                    deliver a 4X return on your email marketing investment,
                    optimizing costs while ensuring exceptional performance.
                  </p>
                </div>
              </Col>
              <Col className="col-md-6 align-content-center">
                <div>
                  <h3>Actionable Insights</h3>
                  <p>
                    Leverage detailed analytics and reports to refine
                    strategies. Track email performance metrics, uncover trends,
                    and make informed decisions to amplify success.
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
                      <strong>Answer - </strong>Investing in Pay-Per-Click{" "}
                      {"(PPC)"}
                      advertising offers numerous benefits for your business:
                      <ol>
                        <li>
                          <strong>Immediate Visibility: </strong>Get your ads in
                          front of potential customers instantly.
                        </li>
                        <li>
                          <strong>Targeted Audience: </strong>Reach specific
                          demographics, interests, and locations.
                        </li>
                        <li>
                          <strong>Cost Control: </strong>Set your own budget and
                          only pay when someone clicks your ad.
                        </li>
                        <li>
                          <strong>Measureable Results: </strong>Track
                          performance and ROI with detailed analytics.
                        </li>
                        <li>
                          <strong>Enhanced Brand Awareness: </strong>Increase
                          your {"brand’s"} presence and recognition online. PPC
                          is a powerful tool to drive traffic, generate leads,
                          and boost sales efficiently.
                        </li>
                      </ol>
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

export default EmailMarketing;
