"use client";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { Image } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/header.module.css";
function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Container className={`${styles.load} p-4`}>
        <Row className="w-100 p-3">
          <Col xs={1}>
            <Navbar.Brand
              onClick={handleShow}
              style={{
                cursor: "pointer",
                fontSize: "26px",
                fontWeight: "bold",
              }}
            >
              Vuong
            </Navbar.Brand>
          </Col>

          <Col
            xs={10}
            className="d-flex justify-content-center align-items-center"
          >
            <Link href="/skill" className={styles.Link}>
              Skill
            </Link>
            <Link href="/project" className={styles.Link}>
              Project
            </Link>
            <Link href="#pricing" className={styles.Link}>
              Blog
            </Link>

            <Link href="#contact" className={styles.Link}>
              Contact
            </Link>
          </Col>

          <Col xs={1} className="d-flex justify-content-end m-0 p-0 ">
            <Button className={`${styles.langBtn}`} variant="dark">
              ENG <i className="bi bi-globe"></i>
            </Button>
          </Col>
        </Row>
      </Container>

      {/* <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas> */}
    </>
  );
}

export default Header;
