"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "../navbar/page";
import Footer from "../footer/page";
import styles from "./WorkSection.module.css";
import Link from "next/link";

type Project = {
  title: string;
  subtitle: string;
  timeframe: string;
  category: string;
  summary: string;
  bullets: string[];
  tech: string[];
  skills: string;
};

const projects: Project[] = [
  {
    title: "Laamly Social Media Platform",
    subtitle: "Founder • Full-Stack Engineer",
    timeframe: "May 2025 – Present",
    category: "Platform • Real-Time • AI",
    summary:
      "All-in-one social platform with Reels, podcasts, Twitter-style posts, and real-time DMs running on a self-hosted stack.",
    bullets: [
      "Designed and built a full-stack social media platform with real-time content feeds and private messaging.",
      "Supports vertically scrolling Reels, long-form podcast audio uploads/streaming, and lightweight text/media posts.",
      "Implemented LLM-powered topic tagging so posts auto-cluster into topics and stay discoverable over time.",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "Tailwind CSS",
      "GitHub OAuth",
      "Google OAuth",
      "LLMs",
    ],
    skills:
      "Product design • Full-stack architecture • Real-time systems • Distributed caching • Growth-oriented UX",
  },
  {
    title: "Cloud-Resume+ Optimizer",
    subtitle: "Creator • AI Résumé Platform",
    timeframe: "Mar 2025 – Jun 2025",
    category: "Serverless • AI Writing • ATS",
    summary:
      "AI-powered résumé optimizer that ingests PDFs/text and returns recruiter-ready versions in multiple templates.",
    bullets: [
      "Built end-to-end serverless pipeline that analyzes résumés with LLMs and rewrites bullets with quantified impact.",
      "Implemented ATS keyword matching against a target JD plus gap analysis to surface missing skills and phrases.",
      "Generated 1,000+ optimized outputs, cutting manual editing time by ~70% and boosting interview callbacks ~20%.",
    ],
    tech: [
      "AWS Lambda (Node.js)",
      "DynamoDB",
      "S3",
      "API Gateway",
      "Next.js",
      "TypeScript",
      "REST APIs",
      "Schema validation",
    ],
    skills:
      "Serverless design • Resilient pipelines • PDF/text processing • UX for productivity tools • Data-driven iteration",
  },
  {
    title: "Cloud Job Tracker",
    subtitle: "Developer • Serverless Dashboard",
    timeframe: "Jan 2025 – Mar 2025",
    category: "Cloud • Productivity • Data",
    summary:
      "Central job-search dashboard for applications, notes, and files with secure auth and real-time updates.",
    bullets: [
      "Built a mobile-first tracker to manage applications, notes, and attachments in one place.",
      "Used DynamoDB GSIs, response caching, and TTL cleanup to trim API latency by ~35% while maintaining 99.9% uptime.",
      "Integrated Cognito-based auth with JWTs and role-based access to keep data locked to each user.",
    ],
    tech: [
      "React + Vite",
      "AWS Lambda (Python)",
      "API Gateway",
      "DynamoDB",
      "Amazon Cognito",
      "S3",
    ],
    skills:
      "Cloud-native architectures • Observability & performance tuning • Auth & RBAC • Frontend data visualization",
  },
  {
    title: "Adaptive Study Engine",
    subtitle: "Architect • AI Study Platform",
    timeframe: "Aug 2024 – Jan 2025",
    category: "AI • NLP • EdTech",
    summary:
      "AI-powered study dashboard that ingests class PDFs, generates questions, and schedules reviews with spaced repetition.",
    bullets: [
      "Ingested large PDFs with Textract + Comprehend, extracting keyphrases and entities to seed question generation.",
      "Implemented SM-2 spaced-repetition scheduling, mastery dashboards, and weak-topic drills to focus practice.",
      "Automated CI/CD with GitHub Actions over a fully serverless backend (API Gateway → Lambda → DynamoDB/S3).",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "AWS Lambda",
      "API Gateway",
      "Textract",
      "Comprehend",
      "DynamoDB",
      "S3",
      "GitHub Actions",
    ],
    skills:
      "NLP pipelines • Learning science (SM-2) • Secure file handling • Analytics dashboards • Production CI/CD",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.5, ease: "easeOut" },
  }),
};

