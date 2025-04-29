"use client";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar bg="light" data-bs-theme="light" className="p-2">
        <Container>
          <Row className="w-100">
            <Col xs={3}>
              <Navbar.Brand onClick={handleShow} style={{ cursor: "pointer" }}>
                Vuong
              </Navbar.Brand>
            </Col>

            <Col xs={6} className="d-flex justify-content-center">
              <Nav>
                <Nav.Link href="/project">Skill</Nav.Link>
                <Nav.Link href="#features">Portfolio</Nav.Link>
                <Nav.Link href="#pricing">Blog</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Col>

            <Col xs={3} className="d-flex justify-content-end">
              <Nav>
                <NavDropdown title="English" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">English</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Tiếng Việt
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Settings" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Light</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Dark</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">Auto</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Col>
          </Row>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Header;
