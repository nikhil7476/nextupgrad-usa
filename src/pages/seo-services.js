import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import CountUp from "react-countup";
import { Col, Container, Row, Nav, Tab, Table } from "react-bootstrap";
import { MdOutlineSupportAgent } from "react-icons/md";
import { RxDoubleArrowDown } from "react-icons/rx";
import { TbTargetArrow } from "react-icons/tb";
import { GiTeamIdea } from "react-icons/gi";
import { AiOutlineFileSearch } from "react-icons/ai";
import style from "@/styles/SeoService.module.css";
import SeoServiceAccordion from "@/components/SeoServiceAccordion";
import StatisticsSection from "@/components/StatisticsSection";

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

const SeoService = () => {
  return (
    <>
      <Head>
        <title>Affordable SEO Services for Higher Rankings</title>
        <meta
          name="title"
          content="Affordable SEO Services for Higher Rankings"
        />
        <meta
          name="description"
          content="Unlock your website's visibility with affordable SEO services. Improve rankings, drive traffic, and grow your business online. Get results today!"
        />
      </Head>
      <div className={style.serviceHdr}>
        <section className={style.serviceBanner}>
          <Container>
            <Row>
              <Col className="col-md-6 align-content-center">
                <h1>
                  Capture More Revenue with the <span>Best SEO Services</span>
                </h1>
                <p>
                  In {"today's"} digital age, a strong online presence is
                  essential. At Nextupgrad USA, we specialize in providing
                  premier SEO services to help your business excel in a
                  competitive online market.
                </p>
                <p>
                  Our experts employ advanced strategies, industry best
                  practices, and data-driven insights to enhance your{" "}
                  {"website's"} visibility, attract high-quality traffic, and
                  deliver measurable results. Whether {"you're"} a startup
                  aiming to establish yourself or an established brand seeking
                  to dominate your niche, we have the tools and expertise to
                  achieve your goals.
                </p>
                <Link
                  href="#"
                  title="Schedule a Call Now"
                  className={style.ctaBtn}
                >
                  Schedule a Call Now
                </Link>
              </Col>
              <Col className="col-md-6">
                <Row className="justify-content-center">
                  <Col className="col-md-4">
                    <div className={style.flipBox}>
                      <div className={style.flipBoxInner}>
                        <div className={style.flipBoxFront}>
                          <h2>420%</h2>
                          <p>
                            Higher NPS® Score Than
                            <br />
                            <span>Industry average: 16</span>
                          </p>
                        </div>
                        <div className={style.flipBoxBack}>
                          <p>Why Is Our NPS So High?</p>
                          <p>
                            Turn-key solutions
                            <br />
                            Real business results
                            <br />
                            Consistent communication
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="justify-content-evenly">
                  <Col className="col-md-4">
                    <div className={style.flipBox}>
                      <div className={style.flipBoxInner}>
                        <div className={style.flipBoxFront}>
                          <h2>10%</h2>
                          <p>Average Traffic Increase</p>
                        </div>
                        <div className={style.flipBoxBack}>
                          <p>
                            At Nextupgrad, we deliver tailored local SEO
                            strategies to drive your business growth and
                            maximize revenue from the start.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col className="col-md-4">
                    <div className={style.flipBox}>
                      <div className={style.flipBoxInner}>
                        <div className={style.flipBoxFront}>
                          <h2>93%</h2>
                          <p>
                            Client Satisfaction Score
                            <br />
                            <span>Industry average: 72%</span>
                          </p>
                        </div>
                        <div className={style.flipBoxBack}>
                          <p>
                            Why Is Our Satisfaction
                            <br />
                            Score So High?
                          </p>
                          <p>
                            Project management
                            <br />
                            ROI Tracking
                            <br />
                            Diverse skillsets
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col className="col-md-1">
                <Link
                  href="#deli"
                  title="Scroll Down"
                  className={style.vertMove}
                >
                  <RxDoubleArrowDown />
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={style.deliverables} id="deli">
          <Container>
            <Row>
              <Col>
                <h2>Our Deliverables</h2>
                <p>
                  Experience comprehensive search engine optimization {"(SEO)"}{" "}
                  services with Nextupgrad USA.
                  <br />
                  Our full-service solutions attract qualified traffic and
                  convert it into revenue. With Nextupgrad USA as your SEO
                  agency,
                  <br />
                  {"you'll"} benefit from strategic development, performance
                  optimization, continuous measurement, and adaptive strategies.
                </p>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <Row className="justify-content-evenly">
                    <Col sm={3} className="delTab">
                      <Nav variant="pills" className="flex-column">
                        <Nav.Item className={style.tabLink}>
                          <Nav.Link
                            eventKey="first"
                            className={style.tabLinkText}
                          >
                            Overview
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={style.tabLink}>
                          <Nav.Link
                            eventKey="second"
                            className={style.tabLinkText}
                          >
                            Performance Tracking
                            <br />& Transparent Reporting
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={style.tabLink}>
                          <Nav.Link
                            eventKey="third"
                            className={style.tabLinkText}
                          >
                            Keyword Research
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={style.tabLink}>
                          <Nav.Link
                            eventKey="fourth"
                            className={style.tabLinkText}
                          >
                            Link Building
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={style.tabLink}>
                          <Nav.Link
                            eventKey="fifth"
                            className={style.tabLinkText}
                          >
                            On-page SEO
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={style.tabLink}>
                          <Nav.Link
                            eventKey="sixth"
                            className={style.tabLinkText}
                          >
                            Off-page SEO
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={style.tabLink}>
                          <Nav.Link eventKey="seventh">Technical SEO</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={style.tabLink}>
                          <Nav.Link
                            eventKey="eight"
                            className={style.tabLinkText}
                          >
                            Content Creation
                            <br />& Optimization
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={8} className={style.delTabCont}>
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <Row>
                            <Col className="col-md-6">
                              <h3>Overview</h3>
                              <p>
                                Achieve unparalleled SEO results with customized
                                solutions.
                              </p>
                              <p>
                                Align your SEO goals with your unique business
                                needs and reap the rewards of targeted
                                optimization.
                              </p>
                              <p>
                                At Nextupgrad USA, our SEO approach is driven by
                                revenue marketing. This means every optimization
                                is designed to impact your bottom line. Discover
                                how our SEO firm helps grow our {"client's"}{" "}
                                businesses through revenue-focused SEO.
                              </p>
                              <Link
                                href="#"
                                title="Send a Proposal Now"
                                className={style.ctaBtn}
                              >
                                Send a Proposal Now
                              </Link>
                            </Col>
                            <Col className="col-md-6">
                              <Image
                                src="https://picsum.photos/350/400"
                                alt="dummy-image"
                                title="dummy"
                                width={350}
                                height={400}
                              />
                            </Col>
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <h3>Performance Tracking & Transparent Reporting</h3>
                          <p>
                            A comprehensive website SEO audit forms the
                            cornerstone of a successful SEO strategy. Our SEO
                            services meticulously analyze every aspect of your{" "}
                            {"website's"} performance, providing actionable
                            insights for growth.
                          </p>
                          <p>Your dedicated account manager will assess:</p>
                          <Row>
                            <Col className="col-md-6">
                              <ol>
                                <li>
                                  Your {"website’s"} structure and content
                                </li>
                                <li>
                                  Google Analytics data for traffic and
                                  performance insights
                                </li>
                                <li>
                                  Google Search Console metrics for visibility
                                  and indexing
                                </li>
                                <li>
                                  Competitor strategies to identify market
                                  opportunities
                                </li>
                                <li>
                                  Additional key SEO factors tailored to your
                                  industry
                                </li>
                              </ol>
                            </Col>
                            <Col className="col-md-6">
                              <p>
                                We leverage advanced tools as part of our{" "}
                                <strong>SEO marketing</strong> approach. These
                                tools allow our <strong>SEO agency</strong> to
                                uncover hidden opportunities, fix underlying
                                issues, and craft a robust strategy to position
                                your business competitively.
                              </p>
                              <p>
                                We deliver actionable recommendations that drive
                                tangible results by focusing on your{" "}
                                {"website's"} strengths and addressing
                                weaknesses. With our expertise, your business
                                can achieve enhanced visibility, traffic, and
                                conversions through cutting-edge{" "}
                                <strong>SEO services</strong>.
                              </p>
                            </Col>
                          </Row>
                          <p>
                            This thorough audit lays the groundwork for ongoing
                            success, enabling your website to perform optimally
                            in search engines. Let our{" "}
                            <strong>SEO agency</strong> transform your online
                            presence into a high-performing asset!
                          </p>
                          <Link
                            href="#"
                            title="Send a Proposal Now"
                            className={style.ctaBtn}
                          >
                            Send a Proposal Now
                          </Link>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <h3>Keyword Research</h3>
                          <p>
                            In {"today’s"} competitive digital landscape,
                            ranking high on search engines is essential. Our
                            managed SEO services are designed to help you
                            achieve this with focused keyword research.
                          </p>
                          <ol>
                            <li>
                              <strong>Understand Your Current Position:</strong>{" "}
                              We start by analyzing the keywords you already
                              rank for to identify strengths and areas for
                              growth.
                            </li>
                            <li>
                              <strong>Outpace Competitors:</strong> By studying
                              the keywords your competitors rank for, we uncover
                              strategic opportunities to help you stay ahead.
                            </li>
                            <li>
                              <strong>Discover New Potential:</strong> Using
                              advanced tools and audience insights, we identify
                              high-impact keywords relevant to your industry and
                              customer behavior.
                            </li>
                          </ol>
                          <p>
                            This step-by-step approach ensures you connect with
                            your audience through meaningful search queries,
                            increasing your visibility and engagement. Whether{" "}
                            {"you’re"} targeting local customers or a broader
                            market, our methods help your business rise in the
                            search rankings.
                          </p>
                          <p>
                            Start building your path to better visibility today.
                          </p>
                          <Link
                            href="#"
                            title="Send a Proposal Now"
                            className={style.ctaBtn}
                          >
                            Send a Proposal Now
                          </Link>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fourth">
                          <h3>Link Building</h3>
                          <p>
                            At <strong>Nextupgrad USA</strong>, we focus on
                            building effective SEO solutions designed to meet
                            your business goals. At the heart of our service is{" "}
                            <strong>custom link building</strong>, a key factor
                            in improving your online presence.
                          </p>
                          <h4>Why Link Building is Key:</h4>
                          <p>
                            Backlinks from trusted websites signal search
                            engines to rank your site higher, driving more
                            visitors. But not all links add {"value - that’s"}{" "}
                            where our <strong>dedicated team</strong> steps in.
                          </p>
                          <Row>
                            <Col className="col-md-6">
                              <h5>Our Approach:</h5>
                              <ol>
                                <li>
                                  <strong>Smart Research:</strong> We identify
                                  websites that matter to your business and
                                  audience.
                                </li>
                                <li>
                                  <strong>Compelling Content Creation:</strong>{" "}
                                  We create content that attracts links
                                  naturally.
                                </li>
                                <li>
                                  <strong>Real Connections:</strong> Our
                                  outreach builds relationships to secure links
                                  on respected platforms.
                                </li>
                              </ol>
                            </Col>
                            <Col className="col-md-6">
                              <h5>What You Get:</h5>
                              <ol>
                                <li>
                                  <strong>Better Search Rankings:</strong> Be
                                  more visible when customers search for your
                                  services.
                                </li>
                                <li>
                                  <strong>Stronger Website Reputation:</strong>{" "}
                                  Build trust with search engines and users.
                                </li>
                                <li>
                                  <strong>More Quality Visitors:</strong> Get
                                  traffic that matters for your business.
                                </li>
                              </ol>
                            </Col>
                          </Row>
                          <p>
                            We focus on making every link count, helping
                            businesses like yours succeed online with strategies
                            that work and results you can trust.
                          </p>
                          <h4>{"Let’s"} Work Together</h4>
                          <p>
                            Want your website to rank higher and attract more
                            customers?{" "}
                            <strong>
                              Reach out to Nextupgrad USA today. {"Let’s"} build
                              a stronger online presence for your business -
                              starting now!
                            </strong>
                          </p>
                          <Link
                            href="#"
                            title="Send a Proposal Now"
                            className={style.ctaBtn}
                          >
                            Send a Proposal Now
                          </Link>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fifth">
                          <h3>On-page SEO</h3>
                          <p>
                            At Nextupgrad USA, our on-page SEO services are here
                            to make your website work harder for you. As a
                            trusted <strong>SEO agency</strong>, we handle all
                            the important details to help your site show up
                            higher on search engines and attract more visitors.
                            <br />
                            {"Here’s"} what we do:
                          </p>
                          <Row>
                            <Col className="col-md-6">
                              <ol>
                                <li>
                                  <strong>Title Tags:</strong> Write clear and
                                  effective titles that include important
                                  keywords.
                                </li>
                                <li>
                                  <strong>Meta Descriptions:</strong> Create
                                  short, attention-grabbing descriptions to get
                                  more clicks.
                                </li>
                                <li>
                                  <strong>Headings (H1, H2, etc.):</strong>{" "}
                                  Organize your content to make it easy for
                                  users and search engines to read.
                                </li>
                                <li>
                                  <strong>Content Updates:</strong> Add the
                                  right keywords naturally to make your pages
                                  more useful and visible.
                                </li>
                                <li>
                                  <strong>SEO-Friendly URLs:</strong> Simplify
                                  and clean up your links for better search
                                  rankings.
                                </li>
                                <li>
                                  <strong>User Experience (UX):</strong> Make
                                  your site simple to use, so visitors stay
                                  longer and take action.
                                </li>
                              </ol>
                            </Col>
                            <Col className="col-md-6">
                              <p>
                                Unlike many <strong>SEO companies</strong>, we
                                focus on what actually works for your business.
                                Whether {"you're"} a small business looking for{" "}
                                <strong>SEO services near Chicago</strong> or
                                competing in a busy market, {"we’ll"} make sure
                                your site keeps up with the latest search
                                trends.
                              </p>
                              <p>
                                As one of the best{" "}
                                <strong>
                                  SEO optimization companies in New York
                                </strong>
                                , {"we’ll"} help you get more customers,
                                increase traffic, and improve your online
                                visibility. From writing better headlines to
                                fixing the technical stuff, we take care of it
                                all.
                              </p>
                            </Col>
                          </Row>
                          <p>
                            Want to see how we can help? Let us create a custom
                            plan just for your website.
                          </p>
                          <Link
                            href="#"
                            title="Send a Proposal Now"
                            className={style.ctaBtn}
                          >
                            Send a Proposal Now
                          </Link>
                        </Tab.Pane>
                        <Tab.Pane eventKey="sixth">
                          <h3>Off-page SEO</h3>
                          <p>
                            Take your website to the next level with our proven
                            off-page SEO strategies. As a trusted SEO expert in
                            NYC, we focus on improving factors outside your
                            website that boost your online visibility and
                            rankings.
                          </p>
                          <h4>What We Do for Your Off-Page SEO:</h4>
                          <ol>
                            <li>
                              <strong>Content Creation:</strong> We create
                              interesting and shareable content that gets more
                              backlinks and grabs attention on social media.
                              This approach makes us one of the best SEO
                              services near NYC.
                            </li>
                            <li>
                              <strong>Outreach:</strong> We connect with other
                              websites and online platforms to get your brand
                              noticed by more people.
                            </li>
                            <li>
                              <strong>Content Promotion:</strong> We share your
                              content on the right channels to bring in more
                              visitors and grow your audience.
                            </li>
                            <li>
                              <strong>Industry Connections:</strong> Build
                              partnerships within your field to make your brand
                              more recognizable and respected.
                            </li>
                            <li>
                              <strong>Link Check:</strong> We check your{" "}
                              {"website’s"} links to find {"what’s"} working and
                              fix {"what’s"} not, keeping your site in good
                              shape for search engines.
                            </li>
                            <li>
                              <strong>Remove Bad Links:</strong> We help clean
                              up harmful links that could hurt your rankings.
                            </li>
                          </ol>
                          <p>
                            Our off-page SEO services are designed to help
                            businesses looking for reliable SEO services near
                            NYC. Whether {"you’re"} a small local business or a
                            growing company, we make sure you stand out online.
                          </p>
                          <p>
                            <strong>
                              Ready to work with the best SEO company in NYC?
                              Contact us today and {"let’s"} get started!
                            </strong>
                          </p>
                          <Link
                            href="#"
                            title="Send a Proposal Now"
                            className={style.ctaBtn}
                          >
                            Send a Proposal Now
                          </Link>
                        </Tab.Pane>
                        <Tab.Pane eventKey="seventh">
                          <h3>Technical SEO</h3>
                          <p>
                            Looking for the best SEO company in NYC to fix your{" "}
                            {"website's"} technical issues? {"We’re"} here to
                            help. Our SEO services near NYC make it easy for
                            search engines and visitors to use your site.
                            <br />
                            {"Here’s"} what we do:
                          </p>
                          <ol>
                            <li>
                              Fix <strong>robots.txt files</strong> to guide
                              search engines properly.
                            </li>
                            <li>
                              Build and submit{" "}
                              <strong>XML and HTML sitemaps</strong> so all
                              pages are found.
                            </li>
                            <li>
                              Make your site secure to build trust with your
                              users.
                            </li>
                            <li>
                              Improve your {"site’s"} navigation for better
                              usability.
                            </li>
                            <li>
                              Ensure your site works perfectly on mobile
                              devices.
                            </li>
                            <li>Speed up your pages so they load faster.</li>
                          </ol>
                          <p>
                            Unlike other{" "}
                            <strong>SEO optimization companies in NYC</strong>,
                            we focus on practical solutions to make your site
                            work better without breaking the bank. Want to know
                            about our <strong>SEO package pricing?</strong> We
                            have options that fit businesses of all sizes.
                          </p>
                          <p>
                            Your website should work for you, not against you.
                            Call the best <strong>SEO company in NYC</strong>{" "}
                            today and {"let’s"} make your site work the way it
                            should!
                          </p>
                          <Link
                            href="#"
                            title="Send a Proposal Now"
                            className={style.ctaBtn}
                          >
                            Send a Proposal Now
                          </Link>
                        </Tab.Pane>
                        <Tab.Pane eventKey="eight">
                          <h3>Content creation and optimization</h3>
                          <p>
                            Looking for the best SEO company in Texas to fix
                            your {"website's"} technical issues? {"We’re"} here
                            to help. Our SEO services near Pennsylvania make it
                            easy for search engines and visitors to use your
                            site.
                            <br />
                            {"Here’s"} what we do:
                          </p>
                          <ol>
                            <li>
                              Fix <strong>robots.txt files</strong> to guide
                              search engines properly.
                            </li>
                            <li>
                              Build and submit{" "}
                              <strong>XML and HTML sitemaps</strong> so all
                              pages are found.
                            </li>
                            <li>
                              Make your site secure to build trust with your
                              users.
                            </li>
                            <li>
                              Improve your {"site’s"} navigation for better
                              usability.
                            </li>
                            <li>
                              Ensure your site works perfectly on mobile
                              devices.
                            </li>
                            <li>Speed up your pages so they load faster.</li>
                          </ol>
                          <p>
                            Unlike other{" "}
                            <strong>SEO optimization companies in NYC</strong>,
                            we focus on practical solutions to make your site
                            work better without breaking the bank. Want to know
                            about our <strong>SEO package pricing</strong>? We
                            have options that fit businesses of all sizes.
                          </p>
                          <p>
                            Your website should work for you, not against you.
                            Call the <strong>best SEO company in NYC</strong>{" "}
                            today and {"let’s"} make your site work the way it
                            should!
                          </p>
                          <Link
                            href="#"
                            title="Send a Proposal Now"
                            className={style.ctaBtn}
                          >
                            Send a Proposal Now
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
        <section className={style.caseStudy}>
          <Container>
            <h2>Case Studies</h2>
            <p>
              Check out our SEO services, which have helped businesses across
              industries achieve exceptional results.
              <br />
              {"Here’s"} a glimpse of what {"we’ve"} done for our clients:
            </p>
            <Row>
              {caseStudies.map((caseStudy, index) => (
                <Col key={index} className="col-md-4">
                  <div
                    className={style.caseCard}
                    style={{ backgroundImage: caseStudy.backgroundImage }}
                  >
                    <div className={style.caseHead}>
                      <h3>{caseStudy.title}</h3>
                    </div>
                    <div className={style.caseStat}>
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
            <Link href="#" title="Schedule a Call Now" className={style.ctaBtn}>
              Schedule a Call Now
            </Link>
          </Container>
        </section>
        <section className={style.pricing}>
          <Container>
            <h2>Pricing Model</h2>
            <Row>
              <Col>
                <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>Engagement Model</th>
                      <th>Best For</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Monthly</td>
                      <td>Ongoing SEO Small, midsized, and large companies</td>
                      <td>
                        A business looking to grow its organic search
                        visibility, traffic, and revenue
                      </td>
                    </tr>
                    <tr>
                      <td>Hourly</td>
                      <td>Smaller SEO projects Small companies</td>
                      <td>
                        A small business looking to investigate a drop in
                        traffic following a redesign
                      </td>
                    </tr>
                    <tr>
                      <td>Project Based</td>
                      <td>
                        One-time SEO projects Small, midsized, and large
                        companies
                      </td>
                      <td>
                        A business looking to improve its sitewide page spread
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
            <Row>
              <Col>
                <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>SEO Services</th>
                      <th>SEO Cost (Hourly)</th>
                      <th>SEO Cost (Monthly)</th>
                      <th>SEO Cost (Project)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>E-commerce SEO</td>
                      <td>$499</td>
                      <td>$599</td>
                      <td>$699</td>
                    </tr>
                    <tr>
                      <td>Local SEO</td>
                      <td>$499</td>
                      <td>$599</td>
                      <td>$699</td>
                    </tr>
                    <tr>
                      <td>Content Marketing</td>
                      <td>$499</td>
                      <td>$599</td>
                      <td>$699</td>
                    </tr>
                    <tr>
                      <td>360 Degree SEO Solution</td>
                      <td>$499</td>
                      <td>$599</td>
                      <td>$699</td>
                    </tr>
                    <tr>
                      <td>Custom SEO Solution</td>
                      <td>$499</td>
                      <td>$599</td>
                      <td>$699</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
            <Link
              href="#"
              title="See Our Affordable Plans"
              className={style.ctaBtn}
            >
              See Our Affordable Plans
            </Link>
          </Container>
        </section>
        <section className={style.grow}>
          <Container className="mb-4">
            <h2>Growing your business with SEO </h2>
            <Row>
              <Col className="col-md-6">
                <p>
                  Every day, 3.5 billion searches occur on Google. With this
                  vast number of queries, standing out in search results is
                  crucial for business visibility. Expert keyword research and
                  SEO optimization are essential in ensuring your business gains
                  the visibility it needs to boost profitability.
                </p>
              </Col>
              <Col className="col-md-6">
                <p>
                  By partnering with an SEO provider, you gain access to a
                  dedicated team of experts committed to your digital success.
                  Whether your goal is to drive traffic, generate leads,
                  maximize sales, or increase brand awareness, we are here to
                  support you. Our SEO strategies are designed for optimal
                  success.
                </p>
              </Col>
            </Row>
          </Container>
          <Container className="text-center text-white">
            <Row className="justify-content-center align-items-center">
              <Col md={8}>
                <div
                  style={{
                    border: "4px solid #2a3948",
                    background:
                      "linear-gradient(135deg, rgba(255, 111, 97, .2), rgba(255, 111, 97, 0))",
                    borderRadius: "15px",
                    padding: "20px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "45px",
                      fontWeight: "bold",
                      marginBottom: "15px",
                    }}
                  >
                    Stat Highlight
                  </h3>
                  <p
                    style={{
                      fontSize: "18px",
                      lineHeight: "1.6",
                      color: "#ffffff",
                    }}
                  >
                    Companies that invest in <strong>SEO</strong> typically
                    experience a{" "}
                    <span style={{ color: "#E87354", fontWeight: "bold" }}>
                      13.2x higher ROI
                    </span>{" "}
                    than other marketing efforts.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={style.searches}>
          <Container>
            <Row className="text-center">
              <h2>
                <CountUp end={60000} duration={5} suffix="+" /> Searches Happen
                Each Second
              </h2>
              <p>
                Our SEO services make sure your business shows up where it
                matters most: at the top of search results.
                <br />
                We focus on bringing the right people to your site using smart
                keyword choices, clear website structures, and engaging content.
              </p>
              <Col>
                <StatisticsSection />
              </Col>
            </Row>
          </Container>
        </section>
        <section className={style.whyChoose}>
          <Container className="text-center">
            <h2>
              Why <span>Nextupgrad</span>
            </h2>
            <Row className="mb-4">
              <Col className="col-md-3">
                <div className={style.whyCard}>
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
                <div className={style.whyCard}>
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
                <div className={style.whyCard}>
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
                <div className={style.whyCard}>
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
            <Link href="#" title="Send a Proposal Now" className={style.ctaBtn}>
              Send a Proposal Now
            </Link>
          </Container>
        </section>
        <section className={style.serviceFaq}>
          <Container>
            <h2>Frequently Asked Questions</h2>
            <Row className="justify-content-center">
              <Col className="col-md-11">
                <SeoServiceAccordion />
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
};

export default SeoService;
