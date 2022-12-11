"use client";
import React, { useState } from "react";
import Project from "../Project/Project";
import styles from "./Projects.module.scss";
import { useWindowScrollPositions } from "../../utils/useWindowScrollPosition";

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
      <div className={scrollY > 600 || show ? styles.projects : styles.hidden}>
        <Project
          name="qanda-forum"
          description="A forum where you can ask questions and get answers by other users."
          imgLink="/qanda-forum.png"
          githubLink="https://github.com/williameliasson-dev/q-and-a-forum"
          liveLink="https://q-and-a-forum.vercel.app/"
        />
        <Project
          name="webshop"
          description="A webshop built with Next.js, Redux, Scss and klarna as checkout."
          imgLink="/qanda-forum.png"
          githubLink="https://github.com/williameliasson-dev/q-and-a-forum"
          liveLink="https://q-and-a-forum.vercel.app/"
        />
        <Project
          name="qanda-forum"
          description="A forum where you can ask questions and get answers by other users"
          imgLink="/qanda-forum.png"
          githubLink="https://github.com/williameliasson-dev/q-and-a-forum"
          liveLink="https://q-and-a-forum.vercel.app/"
        />
        <Project
          name="qanda-forum"
          description="A forum where you can ask questions and get answers by other users"
          imgLink="/qanda-forum.png"
          githubLink="https://github.com/williameliasson-dev/q-and-a-forum"
          liveLink="https://q-and-a-forum.vercel.app/"
        />
      </div>
    </div>
  );
};

export default Projects;
