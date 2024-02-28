"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Engineering.module.css";

interface ImageIndexState {
  [key: string]: number;
}

const EngineeringPage = () => {
  const [imageIndex, setImageIndex] = useState<ImageIndexState>({
    ftcRobotProject: 0,
    umdMindlabsBreathingProject: 0,
    umbcComputerEngineeringInternship: 0,
    clawBotProjectForPltw: 0,
    autonomousRobotDesignProject: 0,
  });

  const projectImages = {
    ftcRobotProject: ["/images/11.webp", "/images/11.webp", "/images/11.webp", "/images/11.webp", "/images/22.jpg"],
    umdMindlabsBreathingProject: [
    ],
    umbcComputerEngineeringInternship: [
    ],
    clawBotProjectForPltw: [
    ],
    autonomousRobotDesignProject: [
    ],
  };

  useEffect(() => {
    interface ProjectImages {
      [key: string]: string[];
    }

    const projectImages: ProjectImages = {
      ftcRobotProject: ["/images/11.webp", "/images/11.webp", "/images/11.webp", "/images/11.webp", "/images/22.jpg"],
      umdMindlabsBreathingProject: [],
      umbcComputerEngineeringInternship: [],
      clawBotProjectForPltw: [],
      autonomousRobotDesignProject: [],
    };

    const intervalIds: { [key: string]: NodeJS.Timeout } = {};
    (Object.keys(projectImages) as (keyof typeof projectImages)[]).forEach((projectKey) => {
      intervalIds[projectKey] = setInterval(() => {
        setImageIndex((prevIndices) => {
          // Ensure that projectKey is a keyof projectImages
          const key = projectKey as keyof typeof prevIndices;
          const newIndex = (prevIndices[key] + 1) % projectImages[key].length;
          return {
            ...prevIndices,
            [key]: newIndex,
          };
        });
      }, 3000); // Rotate images every 3 seconds
    });
  
    return () => {
      Object.keys(intervalIds).forEach((intervalId) => clearInterval(intervalIds[intervalId as keyof typeof intervalIds]));
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
        <title>Raiyan Zaman&apos;s Engineering Portfolio</title>
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
