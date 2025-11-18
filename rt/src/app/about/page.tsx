"use client";

import Head from "next/head";
import React from "react";
import { motion } from "framer-motion";
import { MdBolt, MdMemory, MdPublic } from "react-icons/md";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { FiArrowDown } from "react-icons/fi"; // NEW

import styles from "./About.module.css";
import Footer from "../footer/page";
import Navbar from "../navbar/page";

const containerVariants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const listVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <div className={styles.mainContainer}>
      <Head>
        <title>About Raiyan Zaman</title>
      </Head>

      <Navbar />

      <main className={styles.main}>
        {/* HERO */}
        <motion.section
          className={styles.heroSection}
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <div className={styles.heroInner}>
            <div className={styles.heroPills}>
              <span className={styles.heroBadge}>About</span>
              <span className={styles.heroTag}>AI · Cloud · Systems</span>
            </div>
            <h1 className={styles.heroTitle}>Welcome to my journey.</h1>
            <p className={styles.heroSubtitle}>
              How growing up hacking on code, building robots, and shipping
              cloud apps turned into a focus on reliable AI-driven systems that
              real people actually use.
            </p>

            <div className={styles.heroStatsRow}>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNumber}>10+</span>
                <span className={styles.heroStatLabel}>production projects</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNumber}>3</span>
                <span className={styles.heroStatLabel}>
                  areas: AI, cloud, systems
                </span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNumber}>2012</span>
                <span className={styles.heroStatLabel}>
                  wrote first Python script
                </span>
              </div>
            </div>

            {/* NEW: scroll hint so people know to scroll into the timeline */}
            <div className={styles.heroScrollHint}>
              <span>Scroll to see the timeline</span>
              <FiArrowDown className={styles.heroScrollIcon} />
            </div>
          </div>
        </motion.section>

        {/* LAYOUT: LEFT RAIL + RIGHT CONTENT */}
        <section className={styles.layoutSection}>
          <div className={styles.layoutInner}>
            {/* LEFT RAIL */}
            <aside className={styles.sideRail}>
              <motion.div
                className={styles.profileCard}
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                <p className={styles.profileOverline}>Snapshot</p>
                <h2 className={styles.profileTitle}>Who I am</h2>
                <p className={styles.profileBody}>
                  Builder first, student second. I like connecting{" "}
                  <span className={styles.highlight}>AI</span>,{" "}
                  <span className={styles.highlight}>systems design</span>, and{" "}
                  <span className={styles.highlight}>cloud infra</span> into
                  projects that feel polished end-to-end—from the data layer to
                  the UI.
                </p>

                <div className={styles.profileMiniGrid}>
                  <div className={styles.profileMiniItem}>
                    <MdMemory className={styles.profileIcon} />
                    <div>
                      <p className={styles.profileMiniLabel}>How it started</p>
                      <p className={styles.profileMiniText}>
                        Discovered Python in 2nd grade; code became the way to
                        test ideas that didn&apos;t fit inside homework boxes.
                      </p>
                    </div>
                  </div>

                  <div className={styles.profileMiniItem}>
                    <MdBolt className={styles.profileIcon} />
                    <div>
                      <p className={styles.profileMiniLabel}>What I do now</p>
                      <p className={styles.profileMiniText}>
                        Design AI-driven platforms, dashboards, and tools that
                        ship to real users on cloud-native stacks.
                      </p>
                    </div>
                  </div>

                  <div className={styles.profileMiniItem}>
                    <MdPublic className={styles.profileIcon} />
                    <div>
                      <p className={styles.profileMiniLabel}>How I work</p>
                      <p className={styles.profileMiniText}>
                        Combine engineer discipline with athlete mindset:
                        iterate fast, measure impact, and leave systems better
                        than I found them.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* UPDATED: sections pill is now a clean vertical list */}
              <nav className={styles.railNav}>
                <p className={styles.railNavLabel}>Sections</p>
                <a href="#experience" className={styles.railLink}>
                  Experience
                </a>
                <a href="#education" className={styles.railLink}>
                  Education
                </a>
                <a href="#beyond-code" className={styles.railLink}>
                  Beyond the résumé
                </a>
                <a href="#contact" className={styles.railLink}>
                  Contact
                </a>
              </nav>
            </aside>

            {/* RIGHT CONTENT */}
            <div className={styles.contentColumn}>
              {/* EXPERIENCE */}
              <motion.section
                id="experience"
                className={styles.timelineSection}
                variants={listVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.35 }}
              >
                <header className={styles.sectionHeader}>
                  <h2>Experience &amp; impact</h2>
                  <p>
                    A running log of work where I shipped production systems,
                    learned how teams operate, and saw users interact with what
                    I built.
                  </p>
                </header>

                <ol className={styles.timelineList}>
                  <motion.li
                    className={styles.timelineItem}
                    variants={itemVariants}
                  >
                    <div className={styles.timelineDot} />
                    <div className={styles.timelineContent}>
                      <div className={styles.timelineHeaderRow}>
                        <h3>
                          Explore Digits — SDE Intern (LLMOps / Agent Platform)
                        </h3>
                        <span className={styles.timelineMeta}>
                          2023 – Present · MCP, cloud infra, production LLM
                          tooling
                        </span>
                      </div>
                      <ul>
                        <li>
                          Built a Model Context Protocol server/client to plug
                          LLM tools into internal workflows, containerized with
                          Docker and deployed on AWS ECS/EC2 with RDS and
                          CloudWatch SLO alerts.
                        </li>
                        <li>
                          Shipped a Next.js/React admin frontend for
                          IRB-approved CHIRP™ pediatric health studies with
                          strict role-based access.
                        </li>
                        <li>
                          Tuned analytics queries to cut report latency by ~40%
                          while reducing infra cost.
                        </li>
                      </ul>
                    </div>
                  </motion.li>

                  <motion.li
                    className={styles.timelineItem}
                    variants={itemVariants}
                  >
                    <div className={styles.timelineDot} />
                    <div className={styles.timelineContent}>
                      <div className={styles.timelineHeaderRow}>
                        <h3>
                          UMBC ITE — Machine Learning &amp; Sensing Research
                        </h3>
                        <span className={styles.timelineMeta}>
                          2023 – 2025 · Robotics, CV/ML, time-series modeling
                        </span>
                      </div>
                      <ul>
                        <li>
                          Prototyped Kalman-filter and sensor-fusion pipelines
                          on RC platforms to harden estimators against
                          cyber-physical attacks.
                        </li>
                        <li>
                          Built Python/TensorFlow pipelines to surface early
                          illness patterns from time-series breathing data.
                        </li>
                      </ul>
                    </div>
                  </motion.li>

                  <motion.li
                    className={styles.timelineItem}
                    variants={itemVariants}
                  >
                    <div className={styles.timelineDot} />
                    <div className={styles.timelineContent}>
                      <div className={styles.timelineHeaderRow}>
                        <h3>Robotics &amp; Embedded Systems</h3>
                        <span className={styles.timelineMeta}>
                          FTC Robotics · RC platforms · Arduino &amp; Raspberry
                          Pi
                        </span>
                      </div>
                      <ul>
                        <li>
                          Developed tele-op and autonomous robot code in Java
                          using TensorFlow/OpenCV for perception.
                        </li>
                        <li>
                          Built drones and RC cars with Raspberry Pi, Arduino,
                          C++, and Python—connecting hardware, control, and ML.
                        </li>
                      </ul>
                    </div>
                  </motion.li>

                  <motion.li
                    className={styles.timelineItem}
                    variants={itemVariants}
                  >
                    <div className={styles.timelineDot} />
                    <div className={styles.timelineContent}>
                      <div className={styles.timelineHeaderRow}>
                        <h3>Platforms &amp; Personal Work</h3>
                        <span className={styles.timelineMeta}>
                          Laamly · Cloud-Resume+ · Job Tracker · Adaptive Study
                          Engine
                        </span>
                      </div>
                      <ul>
                        <li>
                          Created production web apps using Next.js, serverless
                          AWS, and LLMs to solve real problems—social, career,
                          and education.
                        </li>
                        <li>
                          Designed systems with metrics in mind: engagement,
                          reliability, and time saved for users.
                        </li>
                      </ul>
                      <a href="/projects" className={styles.inlineLink}>
                        View detailed case studies on the Projects page →
                      </a>
                    </div>
                  </motion.li>
                </ol>
              </motion.section>

              {/* EDUCATION */}
              <motion.section
                id="education"
                className={styles.timelineSection}
                variants={listVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.35 }}
              >
                <header className={styles.sectionHeader}>
                  <h2>Education</h2>
                  <p>
                    Formal programs plus a lot of self-directed reading,
                    building, and experimenting.
                  </p>
                </header>

                <ol className={styles.timelineList}>
                  <motion.li
                    className={styles.timelineItem}
                    variants={itemVariants}
                  >
                    <div className={styles.timelineDot} />
                    <div className={styles.timelineContent}>
                      <div className={styles.timelineHeaderRow}>
                        <h3>Georgia Institute of Technology</h3>
                        <span className={styles.timelineMeta}>
                          B.S. Computer Science · Threads: Intelligence &amp;
                          Information Internetworks
                        </span>
                      </div>
                      <ul>
                        <li>
                          Focus on AI, machine learning, networking, and
                          large-scale systems.
                        </li>
                        <li>
                          Projects across data structures/algorithms,
                          distributed systems, and applied AI.
                        </li>
                      </ul>
                    </div>
                  </motion.li>

                  <motion.li
                    className={styles.timelineItem}
                    variants={itemVariants}
                  >
                    <div className={styles.timelineDot} />
                    <div className={styles.timelineContent}>
                      <div className={styles.timelineHeaderRow}>
                        <h3>Centennial High School</h3>
                        <span className={styles.timelineMeta}>
                          Howard County, MD · STEM &amp; leadership
                        </span>
                      </div>
                      <ul>
                        <li>
                          Led CAD, Web Development, and Tech Journal clubs;
                          organized workshops and publications.
                        </li>
                        <li>
                          Built early ML, robotics, and cloud projects that
                          evolved into today&apos;s platforms.
                        </li>
                      </ul>
                    </div>
                  </motion.li>

                  <motion.li
                    className={styles.timelineItem}
                    variants={itemVariants}
                  >
                    <div className={styles.timelineDot} />
                    <div className={styles.timelineContent}>
                      <div className={styles.timelineHeaderRow}>
                        <h3>Independent Learning</h3>
                        <span className={styles.timelineMeta}>
                          Always reading, prototyping, and shipping
                        </span>
                      </div>
                      <ul>
                        <li>
                          Continuous work across AI/ML, distributed systems, and
                          cloud architecture.
                        </li>
                        <li>
                          Learning by building—from social platforms to study
                          engines and health-tech dashboards.
                        </li>
                      </ul>
                    </div>
                  </motion.li>
                </ol>
              </motion.section>

              {/* BEYOND CODE / VALUES */}
              <motion.section
                id="beyond-code"
                className={styles.valuesSection}
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                <header className={styles.sectionHeader}>
                  <h2>Beyond the résumé</h2>
                  <p>
                    A few principles that shape how I show up on teams and in
                    the work I choose.
                  </p>
                </header>

                <div className={styles.valuesGrid}>
                  <div className={styles.valueCard}>
                    <p className={styles.valueLabel}>How I think</p>
                    <p className={styles.valueText}>
                      Ship small, ship often, and let data decide. I like clear
                      ownership, honest feedback, and documentation that
                      survives turnover.
                    </p>
                  </div>
                  <div className={styles.valueCard}>
                    <p className={styles.valueLabel}>What I&apos;m learning next</p>
                    <p className={styles.valueText}>
                      Scaling ML systems, inference-time optimizations, and
                      better observability around AI features—latency, drift,
                      and fairness.
                    </p>
                  </div>
                  <div className={styles.valueCard}>
                    <p className={styles.valueLabel}>Outside of code</p>
                    <p className={styles.valueText}>
                      Boxing, kickboxing, and community work around education
                      and tech access. I care about using engineering to
                      actually move people forward.
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* CONTACT STRIP */}
              <motion.section
                id="contact"
                className={styles.contactSection}
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className={styles.contactCard}>
                  <h2>Let&apos;s connect</h2>
                  <p className={styles.contactSubtitle}>
                    The fastest way to reach me is email, but I&apos;m active on
                    GitHub and LinkedIn too.
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
                        <span className={styles.contactValue}>
                          /in/raiyanzaman1
                        </span>
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
                </div>
              </motion.section>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
