import styles from "./Footer.module.css";
import linkedIn from "../images/LinkedIn_64.png";
import dribbble from "../images/Dribbble_64.png";

export function Footer() {
  return (
    <div className={styles.footer}>
      <p className={styles.cta}>Let's get in touch</p>
      <div className={styles.socialLinks}>
        <a href="https://dribbble.com/Thomasvdh" target="_blank">
          <img
            src={dribbble}
            alt="Dribbble social link"
            className={styles.socialIconLink}
          />
        </a>
        <a
          href="http://www.linkedin.com/in/thomas-van-den-heuvel"
          target="_blank"
        >
          <img
            src={linkedIn}
            alt="LinkedIn social link"
            className={styles.socialIconLink}
          />
        </a>
      </div>
      <p>|</p>
      <p className={styles.copyright}>© 2023 | Thomas van den Heuvel</p>
    </div>
  );
}
