"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Engineering.module.css"; // Make sure the path to your CSS file is correct

const EngineeringPage = () => {
  const [imageIndex, setImageIndex] = useState({
    ftcRobotProject: 0,
    umdMindlabsBreathingProject: 0,
    umbcComputerEngineeringInternship: 0,
    clawBotProjectForPltw: 0,
    autonomousRobotDesignProject: 0,
  });

  const projectImages = {
    ftcRobotProject: ["/images/11.webp", "/images/11.webp", "/images/11.webp", "/images/11.webp", "/images/22.jpg"],
    umdMindlabsBreathingProject: [
      "/images/mindlabs1.jpg",
      "/images/mindlabs2.jpg",
      "/images/mindlabs3.jpg",
    ],
    umbcComputerEngineeringInternship: [
      "/images/umbc1.jpg",
      "/images/umbc2.jpg",
      "/images/umbc3.jpg",
    ],
    clawBotProjectForPltw: [
      "/images/clawBot1.jpg",
      "/images/clawBot2.jpg",
      "/images/clawBot3.jpg",
    ],
    autonomousRobotDesignProject: [
      "/images/autoRobot1.jpg",
      "/images/autoRobot2.jpg",
      "/images/autoRobot3.jpg",
    ],
  };

  useEffect(() => {
    const intervalIds = {};
    Object.keys(projectImages).forEach((projectKey) => {
      intervalIds[projectKey] = setInterval(() => {
        setImageIndex((prevIndices) => ({
          ...prevIndices,
          [projectKey]:
            (prevIndices[projectKey] + 1) % projectImages[projectKey].length,
        }));
      }, 3000); // Rotate images every 3 seconds
    });

    return () => {
      Object.keys(intervalIds).forEach((intervalId) =>
        clearInterval(intervalIds[intervalId])
      );
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div>
      <Head>
        <title>Raiyan Zaman's Engineering Portfolio</title>
      </Head>

      <main className={styles.main}>
        {Object.entries(projectImages).map(([projectKey, images]) => (
          <motion.section
            key={projectKey}
            className={styles.section}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className={styles.textSection} variants={itemVariants}>
              {/* Conditional rendering for each project title and description */}
              {projectKey === "ftcRobotProject" && (
                <div>
                  <h2>FTC Robot Project - Cryptic#20123</h2>
                  <p>FTC project placeholder...</p>
                </div>
              )}
              {projectKey === "umdMindlabsBreathingProject" && (
                <div>
                  <h2>UMD Mindlabs - Breathing Analysis Project</h2>
                  <p>Mindlabs project placeholder...</p>
                </div>
              )}
              {projectKey === "umbcComputerEngineeringInternship" && (
                <div>
                  <h2>UMBC Computer Engineering Internship</h2>
                  <p>UMBC internship placeholder...</p>
                </div>
              )}
              {projectKey === "clawBotProjectForPltw" && (
                <div>
                  <h2>Claw Bot Project for PLTW</h2>
                  <p>Claw Bot project placeholder...</p>
                </div>
              )}
              {projectKey === "autonomousRobotDesignProject" && (
                <div>
                  <h2>Autonomous Robot Design</h2>
                  <p>Autonomous robot project placeholder...</p>
                </div>
              )}
            </motion.div>
            <div className={styles.sliderContainer}>
              <AnimatePresence>
                {images
                  .slice(imageIndex[projectKey], imageIndex[projectKey] + 3)
                  .map((img, idx) => (
                    <motion.img
                      key={`${projectKey}-${idx}`}
                      src={img}
                      alt={`${projectKey} image ${idx}`}
                      className={styles.slide}
                      variants={itemVariants}
                      // Ensuring that the key is unique for each image
                    />
                  ))}
              </AnimatePresence>
            </div>
          </motion.section>
        ))}
      </main>
    </div>
  );
};

export default EngineeringPage;
