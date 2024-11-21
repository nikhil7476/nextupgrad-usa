import Head from "next/head";
import Link from "next/link";
import { Col, Container, Row, Accordion, Tab, Nav } from "react-bootstrap";
import { MdOutlineSupportAgent } from "react-icons/md";
import { TbTargetArrow } from "react-icons/tb";
import { GiTeamIdea } from "react-icons/gi";
import { AiOutlineFileSearch } from "react-icons/ai";
import { FaTools, FaGlobeAmericas, FaMapPin, FaStar } from 'react-icons/fa';
import style from "@/styles/localSeo.module.css";
const LocalSeo = () => {
    return (
        <>
            <Head>
                <title>Local SEO - Nextupgrad USA</title>
            </Head>
            <div className={style.seoHdr}>
                <section className={style.banner}>
                    <Container>
                        <Row>
                            <Col className={`col-md-6 ${style.bnr}`}>
                                <h1>Local SEO Services for<br /><span>New York Businesses</span></h1>
                                <p>Dominate local search results and attract more customers with our expert SEO services.</p>
                                <Link href="#" title="Contact Us">Get A Free Consultation</Link>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className={style.methodology}>
                    <Container>
                        <Row className="text-center mb-4">
                            <h2>Our Methodology</h2>
                        </Row>
                        <Row className="justify-content-evenly">
                            <Col xs={12} md={7} className="d-flex flex-column gap-4">
                                <div className={style.service}>
                                    <FaTools size={48} className={style.icon} />
                                    <div className={style.serviceContent}>
                                        <h3 className={style.serviceTitle}>On-Page Optimization</h3>
                                        <p>We optimize every aspect of your website, from content and structure to technical elements, ensuring everything is search-engine friendly.</p>
                                    </div>
                                </div>
                                <div className={style.service}>
                                    <FaGlobeAmericas size={48} className={style.icon} />
                                    <div className={style.serviceContent}>
                                        <h3 className={style.serviceTitle}>Keyword Research & Analysis</h3>
                                        <p>We identify high-volume search terms and uncover opportunities to improve your rankings, helping you stay ahead of the competition.</p>
                                    </div>
                                </div>
                                <div className={style.service}>
                                    <FaGlobeAmericas size={48} className={style.icon} />
                                    <div className={style.serviceContent}>
                                        <h3 className={style.serviceTitle}>Off-Page Optimization</h3>
                                        <p>{"We enhance your website's authority with high-quality backlinks, boosting your site’s credibility and visibility on search engines."}</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} md={4} className="d-flex flex-column gap-4">
                                <div className={style.service}>
                                    <FaMapPin size={48} className={style.icon} />
                                    <div className={style.serviceContent}>
                                        <h3 className={style.serviceTitle}>Local Citations & Directories</h3>
                                        <p>We make sure your business appears in relevant local directories, like Google My Business, helping you attract more local customers.</p>
                                    </div>
                                </div>
                                <div className={style.service}>
                                    <FaStar size={48} className={style.icon} />
                                    <div className={style.serviceContent}>
                                        <h3 className={style.serviceTitle}>Review Management</h3>
                                        <p>We actively manage your online reputation by encouraging positive reviews and addressing negative feedback, building trust with customers.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className={style.seoTabs}>
                    <Container>
                        <Row>
                            <h2>What do our <span>local SEO</span> services include?</h2>
                            <Col>
                                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                    <Row className="justify-content-around">
                                        <Col sm={3}>
                                            <Nav variant="pills" className={`flex-column ${style.seoService}`}>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="first">Local Search Optimization</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="second">On-page Optimization</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="third">Citation Building</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="fourth">Review Management</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="fifth">Reporting & Analytics</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                        </Col>
                                        <Col sm={8}>
                                            <Tab.Content>
                                                <Tab.Pane eventKey="first">
                                                    <div className={style.tabCont}>
                                                        <div>
                                                            <h3><span><img src="/assets/local-seo.svg" /></span> Local Search Optimization</h3>
                                                            <div>
                                                                <h4>{"Google My Business (GMB)"}</h4>
                                                                <p>{"laim and optimize your Google My Business listing to ensure accurate information about your business, including your address, phone number, website, and hours of operation. Engaging with customers through GMB allows you to respond to reviews, post updates, and share photos and videos, showcasing your business and driving local traffic."}</p>
                                                            </div>
                                                            <div>
                                                                <h4>Local Directories</h4>
                                                                <p>{"List your business on other relevant local directories such as Yelp, TripAdvisor, and Yellow Pages. Ensuring consistency across these directories is crucial for local SEO, as search engines rely on this information to determine your business's legitimacy and visibility."}</p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <img src="https://picsum.photos/350/400" />
                                                        </div>
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="second">
                                                    <div className={style.tabCont}>
                                                        <div>
                                                            <h3><span><img src="/assets/on-page.png" /></span> On-page Optimization</h3>
                                                            <div>
                                                                <h4>Content Optimization</h4>
                                                                <p>{"We ensure your website content is relevant, engaging, and optimized for target keywords. This includes writing high-quality content, structuring it for readability, and using keyword-rich headings and subheadings."}</p>
                                                            </div>
                                                            <div>
                                                                <h4>Technical SEO</h4>
                                                                <p>{"We optimize your website's technical aspects, such as site speed, mobile responsiveness, and structured data, to improve its crawlability and user experience."}</p>
                                                            </div>
                                                            <div>
                                                                <h4>Meta Data Optimization</h4>
                                                                <p>{"We craft compelling title tags and meta descriptions that accurately describe your website's content and attract clicks from search engine results pages."}</p>
                                                            </div>
                                                            <div>
                                                                <h4>Internal Linking</h4>
                                                                <p>{"We implement a strategic internal linking strategy to improve website navigation and distribute link juice throughout your site."}</p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <img src="https://picsum.photos/350/400" />
                                                        </div>
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="third">
                                                    <div className={style.tabCont}>
                                                        <div>
                                                            <h3><span><img src="/assets/citation.webp" /></span> Citation Building</h3>
                                                            <div>
                                                                <h4>Local Directories</h4>
                                                                <p>{"We ensure your business is listed on major local directories like Google My Business, Yelp, and TripAdvisor. Accurate and consistent information across these platforms strengthens your online presence and increases visibility in local search results."}</p>
                                                            </div>
                                                            <div>
                                                                <h4>Online Business Profiles</h4>
                                                                <p>{"We create and optimize online business profiles on platforms relevant to your industry, such as Angie's List, HomeAdvisor, and others. This expands your reach to a wider audience and helps build trust and credibilit."}</p>
                                                            </div>
                                                            <div>
                                                                <h4>Industry-Specific Directories</h4>
                                                                <p>{"We leverage industry-specific directories relevant to your business, such as those focused on healthcare, legal services, or restaurants. This ensures you are reaching the most targeted audience and maximizing your visibility within your niche."}</p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <img src="https://picsum.photos/350/400" />
                                                        </div>
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="fourth">
                                                    <div className={style.tabCont}>
                                                        <div>
                                                            <h3><span><img src="/assets/review.webp" /></span> Review Management</h3>
                                                            <div>
                                                                <h4>Encouraging Reviews</h4>
                                                                <p>{"We guide you on how to strategically request reviews from your satisfied customers, providing easy-to-use tools and templates for review requests. We encourage your customers to leave reviews across various platforms like Google My Business, Yelp, and TripAdvisor, enhancing your online reputation."}</p>
                                                            </div>
                                                            <div>
                                                                <h4>Responding to Reviews</h4>
                                                                <p>{"We help you respond to reviews promptly and professionally, building customer relationships and showcasing your commitment to service excellence. We craft thoughtful replies that address customer concerns, acknowledge positive feedback, and maintain a consistent brand voice."}</p>
                                                            </div>
                                                            <div>
                                                                <h4>Review Monitoring & Analysis</h4>
                                                                <p>{"We track and analyze your online reviews, identifying trends and insights to understand customer sentiment and make data-driven improvements. By monitoring your reviews, we can identify areas for improvement and proactively address any negative feedback to maintain a strong online reputation."}</p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <img src="https://picsum.photos/350/400" />
                                                        </div>
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="fifth">
                                                    <div className={style.tabCont}>
                                                        <div>
                                                            <h3><span><img src="/assets/reporting.webp" /></span> Reporting & Analytics</h3>
                                                            <div>
                                                                <h4>Regular Reporting</h4>
                                                                <p>{"We provide comprehensive reports tracking your website's performance, including keyword rankings, traffic, and conversion rates. This data helps gauge the effectiveness of your SEO strategy and highlights improvement areas, offering you insights to enhance local visibility and drive growth."}</p>
                                                            </div>
                                                            <div>
                                                                <h4>Data Analysis</h4>
                                                                <p>{"Our team analyzes data to reveal valuable insights and discover optimization opportunities. By providing actionable recommendations tailored to your goals, we ensure that your local SEO campaign stays aligned with your business objectives and delivers consistent, measurable results for maximum impact."}</p>
                                                            </div>
                                                            <div>
                                                                <h4>Performance Tracking</h4>
                                                                <p>{"We monitor your local SEO campaign’s progress, delivering updates and insights into your website's growth and performance. This enables us to adjust strategies as needed, supporting continuous improvement in search engine rankings and enhancing visibility to drive long-term, sustainable success."}</p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <img src="https://picsum.photos/350/400" />
                                                        </div>
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
                <section className={style.deliverables}>
                    <Container>
                        <Row className="justify-content-center">
                            <h2>Our Deliverables</h2>
                            <Col className="col-md-10">
                                <div className={style.timeline}>
                                    <ul>
                                        <li>
                                            <div className={style.content}>
                                                <h3>Comprehensive SEO Audit</h3>
                                                <p>{"A thorough analysis of your website's current SEO performance, identifying strengths, weaknesses, and opportunities for improvement."}</p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className={style.content}>
                                                <h3>Keyword Research & Strategy</h3>
                                                <p>Identification of high-value keywords relevant to your target audience and industry, forming the foundation for your content and optimization efforts.</p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className={style.content}>
                                                <h3>On-Page Optimization</h3>
                                                <p>{"Optimization of your website's content, structure, and technical elements to improve its ranking in local search results."}</p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className={style.content}>
                                                <h3>Off-Page Optimization</h3>
                                                <p>{"Building high-quality backlinks from reputable websites to enhance your website's authority and credibility."}</p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className={style.content}>
                                                <h3>Local Citations & Directory Listings</h3>
                                                <p>Ensuring your business is listed accurately and consistently across major local directories, enhancing your visibility and driving local traffic.</p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className={style.content}>
                                                <h3>Review Management & Monitoring</h3>
                                                <p>Active management of online reviews, encouraging positive feedback and addressing negative reviews professionally to build trust and credibility.</p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className={style.content}>
                                                <h3>Regular Reporting & Analytics</h3>
                                                <p>{"Comprehensive reporting on your website's performance, including keyword rankings, website traffic, and conversion rates, to track progress and identify areas for improvement."}</p>
                                            </div>
                                        </li>
                                        <div style={{ clear: "both" }}></div>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className={style.why}>
                    <Container>
                        <h2 className={style.whyTitle}>Why <span>Nextupgrad</span></h2>
                        <Row className={style.whyCont}>
                            <Col className={`col-md-3 ${style.whyUp}`}>
                                <div className={style.iconContainer}>
                                    <TbTargetArrow className={style.icon} />
                                </div>
                                <h3>Results-Driven Approach</h3>
                                <p>We prioritize measurable results and use data-driven strategies to deliver tangible improvements in your local search rankings and business growth.</p>
                            </Col>
                            <Col className={`col-md-3 ${style.whyDown}`}>
                                <div className={style.iconContainer}>
                                    <MdOutlineSupportAgent className={style.icon} />
                                </div>
                                <h3>Dedicated Team & Support</h3>
                                <p>Our team of experienced SEO professionals is committed to delivering exceptional service and providing ongoing support throughout your campaign.</p>
                            </Col>
                            <Col className={`col-md-3 ${style.whyUp}`}>
                                <div className={style.iconContainer}>
                                    <GiTeamIdea className={style.icon} />
                                </div>
                                <h3>NYC Expertise & Experience</h3>
                                <p>We have a deep understanding of the New York City market, its unique search landscape, and the specific needs of local businesses.</p>
                            </Col>
                            <Col className={`col-md-3 ${style.whyDown}`}>
                                <div className={style.iconContainer}>
                                    <AiOutlineFileSearch className={style.icon} />
                                </div>
                                <h3>Transparent Communication</h3>
                                <p>We believe in open and transparent communication, keeping you informed about the progress of your campaign and addressing any questions you may have.</p>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className={style.pricing}>
                    <Container>
                        <div className={style.title}>
                            <h2>
                                Affordable Pricing Plans
                            </h2>
                            <p>
                                Find the perfect plan to suit your needs. Simple, transparent pricing.
                            </p>
                        </div>
                        <div className={style.cardRow}>
                            {/* Weekly Plan */}
                            <div className={`${style.priceCard} ${style.weekly}`}>
                                <h3>Weekly Plan</h3>
                                <p>
                                    <sup>$</sup>120<sub>/week</sub>
                                </p>
                                <ul>
                                    <li>SEO & Branding</li>
                                    <li>Digital Marketing</li>
                                    <li>Google Analytics</li>
                                    <li>Branding Solutions</li>
                                    <li>Digital Accounts</li>
                                    <li className={style.disabled}>Pay-per-Click</li>
                                    <li className={style.disabled}>24/7 Support</li>
                                </ul>
                                <button className={style.choosePlan}>Choose Plan</button>
                            </div>

                            {/* Monthly Plan */}
                            <div className={`${style.priceCard} ${style.featured}`}>
                                <h3>Monthly Plan</h3>
                                <p>
                                    <sup>$</sup>840<sub>/month</sub>
                                </p>
                                <ul>
                                    <li>SEO & Branding</li>
                                    <li>Digital Marketing</li>
                                    <li>Google Analytics</li>
                                    <li>Branding Solutions</li>
                                    <li>Digital Accounts</li>
                                    <li>Pay-per-Click</li>
                                    <li className={style.disabled}>24/7 Support</li>
                                </ul>
                                <button className={style.choosePlan}>Choose Plan</button>
                            </div>

                            {/* Yearly Plan */}
                            <div className={`${style.priceCard} ${style.yearly}`}>
                                <h3>Yearly Plan</h3>
                                <p>
                                    <sup>$</sup>3,600<sub>/year</sub>
                                </p>
                                <ul>
                                    <li>SEO & Branding</li>
                                    <li>Digital Marketing</li>
                                    <li>Google Analytics</li>
                                    <li>Branding Solutions</li>
                                    <li>Digital Accounts</li>
                                    <li>Pay-per-Click</li>
                                    <li>24/7 Support</li>
                                </ul>
                                <button className={style.choosePlan}>Choose Plan</button>
                            </div>
                        </div>
                    </Container>
                </section>
                <section className={style.caseStudy}>
                    <Container>
                        <div className={style.title}>
                            <h2>
                                Case Study
                            </h2>
                            <p>Explore our recent work and success stories. Innovation meets results!</p>
                        </div>
                        <Row className={style.case}>
                            <Col className={`col-md-3 ${style.caseCont}`}>
                                <div className={style.card}>
                                    <div className={style.cardOverlay}></div>
                                    <h3>Lorem Ipsum Dolor</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
                                    <button className={style.readMore}>Read More</button>
                                </div>
                            </Col>
                            <Col className={`col-md-3 ${style.caseCont}`}>
                                <div className={style.card}>
                                    <div className={style.cardOverlay}></div>
                                    <h3>Consectetur Adipiscing</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
                                    <button className={style.readMore}>Read More</button>
                                </div>
                            </Col>
                            <Col className={`col-md-3 ${style.caseCont}`}>
                                <div className={style.card}>
                                    <div className={style.cardOverlay}></div>
                                    <h3>Eiusmod Tempor</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
                                    <button className={style.readMore}>Read More</button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className={style.faq}>
                    <Container>
                        <h2>Frequently Asked Questions</h2>
                        <Row className="justify-content-center">
                            <Col className={`col-md-10 ${style.accord}`}>
                                <Accordion defaultActiveKey="0" flush>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>4. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div >
        </>
    );
};

export default LocalSeo;
