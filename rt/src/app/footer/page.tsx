import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Footer.module.css"; 
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
    <div className={styles.footer}>
      <div className={styles.socialLinks}>
        <a
          href="https://www.youtube.com/@RaiyanRadiZaman"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIcon}
        >
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a
          href="https://www.instagram.com/raiyanzaman30/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIcon}
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://www.linkedin.com/in/raiyan-zaman-a94653269"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIcon}
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://github.com/rzaman8677"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIcon}
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  );
export default Footer;