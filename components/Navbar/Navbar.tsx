/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import { Link } from "react-scroll";
import React from "react";
import GitHub from "../../icons/GitHub";
import LinkedIn from "../../icons/LinkedIn";
import styles from "./Navbar.module.scss";
import { useWindowScrollPositions } from "../../utils/useWindowScrollPosition";
import { useRouter } from "next/router";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  const { scrollY } = useWindowScrollPositions();

  return (
    <div className={styles["navbar-container"]}>
      <div className={styles.navbar}>
        <div className={styles.brand}>
          <Link activeClass="active" to="hem">
            <h3>williameliasson.dev</h3>
          </Link>
        </div>
        <nav>
          <Link to={"hem"} className={scrollY < 600 ? styles.active : ""}>
            // hem
          </Link>
          <Link
            to={"projekt"}
            className={scrollY > 600 && scrollY < 1500 ? styles.active : ""}
          >
            // projekt
          </Link>
          <Link
            to={"om-mig"}
            className={scrollY > 1500 && scrollY < 9999 ? styles.active : ""}
          >
            // om mig
          </Link>
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
