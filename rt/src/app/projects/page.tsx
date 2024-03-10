"use client";
// React Component: WorkSection.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./WorkSection.module.css";
import Footer from "../footer/page";
import Navbar from "../navbar/page";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const WorkSection = () => {
  const [csImageIndex, setCsImageIndex] = useState(0);
  const [engImageIndex, setEngImageIndex] = useState(0);

  const computerScienceImages = [
    "/images/11.webp",
    "/images/22.jpg",
    "/images/11.webp",
    "/images/22.jpg",
  ];
  const engineeringRoboticsImages = [
    "/images/11.webp",
    "/images/22.jpg",
    "/images/11.webp",
    "/images/22.jpg",
  ];

  const nextSlide = (
    setImageIndex: React.Dispatch<React.SetStateAction<number>>,
    length: number
  ) => {
    setImageIndex((currentIndex: number) => (currentIndex + 1) % length);
  };

  const prevSlide = (
    setImageIndex: React.Dispatch<React.SetStateAction<number>>,
    length: number
  ) => {
    setImageIndex(
      (currentIndex: number) => (currentIndex - 1 + length) % length
    );
  };

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

      {/* Computer Science Section */}
      <div className={styles.workSection}>
        <div className={styles.imageContainer}>
          {/* Navigation Buttons */}
          <div className={styles.sliderButtons}>
            <button
              onClick={() =>
                prevSlide(setCsImageIndex, computerScienceImages.length)
              }
              className={styles.button}
            >
              <MdChevronLeft size={30} /> {/* Icon for Prev */}
            </button>
            <button
              onClick={() =>
                nextSlide(setCsImageIndex, computerScienceImages.length)
              }
              className={styles.button}
            >
              <MdChevronRight size={30} /> {/* Icon for Next */}
            </button>
          </div>
          <Image
            src={computerScienceImages[csImageIndex]}
            alt="Computer Science Project"
            fill
            style={{  objectFit: "cover"  }}
          />
        </div>
        <motion.div
          className={styles.textContainerWithBackground}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            src="/images/logo5.png"
            alt="Background"
            fill
            style={{ zIndex: -1, objectFit: "cover"  }}
          />
          <a href="/computer-science" className={styles.textLink}>
            <p>Details about my computer science projects...</p>
          </a>
        </motion.div>
      </div>

      {/* Engineering Section */}
      <div className={styles.workSection}>
        <div className={styles.imageContainer}>
          {/* Navigation Buttons */}
          <div className={styles.sliderButtons}>
            <button
              onClick={() =>
                prevSlide(setCsImageIndex, computerScienceImages.length)
              }
              className={styles.button}
            >
              <MdChevronLeft size={30} /> {/* Icon for Prev */}
            </button>
            <button
              onClick={() =>
                nextSlide(setCsImageIndex, computerScienceImages.length)
              }
              className={styles.button}
            >
              <MdChevronRight size={30} /> {/* Icon for Next */}
            </button>
          </div>
          <Image
            src={engineeringRoboticsImages[engImageIndex]}
            alt="Engineering and Robotics Project"
            fill
            style={{ objectFit: "cover"  }}
          />
        </div>
        <motion.div
          className={styles.textContainerWithBackground}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            src="/images/logo5.png"
            alt="Background"
            fill
            style={{ zIndex: -1, objectFit: "cover"  }}
          />
          <a href="/engineering" className={styles.textLink}>
            <p>Details about my engineering projects...</p>
          </a>
        </motion.div>
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
