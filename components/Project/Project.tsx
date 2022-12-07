import React from "react";
import styles from "./Project.module.scss";
import Card from "../Card/Card";
import Link from "next/link";
import Image from "next/image";

interface ProjectProps {
  name: string;
  imgLink: string;
  description: string;
  githubLink: string;
  liveLink: string;
}

const Project: React.FC<ProjectProps> = ({
  name,
  imgLink,
  description,
  githubLink,
  liveLink,
}) => {
  return (
    <Card>
      <div className={styles.project}>
        <Link href={`${liveLink}`}>
          <div className={styles["project-image"]}>
            <Image width={290} height={240} src={imgLink} alt={name} />
          </div>
          <div className={styles["project-text"]}>
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        </Link>
      </div>
    </Card>
  );
};

export default Project;
