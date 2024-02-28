"use client";
import React, { useEffect, useState, useMemo } from 'react';
import styles from './Home.module.css';

const HomePage: React.FC = () => {
  const words = ["Developer", "Designer", "Creator", "Enthusiast"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  // Typing effect
  useEffect(() => {
    if (index >= words.length) return;

    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1000); // Wait a bit at the end of a word
    } else if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prevIndex) => (prevIndex + 1) % words.length); // Loop back to the first word
    }

    const timeout = setTimeout(() => {
      setSubIndex((prevSubIndex) => prevSubIndex + (reverse ? -1 : 1));
    }, 100); // Speed of typing effect

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);


  return (
    <div className={styles.container}>

      <h1 className={styles.title}>
        Hi, my name is Raiyan Zaman. I am a <span className={styles.typing}>{words[index].substring(0, subIndex)}</span><span className={styles.blinker}>|</span>
      </h1>
    </div>
  );
};

export default HomePage;