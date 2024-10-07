import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Offcanvas,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import styles from "@/styles/MobHeader.module.css";

function OffcanvasNavbar() {
  return (
    <>
      <Navbar
        className={styles.mobHeader}
        bg="dark"
        variant="dark"
        expand={false}
        fixed="top"
      >
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              src={"/assets/ftrLogo.webp"}
              alt="Nextupgrad_USA_Logo"
              width={"100%"}
              height={100}
              title="Nextupgrad USA Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            className={styles.toggleNav}
          />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown title="More" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="#action1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#something">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex mt-3">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  id="searchNext"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasNavbar;
