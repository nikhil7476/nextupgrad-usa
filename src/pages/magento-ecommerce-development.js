import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import TestForms from "@/components/WebsiteForm";
import styles from "@/styles/Enterprise.module.css";
import { Col, Row, Container, Tab, Nav, Accordion } from "react-bootstrap";
import { BsFillPatchQuestionFill } from "react-icons/bs";

function MagentoDevelopment() {
  return (
    <>
      <Head>
        <title>Magento E-commerce Development Services</title>
        <meta name="title" content="Magento E-commerce Development Services" />
        <meta
          name="description"
          content="Discover expert Magento e-commerce development services to build robust, scalable, and high-performing online stores tailored to your business needs."
        />
      </Head>
      <div className={styles.enterprise}>
        <section className={styles.enterpriseBnr}>
          <Container>
            <Row className={`justify-content-between ${styles.bannerRow}`}>
              <Col className="col-md-6 align-content-center">
                <h1>
                  Grow Your Business with <span>Magento E-commerce</span>{" "}
                  Development
                </h1>
                <p>
                  Need a special online store that fits your unique business?
                  Magento (Adobe Commerce) lets you build exactly what you need.
                  {"NextUpgrad's"} Magento experts can create a store with the
                  features and design you want, helping you stand out from the
                  competition.
                </p>
                <Link href="#" title="Call Us" className={styles.ctaBtn}>
                  Book A Free Consultation
                </Link>
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
                  Common Problems with Magento {"(Adobe Commerce)"} e-Commerce
                  Development
                </h2>
              </Col>
            </Row>
            <Row className={`"mb-5" ${styles.probs}`}>
              {[
                {
                  title: "It Can Be Expensive",
                  description:
                    "Magento can cost a lot of money. There's the cost of the software itself (especially for Adobe Commerce), and then there's the cost of building and maintaining the store. This can be a problem for small businesses with limited budgets.",
                },
                {
                  title: "It Needs Technical Skills",
                  description:
                    "Magento is complex. You usually need skilled developers to build and manage a Magento store. Finding and hiring these developers can be hard and expensive. Even simple changes sometimes need a developer.",
                },
                {
                  title: "It Can Be Slow",
                  description:
                    "If not set up correctly, Magento stores can be slow to load. Slow websites make customers leave. This means you lose sales. Fixing speed problems needs technical knowledge.",
                },
                {
                  title: "Updates Can Be Tricky",
                  description:
                    "Magento releases updates regularly. These updates are important for security and new features. But updating Magento can be complicated and sometimes break things. You often need a developer to do updates safely.",
                },
                {
                  title: "Finding the Right Developer Can Be Hard",
                  description:
                    "Magento is complex, finding good developers or agencies to help can be difficult. Not everyone who says they know Magento really does. Choosing the wrong people can lead to problems.",
                },
                {
                  title: "Security Concerns",
                  description:
                    "Magento is a popular platform, it is often targeted by hackers. It's crucial to keep Magento updated with the latest security patches and follow security best practices to protect the store from attacks.",
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
            <Row className="mb-4">
              <Col>
                <h2>
                  <span>Services</span>
                  <br />
                  Nextupgrad Magento E-commerce Development Services
                </h2>
                <p>
                  Boost your online store with {"Nextupgrad's"} expert Magento
                  e-commerce development services. Custom solutions for
                  seamless, scalable, and secure shopping experiences.
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
                            Magento Store Setup and Configuration
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="second"
                            className={styles.tabLinkText}
                          >
                            Magento Website Design and Development
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="third"
                            className={styles.tabLinkText}
                          >
                            Magento Extension Development and Integration
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="fourth"
                            className={styles.tabLinkText}
                          >
                            Magento Upgrades and Maintenance
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="fifth"
                            className={styles.tabLinkText}
                          >
                            Magento SEO {"(Search Engine Optimisation)"}
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="sixth"
                            className={styles.tabLinkText}
                          >
                            Migration to Magento
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="seven"
                            className={styles.tabLinkText}
                          >
                            Magento Page Speed Optimization
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
                          <h3 className="mb-4">
                            Magento Store Setup and Configuration
                          </h3>
                          <p className="mb-4">
                            Setting up a Magento store can be tricky. Nextupgrad
                            helps you build your online shop from the ground up.
                            We handle everything from installing Magento to
                            setting up your products, payment methods, and
                            shipping options, so you can start selling quickly.
                            We make sure your store is ready to handle customers
                            and sales. We ensure,
                          </p>
                          <ol className="mb-5">
                            <li>
                              Installation and configuration of Magento software
                            </li>
                            <li>Setting up product catalogs and inventory</li>
                            <li>
                              Configuring payment gateways and shipping methods
                            </li>
                            <li>Ensuring store readiness for launch</li>
                          </ol>
                          <Link
                            href="/contact-us"
                            title="Contact Now"
                            className={styles.ctaBtn}
                          >
                            Contact Now !
                          </Link>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <h3 className="mb-4">
                            Magento Website Design and Development
                          </h3>
                          <p className="mb-4">
                            Your {"store's"} look is important. Nextupgrad
                            designs and builds custom themes for your Magento
                            store. We make sure your website looks great and is
                            easy to use on computers, tablets, and phones. A
                            good theme makes shopping easy and keeps customers
                            coming back. We ensure,
                          </p>
                          <ol className="mb-5">
                            <li>Custom theme design tailored to your brand</li>
                            <li>
                              Responsive design for optimal viewing on all
                              devices
                            </li>
                            <li>User-friendly interface for easy navigation</li>
                            <li>Focus on visual appeal and user experience</li>
                          </ol>
                          <Link
                            href="/contact-us"
                            title="Contact Now"
                            className={styles.ctaBtn}
                          >
                            Contact Now !
                          </Link>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <h3 className="mb-4">
                            Magento Extension Development and Integration
                          </h3>
                          <p className="mb-4">
                            Sometimes you need extra features. Nextupgrad builds
                            and adds extensions to your Magento store. These
                            extensions can add things like better search,
                            special discounts, or connections to other services.
                            We make sure these additions work smoothly with your
                            store.
                          </p>
                          <ol className="mb-5">
                            <li>Development of custom Magento extensions</li>
                            <li>Integration of third-party extensions</li>
                            <li>
                              Adding features like enhanced search, promotions,
                              and integrations
                            </li>
                            <li>
                              Ensuring seamless functionality with your store
                            </li>
                          </ol>
                          <Link
                            href="/contact-us"
                            title="Contact Now"
                            className={styles.ctaBtn}
                          >
                            Contact Now !
                          </Link>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fourth">
                          <h3 className="mb-4">
                            Magento Upgrades and Maintenance
                          </h3>
                          <p className="mb-4">
                            Keeping your store up-to-date is important for
                            security and performance. Nextupgrad handles Magento
                            upgrades and maintenance. We make sure your store
                            has the latest features and is protected from
                            problems. Regular maintenance keeps your store
                            running smoothly.We focus on,
                          </p>
                          <ol className="mb-5">
                            <li>Regular Magento version upgrades</li>
                            <li>Security patching and vulnerability fixes</li>
                            <li>Performance monitoring and optimization</li>
                            <li>
                              Ongoing maintenance to ensure smooth operation
                            </li>
                          </ol>
                          <Link
                            href="/contact-us"
                            title="Contact Now"
                            className={styles.ctaBtn}
                          >
                            Contact Now !
                          </Link>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fifth">
                          <h3 className="mb-4">
                            Magento SEO {"(Search Engine Optimisation)"}
                          </h3>
                          <p className="mb-4">
                            Getting found online is key. Nextupgrad helps your
                            Magento store rank higher in search results like
                            Google. We optimize your website so more people can
                            find your products. This means more customers and
                            more sales. We focus on:
                          </p>
                          <ol className="mb-5">
                            <li>
                              On-page optimization of website content and
                              structure
                            </li>
                            <li>Keyword research and targeting</li>
                            <li>Technical SEO improvements</li>
                            <li>
                              Strategies for improved search engine rankings
                            </li>
                          </ol>
                          <Link
                            href="/contact-us"
                            title="Contact Now"
                            className={styles.ctaBtn}
                          >
                            Contact Now !
                          </Link>
                        </Tab.Pane>
                        <Tab.Pane eventKey="sixth">
                          <h3 className="mb-4">Migration to Magento</h3>
                          <p className="mb-4">
                            Moving your store to Magento can be complex.
                            Nextupgrad helps you move your existing online store
                            to the Magento platform. We make sure all your
                            products, customers, and orders are moved safely and
                            correctly. We make the move as smooth as possible.
                            We focus on:
                          </p>
                          <ol className="mb-5">
                            <li>
                              Migration of products, customers, and order data
                            </li>
                            <li>
                              Ensuring data integrity during the migration
                              process
                            </li>
                            <li>Minimizing downtime during the migration</li>
                            <li>Post-migration testing and verification</li>
                          </ol>
                          <Link
                            href="/contact-us"
                            title="Contact Now"
                            className={styles.ctaBtn}
                          >
                            Contact Now !
                          </Link>
                        </Tab.Pane>
                        <Tab.Pane eventKey="seven">
                          <h3 className="mb-4">
                            Magento Page Speed Optimization
                          </h3>
                          <p className="mb-4">
                            A fast website is important. Nextupgrad speeds up
                            your Magento store. We make sure your pages load
                            quickly so customers {"don't"} get frustrated and
                            leave. A fast site makes for happier customers and
                            better search rankings. We focus on:
                          </p>
                          <ol className="mb-5">
                            <li>Image optimization and compression</li>
                            <li>Code optimization and minification </li>
                            <li>Server-side caching and performance tuning</li>
                            <li>
                              Regular performance monitoring and improvement
                            </li>
                          </ol>
                          <Link
                            href="/contact-us"
                            title="Contact Now"
                            className={styles.ctaBtn}
                          >
                            Contact Now !
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
                  Get a High-Performing & Result Oriented Magento E-commerce
                  Store
                </h2>
              </Col>
            </Row>
            <Row className={styles.resultRow}>
              <Col className="col-md-6 align-content-center">
                <div>
                  <h3>A Fully Functional Online Store, Ready to Sell</h3>
                  <p>
                    We build your store from the ground up, providing a platform
                    to showcase and sell your products online. {"It's"} like
                    having your very own digital storefront, accessible to
                    customers 24 hours a day, 7 days a week.
                  </p>
                </div>
              </Col>
              <Col className="col-md-6">
                <div className={styles.resultCard}>
                  <h3>A Professional and Attractive Store Design</h3>
                  <p>
                    We design your store to reflect your brand and create a
                    positive first impression. A visually appealing and
                    easy-to-navigate store encourages customers to explore and
                    make purchases.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className={styles.resultRow}>
              <Col className="col-md-6">
                <div className={styles.resultCard}>
                  <h3>User-Friendly Website Experience on All Devices</h3>
                  <p>
                    We ensure your website is easy to navigate and use,
                    regardless of whether customers are using a desktop
                    computer, tablet, or smartphone. A smooth and consistent
                    user experience is crucial for customer satisfaction and
                    conversions.
                  </p>
                </div>
              </Col>
              <Col className="col-md-6 align-content-center">
                <div>
                  <h3>
                    Custom Features and Integrations to Enhance Your Business
                  </h3>
                  <p>
                    If you require specific functionalities or connections to
                    other services, we can develop and integrate custom features
                    and extensions. This helps streamline your operations and
                    provide a better customer experience.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className={styles.resultRow}>
              <Col className="col-md-6 align-content-center">
                <div>
                  <h3>Improved Online Visibility and Search Engine Ranking</h3>
                  <p>
                    We optimize your Magento store to rank higher in search
                    engine results, making it easier for potential customers to
                    find your business online. Increased visibility translates
                    to more traffic and potential sales.
                  </p>
                </div>
              </Col>
              <Col className="col-md-6">
                <div className={styles.resultCard}>
                  <h3>A Secure and Reliable Online Platform</h3>
                  <p>
                    We prioritize the security of your store and customer data,
                    implementing robust security measures to protect against
                    online threats. A secure store builds trust and encourages
                    customers to make purchases.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col className="col-md-6">
                <div className={styles.resultCard}>
                  <h3>Ongoing Support and Maintenance for Smooth Operations</h3>
                  <p>
                    We provide ongoing support and maintenance services to
                    ensure your store runs smoothly and efficiently. This
                    includes regular updates, security patches, and technical
                    assistance when you need it.
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
                  Nextupgrad Magento E-commerce Development Process
                </h2>
                <p>
                  At Nextupgrad, we follow a simple and clear process to build
                  your Magento online store. Our goal is to make it easy for you
                  to understand how we work and what to expect at each step.
                </p>
              </Col>
            </Row>
            <Row className={styles.resultRow}>
              <Col className="col-md-4">
                <div className={styles.resultCard}>
                  <h3>Discovery & Planning</h3>
                  <p>
                    We start by understanding your needs. We ask questions about
                    your products, customers, and the design you want for your
                    store. Once we know what you need, we create a detailed
                    plan. This plan includes the features your store will have,
                    how it will look, the time it will take, and the cost.
                  </p>
                </div>
              </Col>
              <Col className="col-md-4 align-content-center">
                <div>
                  <h3>Design & Prototyping</h3>
                  <p>
                    Next, we create a design for your store. This is like making
                    a picture of what your website will look like before we
                    start building it. This helps you see how your store will
                    look and feel. We focus on making it attractive, easy to
                    use, and accessible on phones, tablets, and computers.
                  </p>
                </div>
              </Col>
              <Col className="col-md-4">
                <div className={styles.resultCard}>
                  <h3>Development</h3>
                  <p>
                    After the design is ready, we start building your store. Our
                    team sets up all the features and functions you need. We
                    make sure everything is working as planned and that your
                    store is built to provide a smooth shopping experience.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col className="col-md-4 align-content-center">
                <div>
                  <h3>Testing and Quality Check</h3>
                  <p>
                    Before we launch your store, we test everything to ensure it
                    works perfectly. We check that customers can easily browse
                    and buy products, the website looks good on all devices, and
                    it is safe and secure for online shopping.
                  </p>
                </div>
              </Col>
              <Col className="col-md-4">
                <div className={styles.resultCard}>
                  <h3>Launching Your Store</h3>
                  <p>
                    Once testing is complete, we put your website live on the
                    internet. This means customers can now visit your store and
                    start shopping. We make sure everything runs smoothly and
                    help you with any questions you have during this stage.
                  </p>
                </div>
              </Col>
              <Col className="col-md-4 align-content-center">
                <div>
                  <h3>Maintenance and Support</h3>
                  <p>
                    Our work {"doesn’t"} stop after your store is live. We
                    provide regular updates to keep your store secure and
                    running well. If you face any problems, we are here to help.
                    We also give advice on how you can improve your store as
                    your business grows.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col>
                <p>
                  At Nextupgrad, we believe in working closely with you
                  throughout the entire process. Our step-by-step approach
                  ensures that building your Magento e-commerce store is easy to
                  understand and helps your business succeed.
                </p>
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
                  <span>Why Us</span>
                  <br />
                  Why Choose Nexupgrad for Magento E-commerce Development
                </h2>
              </Col>
            </Row>
            <Row className={styles.resultRow}>
              <Col className="col-md-4">
                <div className={styles.resultCard}>
                  <h3>Expert Magento Developers</h3>
                  <p>
                    At Nexupgrad, we have a team of skilled developers who know
                    Magento inside and out. We work hard to build e-commerce
                    stores that are easy to use, fast, and reliable. Whether you
                    need a small store or a big online shop, we can help.
                  </p>
                </div>
              </Col>
              <Col className="col-md-4">
                <div className={styles.resultCard}>
                  <h3>Custom Solutions for Your Business</h3>
                  <p>
                    Every business is different, and we understand that. We
                    create Magento stores that fit your business needs. From
                    design to features, everything is made just for you.
                  </p>
                </div>
              </Col>
              <Col className="col-md-4">
                <div className={styles.resultCard}>
                  <h3>Affordable Pricing</h3>
                  <p>
                    We believe that good e-commerce solutions should not cost
                    too much. Our services are priced to give you the best value
                    for your money. We offer clear pricing with no hidden costs.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className={styles.resultRow}>
              <Col className="col-md-4">
                <div className={styles.resultCard}>
                  <h3>Mobile-Friendly Stores</h3>
                  <p>
                    More people shop using their phones. That is why we make
                    sure your Magento store works great on all devices,
                    including phones and tablets. This helps you reach more
                    customers.
                  </p>
                </div>
              </Col>
              <Col className="col-md-4">
                <div className={styles.resultCard}>
                  <h3>Secure and Safe</h3>
                  <p>
                    Security is very important for online stores. We make sure
                    your Magento store is safe from hackers and keeps customer
                    data protected.
                  </p>
                </div>
              </Col>
              <Col className="col-md-4">
                <div className={styles.resultCard}>
                  <h3>Easy Integration with Other Tools</h3>
                  <p>
                    Need to connect your store with payment gateways, shipping
                    services, or other tools? We make it simple to integrate
                    everything you need to run your business smoothly.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col className="col-md-4">
                <div className={styles.resultCard}>
                  <h3>Proven Track Record</h3>
                  <p>
                    We have worked with many businesses and delivered successful
                    Magento projects. Our experience helps us understand what
                    works best for e-commerce.
                  </p>
                </div>
              </Col>
              <Col className="col-md-4">
                <div className={styles.resultCard}>
                  <h3>Get Started Today</h3>
                  <p>
                    If you want a Magento e-commerce store that is reliable,
                    easy to use, and made just for you, Nexupgrad is the right
                    choice. Contact us to discuss your project and see how we
                    can help.
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="text-center">
                <Link
                  href="/contact-us"
                  title="Contact Us"
                  className={styles.ctaBtn}
                >
                  Contact Us!
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
                      Q1 - What can I sell in a Magento store?
                    </Accordion.Header>
                    <Accordion.Body>
                      <strong>Answer - </strong>You can sell physical products,
                      digital products, and services. Examples include clothes,
                      books, software, or consultation services.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header className={styles.accordHead}>
                      Q2 - Is Magento good for small businesses?
                    </Accordion.Header>
                    <Accordion.Body>
                      <strong>Answer - </strong>Yes, Magento is suitable for
                      small and large businesses. It is flexible and can grow
                      with your business.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header className={styles.accordHead}>
                      Q3 - Can Magento handle large online stores?
                    </Accordion.Header>
                    <Accordion.Body>
                      <strong>Answer - </strong>Yes, Magento is designed to
                      handle large product catalogs and high website traffic.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header className={styles.accordHead}>
                      Q4 - Can I integrate Magento with other systems?
                    </Accordion.Header>
                    <Accordion.Body>
                      <strong>Answer - </strong>Yes, you can integrate Magento
                      with tools like payment gateways, shipping services, CRMs,
                      and ERPs.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header className={styles.accordHead}>
                      Q4 - Can I migrate my existing store to Magento?
                    </Accordion.Header>
                    <Accordion.Body>
                      <strong>Answer - </strong>Yes, you can move your current
                      online store to Magento. This process requires planning
                      and, often, the help of experts.
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

export default MagentoDevelopment;
