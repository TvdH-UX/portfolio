import { Link } from "react-router-dom";
import styles from "./Project.module.css";

export function Project({
  projectTitle,
  projectYear,
  projectTools,
  projectLink,
  projectPhoto,
  projectIntroduction,
  projectSubheader1,
  projectP1,
  projectSubheader2,
  projectP2,
  projectSubheader3,
  projectP3,
  projectPhoto1,
  previousProject,
  nextProject,
}) {
  return (
    <div className={styles.container}>
      <h1>{projectTitle}</h1>
      <hr />
      <div className={styles.headerSection}>
        <div className={styles.projectInfo}>
          <h2>Jaar:</h2>
          <p>{projectYear}</p>
          <br />
          <h2>Tools:</h2>
          <p>{projectTools}</p>
          <br />
          {projectLink && (
            <a href={projectLink} target="_blank">
              {">"} Link
            </a>
          )}
        </div>
        <div className={styles.projectPhoto}>
          <img src={projectPhoto} alt={projectTitle + " preview photo"} />
        </div>
      </div>
      <div className={styles.contentSection}>
        <p className={styles.introduction}>{projectIntroduction}</p>
        <h2 className={styles.subheader}>{projectSubheader1}</h2>
        <p>{projectP1}</p>
        <img src={projectPhoto1} alt="" />
        <h2 className={styles.subheader}>{projectSubheader2}</h2>
        <p>{projectP2}</p>
        {projectSubheader3 && (
          <>
            <h2 className={styles.subheader}>{projectSubheader3}</h2>
            <p>{projectP3}</p>
          </>
        )}
      </div>
      <div className={styles.navSection}>
        <Link to={`/mijnwerk/${previousProject}`}>
          <h3 className={styles.previous}>
            {previousProject} {"<"}
          </h3>
        </Link>
        <Link to={`/mijnwerk/${nextProject}`}>
          <h3 className={styles.next}>
            {">"} {nextProject}
          </h3>
        </Link>
      </div>
    </div>
  );
}
