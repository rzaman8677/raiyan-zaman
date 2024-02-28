// NavBar.js
"use client";
import React, { useState, useEffect } from 'react';
import styles from "./Home.module.css";
 // Adjust the import path based on where you place this file within your project structure

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.brand}>Raiyan Zaman</div>
      <button
        className={styles.navToggle}
        aria-label="Toggle navigation"
        onClick={() => setIsNavExpanded(!isNavExpanded)}
      >
        {isNavExpanded ? '✕' : '☰'}
      </button>
      <ul className={`${styles.navLinks} ${isNavExpanded ? styles.active : ''}`}>
        <li>
          <a href="/" className={styles.navLink} onClick={() => setIsNavExpanded(false)}>
            Home
          </a>
        </li>
        <li>
          <a href="about" className={styles.navLink} onClick={() => setIsNavExpanded(false)}>
            About
          </a>
        </li>
        <li>
          <a href="projects" className={styles.navLink} onClick={() => setIsNavExpanded(false)}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className={styles.navLink} onClick={() => setIsNavExpanded(false)}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
