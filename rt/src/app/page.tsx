"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowDown, FiChevronLeft, FiChevronRight } from "react-icons/fi";

import styles from "./Home.module.css";
import Footer from "@/app/footer/page";
import Navbar from "@/app/navbar/page";

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

const featuredItems = [
  {
    statNumber: "10+",
    statLabel: "production-grade apps and platforms shipped",
    tag: "Laamly · Social Platform",
    title: "All-in-one social app with Reels, podcasts, posts, and DMs",
    body: "Full-stack platform with real-time messaging, short-form video, long-form audio, and LLM-powered topic tagging built with Next.js, Node/Express, MongoDB, and Redis on a self-hosted stack.",
    meta: "Next.js · TypeScript · MongoDB · Redis · OAuth · LLM tagging",
  },
  {
    statNumber: "1,000+",
    statLabel: "résumé variants generated and optimized",
    tag: "Cloud-Resume+ · Career Tools",
    title: "Serverless résumé optimizer with ATS-ready templates",
    body: "Lambda-powered pipeline that rewrites bullets, matches JD keywords, and renders multiple PDF templates—cutting manual editing time by ~70% and boosting callbacks.",
    meta: "AWS Lambda · DynamoDB · S3 · Next.js · LLMs",
  },
  {
    statNumber: "10,000+",
    statLabel: "practice questions created for spaced review",
    tag: "Adaptive Study Engine · EdTech",
    title: "AI study dashboard with spaced-repetition and analytics",
    body: "Ingests class PDFs, extracts key concepts, and generates practice questions with SM-2 scheduling, mastery dashboards, and “drill weak topics” workflows.",
    meta: "API Gateway · Lambda · Textract · Comprehend · DynamoDB · Next.js",
  },
];

const galleryImages = [
  { src: "/images/computer-science/2.webp" },
  { src: "/images/computer-science/3.webp" },
  { src: "/images/engineering/1.webp" },
  { src: "/images/engineering/64.webp" },
  { src: "/images/engineering/44.webp" },
  { src: "/images/engineering/54.webp" },
  { src: "/images/engineering/53.webp" },
  { src: "/images/engineering/48.webp" },
  { src: "/images/engineering/41.webp" },
  { src: "/images/engineering/39.webp" },
  { src: "/images/engineering/38.webp" },
  { src: "/images/engineering/37.webp" },
  { src: "/images/engineering/36.webp" },
  { src: "/images/engineering/29.webp" },
  { src: "/images/engineering/28.webp" },
  { src: "/images/engineering/24.webp" },
  { src: "/images/engineering/25.webp" },
  { src: "/images/engineering/21.webp" },
  { src: "/images/engineering/20.webp" },
  { src: "/images/engineering/18.webp" },
  { src: "/images/engineering/11.webp" },
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  // typing animation
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
  }, [subIndex, index, reverse]);

  // slideshow
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, 5500); // stay longer on each image
    return () => clearInterval(id);
  }, []);

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

  const handlePrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
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
        {/* HERO (unchanged layout, new CTA + resume) */}
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
                <Link href="/contact" className={styles.primaryButton}>
                  Contact Me
                </Link>
                <a
                  href="/files/raiyan-zaman-resume.pdf"
                  className={styles.secondaryButton}
                  download
                >
                  Download Résumé
                </a>
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

        {/* FEATURED WORK + STATS TOGETHER */}
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
              Each project is paired with the metric it drives, so the stats
              line up directly with the work they describe.
            </p>
          </div>

          <div className={styles.featuredColumns}>
            {featuredItems.map((item) => (
              <motion.div
                key={item.title}
                className={styles.featuredColumn}
                variants={itemVariants}
              >
                <div className={styles.statCard}>
                  <span className={styles.statNumber}>{item.statNumber}</span>
                  <span className={styles.statLabel}>{item.statLabel}</span>
                </div>

                <article className={styles.featuredCard}>
                  <span className={styles.featuredTag}>{item.tag}</span>
                  <h3 className={styles.featuredTitle}>{item.title}</h3>
                  <p className={styles.featuredBody}>{item.body}</p>
                  <p className={styles.featuredMeta}>{item.meta}</p>
                </article>
              </motion.div>
            ))}
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

        {/* PHOTO GALLERY SLIDESHOW */}
        <motion.section
          className={styles.gallerySection}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <motion.div className={styles.galleryShell} variants={itemVariants}>
            <div className={styles.galleryHeader}>
              <h2>Photo gallery</h2>
              <p>
                Visual snapshots from robotics labs, PLTW projects, and computer
                science builds—bringing the hands-on work behind the code into
                focus.
              </p>
            </div>

            <div className={styles.galleryContent}>
              <button
                type="button"
                onClick={handlePrev}
                className={styles.galleryArrow}
                aria-label="Previous photo"
              >
                <FiChevronLeft />
              </button>

              <div className={styles.galleryViewport}>
                <motion.div
                  key={currentSlide}
                  className={styles.gallerySlide}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Image
                    src={galleryImages[currentSlide].src}
                    alt={`Gallery image ${currentSlide + 1}`}
                    fill
                    className={styles.galleryImage}
                    sizes="(max-width: 768px) 100vw, 900px"
                  />
                </motion.div>
              </div>

              <button
                type="button"
                onClick={handleNext}
                className={styles.galleryArrow}
                aria-label="Next photo"
              >
                <FiChevronRight />
              </button>
            </div>

            <div className={styles.galleryDots}>
              {galleryImages.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`${styles.galleryDot} ${
                    i === currentSlide ? styles.galleryDotActive : ""
                  }`}
                  onClick={() => setCurrentSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
