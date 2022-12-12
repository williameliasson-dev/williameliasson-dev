"use client";
import React, { useState } from "react";
import styles from "./Projects.module.scss";
import { useWindowScrollPositions } from "../../utils/useWindowScrollPosition";
import QandaForum from "../QandaForum/QandaForum";

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
      <div className={scrollY > 0 || show ? styles.projects : styles.hidden}>
        <QandaForum />
      </div>
    </div>
  );
};

export default Projects;
