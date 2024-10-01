// import { Col, Nav, Row, Tab } from "react-bootstrap";

// function LeftTabsExample() {
//   return (
//     <Tab.Container id="left-tabs-example" defaultActiveKey="first">
//       <Row>
//         <Col sm={3}>
//           <Nav variant="pills" className="flex-column">
//             <Nav.Item>
//               <Nav.Link eventKey="first">
//                 How & Where To Sell Products Online
//               </Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link eventKey="second">
//                 {"My Website Doesn’t Drive Leads"}
//               </Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link eventKey="third">
//                 {"My Website Doesn’t Convert"}
//               </Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link eventKey="fourth">
//                 My Website Traffic Is Going Down
//               </Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link eventKey="fifth">
//                 {"My Website Isn’t Making Money"}
//               </Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link eventKey="sixth">
//                 {"My Website Isn’t Showing Up on Google"}
//               </Nav.Link>
//             </Nav.Item>
//           </Nav>
//         </Col>
//         <Col sm={9}>
//           <Tab.Content>
//             <Tab.Pane eventKey="first">
//               First tab content
//               <h2>Close the loop between marketing and revenue</h2>
//               <p>
//                 MarketingCloudFX simplifies your decision-making by clearly
//                 showing which marketing efforts are driving revenue for your
//                 business.
//               </p>
//               <p>
//                 By connecting the dots between your various marketing activities
//                 or channels and actual sales, you can confidently invest more in
//                 successful strategies and improve underperforming ones.
//               </p>
//             </Tab.Pane>
//             <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
//             <Tab.Pane eventKey="third">Third tab content</Tab.Pane>
//             <Tab.Pane eventKey="fourth">Fourth tab content</Tab.Pane>
//             <Tab.Pane eventKey="fifth">Fifth tab content</Tab.Pane>
//             <Tab.Pane eventKey="sixth">Sixth tab content</Tab.Pane>
//           </Tab.Content>
//         </Col>
//       </Row>
//     </Tab.Container>
//   );
// }

// export default LeftTabsExample;

import Link from "next/link";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { useState } from "react";

function LeftTabsExample() {
  const [activeKey, setActiveKey] = useState("first");

  return (
    <Tab.Container id="left-tabs-example" activeKey={activeKey}>
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link
                eventKey="first"
                onMouseEnter={() => setActiveKey("first")}
              >
                Design
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="second"
                onMouseEnter={() => setActiveKey("second")}
              >
                Content Marketing
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="third"
                onMouseEnter={() => setActiveKey("third")}
              >
                Website Development
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="fourth"
                onMouseEnter={() => setActiveKey("fourth")}
              >
                Mobile App Development
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <Container>
                <Row>
                  <div className="col-xs-12 col-sm">
                    <ul className="list-group">
                      <li className="list-group-item">
                        <Link href="#">Website Design</Link>
                      </li>
                      <li className="list-group-item">
                        <Link href="#">Website Redesign</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xs-12 col-sm">
                    <ul className="list-group">
                      <li className="list-group-item">
                        <Link href="#">Rapid Website Design</Link>
                      </li>
                      <li className="list-group-item">
                        <Link href="#">Social Media Design</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xs-12 col-sm">
                    <ul className="list-group">
                      <li className="list-group-item">
                        <Link href="#">E-commerce website Design</Link>
                      </li>
                      <li className="list-group-item">
                        <Link href="#">Email Marketing Testing & Design</Link>
                      </li>
                    </ul>
                  </div>
                </Row>
              </Container>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <Container>
                <Row>
                  <div className="col-xs-12 col-sm">
                    <ul className="list-group">
                      <li className="list-group-item">
                        <Link href="#">SEO Copywriting</Link>
                      </li>
                      <li className="list-group-item">
                        <Link href="#">Content Marketing Services</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xs-12 col-sm">
                    <ul className="list-group">
                      <li className="list-group-item">
                        <Link href="#">Social Media Management</Link>
                      </li>
                      <li className="list-group-item">
                        <Link href="#">Inforgraphic & Motion Graphics</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xs-12 col-sm">
                    <ul className="list-group">
                      <li className="list-group-item">
                        <Link href="#">Youtube Advertising</Link>
                      </li>
                    </ul>
                  </div>
                </Row>
              </Container>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <Container>
                <Row>
                  <div className="col-xs-12 col-sm">
                    <ul className="list-group">
                      <li className="list-group-item">
                        <Link href="#">Digital Experience Development</Link>
                      </li>
                      <li className="list-group-item">
                        <Link href="#">Shopify E-commerce Development</Link>
                      </li>
                      <li className="list-group-item">
                        <Link href="#">Square Space</Link>
                      </li>
                      <li className="list-group-item">
                        <Link href="#">Web Infrastructure & Maintenance</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xs-12 col-sm">
                    <ul className="list-group">
                      <li className="list-group-item">
                        <Link href="#">Magento E-commerce Development</Link>
                      </li>
                      <li className="list-group-item">
                        <Link href="#">WordPress Development</Link>
                      </li>
                      <li className="list-group-item">
                        <Link href="#">Web Flow</Link>
                      </li>
                      <li className="list-group-item">
                        <Link href="#">AI & GPT Integration</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xs-12 col-sm">
                    <ul className="list-group">
                      <li className="list-group-item">
                        <Link href="#">Wix</Link>
                      </li>
                      <li className="list-group-item">
                        <Link href="#">Duda</Link>
                      </li>
                      <li className="list-group-item">
                        <Link href="#">Custom Website Development</Link>
                      </li>
                      <li className="list-group-item">
                        <Link href="#">Content Management Systems</Link>
                      </li>
                    </ul>
                  </div>
                </Row>
              </Container>
            </Tab.Pane>
            <Tab.Pane eventKey="fourth">
              <Container>
                <Row>
                  <div className="col-xs-12 col-sm">
                    <ul className="list-group">
                      <li className="list-group-item">
                        <Link href="#">iOS App Development</Link>
                      </li>
                      <li className="list-group-item">
                        <Link href="#">Progressive Web App Development</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xs-12 col-sm">
                    <ul className="list-group">
                      <li className="list-group-item">
                        <Link href="#">Android App Development</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xs-12 col-sm">
                    <ul className="list-group">
                      <li className="list-group-item">
                        <Link href="#">Cross-Platform App Development</Link>
                      </li>
                    </ul>
                  </div>
                </Row>
              </Container>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default LeftTabsExample;
