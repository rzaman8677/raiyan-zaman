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
  { src: "/images/rz2.jpg", type: "landscape" },
  { src: "/images/11.webp", type: "landscape" },
  { src: "/images/logo5.png", type: "landscape" },
  { src: "/images/raiyan.png", type: "portrait" },
  { src: "/images/rz2.jpg", type: "landscape" },
  { src: "/images/11.webp", type: "landscape" },
  { src: "/images/logo5.png", type: "landscape" },
  { src: "/images/logo5.png", type: "landscape" },
  { src: "/images/logo5.png", type: "landscape" },
  { src: "/images/logo5.png", type: "landscape" },
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
            <p>
              Detail my accomplishments in your Computer Science courses.
            </p>
          </div>

          {/* UMD Mindlabs Section */}
          <div className={styles.card}>
            <h2>UMD Mindlabs</h2>
            <p>Describe my experience and projects with UMD Mindlabs.</p>
          </div>

          {/* UMBC ITE Section */}
          <div className={styles.card}>
            <h2>UMBC ITE</h2>
            <p>
              Discuss my involvement with UMBC Information
              Technology/Computer Science programs.
            </p>
          </div>

          {/* Explore Digits */}
          <div className={styles.card}>
            <h2>ExploreDigits</h2>
            <p>
              Discuss my involvement with Explore Digits.
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
