"use client";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image"; // Import the Image component
import styles from "./Home.module.css"; 
import Footer from "@/app/footer/page";
import Navbar from "@/app/navbar/page";


export default function Home() {
  const words = ["Developer", "Designer", "Innovator", "Creator", "Enthusiast", "Student", "Leader", "Bengali", "US Citizen"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (index >= words.length) return;

    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1000); // Wait a bit at the end of a word
    } else if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prevIndex) => (prevIndex + 1) % words.length); // Loop back to the first word
    }

    const timeout = setTimeout(() => {
      setSubIndex((prevSubIndex) => prevSubIndex + (reverse ? -1 : 1));
    }, 100); // Speed of typing effect

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <div className={styles.mainContainer}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.name}>Hi, my name is</p>
          <p className={styles.title}>Raiyan Zaman.</p>
          <p className={styles.subtitle}>
            I am a{" "}
            <span className={styles.typing}>
              {words[index].substring(0, subIndex)}
            </span>
            <span className={styles.blinker}>|</span>
          </p>
          <button className={styles.button}>Contact Me</button>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/images/raiyan2.png" // Ensure this is the correct path
            alt="Raiyan Zaman"
            className={styles.heroImage} // Apply your CSS class for styling
            fill // Use 'fill' and control the size with CSS
            style={{
              // This replaces the need for 'objectFit' as we are directly applying styles
              objectFit: "contain" /* Preserve aspect ratio */,
              objectPosition: "bottom" /* Align the image to the bottom */,
              maxWidth:
                "100%" /* Limit the width to not exceed the container */,
              maxHeight:
                "70vh" /* Limit the height to not exceed the container */,
              opacity: 0.96 /* Optional: if you want to control opacity here instead of CSS */,
            }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
