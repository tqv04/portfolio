"use client";
import { Row, Col, Container } from "react-bootstrap";
import styles from "../styles/introduce.module.css";
import { Image, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faGitlab,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function IntroducePage() {
  return (
    <>
      <Container className={` mt-2 `}>
        <Row>
          <Col
            xs={6}
            className="d-flex align-items-center justify-content-center"
          >
            <div>
              <h4 className={styles.tag}>Hello, I am</h4>
              <h2 style={{ fontSize: "5.2rem" }}>Ta Quoc Vuong</h2>
              <p
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                }}
                className="text-primary mb-1"
              >
                Front End Developer
              </p>
              <ol>
                <li className="d-flex align-items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  Web
                </li>
                <li className="d-flex align-items-center gap-1">
                  <div className="w-3 h-3  rounded-full bg-primary"></div>
                  Front End
                </li>
                <li className="d-flex align-items-center gap-1">
                  <div className="w-3 h-3  rounded-full bg-primary"></div>
                  Going to Web & Software Fullstack
                </li>
              </ol>
              <Button className={`ms-2 ${styles.faceBook}`}>
                <Link
                  href="https://www.facebook.com/quoc.vuong.677931/"
                  style={{ color: "white" }}
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </Link>
              </Button>
              <Button className={`ms-2 ${styles.gitHub}`}>
                <Link
                  href="https://github.com/tqv04"
                  style={{ color: "white" }}
                >
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
              </Button>
              <Button className={`ms-2 ${styles.gitLab}`}>
                <Link
                  href="https://gitlab.com/vuongta2826"
                  style={{ color: "white" }}
                >
                  <FontAwesomeIcon icon={faGitlab} />
                </Link>
              </Button>
            </div>
          </Col>

          <Col
            xs={6}
            className="d-flex align-items-center justify-content-center"
          >
            <div className={styles.flipC}>
              <div className={styles.flipper}>
                <Image src="/me_no_bg.png" className={styles.front} />
                <Image src="/me2_no_bg.png" className={styles.back} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
