"use client";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import styles from "../styles/project.module.css";
import CardItem from "../card/cart";
import Carousel from "react-bootstrap/Carousel";
import { Image } from "react-bootstrap";
export default function ProjectPage() {
  const [posts, setPosts] = useState<ProjectType[]>([]);
  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch("https://be-friedking.onrender.com/Project");
      const data = await res.json();
      setPosts(data);
    }
    fetchPosts();
  }, []);

  if (!posts)
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  return (
    <>
      <Container className="my-5">
        <h1
          className={` mb-5 ${styles.title}`}
          style={{ display: "inline-block" }}
        >
          PORTFOLIO
        </h1>
        <div className={`${styles.cardC} `}>
          {posts.map((post) => (
            <CardItem key={post.id} post={post} />
          ))}
        </div>
      </Container>
    </>
  );
}
