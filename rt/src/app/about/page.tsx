"use client";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./About.module.css"; // Ensure this path matches your file structure
import Footer from "../footer/page";
import Navbar from "../navbar/page";
import { motion } from "framer-motion";

// Enhanced About component definition
export default function About() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = event.target as HTMLInputElement | HTMLTextAreaElement;
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form validation and submission logic here

    console.log(formValues);
    // After submission logic, clear form
    setFormValues({
      name: "",
      email: "",
      message: "",
    });
  };
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

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
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
          In the heart of the United States, where opportunity meets a rich blend of cultures, my journey into the world of technology took shape. This is a journey, though seeming to be modern and digital, which has been well rooted in values and work ethic inherited from Bengali culture. My first exposure to technology came in the second grade, when I was introduced to Python—not just as a subject in the academic curriculum but also as an inspiration during a time when conventional education often suppressed my creativity and analytical thinking. This challenging phase proved to be a turning point, demonstrating how the language of programming could serve as a powerful medium for self-expression and problem-solving.
          </p>
          <p>
          Soon enough, technology became more than just a means of having fun or doing school; it became a way in which I could help people. Often, I was the sole person in my family who would fix broken devices, an occupation that branded me as a natural problem solver. I was curious enough to dive deeper: taking things apart and putting them back together, from gadgets to intricate software systems. This hands-on exploration opened the door to Computer Science and Engineering, where I discovered true innovation happens between these two fields. It is where the logical precision of coding meets the practical impact of engineering—developing solutions that can truly change lives.
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
          One experience that greatly influenced my journey in technology was visiting a robotics laboratory at Virginia Tech. Watching how software and hardware come together to animate machines was definitely eye-opening. This experience really opened my eyes beyond just software development and introduced me to the fascinating world of robotics and engineering. It passed astonishment regarding robotics and let me get to understand how truly complex the relationship was between the code and physical world—but that can deliver the magic of self-driving cars and intelligent systems.
          </p>
          <p>
          My journey was not without obstacles. The more I delved into what many considered an unusual or overly complicated pursuit, the more I faced doubt and even ridicule from my peers. During this challenging time, I found inspiration in the resilience and work ethic of athletes and leaders that I looked up to. Guys like Stephen Curry, Tom Brady, and especially Khabib Nurmagomedov became role models for me in perseverance. Khabib&apos;s philosophy of relentless hard work, humility, and unwavering dedication in the face of adversity hit very close to home for me. He taught the lesson that true excellence far exceeds personal accomplishments; rather, it encompasses values imbued in one&apos;s person, which serve to inspire others.
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
          The intersection of artificial intelligence and machine learning with the basics of computer science and engineering has really made a huge difference in how I&apos;ve grown from just a fan of technology to an innovator. The possibilities within these fields, specifically in the area of autonomous vehicles, are far more than just a technical achievement; it&apos;s a chance to affect real change in society. This desire comes as a result of commitment to the leadership and care in innovations, while developing solutions to emphasize human well-being and advancement.
          </p>
          <p>
          My experiences in Bangladesh have been life-altering. The experiences I went through there underlined how immense the gap between potentiality and opportunity really was, and these are lessons one can never forget. Motivated anew by the resilience and the hardworking nature that epitomize the spirit of the Bengali people, I am driven toward action in using technology for this empowerment and equity. The influence of Khabib is not only with the accomplishments in the octagon but with the leadership, integrity, and hard work he showed, which was a very good example to follow. It&apos;s a synthesis of technological enthusiasm, engineering ingenuity, and dedication to ethical leadership that I try to put into everything I will do henceforth.
          </p>
          <p>
          My story goes beyond personal achievements; it is a testimony to the potential of technology, engineering, and computer science as powerful forces for good. I am committed to taking up leadership that, like Khabib, reflects hard work, honor, and respect and brings about positive change. As I continue to push the frontiers of computer science and engineering, I hope to create innovations that will bridge divides, enrich lives, and embolden the next generation to pursue their passions with commitment and purpose.
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
          <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                required
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                name="message"
                value={formValues.message}
                onChange={handleChange}
                required
              ></textarea>
              <motion.button
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
                type="submit"
              >
                Send Message
              </motion.button>
            </div>
          </form>
        </motion.div>
      </motion.section>
      <Footer />
    </div>
  );
}
