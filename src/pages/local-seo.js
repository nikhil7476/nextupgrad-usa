import Head from "next/head";
import Link from "next/link";
import { Col, Container, Row, Accordion, Tab, Nav } from "react-bootstrap";
import { BiMessageRounded } from "react-icons/bi";
import { IoArrowUndoOutline, IoBarChartOutline } from "react-icons/io5";
import { MdOutlineSupportAgent, MdOutlineStoreMallDirectory } from "react-icons/md";
import { TbTargetArrow } from "react-icons/tb";
import { GiTeamIdea } from "react-icons/gi";
import { AiOutlineFileSearch } from "react-icons/ai";
import { FaRegFolderOpen, FaTimesCircle } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { ImProfile } from "react-icons/im";
import style from "@/styles/localSeo.module.css";
import CountUp from "react-countup";
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
                        <Row>
                            <h2>Our <span>Methodology</span></h2>
                            <Col>
                                <div className={style.cont}>
                                    <div className={style.contFirst}>
                                        <div className={style.contHdr}>
                                            <h3 className={style.serviceTitle}>Elevate Your Online Presence: Our Comprehensive SEO Services</h3>
                                        </div>
                                        <div className={style.service}>
                                            <div className={style.icon}>🛠️</div>
                                            <h3 className={style.serviceTitle}>On-Page Optimization</h3>
                                            <p>Our team optimizes every aspect of your website, from content and structure to technical elements. We enhance title tags, meta descriptions, headings, and images, ensuring that your site is not only crawlable but also resonates with search engines and users alike.</p>
                                        </div>
                                        <div className={style.service}>
                                            <div className={style.icon}>🌐</div>
                                            <h3 className={style.serviceTitle}>Keyword Research & Analysis</h3>
                                            <p>We begin by conducting thorough keyword research to identify the most relevant and high-volume search terms that your target audience is using. This helps us understand the competitive landscape and pinpoint opportunities for ranking improvement.</p>
                                        </div>
                                    </div>
                                    <div className={style.contFirst}>
                                        <div className={style.service}>
                                            <div className={style.icon}>🌐</div>
                                            <h3 className={style.serviceTitle}>Off-Page Optimization</h3>
                                            <p>We focus on creating high-quality backlinks from reputable websites to boost your site’s authority and credibility. Our outreach strategies, guest blogging, and link-building initiatives work together to enhance your rankings and visibility in search results.</p>
                                        </div>
                                        <div className={style.service}>
                                            <div className={style.icon}>📍</div>
                                            <h3 className={style.serviceTitle}>Local Citations & Directories</h3>
                                            <p>We ensure your business shines in local searches by listing it on major directories like Google My Business, Yelp, and TripAdvisor. Our optimization efforts guarantee that your business information is accurate and consistent, essential for attracting local customers.</p>
                                        </div>
                                        <div className={style.service}>
                                            <div className={style.icon}>⭐</div>
                                            <h3 className={style.serviceTitle}>Review Management</h3>
                                            <p>We actively manage your online reputation by encouraging positive reviews and professionally addressing any negative feedback. This proactive approach helps build trust and credibility, making your business more appealing to potential customers.</p>
                                        </div>
                                    </div>
                                    <Link href="#" title="Contact Us">
                                        <div className={style.contact}>
                                            <h3>{"Let’s Transform Your Online Presence Today!"}</h3>
                                            <p>Contact us to learn how our tailored SEO strategies can elevate your business!</p>
                                        </div>
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className={style.seoTabs}>
                    <Container>
                        <Row>
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
                                                            <h2><span><img src="/assets/local-seo.svg" /></span> Local Search Optimization</h2>
                                                            <div>
                                                                <h3>{"Google My Business (GMB)"}</h3>
                                                                <p>{"laim and optimize your Google My Business listing to ensure accurate information about your business, including your address, phone number, website, and hours of operation. Engaging with customers through GMB allows you to respond to reviews, post updates, and share photos and videos, showcasing your business and driving local traffic."}</p>
                                                            </div>
                                                            <div>
                                                                <h3>Local Directories</h3>
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
                                                            <h2><span><img src="/assets/on-page.png" /></span> On-page Optimization</h2>
                                                            <div>
                                                                <h3>Content Optimization</h3>
                                                                <p>{"We ensure your website content is relevant, engaging, and optimized for target keywords. This includes writing high-quality content, structuring it for readability, and using keyword-rich headings and subheadings."}</p>
                                                            </div>
                                                            <div>
                                                                <h3>Technical SEO</h3>
                                                                <p>{"We optimize your website's technical aspects, such as site speed, mobile responsiveness, and structured data, to improve its crawlability and user experience."}</p>
                                                            </div>
                                                            <div>
                                                                <h3>Meta Data Optimization</h3>
                                                                <p>{"We craft compelling title tags and meta descriptions that accurately describe your website's content and attract clicks from search engine results pages."}</p>
                                                            </div>
                                                            <div>
                                                                <h3>Internal Linking</h3>
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
                                                            <h2><span><img src="/assets/citation.webp" /></span> Citation Building</h2>
                                                            <div>
                                                                <h3>Local Directories</h3>
                                                                <p>{"We ensure your business is listed on major local directories like Google My Business, Yelp, and TripAdvisor. Accurate and consistent information across these platforms strengthens your online presence and increases visibility in local search results."}</p>
                                                            </div>
                                                            <div>
                                                                <h3>Online Business Profiles</h3>
                                                                <p>{"We create and optimize online business profiles on platforms relevant to your industry, such as Angie's List, HomeAdvisor, and others. This expands your reach to a wider audience and helps build trust and credibilit."}</p>
                                                            </div>
                                                            <div>
                                                                <h3>Industry-Specific Directories</h3>
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
                                                            <h2><span><img src="/assets/review.webp" /></span> Review Management</h2>
                                                            <div>
                                                                <h3>Encouraging Reviews</h3>
                                                                <p>{"We guide you on how to strategically request reviews from your satisfied customers, providing easy-to-use tools and templates for review requests. We encourage your customers to leave reviews across various platforms like Google My Business, Yelp, and TripAdvisor, enhancing your online reputation."}</p>
                                                            </div>
                                                            <div>
                                                                <h3>Responding to Reviews</h3>
                                                                <p>{"We help you respond to reviews promptly and professionally, building customer relationships and showcasing your commitment to service excellence. We craft thoughtful replies that address customer concerns, acknowledge positive feedback, and maintain a consistent brand voice."}</p>
                                                            </div>
                                                            <div>
                                                                <h3>Review Monitoring & Analysis</h3>
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
                                                            <h2><span><img src="/assets/reporting.webp" /></span> Reporting & Analytics</h2>
                                                            <div>
                                                                <h3>Regular Reporting</h3>
                                                                <p>{"We provide comprehensive reports tracking your website's performance, including keyword rankings, traffic, and conversion rates. This data helps gauge the effectiveness of your SEO strategy and highlights improvement areas, offering you insights to enhance local visibility and drive growth."}</p>
                                                            </div>
                                                            <div>
                                                                <h3>Data Analysis</h3>
                                                                <p>{"Our team analyzes data to reveal valuable insights and discover optimization opportunities. By providing actionable recommendations tailored to your goals, we ensure that your local SEO campaign stays aligned with your business objectives and delivers consistent, measurable results for maximum impact."}</p>
                                                            </div>
                                                            <div>
                                                                <h3>Performance Tracking</h3>
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
                        <Row>
                            <h2>Our <span>Deliverables</span></h2>
                            <Col>
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
                                <TbTargetArrow />
                                <h3>Results-Driven Approach</h3>
                                <p>We prioritize measurable results and use data-driven strategies to deliver
                                    tangible improvements in your local search rankings and business growth.</p>
                            </Col>
                            <Col className={`col-md-3 ${style.whyDown}`}>
                                <MdOutlineSupportAgent />
                                <h3>Dedicated Team & Support</h3>
                                <p>Our team of experienced SEO professionals is committed to
                                    delivering exceptional service and providing ongoing support
                                    throughout your campaign.</p>
                            </Col>
                            <Col className={`col-md-3 ${style.whyUp}`}>
                                <GiTeamIdea />
                                <h3>NYC Expertise & Experience</h3>
                                <p>We have a deep understanding of the New York City market, its unique
                                    search landscape, and the specific needs of local businesses.</p>
                            </Col>
                            <Col className={`col-md-3 ${style.whyDown}`}>
                                <AiOutlineFileSearch />
                                <h3>Transparent Communication</h3>
                                <p>We believe in open and transparent communication,
                                    keeping you informed about the progress of your
                                    campaign and addressing any questions you may have.</p>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className={style.pricing}>
                    <Container>
                        <h2>Our Affordable <span>Pricing Plans</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <Row className={style.priceRow}>
                            <Col className="col-md-4">
                                <div className={style.priceCard}>
                                    <h3>Weekly Plan</h3>
                                    <p><sup>$</sup>120<sub>/ week</sub></p>
                                    <ul>
                                        <li><span>SEO & Branding</span><FaCircleCheck /></li>
                                        <li><span>Digital Marketing</span><FaCircleCheck /></li>
                                        <li><span>Google Analytics</span><FaCircleCheck /></li>
                                        <li><span>Branding Solutions</span><FaCircleCheck /></li>
                                        <li><span>Digital Accounts</span><FaCircleCheck /></li>
                                        <li className={style.declined}><span>Pay-per-Click</span><FaTimesCircle /></li>
                                        <li className={style.declined}><span>24/7 Support</span><FaTimesCircle /></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col className="col-md-4">
                                <div className={style.priceCard}>
                                    <h3>Monthly Plan</h3>
                                    <p><sup>$</sup>840<sub>/ month</sub></p>
                                    <ul>
                                        <li><span>SEO & Branding</span><FaCircleCheck /></li>
                                        <li><span>Digital Marketing</span><FaCircleCheck /></li>
                                        <li><span>Google Analytics</span><FaCircleCheck /></li>
                                        <li><span>Branding Solutions</span><FaCircleCheck /></li>
                                        <li><span>Digital Accounts</span><FaCircleCheck /></li>
                                        <li><span>Pay-per-Click</span><FaCircleCheck /></li>
                                        <li className={style.declined}><span>24/7 Support</span><FaTimesCircle /></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col className="col-md-4">
                                <div className={style.priceCard}>
                                    <h3>Yearly Plan</h3>
                                    <p><sup>$</sup>3,600<sub>/ year</sub></p>
                                    <ul>
                                        <li><span>SEO & Branding</span><FaCircleCheck /></li>
                                        <li><span>Digital Marketing</span><FaCircleCheck /></li>
                                        <li><span>Google Analytics</span><FaCircleCheck /></li>
                                        <li><span>Branding Solutions</span><FaCircleCheck /></li>
                                        <li><span>Digital Accounts</span><FaCircleCheck /></li>
                                        <li><span>Pay-per-Click</span><FaCircleCheck /></li>
                                        <li><span>24/7 Support</span><FaCircleCheck /></li>
                                    </ul>
                                </div>
                            </Col>
                            <Link href="#" title="get started">Get Started</Link>
                        </Row>
                    </Container>
                </section>
                <section className={style.caseStudy}>
                    <Container>
                        <h2>Case <span>Study</span></h2>
                        <Row className={style.case}>
                            <Col className={`col-md-3 ${style.caseCont}`}>
                                <h3>Lorem ipsum dolor sit amet</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </Col>
                            <Col className={`col-md-3 ${style.caseCont}`}>
                                <h3>Lorem ipsum dolor sit amet</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </Col>
                            <Col className={`col-md-3 ${style.caseCont}`}>
                                <h3>Lorem ipsum dolor sit amet</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className={style.faq}>
                    <Container>
                        <h2>Frequently <span>Asked</span> Questions</h2>
                        <Row>
                            <Col className={style.accord}>
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
