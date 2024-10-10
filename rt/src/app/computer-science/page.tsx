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
            <p>Detail my accomplishments in your Computer Science courses.</p>
          </div>

          {/* UMD Mindlabs Section */}
          <div className={styles.card}>
            <h2>UMD Mindlabs</h2>
            <p>
              At UMD Mindlabs, I worked on the Breath Analysis project using
              Python-based tools. In the project, we collected breathing data
              from real people on days they were sick and healthy. We then
              analyzed/digested the problem to determine what features would be
              vital to extract to classify what kind of breath it was. Based on
              our findings, we cleaned the data for noise, segmented the
              breaths, and used Python data science packages (scikit-learn,
              matplotlib, NumPy, Pandas) to save features, such as breath
              length, amplitude, height, and slope (to reduce dimensions), to
              CSV files with a note on the type of day. Using this data, we
              trained and developed a Recurrent Neural Network in PyTorch for
              each of the individual features, and we collected data to
              determine which factors were the most influential in determining
              what is considered a sick day. Using our knowledge, we developed
              another Recurrent Neural Network with all the factors incorporated
              and weighted to determine the type of breath. After developing our
              model, we sought out one of our other research questions of signs
              leading up to an illness based on human breaths. We utilized a
              similar approach to determine signs and discovered similar
              patterns that indicated the illness slightly beforehand.
            </p>
          </div>

          {/* UMBC ITE Section */}
          <div className={styles.card}>
            <h2>UMBC ITE</h2>
            <p>
              Under the mentorship of my esteemed professor, I have engaged in a
              comprehensive exploration of computer science disciplines,
              particularly focusing on artificial intelligence, machine
              learning, and computer vision. Utilizing a suite of sophisticated
              tools and programming languages such as TensorFlow, OpenCV, Java,
              Matlab, C++, Python, and notably, PyTorch, I have significantly
              advanced my technical proficiency and applied it to a series of
              complex projects.
            </p>

            <p>
              One of my key projects involved leveraging PyTorch, a leading
              machine learning library, to develop a neural network model
              designed specifically to recognize cars. This project not only
              allowed me to delve deep into the nuances of neural network
              architectures but also provided me with practical experience in
              training and optimizing models for specific computer vision tasks.
              The successful implementation of this model underscores my ability
              to harness cutting-edge machine learning frameworks to solve
              real-world problems.
            </p>

            <p>
              In addition to my work with PyTorch, I have utilized OpenCV, a
              foundational library for computer vision operations, to automate
              the annotation process of cars and stop signs in video feeds. This
              task involved developing algorithms capable of detecting these
              objects in real-time, streamlining the data preparation phase for
              training computer vision models. The automation of this process
              significantly enhanced the efficiency and accuracy of model
              training, showcasing my skills in applying computer vision
              techniques to improve machine learning workflows.
            </p>

            <p>
              My involvement in programming a drone with a Raspberry Pi 4 in C++
              and building and programming an RC car on an Arduino platform are
              testament to my versatility and adeptness in integrating software
              with hardware for robotics applications. These projects required a
              deep understanding of both the theoretical and practical aspects
              of computer science and robotics, reinforcing my comprehensive
              skill set in the field.
            </p>

            <p>
              Furthermore, I have had the opportunity to contribute to the
              research initiatives of PhD students, offering support in projects
              that extend beyond my primary focus areas. This collaboration has
              not only broadened my knowledge base but also fostered a strong
              sense of teamwork and interdisciplinary cooperation.
            </p>

            <p>
              To support the dissemination of my findings and the accumulation
              of my technical knowledge, I am in the process of creating a
              professional website using NextJS, TypeScript, TailwindCSS, and
              MongoDB. This platform will not only showcase my contributions to
              the field of computer science but also serve as a valuable
              resource for peers, educators, and industry professionals
              interested in the latest advancements in artificial intelligence,
              machine learning, and computer vision.
            </p>
          </div>

          {/* Explore Digits */}
          <div className={styles.card}>
            <h2>ExploreDigits</h2>
            <p>Discuss my involvement with Explore Digits.</p>
          </div>

          {/* FTC Robotics */}
          <div className={styles.card}>
            <h2>FTC Robotics (2021-2023)</h2>
            <p>
              In 2021, I embarked on an enriching journey with FTC robotics team
              Cryptic #20123, where I primarily contributed as a programmer
              amidst the challenges of the coronavirus pandemic. With a
              foundational interest in engineering and computer science but
              modest experience in robotics, I rapidly advanced my skills
              through diligent self-education, workshops, and extensive online
              resources. This self-driven approach underlines my capability to
              learn and adapt swiftly to new technological domains.
            </p>
            <p>
              My programming responsibilities were pivotal, focusing on the
              development of both tele-operated (tele-op) and autonomous
              functionalities of our robot. Utilizing the IntelliJ Integrated
              Development Environment (IDE) and coding in Java, I was tasked
              with crafting intricate algorithms that would enable our robot to
              perform with precision and efficiency in competitive scenarios.
              This role was my first practical application of GitHub for version
              control, marking a significant milestone in my programming career
              by emphasizing the importance of collaboration, version tracking,
              and code management in large-scale projects.
            </p>
            <p>
              Moreover, my foray into the realms of TensorFlow and OpenCV was
              driven by the need to integrate advanced computer vision
              capabilities into our robot. This experience was instrumental in
              enhancing my proficiency in applying machine learning and image
              processing techniques to real-world problems, showcasing my
              ability to leverage cutting-edge technology in innovative ways.
            </p>
            <p>
              My contributions as a programmer were characterized by a
              meticulous approach to problem-solving, an eagerness to embrace
              new technologies, and a commitment to excellence. These qualities,
              coupled with a collaborative spirit and a relentless pursuit of
              knowledge, were fundamental to our team&apos;s successes and my
              personal growth within the realm of robotics programming.
            </p>
          </div>

          {/* Outside of School */}
          <div className={styles.card}>
            <h2>Personal Projects</h2>
            <p>Discuss my accomplishments with your personal projects.</p>
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
