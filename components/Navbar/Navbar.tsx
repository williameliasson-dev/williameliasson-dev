/* eslint-disable react/jsx-no-comment-textnodes */
import Link from "next/link";
import React from "react";
import GitHub from "../../icons/GitHub";
import LinkedIn from "../../icons/LinkedIn";
import styles from "./Navbar.module.scss";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <div className={styles["navbar-container"]}>
      <div className={styles.navbar}>
        <div className={styles.brand}>
          <Link href={"/"}>
            <h3>williameliasson.dev</h3>
          </Link>
        </div>
        <nav>
          <Link href={"#hem"}>// hem</Link>
          <Link href={"#projekt"}>// projekt</Link>
          <Link href={"#om-mig"}>// om mig</Link>
        </nav>
        <div className={styles.socials}>
          <Link href={"https://github.com/williameliasson-dev"}>
            <GitHub />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/william-eliasson-235927228/"}
          >
            <LinkedIn />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
1;
