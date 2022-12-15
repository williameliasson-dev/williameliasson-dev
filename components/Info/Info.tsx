import React from "react";
import Timeline from "../TImeline/Timeline";
import styles from "./Info.module.scss";

interface InfoProps {}

const Info: React.FC<InfoProps> = ({}) => {
  return (
    <div className={styles.info}>
      <Timeline />
    </div>
  );
};

export default Info;
