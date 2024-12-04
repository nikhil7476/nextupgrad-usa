import Head from "next/head";
import Link from "next/link";
import CountUp from "react-countup";
import { Col, Container, Row, Nav, Tab, Table } from "react-bootstrap";
import style from "@/styles/SeoService.module.css";

const SeoService = () => {
    return (
        <>
            <Head>
                <title>SEO Services - Nextupgrad USA</title>
            </Head>
            <div className={style.serviceHdr}>
                <section className={style.serviceBanner}>
                    <Container>
                        <Row>
                            <Col className="col-md-6">
                                <h1>SEO Services</h1>
                                <p>{"In today's digital age, a strong online presence is essential. At Nextupgrad USA, we specialize in providing premier SEO services to help your business excel in a competitive online market. Our experts employ advanced strategies, industry best practices, and data-driven insights to enhance your website's visibility, attract high-quality traffic, and deliver measurable results. Whether you're a startup aiming to establish yourself or an established brand seeking to dominate your niche, we have the tools and expertise to achieve your goals."}</p>
                            </Col>
                            <Col className="col-md-6">
                                <Row>
                                    <Col className="col-md-6">
                                        <div className={style.flipBox}>
                                            <div className={style.flipBoxInner}>
                                                <div className={style.flipBoxFront}>
                                                    <h2>Front Side</h2>
                                                </div>
                                                <div className={style.flipBoxBack}>
                                                    <h2>Back Side</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="col-md-6">
                                        <div className={style.flipBox}>
                                            <div className={style.flipBoxInner}>
                                                <div className={style.flipBoxFront}>
                                                    <h2>Front Side</h2>
                                                </div>
                                                <div className={style.flipBoxBack}>
                                                    <h2>Back Side</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="col-md-6">
                                        <div className={style.flipBox}>
                                            <div className={style.flipBoxInner}>
                                                <div className={style.flipBoxFront}>
                                                    <h2>Front Side</h2>
                                                </div>
                                                <div className={style.flipBoxBack}>
                                                    <h2>Back Side</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="col-md-6">
                                        <div className={style.flipBox}>
                                            <div className={style.flipBoxInner}>
                                                <div className={style.flipBoxFront}>
                                                    <h2>Front Side</h2>
                                                </div>
                                                <div className={style.flipBoxBack}>
                                                    <h2>Back Side</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className={style.deliverables}>
                    <Container>
                        <h2>Our Deliverables</h2>
                        <p>{"Experience comprehensive search engine optimization (SEO) services with Nextupgrad USA. Our full-service solutions attract qualified traffic and convert it into revenue. With Nextupgrad USA as your SEO agency, you'll benefit from strategic development, performance optimization, continuous measurement, and adaptive strategies."}</p>
                        <Row>
                            <Col>
                                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                    <Row>
                                        <Col sm={3}>
                                            <Nav variant="pills" className="flex-column">
                                                <Nav.Item>
                                                    <Nav.Link eventKey="first">Overview</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="second">Performance Tracking & Transparent Reporting</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="third">Keyword Research</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="fourth">Link Building</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="fifth">On-page SEO</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="sixth">Off-page SEO</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="seventh">Technical SEO</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="eight">Content Creation & Optimization</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                        </Col>
                                        <Col sm={9}>
                                            <Tab.Content>
                                                <Tab.Pane eventKey="first">
                                                    <h3>Overview</h3>
                                                    <p>Achieve unparalleled SEO results with customized solutions.</p>
                                                    <p>Align your SEO goals with your unique business needs and reap the rewards of targeted optimization.</p>
                                                    <p>At Nextupgrad USA, our SEO approach is driven by revenue marketing. This means every optimization is designed to impact your bottom line. Discover how our SEO firm helps grow our {"client's"} businesses through revenue-focused SEO.</p>
                                                    <Link href="#" title="Send a Proposal Now">Send a Proposal Now</Link>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="second">
                                                    <h2>Performance Tracking & Transparent Reporting</h2>
                                                    <p>A comprehensive website SEO audit forms the cornerstone of a successful SEO strategy. Our SEO services meticulously analyze every aspect of your {"website's"} performance, providing actionable insights for growth.</p>
                                                    <p>Your dedicated account manager will assess:</p>
                                                    <ol>
                                                        <li>Your {"website’s"} structure and content</li>
                                                        <li>Google Analytics data for traffic and performance insights</li>
                                                        <li>Google Search Console metrics for visibility and indexing</li>
                                                        <li>Competitor strategies to identify market opportunities</li>
                                                        <li>Additional key SEO factors tailored to your industry</li>
                                                    </ol>
                                                    <p>We leverage advanced tools as part of our <strong>SEO marketing</strong> approach. These tools allow our <strong>SEO agency</strong> to uncover hidden opportunities, fix underlying issues, and craft a robust strategy to position your business competitively.</p>
                                                    <p>We deliver actionable recommendations that drive tangible results by focusing on your website's strengths and addressing weaknesses. With our expertise, your business can achieve enhanced visibility, traffic, and conversions through cutting-edge <strong>SEO services</strong>.</p>
                                                    <p>This thorough audit lays the groundwork for ongoing success, enabling your website to perform optimally in search engines. Let our <strong>SEO agency</strong> transform your online presence into a high-performing asset!</p>
                                                    <Link href="#" title="Send a Proposal Now">Send a Proposal Now</Link>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="third">
                                                    <h2>Keyword Research</h2>
                                                    <p>In {"today’s"} competitive digital landscape, ranking high on search engines is essential. Our managed SEO services are designed to help you achieve this with focused keyword research.</p>
                                                    <ol>
                                                        <li><strong>Understand Your Current Position:</strong> We start by analyzing the keywords you already rank for to identify strengths and areas for growth.</li>
                                                        <li><strong>Outpace Competitors:</strong> By studying the keywords your competitors rank for, we uncover strategic opportunities to help you stay ahead.</li>
                                                        <li><strong>Discover New Potential:</strong> Using advanced tools and audience insights, we identify high-impact keywords relevant to your industry and customer behavior.</li>
                                                    </ol>
                                                    <p>This step-by-step approach ensures you connect with your audience through meaningful search queries, increasing your visibility and engagement. Whether {"you’re"} targeting local customers or a broader market, our methods help your business rise in the search rankings.</p>
                                                    <p>Start building your path to better visibility today.</p>
                                                    <Link href="#" title="Send a Proposal Now">Send a Proposal Now</Link>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="fourth">
                                                    <h2>Link Building</h2>
                                                    <p>At <strong>Nextupgrad USA</strong>, we focus on building effective SEO solutions designed to meet your business goals. At the heart of our service is <strong>custom link building</strong>, a key factor in improving your online presence.</p>
                                                    <h3>Why Link Building is Key:</h3>
                                                    <p>Backlinks from trusted websites signal search engines to rank your site higher, driving more visitors. But not all links add {"value - that’s"} where our <strong>dedicated team</strong> steps in.</p>
                                                    <Row>
                                                        <Col className="col-md-6">
                                                            <h3>Our Approach:</h3>
                                                            <ol>
                                                                <li><strong>Smart Research:</strong> We identify websites that matter to your business and audience.</li>
                                                                <li><strong>Compelling Content Creation:</strong> We create content that attracts links naturally.</li>
                                                                <li><strong>Real Connections:</strong> Our outreach builds relationships to secure links on respected platforms.</li>
                                                            </ol>
                                                        </Col>
                                                        <Col className="col-md-6">
                                                            <h3>What You Get:</h3>
                                                            <ol>
                                                                <li><strong>Better Search Rankings:</strong> Be more visible when customers search for your services.</li>
                                                                <li><strong>Stronger Website Reputation:</strong> Build trust with search engines and users.</li>
                                                                <li><strong>More Quality Visitors:</strong> Get traffic that matters for your business.</li>
                                                            </ol>
                                                        </Col>
                                                    </Row>
                                                    <p>We focus on making every link count, helping businesses like yours succeed online with strategies that work and results you can trust.</p>
                                                    <h3>{"Let’s"} Work Together</h3>
                                                    <p>Want your website to rank higher and attract more customers? <strong>Reach out to Nextupgrad USA today. {"Let’s"} build a stronger online presence for your business—starting now!</strong></p>
                                                    <Link href="#" title="Send a Proposal Now">Send a Proposal Now</Link>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="fifth">
                                                    <h2>On-page SEO</h2>
                                                    <p>At Nextupgrad USA, our on-page SEO services are here to make your website work harder for you. As a trusted <strong>SEO agency</strong>, we handle all the important details to help your site show up higher on search engines and attract more visitors.<br />{"Here’s"} what we do:</p>
                                                    <ol>
                                                        <li><strong>Title Tags:</strong> Write clear and effective titles that include important keywords.</li>
                                                        <li><strong>Meta Descriptions:</strong> Create short, attention-grabbing descriptions to get more clicks.</li>
                                                        <li><strong>Headings (H1, H2, etc.):</strong> Organize your content to make it easy for users and search engines to read.</li>
                                                        <li><strong>Content Updates:</strong> Add the right keywords naturally to make your pages more useful and visible.</li>
                                                        <li><strong>SEO-Friendly URLs:</strong> Simplify and clean up your links for better search rankings.</li>
                                                        <li><strong>User Experience (UX):</strong> Make your site simple to use, so visitors stay longer and take action.</li>
                                                    </ol>
                                                    <p>Unlike many <strong>SEO companies</strong>, we focus on what actually works for your business. Whether you're a small business looking for <strong>SEO services near Chicago</strong> or competing in a busy market, {"we’ll"} make sure your site keeps up with the latest search trends.</p>
                                                    <p>As one of the best <strong>SEO optimization companies in New York</strong>, {"we’ll"} help you get more customers, increase traffic, and improve your online visibility. From writing better headlines to fixing the technical stuff, we take care of it all.</p>
                                                    <p>Want to see how we can help? Let us create a custom plan just for your website.</p>
                                                    <Link href="#" title="Send a Proposal Now">Send a Proposal Now</Link>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="sixth">
                                                    <h2>Off-page SEO</h2>
                                                    <p>Take your website to the next level with our proven off-page SEO strategies. As a trusted SEO expert in NYC, we focus on improving factors outside your website that boost your online visibility and rankings.</p>
                                                    <h3>What We Do for Your Off-Page SEO:</h3>
                                                    <ol>
                                                        <li><strong>Content Creation:</strong> We create interesting and shareable content that gets more backlinks and grabs attention on social media. This approach makes us one of the best SEO services near NYC.</li>
                                                        <li><strong>Outreach:</strong> We connect with other websites and online platforms to get your brand noticed by more people.</li>
                                                        <li><strong>Content Promotion:</strong> We share your content on the right channels to bring in more visitors and grow your audience.</li>
                                                        <li><strong>Industry Connections:</strong> Build partnerships within your field to make your brand more recognizable and respected.</li>
                                                        <li><strong>Link Check:</strong> We check your {"website’s"} links to find {"what’s"} working and fix {"what’s"} not, keeping your site in good shape for search engines.</li>
                                                        <li><strong>Remove Bad Links:</strong> We help clean up harmful links that could hurt your rankings.</li>
                                                    </ol>
                                                    <p>Our off-page SEO services are designed to help businesses looking for reliable SEO services near NYC. Whether {"you’re"} a small local business or a growing company, we make sure you stand out online.</p>
                                                    <p><strong>Ready to work with the best SEO company in NYC? Contact us today and {"let’s"} get started!</strong></p>
                                                    <Link href="#" title="Send a Proposal Now">Send a Proposal Now</Link>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="seventh">
                                                    <h2>Technical SEO</h2>
                                                    <p>Looking for the best SEO company in NYC to fix your website's technical issues? {"We’re"} here to help. Our SEO services near NYC make it easy for search engines and visitors to use your site.<br />{"Here’s"} what we do:</p>
                                                    <ol>
                                                        <li>Fix <strong>robots.txt files</strong> to guide search engines properly.</li>
                                                        <li>Build and submit <strong>XML and HTML sitemaps</strong> so all pages are found.</li>
                                                        <li>Make your site secure to build trust with your users.</li>
                                                        <li>Improve your {"site’s"} navigation for better usability.</li>
                                                        <li>Ensure your site works perfectly on mobile devices.</li>
                                                        <li>Speed up your pages so they load faster.</li>
                                                    </ol>
                                                    <p>Unlike other <strong>SEO optimization companies in NYC</strong>, we focus on practical solutions to make your site work better without breaking the bank. Want to know about our <strong>SEO package pricing?</strong> We have options that fit businesses of all sizes.</p>
                                                    <p>Your website should work for you, not against you. Call the best <strong>SEO company in NYC</strong> today and {"let’s"} make your site work the way it should!</p>
                                                    <Link href="#" title="Send a Proposal Now">Send a Proposal Now</Link>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="eight">
                                                    <h2>Content creation and optimization</h2>
                                                    <p>Looking for the best SEO company in Texas to fix your website's technical issues? {"We’re"} here to help. Our SEO services near Pennsylvania make it easy for search engines and visitors to use your site.<br />{"Here’s"} what we do:</p>
                                                    <ol>
                                                        <li>Fix <strong>robots.txt files</strong> to guide search engines properly.</li>
                                                        <li>Build and submit <strong>XML and HTML sitemaps</strong> so all pages are found.</li>
                                                        <li>Make your site secure to build trust with your users.</li>
                                                        <li>Improve your {"site’s"} navigation for better usability.</li>
                                                        <li>Ensure your site works perfectly on mobile devices.</li>
                                                        <li>Speed up your pages so they load faster.</li>
                                                    </ol>
                                                    <p>Unlike other <strong>SEO optimization companies in NYC</strong>, we focus on practical solutions to make your site work better without breaking the bank. Want to know about our <strong>SEO package pricing</strong>? We have options that fit businesses of all sizes.</p>
                                                    <p>Your website should work for you, not against you. Call the <strong>best SEO company in NYC</strong> today and {"let’s"} make your site work the way it should!</p>
                                                    <Link href="#" title="Send a Proposal Now">Send a Proposal Now</Link>
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
                        <p>Check out our SEO services, which have helped businesses across industries achieve exceptional results. {"Here’s"} a glimpse of what {"we’ve"} done for our clients:</p>
                        <Row>
                            <Col className="col-md-4">
                                <div>
                                    <div>
                                        <h3>Transforming security solutions with innovative technology</h3>
                                    </div>
                                    <div>
                                        <p><span><CountUp end={100} duration={5} suffix="+" /></span><br />Global Brands Empowered</p>
                                        <p><span><CountUp end={1000} duration={5} suffix="+" /></span><br />Integrated Security Deployments</p>
                                        <p><span><CountUp end={20} duration={5} suffix="%" /></span><br />Quicker Incident Responses</p>
                                    </div>
                                </div>
                            </Col>
                            <Col className="col-md-4">
                                <div>
                                    <div>
                                        <h3>Transforming security solutions with innovative technology</h3>
                                    </div>
                                    <div>
                                        <p><span><CountUp end={100} duration={5} suffix="+" /></span><br />Global Brands Empowered</p>
                                        <p><span><CountUp end={1000} duration={5} suffix="+" /></span><br />Integrated Security Deployments</p>
                                        <p><span><CountUp end={20} duration={5} suffix="%" /></span><br />Quicker Incident Responses</p>
                                    </div>
                                </div>
                            </Col>
                            <Col className="col-md-4">
                                <div>
                                    <div>
                                        <h3>Transforming security solutions with innovative technology</h3>
                                    </div>
                                    <div>
                                        <p><span><CountUp end={100} duration={5} suffix="+" /></span><br />Global Brands Empowered</p>
                                        <p><span><CountUp end={1000} duration={5} suffix="+" /></span><br />Integrated Security Deployments</p>
                                        <p><span><CountUp end={20} duration={5} suffix="%" /></span><br />Quicker Incident Responses</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Link href="#" title="Schedule a Call Now">Schedule a Call Now</Link>
                    </Container>
                </section>
                <section className={style.approach}>
                    <Container>
                        <h2>Our Approach</h2>
                        <h3>Unveiling Our SEO {"Agency’s"} R.O.C.K.E.T. Strategy<br /><span>From Search to Success: $2 Million Revenue Generated</span></h3>
                        <p>Discover how our proven R.O.C.K.E.T. system is transforming SEO results. With strategies designed for real impact, {"we’ve"} helped our recent clients earn over $2 Million in search revenue. Let us help your brand reach the top today!</p>
                        <Row>
                            <Col>
                                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                    <Row>
                                        <Col sm={1}>
                                            <Nav variant="pills" className="flex-column">
                                                <Nav.Item>
                                                    <Nav.Link eventKey="first">R</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="second">O</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="third">C</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="fourth">K</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="fifth">E</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="sixth">T</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                        </Col>
                                        <Col sm={11}>
                                            <Tab.Content>
                                                <Tab.Pane eventKey="first">
                                                    <h4>Research: Building the Right SEO Plan for Your Business</h4>
                                                    <p>Every business is different, with its own goals, challenges, and strengths. {"That’s"} why our SEO process starts with understanding what makes your business unique. {"Here’s"} how we go about it:</p>
                                                    <ol>
                                                        <li><strong>Learning About Your Goals:</strong> Whether you want more website visitors, better leads, or higher sales, we make it a point to know what success means to you.</li>
                                                        <li><strong>Studying Your Industry:</strong> We take a close look at your industry to figure out what works, what {"doesn’t"}, and how your business can stand out.</li>
                                                        <li><strong>Looking at Your Competition:</strong> Knowing what your competitors are doing helps us figure out what your business can do better. This way, we help you stay ahead.</li>
                                                        <li><strong>Checking Your Website:</strong> Your website is your online home. We examine it closely to find {"what’s"} working well and what could use improvement to get the results {"you’re"} after.</li>
                                                    </ol>
                                                    <p>With this information—and your input—our SEO experts can create a clear and effective plan. This ensures your customers can find your business easily and understand why {"you’re"} the best choice for their needs.</p>
                                                    <Link href="#" title="Send a Proposal Now">Send a Proposal Now</Link>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="second">
                                                    <h4>Optimize</h4>
                                                    <p>Nextupgrad USA makes it simple to improve your online visibility by focusing on over 200+ factors that influence search results. Our team of skilled professionals works closely with you to ensure your website gets noticed.</p>
                                                    <ol>
                                                        <li><strong>On-Page SEO:</strong> We create clear and engaging title tags, meta descriptions, and headers that attract visitors.</li>
                                                        <li><strong>Off-Page SEO:</strong> Our experts build strong, organic links that enhance your {"site’s"} authority and trustworthiness.</li>
                                                        <li><strong>Technical SEO:</strong> We fix speed issues, optimize your site for mobile devices, and ensure everything runs smoothly behind the scenes.</li>
                                                    </ol>
                                                    <p>Our team includes specialists in SEO, website development, and content writing who collaborate to make your website stand out.</p>
                                                    <p>Get your website working harder for you. <strong>Work with Nextupgrad USA to reach more people and grow your business online</strong>.</p>
                                                    <Link href="#" title="Send a Proposal Now">Send a Proposal Now</Link>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="third">
                                                    <h4>Content</h4>
                                                    <p>Content is a powerful way to grab attention, bring in new customers, and keep them coming back. At our SEO company, we focus on making your content work harder for you. {"Here’s"} what we do:</p>
                                                    <ol>
                                                        <li><strong>Finding the Right Keywords:</strong> We dive into research to figure out what your audience is searching for. This means we pick the words and phrases that will help your content show up when it matters most.</li>
                                                        <li><strong>Creating Easy-to-Read Content:</strong> Our team writes articles, blog posts, and other content {"that’s"} simple, clear, and built to attract attention online. {"It’s"} not just about sounding {"good—it’s"} about getting people to take action.</li>
                                                        <li><strong>Helping Customers at Every Step:</strong> Whether someone is just learning about your business, comparing options, or ready to buy, we make sure the content speaks to them in a way that makes sense for where they are in their journey.</li>
                                                        <li><strong>Using Smart Tools for Quick Wins:</strong> We use AI to find ways to boost the reach of your existing content fast, like improving rankings or driving more visits.</li>
                                                        <li><strong>Keeping an Eye on Performance:</strong> We track how your content is doing with tools like Google Analytics and Search Console. This helps us make better decisions and get you better results over time.</li>
                                                    </ol>
                                                    <p>Prefer to create your own content? No problem! Your account manager can give you tips, a list of keywords to use, and a plan to help your writing rank higher and reach more people.</p>
                                                    <Link href="#" title="Send a Proposal Now">Send a Proposal Now</Link>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="fourth">
                                                    <h4>Keywords</h4>
                                                    <p>Optimizing your SEO strategy starts with picking the right keywords. {"Here's"} how you can improve your online visibility and bring in more customers:</p>
                                                    <ol>
                                                        <li><strong>Get the Right Visitors:</strong> Choose keywords that attract people genuinely interested in what your business offers. These should match what your customers are actually searching for online.</li>
                                                        <li><strong>Link Keywords to Your Goals:</strong> Focus on keywords that directly support your business goals, like boosting sales, increasing inquiries, or driving more visits to your website.</li>
                                                        <li><strong>Spot High-Value Keywords:</strong> Use research to find keywords that deliver the most bang for your buck—whether {"it’s"} specific phrases with low competition or trending terms in your field.</li>
                                                        <li><strong>Find New Ideas:</strong> Look beyond the usual keywords to discover untapped opportunities. Research keywords that your competitors might not be using yet.</li>
                                                        <li><strong>Work with an SEO Specialist:</strong> An expert can help keep your keywords effective by tracking results and making updates based on what's working and {"what’s"} not.</li>
                                                        <li><strong>Make Your Business Easy to Find:</strong> Your goal is to match your website with the words people use when they search, so they can quickly connect with your business.</li>
                                                    </ol>
                                                    <p>This simple, focused strategy will help your website stand out, bring in the right traffic, and turn more visitors into customers.</p>
                                                    <Link href="#" title="Send a Proposal Now">Send a Proposal Now</Link>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="fifth">
                                                    <h4>Evaluation</h4>
                                                    <p>Getting high rankings on Google starts with a solid backlink profile. However, figuring out how to create and manage quality backlinks can feel overwhelming. {"That’s"} where we come in.</p>
                                                    <p>Our SEO team is one of the best in the industry, helping businesses from all types of industries get links from respected websites. These links not only improve your {"website’s"} authority but also attract the right visitors who are more likely to become customers.</p>
                                                    <p>A good backlink profile means your business can rank higher for the keywords that matter most to your audience. This leads to more people finding your website, visiting your pages, and taking action—whether {"that’s"} making a purchase, booking a service, or contacting you.</p>
                                                    <p>{"Don’t"} let the complexity of SEO hold you back. Let us help you create a backlink strategy that delivers real results.</p>
                                                    <Link href="#" title="Send a Proposal Now">Send a Proposal Now</Link>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="sixth">
                                                    <h4>Testing</h4>
                                                    <p>Getting people to visit your website is only the first step. Turning those visitors into paying customers is where the real work begins—and {"that’s"} where we can help.</p>
                                                    <p>Our SEO services make sure your business shows up where it matters most: at the top of search results. We focus on bringing the right people to your site using smart keyword choices, clear website structures, and engaging content.</p>
                                                    <p>But {"it’s"} not just about getting more visitors. With our conversion-focused approach, we help make sure those visitors take action—whether {"it’s"} making a purchase, booking a service, or filling out a form. Using tools like Google Analytics and conversion tracking, we identify {"what’s"} working, {"what’s"} not, and how to improve. From clearer calls-to-action to making the checkout process easier, we focus on practical changes that deliver results.</p>
                                                    <p>If {"you’re"} looking to grow your sales or leads, our combined SEO and CRO strategies make it simple for people to find you—and choose you.</p>
                                                    <p>Ready to turn traffic into revenue? Contact us today to get started!</p>
                                                    <Link href="#" title="Send a Proposal Now">Send a Proposal Now</Link>
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Col>
                                    </Row>
                                </Tab.Container>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className={style.pricing}>
                    <Container>
                        <h2>Pricing Model</h2>
                        <Row className="justify-content-center">
                            <Col className="col-md-11">
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
                                            <td>A business looking to grow its organic search visibility, traffic, and revenue</td>
                                        </tr>
                                        <tr>
                                            <td>Hourly</td>
                                            <td>Smaller SEO projects Small companies</td>
                                            <td>A small business looking to investigate a drop in traffic following a redesign</td>
                                        </tr>
                                        <tr>
                                            <td>Project Based</td>
                                            <td>One-time SEO projects Small, midsized, and large companies</td>
                                            <td>A business looking to improve its sitewide page spread</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col className="col-md-11">
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
                        <Link href="#" title="See Our Affordable Plans">See Our Affordable Plans</Link>
                    </Container>
                </section>
            </div>
        </>
    );
};

export default SeoService;
