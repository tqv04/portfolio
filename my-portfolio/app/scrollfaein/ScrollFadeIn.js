"use client";
import { useEffect, useRef, useState } from "react";
import styles from "../styles/ScrollFadeIn.module.css";

const ScrollFadeIn = ({ children }) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div ref={ref} className={`${styles.load} ${visible ? styles.show : ""}`}>
      {children}
    </div>
  );
};

export default ScrollFadeIn;
