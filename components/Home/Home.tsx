"use client";
import React from "react";
import ArrowDownIcon from "../../icons/ArrowDownIcon";
import NextIcon from "../../icons/NextIcon";
import ReactIcon from "../../icons/ReactIcon";
import SassIcon from "../../icons/SassIcon";
import Card from "../Card/Card";
import styles from "./Home.module.scss";
import { useWindowScrollPositions } from "../../utils/useWindowScrollPosition";

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  const { scrollY } = useWindowScrollPositions();
  const [showArrow, setShowArrow] = React.useState(true);
  if (scrollY >= 200 && showArrow === true) {
    setShowArrow(false);
  }

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
                  <div className={styles.review}>
                    <p>
                      10/10 rekommenderar. Väldigt snabb, kunnig och proffsig!
                    </p>
                    <p>- Kulan(William Forslund), kund</p>
                  </div>
                </Card>
                <Card>
                  <div className={styles.review}>
                    <p>
                      När var senaste gången du hörde om en tonåring som byggde
                      en Stackoverflow klon? William vill ni inte missa.
                    </p>
                    <p>- Marcus Pousette, Senior IT-konsult</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
          {showArrow && (
            <div
              className={
                scrollY < 100 ? styles.scrolldown : styles.scrolldisapear
              }
            >
              <ArrowDownIcon />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
