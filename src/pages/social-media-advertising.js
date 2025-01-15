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

function SocialMediaAdvertising() {
  return (
    <>
      <Head>
        <title>Social Media Marketing Services - Nextupgrad USA</title>
      </Head>
      <div className={styles.enterprise}>
        <section className={styles.enterpriseBnr}>
          <Container>
            <Row className={`justify-content-between ${styles.bannerRow}`}>
              <Col className="col-md-6 align-content-center">
                <h1>
                  <span>Social Media Marketing Services</span> for Growing Small
                  Businesses
                </h1>
                <p>
                  NextUpgrad focuses on driving impactful business growth
                  through social media advertising services. We can help you
                  increase your {"brand's"} online presence or generate targeted
                  leads. Contact our social media marketing agencies for a free
                  quote today!
                </p>
                <TestForms />
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
                  title: "Lack of Online Visibility",
                  description:
                    "Use social media paid promotions on channels such as Facebook and Instagram to increase your business awareness. Run a social media marketing campaign to target your target audience.",
                },
                {
                  title: "Low Engagement Rates",
                  description:
                    "Build your content to be engaging and reach your audience. Persona—How many personas do you want to build for your campaigns, depending on cluster segments and common threads?",
                },
                {
                  title: "Limited Advertising Budget",
                  description:
                    "Utilize affordable social media ads in Denver that can reach local people. Retargeting campaigns and split-testing ads will help ensure you know what works best while still being within budget and optimizing your spending.",
                },
                {
                  title: "Ineffective Content Strategy",
                  description:
                    "Business2Community Choose your networks wisely with a detailed content calendar to plan a structured social media marketing campaign Get inspired by the best social media advertising campaigns for content that is relevant to your brand ethos and what your audience would expect to see.",
                },
                {
                  title: "Limited Time to Manage Social Media",
                  description:
                    "Outsource social media advertising tasks to a local expert or agency specializing in social media advertising in Denver. They can handle everything from campaign strategy to performance tracking, saving you time while delivering results.",
                },
                {
                  title: "Difficulty in Tracking Results",
                  description:
                    "Leverage analytics tools to measure the success of your social media marketing campaign. Compare your metrics against the benchmarks set by the best social media advertising campaigns to refine strategies for sustained growth and success.",
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
                  Top Benefits of NextUpgrad {"Marketing's"} Social Media
                  Services for Small Businesses
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
                            Instagram Advertising Services
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="second"
                            className={styles.tabLinkText}
                          >
                            LinkedIn Advertising Services
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="third"
                            className={styles.tabLinkText}
                          >
                            Facebook Advertising Services
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="fourth"
                            className={styles.tabLinkText}
                          >
                            X {"(Twitter)"} Advertising Services
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="fifth"
                            className={styles.tabLinkText}
                          >
                            Pinterest Advertising Services
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={8} className={styles.delTabCont}>
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <h3>Instagram Advertising Services</h3>
                          <h4>
                            Top Benefits of Our Instagram Marketing Services for
                            Small Businesses
                          </h4>
                          <ol>
                            <li>
                              Increase brand awareness with branded Instagram
                              reels designed to captivate your audience.
                            </li>
                            <li>
                              Engaging Strategic Content Calendar for more sales
                              and loyalty.
                            </li>
                          </ol>
                          <p>
                            Instagram is not only one of the best places for
                            small businesses to build real relationships with
                            customers and drive engagement but also a platform
                            to achieve success with the{" "}
                            <strong>best Instagram advertising services</strong>{" "}
                            customized to your needs. Specializing in{" "}
                            <strong>Instagram advertising in Newyork</strong>,
                            we deliver results-driven Instagram reels and
                            carousel posts that help your brand reach the most
                            relevant audience and inspire meaningful
                            conversations in the comments.
                          </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <h3>LinkedIn Advertising Services</h3>
                          <p>
                            Advertise on the top social media platform for lead
                            generation with{" "}
                            <strong>LinkedIn advertising services</strong>.
                            Capture valuable leads with compelling, personalized
                            ads customized to your audience.
                          </p>
                          <p>
                            If you want to reach professionals based on their
                            skills, industry, or interests, consider using
                            LinkedIn advertising in New York. With over 50% of
                            its users holding college degrees, LinkedIn is a
                            powerful tool for targeting educated professionals.
                          </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <h3>Facebook Advertising Services</h3>
                          <h4>
                            Advantages of our Facebook Marketing Services for
                            Small Businesses
                          </h4>
                          <ol>
                            <li>
                              <strong>Amplified Brand Awareness</strong>
                              <br />
                              Utilize Facebook as the largest image-advertising
                              social network for the edge of your brand.
                            </li>
                            <li>
                              <strong>Larger Audience and Higher ROI</strong>
                              <br />
                              Custom Facebook Reels that resonate with your
                              brand for higher reach and better return on
                              investment
                            </li>
                          </ol>
                          <p>
                            With Facebook being the top social media platform,
                            social media marketing has become a must. Our team
                            assesses your current Facebook practices, identifies
                            areas for improvement, and enhances your strategy
                            through customized{" "}
                            <strong>Facebook advertising services</strong>. We
                            provide engaging Facebook Reel content to ensure
                            your posts are catchy, attracting page likes and
                            converting visitors into future customers.
                          </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fourth">
                          <h3>X {"(Twitter)"} Advertising Services</h3>
                          <h4>
                            Top Benefits of Our X {"(Twitter)"} Marketing
                            Services for Small Businesses
                          </h4>
                          <ol>
                            <li>
                              <strong>Establish Industry Authority</strong>
                              <br />
                              Become a recognized leader in your niche with our
                              engagement-driven tweets.
                            </li>
                            <li>
                              <strong>Cultivate a Loyal Following</strong>
                              <br />
                              Keep your audience updated and involved in
                              trending conversations with our proactive
                              engagement strategy, which we manage completely
                              for you.
                            </li>
                          </ol>
                          <p>
                            X {"(formerly Twitter)"} excels at real-time,
                            concise communication. Users follow brand accounts
                            for industry insight and exclusive content. Through
                            our social media services, we will position your
                            company as an industry leader with high-value tweets
                            and active participation in discussion threads. This
                            approach will help establish your brand as the
                            preferred choice for your product or service.
                          </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fifth">
                          <h3>Pinterest Advertising Services</h3>
                          <h4>
                            Top Benefits of Our Pinterest Marketing Services for
                            Small Businesses
                          </h4>
                          <ol>
                            <li>
                              <strong>Enhanced Brand Recognition </strong>Our
                              strategic pins and content planning significantly
                              boost your {"brand's"} visibility on Pinterest.
                            </li>
                            <li>
                              <strong>Increased Sales for E-commerce </strong>By
                              optimizing content with relevant keywords, we
                              increase your sales on Pinterest, which functions
                              as both a visual search engine and a shopping
                              platform.
                            </li>
                          </ol>
                          <h4>Why Pinterest for e-commerce?</h4>
                          <p>
                            This makes Pinterest perfect for e-commerce
                            companies wanting to increase product sales,
                            especially in fast-paced markets like New York. Its
                            visual layout and search engine capabilities create
                            a destination and carousels of curated,
                            shoppable goods for buyers. Our Pinterest
                            advertising in New York focuses on creating
                            optimized pins with relevant keywords that your
                            audience searches for. This ensures that you get
                            your products to the right customers who drive the
                            purchase. We also create Pinterest boards that are
                            so visually attractive that your consumers save them
                            and purchase your products.
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
                      Q1 - What is social media marketing?
                    </Accordion.Header>
                    <Accordion.Body>
                      <strong>Answer - </strong>Social media marketing involves
                      the strategic use of various social media platforms to
                      enhance a {"brand's"} visibility, foster meaningful
                      connections with a targeted audience, generate increased
                      traffic to a website, and ultimately drive higher sales
                      and revenue by creating engaging, relevant, and valuable
                      content.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header className={styles.accordHead}>
                      Q2 - Who will be working on my account?
                    </Accordion.Header>
                    <Accordion.Body>
                      <strong>Answer - </strong>You will be assigned a dedicated
                      social media account manager who will serve as your
                      primary point of contact. This professional is trained in
                      social media marketing and has experience working with
                      clients in your industry.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header className={styles.accordHead}>
                      Q3 - How will you create content that fits my business?
                    </Accordion.Header>
                    <Accordion.Body>
                      <strong>Answer - </strong>We will meticulously craft
                      high-quality and engaging content uniquely tailored to
                      your business needs. This process involves thoroughly
                      analyzing your completed questionnaire, brand guide, and
                      any additional materials or resources you share with us to
                      ensure we capture the essence of your {"brand's"} voice,
                      vision, and goals.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header className={styles.accordHead}>
                      Q4 - How will you grow my followers?
                    </Accordion.Header>
                    <Accordion.Body>
                      <strong>Answer - </strong>To grow your followers, we will
                      utilize both organic and paid strategies. Organic
                      techniques do not require an advertising budget. However,
                      paid methods do involve allocating a budget for
                      advertising.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header className={styles.accordHead}>
                      Q5 - Which company is best for social media marketing?
                    </Accordion.Header>
                    <Accordion.Body>
                      <strong>Answer - </strong>NextUpgrad Advertising is the
                      top choice for small businesses seeking to grow their
                      social media presence. We specialize in increasing
                      followers, generating leads, and converting those leads
                      into customers. Thousands of businesses trust our
                      expertise in social media marketing.
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

export default SocialMediaAdvertising;
