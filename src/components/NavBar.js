import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

export function NavBar() {
  return (
    <div className={styles.navContainer}>
      <nav>
        <ul className={styles.navigationBar}>
          <li>
            <NavLink to="/portfolio" className={styles.navLink}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/mijnwerk" className={styles.navLink}>
              Mijn Werk
            </NavLink>
          </li>
          <li>
            <NavLink to="/overmij" className={styles.navLink}>
              Over Mij
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
