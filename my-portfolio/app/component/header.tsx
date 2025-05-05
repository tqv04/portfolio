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
  return (
    <>
      <Container className={`${styles.load} p-4`}>
        <Row className="w-100 p-3">
          <Col
            xs={6}
            sm={6}
            md={1}
            className="d-flex justify-content-start m-0 p-0 "
          >
            <Navbar.Brand>
              <Link
                href="/"
                style={{
                  cursor: "pointer",
                  fontSize: "26px",
                  fontWeight: "bold",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Vuong
              </Link>
            </Navbar.Brand>
          </Col>
          <Col
            xs={0}
            sm={0}
            md={10}
            className="d-flex justify-content-center align-items-center d-none d-md-flex"
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

          <Col
            xs={6}
            sm={6}
            md={1}
            className="d-flex justify-content-end m-0 p-0 "
          >
            <Button className={`${styles.langBtn} `} variant="dark">
              ENG <i className="bi bi-globe"></i>
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Header;