const ProjectsPage: React.FC = () => {
  return (
    <div className={styles.workContainer}>
      <Navbar />

      <main className={styles.projectsMain}>
        {/* HERO */}
        <motion.section
          className={styles.hero}
          initial="hidden"
          animate="show"
          variants={containerVariants}
        >
          <div className={styles.heroInner}>
            <p className={styles.heroEyebrow}>Featured Work</p>
            <h1 className={styles.heroTitle}>
              Platforms, products, and systems I&apos;ve built.
            </h1>
            <p className={styles.heroSubtitle}>
              From AI-powered tools to full social platforms, these projects
              show how I design, build, and scale real products end-to-end—
              across cloud, data, and delightful UX.
            </p>

            <div className={styles.heroBadges}>
              <span className={styles.heroBadge}>Full-Stack</span>
              <span className={styles.heroBadge}>AI &amp; NLP</span>
              <span className={styles.heroBadge}>Serverless &amp; Cloud</span>
              <span className={styles.heroBadge}>Developer Experience</span>
            </div>

            <div className={styles.heroActions}>
              <Link href="/contact" className={styles.primaryCta}>
                Let&apos;s work together
              </Link>
              <a
                href="https://www.linkedin.com/in/raiyanzaman1"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryCta}
              >
                View LinkedIn profile
              </a>
            </div>
          </div>
        </motion.section>

        {/* PROJECT GRID */}
        <section className={styles.projectsSection}>
          <div className={styles.projectsHeaderRow}>
            <h2 className={styles.sectionTitle}>Projects &amp; Platforms</h2>
            <p className={styles.sectionSubtitle}>
              Each project blends systems thinking, product sense, and execution
              across AI, cloud, and modern web stacks.
            </p>
          </div>

          <div className={styles.projectGrid}>
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                className={styles.projectCard}
                initial="hidden"
                animate="show"
                custom={index}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  boxShadow: "0 24px 60px rgba(0,0,0,0.55)",
                }}
                whileTap={{ scale: 0.99 }}
              >
                <header className={styles.projectHeader}>
                  <div>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p className={styles.projectSubtitle}>
                      {project.subtitle}
                    </p>
                  </div>
                  <div className={styles.projectMeta}>
                    <span className={styles.timeframe}>
                      {project.timeframe}
                    </span>
                    <span className={styles.categoryPill}>
                      {project.category}
                    </span>
                  </div>
                </header>

                <p className={styles.projectSummary}>{project.summary}</p>

                <ul className={styles.projectBullets}>
                  {project.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

                <div className={styles.techSection}>
                  <p className={styles.techLabel}>Tech Stack</p>
                  <div className={styles.techTags}>
                    {project.tech.map((t) => (
                      <span key={t} className={styles.techTag}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={styles.skillsSection}>
                  <p className={styles.skillsLabel}>Skills</p>
                  <p className={styles.skillsText}>{project.skills}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* CONTACT CTA */}
        <section className={styles.contactCta}>
          <div className={styles.contactInner}>
            <h2>Let&apos;s build what&apos;s next.</h2>
            <p>
              I&apos;m open to internships, research collaborations, and product
              work at the intersection of AI, cloud, and impactful software.
            </p>

            <div className={styles.contactMethods}>
              <a
                href="mailto:raiyanrzaman@gmail.com"
                className={styles.contactCard}
              >
                <span className={styles.contactLabel}>Email</span>
                <span className={styles.contactValue}>
                  raiyanrzaman@gmail.com
                </span>
                <span className={styles.contactHint}>
                  Fastest way to reach me for opportunities.
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/raiyanzaman1"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactCard}
              >
                <span className={styles.contactLabel}>LinkedIn</span>
                <span className={styles.contactValue}>/in/raiyanzaman1</span>
                <span className={styles.contactHint}>
                  Connect for roles, referrals, and collabs.
                </span>
              </a>

              <a
                href="https://github.com/rzaman8677"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactCard}
              >
                <span className={styles.contactLabel}>GitHub</span>
                <span className={styles.contactValue}>@rzaman8677</span>
                <span className={styles.contactHint}>
                  Explore code, experiments, and infra.
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
