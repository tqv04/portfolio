"use client";
import { useState } from "react";
import { Image } from "react-bootstrap";
import Link from "next/link";
import styles from "../styles/project.module.css";
import { Card, Button, Badge } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function CardItem({ post }: { post: ProjectType }) {
  return (
    <>
      <div className={`${styles.card}`}>
        <Image
          alt={post.title}
          src={post.imgMain}
          className={`${styles.cardImg}`}
        />

        <div className={`text-white text-center ${styles.cardBody}`}>
          <Link href={post.link}>
            {" "}
            <FaExternalLinkAlt size={20} className={styles.goTo} />
          </Link>

          <h2
            style={{ fontWeight: "400", fontSize: "20px", marginTop: "10px" }}
          >
            {post.title}
            <div className={styles.lineTop}></div>
          </h2>

          <p style={{ fontWeight: "300" }}> {post.category}</p>
        </div>
        <div className={`${styles.line}`}></div>
      </div>
    </>
  );
}
