"use client";

import Head from "next/head";
import React from "react";
import styles from "./About.module.css";
import Footer from "../footer/page";
import Navbar from "../navbar/page";
import { motion } from "framer-motion";
import { MdMemory, MdBolt, MdPublic } from "react-icons/md";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <div className={styles.mainContainer}>
      <Head>
        <title>About Raiyan Zaman</title>
      </Head>

      <Navbar />

      {/* HERO STRIP */}
      <section className={styles.heroSection}>
        <motion.div
          className={styles.heroCard}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className={styles.heroBadgeRow}>
            <span className={styles.heroBadge}>About</span>
            <span className={styles.heroTag}>AI · Cloud · Systems</span>
          </div>
          <h1 className={styles.heroTitle}>Welcome to My Journey</h1>
          <p className={styles.heroSubtitle}>
            How my background, experience, and projects connect into one thread:
            building reliable AI-driven systems people actually use.
          </p>
        </motion.div>
      </section>

      {/* STORY CARDS */}
      <motion.section
        className={styles.storySection}
        initial="hidden"
        animate="show"
        variants={containerVariants}
      >
        <motion.div className={styles.storyGrid} variants={containerVariants}>
          <motion.div className={styles.storyCard} variants={itemVariants}>
            <MdMemory className={styles.storyIcon} />
            <h2>How it started</h2>
            <p>
              I grew up in the U.S. with Bangladeshi roots and discovered Python
              in 2nd grade. Code became the place where I could experiment, fix
              things, and think beyond what school assignments allowed.
            </p>
          </motion.div>

          <motion.div className={styles.storyCard} variants={itemVariants}>
            <MdBolt className={styles.storyIcon} />
            <h2>What I build now</h2>
            <p>
              I design full-stack, cloud, and AI systems—social platforms,
              study engines, job tools, and research prototypes. I like taking
              ideas from sketch to production with clear impact.
            </p>
          </motion.div>

          <motion.div className={styles.storyCard} variants={itemVariants}>
            <MdPublic className={styles.storyIcon} />
            <h2>How I think</h2>
            <p>
              I learn like an engineer and compete like an athlete—disciplined,
              curious, and obsessed with getting better. I want AI and systems
              thinking to unlock access, not add more noise.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* EXPERIENCE & IMPACT */}
      <motion.section
        className={styles.experienceSection}
        initial="hidden"
        animate="show"
        variants={containerVariants}
      >
        <motion.div
          className={styles.experienceShell}
          variants={itemVariants}
        >
          <div className={styles.experienceHeader}>
            <h2>Experience &amp; Impact</h2>
            <p>
              I focus on projects that ship, help real users, and push my
              skills across AI, cloud, and full-stack engineering.
            </p>
          </div>

          <div className={styles.experienceGrid}>
            <div className={styles.experienceCard}>
              <h3>Explore Digits — SDE Intern (LLMOps / Agent Platform)</h3>
              <p className={styles.experienceMeta}>
                2023 – Present · MCP, cloud infra, and production LLM tooling
              </p>
              <ul>
                <li>
                  Built a Model Context Protocol server/client to connect LLM
                  tools to internal workflows, containerized with Docker and
                  deployed on AWS ECS/EC2 with RDS and CloudWatch SLO alerts.
                </li>
                <li>
                  Shipped an admin frontend (Next.js/React) for IRB-approved
                  CHIRP™ pediatric health studies with strict role-based access.
                </li>
                <li>
                  Tuned analytics queries to cut report latency ~40% while
                  reducing infra cost.
                </li>
              </ul>
            </div>

            <div className={styles.experienceCard}>
              <h3>UMBC ITE — Machine Learning &amp; Sensing Research</h3>
              <p className={styles.experienceMeta}>
                2023 – 2025 · Robotics, CV/ML, and time-series modeling
              </p>
              <ul>
                <li>
                  Prototyped Kalman-filter and sensor-fusion pipelines on RC
                  platforms to harden estimators against cyber-physical attacks.
                </li>
                <li>
                  Built CV/ML applications in Python/TensorFlow to surface early
                  illness patterns from time-series breathing data.
                </li>
              </ul>
            </div>

            <div className={styles.experienceCard}>
              <h3>Robotics &amp; Embedded Systems</h3>
              <p className={styles.experienceMeta}>
                FTC Robotics · RC platforms · Arduino &amp; Raspberry Pi
              </p>
              <ul>
                <li>
                  Developed tele-op and autonomous robot code in Java, using
                  TensorFlow/OpenCV for computer vision.
                </li>
                <li>
                  Built drones and RC cars with Raspberry Pi, Arduino, C++, and
                  Python—connecting perception, control, and hardware.
                </li>
              </ul>
            </div>

            <div className={styles.experienceCard}>
              <h3>Platforms &amp; Personal Work</h3>
              <p className={styles.experienceMeta}>
                Laamly · Cloud-Resume+ · Job Tracker · Adaptive Study Engine
              </p>
              <ul>
                <li>
                  Created production web apps using Next.js, serverless AWS, and
                  LLMs to solve real problems—social, career, and education.
                </li>
                <li>
                  Designed systems with metrics in mind: engagement,
                  reliability, and time saved for users.
                </li>
              </ul>
              <a href="/projects" className={styles.experienceLink}>
                View detailed case studies on the Projects page →
              </a>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* EDUCATION */}
      <motion.section
        className={styles.educationSection}
        initial="hidden"
        animate="show"
        variants={containerVariants}
      >
        <motion.div
          className={styles.educationShell}
          variants={itemVariants}
        >
          <div className={styles.educationHeader}>
            <h2>Education</h2>
            <p>
              A mix of formal programs and a lot of self-directed building,
              reading, and experimenting.
            </p>
          </div>

          <div className={styles.educationTimeline}>
            <div className={styles.educationItem}>
              <span className={styles.educationBadge}>University</span>
              <h3>Georgia Institute of Technology</h3>
              <p className={styles.educationMeta}>
                B.S. in Computer Science · Threads: Intelligence &amp;
                Information Internetworks
              </p>
              <ul>
                <li>
                  Focus on AI, machine learning, networking, and large-scale
                  systems.
                </li>
                <li>
                  Projects spanning data structures/algorithms, distributed
                  systems, and applied AI.
                </li>
              </ul>
            </div>

            <div className={styles.educationItem}>
              <span className={styles.educationBadge}>High School</span>
              <h3>Centennial High School</h3>
              <p className={styles.educationMeta}>
                Howard County, MD · STEM &amp; leadership
              </p>
              <ul>
                <li>
                  Led CAD, Web Development, and Tech Journal clubs; organized
                  workshops and publications.
                </li>
                <li>
                  Built early ML, robotics, and cloud projects that evolved into
                  today&apos;s platforms.
                </li>
              </ul>
            </div>

            <div className={styles.educationItem}>
              <span className={styles.educationBadge}>Self-Directed</span>
              <h3>Independent Learning</h3>
              <p className={styles.educationMeta}>
                Always reading, prototyping, and shipping
              </p>
              <ul>
                <li>
                  Continuous work across AI/ML, distributed systems, and cloud
                  architecture.
                </li>
                <li>
                  Learning by building: from social platforms to study engines
                  and health-tech dashboards.
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* CONTACT STRIP (NO FORM) */}
      <motion.section
        className={styles.contactSection}
        initial="hidden"
        animate="show"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className={styles.contactCard}>
          <h2>Let&apos;s Connect</h2>
          <p className={styles.contactSubtitle}>
            The fastest way to reach me is email, but I&apos;m active on GitHub
            and LinkedIn too.
          </p>

          <div className={styles.contactGrid}>
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
          </div>
        </motion.div>
      </motion.section>

      <Footer />
    </div>
  );
}
