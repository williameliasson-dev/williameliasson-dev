import React from "react";
import Project from "../Project/Project";
import styles from "./Projects.module.scss";

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = ({}) => {
  return (
    <div className={styles["projects-container"]}>
      <div className={styles.projects} id="projekt">
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
