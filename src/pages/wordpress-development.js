import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
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

function WordpressDevelopment() {
  return (
    <>
      <Head>
        <title>Expert WordPress Web Development Services</title>
        <meta
          name="title"
          content="Expert WordPress Web Development Services"
        />
        <meta
          name="description"
          content="Unlock the full potential of your website with our custom WordPress web development services. Fast, secure, and tailored to your needs."
        />
      </Head>
      <div className={styles.enterprise}>
        <section className={styles.enterpriseBnr}>
          <Container>
            <Row className={`justify-content-between ${styles.bannerRow}`}>
              <Col className="col-md-6 align-content-center">
                <h1>
                  Custom <span>WordPress Web Development</span> Services
                </h1>
                <p>
                  Nextupgrad offers custom WordPress web development services to
                  create websites that fit your needs. Our team helps build
                  user-friendly websites for businesses, blogs, or online
                  stores. We make sure your website works well and looks great
                  on all devices.
                </p>
                <Link
                  href="/contact-us"
                  title="Speak to us"
                  className={styles.ctaBtn}
                >
                  Speak To Us
                </Link>
              </Col>
              <Col className="col-md-4">
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
                  Main Problems in WordPress Web Development
                </h2>
                <p>
                  Like any building project, WordPress websites can have some
                  common issues. These might include:
                </p>
              </Col>
            </Row>
            <Row className={`mb-4 ${styles.probs}`}>
              {[
                {
                  title: "Security Concerns",
                  description:
                    "WordPress websites can be targeted by hackers, leading to potential data breaches and unauthorized access. It's important to install security plugins and regularly update the site to prevent such issues.",
                },
                {
                  title: "Plugin Compatibility Issues",
                  description:
                    "Sometimes adding new plugins to a WordPress site can cause conflicts, resulting in errors or malfunctions. It's crucial to choose reliable plugins and test compatibility before installing them.",
                },
                {
                  title: "Site Speed and Performance",
                  description:
                    "Large files and too many images on a WordPress site can slow down its loading speed, leading to a poor user experience. Optimizing images and using caching tools can help improve performance.",
                },
                {
                  title: "Search Engine Optimization Challenges",
                  description:
                    "WordPress websites may struggle with SEO, affecting their visibility on search engines. Proper keyword usage, meta tags, and quality content can help improve search engine rankings.",
                },
                {
                  title: "Mobile Responsiveness Problems",
                  description:
                    "Some WordPress themes may not be responsive, making the site difficult to navigate on mobile devices. Using mobile-friendly themes and testing responsiveness can address this issue.",
                },
                {
                  title: "Content Management Issues",
                  description:
                    "Managing content on a WordPress site can be challenging, especially as the site grows. Utilizing categories, tags, and a proper content structure can help organize and manage content effectively.",
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
            <Row className="mb-4">
              <Col>
                <h2>
                  <span>Services</span>
                  <br />
                  WordPress Web Development Services Offered by NextUpgrad
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
                            WordPress Custom Website Development
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="second"
                            className={styles.tabLinkText}
                          >
                            WordPress Theme Design and Customization
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="third"
                            className={styles.tabLinkText}
                          >
                            WordPress E-commerce Website Development
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="fourth"
                            className={styles.tabLinkText}
                          >
                            WordPress Website Maintenance and Support
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="fifth"
                            className={styles.tabLinkText}
                          >
                            WordPress SEO Optimization
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="sixth"
                            className={styles.tabLinkText}
                          >
                            WordPress Plugin Development
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={styles.tabLink}>
                          <Nav.Link
                            eventKey="seven"
                            className={styles.tabLinkText}
                          >
                            WordPress Migration
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
                            WordPress Custom Website Development
                          </h3>
                          <p className="mb-4">
                            At Nextupgrad, we specialize in building websites
                            that are tailored to your specific needs. Whether
                            {"you're"} running a business, starting a blog, or
                            launching an online store, we create a custom
                            WordPress website that fits your goals. We ensure
                            the design, features, and layout match your vision
                            while keeping it easy for users to navigate.
                          </p>
                          <ol className="mb-5">
                            <li>Custom design based on your brand</li>
                            <li>User-friendly navigation and layout</li>
                            <li>Scalable for future growth</li>
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
                            WordPress Theme Design and Customization
                          </h3>
                          <p className="mb-4">
                            We help you choose the right WordPress theme and
                            customize it to reflect your {"brand's"} identity.
                            If you need something unique, our team can design a
                            custom theme from scratch. We focus on creating a
                            professional look that works well on all devices and
                            provides a smooth user experience.
                          </p>
                          <ol className="mb-5">
                            <li>Choose from a variety of themes</li>
                            <li>Full customization to match your brand</li>
                            <li>Mobile-friendly and responsive design</li>
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
                            WordPress E-commerce Website Development
                          </h3>
                          <p className="mb-4">
                            For businesses looking to sell products online,
                            Nextupgrad offers complete e-commerce solutions
                            using WooCommerce or other platforms. We set up your
                            online store, add product listings, and ensure a
                            secure and smooth checkout process. We also focus on
                            making the store easy to manage so you can run your
                            business with ease.
                          </p>
                          <ol className="mb-5">
                            <li>Set up and design an online store</li>
                            <li>
                              Easy product management and inventory tracking
                            </li>
                            <li>Secure and smooth checkout process</li>
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
                            WordPress Website Maintenance and Support
                          </h3>
                          <p className="mb-4">
                            Keeping your website running smoothly is important.
                            Nextupgrad offers ongoing website maintenance,
                            including regular updates to WordPress, themes, and
                            plugins. We also monitor your site for security, fix
                            bugs, and provide support whenever you need help.
                            This ensures your website stays secure and
                            functional at all times.
                          </p>
                          <ol className="mb-5">
                            <li>
                              Regular updates for WordPress, themes, and plugins
                            </li>
                            <li>Security monitoring to prevent attacks</li>
                            <li>Bug fixes and troubleshooting</li>
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
                          <h3 className="mb-4">WordPress SEO Optimization</h3>
                          <p className="mb-4">
                            Having a website is just the start—getting it found
                            by search engines is crucial. We help improve your
                            {"website’s"} SEO to increase its visibility on
                            search engines like Google. This includes optimizing
                            your content, images, and website speed. We also
                            ensure that your website is set up correctly for
                            search engines to easily crawl and index your pages.
                          </p>
                          <ol className="mb-5">
                            <li>On-page SEO optimization for content</li>
                            <li>Image and speed optimization</li>
                            <li>Setup for search engines to crawl your site</li>
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
                          <h3 className="mb-4">WordPress Plugin Development</h3>
                          <p className="mb-4">
                            Extend the functionality of your WordPress website
                            with custom plugins. We develop tailored solutions
                            to meet your specific needs, from simple
                            enhancements to complex integrations. Our expert
                            developers ensure seamless compatibility and optimal
                            performance. Enhance your {"site's"} capabilities
                            with a custom WordPress plugin.
                          </p>
                          <ol className="mb-5">
                            <li>
                              We migrate all your website content, including
                              posts, pages, images, and media.
                            </li>
                            <li>
                              We minimize disruption to your website during the
                              migration process.
                            </li>
                            <li>
                              We ensure your search engine rankings are
                              maintained after the migration.
                            </li>
                            <li>
                              We thoroughly test your new WordPress site to
                              ensure everything works correctly.
                            </li>
                          </ol>
                          <Link
                            href="/contact-us"
                            title="Contact Now"
                            className={styles.ctaBtn}
                          >
                            Contact Now!
                          </Link>
                        </Tab.Pane>
                        <Tab.Pane eventKey="seven">
                          <h3 className="mb-4">WordPress Migration</h3>
                          <p className="mb-4">
                            Moving your website to WordPress? We handle the
                            entire migration process, ensuring a smooth and
                            seamless transition. We transfer your content,
                            design, and functionality without data loss or
                            downtime. Migrate to WordPress with ease and
                            confidence.
                          </p>
                          <ol className="mb-5">
                            <li>
                              We create a unique online store that reflects your
                              brand and meets your specific requirements.
                            </li>
                            <li>
                              We help you set up your products, categories, and
                              inventory.
                            </li>
                            <li>
                              We integrate secure payment gateways to ensure
                              safe transactions.
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
        <section className={styles.request}>
          <Container>
            <Row className="justify-content-center">
              <Col className="col-md-8 text-center">
                <div className={styles.resultCard}>
                  <h2 className="mb-4">
                    <span>Request</span>
                    <br />
                    Transform Ideas into Stunning Websites with a WordPress Web
                    Design Company
                  </h2>
                  <Link
                    href="/contact-us"
                    title="Request Consultation"
                    className={styles.ctaBtn}
                  >
                    Request Consultation
                  </Link>
                </div>
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
                  Results Achieved by Businesses with NextUpgrad WordPress Web
                  Development Services
                </h2>
                <p>
                  At Nextupgrad, we focus on helping businesses grow with clean
                  and simple WordPress websites. Below are some real results our
                  businesses have achieved after using our services:
                </p>
              </Col>
            </Row>
            <Row className={styles.resultRow}>
              <Col className="col-md-4">
                <div className={styles.resultCard}>
                  <h3>Architecture Implementation</h3>
                  <p>
                    We approach development with attention to detail to ensure
                    the product is highly functional and cost-effective. Our
                    developers have experience handling various situations and
                    follow clear steps to deliver the desired outcomes.
                  </p>
                </div>
              </Col>
              <Col className="col-md-4 align-content-center">
                <div>
                  <h3>Compelling UI/UX Design</h3>
                  <p>
                    Nextupgrad provides UI/UX design services tailored to your
                    {"brand’s"} vision. As a WordPress development company, our
                    team works to transform your ideas into functional designs.
                  </p>
                </div>
              </Col>
              <Col className="col-md-4">
                <div className={styles.resultCard}>
                  <h3>High Scalability</h3>
                  <p>
                    Nextupgrad focuses on ensuring the web platform is adaptable
                    to handle business growth without issues. Our goal is to
                    support our {"clients'"} success by keeping their website
                    aligned with their expanding business needs.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className={styles.resultRow}>
              <Col className="col-md-4 align-content-center">
                <div>
                  <h3>Psychology Driven Ideology</h3>
                  <p>
                    Our team specializes in website design grounded in
                    psychological principles and brain science. We create
                    habit-forming and highly engaging applications and solutions
                    that captivate users. This approach is designed to enhance
                    user engagement, drawing more visitors to your website and
                    driving business growth through our tailored solutions.
                  </p>
                </div>
              </Col>
              <Col className="col-md-4">
                <div className={styles.resultCard}>
                  <h3>Flexible Development</h3>
                  <p>
                    Our team follows a structured web development process to
                    keep you informed at every stage. We work closely on your
                    directives, focusing on meeting your requirements and
                    ensuring your satisfaction.
                  </p>
                </div>
              </Col>
              <Col className="col-md-4 align-content-center">
                <div>
                  <h3>Cost Savings</h3>
                  <p>
                    Our affordable services helped small and medium-sized
                    businesses get high-quality websites without breaking the
                    bank. They avoided costly fixes later by starting with a
                    properly built site.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col className="col-md-4">
                <div className={styles.resultCard}>
                  <h3>Stronger Brand Image</h3>
                  <p>
                    A well-designed website helped our clients showcase their
                    brand professionally. Customers trusted them more because
                    their websites looked modern and worked well on all devices.
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="text-center">
                <Link
                  href="/contact-us"
                  title="Send a Proposal Now"
                  className={styles.ctaBtn}
                >
                  Send a Proposal Now
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
                  Nextupgrad WordPress Web Development Process
                </h2>
                <p>
                  At NextUpgrad, we specialize in creating simple, functional,
                  and user-friendly WordPress websites that match your needs.
                  Our process is designed to make website development easy and
                  efficient for you.
                </p>
              </Col>
            </Row>
            <Row className={styles.resultRow}>
              <Col className="col-md-4">
                <div className={styles.resultCard}>
                  <h3>Understanding Your Goals</h3>
                  <p>
                    We begin by discussing your {"website's"} purpose, target
                    audience, and desired features. This step allows us to align
                    our work with your vision and objectives.
                  </p>
                </div>
              </Col>
              <Col className="col-md-4 align-content-center">
                <div>
                  <h3>Building Your Website</h3>
                  <p>
                    During this stage, we focus on customizing the design to
                    reflect your {"brand’s"} personality and goals. The content,
                    including text, images, and videos, is carefully integrated
                    to create a professional and engaging website. Essential
                    features, such as contact forms, booking systems, or
                    e-commerce functionality, are implemented to ensure the
                    website meets your needs.
                  </p>
                </div>
              </Col>
              <Col className="col-md-4">
                <div className={styles.resultCard}>
                  <h3>Planning the Website</h3>
                  <p>
                    We create a detailed plan, deciding on the structure,
                    design, and essential tools your website needs. This
                    includes selecting a WordPress theme or opting for a custom
                    design, planning the layout, and ensuring smooth navigation.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className={styles.resultRow}>
              <Col className="col-md-4 align-content-center">
                <div>
                  <h3>Testing and Quality Check</h3>
                  <p>
                    Before launch, we thoroughly test your website to ensure
                    everything works as intended. This includes checking links,
                    forms, and overall performance on various devices and
                    browsers.
                  </p>
                </div>
              </Col>
              <Col className="col-md-4">
                <div className={styles.resultCard}>
                  <h3>Launching the Website</h3>
                  <p>
                    We make your website live by connecting it to a domain name
                    and setting up hosting. Security and backups are also
                    ensured for a smooth launch.
                  </p>
                </div>
              </Col>
              <Col className="col-md-4 align-content-center">
                <div>
                  <h3>Post-Launch Support</h3>
                  <p>
                    We provide training to help you manage your website. You
                    will learn how to update content, add new posts or pages,
                    and perform basic troubleshooting. We also offer ongoing
                    support if needed.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col className="col-md-4">
                <div className={styles.resultCard}>
                  <h3>Regular Maintenance</h3>
                  <p>
                    To keep your website secure and updated, we provide
                    maintenance services. This includes updating WordPress,
                    fixing issues, and regular backups to ensure everything runs
                    smoothly.
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="text-center">
                <Link
                  href="/contact-us"
                  title="Send a Proposal Now"
                  className={styles.ctaBtn}
                >
                  Send a Proposal Now
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={styles.whyChoose}>
          <Container>
            <Row className="mb-4">
              <Col>
                <h2>
                  <span>Why Nextupgrad</span>
                  <br />
                  Why Choose NextUpgrad for WordPress Web Development?
                </h2>
                <p>
                  Nextupgrad makes WordPress web development simple, affordable,
                  and reliable. Let us help you create the website you need to
                  succeed.
                </p>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col className="col-md-4">
                <div className={styles.whyCard}>
                  <h3>Expert Inhouse Team</h3>
                  <p>
                    We have a skilled team of web developers who specialize in
                    WordPress. They know how to build websites that look good
                    and work smoothly.
                  </p>
                </div>
              </Col>
              <Col className="col-md-4">
                <div className={styles.whyCard}>
                  <h3>Customized Websites</h3>
                  <p>
                    We create websites that fit your specific needs. Whether you
                    want a personal blog, an online store, or a business site,
                    we make it just the way you want.
                  </p>
                </div>
              </Col>
              <Col className="col-md-4">
                <div className={styles.whyCard}>
                  <h3>Affordable Prices</h3>
                  <p>
                    We offer high-quality web development services at prices
                    that are friendly to your budget
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col className="col-md-4">
                <div className={styles.whyCard}>
                  <h3>Customer Support</h3>
                  <p>
                    Our support team is always ready to help you. If you face
                    any issues, {"we’ll"} be there to fix them quickly.
                  </p>
                </div>
              </Col>
              <Col className="col-md-4">
                <div className={styles.whyCard}>
                  <h3>Secure Websites</h3>
                  <p>
                    We ensure your website is safe from hackers by using the
                    latest security features and updates.
                  </p>
                </div>
              </Col>
              <Col className="col-md-4">
                <div className={styles.whyCard}>
                  <h3>Timely Delivery</h3>
                  <p>
                    We respect your time. Our team works hard to deliver your
                    website on schedule without compromising quality.
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="text-center">
                <Link
                  href="/contact-us"
                  title="Send a Proposal Now"
                  className={styles.ctaBtn}
                >
                  Send a Proposal Now
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={styles.caseStudy}>
          <Container>
            <Row className="mb-4">
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
                      Q1 - Is WordPress suitable for small businesses?
                    </Accordion.Header>
                    <Accordion.Body>
                      <strong>Answer - </strong>Yes, WordPress is ideal for
                      small businesses as it is cost-effective, flexible, and
                      easy to maintain.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header className={styles.accordHead}>
                      Q2 - Can I migrate my existing website to WordPress?
                    </Accordion.Header>
                    <Accordion.Body>
                      <strong>Answer - </strong>Yes, you can migrate your
                      website to WordPress. There are tools and developers
                      available to help with the migration process.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header className={styles.accordHead}>
                      Q3 - Can I switch themes after creating my site?
                    </Accordion.Header>
                    <Accordion.Body>
                      <strong>Answer - </strong>Yes, you can switch themes
                      anytime. However, some design and content may need
                      adjustments after changing the theme.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header className={styles.accordHead}>
                      Q4 - Can I use WordPress for e-commerce?
                    </Accordion.Header>
                    <Accordion.Body>
                      <strong>Answer - </strong>Yes, you can use WordPress to
                      create an online store. The WooCommerce plugin is a
                      popular choice for e-commerce.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header className={styles.accordHead}>
                      Q5 - What are the themes in WordPress?
                    </Accordion.Header>
                    <Accordion.Body>
                      <strong>Answer - </strong>Themes are pre-designed
                      templates that determine the look and layout of your
                      website. You can customize themes to suit your business
                      needs.
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

export default WordpressDevelopment;
