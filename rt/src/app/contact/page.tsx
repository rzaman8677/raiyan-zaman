"use client";
import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "./Contact.module.css";
import Footer from "../footer/page";
import Navbar from "../navbar/page";
import { motion } from "framer-motion";

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
        <title>Contact Raiyan Zaman</title>
        {/* Rest of the Head content */}
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
      </section>
      <Footer />
    </div>
  );
}
