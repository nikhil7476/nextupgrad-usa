import Head from "next/head";
import Link from "next/link";
import CountUp from "react-countup";
import styles from "@/styles/Enterprise.module.css";
import { Col, Row, Container, Tab, Nav, Accordion } from "react-bootstrap";
import { BsFillPatchQuestionFill } from "react-icons/bs";

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
        <section className={styles.stats}>
          <Container>
            <Row className="mb-4">
              <Col>
                <h2>
                  <span>Stats</span>
                  <br />
                  Does Email Marketing Still Work?
                </h2>
                <p>
                  Our email services can accelerate your sales cycle. We assist
                  in advancing your email marketing leads through each stage
                  effectively. Boost your engagement, email open rates, and
                  click-through rates with our email marketing solutions today.
                </p>
              </Col>
            </Row>
            <Row className="mb-4 border-bottom">
              <Col className="col-md-6">
                <Row>
                  <Col className="col-md-8">
                    <h3>Average</h3>
                    <p>email open rate across all industries</p>
                  </Col>
                  <Col className="col-md-4">
                    <CountUp
                      className={styles.countEr}
                      end={12}
                      duration={5}
                      suffix={"%"}
                    />
                  </Col>
                </Row>
              </Col>
              <Col className="col-md-6">
                <Row>
                  <Col className="col-md-8">
                    <h3>Business Professionals</h3>
                    <p>Check their emails using mobile phones</p>
                  </Col>
                  <Col className="col-md-4">
                    <CountUp
                      className={styles.countEr}
                      end={35}
                      duration={5}
                      suffix={"%"}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="mb-4 border-bottom">
              <Col className="col-md-6">
                <Row>
                  <Col className="col-md-8">
                    <h3>For every $1 spent</h3>
                    <p>
                      Email marketing delivers an average ROI is for every $1
                      spent, making it one of the most cost-effective marketing
                      channels.
                    </p>
                  </Col>
                  <Col className="col-md-4">
                    <CountUp
                      className={styles.countEr}
                      end={38}
                      duration={5}
                      prefix={"$"}
                    />
                  </Col>
                </Row>
              </Col>
              <Col className="col-md-6">
                <Row>
                  <Col className="col-md-8">
                    <h3>Marketers</h3>
                    <p>
                      believe that {"they're"} most effective lead nurturing
                      method is email marketing
                    </p>
                  </Col>
                  <Col className="col-md-4">
                    <CountUp
                      className={styles.countEr}
                      end={47}
                      duration={5}
                      suffix={"%"}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col className="col-md-6">
                <Row>
                  <Col className="col-md-8">
                    <h3>Emails</h3>
                    <p>
                      more likely to get click-through compared to other
                      marketing methods
                    </p>
                  </Col>
                  <Col className="col-md-4">
                    <CountUp
                      className={styles.countEr}
                      end={6}
                      duration={5}
                      suffix={"x"}
                    />
                  </Col>
                </Row>
              </Col>
              <Col className="col-md-6">
                <Row>
                  <Col className="col-md-8">
                    <h3>Preferred Communication</h3>
                    <p>
                      Consumers prefer brands to contact them through email,
                      making it the top choice for communication.
                    </p>
                  </Col>
                  <Col className="col-md-4">
                    <CountUp
                      className={styles.countEr}
                      end={61}
                      duration={5}
                      suffix={"%"}
                    />
                  </Col>
                </Row>
              </Col>
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
            <Row>
              <Col className="text-center">
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
        <section className={styles.results}>
          <Container>
            <Row className="mb-5">
              <Col>
                <h2>
                  <span>Process</span>
                  <br />
                  Stages of Our Email Marketing Services
                </h2>
              </Col>
            </Row>
            <Row className={styles.resultRow}>
              <Col className="col-md-4">
                <div className={styles.resultCard}>
                  <h3>Discovery & Goal Setting</h3>
                  <p>
                    We start by understanding your business goals, target
                    audience, and brand voice. Together, we define KPIs and
                    create a roadmap tailored to your specific objectives for
                    measurable success.
                  </p>
                </div>
              </Col>
              <Col className="col-md-4 align-content-center">
                <div>
                  <h3>Audience Segmentation</h3>
                  <p>
                    Our team dives deep into your audience data to create
                    meaningful segments. We ensure personalized content delivery
                    to maximize engagement, improve open rates, and drive better
                    results.
                  </p>
                </div>
              </Col>
              <Col className="col-md-4">
                <div className={styles.resultCard}>
                  <h3>Compelling Content Creation</h3>
                  <p>
                    From catchy subject lines to persuasive email copy, we craft
                    content that resonates with your audience. Every email is
                    designed to inform, engage, and inspire action, aligning
                    with your brand identity.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className={styles.resultRow}>
              <Col className="col-md-4 align-content-center">
                <div>
                  <h3>Email Design & Automation Setup</h3>
                  <p>
                    We design visually appealing, mobile-responsive emails and
                    implement automation workflows. Expect seamless campaigns
                    that nurture leads and save time while delivering consistent
                    results.
                  </p>
                </div>
              </Col>
              <Col className="col-md-4">
                <div className={styles.resultCard}>
                  <h3>Testing & Optimization</h3>
                  <p>
                    Before hitting send, we A/B test key elements like subject
                    lines, visuals, and CTAs. Our iterative process ensures the
                    highest performance for each campaign.
                  </p>
                </div>
              </Col>
              <Col className="col-md-4 align-content-center">
                <div>
                  <h3>Campaign Launch & Monitoring</h3>
                  <p>
                    Your emails go live, and we monitor performance in
                    real-time. Metrics like open rates, click-throughs, and
                    conversions are closely tracked for actionable insights.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col className="col-md-4">
                <div className={styles.resultCard}>
                  <h3>Reporting & Continuous Improvement</h3>
                  <p>
                    Receive detailed reports outlining successes and areas for
                    growth. Our team refines strategies based on data to keep
                    your email campaigns evolving and delivering top-notch
                    results.
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="text-center">
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
        <section className={styles.whyEmail}>
          <Container>
            <Row className="mb-4">
              <Col>
                <h2>
                  <span>Why Email</span>
                  <br />
                  Why is email marketing important?
                </h2>
                <p>
                  Working with NextUpgrad for your email marketing explains one
                  of the most powerful and effective marketing ways. Unlike some
                  people think, email marketing is still dead effective and not
                  losing its power.
                </p>
                <p>
                  Email marketing is a cheap but better way to engage your
                  target audience. You can employ it to inform clients of
                  upcoming events, share special offers, and engage them in
                  various ways.
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
                            People check their email a lot
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="second"
                            className={styles.tabLinkText}
                          >
                            Encourage subscribers to visit your website
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="third"
                            className={styles.tabLinkText}
                          >
                            Email marketing offers the highest ROI among all
                            digital strategies.
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="fourth"
                            className={styles.tabLinkText}
                          >
                            Your emails achieve a high click-through rate
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={8} className={styles.delTabCont}>
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <h3>People check their email a lot</h3>
                          <p>
                            Eighty-nine percent of Americans check their email
                            at least once a day. By adopting email marketing
                            services, you effectively reach your audience where
                            they are most active—their inbox.
                          </p>
                          <p className="mb-5">
                            It makes sense to deliver your messages where your
                            target audience is likely to see them, and their
                            inbox is an ideal location for that.
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
                          <h3>Encourage subscribers to visit your website</h3>
                          <p>
                            Even without a physical storefront, you can use
                            emails to drive users to your website.
                          </p>
                          <p>
                            Include buttons and links throughout your emails to
                            make it easy for subscribers to navigate to your
                            site. This will boost website traffic from your
                            email campaigns.
                          </p>
                          <p className="mb-5">
                            Increased website traffic is crucial. More visitors
                            mean higher brand awareness and greater chances of
                            conversions.
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
                          <h3>
                            Email marketing offers the highest ROI among all
                            digital strategies.
                          </h3>
                          <p>
                            Return on investment {"(ROI)"} is an important
                            metric for the business, showing the amount of
                            profit generated for every dollar spent on
                            advertising, marketing, materials, and other
                            expenditures.
                          </p>
                          <p>
                            Email marketing has an incredible ROI of 3,800%,
                            which is to say for every $1 you put into your email
                            campaign, prepare to make $38 in profit.
                          </p>
                          <p className="mb-5">
                            Considering this incredible return, adopting email
                            marketing under your business strategy is a smart
                            move.
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
                          <h3>Your emails achieve a high click-through rate</h3>
                          <p className="mb-5">
                            A key objective of any digital marketing strategy is
                            to boost website traffic. Whether through a Facebook
                            post, a button on your site, or a link on Yelp, your
                            aim is to drive more visitors to your website.
                            Notably, emails are six times more likely to receive
                            clicks compared to tweets.
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
        <section className={styles.faqs}>
          <Container>
            <Row className="mb-5">
              <Col>
                <h2>
                  <span>FAQs</span>
                  <br />
                  FAQs About Email Marketing Services
                </h2>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col className="col-md-11">
                <Accordion defaultActiveKey="0" flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className={styles.accordHead}>
                      Q1 - What is email marketing?
                    </Accordion.Header>
                    <Accordion.Body>
                      <strong>Answer - </strong>Email marketing is a digital
                      strategy that delivers marketing messages directly to your{" "}
                      {"audience's"} inbox. This approach allows you to:
                      <ol>
                        <li>
                          Send newsletters with business and industry updates
                        </li>
                        <li>Promote new products</li>
                        <li>
                          Offer personalized recommendations to past customers
                        </li>
                        <li>Engage and nurture potential leads</li>
                      </ol>
                      <p>
                        By utilizing email marketing, you can effectively
                        communicate and build relationships with your audience.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header className={styles.accordHead}>
                      Q2 - What are email marketing management services?
                    </Accordion.Header>
                    <Accordion.Body>
                      <strong>Answer - </strong>Email marketing management
                      services are professional offerings that create, execute,
                      and monitor email campaigns. These services may provide
                      strategy development, copywriting, email design,
                      reporting, and additional support.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header className={styles.accordHead}>
                      Q3 - What does an email marketing company do?
                    </Accordion.Header>
                    <Accordion.Body>
                      <strong>Answer - </strong>NextUpgrad is an email marketing
                      company dedicated to helping businesses increase revenue
                      through effective email strategies. We work with you to
                      create custom plans, design and implement campaigns, send
                      newsletters, track results, and make ongoing optimizations
                      to ensure success.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header className={styles.accordHead}>
                      Q4 - What is drip marketing?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        <strong>Answer - </strong>Drip marketing is an email
                        strategy where a series of emails is sent to recipients
                        over time. The goal is to keep your business or product
                        top-of-mind for leads and prospects.
                      </p>
                      <p>
                        At NextUpgrad, we include drip email campaigns as a key
                        component of our email marketing services.
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

export default EmailMarketing;
