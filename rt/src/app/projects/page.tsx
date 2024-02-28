"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./WorkSection.module.css"; // Ensure the path to your CSS module is correct
import Footer from "../footer/page";
import Navbar from "../navbar/page";

const WorkSection: React.FC = () => {
  const [csImageIndex, setCsImageIndex] = useState(0);
  const [engImageIndex, setEngImageIndex] = useState(0);

  const computerScienceImages: string[] = [
    "/images/11.webp",
    "/images/22.jpg",
    "/images/cs3.jpg",
  ];
  const engineeringRoboticsImages: string[] = [
    "/images/eng1.jpg",
    "/images/eng2.jpg",
    "/images/eng3.jpg",
  ];

  useEffect(() => {
    const csInterval = setInterval(() => {
      setCsImageIndex(
        (current) => (current + 1) % computerScienceImages.length
      );
    }, 1000); // Change CS slides every 3 seconds

    const engInterval = setInterval(() => {
      setEngImageIndex(
        (current) => (current + 1) % engineeringRoboticsImages.length
      );
    }, 1000); // Change Engineering slides every 3 seconds

    return () => {
      clearInterval(csInterval);
      clearInterval(engInterval);
    };
  }, []);

  return (
    <div className={styles.workContainer}>
      <Navbar />
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.workTitle}
      >
        My Work
      </motion.h2>

      <div className={styles.workSection}>
        <AnimatePresence mode="wait">
          <motion.div
            key={csImageIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1 }}
            className={styles.imageContainer}
            style={{
              backgroundImage: `url(${computerScienceImages[csImageIndex]})`,
            }}
          />
        </AnimatePresence>
        <motion.div
          className={styles.textContainer}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="/computer-science"
            className={styles.textLink}
            style={{ display: "grid", placeItems: "center", height: "100%" }}
          >
            <p>Details about my computer science projects...</p>
          </a>
        </motion.div>
      </div>

      <div className={styles.workSection}>
        <motion.div
          className={styles.textContainer}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="/engineering"
            className={styles.textLink}
            style={{ display: "grid", placeItems: "center", height: "100%" }}
          >
            <p>Details about my engineering and robotics projects...</p>
          </a>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={engImageIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1 }}
            className={styles.imageContainer}
            style={{
              backgroundImage: `url(${engineeringRoboticsImages[engImageIndex]})`,
            }}
          />
        </AnimatePresence>
      </div>
      {/* Cards for Experiences and Community */}
      <div className={styles.cardContainer}>
        <button className={styles.card}>
          <h3>Experiences</h3>
          <p>Summary of work experience and professional development.</p>
        </button>
        <button className={styles.card}>
          <h3>Community</h3>
          <p>Summary of community involvement and volunteer work.</p>
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default WorkSection;
