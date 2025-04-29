"use client";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
export default function ProjectPage() {
  const [posts, setPosts] = useState<ProjectType[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch("http://localhost:9000/Project");
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
      <Container>
        {" "}
        <Tabs
          defaultActiveKey="home"
          id="fill-tab-example"
          className="mb-3"
          fill
        >
          <Tab eventKey="home" title="HTML/CSS/JAVASCRIPT">
            <div className="d-flex justify-content-between">
              {posts.map((post) => (
                <Card style={{ width: "18rem" }} key={post.id}>
                  <Card.Img variant="top" src={post.img} />
                  <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>{post.category}</Card.Text>
                    <Link
                      href={`/project/${post.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      Live
                    </Link>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Tab>
          <Tab eventKey="profile" title="Profile">
            Tab content for Profile
          </Tab>
          <Tab eventKey="longer-tab" title="Loooonger Tab">
            Tab content for Loooonger Tab
          </Tab>
          <Tab eventKey="contact" title="Contact">
            Tab content for Contact
          </Tab>
        </Tabs>
      </Container>
    </>
  );
}
