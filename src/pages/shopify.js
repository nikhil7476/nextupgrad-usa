import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import TestForms from "@/components/WebsiteForm";
import styles from "@/styles/Enterprise.module.css";
import { Col, Row, Container, Tab, Nav, Accordion } from "react-bootstrap";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { DiRuby, DiJavascript } from "react-icons/di";
import {
  SiZoho,
  SiOdoo,
  SiAsana,
  SiClickup,
  SiQuickbooks,
  SiXero,
  SiBookstack,
  SiSage,
} from "react-icons/si";
import {
  FaHtml5,
  FaPython,
  FaPhp,
  FaSalesforce,
  FaHubspot,
  FaJira,
  FaTrello,
} from "react-icons/fa";

function ShopifyDevelopment() {
  return (
    <>
      <Head>
        <title>Shopify | E-Commerce Development Services</title>
        <meta
          name="title"
          content="Shopify | E-Commerce Development Services"
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
                  Shopify E-Commerce Development Services for Your Business
                </h1>
                <p>
                  Is your current online store underperforming? Nextupgrad, a
                  Shopify web development company, can help. We tackle common
                  Shopify challenges like slow loading times, complex
                  integrations, and low conversion rates with customized
                  solutions that deliver real results. Let us optimize your
                  store for success.
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
                  Shopify Web Development Problems We Solve
                </h2>
                <p>
                  Here are some common problems faced in Shopify e-commerce
                  development:
                </p>
              </Col>
            </Row>
            <Row className={`mb-4 ${styles.probs}`}>
              {[
                {
                  title: "Shopify Store Integration issues",
                  description1:
                    " Integrating Shopify with a custom Ruby on Rails application requires building a bridge between the two platforms, often using Shopify's API. This can be challenging due to differing architectures and data structures, potentially leading to development complexities and maintenance overhead.",
                },
                {
                  title: "Multi-channel Selling Management",
                  description1:
                    "Selling across multiple channels (Amazon, eBay, etc.) requires synchronizing product listings, inventory, and orders, which can be difficult to manage without a dedicated multi-channel management tool. This can result in overselling, inaccurate inventory levels, and fulfillment issues.",
                },
                {
                  title: "ERP Integration",
                  description1:
                    "Connecting Shopify with an ERP system (like NetSuite or SAP) can be complex, involving custom code and data mapping to ensure smooth data exchange (orders, inventory, etc.). This can lead to integration errors and data inconsistencies if not handled carefully.",
                },
                {
                  title: "Getting Products on Store",
                  description1:
                    "Migrating a large product catalog or consistently adding new products to a Shopify store can be time-consuming and prone to errors, especially if product data is not well organized. This can delay store launch or hinder product updates.",
                },
                {
                  title: "Search Visibility Problems",
                  description1:
                    "Driving targeted traffic to a Shopify store requires a well-defined marketing strategy encompassing SEO, social media, paid advertising, and content marketing. Lack of a solid strategy can result in low website traffic and poor conversion rates.",
                },
                {
                  title: "Managing Marketplaces",
                  description1:
                    "Effectively managing listings, orders, and customer communication across multiple marketplaces (like Amazon and Etsy) can be complex and time-consuming. This can lead to missed orders, delayed shipping, and negative customer reviews if not managed efficiently.",
                },
                {
                  title: "Poor Site Performance",
                  description1:
                    "Slow loading times, unoptimized images, excessive apps, or a poorly chosen theme can significantly impact user experience. This leads to high bounce rates, lower search engine rankings, and ultimately, lost sales.",
                },
                {
                  title: "Theme Customization Limitations",
                  description1:
                    "While Shopify offers many themes, extensive customization can be challenging without coding knowledge. Clients may find it difficult to achieve a unique design that perfectly matches their brand.",
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
                      {problem.description1}
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
                  Nextupgrad can help you with the following Shopify E-Commerce
                  Development services
                </h2>
                <p>
                  Running an online store can be tough. Shopify makes it easier,
                  but sometimes you need a little extra help. {"That's"} where
                  Shopify E-commerce Development Services come in. At
                  Nextupgrad, we help you build, improve, and manage your
                  Shopify store so you can focus on selling. {"We're"} a team of
                  people who actually care about making your online business
                  work.
                  <br />
                  {"Here's"} what we offer:
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
                            Custom Shopify Store Design
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="second"
                            className={styles.tabLinkText}
                          >
                            Shopify Theme Customization
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="third"
                            className={styles.tabLinkText}
                          >
                            API Integration, Plug-In, and Module Management
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="fourth"
                            className={styles.tabLinkText}
                          >
                            Develop Shopify App
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="fifth"
                            className={styles.tabLinkText}
                          >
                            Migration to Shopify
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="Sixth"
                            className={styles.tabLinkText}
                          >
                            Shopify Maintenance and Support
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="Seventh"
                            className={styles.tabLinkText}
                          >
                            SEO and Marketing for Shopify
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col
                      sm={8}
                      className={`align-content-center ${styles.delTabCont}`}
                    >
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <h3 className="mb-4">Custom Shopify Store Design</h3>
                          <p className="mb-5">
                            Forget those generic, templated stores. We craft
                            unique online experiences that capture your{" "}
                            {"brand's"}
                            personality and resonate with your customers. We
                            start by getting to know you—your vision, your
                            audience, your goals. Then, we design a store that
                            not only looks stunning but also guides visitors
                            effortlessly through the buying process. {
                              "It's"
                            }{" "}
                            about creating a memorable experience that keeps
                            them coming back.
                          </p>
                          <div className="text-center">
                            <Link
                              href="#"
                              title="Send Us A Proposal"
                              className={styles.ctaBtn}
                            >
                              Send Us A Proposal
                            </Link>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <h3 className="mb-4">Shopify Theme Customization</h3>
                          <p className="mb-5">
                            Already have a theme but {"it's"} not quite you? We
                            can take it from good to great. {"We'll"} fine-tune
                            everything from colors and fonts to layouts and
                            functionalities, ensuring your store reflects your
                            brand perfectly. Think of us as your personal
                            Shopify stylists, giving your store the makeover it
                            deserves
                          </p>
                          <div className="text-center">
                            <Link
                              href="#"
                              title="Send Us A Proposal"
                              className={styles.ctaBtn}
                            >
                              Send Us A Proposal
                            </Link>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <h3 className="mb-4">
                            API Integration, Plug-In, and Module Management
                          </h3>
                          <p className="mb-5">
                            Connecting your store to other essential tools (like
                            payment gateways, shipping providers, and marketing
                            platforms) can be a technical headache. We handle
                            the heavy lifting, ensuring seamless integration and
                            smooth data flow. We also curate and manage the
                            right plug-ins and modules to enhance your{" "}
                            {"store's"}
                            functionality without bogging it down. {"It's"}{" "}
                            about making everything work together seamlessly, so
                            you
                            {"don't"} have to worry about the tech.
                          </p>
                          <div className="text-center">
                            <Link
                              href="#"
                              title="Send Us A Proposal"
                              className={styles.ctaBtn}
                            >
                              Send Us A Proposal
                            </Link>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fourth">
                          <h3 className="mb-4">Develop Shopify App</h3>
                          <p className="mb-5">
                            Need a feature that {"doesn't"} exist out of the
                            box? Our skilled developers at Nextupgrad can build
                            custom Shopify apps tailored to your specific needs.
                            Whether {"it's"} a small tweak or a complex
                            integration, we can bring your vision to life.{" "}
                            {"It's"} about giving your store the unique edge it
                            needs to stand out from the crowd.
                          </p>
                          <div className="text-center">
                            <Link
                              href="#"
                              title="Send Us A Proposal"
                              className={styles.ctaBtn}
                            >
                              Send Us A Proposal
                            </Link>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fifth">
                          <h3 className="mb-4">Migration to Shopify</h3>
                          <p className="mb-5">
                            Moving your store to Shopify from another platform?
                            {"We'll"} make it a smooth transition. We handle
                            everything – from migrating your product catalog and
                            customer data to ensuring a seamless switchover with
                            minimal downtime. {"It’s"} like moving house—
                            {"we’ll"} pack everything carefully and make sure it
                            arrives safe and sound at your new Shopify address.
                          </p>
                          <div className="text-center">
                            <Link
                              href="#"
                              title="Send Us A Proposal"
                              className={styles.ctaBtn}
                            >
                              Send Us A Proposal
                            </Link>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Sixth">
                          <h3 className="mb-4">
                            Shopify Maintenance and Support
                          </h3>
                          <p className="mb-5">
                            Running an online store is an ongoing process. We
                            offer maintenance and support packages to keep your
                            store running smoothly, address any technical
                            hiccups, and ensure everything stays up-to-date.
                            Think of us as your dedicated Shopify pit crew,
                            always ready to keep your store performing at its
                            best.
                          </p>
                          <div className="text-center">
                            <Link
                              href="#"
                              title="Send Us A Proposal"
                              className={styles.ctaBtn}
                            >
                              Send Us A Proposal
                            </Link>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Seventh">
                          <h3 className="mb-4">
                            SEO and Marketing for Shopify
                          </h3>
                          <p className="mb-5">
                            A beautiful store is nothing without visitors. We
                            can help you attract the right customers through
                            targeted SEO strategies and effective marketing
                            campaigns. {"We’ll"} help you get found by the
                            people who are actually looking for what you sell.
                          </p>
                          <div className="text-center">
                            <Link
                              href="#"
                              title="Send Us A Proposal"
                              className={styles.ctaBtn}
                            >
                              Send Us A Proposal
                            </Link>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={styles.services}>
          <Container>
            <Row className="mb-4">
              <Col>
                <h2>
                  <span>Technology</span>
                  <br />
                  Technology Expertise in Shopify e-Commerce Store Setup
                </h2>
                <p>
                  Our Shopify developers have the skills and experience needed
                  to build and grow your online store.
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
                            Programming Skills
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="second"
                            className={styles.tabLinkText}
                          >
                            Shopify CRM/ERP Integration
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="third"
                            className={styles.tabLinkText}
                          >
                            Shopify Project Management Tools
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="fourth"
                            className={styles.tabLinkText}
                          >
                            Shopify e-Commerce Accounting Tools
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col
                      sm={8}
                      className={`align-content-center ${styles.delTabCont}`}
                    >
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <h3 className="mb-4">Programming Skills</h3>
                          <div className={`mb-5 ${styles.tech}`}>
                            <DiRuby />
                            <DiJavascript />
                            <FaHtml5 />
                            <FaPython />
                            <FaPhp />
                          </div>
                          <div className="text-center">
                            <Link
                              href="#"
                              title="Send Us A Proposal"
                              className={styles.ctaBtn}
                            >
                              Send Us A Proposal
                            </Link>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <h3 className="mb-4">Shopify CRM/ERP Integration</h3>
                          <div className={`mb-5 ${styles.tech}`}>
                            <FaSalesforce />
                            <FaHubspot />
                            <SiZoho />
                            <SiOdoo />
                          </div>
                          <div className="text-center">
                            <Link
                              href="#"
                              title="Send Us A Proposal"
                              className={styles.ctaBtn}
                            >
                              Send Us A Proposal
                            </Link>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <h3 className="mb-4">
                            Shopify Project Management Tools
                          </h3>
                          <div className={`mb-5 ${styles.tech}`}>
                            <FaJira />
                            <FaTrello />
                            <SiAsana />
                            <SiClickup />
                          </div>
                          <div className="text-center">
                            <Link
                              href="#"
                              title="Send Us A Proposal"
                              className={styles.ctaBtn}
                            >
                              Send Us A Proposal
                            </Link>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fourth">
                          <h3 className="mb-4">
                            Shopify e-Commerce Accounting Tools
                          </h3>
                          <div className={`mb-5 ${styles.tech}`}>
                            <SiQuickbooks />
                            <SiXero />
                            <SiBookstack />
                            <SiSage />
                          </div>
                          <div className="text-center">
                            <Link
                              href="#"
                              title="Send Us A Proposal"
                              className={styles.ctaBtn}
                            >
                              Send Us A Proposal
                            </Link>
                          </div>
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
                  <span>Why Nextupgrad</span>
                  <br />
                  Why use Nextupgrad as your Shopify web development company
                </h2>
              </Col>
            </Row>
            <Row className={styles.resultRow}>
              <Col className="col-md-4">
                <div className={styles.resultCard}>
                  <h3>Comprehensive eCommerce Development Solutions</h3>
                  <p>
                    We handle every aspect of your Shopify store, from initial
                    design and development to custom Shopify app integrations
                    and ongoing support.
                  </p>
                </div>
              </Col>
              <Col className="col-md-4 align-content-center">
                <div>
                  <h3>Flexible Modes</h3>
                  <p>
                    We offer tailored engagement models to fit your specific
                    needs and budget, ensuring you get the right level of
                    support at the right price.
                  </p>
                </div>
              </Col>
              <Col className="col-md-4">
                <div className={styles.resultCard}>
                  <h3>Affordable Pricing</h3>
                  <p>
                    We provide competitive and transparent pricing, offering
                    exceptional value without compromising on quality or
                    expertise.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className={`mb-5 ${styles.resultRow}`}>
              <Col className="col-md-4 align-content-center">
                <div>
                  <h3>Consistent Project Reports</h3>
                  <p>
                    Stay informed every step of the way with regular progress
                    updates and open communication throughout the development
                    process.
                  </p>
                </div>
              </Col>
              <Col className="col-md-4">
                <div className={styles.resultCard}>
                  <h3>On-Time Delivery</h3>
                  <p>
                    {"We're"} committed to delivering your project on schedule,
                    ensuring a smooth and timely launch for your online store.
                  </p>
                </div>
              </Col>
              <Col className="col-md-4 align-content-center">
                <div>
                  <h3>Goal-Oriented Development</h3>
                  <p>
                    We focus on achieving your specific business objectives, and
                    building a Shopify store designed to drive conversions and
                    growth.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col className="col-md-4">
                <div className={styles.resultCard}>
                  <h3>24/7 Assistance</h3>
                  <p>
                    Our dedicated support team is available around the clock to
                    answer your questions and address any issues that may arise.
                  </p>
                </div>
              </Col>
              <Col className="col-md-4 align-content-center">
                <div>
                  <h3>Experienced Team</h3>
                  <p>
                    Our team of Shopify experts brings years of experience and a
                    deep understanding of the platform to every project.
                  </p>
                </div>
              </Col>
              <Col className="col-md-4">
                <div className={styles.resultCard}>
                  <h3>Tech-Oriented Approach</h3>
                  <p>
                    We stay ahead of the curve, leveraging the latest Shopify
                    technologies and best practices to maximize your {"store's"}
                    performance.
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
                  <span>Results</span>
                  <br />
                  What You Get with {"NextUpgrad's"} Shopify E-commerce
                  Development
                </h2>
                <p>
                  NextUpgrad can help you build your perfect Shopify store.
                  {"Here's"} what you get when you work with us:
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
                            A Store That Looks Great and Works Well
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="second"
                            className={styles.tabLinkText}
                          >
                            All the Features You Need to Sell
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="third"
                            className={styles.tabLinkText}
                          >
                            Help Getting Started and Growing Your Business
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={8} className={styles.delTabCont}>
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <h3>A Store That Looks Great and Works Well</h3>
                          <p>
                            {"We'll"} design a store that matches your brand and
                            is easy for customers to use. This means:
                          </p>
                          <ol className="mb-5">
                            <li>
                              <strong>Good Design:</strong> Your shopify store
                              will look professional and attractive.
                            </li>
                            <li>
                              <strong>Easy to Use:</strong> Customers can easily
                              find what {"they're"} looking for and buy it.
                            </li>
                            <li>
                              <strong>Works on All Devices:</strong> Your
                              shopify store will look good and work well on
                              phones, tablets, and computers.
                            </li>
                          </ol>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <h3>All the Features You Need to Sell</h3>
                          <p>
                            {"We'll"} set up all the important parts of your
                            online shopify store:
                          </p>
                          <ol className="mb-5">
                            <li>
                              <strong>Product Listings:</strong> {"We'll"} help
                              you show off your products with good pictures and
                              descriptions.
                            </li>
                            <li>
                              <strong>Shopping Cart:</strong> Customers can
                              easily add items to their cart and check out.
                            </li>
                            <li>
                              <strong>Payment Options:</strong> {"We'll"} set up
                              ways for customers to pay, like credit cards and
                              PayPal.
                            </li>
                            <li>
                              <strong>Shipping Options:</strong> {"We'll"} help
                              you set up shipping so you can send products to
                              your customers.
                            </li>
                          </ol>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <h3>
                            Help Getting Started and Growing Your Business
                          </h3>
                          <p>
                            We {"don't"} just build your store and leave. We
                            also help you:
                          </p>
                          <ol className="mb-5">
                            <li>
                              <strong>Set Up Your Store:</strong> {"We'll"} help
                              you get everything set up and ready to go.
                            </li>
                            <li>
                              <strong>Learn How to Manage Your Store:</strong>{" "}
                              {"We'll"} teach you how to add products, manage
                              orders, and do other important tasks.
                            </li>
                            <li>
                              <strong>Get Found Online:</strong> {"We'll"} help
                              you with basic search engine optimization (SEO) so
                              people can find your store on Google.
                            </li>
                          </ol>
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
            <Row className="mb-4">
              <Col>
                <h2>
                  <span>Process</span>
                  <br />
                  Nextupgrad Shopify Development Process
                </h2>
                <p>{"Here's"} how we build your Shopify store, step by step:</p>
              </Col>
            </Row>
            <Row className={styles.resultRow}>
              <Col className="col-md-4">
                <div className={styles.resultCard}>
                  <h3>1. Required Assessment</h3>
                  <p>
                    We start by talking to you to understand exactly what you
                    need. {"We'll"} ask questions about your business, your
                    products, and what you want your online store to do. This
                    helps us make a plan that fits you perfectly.
                  </p>
                </div>
              </Col>
              <Col className="col-md-4 align-content-center">
                <div>
                  <h3>2. Agreement on Service Model</h3>
                  <p>
                    Once we understand your needs, {"we'll"} agree on how{" "}
                    {"we'll"} work together. This includes what services{" "}
                    {"we'll"} provide, how much it will cost, and how long it
                    will take. {"We'll"} put everything in writing so everyone
                    is clear.
                  </p>
                </div>
              </Col>
              <Col className="col-md-4">
                <div className={styles.resultCard}>
                  <h3>3. Best Fit Source Deployment</h3>
                  <p>
                    This step is about choosing the best way to build your
                    store. We might use a pre-made Shopify theme and change it
                    to fit your needs, or we might build a custom design from
                    scratch. We choose the method {"that's"} best for your
                    budget and goals.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col className="col-md-4">
                <div className={styles.resultCard}>
                  <h3>4. Design and Deployment</h3>
                  <p>
                    This is where we actually build your store. {"We'll"} design
                    how it looks, set up all the features, and add your
                    products.
                    {"We'll"} make sure everything works correctly and looks
                    great.
                  </p>
                </div>
              </Col>
              <Col className="col-md-4 align-content-center">
                <div>
                  <h3>5. Testing and QA (Quality Assurance)</h3>
                  <p>
                    Before your store goes live, we test everything carefully.
                    We check to make sure all the links work, the checkout
                    process is smooth, and the store looks good on all devices.
                    This makes sure your customers have a good experience.
                  </p>
                </div>
              </Col>
              <Col className="col-md-4">
                <div className={styles.resultCard}>
                  <h3>6. Post Deployment Support</h3>
                  <p>
                    Even after your store is launched, {"we're"} still here to
                    help.
                    {"We'll"} provide support to answer your questions, fix any
                    problems, and help you keep your store running smoothly.
                    {"We're"} here to help you succeed.
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
                      Q1 - What payment gateways does Shopify support?
                    </Accordion.Header>
                    <Accordion.Body>
                      <strong>Answer - </strong>Shopify supports a wide range of
                      payment gateways, including its own Shopify Payments, as
                      well as popular options like PayPal, Stripe, and many
                      others specific to different regions. This allows
                      businesses to offer various payment methods to their
                      customers globally.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header className={styles.accordHead}>
                      Q2 - How much does Shopify cost?
                    </Accordion.Header>
                    <Accordion.Body>
                      <strong>Answer - </strong>Shopify offers various plans,
                      starting with the basic plan at $39/month (or $29 if
                      billed annually). More advanced plans with additional
                      features range up to $399/month, and Shopify Plus for
                      high-volume businesses starts at around $2,000/month.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header className={styles.accordHead}>
                      Q3 - Can I sell digital products on Shopify?
                    </Accordion.Header>
                    <Accordion.Body>
                      <strong>Answer - </strong>Yes, you can absolutely sell
                      digital products on Shopify. You can use the Digital
                      Downloads app (free for basic functionality) or other
                      similar apps from the Shopify App Store to deliver digital
                      files like ebooks, music, software, and online courses to
                      your customers.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header className={styles.accordHead}>
                      Q4 - How do I market my Shopify store?
                    </Accordion.Header>
                    <Accordion.Body>
                      <strong>Answer - </strong>To effectively market your
                      Shopify store, focus on driving targeted traffic and
                      converting visitors into customers. Utilize a mix of
                      strategies like search engine optimization (SEO), social
                      media marketing, email campaigns, and paid advertising to
                      reach your ideal audience and build brand awareness.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header className={styles.accordHead}>
                      Q5 - How do I set up a Shopify store?
                    </Accordion.Header>
                    <Accordion.Body>
                      <strong>Answer - </strong>Setting up a Shopify store
                      involves creating an account on Shopify, choosing a theme
                      for your {"store's"} design, and adding your products,
                      payment methods, and shipping details. Shopify provides a
                      user-friendly interface to guide you through these steps.
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

export default ShopifyDevelopment;
