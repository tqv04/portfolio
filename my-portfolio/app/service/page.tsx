"use client";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faPenNib } from "@fortawesome/free-solid-svg-icons";
import { faWordpress } from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Spinner from "react-bootstrap/Spinner";
import styles from "../styles/service.module.css";
import Head from "next/head";
import ScrollFadeIn from "../scrollfaein/ScrollFadeIn";
export default function ServicePage() {
  const [posts, setPosts] = useState<ServiceType[]>([]);
  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch("http://localhost:9000/services");
      const data = await res.json();
      setPosts(data);
    }
    fetchPosts();
  }, []);

  if (posts.length === 0) {
    return (
      <div className="d-flex justify-content-center py-5">
        <Spinner animation="border" role="status" />
      </div>
    );
  }
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <div className={styles.container}>
        <div className={styles.line}></div>
        {posts.map((item, i) => (
          <ScrollFadeIn key={i}>
            <div
              key={i}
              className={`${styles.card} ${
                item.side === "left" ? styles.left : styles.right
              }`}
            >
              <div>
                <div className="d-flex align-items-center gap-2">
                  <span
                    className="material-icons"
                    style={{ fontSize: "35px", color: item.color }}
                  >
                    {item.icon}
                  </span>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.desc}</p>
              </div>
            </div>
          </ScrollFadeIn>
        ))}
      </div>
    </>
  );
}
