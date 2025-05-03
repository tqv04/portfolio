"use client";
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Typewriter } from "react-simple-typewriter";
import styles from "../styles/about.module.css";
export default function About() {
  return (
    <>
      <div className="bg-light text-dark d-flex align-items-center justify-content-center mt-5">
        <Container>
          <div className={`p-4`}>
            <h1 className={`text-center mb-4 ${styles.title}`}>About Me</h1>
            <Row className="g-4">
              <Col md={6}>
                <pre className="bg-gray-900 text-green-400 p-4 rounded-lg shadow-md text-sm overflow-x-auto">
                  <code>
                    <span>const myLife = {"{\n"}</span>
                    <span>
                      {" "}
                      name: '
                      <span className="text-yellow-300">Tạ Quốc Vượng</span>',
                      {"\n"}
                    </span>
                    <span> yearOfBirth: 2003,{"\n"}</span>
                    <span>
                      {" "}
                      address: '<span className="text-green-300">Hà Nội</span>',
                      {"\n"}
                    </span>
                    <span>
                      {" "}
                      interest: ['reading', 'coding', 'writing'],{"\n"}
                    </span>
                    <span> work: {"{\n"}</span>
                    <span> jobTitle: 'Front-End Developer',{"\n"}</span>
                    <span> currentLevel: BEGINNER_LEVEL,{"\n"}</span>
                    <span> getBetter: function (step) {"{\n"}</span>
                    <span>
                      {" "}
                      const targetLevel = this.currentLevel + step;{"\n"}
                    </span>
                    <span>
                      {" "}
                      while (this.currentLevel {"<"} targetLevel) {"{\n"}
                    </span>
                    <span> this.currentLevel++{";\n"}</span>
                    <span> toWork();{"\n"}</span>
                    <span> {"}\n"}</span>
                    <span> {"}\n"}</span>
                    <span> {"}\n"}</span>
                    <span>{"}"};</span>
                    <br />
                    <span>myLife.work.getBetter(</span>
                    <Typewriter
                      words={["STEP_LENGTH"]}
                      loop={false}
                      cursor
                      cursorStyle="_"
                      typeSpeed={50}
                      deleteSpeed={0}
                      delaySpeed={1000}
                    />
                    <span>);</span>
                  </code>
                </pre>
              </Col>
              <Col md={6} className="d-flex flex-column justify-content-center">
                <p className="lead mb-4">
                  Hello, I'm Tạ Quốc Vượng, a passionate Front-End Developer
                  currently studying at FPT Polytechnic. I specialize in modern
                  web development technologies such as ReactJS, NextJS, and
                  TypeScript. My goal is to create intuitive, user-friendly
                  websites that deliver seamless experiences.
                </p>
                <p className="lead mb-4">
                  I have experience with a range of tools, including HTML, CSS,
                  Bootstrap, and more. Currently, I'm focused on mastering Redux
                  and building dynamic applications. I'm always looking for
                  opportunities to expand my knowledge and work on challenging
                  projects.
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}
