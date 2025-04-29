"use client";
import { Row, Col, Container } from "react-bootstrap";
export default function IntroducePage() {
  return (
    <>
      <Container>
        <Row>
          <Col xs={6}>
            <p>Hello</p>
            <p>Welcome to Vuong's Portfolio</p>
          </Col>
          <Col xs={6}></Col>
        </Row>
      </Container>
    </>
  );
}
