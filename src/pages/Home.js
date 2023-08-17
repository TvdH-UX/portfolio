import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import photoThomas from "../images/ThomasHeadshot.png";

export function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.mainSection}>
        <h1 className={styles.greeting}>Hoi, ik ben</h1>
        <h1 className={styles.name}>Thomas van den Heuvel</h1>
        <h2>Developer | Tester | UX/UI Designer</h2>
        <div className={styles.clickThroughLinks}>
          <ul>
            <li>
              <Link to="/overmij" className={styles.clickThroughLink}>
                {" "}
                {">"} <span>Meer over mij</span>
              </Link>
            </li>
            <li>
              <Link to="/mijnwerk" className={styles.clickThroughLink}>
                {" "}
                {">"} <span>Bekijk mijn werk</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.photoSection}>
        <img src={photoThomas} alt="Thomas" />
      </div>
    </div>
  );
}
