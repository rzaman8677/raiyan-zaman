"use client";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "./Contact.module.css";
import Footer from "../footer/page";
import Navbar from "../navbar/page";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <div className={styles.mainContainer}>
      <Head>
        <title>Contact Raiyan Zaman</title>
      </Head>

      <Navbar />

      <div className={styles.fixedBackground}>
        <Image
          src="/images/logo5.png"
          alt="Background"
          fill
          quality={100}
          className={styles.backgroundImage}
        />
      </div>

      <section className={styles.heroSection}>
        <motion.div
          className={styles.contactCard}
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.h1 variants={itemVariants} className={styles.contactTitle}>
            Contact
          </motion.h1>
          <motion.p variants={itemVariants} className={styles.contactSubtitle}>
            Reach out for collaborations, internships, or just to talk tech,
            AI, and systems.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className={styles.contactGrid}
          >
            <a
              href="mailto:raiyanrzaman@gmail.com"
              className={styles.contactItem}
            >
              <div className={styles.contactIconWrapper}>
                <FaEnvelope className={styles.contactIcon} />
              </div>
              <div className={styles.contactText}>
                <span className={styles.contactLabel}>Email</span>
                <span className={styles.contactValue}>
                  raiyanrzaman@gmail.com
                </span>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/raiyanzaman1"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactItem}
            >
              <div className={styles.contactIconWrapper}>
                <FaLinkedin className={styles.contactIcon} />
              </div>
              <div className={styles.contactText}>
                <span className={styles.contactLabel}>LinkedIn</span>
                <span className={styles.contactValue}>/in/raiyanzaman1</span>
              </div>
            </a>

            <a
              href="https://github.com/rzaman8677"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactItem}
            >
              <div className={styles.contactIconWrapper}>
                <FaGithub className={styles.contactIcon} />
              </div>
              <div className={styles.contactText}>
                <span className={styles.contactLabel}>GitHub</span>
                <span className={styles.contactValue}>@rzaman8677</span>
              </div>
            </a>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
