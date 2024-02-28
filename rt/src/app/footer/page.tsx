import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faTiktok } from "@fortawesome/free-brands-svg-icons/faTiktok";
import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Footer.module.css"; 
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";

const Footer = () => (
    <div className={styles.footer}>
      <div className={styles.socialLinks}>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIcon}
        >
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a
          href="https://tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIcon}
        >
          <FontAwesomeIcon icon={faTiktok} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIcon}
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://github.com"
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