import { Col, Nav, Row, Tab } from "react-bootstrap";
import Image from "next/image";

function HorizontalTabsExample() {
  return (
    <Tab.Container id="horizontal-tabs-example" defaultActiveKey="first">
      <Row>
        <Col className="homeTb" sm={12}>
          <Nav variant="pills" className="tabList">
            <Nav.Item>
              <Nav.Link eventKey="first">
                How & Where To
                <br />
                Sell Products Online
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">
                {"My Website Doesn’t"}
                <br />
                Drive Leads
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">
                My Website
                <br />
                {"Doesn’t Convert"}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth">
                My Website Traffic
                <br />
                Is Going Down
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fifth">
                My Website <br />
                {"Isn’t Making Money"}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="sixth">
                {"My Website Isn’t"}
                <br />
                Showing Up on Google
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={12}>
          <Tab.Content className="tabCont">
            <Tab.Pane className="tebPane" eventKey="first">
              <Row>
                <Col className="col-md-8 tabCon">
                  <h3>How & Where To Sell Products Online</h3>
                  <p>
                    MarketingCloudFX simplifies your decision-making by clearly
                    showing which marketing efforts are driving revenue for your
                    business.
                  </p>
                  <p>
                    By connecting the dots between your various marketing
                    activities or channels and actual sales, you can confidently
                    invest more in successful strategies and improve
                    underperforming ones.
                  </p>
                </Col>
                <Col className="col-md-4">
                  <Image
                    src={"/assets/hometabone.png"}
                    alt="placeholder"
                    title="tab-image"
                    width={1697}
                    height={996}
                  />
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane className="tebPane" eventKey="second">
              <Row>
                <Col className="col-md-8 tabCon">
                  <h3>{"My Website Doesn’t Drive Leads"}</h3>
                  <p>
                    MarketingCloudFX simplifies your decision-making by clearly
                    showing which marketing efforts are driving revenue for your
                    business.
                  </p>
                  <p>
                    By connecting the dots between your various marketing
                    activities or channels and actual sales, you can confidently
                    invest more in successful strategies and improve
                    underperforming ones.
                  </p>
                </Col>
                <Col className="col-md-4">
                  <Image
                    src={"/assets/hometabone.png"}
                    alt="placeholder"
                    title="tab-image"
                    width={1697}
                    height={996}
                  />
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane className="tebPane" eventKey="third">
              <Row>
                <Col className="col-md-8 tabCon">
                  <h3>{"My Website Doesn’t Convert"}</h3>
                  <p>
                    MarketingCloudFX simplifies your decision-making by clearly
                    showing which marketing efforts are driving revenue for your
                    business.
                  </p>
                  <p>
                    By connecting the dots between your various marketing
                    activities or channels and actual sales, you can confidently
                    invest more in successful strategies and improve
                    underperforming ones.
                  </p>
                </Col>
                <Col className="col-md-4">
                  <Image
                    src={"/assets/hometabone.png"}
                    alt="placeholder"
                    title="tab-image"
                    width={1697}
                    height={996}
                  />
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane className="tebPane" eventKey="fourth">
              <Row>
                <Col className="col-md-8 tabCon">
                  <h3>My Website Traffic Is Going Down</h3>
                  <p>
                    MarketingCloudFX simplifies your decision-making by clearly
                    showing which marketing efforts are driving revenue for your
                    business.
                  </p>
                  <p>
                    By connecting the dots between your various marketing
                    activities or channels and actual sales, you can confidently
                    invest more in successful strategies and improve
                    underperforming ones.
                  </p>
                </Col>
                <Col className="col-md-4">
                  <Image
                    src={"/assets/hometabone.png"}
                    alt="placeholder"
                    title="tab-image"
                    width={1697}
                    height={996}
                  />
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane className="tebPane" eventKey="fifth">
              <Row>
                <Col className="col-md-8 tabCon">
                  <h3>{"My Website Isn’t Making Money"}</h3>
                  <p>
                    MarketingCloudFX simplifies your decision-making by clearly
                    showing which marketing efforts are driving revenue for your
                    business.
                  </p>
                  <p>
                    By connecting the dots between your various marketing
                    activities or channels and actual sales, you can confidently
                    invest more in successful strategies and improve
                    underperforming ones.
                  </p>
                </Col>
                <Col className="col-md-4">
                  <Image
                    src={"/assets/hometabone.png"}
                    alt="placeholder"
                    title="tab-image"
                    width={1697}
                    height={996}
                  />
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane className="tebPane" eventKey="sixth">
              <Row>
                <Col className="col-md-8 tabCon">
                  <h3>{"My Website Isn’t Showing Up on Google"}</h3>
                  <p>
                    MarketingCloudFX simplifies your decision-making by clearly
                    showing which marketing efforts are driving revenue for your
                    business.
                  </p>
                  <p>
                    By connecting the dots between your various marketing
                    activities or channels and actual sales, you can confidently
                    invest more in successful strategies and improve
                    underperforming ones.
                  </p>
                </Col>
                <Col className="col-md-4">
                  <Image
                    src={"/assets/hometabone.png"}
                    alt="placeholder"
                    title="tab-image"
                    width={1697}
                    height={996}
                  />
                </Col>
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default HorizontalTabsExample;
