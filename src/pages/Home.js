import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import photoThomas from "../images/ThomasHeadshot.png";

export function Home() {
  return (
    <>
      <div className={styles.mainSection}>
        <h1>Hoi, ik ben</h1>
        <h1>Thomas van den Heuvel</h1>
        <h2>Developer | Tester | UX/UI Designer</h2>
        <div className="clickThroughLinks">
          <ul>
            <li>
              <Link to="/overmij"> {">"} Meer over mij</Link>
            </li>
            <li>
              <Link to="/mijnwerk"> {">"} Bekijk mijn werk</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.photoSection}>
        <img src={photoThomas} alt="Thomas" />
      </div>
    </>
  );
}
