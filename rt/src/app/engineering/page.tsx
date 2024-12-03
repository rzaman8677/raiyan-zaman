"use client";
// pages/index.js or pages/engineering.js

import React from "react";
import Head from "next/head";
import styles from "./Engineering.module.css";
import Image from "next/image";
import Footer from "../footer/page";
import Navbar from "../navbar/page";
const images = [
  { src: "/images/engineering/1.webp", type: "landscape" },
  { src: "/images/engineering/2.webp", type: "landscape" },
  { src: "/images/engineering/3.webp", type: "landscape" },
  { src: "/images/engineering/4.webp", type: "landscape" },
  { src: "/images/engineering/5.webp", type: "landscape" },
  { src: "/images/engineering/6.webp", type: "landscape" },
  { src: "/images/engineering/7.webp", type: "landscape" },
  { src: "/images/engineering/8.webp", type: "landscape" },
  { src: "/images/engineering/9.webp", type: "landscape" },
  { src: "/images/engineering/10.webp", type: "landscape" },
  { src: "/images/engineering/11.webp", type: "landscape" },
  { src: "/images/engineering/12.webp", type: "landscape" },
  { src: "/images/engineering/13.webp", type: "landscape" },
  { src: "/images/engineering/14.webp", type: "landscape" },
  { src: "/images/engineering/15.webp", type: "landscape" },
  { src: "/images/engineering/16.webp", type: "landscape" },
  { src: "/images/engineering/17.webp", type: "landscape" },
  { src: "/images/engineering/18.webp", type: "landscape" },
  { src: "/images/engineering/19.webp", type: "landscape" },
  { src: "/images/engineering/20.webp", type: "landscape" },
  { src: "/images/engineering/21.webp", type: "landscape" },
  { src: "/images/engineering/22.webp", type: "landscape" },
  { src: "/images/engineering/23.webp", type: "landscape" },
  { src: "/images/engineering/24.webp", type: "landscape" },
  { src: "/images/engineering/25.webp", type: "landscape" },
  { src: "/images/engineering/26.webp", type: "landscape" },
  { src: "/images/engineering/27.webp", type: "landscape" },
  { src: "/images/engineering/28.webp", type: "landscape" },
  { src: "/images/engineering/29.webp", type: "landscape" },
  { src: "/images/engineering/30.webp", type: "landscape" },
  { src: "/images/engineering/31.webp", type: "landscape" },
  { src: "/images/engineering/32.webp", type: "landscape" },
  { src: "/images/engineering/33.webp", type: "landscape" },
  { src: "/images/engineering/34.webp", type: "landscape" },
  { src: "/images/engineering/35.webp", type: "landscape" },
  { src: "/images/engineering/36.webp", type: "landscape" },
  { src: "/images/engineering/37.webp", type: "landscape" },
  { src: "/images/engineering/38.webp", type: "landscape" },
  { src: "/images/engineering/39.webp", type: "landscape" },
  { src: "/images/engineering/40.webp", type: "landscape" },
  { src: "/images/engineering/41.webp", type: "landscape" },
  { src: "/images/engineering/42.webp", type: "landscape" },
  { src: "/images/engineering/43.webp", type: "landscape" },
  { src: "/images/engineering/44.webp", type: "landscape" },
  { src: "/images/engineering/45.webp", type: "landscape" },
  { src: "/images/engineering/46.webp", type: "landscape" },
  { src: "/images/engineering/47.webp", type: "landscape" },
  { src: "/images/engineering/48.webp", type: "landscape" },
  { src: "/images/engineering/49.webp", type: "landscape" },
  { src: "/images/engineering/50.webp", type: "landscape" },
  { src: "/images/engineering/51.webp", type: "landscape" },
  { src: "/images/engineering/52.webp", type: "landscape" },
  { src: "/images/engineering/53.webp", type: "landscape" },
  { src: "/images/engineering/54.webp", type: "landscape" },
  { src: "/images/engineering/55.webp", type: "landscape" },
  { src: "/images/engineering/56.webp", type: "landscape" },
  { src: "/images/engineering/57.webp", type: "landscape" },
  { src: "/images/engineering/58.webp", type: "landscape" },
  { src: "/images/engineering/59.webp", type: "landscape" },
  { src: "/images/engineering/60.webp", type: "landscape" },
  { src: "/images/engineering/61.webp", type: "landscape" },
  { src: "/images/engineering/62.webp", type: "landscape" },
  { src: "/images/engineering/63.webp", type: "landscape" },
  { src: "/images/engineering/64.webp", type: "landscape" },
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
            <p>
              I have taken a few Project Lead the Way courses during high
              school, which provided me with a very strong foundation in
              engineering concepts and hands-on skills.
            </p>

            <p>
              In Digital Electronics, I learned how to design and model
              circuits, research how electrical systems work, and then apply the
              knowledge in a practical sense to real projects. We constructed
              functional circuits, programmed microcontrollers, and even
              integrated these circuits into small robots.
            </p>

            <p>
              In Computer Integrated Manufacturing, I studied robotics,
              hydraulics, and pneumatics. We saw the processes of manufacture:
              how to design and automate systems for applications in real life.
              I particularly enjoyed building and programming robots and using
              automation techniques to improve performance.
            </p>

            <p>
              During my coursework in Principles of Engineering, some of the
              areas we covered included mechanics, structural engineering, and
              energy systems. This course really exposed me to a variety of
              engineering problems and shaped my skill set to be flexible.
            </p>

            <p>
              In Introduction to Engineering Design, the students learned about
              computer-aided design tools and how to bring together technical
              skills and imagination in a project; from designing components all
              the way to creating prototypes, this course helped establish a
              strong base in design principles and problem-solving.
            </p>

            <p>
              These PLTW courses have been the strongest in helping me
              understand engineering—certainly, to approach challenges with a
              hands-on, interdisciplinary perspective.
            </p>
          </div>

          {/* UMBC ITE Section */}
          <div className={styles.card}>
            <h2>UMBC ITE</h2>
            <p>
              With the guidance of a distinguished professor, I was able to
              explore the intersection of computer science and engineering,
              specifically the integration of hardware and software systems.
              This included a design and programming exploration of hardware
              platforms: drones with Raspberry Pi 4 and C++, and RC cars
              controlled by Arduino. These projects further my understanding of
              the physical layer of digital systems, complementing knowledge in
              computer science.
            </p>

            <p>
              By combining knowledge of mechanical and electrical engineering
              with machine learning and computer vision, I&apos;ve developed
              autonomous systems that sense and interact with their environment.
              This synergy enables me to optimize software performance on
              hardware, creating innovative, reliable solutions. My
              interdisciplinary experience bridges the gap between software and
              hardware, equipping me to tackle complex challenges and contribute
              effectively to technology-driven projects.
            </p>
          </div>

          {/* Outside of School */}
          <div className={styles.card}>
            <h2>Personal Projects</h2>
            <p>
              Outside of school, I have pursued my interest in robotics and
              engineering through hands-on projects and personal initiatives.
              The summer going into tenth grade, I started working on my own
              autonomous assistant robot. It has a tank drive chassis with tank
              threads, being powered by four GoBilda Yellow Jacket motors and
              controlled by a Pololu motor HAT. The core of the system is the
              vision sensors: Luxonis OAK-D Lite cameras, optimized for neural
              networks. I had chosen vision-based sensing after researching
              Tesla&apos;s lidar-free approach to autonomous driving during a
              research class on autonomous systems in inclement weather. The
              robot is based on a Raspberry Pi 4 with 8 GB of RAM. I am
              currently working on the autonomous system using vSLAM, and on top
              of that, I will use reinforcement learning to complete it. I
              expect this to be done this summer, and I intend to integrate
              OpenAI&apos;s chatbot API for in-depth interaction.
            </p>
            <p>
              In addition to robotics, I&apos;ve used my Raspberry Pi and 3D
              printer to bring various ideas to life. I have designed 3D-printed
              CAD models of such important monuments as the Shohid Minar in
              Bangladesh, the FIFA World Cup trophy, and other practical
              household items. These projects give me practice in CAD modeling
              and 3D printing—how to bring in the artistic with engineering
              feasibility. I also built a PC from scratch just for the fun of
              getting familiar with hardware components and assembly. These
              experiences underline my interest in using technology creatively,
              whether it be to help solve real-world problems or to come up with
              new ideas altogether.
            </p>
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
                    layout="responsive"
                    loading="lazy" // Lazy loading to improve performance
                    quality={75} // Adjusting quality for better performance
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
