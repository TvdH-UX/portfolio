import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

export function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className={styles.navLink}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/mijnwerk" className={styles.navLink}>
            Mijn Werk
          </Link>
        </li>
        <li>
          <Link to="/overmij" className={styles.navLink}>
            Over Mij
          </Link>
        </li>
      </ul>
    </nav>
  );
}
