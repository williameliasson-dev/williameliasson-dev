import React from "react";
import styles from "./Ending.module.scss";
import Image from "next/image";
import GitHub from "../../icons/GitHub";
import LinkedIn from "../../icons/LinkedIn";
import MailIcon from "../../icons/MailIcon";

interface EndingProps {}

const Ending: React.FC<EndingProps> = ({}) => {
  return (
    <div className={styles.ending}>
      <div className={styles["ending-text"]}>
        <h1>Det var allt!</h1>
        <p>Tack för att du tog dig tid att kolla in min portfolio.</p>
        <p>
          Ifall du vill komma i kontakt med mig eller vill ge feedback på sidan
          hör gärna av dig.
        </p>
        <div>
          <a href="https://github.com/williameliasson-dev">
            <button className={styles["ending-button"]}>
              <GitHub />
              GitHub
            </button>
          </a>
          <a href="mailto:williameliasson5@gmail.com">
            <button className={styles["ending-button"]}>
              <LinkedIn />
              LinkedIn
            </button>
          </a>
          <a href="mailto:williameliasson5@gmail.com">
            <button className={styles["ending-button"]}>
              <MailIcon />
              Mail
            </button>
          </a>
        </div>
      </div>
      <div className={styles["ending-img"]}>
        <Image
          src="/undraw_hello_re_3evm.svg"
          alt="Man som vinkar hejdå"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default Ending;
