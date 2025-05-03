"use client";
import { Image } from "react-bootstrap";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";
import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { Container, Row, Col } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { FaHtml5 } from "react-icons/fa";

import styles from "../styles/skill.module.css";
export default function Skill() {
  return (
    <>
      <Container fluid>
        <Container className={`py-12 ${styles.lineB} my-4 }`}>
          <h1
            className={` mb-4 ${styles.title}`}
            style={{ display: "inline-block" }}
          >
            Skill
          </h1>

          <div className="d-flex flex-column">
            <h3
              style={{ fontSize: "1.8rem" }}
              className="text-center text-dark mb-4"
            >
              The skills, tools and technologies I use:
            </h3>
            <div className="d-flex justify-content-center align-items-center">
              <div className={`${styles.tech}`}>
                <SiHtml5
                  style={{
                    width: "40px",
                    height: "40px",
                  }}
                  color={`#E44D26`}
                />
              </div>
              <div className={`${styles.tech}`}>
                <SiCss3
                  style={{ width: "40px", height: "40px" }}
                  color={`#264de4`}
                />
              </div>
              <div className={`${styles.tech}`}>
                <SiJavascript
                  style={{ width: "40px", height: "40px" }}
                  color={`#f0db4f`}
                />
              </div>
              <div className={`${styles.tech}`}>
                <SiTypescript
                  style={{ width: "40px", height: "40px" }}
                  color={`#3178C6`}
                />
              </div>
              <div className={`${styles.tech}`}>
                <SiNextdotjs
                  style={{ width: "40px", height: "40px" }}
                  color={`#000000`}
                />
              </div>
              <div className={`${styles.tech}`}>
                <SiNodedotjs
                  style={{ width: "40px", height: "40px" }}
                  color={`#339933`}
                />
              </div>
              <div className={`${styles.tech}`}>
                <SiMongodb
                  style={{ width: "40px", height: "40px" }}
                  color={`#339933`}
                />
              </div>
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
}
