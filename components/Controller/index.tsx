import React from "react";
import styles from "./Controller.module.scss";

const Controller = () => {
  return (
    <div className={styles.controller}>
      <div className={styles.controls}>
        <div>right</div>
        <div>left</div>
      </div>
      <div className={styles.pagination}>pagination</div>
    </div>
  );
};

export default Controller;
