import { Col, Nav, Row, Tab } from "react-bootstrap";

function ServiceTab() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col className="serveTb" sm={4}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Mobile App Development <span>01</span></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Website Development <span>02</span></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Software Development <span>03</span></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth">Digital Marketing <span>04</span></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fifth">Hire Dedicated Developers <span>05</span></Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={8}>
          <Tab.Content className="serveCont">
            <Tab.Pane className="servePane" eventKey="first">
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

export default ServiceTab;
