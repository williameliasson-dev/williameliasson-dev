import Image from "next/image";
import { homedir } from "os";
import React from "react";
import NextIcon from "../../icons/NextIcon";
import ReactIcon from "../../icons/ReactIcon";
import SassIcon from "../../icons/SassIcon";
import Card from "../Card/Card";
import styles from "./Home.module.scss";

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  return (
    <>
      <div id="hem" className={styles["home"]}>
        <div className={styles["home-background"]}>
          <div className={styles["cards-container"]}>
            <div className={styles.cards}>
              <Card>
                <div className={styles.card}>
                  <div className={styles["card-greeting"]}>
                    <h2>Hej, mitt namn är William</h2>
                    <p>
                      Jag är en webbutvecklare med fokus på både frontend och
                      backend(fullstack). Jag har en stor passion för att skapa
                      olika typer av webbapplikationer och jag är alltid
                      intresserad av att lära mig nya saker. Mina styrkor är att
                      jag är en snabb och effektiv lösare av problem och att jag
                      är en bra teamspelare.
                    </p>
                  </div>
                  <div className={styles["card-greeting-image"]}></div>
                </div>
              </Card>

              <div className={styles["card-side"]}>
                <Card>
                  <div className={styles.stack}>
                    <h2>Mina favoriter</h2>
                    <div>
                      <NextIcon />
                      <ReactIcon />
                      <SassIcon />
                    </div>
                  </div>
                </Card>
                <Card>
                  <div className={styles.card}>
                    <h2>Mina favoriter</h2>
                    <div></div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
