"use client";
// pages/index.js or pages/engineering.js

import React from "react";
import Head from "next/head";
import styles from "./Engineering.module.css";
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
const EngineeringPage = () => {
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
        <title>Engineering Accomplishments</title>
        <meta
          name="description"
          content="Portfolio showcasing my engineering accomplishments"
        />
        {/* Add any other head elements here */}
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>My Engineering Portfolio</h1>

        <section className={styles.accomplishments}>
          {/* Robotics Section */}
          <div className={styles.card}>
            <h2>Robotics</h2>
            <p>
              In 2021, alongside my programming endeavors, I also delved into
              the realms of building, designing, and electrical wiring with the
              FTC robotics team Cryptic #20123, amidst the unique challenges
              presented by the coronavirus pandemic. This multifaceted role
              allowed me to leverage and expand my engineering acumen,
              demonstrating a keen ability to adapt and innovate in the face of
              new challenges.
            </p>
            <p>
              My involvement in the design and construction of the robot
              encompassed a significant contribution to the assembly and
              computer-aided design (CAD) of key components such as the intake
              and drivetrain systems. Utilizing Autodesk Fusion 360, I created
              detailed technical drawings that meticulously outlined the
              robot&apos;s dimensions. This process not only required a deep
              understanding of mechanical design principles but also an ability
              to visualize and execute complex structures in a virtual
              environment, showcasing my proficiency in leveraging CAD tools for
              precision engineering tasks.
            </p>
            <p>
              The electrical wiring aspect of my role demanded a thorough
              understanding of electronic circuitry and the seamless integration
              of various components to ensure optimal performance and
              reliability of the robot. I was responsible for wiring the control
              system, sensors, and actuators, ensuring efficient power
              distribution and signal processing. This responsibility
              highlighted my attention to detail, problem-solving skills, and an
              unwavering commitment to safety and functionality. It also
              underscored my capacity to work with intricate electrical systems,
              demonstrating an aptitude for electrical engineering within the
              multidisciplinary field of robotics.
            </p>
            <p>
              Throughout this journey, my contributions in building, designing,
              and electrical wiring were marked by a meticulous approach to
              craftsmanship, an innovative mindset in overcoming design
              challenges, and a collaborative spirit in working alongside team
              members. These experiences not only enhanced my technical skills
              but also reinforced the importance of a holistic understanding of
              robotics, blending mechanical, electrical, and software
              engineering to create sophisticated, competitive robots.
            </p>
          </div>

          {/* PLTW Section */}
          <div className={styles.card}>
            <h2>Project Lead The Way (PLTW)</h2>
            <p>Describe my experience and projects with PLTW.</p>
          </div>

          {/* UMBC ITE Section */}
          <div className={styles.card}>
            <h2>UMBC ITE</h2>
            <p>
              My journey under the guidance of a distinguished professor has not
              only encompassed the realms of computer science but also extended
              deeply into engineering, particularly in the integration of
              hardware and software systems. This holistic approach has involved
              leveraging engineering principles to design, build, and program
              hardware platforms, such as drones and RC cars, using a variety of
              tools and languages including C++ and Arduino. These experiences
              have honed my abilities to understand and manipulate the physical
              components that underpin digital systems.
            </p>

            <p>
              Engineering sophisticated hardware systems requires a profound
              understanding of both mechanical and electrical engineering
              concepts. My work in building a drone with a Raspberry Pi 4 and
              programming it in C++, as well as constructing an RC car and
              implementing a control system on an Arduino, exemplify the
              seamless fusion of these disciplines. This hands-on experience
              with hardware has not only solidified my understanding of the
              tangible aspects of technology but also complemented my computer
              science skills by providing a comprehensive perspective on how
              software and hardware interact.
            </p>

            <p>
              The knowledge I have gained from engineering hardware systems
              complements my capabilities in computer science, especially in the
              development and implementation of machine learning models and
              computer vision algorithms. Understanding the hardware on which
              these algorithms run allows me to optimize software performance
              and efficiency, making it possible to design systems that are not
              only innovative but also practical and reliable in real-world
              applications. My ability to bridge the gap between software and
              hardware is a direct result of my interdisciplinary education and
              experience, enabling me to contribute effectively to projects that
              require a deep integration of technology.
            </p>

            <p>
              This synergy between computer science and engineering is further
              demonstrated in my contributions to projects involving autonomous
              vehicles and robotics. My hands-on experience with hardware
              platforms, combined with my expertise in machine learning and
              computer vision, has empowered me to develop systems that can
              sense, interpret, and interact with their environment in
              sophisticated ways. These projects showcase my ability to apply a
              comprehensive skill set to tackle complex challenges, from the
              underlying electronics to the software that controls them.
            </p>

            <p>
              Ultimately, my engineering experience not only enriches my
              understanding of the physical world but also enhances my computer
              science endeavors, particularly in areas where hardware and
              software integration is critical. The ability to design and
              implement both the tangible and intangible components of
              technological solutions is a testament to the interdisciplinary
              nature of my education and work, positioning me uniquely in the
              field of technology.
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

export default EngineeringPage;
