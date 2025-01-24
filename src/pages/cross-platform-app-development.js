import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import TestForms from "@/components/WebsiteForm";
import CountUp from "react-countup";
import styles from "@/styles/Enterprise.module.css";
import { Col, Row, Container, Tab, Nav, Accordion } from "react-bootstrap";
import { BsFillPatchQuestionFill } from "react-icons/bs";

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

function CrossPlatformDevelopment() {
  return (
    <>
      <Head>
        <title>
          Cross-Platform App Development Guide for Seamless Solutions
        </title>
        <meta
          name="title"
          content="Cross-Platform App Development Guide for Seamless Solutions "
        />
        <meta
          name="description"
          content="Discover the benefits of cross-platform app development! Create high-performing apps faster, cut costs, and engage users across devices with one codebase."
        />
      </Head>
      <div className={styles.enterprise}>
        <section className={styles.enterpriseBnr}>
          <Container>
            <Row className={`justify-content-between ${styles.bannerRow}`}>
              <Col className="col-md-6 align-content-center">
                <h1>Cross-Platform App Development</h1>
                <p>
                  We specialize in the power of cross-platform app development.
                  We create apps that work smoothly on any device, helping you
                  save time and money. Let our expertise bring you the best of
                  both worlds.{" "}
                </p>
                <TestForms />
              </Col>
              <Col className="col-md-5">
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
                  title: "Limited Budget",
                  description1:
                    "Native apps for iOS and Android can be expensive to develop, which is a problem for small and medium-sized businesses. This often results in going for lower-quality work or cutting corners, which can take a toll on their app’s performance and user experience later.",
                },
                {
                  title: "Time Constraints",
                  description1:
                    "Startups and SMEs are under intense pressure to deploy their products quickly. Native apps for every platform take an enormous time to produce, increasing their time to market. Such a delay often leads to a loss of opportunity, especially when they are trying to gain a competitive edge or participate in trending market demand.",
                },
                {
                  title: "Resource Shortage",
                  description1:
                    "Small businesses usually have limited access to a pool of better-skilled developers who are experts in cross-platform technologies. They might depend on small teams or outsource partners, resulting in inefficiency in the development process and the app’s growth and creativity.",
                },
                {
                  title: "Maintenance Complexity",
                  description1:
                    "Launching separate native apps is an expensive and time-consuming nightmare for keeping them up to date. They still need to address bug fixes, software updates, and feature upgrades separately on each platform, which not only doubles the workload but also makes the potential for errors or delays in updating features even higher.",
                },
                {
                  title: "Compatibility Issues",
                  description1:
                    "A common pain point is causing a seamless experience across multiple devices and operating systems. Incorrect cross-platform functionality can result in negative user feedback, lower retention, and ultimately damage your brand. Reason: poor performance of the app.",
                },
                {
                  title: "Scalability Challenges",
                  description1:
                    "As users grow by leaps and bounds, so do their apps, delivering with increased demand. Most SMEs struggle with scale, as the initial app development process did not take future preparedness into account, so upgrading or extending the app often has to be done by rebuilding the application.",
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
                      {problem.description1}
                    </p>
                    <p className={styles.cardDescription}>
                      {problem.description2}
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
                  Unlock the Power of Cross-Platform Applications with Our
                  Expert Development Services
                </h2>
                <p>
                  We specialize in the ever-evolving field of cross-platform app
                  development, offering customized solutions to meet your needs.
                  Whether you require end-to-end development support or guidance
                  on modernizing your existing applications, {"we’re"} here to
                  help.
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
                            Strategy and Consulting
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="second"
                            className={styles.tabLinkText}
                          >
                            Cross-Platform App Design
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="third"
                            className={styles.tabLinkText}
                          >
                            Responsive Web Apps
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="fourth"
                            className={styles.tabLinkText}
                          >
                            Cross-Platform App Migration
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="fifth"
                            className={styles.tabLinkText}
                          >
                            Cross-Platform & Support
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="Sixth"
                            className={styles.tabLinkText}
                          >
                            Cross-Platform App Upgrade
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={8} className={styles.delTabCont}>
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <h3>Strategy and Consulting</h3>
                          <p>
                            We have unique industry expertise, technical
                            know-how, and a commitment to overcome every
                            challenge with you and move your business toward
                            success.” We make complex processes easy, optimize
                            performance, and provide custom mobile app
                            development solutions that address your specific
                            requirements. Whether {"you're"} developing a new
                            application or enhancing existing systems,{" we’re"}{" "}
                            with you from start to finish.
                          </p>
                          <p>Examples of our services:</p>
                          <ol className="mb-5">
                            <li>
                              Addressing technical bottlenecks in app
                              development
                            </li>
                            <li>
                              Optimizing performance for
                              cross-platform applications
                            </li>
                            <li>
                              Modernizing legacy systems for
                              contemporary implementation
                            </li>
                            <li>Providing scalable and tailored solutions</li>
                          </ol>
                          <Link
                            href="#"
                            title="Send Us A Proposal"
                            className={styles.ctaBtn}
                          >
                            Send Us A Proposal
                          </Link>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <h3>Cross-Platform App Design</h3>
                          <p>
                            Our team delivers tailor-made UI/UX designs that
                            engage your users and create a smooth experience on
                            any platform. At our cross-platform application
                            development studio, we emphasize providing the
                            perfect, highly functional, and easy-to-implement
                            design that can serve as the solution to your
                            individual business needs
                          </p>
                          <p>{"Here’s"} what we offer:</p>
                          <ol className="mb-5">
                            <li>
                              <strong>Intuitive Navigation:</strong> Simplifying
                              user journeys for better engagement.
                            </li>
                            <li>
                              <strong>Cross-platform consistency:</strong>{" "}
                              ensuring a uniform experience on the web and
                              mobile.
                            </li>
                            <li>
                              <strong>Visual Excellence:</strong> Designing
                              eye-catching, brand-aligned layouts
                            </li>
                          </ol>
                          <Link
                            href="#"
                            title="Send Us A Proposal"
                            className={styles.ctaBtn}
                          >
                            Send Us A Proposal
                          </Link>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <h3>Responsive Web Apps</h3>
                          <p>
                            Develop apps with a single codebase, which saves
                            time and complexity in developing as well as
                            maintaining an intuitive user interface. Our
                            cross-platform app development approach ensures a
                            smooth and uniform experience for users across any
                            device or platform they are using.
                          </p>
                          <p>For example:</p>
                          <ol className="mb-5">
                            <li>
                              <strong>E-commerce App:</strong> Offer the same
                              shopping experience on smartphones, tablets, and
                              desktops.
                            </li>
                            <li>
                              <strong>Fitness Tracker:</strong> Web-based and
                              mobile: progress synchronization across the tech
                              stack.
                            </li>
                          </ol>
                          <Link
                            href="#"
                            title="Send Us A Proposal"
                            className={styles.ctaBtn}
                          >
                            Send Us A Proposal
                          </Link>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fourth">
                          <h3>Cross-Platform App Migration</h3>
                          <p>
                            Protect your current data and migrate your mobile
                            and cross-platform web applications to a single
                            codebase securely. Optimize by reducing redundancy
                            to create efficiency in your development cycle.
                          </p>
                          <p>For example:</p>
                          <ol className="mb-5">
                            <li>
                              Consolidate separate iOS and Android codebases
                              into a single framework like Flutter or React
                              Native.
                            </li>
                            <li>
                              Maintain data integrity throughout the migration
                              process with robust backup and recovery measures.
                            </li>
                            <li>
                              Enhance app performance and maintain consistency
                              across multiple platforms.
                            </li>
                          </ol>
                          <Link
                            href="#"
                            title="Send Us A Proposal"
                            className={styles.ctaBtn}
                          >
                            Send Us A Proposal
                          </Link>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fifth">
                          <h3>Cross-Platform & Support</h3>
                          <p>
                            We provide comprehensive cross-platform app support
                            and maintenance packages for your applications. As a
                            cross-platform application development company, we
                            offer services in multiple domains, including
                            maintaining updates, bug fixes, and various
                            around-the-clock monitoring requirements to match a
                            better user experience.
                          </p>
                          <p>Key features include:</p>
                          <ol className="mb-5">
                            <li>
                              Ongoing updates to ensure that each new change to
                              the platform does not affect the app
                            </li>
                            <li>
                              Monitoring 24 hours a day, 7 days a week to
                              identify and fix problems quickly
                            </li>
                            <li>
                              Troubleshooting and performance optimization
                              with dedicated support
                            </li>
                          </ol>
                          <Link
                            href="#"
                            title="Send Us A Proposal"
                            className={styles.ctaBtn}
                          >
                            Send Us A Proposal
                          </Link>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Sixth">
                          <h3>Cross-Platform App Upgrade</h3>
                          <p>
                            Keeping in step with the latest technologies is
                            crucial when it comes to cross-platform apps, so
                            make sure your app is in line with it as well. By
                            keeping everything up-to-date, you can deliver a
                            cohesive user experience, increase performance, and
                            bring in the latest features. Whether you are
                            looking for the best mobile app development company
                            or seeking custom mobile app development, staying
                            updated ensures your app remains competitive and
                            future-ready.
                          </p>
                          <p>For example:</p>
                          <ol className="mb-5">
                            <li>
                              <strong>Improved User Interface:</strong> Adjust
                              the design standards to have a nicer appearance
                            </li>
                            <li>
                              <strong>Better Compatibility:</strong> Make your
                              app run on new operating systems
                            </li>
                            <li>
                              <strong>Feature Expansion:</strong> Introduce
                              trending features such as dark mode or voice
                              commands
                            </li>
                          </ol>
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
                  Results {"You’ll"} Get with Cross-Platform App Development at
                  NextUpgrad
                </h2>
                <p></p>
              </Col>
            </Row>
            <Row className={styles.resultRow}>
              <Col className="col-md-6">
                <div className={styles.resultCard}>
                  <h3>User Experience Across All Devices</h3>
                  <p>
                    Achieve a unified and intuitive user experience that looks
                    and feels natural on iOS, Android, and web platforms. With
                    our cross-platform app development solutions, your users
                    will enjoy consistent interfaces, smooth interactions, and
                    uninterrupted functionality, no matter which device{" "}
                    {"they’re"} using. Build brand trust by providing a polished
                    and reliable experience across the board.
                  </p>
                </div>
              </Col>
              <Col className="col-md-6 align-content-center">
                <div>
                  <h3>Faster Time-to-Market</h3>
                  <p>
                    Speed is everything in {"today’s"} competitive landscape.
                    With {"NextUpgrad’s"} cross-platform development approach,
                    you can reduce development time significantly by leveraging
                    a single codebase for all platforms. This allows you to
                    launch your app simultaneously on iOS, Android, and the web,
                    giving your business a crucial first-mover advantage in
                    capturing your market.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className={`mb-5 ${styles.resultRow}`}>
              <Col className="col-md-6 align-content-center">
                <div>
                  <h3>Cost-Effective Development</h3>
                  <p>
                    Say goodbye to the high costs of maintaining separate teams
                    for each platform. Our cross-platform solutions help you
                    save up to 40% on development costs while still delivering
                    top-tier quality. By reusing a shared codebase, we eliminate
                    redundancy, streamline development efforts, and ensure your
                    budget is spent where it matters most—innovation and growth.
                  </p>
                </div>
              </Col>
              <Col className="col-md-6 align-content-center">
                <div className={styles.resultCard}>
                  <h3>Future-Proof Scalability</h3>
                  <p>
                    Building for the present while preparing for the future is
                    at the core of our approach. NextUpgrad ensures your app is
                    designed with scalability in mind, using reusable components
                    and robust architecture to support your growth. Whether{" "}
                    {"you’re"} adding new features or expanding to more devices,
                    our cross-platform solutions make scaling seamless and
                    cost-effective.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col className="col-md-6">
                <div className={styles.resultCard}>
                  <h3>Top-Tier Performance</h3>
                  <p>
                    Worried that cross-platform apps might compromise
                    performance? With NextUpgrad, {"you’ll"} never have to. We
                    use cutting-edge frameworks like Flutter and React Native to
                    optimize app speed, responsiveness, and reliability. The
                    result? Apps that perform just as smoothly as native apps
                    while remaining lightweight, user-friendly, and powerful.
                  </p>
                </div>
              </Col>
              <Col className="col-md-6 align-content-center">
                <div>
                  <h3>Broader Audience Reach</h3>
                  <p>
                    Why limit yourself to one platform when you can reach them
                    all? Our cross-platform development solutions enable you to
                    connect with users on smartphones, tablets, desktops, and
                    more. Expand your audience reach, increase engagement, and
                    ensure your app is accessible wherever your users are. With
                    one solution, you can effectively target multiple platforms
                    and maximize your ROI.
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
                  Get to know our work process
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
                            Understanding Your Goals
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="second"
                            className={styles.tabLinkText}
                          >
                            Preparing for Development
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="third"
                            className={styles.tabLinkText}
                          >
                            Bringing Your Application to Life
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="fourth"
                            className={styles.tabLinkText}
                          >
                            Launching Your App in the Market
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="fifth"
                            className={styles.tabLinkText}
                          >
                            Our Commitment Doesn’t End Here
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={8} className={styles.delTabCont}>
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <h3>Understanding Your Goals</h3>
                          <p>
                            Getting to know your business and ideas is the first
                            step toward a successful project. We start by
                            identifying the {"project’s"} scope, reviewing the
                            features you want, and selecting the most effective
                            solutions for your cross-platform app. Once
                            everything is aligned, {"we’ll"} determine whether
                            Flutter or React Native is the better fit and
                            provide an estimated development timeline. By the
                            end of this phase, {"you’ll"} receive a detailed
                            quotation and a clear development schedule.
                          </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <h3>Preparing for Development</h3>
                          <p>
                            We offer a range of workshops tailored to your{" "}
                            {"project's"} specific stage and needs. Whether you
                            want to refine your {"application's"} UX/UI design,
                            delve into its technical details, or enhance your
                            business strategy, our expert team is here to ensure
                            seamless execution. By the end of this phase,{" "}
                            {"we’ll"} deliver product wireframes, outline
                            development requirements, and complete the
                            foundational project documentation.
                          </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <h3>Bringing Your Application to Life</h3>
                          <p>
                            Now {"it’s"} time to turn your idea into reality!{" "}
                            {"We’ll"} establish the {"app’s"} backend
                            architecture, finalize designs, and develop the
                            front end. Our expertise ensures your web and mobile
                            application performs seamlessly across all devices,
                            from compact 4-inch screens to large kiosk displays,
                            using cutting-edge responsive design patterns.
                          </p>
                          <p>
                            On average, it takes up to three months to deliver a
                            fully functional minimum viable product (MVP).
                            However, the timeline may vary depending on the{" "}
                            {"project’s"} scope and complexity.
                          </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fourth">
                          <h3>Launching Your App in the Market</h3>
                          <p>
                            With your MVP ready, {"it's"} time to see how it
                            performs with real users! {"We'll"} handle the
                            deployment and release process, ensuring every
                            component is delivered on time and operates
                            seamlessly with zero downtime.
                          </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fifth">
                          <h3>Our Commitment {"Doesn’t"} End Here</h3>
                          <p>
                            Once your application is live, {"we’re"} here to
                            provide ongoing support. Whether you need new
                            features, system updates, or adjustments, {"we’ll"}{" "}
                            act quickly to meet your needs. If you decide to
                            transition the app to your in-house team, {"we’ll"}{" "}
                            guide you through the process and ensure a smooth
                            handover. Our goal is to build long-term
                            partnerships and support your success every step of
                            the way.
                          </p>
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
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
                  <span> Why NextUpgrad</span>
                  <br />
                  Why Choose Us
                </h2>
                <p>For Cross-Platform Mobile App Development</p>
              </Col>
            </Row>
            <Row className={styles.resultRow}>
              <Col className="col-md-6">
                <div className={styles.resultCard}>
                  <h3>
                    Development team experienced in multiple mobile platforms
                  </h3>
                  <p>
                    The NextUpgrad app development team specializes in creating
                    solutions for the leading mobile operating systems. This
                    expertise allows us to deliver seamless, high-quality
                    cross-platform apps tailored to your needs.
                  </p>
                </div>
              </Col>
              <Col className="col-md-6 align-content-center">
                <div>
                  <h3>Best in the industry pricing</h3>
                  <p>
                    Developing a cross-platform application is significantly
                    more cost-effective than creating separate native
                    applications for each platform.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col className="col-md-6 align-content-center">
                <div>
                  <h3>On-time delivery</h3>
                  <p>
                    We prioritize meeting project deadlines to ensure your app
                    launches on time. Timely delivery is at the core of our
                    commitment to your success.
                  </p>
                </div>
              </Col>
              <Col className="col-md-6 align-content-center">
                <div className={styles.resultCard}>
                  <h3>Customer Support</h3>
                  <p>
                    Prompt and reliable customer support you can count on. We
                    ensure all queries are addressed quickly and efficiently,
                    with minimal response times to keep you moving forward
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col className="col-md-6">
                <div className={styles.resultCard}>
                  <h3>After release maintenance, additional features</h3>
                  <p>
                    Clients often request additional features after a release,
                    and {"we're"} here to help. We provide seamless integration
                    of new features and ensure consistent, reliable post-release
                    maintenance to keep your app running smoothly.
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
                      Q1 - What are the benefits of cross-platform app
                      development?
                    </Accordion.Header>
                    <Accordion.Body>
                      <strong>Answer - </strong>The main benefits include:
                      <ul className="mb-5">
                        <li>
                          <strong>Cost Efficiency:</strong> One codebase for
                          multiple platforms reduces development and maintenance
                          costs.
                        </li>
                        <li>
                          <strong>Faster Development Time: </strong>{" "}
                          simultaneous deployment on various platforms speeds up
                          the time-to-market.
                        </li>
                        <li>
                          <strong>Consistency:</strong> Ensures a consistent
                          user experience across different devices.
                        </li>
                        <li>
                          <strong>Code Reusability: </strong> : Large portions
                          of the code can be reused, reducing repetitive tasks.
                        </li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header className={styles.accordHead}>
                      Q2 - What tools are commonly used in cross-platform app
                      development?
                    </Accordion.Header>
                    <Accordion.Body>
                      <strong>Answer - </strong> Common tools include:
                      <ul className="mb-5">
                        <li>
                          <strong>Flutter:</strong> {"Google’s"} UI toolkit for
                          building natively compiled applications for mobile,
                          web, and desktop.
                        </li>
                        <li>
                          <strong>React Native: </strong> A JavaScript framework
                          created by Facebook for writing real, natively
                          rendering mobile applications.
                        </li>
                        <li>
                          <strong>Xamarin:</strong> A Microsoft-owned framework
                          that uses C# and .Net for cross-platform app
                          development.
                        </li>
                        <li>
                          <strong>Ionic:</strong> : An HTML5 framework focused
                          on hybrid mobile apps using web technologies.
                        </li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header className={styles.accordHead}>
                      Q3 - How does code reusability work in cross-platform app
                      development?
                    </Accordion.Header>
                    <Accordion.Body>
                      <strong>Answer - </strong> Code reusability in
                      cross-platform development leverages a single codebase to
                      target multiple platforms. Shared business logic and UI
                      components can be reused, reducing repetitive code writing
                      and maintenance requirements.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header className={styles.accordHead}>
                      Q4 - Can you develop games using cross-platform app
                      development frameworks?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        <strong>Answer - </strong> Yes, frameworks like Unity
                        and Unreal Engine are specifically designed for
                        cross-platform game development, enabling the creation
                        of complex and high-performance games for multiple
                        platforms.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header className={styles.accordHead}>
                      Q5 - What is the difference between cross-platform app
                      development and hybrid app development?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        <strong>Answer - </strong>
                      </p>
                      <ul className="mb-5">
                        <li>
                          <strong>Cross-Platform App Development: </strong>{" "}
                          Focuses on creating apps that can run on multiple
                          platforms from a single codebase, often compiled to
                          native code.
                        </li>
                        <li>
                          <strong>Hybrid App Development: </strong> Combines web
                          technologies (HTML, CSS, JavaScript) wrapped in a
                          native container, running via a web view, making it
                          more limited in accessing native features.
                        </li>
                        <li>
                          <strong>Consistency:</strong> Ensures a consistent
                          user experience across different devices.
                        </li>
                        <li>
                          <strong>Code Reusability: </strong> : Large portions
                          of the code can be reused, reducing repetitive tasks.
                        </li>
                      </ul>
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

export default CrossPlatformDevelopment;
