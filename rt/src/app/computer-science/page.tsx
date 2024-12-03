"use client";
// pages/index.js or pages/engineering.js

import React from "react";
import Head from "next/head";
import styles from "./ComputerScience.module.css";
import Image from "next/image";
import Footer from "../footer/page";
import Navbar from "../navbar/page";
const images = [
  // Assuming you have images in your public folder or an external source
  { src: "/images/computer-science/1.webp", type: "landscape" },
  { src: "/images/computer-science/2.webp", type: "landscape" },
  { src: "/images/computer-science/3.webp", type: "landscape" },
  // Add all your 30 images paths here
];
const ComputerScience = () => {
  return (
    <>
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
      <Head>
        <title>Computer Science Accomplishments</title>
        <meta
          name="description"
          content="Portfolio showcasing my engineering accomplishments"
        />
        {/* Add any other head elements here */}
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>My Computer Science Portfolio</h1>

        <section className={styles.accomplishments}>
          {/* Computer Science Classes Section */}
          <div className={styles.card}>
            <h2>Computer Science Classes</h2>
            <p>I have completed a variety of computer science courses, including AP Computer Science A, Computer Science Principles, Advanced Object-Oriented Programming, Data Structures, and Advanced Data Structures. These classes have provided a strong foundation in programming, algorithms, and computational problem-solving, developing simultaneously my ability to design efficient and scalable solutions.</p>
          </div>

          {/* UMD Mindlabs Section */}
          <div className={styles.card}>
            <h2>UMD Mindlabs</h2>
            <p>
            I contributed meaningfully to the Breath Analysis project at UMD Mindlabs by analyzing real-life breathing data—healthy and sick days—collected from people using Python tools. We extracted the most necessary features like breath length, amplitude, and slope, then cleaned and segmented the data into files that we saved as CSV for further analysis. We used PyTorch to design and train RNNs for breath-type classification and identification of the most important factors for determining illness. Building on this basis, we trained another RNN using all factors in order to predict breath types, exploring patterns that would be predictive of the onset of illness and thereby discovering early signs using similar approaches.
            </p>
          </div>

          {/* UMBC ITE Section */}
          <div className={styles.card}>
            <h2>UMBC ITE</h2>
            <p>
            Under the mentorship of my professor, I have worked in artificial intelligence, machine learning, and computer vision using TensorFlow, PyTorch, OpenCV, Java, Python, and C++. Key projects include developing a car-recognition neural network in PyTorch, automating video annotation with OpenCV, programming a drone using Raspberry Pi in C++, and building an RC car on Arduino. These experiences have taught me how to integrate software and hardware for robotics and apply state-of-the-art machine learning techniques. I&apos;ve also worked with PhD research and am building a professional website using NextJS to share my work and insights.
            </p>
          </div>

          {/* Explore Digits */}
          <div className={styles.card}>
            <h2>ExploreDigits</h2>
            <p>I was given the opportunity to collaborate on developing tools during my internship at Explore Digits, which is meant to improve patient care and outcomes. My role included the development of a data collection and analytics platform by integrating machine learning, thus offering deeper and actionable insights regarding the health of patients. Those tools sped up data processing to drive effective healthcare decisions that demonstrate how AI can transform the face of medicine. The experience has helped my skills in machine learning, collaboration, and developing impactful solutions within a critical industry.</p>
          </div>

          {/* FTC Robotics */}
          <div className={styles.card}>
            <h2>FTC Robotics (2021-2023)</h2>
            <p>
            In 2021, I joined FTC robotics team Cryptic #20123 as a programmer and promptly began learning robotics through pandemic difficulties. I have performed in the development of tele-op and autonomous robot functions in Java using IntelliJ; got experience with GitHub for version control. I also did an exploration of TensorFlow and OpenCV to integrate computer vision and apply machine learning and image processing techniques. My role highly required problem-solving, adaptability, and collaboration skills to drive both the success of the team and my personal growth in robotics programming.
            </p>
          </div>

          {/* Outside of School */}
          <div className={styles.card}>
            <h2>Personal Projects</h2>
            <p>I demonstrate my commitment to developing leading-edge solutions and sharing knowledge through the use of technology in some of my personal projects. I have built websites with machine learning, artificial intelligence, and interactive features that engage users in unique ways. Some of my websites on Islam include educational games using neural networks designed to teach concepts interactively in a way that increases interest in Islamic culture and values. These platforms now combine state-of-the-art technologies in object recognition and personalized learning experiences with innovative technical underpinnings and valuable content. I have also written articles on the development process of these projects, from incorporating neural networks in games to leveraging cloud computing for scalability, hoping to teach and inspire others. I&apos;ve taken up projects through which I brought together technical knowledge, creativity, and a burning passion for education to inform, engage, and create inclusion by using technology.</p>
          </div>
        </section>

        <section className={styles.imageGallery}>
          <h2 className={styles.galleryTitle}>Gallery</h2>
          <div className={styles.grid}>
            {images.map((image, index) => {
              // Inline style for grid row span based on image type
              const style =
                image.type === "portrait" ? { gridRow: "span 2" } : {};

              return (
                <div key={index} className={styles.imageWrapper} style={style}>
                  <Image
                    src={image.src}
                    alt={`Engineering Project ${index + 1}`}
                    className={styles.responsiveImage}
                    width={500}
                    height={400}
                  />
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ComputerScience;
