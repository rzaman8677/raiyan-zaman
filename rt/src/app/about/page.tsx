"use client";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "./About.module.css"; // Ensure this path matches your file structure
import Footer from "../footer/page";
import Navbar from "../navbar/page";
import { motion } from "framer-motion";

// Enhanced About component definition
export default function About() {
  // Constant for Khabib Quote
  const khabibQuote = "The eagle does not catch flies. - Khabib Nurmagomedov";

  // List of hobbies and interests
  const hobbies = [
    "Basketball",
    "Building PCs",
    "Gaming",
    "MMA",
    "Soccer",
    "Football",
    "Building Robots",
    "Programming",
    "3D Printing",
    "Researching and Modeling",
  ];

  // Motion variants for animations
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
        <title>About Raiyan Zaman</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      {/* Background Image */}
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
        <div className={styles.heroContent}>
          <h1>Welcome to My Journey</h1>
          <p>Discover more about me, my experiences, and what I do.</p>
        </div>
      </section>

      {/* <motion.section
        className={styles.imageSection}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className={styles.imageWrapper}>
          <Image
            src="/images/rz.jpg"
            alt="Raiyan Zaman"
            fill
            className={styles.imageImage}
          />
        </div>
      </motion.section> */}
      <motion.section
        className={styles.aboutSection}
        initial="hidden"
        animate="show"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className={styles.textContent}>
          <h2>About Me</h2>
          <p>
            In the heart of the United States, where opportunity intersects with
            a mosaic of cultures, my journey into the expansive universe of
            technology began. This path, while seemingly digital and futuristic,
            is deeply rooted in the values and work ethic inherited from my
            Bengali heritage. My early encounter with technology, specifically
            through learning Python in second grade, was not merely an academic
            endeavor; it was a beacon of hope during times when traditional
            learning paradigms seemed to constrain my creative and analytical
            propensities. This period of struggle was transformative, teaching
            me that in the digital syntax of programming lay a powerful medium
            for expression and problem-solving.
          </p>
          <p>
            The role of technology in my life swiftly transcended beyond leisure
            and academic requirements; it became a means of service. I was often
            found troubleshooting and repairing malfunctioning gadgets within my
            household, a testament to my burgeoning role as a problem solver.
            This innate drive to understand, dismantle, and reconstruct not only
            electronic devices but also complex software systems paved the way
            for a deeper exploration into the realms of computer science and
            engineering. The convergence of these fields, I learned, is where
            true innovation lies—combining the logical structure of coding with
            the tangible impact of engineering to create solutions that can
            transform the world.
          </p>
        </motion.div>
      </motion.section>

      <motion.section
        className={styles.aboutSection}
        initial="hidden"
        animate="show"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className={styles.textContent}>
          <h2>My Story</h2>
          <p>
            A seminal experience that profoundly shaped my technological journey
            was my visit to a robotics lab at Virginia Tech. The seamless
            integration of software with hardware to breathe life into inanimate
            objects was nothing short of revelatory. It expanded my horizon
            beyond the confines of standalone software development into the
            intricate ballet of robotics and engineering. This epiphany was not
            just about the allure of robotics; it was a gateway to understanding
            the symbiotic relationship between code and the physical world, a
            harmony that could lead to innovations like autonomous vehicles and
            intelligent systems.
          </p>
          <p>
            However, my journey was not devoid of challenges. As I delved deeper
            into what was perceived by many as an esoteric pursuit, I
            encountered skepticism and even ridicule from my peers. It was
            during this tumultuous period that I drew inspiration from athletes
            and leaders known for their resilience and work ethic. Figures like
            Stephen Curry, Tom Brady, and particularly Khabib Nurmagomedov,
            became beacons of perseverance. Khabib&apos;s philosophy of
            relentless hard work, humility, and unwavering commitment to his
            craft in the face of adversity resonated deeply with me. His journey
            taught me that excellence is not just about achieving personal
            milestones but about embodying values that inspire others.
          </p>
        </motion.div>
      </motion.section>
      <motion.section
        className={styles.aboutSection}
        initial="hidden"
        animate="show"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className={styles.textContent}>
          <h2>My Motivation</h2>
          <p>
            The intersection of artificial intelligence and machine learning
            with the foundational principles of computer science and engineering
            has been a significant catalyst in my evolution from a technology
            enthusiast to an innovator. The transformative potential of these
            combined disciplines, particularly in the domain of autonomous
            vehicles, represents not just the pinnacle of engineering
            achievement but a conduit for positive societal change. My ambition
            in this field is fueled by a desire to lead by example, to innovate
            responsibly, and to develop solutions that prioritize the welfare
            and advancement of humanity.
          </p>
          <p>
            This motivation is further amplified by my experiences in
            Bangladesh, where the stark contrast between potential and
            opportunity serves as a constant reminder of the transformative
            power of technology. Inspired by the work ethic and resilience of
            the Bengali people, I am committed to leveraging technology as a
            tool for empowerment and equity. Khabib&apos;s influence extends
            beyond the octagon into my professional aspirations, where his
            embodiment of leadership, integrity, and hard work serves as a
            guiding light. It is this blend of technological passion,
            engineering ingenuity, and a commitment to ethical leadership that I
            seek to bring to my future endeavors.
          </p>
          <p>
            y narrative is not just a chronicle of personal achievement but a
            testament to the power of technology, engineering, and computer
            science as forces for good. It is a commitment to being a leader
            who, like Khabib, champions hard work, inspires change, and embodies
            the values of integrity and respect. As I continue to explore the
            frontiers of computer science and engineering, my goal remains to
            innovate in ways that bridge gaps, enhance lives, and inspire the
            next generation to pursue their passions with dedication and a sense
            of purpose.
          </p>
        </motion.div>
      </motion.section>
      {/* Repeat the structure for other sections like My Story, My Motivation, etc., using motion.div and container/item variants for animations */}
      <motion.section
        className={styles.contactSection}
        initial="hidden"
        animate="show"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className={styles.contactForm}>
          <h2>Contact Me</h2>
          <div className={styles.inputGroup}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows={4} required></textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
            >
              Send Message
            </motion.button>
          </div>
        </motion.div>
      </motion.section>
      <Footer />
    </div>
  );
}
