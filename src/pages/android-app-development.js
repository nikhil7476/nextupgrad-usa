import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import TestForms from "@/components/WebsiteForm";
import styles from "@/styles/Enterprise.module.css";
import { Col, Row, Container, Tab, Nav, Accordion } from "react-bootstrap";
import { BsFillPatchQuestionFill } from "react-icons/bs";

function AndroidAppDevelopment() {
  return (
    <>
      <Head>
        <title>
          Android App Development Services | Custom Mobile Solutions
        </title>
        <meta
          name="title"
          content="Android App Development Services | Custom Mobile Solutions"
        />
        <meta
          name="description"
          content="Professional Android app development services for innovative, secure, and scalable mobile solutions. Empower your business with custom apps!"
        />
      </Head>
      <div className={styles.enterprise}>
        <section className={styles.enterpriseBnr}>
          <Container>
            <Row className={`justify-content-between ${styles.bannerRow}`}>
              <Col className="col-md-6 align-content-center">
                <h1>
                  Top-Rated <span>Android App</span> Development
                </h1>
                <p>
                  We transform concepts into high-performance Android
                  applications, delivering feature-rich solutions with top-tier
                  functionality. As a leading Android app development company,
                  we serve various industries by providing complete development
                  services, from design and coding to quality assurance and
                  maintenance. Our customized approach ensures clients
                  experience a twofold increase in ROI, driving sustained
                  business growth.
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
                  title: "Limited Technical Expertise",
                  description1:
                    "SMEs and startups often struggle to find skilled Android developers or experienced technical teams to build high-quality apps. This forces them to rely on less reliable options like cheap solutions or freelancers, which can lead to poor app quality, bugs, and performance issues. Without the right help, their ideas often fall short. ",
                },
                {
                  title: "Budget Constraints",
                  description1:
                    "Budget is a big challenge for startups building Android apps. Hiring a full-time team or working with big agencies is often too expensive. This forces many to cut corners, delay their projects, or hire cheap developers. The result? Poor-quality apps that can fail to compete in today’s fast-moving market.",
                },
                {
                  title: "Time-to-Market Pressure",
                  description1:
                    "Fast-moving industries need apps launched quickly to stay ahead, but small businesses and startups often face delays. Slow development can mean missing out on big opportunities, frustrating team members, and watching competitors launch similar apps first, taking the customers and market share you worked hard to target.",
                },
                {
                  title: "Complex Integration Needs",
                  description1:
                    "Startups often need their Android apps to work smoothly with tools they already use, like CRMs, ERPs, or payment systems. But without the right expertise or planning, things can go wrong—apps might crash, data won’t sync properly, or processes won’t run automatically. This slows everything down and hurts efficiency.",
                },
                {
                  title: "User Experience Challenges",
                  description1:
                    "Designing an Android app that’s easy to use can be tough for small businesses. Without skilled UI/UX designers, many apps end up confusing or frustrating users. This leads to high uninstall rates, bad reviews, and unhappy customers. If you’re struggling with this, you're not alone—creating a smooth, user-friendly experience is key to keeping users engaged and coming back for more.",
                },
                {
                  title: "Post-Launch Maintenance",
                  description1:
                    "Many startups forget that keeping their Android apps running smoothly after launch is just as important as building them. Regular bug fixes, OS updates, security patches, and adding new features all need ongoing attention and investment. If this is ignored, apps can quickly become outdated, full of issues, and fail to meet user expectations. Planning for this maintenance is key to keeping your app successful long-term.",
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
            <Row className="mb-4">
              <Col>
                <h2>
                  <span>Services</span>
                  <br />
                  iOS App Development Services We Offer
                </h2>
                <p>
                  NextUpgrad is an award-winning Android app development company
                  specializing in customized mobile app development to help grow
                  your business. Our team, skilled in various tech stacks like
                  Java, Kotlin, and XML, delivers top-notch development
                  services.
                  <br />
                  We offer comprehensive and robust Android app development
                  services, including:
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
                            App Development Consulting
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="second"
                            className={styles.tabLinkText}
                          >
                            Android App UI/UX Design
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="third"
                            className={styles.tabLinkText}
                          >
                            Android App Development
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="fourth"
                            className={styles.tabLinkText}
                          >
                            Testing and Development
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="fifth"
                            className={styles.tabLinkText}
                          >
                            Android App Porting Services
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="Sixth"
                            className={styles.tabLinkText}
                          >
                            Support and Maintenance
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={8} className={styles.delTabCont}>
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <h3>App Development Consulting</h3>
                          <p>
                            Our iOS app developers are experts who use the
                            latest tools to build apps that work seamlessly
                            across all Apple devices, like iPhones, iPads, and
                            Macs. Whether {"you're"} running a small business or
                            a fast-growing startup, we make sure your app is
                            strong, user-friendly, and ready to impress your
                            customers!
                          </p>
                          <p>Our Services Include:</p>
                          <Row className="mb-4">
                            <Col md={6}>
                              <ol style={{ listStylePosition: "inside" }}>
                                <li>Business Requirement Analysis</li>
                                <li>Market and Competitor Analysis</li>
                              </ol>
                            </Col>
                            <Col md={6}>
                              <ol
                                start={3}
                                style={{ listStylePosition: "inside" }}
                              >
                                <li>Proof-of-Concept Service</li>
                                <li>Digital Transformation Consulting</li>
                              </ol>
                            </Col>
                          </Row>
                          <Link
                            href="#"
                            title="Send Us A Proposal"
                            className={styles.ctaBtn}
                          >
                            Send Us A Proposal
                          </Link>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <h3> Android App UI/UX Design</h3>
                          <p>
                            Our team specializes in creating custom Android app
                            development with exceptional UI/UX architecture and
                            innovative designs for a variety of industries. We
                            deliver robust and scalable apps that provide a
                            seamless user experience across all Android devices
                            and the latest OS versions.
                          </p>
                          <p>Our Services Include:</p>
                          <Row className="mb-4">
                            <Col md={6}>
                              <ol style={{ listStylePosition: "inside" }}>
                                <li>App Architecture Design</li>
                                <li>UI/UX Consulting</li>
                              </ol>
                            </Col>
                            <Col md={6}>
                              <ol
                                start={3}
                                style={{ listStylePosition: "inside" }}
                              >
                                <li>MVP Development</li>
                                <li>App UI/UX Design Services</li>
                              </ol>
                            </Col>
                          </Row>
                          <Link
                            href="#"
                            title="Send Us A Proposal"
                            className={styles.ctaBtn}
                          >
                            Send Us A Proposal
                          </Link>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <h3> Android App Development</h3>
                          <p>
                            Our skilled Android developers can increase your app
                            development strategy by creating customized
                            solutions that add significant value to your brand.
                            We specialize in developing custom apps across
                            various sectors, including business, IPTV,
                            healthcare, and travel.
                          </p>
                          <p>Our Services Include:</p>
                          <Row className="mb-4">
                            <Col md={6}>
                              <ol style={{ listStylePosition: "inside" }}>
                                <li>Custom App Development</li>
                                <li>API Integration Services</li>
                              </ol>
                            </Col>
                            <Col md={6}>
                              <ol
                                start={3}
                                style={{ listStylePosition: "inside" }}
                              >
                                <li>Android Widge Development</li>
                                <li>Technology Consulting Services</li>
                              </ol>
                            </Col>
                          </Row>
                          <Link
                            href="#"
                            title="Send Us A Proposal"
                            className={styles.ctaBtn}
                          >
                            Send Us A Proposal
                          </Link>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fourth">
                          <h3>Testing and Development</h3>
                          <p>
                            Whether launching an Android app development for
                            tablets, wearable devices, or smart TVs, we ensure a
                            seamless user experience and optimal performance
                            across all Android platforms. Our end-to-end testing
                            and deployment services facilitate a smooth app
                            development process.
                          </p>
                          <p>Our Services Include:</p>
                          <Row className="mb-4">
                            <Col md={6}>
                              <ol style={{ listStylePosition: "inside" }}>
                                <li>App Testing Services</li>
                                <li>Security Testing Services</li>
                              </ol>
                            </Col>
                            <Col md={6}>
                              <ol
                                start={3}
                                style={{ listStylePosition: "inside" }}
                              >
                                <li>Play Store Optimization Services</li>
                                <li>Cloud Integration Services</li>
                              </ol>
                            </Col>
                          </Row>
                          <Link
                            href="#"
                            title="Send Us A Proposal"
                            className={styles.ctaBtn}
                          >
                            Send Us A Proposal
                          </Link>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fifth">
                          <h3> Android App Porting Services</h3>
                          <p>
                            Our team of app development experts specializes in
                            porting your iOS and other applications to custom
                            Android apps equipped with the latest features and
                            aesthetic designs. Migrate your existing app to the
                            Android platform with our top-notch Android app
                            porting services to boost your revenue.
                          </p>
                          <p>
                            As one of the leading Android development companies,
                            we offer comprehensive services to ensure your app
                            excels in the competitive market. Trust our
                            proficiency in Android app development to provide
                            you with an edge.
                          </p>
                          <p>Our Services Include:</p>
                          <Row className="mb-4">
                            <Col md={6}>
                              <ol style={{ listStylePosition: "inside" }}>
                                <li>App Porting Services</li>
                                <li>Data Migration Services</li>
                              </ol>
                            </Col>
                            <Col md={6}>
                              <ol
                                start={3}
                                style={{ listStylePosition: "inside" }}
                              >
                                <li>Tech Stack Intraporting</li>
                                <li>Web to App Development</li>
                              </ol>
                            </Col>
                          </Row>
                          <Link
                            href="#"
                            title="Send Us A Proposal"
                            className={styles.ctaBtn}
                          >
                            Send Us A Proposal
                          </Link>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Sixth">
                          <h3>Support and Maintenance</h3>
                          <p>
                            As a leading Android app development company,{" "}
                            {"we're"}
                            here to keep your app fresh and in line with the
                            latest trends. With our Android app support and
                            maintenance services, you can easily add new
                            features, update existing ones, test for bugs, and
                            switch to the newest technologies.
                          </p>
                          <p>Here’s what we offer:</p>
                          <Row className="mb-4">
                            <Col md={6}>
                              <ol style={{ listStylePosition: "inside" }}>
                                <li>Switch to New Technology</li>
                                <li>Add and Update Features</li>
                              </ol>
                            </Col>
                            <Col md={6}>
                              <ol
                                start={3}
                                style={{ listStylePosition: "inside" }}
                              >
                                <li>Improve Look and Feel</li>
                                <li>Test and Maintain Your App</li>
                              </ol>
                            </Col>
                          </Row>
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
            <Row className="mb-4">
              <Col>
                <h2>
                  <span>Results</span>
                  <br />
                  Results {"You’ll"} Get with Android App Development at
                  NextUpgrad
                </h2>
                <p>
                  At NextUpgrad, master Android app development with hands-on
                  projects, expert mentorship, and a comprehensive curriculum in
                  Java, Kotlin, UI/UX design, and backend integration. Elevate
                  your tech career today!
                </p>
              </Col>
            </Row>
            <Row className={styles.resultRow}>
              <Col className="col-md-6">
                <div className={styles.resultCard}>
                  <h3>Stunning UI/UX Designs</h3>
                  <p>
                    Our Android apps are crafted with sleek, visually appealing
                    interfaces that captivate users at first glance. Every
                    design is carefully curated to ensure seamless navigation,
                    delivering an intuitive experience that keeps users engaged
                    and returning for more.
                  </p>
                </div>
              </Col>
              <Col className="col-md-6 align-content-center">
                <div>
                  <h3>Scalable Architecture</h3>
                  <p>
                    Our development ensures your app is built for the future.
                    With scalable architecture, your Android app can handle
                    increased user traffic, additional features, and business
                    growth without any performance lags or disruptions.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className={styles.resultRow}>
              <Col className="col-md-6 align-content-center">
                <div>
                  <h3>Lightning-Fast Performance</h3>
                  <p>
                    We optimize every app for speed and reliability, delivering
                    a lag-free, high-performance experience. Whether users are
                    scrolling, clicking, or streaming, they’ll enjoy a smooth,
                    lightning-fast interaction every time.
                  </p>
                </div>
              </Col>
              <Col className="col-md-6 align-content-center">
                <div className={styles.resultCard}>
                  <h3>Custom Integrations</h3>
                  <p>
                    From payment gateways to third-party APIs and advanced
                    features, our custom integrations are tailored to your
                    unique business needs. We ensure everything works seamlessly
                    together to enhance functionality and provide a unified user
                    experience.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col className="col-md-6">
                <div className={styles.resultCard}>
                  <h3>End-to-End Security</h3>
                  <p>
                    Your app will come equipped with advanced security measures,
                    including encryption, secure authentication, and data
                    protection. We prioritize compliance and privacy to
                    safeguard both user data and your business integrity.
                  </p>
                </div>
              </Col>
              <Col className="col-md-6 align-content-center">
                <div>
                  <h3>Data-Driven Insights</h3>
                  <p>
                    Gain deep insights into user behavior and app performance
                    with built-in analytics tools. Track engagement, optimize
                    features, and make data-driven decisions to continuously
                    improve your app and meet business goals.
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
            <Row className="mb-4">
              <Col>
                <h2>
                  <span>Process</span>
                  <br />
                  Our process: Effortless, Smooth, and Hassle-Free!
                </h2>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col className="col-md-4">
                <div className={styles.resultCard}>
                  <h3>Discuss Your Requirements</h3>
                  <p>
                    {"Let's"} begin by discussing your goals for your Android
                    app, focusing on the best engagement model for your
                    business.
                    {"We'll"} also review your budget, timeline, and
                    requirements.
                  </p>
                </div>
              </Col>
              <Col className="col-md-4 align-content-center">
                <div>
                  <h3>Plan and Team Building</h3>
                  <p>
                    Once we decide on the approach, {"we'll"} select the ideal
                    Android developers and team members. They will either build
                    your app independently or collaborate closely with your
                    internal team.
                  </p>
                </div>
              </Col>
              <Col className="col-md-4">
                <div className={styles.resultCard}>
                  <h3>Get to Work</h3>
                  <p>
                    Upon assembling your team, we will promptly start the
                    project. Regardless of the engagement model you select, you
                    will maintain oversight. We will keep you fully informed
                    throughout the development process.
                  </p>
                </div>
              </Col>
            </Row>
            {/* <Row className="mb-5">
                            <Col className="col-md-4 align-content-center">
                                <div>
                                    <h3>Assembling the Development Team</h3>
                                    <p>
                                        We provide you with an experienced team of project managers,
                                        engineers, UI/UX designers, and QA engineers. Your project
                                        begins with a core team, and we will inform you of any team
                                        changes as your app progresses. You can scale the team up or
                                        down based on your needs.
                                    </p>
                                </div>
                            </Col>
                            <Col className="col-md-4">
                                <div className={styles.resultCard}>
                                    <h3>Software Testing</h3>
                                    <p>
                                        Our QA engineers conduct thorough tests to ensure your app
                                        meets high-quality standards. We use Xcode’s XCTest
                                        framework for automated unit and snapshot tests, and we
                                        manually examine your iOS app with tools like TestFlight and
                                        Firebase App Distribution for various environments.
                                    </p>
                                </div>
                            </Col>
                            <Col className="col-md-4 align-content-center">
                                <div>
                                    <h3>iOS App Launch and Maintenance</h3>
                                    <p>
                                        Our team optimizes your iOS app for the App Store before its
                                        release. After launch, we work closely with you to monitor
                                        performance, offer ongoing support, and release regular
                                        updates to fix bugs, enhance performance, and add new
                                        features as needed.
                                    </p>
                                </div>
                            </Col>
                        </Row> */}
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
            <Row className="mb-4">
              <Col>
                <h2>
                  <span>Why Us</span>
                  <br />
                  Why Choose Android App Developers From NextUpgrad?
                </h2>
                <p>
                  Our unique approach to Android app development is defined by a
                  comprehensive strategy and a genuine commitment to user
                  satisfaction.
                </p>
              </Col>
            </Row>
            <Row className={styles.resultRow}>
              <Col className="col-md-6">
                <div className={styles.resultCard}>
                  <h3>Full-Cycle App Development Company</h3>
                  <p>
                    We use an agile development methodology where our
                    developers, designers, and strategists work together
                    seamlessly. This full-cycle process enables us to thoroughly
                    explore and utilize the Android architecture.
                  </p>
                </div>
              </Col>
              <Col className="col-md-6 align-content-center">
                <div>
                  <h3>Experienced Android Developers</h3>
                  <p>
                    Our developers bring years of technical expertise to craft
                    tailored strategies for each client. This knowledge-driven
                    approach enables businesses to achieve scalable growth.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className={styles.resultRow}>
              <Col className="col-md-6 align-content-center">
                <div>
                  <h3>Stellar Support</h3>
                  <p>
                    At NextUpgrad, we provide exceptional post-launch support
                    for your application. Our goal is to ensure your users
                    remain engaged and satisfied, so you continue to choose us
                    for ongoing support.
                  </p>
                </div>
              </Col>
              <Col className="col-md-6 align-content-center">
                <div className={styles.resultCard}>
                  <h3>AI-Driven Workflow</h3>
                  <p>
                    Our team of Android developers leverages AI-based tools to
                    simplify application complexities, delivering services that
                    exceed user expectations.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col className="col-md-6">
                <div className={styles.resultCard}>
                  <h3>Reliable Service and Seamless Delivery</h3>
                  <p>
                    We are dedicated to providing every client with sincere and
                    reliable service. Each project is executed with commitment
                    and integrity, ensuring trustworthy relationships with every
                    customer.
                  </p>
                </div>
              </Col>
              <Col className="col-md-6 align-content-center">
                <div>
                  <h3>Trusted by People Like You</h3>
                  <p>
                    We adapt to your needs with flexibility, respond quickly and
                    informatively, and prioritize direct communication for
                    regular updates. This approach instills confidence in
                    businesspeople like you.
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
        <section className={styles.faqs}>
          <Container>
            <Row className="mb-4">
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
                      Q1 - How long does it take to develop an Android app?
                    </Accordion.Header>
                    <Accordion.Body>
                      <strong>Answer - </strong>The timeline for developing an
                      iOS application can vary significantly depending on the
                      complexity of the app, the features required, and the
                      resources available. On average, a simple app with basic
                      functionality might take 2-3 months to develop, while more
                      complex applications with advanced features, custom UI/UX
                      designs, and integrations could take 6 months or longer.
                      <p>{"Here’s"} a breakdown of the process:</p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header className={styles.accordHead}>
                      Q2 - What programming languages are used for Android app
                      development?
                    </Accordion.Header>
                    <Accordion.Body>
                      <strong>Answer - </strong>The primary programming
                      languages for Android app development are Java and Kotlin.
                      Kotlin is now the preferred language recommended by Google
                      due to its conciseness and improved performance.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header className={styles.accordHead}>
                      Q3 - How can I test my Android app?
                    </Accordion.Header>
                    <Accordion.Body>
                      <strong>Answer - </strong> You can test your Android app
                      using a physical device or an emulator provided by Android
                      Studio. Additionally, you can use automated testing tools
                      like Espresso and UI Automator.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header className={styles.accordHead}>
                      Q4 - What are the key components of an Android
                      application?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        <strong>Answer - </strong>The key components of an
                        Android application include activities (single screen
                        with a user interface), services (background tasks),
                        content providers (data management between apps),
                        broadcast receivers (handle communication between
                        Android OS and apps), and intent (communication between
                        components).
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header className={styles.accordHead}>
                      Q5 - How do I handle different screen sizes in Android app
                      development?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        <strong>Answer - </strong>The key components of an
                        Android application include activities (single screen
                        with a user interface), services (background tasks),
                        content providers (data management between apps),
                        broadcast receivers (handle communication between
                        Android OS and apps), and intent (communication between
                        components).
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

export default AndroidAppDevelopment;
