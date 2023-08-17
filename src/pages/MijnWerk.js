import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./MijnWerk.module.css";

import nodeScapePreview from "../images/NodeScapePreview.png";
import triviaPreview from "../images/TriviaPreview.png";
import talentDexPreview from "../images/TalentDexPreview.png";

export function MijnWerk() {
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleLinkHover = (image) => {
    setHoveredImage(image);
  };

  return (
    <div className={styles.container}>
      <div className={styles.mainSection}>
        <h1>Mijn werk</h1>
        <hr />
        <ul>
          <li>
            <Link
              to="/mijnwerk/nodescape"
              onMouseEnter={() => handleLinkHover(nodeScapePreview)}
              onMouseLeave={() => handleLinkHover(null)}
            >
              01: NodeScape
            </Link>
          </li>
          <li>
            <Link
              to="/mijnwerk/talentdex"
              onMouseEnter={() => handleLinkHover(talentDexPreview)}
              onMouseLeave={() => handleLinkHover(null)}
            >
              02: TalentDex
            </Link>
          </li>
          <li>
            <Link
              to="/mijnwerk/trivia"
              onMouseEnter={() => handleLinkHover(triviaPreview)}
              onMouseLeave={() => handleLinkHover(null)}
            >
              03: Trivia
            </Link>
          </li>
        </ul>
      </div>
      <div
        className={`${styles.photoSection} ${
          hoveredImage ? styles.photoVisible : styles.photoHidden
        }`}
      >
        <div className={styles.photoPlaceholder}>
          {hoveredImage && <img src={hoveredImage} />}
        </div>
      </div>
    </div>
  );
}
