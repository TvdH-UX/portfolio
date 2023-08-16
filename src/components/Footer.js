import styles from "./Footer.module.css";

export function Footer() {
  return (
    <div className={styles.footer}>
      <p className={styles.cta}>Let's get in touch</p>
      <a href="#">Dribbble</a>
      <a href="#">LinkedIn</a>
      <p>|</p>
      <p className={styles.copyright}>© 2023 | Thomas van den Heuvel</p>
    </div>
  );
}
