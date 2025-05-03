"use client";
import Container from "react-bootstrap/Container";
import { Row, Col, Form, Button } from "react-bootstrap";
import Link from "next/link";
import styles from "../styles/contact.module.css";

export default function ContactPage() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <div className={styles.left}>
          <h2 style={{ fontWeight: "bold" }}>Contact</h2>
          <p>
            I’m open to opportunities where I can contribute my skills and grow
            as a developer. If you believe I’d be a good fit for your team or
            project, feel free to reach out — even just to say hello!
          </p>

          <div className={styles.infoGroup}>
            <h4>Email</h4>
            <p>vuongta2826@gmail.com</p>
          </div>

          <div className={styles.infoGroup}>
            <h4>Facebook</h4>
            <p>facebook.com/quoc.vuong.677931</p>
          </div>

          <div className={styles.infoGroup}>
            <h4>Phone</h4>
            <p>(+84) 931 892 826</p>
          </div>
        </div>

        <form className={styles.form}>
          <input type="text" placeholder="Your Name" className={styles.input} />
          <input
            type="email"
            placeholder="Your Email"
            className={styles.input}
          />
          <textarea
            placeholder="Message"
            rows={5}
            className={styles.textarea}
          ></textarea>
          <button type="submit" className={styles.button}>
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
