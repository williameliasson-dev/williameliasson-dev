"use client";
import React, { useState } from "react";
import styles from "./Projects.module.scss";
import { useWindowScrollPositions } from "../../utils/useWindowScrollPosition";
import CircleIcon from "../../icons/CircleIcon";
import { Link } from "react-scroll";

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = ({}) => {
  const { scrollY } = useWindowScrollPositions();
  const [show, setShow] = useState(false);
  if (scrollY > 600) {
    if (show === false) {
      setShow(true);
    }
  }

  return (
    <div className={styles["projects-container"]}>
      <div className={styles["projects-intro"]}>
        <div className={styles["projects-intro-text"]}>
          <h1>
            <span>Projekt</span>
          </h1>

          <p>Här är några av mina projekt som jag har gjort.</p>
          <p>
            Jag har gjort dessa projekt för att lära mig mer om olika tekniker
            och för att ha något att visa upp.
          </p>
          <p>
            För att navigera till nåt av dem, klicka på ett av korten nedanför.
          </p>
        </div>
        <div className={styles["projects-intro-cards"]}>
          <div className={styles["projects-intro-card"]}>
            <div className={styles["projects-intro-card-top"]}>
              <h2>/webshop</h2>
            </div>
            <div className={styles["projects-intro-card-content"]}>
              <p>
                En simpel webbshop gjord i Next.js med SCSS, som betalningsmetod
                har jag valt att integrera Klarnas checkout system.
              </p>
            </div>
            <div className={styles["projects-intro-card-bottom"]}>
              <div className={styles["ts-icon"]}></div>
              <p>TypeScript</p>
            </div>
          </div>
          <Link to="qanda">
            <div className={styles["projects-intro-card"]}>
              <div className={styles["projects-intro-card-top"]}>
                <h2>/qanda-forum</h2>
              </div>
              <div className={styles["projects-intro-card-content"]}>
                <p>
                  En klon av stackoverflow med fokus på frågesektionen. Gjord i
                  Next.js med SCSS. Som databas har jag använt MongoDB med
                  Mongoose.
                </p>
              </div>
              <div className={styles["projects-intro-card-bottom"]}>
                <div className={styles["js-icon"]}></div>
                <p>JavaScript</p>
              </div>
            </div>
          </Link>
          <div className={styles["projects-intro-card"]}>
            <div className={styles["projects-intro-card-top"]}>
              <h2>/sorting-algo</h2>
            </div>
            <div className={styles["projects-intro-card-content"]}>
              <p>
                En simpel webbshop gjord i Next.js med SCSS, som betalningsmetod
                har jag valt att integrera Klarnas checkout system.
              </p>
            </div>
            <div className={styles["projects-intro-card-bottom"]}>
              <div className={styles["js-icon"]}></div>
              <p>JavaScript</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
