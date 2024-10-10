import Link from "next/link";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaUserGear } from "react-icons/fa6";
import { FaHandHoldingUsd } from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi";
import { FaMobileAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

function ServiceTab() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row className="nextServe">
        <Col className="serveTb" sm={4}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">
                Mobile App Development <span>01</span> <FaCircleArrowRight />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">
                Website Development <span>02</span> <FaCircleArrowRight />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">
                Software Development <span>03</span> <FaCircleArrowRight />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth">
                Digital Marketing <span>04</span> <FaCircleArrowRight />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fifth">
                Hire Dedicated Developers <span>05</span> <FaCircleArrowRight />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={8} className="serCont">
          <Tab.Content className="serveCont">
            <Tab.Pane className="servePane" eventKey="first">
              <h3>Mobile App Development</h3>
              <h4>Elevating Business Experiences, One App At A Time</h4>
              <p>
                Want to develop a business app that can take your business to
                the next level? Seek mobile app development services from Dev
                Technosys. With a team of dedicated developers for hire, we can
                completely transform your business success. Get highly
                interactive and fully-functional mobile apps!
              </p>
              <Link href="#" title="Mobile App Development">
                Know More <FaArrowRightLong/>
              </Link>
              <Row className="servIcon">
                <Col className="col-md-3">
                  <HiLightBulb />
                  <p>Industrial<br/>Knowledge</p>
                </Col>
                <Col className="col-md-3">
                  <FaHandHoldingUsd />
                  <p>Cost-effective<br/>Solutions</p>
                </Col>
                <Col className="col-md-3">
                  <FaUserGear />
                  <p>Technical<br/>Expertise</p>
                </Col>
                <Col className="col-md-3">
                  <FaMobileAlt />
                  <p>Updated Mobile<br/>Apps</p>
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane className="servePane" eventKey="second">
              <h3>Website Development</h3>
              <h4>Elevating Business Experiences, One App At A Time</h4>
              <p>
                Want to develop a business app that can take your business to
                the next level? Seek mobile app development services from Dev
                Technosys. With a team of dedicated developers for hire, we can
                completely transform your business success. Get highly
                interactive and fully-functional mobile apps!
              </p>
              <Link href="#" title="Mobile App Development">
                Know More <FaArrowRightLong/>
              </Link>
              <Row className="servIcon">
                <Col className="col-md-3">
                  <HiLightBulb />
                  <p>Industrial<br/>Knowledge</p>
                </Col>
                <Col className="col-md-3">
                  <FaHandHoldingUsd />
                  <p>Cost-effective<br/>Solutions</p>
                </Col>
                <Col className="col-md-3">
                  <FaUserGear />
                  <p>Technical<br/>Expertise</p>
                </Col>
                <Col className="col-md-3">
                  <FaMobileAlt />
                  <p>Updated Mobile<br/>Apps</p>
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane className="servePane" eventKey="third">
              <h3>Software Development</h3>
              <h4>Elevating Business Experiences, One App At A Time</h4>
              <p>
                Want to develop a business app that can take your business to
                the next level? Seek mobile app development services from Dev
                Technosys. With a team of dedicated developers for hire, we can
                completely transform your business success. Get highly
                interactive and fully-functional mobile apps!
              </p>
              <Link href="#" title="Mobile App Development">
                Know More <FaArrowRightLong/>
              </Link>
              <Row className="servIcon">
                <Col className="col-md-3">
                  <HiLightBulb />
                  <p>Industrial<br/>Knowledge</p>
                </Col>
                <Col className="col-md-3">
                  <FaHandHoldingUsd />
                  <p>Cost-effective<br/>Solutions</p>
                </Col>
                <Col className="col-md-3">
                  <FaUserGear />
                  <p>Technical<br/>Expertise</p>
                </Col>
                <Col className="col-md-3">
                  <FaMobileAlt />
                  <p>Updated Mobile<br/>Apps</p>
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane className="servePane" eventKey="fourth">
              <h3>Digital Marketing</h3>
              <h4>Elevating Business Experiences, One App At A Time</h4>
              <p>
                Want to develop a business app that can take your business to
                the next level? Seek mobile app development services from Dev
                Technosys. With a team of dedicated developers for hire, we can
                completely transform your business success. Get highly
                interactive and fully-functional mobile apps!
              </p>
              <Link href="#" title="Mobile App Development">
                Know More <FaArrowRightLong/>
              </Link>
              <Row className="servIcon">
                <Col className="col-md-3">
                  <HiLightBulb />
                  <p>Industrial<br/>Knowledge</p>
                </Col>
                <Col className="col-md-3">
                  <FaHandHoldingUsd />
                  <p>Cost-effective<br/>Solutions</p>
                </Col>
                <Col className="col-md-3">
                  <FaUserGear />
                  <p>Technical<br/>Expertise</p>
                </Col>
                <Col className="col-md-3">
                  <FaMobileAlt />
                  <p>Updated Mobile<br/>Apps</p>
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane className="servePane" eventKey="fifth">
              <h3>Hire Dedicated Developers</h3>
              <h4>Elevating Business Experiences, One App At A Time</h4>
              <p>
                Want to develop a business app that can take your business to
                the next level? Seek mobile app development services from Dev
                Technosys. With a team of dedicated developers for hire, we can
                completely transform your business success. Get highly
                interactive and fully-functional mobile apps!
              </p>
              <Link href="#" title="Mobile App Development">
                Know More <FaArrowRightLong/>
              </Link>
              <Row className="servIcon">
                <Col className="col-md-3">
                  <HiLightBulb />
                  <p>Industrial<br/>Knowledge</p>
                </Col>
                <Col className="col-md-3">
                  <FaHandHoldingUsd />
                  <p>Cost-effective<br/>Solutions</p>
                </Col>
                <Col className="col-md-3">
                  <FaUserGear />
                  <p>Technical<br/>Expertise</p>
                </Col>
                <Col className="col-md-3">
                  <FaMobileAlt />
                  <p>Updated Mobile<br/>Apps</p>
                </Col>
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default ServiceTab;
