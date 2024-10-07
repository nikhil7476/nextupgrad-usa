import { Col, Nav, Row, Tab } from "react-bootstrap";
import Image from "next/image";

function LeftTabsExample() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col  className="homeTb" sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">
                How & Where To Sell Products Online
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">
                {"My Website Doesn’t Drive Leads"}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">
                {"My Website Doesn’t Convert"}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth">
                My Website Traffic Is Going Down
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fifth">
                {"My Website Isn’t Making Money"}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="sixth">
                {"My Website Isn’t Showing Up on Google"}
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content className="tabCont">
            <Tab.Pane className="tebPane" eventKey="first">
              <Image src={"/assets/hometabone.png"} alt="placeholder" title="tab-image" width={300} height={300}/>
              <h3>Close the loop between marketing and revenue</h3>
              <p>
                MarketingCloudFX simplifies your decision-making by clearly
                showing which marketing efforts are driving revenue for your
                business.
              </p>
              <p>
                By connecting the dots between your various marketing activities
                or channels and actual sales, you can confidently invest more in
                successful strategies and improve underperforming ones.
              </p>
            </Tab.Pane>
            <Tab.Pane className="tebPane" eventKey="second">
              <Image src={"/assets/hometabone.png"} alt="placeholder" title="tab-image" width={300} height={300}/>
              <h3>Close the loop between marketing and revenue</h3>
              <p>
                MarketingCloudFX simplifies your decision-making by clearly
                showing which marketing efforts are driving revenue for your
                business.
              </p>
              <p>
                By connecting the dots between your various marketing activities
                or channels and actual sales, you can confidently invest more in
                successful strategies and improve underperforming ones.
              </p>
            </Tab.Pane>
            <Tab.Pane className="tebPane" eventKey="third">
              <Image src={"/assets/hometabone.png"} alt="placeholder" title="tab-image" width={300} height={300}/>
              <h3>Close the loop between marketing and revenue</h3>
              <p>
                MarketingCloudFX simplifies your decision-making by clearly
                showing which marketing efforts are driving revenue for your
                business.
              </p>
              <p>
                By connecting the dots between your various marketing activities
                or channels and actual sales, you can confidently invest more in
                successful strategies and improve underperforming ones.
              </p>
            </Tab.Pane>
            <Tab.Pane className="tebPane" eventKey="fourth">
              <Image src={"/assets/hometabone.png"} alt="placeholder" title="tab-image" width={300} height={300}/>
              <h3>Close the loop between marketing and revenue</h3>
              <p>
                MarketingCloudFX simplifies your decision-making by clearly
                showing which marketing efforts are driving revenue for your
                business.
              </p>
              <p>
                By connecting the dots between your various marketing activities
                or channels and actual sales, you can confidently invest more in
                successful strategies and improve underperforming ones.
              </p>
            </Tab.Pane>
            <Tab.Pane className="tebPane" eventKey="fifth">
              <Image src={"/assets/hometabone.png"} alt="placeholder" title="tab-image" width={300} height={300}/>
              <h3>Close the loop between marketing and revenue</h3>
              <p>
                MarketingCloudFX simplifies your decision-making by clearly
                showing which marketing efforts are driving revenue for your
                business.
              </p>
              <p>
                By connecting the dots between your various marketing activities
                or channels and actual sales, you can confidently invest more in
                successful strategies and improve underperforming ones.
              </p>
            </Tab.Pane>
            <Tab.Pane className="tebPane" eventKey="sixth">
              <Image src={"/assets/hometabone.png"} alt="placeholder" title="tab-image" width={300} height={300}/>
              <h3>Close the loop between marketing and revenue</h3>
              <p>
                MarketingCloudFX simplifies your decision-making by clearly
                showing which marketing efforts are driving revenue for your
                business.
              </p>
              <p>
                By connecting the dots between your various marketing activities
                or channels and actual sales, you can confidently invest more in
                successful strategies and improve underperforming ones.
              </p>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default LeftTabsExample;