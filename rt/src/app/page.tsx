"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";

import styles from "./Home.module.css";
import Footer from "@/app/footer/page";
import Navbar from "@/app/navbar/page";

export default function Home() {
  const words = [
    "a Full-Stack Engineer",
    "an AI/ML Researcher",
    "a Cloud Architect",
    "a Technical Leader",
    "an Open Source Contributor",
    "a Problem Solver",
    "an AWS Expert",
    "a Visionary Coder",
    "a STEM Advocate",
    "a Systems Thinker",
    "a Robotics Developer",
    "a Deep Learning Enthusiast",
  ];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  // Typing animation
  useEffect(() => {
    if (index >= words.length) return;

    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 900);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => setSubIndex((prev) => prev + (reverse ? -1 : 1)),
      80
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className={styles.mainContainer}>
      <Head>
        <title>Raiyan Zaman | AI, Cloud & Full-Stack Engineering</title>
        <meta
          name="description"
          content="Portfolio of Raiyan Zaman — full-stack engineer and AI/ML builder creating social platforms, study engines, dashboards, and robotics projects."
        />
      </Head>

      <Navbar />

      <main className={styles.main}>
        {/* HERO */}
        <section className={styles.heroSection}>
          <div className={styles.heroInner}>
            <div className={styles.content}>
              <p className={styles.kicker}>Hi, my name is</p>
              <h1 className={styles.title}>Raiyan Zaman.</h1>
              <p className={styles.subtitle}>
                I am{" "}
                <span className={styles.typing}>
                  {words[index].substring(0, subIndex)}
                </span>
                <span className={styles.blinker} />
              </p>

              <p className={styles.heroBody}>
                I design and ship AI-driven, cloud-native systems—from social
                apps and study engines to analytics dashboards and robotics
                projects.
              </p>

              <div className={styles.heroButtons}>
                <Link href="/projects" className={styles.primaryButton}>
                  View Projects
                </Link>
                <Link href="/about" className={styles.secondaryButton}>
                  About Me
                </Link>
              </div>

              <div className={styles.heroMetaRow}>
                <span className={styles.heroMetaPill}>AI &amp; ML</span>
                <span className={styles.heroMetaPill}>Cloud · AWS</span>
                <span className={styles.heroMetaPill}>
                  Full-stack TypeScript
                </span>
                <span className={styles.heroMetaPill}>Systems &amp; Data</span>
              </div>
            </div>

            <div className={styles.imageContainer}>
              {/* floating glow under torso */}
              <div className={styles.heroGlow} />
              <Image
                src="/images/raiyanzaman.png"
                alt="Raiyan Zaman"
                fill
                className={styles.heroImage}
                priority
              />
            </div>
          </div>

          {/* Scroll cue */}
          <motion.div
            className={styles.scrollCue}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.3,
              duration: 0.8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <span className={styles.scrollText}>Scroll to explore</span>
            <FiArrowDown className={styles.scrollIcon} />
          </motion.div>
        </section>

        {/* SNAPSHOT */}
        <motion.section
          className={styles.snapshotSection}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <motion.div className={styles.snapshotShell} variants={itemVariants}>
            <h2 className={styles.sectionTitle}>Snapshot</h2>
            <p className={styles.sectionSubtitle}>
              Quick view of who I am, what I&apos;ve built, and where I&apos;m
              heading—so you don&apos;t have to dig for the important stuff.
            </p>

            <div className={styles.snapshotGrid}>
              <div className={styles.snapshotCard}>
                <h3>What I&apos;m focused on</h3>
                <p>
                  Building AI-augmented platforms that combine full-stack
                  engineering, cloud infrastructure, and LLM tools. Turning
                  messy real-world workflows into reliable systems people
                  actually want to use.
                </p>
              </div>

              <div className={styles.snapshotCard}>
                <h3>Experience</h3>
                <p>
                  SDE Intern at Explore Digits (MCP platform &amp; LLM
                  tooling), ML &amp; sensing research with UMBC, plus
                  robotics/embedded systems across FTC, drones, and RC
                  platforms.
                </p>
              </div>

              <div className={styles.snapshotCard}>
                <h3>Education</h3>
                <p>
                  B.S. in Computer Science at Georgia Tech (Intelligence &amp;
                  Information Internetworks). Previously at Centennial High
                  School, leading CAD, WebDev, and Tech Journal clubs and
                  building early ML and robotics projects.
                </p>
              </div>
            </div>

            <div className={styles.snapshotPillsRow}>
              <span className={styles.snapshotPill}>AI &amp; ML</span>
              <span className={styles.snapshotPill}>
                Cloud &amp; DevOps (AWS/GCP)
              </span>
              <span className={styles.snapshotPill}>Full-stack TypeScript</span>
              <span className={styles.snapshotPill}>
                Systems &amp; Networking
              </span>
            </div>
          </motion.div>
        </motion.section>

        {/* STATS */}
        <motion.section
          className={styles.statsSection}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <div className={styles.statsGrid}>
            <motion.div className={styles.statCard} variants={itemVariants}>
              <span className={styles.statNumber}>10+</span>
              <span className={styles.statLabel}>
                production-grade apps and platforms
              </span>
            </motion.div>
            <motion.div className={styles.statCard} variants={itemVariants}>
              <span className={styles.statNumber}>1,000+</span>
              <span className={styles.statLabel}>
                résumé variants generated with Cloud-Resume+
              </span>
            </motion.div>
            <motion.div className={styles.statCard} variants={itemVariants}>
              <span className={styles.statNumber}>10,000+</span>
              <span className={styles.statLabel}>
                practice questions created with Adaptive Study Engine
              </span>
            </motion.div>
          </div>
        </motion.section>

        {/* FEATURED PROJECTS */}
        <motion.section
          className={styles.featuredSection}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <div className={styles.sectionHeader}>
            <h2>Featured work</h2>
            <p>
              A few projects that show how I think about AI, systems, and user
              experience. See the Projects page for full case studies.
            </p>
          </div>

          <div className={styles.featuredGrid}>
            <motion.article
              className={styles.featuredCard}
              variants={itemVariants}
            >
              <span className={styles.featuredTag}>Laamly · Social Platform</span>
              <h3 className={styles.featuredTitle}>
                All-in-one social app with Reels, podcasts, posts, and DMs
              </h3>
              <p className={styles.featuredBody}>
                Full-stack platform with real-time messaging, short-form video,
                long-form audio, and LLM-powered topic tagging built with
                Next.js, Node/Express, MongoDB, and Redis on a self-hosted
                stack.
              </p>
              <p className={styles.featuredMeta}>
                Next.js · TypeScript · MongoDB · Redis · OAuth · LLM tagging
              </p>
            </motion.article>

            <motion.article
              className={styles.featuredCard}
              variants={itemVariants}
            >
              <span className={styles.featuredTag}>
                Cloud-Resume+ · Career Tools
              </span>
              <h3 className={styles.featuredTitle}>
                Serverless résumé optimizer with ATS-ready templates
              </h3>
              <p className={styles.featuredBody}>
                Lambda-powered pipeline that rewrites bullets, matches JD
                keywords, and renders multiple PDF templates—cutting manual
                editing time by ~70% and boosting callbacks.
              </p>
              <p className={styles.featuredMeta}>
                AWS Lambda · DynamoDB · S3 · Next.js · LLMs
              </p>
            </motion.article>

            <motion.article
              className={styles.featuredCard}
              variants={itemVariants}
            >
              <span className={styles.featuredTag}>
                Adaptive Study Engine · EdTech
              </span>
              <h3 className={styles.featuredTitle}>
                AI study dashboard with spaced-repetition and analytics
              </h3>
              <p className={styles.featuredBody}>
                Ingests class PDFs, extracts key concepts, and generates
                practice questions with SM-2 scheduling, mastery dashboards, and
                &quot;drill weak topics&quot; workflows.
              </p>
              <p className={styles.featuredMeta}>
                API Gateway · Lambda · Textract · Comprehend · DynamoDB ·
                Next.js
              </p>
            </motion.article>
          </div>

          <Link href="/projects" className={styles.sectionLink}>
            View all projects →
          </Link>
        </motion.section>

        {/* STACK */}
        <motion.section
          className={styles.stackSection}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <div className={styles.sectionHeader}>
            <h2>Tools I reach for</h2>
            <p>
              I like boring-reliable infrastructure with just enough modern
              tooling to move fast: TypeScript everywhere, clean APIs, and
              observability built in.
            </p>
          </div>

          <div className={styles.stackChips}>
            <span className={styles.stackChip}>Next.js · React</span>
            <span className={styles.stackChip}>TypeScript</span>
            <span className={styles.stackChip}>Node.js · Express</span>
            <span className={styles.stackChip}>Python · Flask</span>
            <span className={styles.stackChip}>
              MongoDB · DynamoDB · PostgreSQL
            </span>
            <span className={styles.stackChip}>Redis · Caching</span>
            <span className={styles.stackChip}>
              AWS (Lambda, API Gateway, S3, ECS)
            </span>
            <span className={styles.stackChip}>CI/CD · GitHub Actions</span>
            <span className={styles.stackChip}>TensorFlow · PyTorch · NLP</span>
            <span className={styles.stackChip}>Docker · Containers</span>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
