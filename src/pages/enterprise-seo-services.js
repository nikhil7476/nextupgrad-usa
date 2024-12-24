import Head from "next/head";
import Link from "next/link";
import CountUp from "react-countup";
import styles from "@/styles/Enterprise.module.css";
import { Col, Row, Container, Tab, Nav, Accordion } from "react-bootstrap";
import { TbTargetArrow } from "react-icons/tb";
import { BsQuestionDiamondFill } from "react-icons/bs";
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

function Home() {
    return (
        <>
            <Head>
                <title>Enterprise SEO Services - Nextupgrad USA</title>
            </Head>
            <div className={styles.enterprise}>
                <section className={styles.enterpriseBnr}>
                    <Container>
                        <Row className="justify-content-between">
                            <Col className="col-md-6 align-content-center">
                                <h1>Best <span>Enterprise SEO<br />Service</span> Providers</h1>
                                <p>We specialize in enterprise SEO services, working with medium and large IT projects and high-traffic portals that receive hundreds of thousands of visitors from search engines. Our experts have experience across diverse sectors, from e-commerce to complex technology solutions.</p>
                                <Link href="#" title="Contact Us" className={styles.ctaBtn}>Contact Us</Link>
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
                                    <span>Problem</span><br />
                                    Problems We Solve with Enterprise SEO Solutions
                                </h2>
                                <p>We can solve the following problems with effective enterprise SEO services:</p>
                            </Col>
                        </Row>
                        <Row className="mb-5">
                            {[
                                {
                                    title: "No Demand for the Product Yet",
                                    description:
                                        "In the beginning, potential prospects need to be aware of your product. Strengthening your website, polishing your content, and implementing SERM tools can educate the audience more about the opportunities and benefits your product offers.",
                                },
                                {
                                    title: "Poor Lead Quality",
                                    description:
                                        "If you need help attracting the right leads, low-quality content and untargeted traffic can be major culprits. Refocus your approach to engage the right audience and improve lead quality!",
                                },
                                {
                                    title: "Unfair Competition",
                                    description:
                                        "On occasion, some competitors might resort to unethical tactics, such as intentionally targeting a website to lower its search rankings.",
                                },
                                {
                                    title: "The Site Has No or Few Visitors",
                                    description:
                                        "Your website can effortlessly attract the right audience with thoughtfully crafted, optimized content, even without relying on active link-building strategies.",
                                },
                                {
                                    title: "Low ROI",
                                    description:
                                        "Clients often allocate their marketing budget to less critical SEO tasks, overlooking those that deliver greater value.",
                                },
                                {
                                    title: "Low Conversion Rate",
                                    description:
                                        "The website experiences high traffic but struggles with a low conversion rate due to irrelevant visitors or ineffective landing page design.",
                                },
                            ].map((problem, index) => (
                                <Col key={index} className={`${styles.cardCol} col-md-6 mb-4`}>
                                    <div className={styles.problemCard}>
                                        <h3 className={styles.cardTitle}><span><BsQuestionDiamondFill /></span>{problem.title}</h3>
                                        <p className={styles.cardDescription}>{problem.description}</p>
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
                                <h2><span>Services</span><br />Enterprise SEO Services by Nextupgrad Team for your website</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                    <Row className="justify-content-evenly">
                                        <Col sm={3} className="delTab">
                                            <Nav variant="pills" className="flex-column">
                                                <Nav.Item className={styles.tabLink}>
                                                    <Nav.Link eventKey="first" className={styles.tabLinkText}>Dedicated Account Team</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item className={styles.tabLink}>
                                                    <Nav.Link eventKey="second" className={styles.tabLinkText}>Transparent Monthly<br />Reporting</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item className={styles.tabLink}>
                                                    <Nav.Link eventKey="third" className={styles.tabLinkText}>Custom SEO strategy</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item className={styles.tabLink}>
                                                    <Nav.Link eventKey="fourth" className={styles.tabLinkText}>360-Degree SEO Solutions</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item className={styles.tabLink}>
                                                    <Nav.Link eventKey="fifth" className={styles.tabLinkText}>Proven results for<br />Enterprises</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                        </Col>
                                        <Col sm={8} className={styles.delTabCont}>
                                            <Tab.Content>
                                                <Tab.Pane eventKey="first">
                                                    <h3>Dedicated Account Team</h3>
                                                    <p>In {"today’s"} fast-paced digital environment, businesses of all sizes want customized solutions to grow. Our <strong>enterprise SEO services in New York & SEO</strong> for large corporations in North Carolina provide customized strategies by allocating a dedicated account team to your business. This team ensures practical solutions and quantifiable results for your enterprise digital marketing and SEO services.</p>
                                                    <Accordion flush>
                                                        <Accordion.Item eventKey="0">
                                                            <Accordion.Header className={styles.accordHead}>Your Dedicated Account Team: A Personalized Approach</Accordion.Header>
                                                            <Accordion.Body>
                                                                Our specialist account teams, usually composed of five or more members, work as an extension of your business. Each team member takes time to get to know your brand, products, services, and client feedback. This allows them to effectively represent your brand and adapt tactics to fit your specific goals.
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="1">
                                                            <Accordion.Header className={styles.accordHead}>Focused Insights and Regular Strategy Updates</Accordion.Header>
                                                            <Accordion.Body>
                                                                <p>Every month, our team provides:</p>
                                                                <ol>
                                                                    <li><strong>Detailed Reports: </strong>updates on your SEO performance that are thorough and easy to understand</li>
                                                                    <li><strong>Actionable Modifications: </strong>updates to maintain the efficacy and competitiveness of your strategies.</li>
                                                                    <li><strong>Goal Reviews: </strong>Regular monitoring to ensure your business objectives are achieved.</li>
                                                                </ol>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                    </Accordion>
                                                    <p>You get a proactive partner committed to your success by working with us.</p>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="second">
                                                    <h3>Transparent Monthly Reporting</h3>
                                                    <Row>
                                                        <Col className="col-md-6">
                                                            <p>For every client who chooses us as their best enterprise SEO service provider, we keep transparency as a guarantee, not simply a policy. Our dedication to openness is reflected in the detailed reports and updates we share. Monthly Reports Designed for Large-Scale Businesses</p>
                                                        </Col>
                                                        <Col className="col-md-6">
                                                            <p>When you select our SEO strategies for large-scale businesses, you get access to monthly reports that are both informative and easy to read. Depending on your plan, our account managers provide frequent updates, often every week, to keep you informed.</p>
                                                        </Col>
                                                    </Row>
                                                    <Accordion flush>
                                                        <Accordion.Item eventKey="0">
                                                            <Accordion.Header className={styles.accordHead}>What Our Reports Include</Accordion.Header>
                                                            <Accordion.Body>
                                                                <ol>
                                                                    <li>A clear overview of performance metrics, helping you monitor the results of our <strong>enterprise SEO solutions for large corporations.</strong></li>
                                                                    <li>Useful insights based on your goals, so you can see exactly how our strategies work for your business.</li>
                                                                    <li>Simple, shareable formats that make it easy to show progress to decision-makers and team members.</li>
                                                                </ol>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                    </Accordion>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="third">
                                                    <Row>
                                                        <h3>Custom SEO Strategy</h3>
                                                        <Col className="col-md-6">
                                                            <p>Developing an SEO strategy for big businesses is our area of expertise as one of the top enterprise SEO service providers. Our customized approach guarantees that your website will rank higher visibility on Google and attract more relevant organic visitors. Our Custom SEO Solutions for Large Corporations precisely handle particular industry difficulties, whether you are increasing operations or managing a company with particular needs.</p>
                                                            <p>Our proven results speak volumes: clients have experienced significant ROI, enhanced keyword ranks, and exponential growth in organic traffic.  Let us help transform your online visibility into a powerful source of income. Choose a partner that understands enterprise needs and delivers measurable success.</p>
                                                        </Col>
                                                        <Col className="col-md-6">
                                                            <h4>Why is customized SEO the #1 choice?</h4>
                                                            <Accordion flush>
                                                                <Accordion.Item eventKey="0">
                                                                    <Accordion.Header className={styles.accordHead}>1. Advanced Search Engines</Accordion.Header>
                                                                    <Accordion.Body>
                                                                        Google now prioritizes relevant, high-quality information created for certain search intents. Using generic SEO strategies is no longer enough.
                                                                    </Accordion.Body>
                                                                </Accordion.Item>
                                                                <Accordion.Item eventKey="1">
                                                                    <Accordion.Header className={styles.accordHead}>2. Evolved User Behavior</Accordion.Header>
                                                                    <Accordion.Body>
                                                                        Customers want experiences that are customized to them. Personalized SEO ensures that your website exactly satisfies these requirements.
                                                                    </Accordion.Body>
                                                                </Accordion.Item>
                                                                <Accordion.Item eventKey="2">
                                                                    <Accordion.Header className={styles.accordHead}>3. Intensified Competition</Accordion.Header>
                                                                    <Accordion.Body>
                                                                        A one-size-fits-all strategy is unsustainable as more businesses vie for online presence. Personalized SEO gives you a competitive advantage.
                                                                    </Accordion.Body>
                                                                </Accordion.Item>
                                                                <Accordion.Item eventKey="3">
                                                                    <Accordion.Header className={styles.accordHead}>4. Measurable Results</Accordion.Header>
                                                                    <Accordion.Body>
                                                                        Analytics tools facilitate data-driven decision-making and plan improvement by assisting you in monitoring the return on investment of customized SEO efforts.
                                                                    </Accordion.Body>
                                                                </Accordion.Item>
                                                                <Accordion.Item eventKey="4">
                                                                    <Accordion.Header className={styles.accordHead}>5. {"Google's"} Algorithm Updates</Accordion.Header>
                                                                    <Accordion.Body>
                                                                        Websites that meet user needs and offer unique benefits are rewarded with regular updates. You stay ahead of these developments with customized SEO.
                                                                    </Accordion.Body>
                                                                </Accordion.Item>
                                                            </Accordion>
                                                        </Col>
                                                    </Row>
                                                    <p>You can make sure that your website stays competitive, relevant, and in line with search engine algorithms and customer expectations by choosing customized SEO.</p>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="fourth">
                                                    <h3>360-Degree SEO Solutions</h3>
                                                    <Row>
                                                        <Col className="col-md-6">
                                                            <p>If you understand SEO, you know that it includes a wide range of subjects, such as web design and content creation. Every element of your website needs to be optimized if you want to succeed in competitive search results, especially for large enterprises.</p>
                                                        </Col>
                                                        <Col className="col-md-6">
                                                            <p>We offer complete, all-inclusive enterprise SEO solutions as a full-service digital marketing firm. Whether {"you're"} a small business in North Carolina or trying to reach a global audience, our experience with SEO for huge enterprises guarantees that your website will stand out in search results.</p>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col className="col-md-6">
                                                            <p>We have skilled developers, content writers, and graphic designers on our committed team. This eliminates the need for you to work with outside parties on site copy, site improvements, or unique visuals. Rather, the entire process will be managed inside by your personal account manager.</p>
                                                        </Col>
                                                        <Col className="col-md-6">
                                                            <p>{"It's"} very quick and simple for your staff. No more exchanging information between businesses or juggling several sources. Your SEO campaigns will run much more smoothly and effectively if you collaborate with a single agency for everything instead.</p>
                                                        </Col>
                                                    </Row>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="fifth">
                                                    <h3>Proven Results for Enterprises</h3>
                                                    <p>Our area of expertise at Nextupgrad USA is US-based SEO advice for enterprises, helping large businesses in surviving in the competitive digital market of today. Our unique SEO services are made to promote growth and produce measurable results.</p>
                                                    <Row>
                                                        <Col className="col-md-6">
                                                            <h4>Key Achievements:</h4>
                                                            <ol>
                                                                <li>Generated over $2 million in revenue</li>
                                                                <li>Secured more than 1200 high-quality leads</li>
                                                                <li>Facilitated 750+ direct phone calls</li>
                                                                <li>Successfully managed 200+ transactions</li>
                                                            </ol>
                                                        </Col>
                                                        <Col className="col-md-6 align-content-center">
                                                            <p>These successes showcase our capacity to offer large corporations effective custom SEO solutions and adjust to the always shifting landscape of search algorithms.</p>
                                                        </Col>
                                                    </Row>
                                                    <p>Our award-winning team uses innovative methods in SEO management for multinational companies, fusing innovation and experience. We concentrate on producing tangible outcomes for your company, whether your goal is to raise revenue, get more leads, or expand the visibility of your brand.</p>
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
                                <h2><span>Results</span><br />What results do you get with us?</h2>
                                <p>We at Nextupgrad USA are committed to the success of your project. Our {"team's"} extensive experience and proven methodologies ensure results that surpass client expectations.</p>
                            </Col>
                        </Row>
                        <Row className={styles.resultRow}>
                            <Col className="col-md-4">
                                <div className={styles.resultCard}>
                                    <h3>Increased Product Visibility</h3>
                                    <p>A strong SEO strategy ensures the target audience can easily find the product website through numerous search queries.</p>
                                </div>
                            </Col>
                            <Col className="col-md-4 align-content-center">
                                <div>
                                    <h3>Steady Growth in Targeted Traffic</h3>
                                    <p>Website optimization for relevant search phrases drives more traffic and potential customers.</p>
                                </div>
                            </Col>
                            <Col className="col-md-4">
                                <div className={styles.resultCard}>
                                    <h3>Enhanced Leads Quality</h3>
                                    <p>We develop targeted search engine optimization strategies to help our clients reach specific audiences and achieve their business goals.</p>
                                </div>
                            </Col>
                        </Row>
                        <Row className="mb-5">
                            <Col className="col-md-4 align-content-center">
                                <div>
                                    <h3>ROI Growth</h3>
                                    <p>Effective SEO lowers customer acquisition costs while increasing the return on digital marketing investment.</p>
                                </div>
                            </Col>
                            <Col className="col-md-4">
                                <div className={styles.resultCard}>
                                    <h3>Preventing Unfair Actions by Competitors</h3>
                                    <p>We identify and neutralize vulnerabilities exploited by competitors.</p>
                                </div>
                            </Col>
                            <Col className="col-md-4 align-content-center">
                                <div>
                                    <h3>Conversion Growth</h3>
                                    <p>Optimizing content and adding conversion elements transforms organic traffic into targeted leads. We continuously work to improve the conversion rate.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className={styles.whyChoose}>
                    <Container>
                        <Row className="mb-5">
                            <Col>
                                <h2><span>Why</span><br />Why Nextupgrad</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="col-md-3">
                                <div className={styles.whyCard}>
                                    <TbTargetArrow />
                                    <h3>Results-Driven Approach</h3>
                                    <p>We prioritize measurable results and use data-driven strategies to deliver tangible improvements in your local search rankings and business growth.</p>
                                </div>
                            </Col>
                            <Col className="col-md-3">
                                <div className={styles.whyCard}>
                                    <MdOutlineSupportAgent />
                                    <h3>Dedicated Team & Support</h3>
                                    <p>Our team of experienced SEO professionals is committed to delivering exceptional service and providing ongoing support throughout your campaign.</p>
                                </div>
                            </Col>
                            <Col className="col-md-3">
                                <div className={styles.whyCard}>
                                    <GiTeamIdea />
                                    <h3>NYC Expertise & Experience</h3>
                                    <p>We have a deep understanding of the New York City market, its unique search landscape, and the specific needs of local businesses.</p>
                                </div>
                            </Col>
                            <Col className="col-md-3">
                                <div className={styles.whyCard}>
                                    <AiOutlineFileSearch />
                                    <h3>Transparent Communication</h3>
                                    <p>We believe in open and transparent communication, keeping you informed about the progress of your campaign and addressing any questions you may have.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className={styles.caseStudy}>
                    <Container>
                        <Row className="mb-5">
                            <Col>
                                <h2><span>Cases</span><br />Case Studies</h2>
                                <p>
                                    Check out our SEO services, which have helped businesses across industries achieve exceptional results.
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
                                                        <CountUp end={stat.end} duration={5} suffix={stat.suffix} />
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
                                <Link href="#" title="Schedule a Call Now" className={styles.ctaBtn}>
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
                                <h2><span>FAQs</span><br />Frequently Asked Questions</h2>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col className="col-md-8">
                                <Accordion defaultActiveKey="0" flush>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header className={styles.accordHead}>Q1 - What is the cost of corporate enterprise SEO services?</Accordion.Header>
                                        <Accordion.Body>
                                            <strong>Answer - </strong>The cost of enterprise SEO services is higher than for other segments. The exact price is calculated individually after analyzing the competition and the website.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header className={styles.accordHead}>Q2 - When to expect the results of the enterprise SEO services?</Accordion.Header>
                                        <Accordion.Body>
                                            <strong>Answer - </strong>Competition in promotion for enterprise companies is tight compared to other segments. So the first noticeable results are possible after 4-9 months of activities.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header className={styles.accordHead}>Q3 - What mistakes do customers make when using corporate SEO services?</Accordion.Header>
                                        <Accordion.Body>
                                            <strong>Answer - </strong>The main mistakes of clients when promoting the setting of unrealistic goals, the wrong choice of a company for promotion, and the wrong choice of KPI.
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

export default Home;
