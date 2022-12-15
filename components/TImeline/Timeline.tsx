"use client";
import React, { useState } from "react";
import styles from "./Timeline.module.scss";

interface TimelineProps {}

const Timeline: React.FC<TimelineProps> = ({}) => {
  const [curDate, setCurDate] = useState(0);

  return (
    <div className={styles.timeline}>
      <h1>Min resa</h1>
      <div className={styles["timeline-buttons"]}>
        <button className={styles["timeline-button"]}>2020-november</button>
        <button className={styles["timeline-button"]}>2021-mars</button>
        <button className={styles["timeline-button"]}>2022-augusti</button>
        <button className={styles["timeline-button"]}>2022-december</button>
        <button className={styles["timeline-button"]}>2023..</button>
        <div className={styles["timeline-middle"]}></div>
      </div>
    </div>
  );
};

export default Timeline;
