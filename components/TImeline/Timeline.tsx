"use client";
import React, { useState } from "react";
import styles from "./Timeline.module.scss";
import Image from "next/image";

interface TimelineProps {}

const Timeline: React.FC<TimelineProps> = ({}) => {
  const [slide, setSlide] = useState(0);
  const [slideAnimate, setSlideAnimate] = useState(0);

  return (
    <div>
      <h1 className={styles["timeline-title"]}>Min resa</h1>
      <div className={styles.timeline}>
        <div className={styles["timeline-buttons"]}>
          <div className={styles["timeline-line-mobile"]}></div>
          <button
            style={{ marginTop: "0" }}
            className={
              slideAnimate === 0
                ? styles["timeline-button-active"]
                : styles["timeline-button"]
            }
            onClick={() => {
              setSlideAnimate(0);
              setTimeout(() => {
                setSlide(0);
              }, 300);
            }}
          >
            2020-november
          </button>
          <button
            className={
              slideAnimate === 1
                ? styles["timeline-button-active"]
                : styles["timeline-button"]
            }
            onClick={() => {
              setSlideAnimate(1);
              setTimeout(() => {
                setSlide(1);
              }, 300);
            }}
          >
            2021-mars
          </button>
          <button
            className={
              slideAnimate === 2
                ? styles["timeline-button-active"]
                : styles["timeline-button"]
            }
            onClick={() => {
              setSlideAnimate(2);
              setTimeout(() => {
                setSlide(2);
              }, 300);
            }}
          >
            2022-augusti
          </button>
          <button
            className={
              slideAnimate === 3
                ? styles["timeline-button-active"]
                : styles["timeline-button"]
            }
            onClick={() => {
              setSlideAnimate(3);
              setTimeout(() => {
                setSlide(3);
              }, 300);
            }}
          >
            2022-december
          </button>
          <button
            className={
              slideAnimate === 4
                ? styles["timeline-button-active"]
                : styles["timeline-button"]
            }
            onClick={() => {
              setSlideAnimate(4);
              setTimeout(() => {
                setSlide(4);
              }, 300);
            }}
          >
            2023..
          </button>
          <div className={styles["timeline-middle"]}></div>
        </div>
        {slide === 0 && (
          <div
            className={
              slideAnimate === 0
                ? styles["timeline-slide"]
                : styles["timeline-slide-hidden"]
            }
          >
            <div className={styles["timeline-slide-text"]}>
              <h1>Första raderna kod.</h1>
              <p>
                I november 2020 så började jag lära mig programmering. Jag
                började med att lära mig Lua pågrund av att jag byggde en FiveM
                server. Vilket är ett spel som är en moddad version av GTA V.
                <br />
                Grundtanken var att jag och några vänner ville bygga nåt coolt,
                men ingen kunde programmera. Så jag offrade mig och började lära
                mig Lua.
              </p>
              <p>
                Sen därifrån har mitt intresse för programmering bara blivit
                större.
              </p>
            </div>
            <div className={styles["timeline-slide-img"]}>
              <Image
                src={"/Lua-Logo.svg"}
                alt="Mitt första programmerings-språk"
                width={500}
                height={300}
              ></Image>
              <p>Mitt första programmerings-språk</p>
            </div>
          </div>
        )}
        {slide === 1 && (
          <div
            className={
              slideAnimate === 1
                ? styles["timeline-slide"]
                : styles["timeline-slide-hidden"]
            }
          >
            <div className={styles["timeline-slide-text"]}>
              <h1>Min första commit</h1>
              <p>
                I mars under 2021 så commitade jag min första bit av kod till
                GitHub
              </p>
              <p>
                Det var en enkel hemsida byggt i Flask ett Python webb
                framework.
                <br />
                Jag hade byggt den för att lära mig Flask och för att lära mig
                mer om webb development.
              </p>
              <p>
                Rätt så snabbt så började jag lära mig mer om webb development
                och insåg att det finns bättre sätt att bygga webbplatser.
              </p>
              <p>Efter det så hittade jag min första kärlek, React.</p>
            </div>
            <div className={styles["timeline-slide-img"]}>
              <Image
                src={"/profile-first-repo-dark.svg"}
                alt="first repo"
                width={500}
                height={300}
              ></Image>
              <p>Mitt första repo</p>
            </div>
          </div>
        )}
        {slide === 2 && (
          <div
            className={
              slideAnimate === 2
                ? styles["timeline-slide"]
                : styles["timeline-slide-hidden"]
            }
          >
            <div className={styles["timeline-slide-text"]}>
              <h1>Dags för finslipning.</h1>
              <p>Sedan början av min resa hade jag lärt mig mycket.</p>
              <p>
                Jag hade börjat och pilla med teknologier så som TypeScript och
                Next.js. Jag hade även börjat lära mig mer om React och dess eko
                system. Men jag kände att jag behövde mer.
              </p>
              <p>
                Även om kunskaperna fanns så var det brister i min grund och en
                saknad av kvalitet på mina verk.
              </p>
              <p>
                Så där kom Techover in och hjälpte mig att finslipa dom
                kunskaperna jag hade och lärde mig mer.
              </p>
            </div>
            <div className={styles["timeline-slide-img"]}>
              <Image
                src={"/techover.svg"}
                alt="Bootcampen jag gick"
                width={500}
                height={300}
              ></Image>
              <p>Bootcampen jag gick</p>
            </div>
          </div>
        )}
        {slide === 3 && (
          <div
            className={
              slideAnimate === 3
                ? styles["timeline-slide"]
                : styles["timeline-slide-hidden"]
            }
          >
            <div className={styles["timeline-slide-text"]}>
              <h1>Färdig!</h1>
              <p>
                I december blev jag färdig med min utbildning på Techover och är
                nu redo att ta nästa steg i min karriär. Jag har nu en grund att
                stå på och vet vad jag vill göra.
              </p>
            </div>
            <div className={styles["timeline-slide-img"]}>
              <Image
                src={"/undraw_celebration_re_kc9k.svg"}
                alt="Party!"
                width={500}
                height={300}
              ></Image>
              <p>Party!</p>
            </div>
          </div>
        )}
        {slide === 4 && (
          <div
            className={
              slideAnimate === 4
                ? styles["timeline-slide"]
                : styles["timeline-slide-hidden"]
            }
          >
            <div className={styles["timeline-slide-text"]}>
              <h1>Zendr</h1>
              <p>
                Just nu arbeter jag som fullstack utvecklare på Zendr. Vi är ett
                bolag som bygger en plattform för att hjälpa företag att
                förenkla deras logistik.
              </p>
            </div>
            <div className={styles["timeline-slide-img"]}>
              <Image
                src={"/zendr-logo-hallon.svg"}
                alt="Vem vet vad framtiden håller?"
                width={500}
                height={300}
              ></Image>
              <p>Vi gör frakt enkelt!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Timeline;
