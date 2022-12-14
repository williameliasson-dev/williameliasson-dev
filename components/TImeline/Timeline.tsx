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
              <h1>F??rsta raderna kod.</h1>
              <p>
                I november 2020 s?? b??rjade jag l??ra mig programmering. Jag
                b??rjade med att l??ra mig Lua p??grund av att jag byggde en FiveM
                server. Vilket ??r ett spel som ??r en moddad version av GTA V.
                <br />
                Grundtanken var att jag och n??gra v??nner ville bygga n??t coolt,
                men ingen kunde programmera. S?? jag offrade mig och b??rjade l??ra
                mig Lua.
              </p>
              <p>
                Sen d??rifr??n har mitt intresse f??r programmering bara blivit
                st??rre.
              </p>
            </div>
            <div className={styles["timeline-slide-img"]}>
              <Image
                src={"/Lua-Logo.svg"}
                alt="Mitt f??rsta programmerings-spr??k"
                width={500}
                height={300}
              ></Image>
              <p>Mitt f??rsta programmerings-spr??k</p>
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
              <h1>Min f??rsta commit</h1>
              <p>
                I mars under 2021 s?? commitade jag min f??rsta bit av kod till
                GitHub
              </p>
              <p>
                Det var en enkel hemsida byggt i Flask ett Python webb
                framework.
                <br />
                Jag hade byggt den f??r att l??ra mig Flask och f??r att l??ra mig
                mer om webb development.
              </p>
              <p>
                R??tt s?? snabbt s?? b??rjade jag l??ra mig mer om webb development
                och ins??g att det finns b??ttre s??tt att bygga webbplatser.
              </p>
              <p>Efter det s?? hittade jag min f??rsta k??rlek, React.</p>
            </div>
            <div className={styles["timeline-slide-img"]}>
              <Image
                src={"/profile-first-repo-dark.svg"}
                alt="first repo"
                width={500}
                height={300}
              ></Image>
              <p>Mitt f??rsta repo</p>
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
              <h1>Dags f??r finslipning.</h1>
              <p>Sedan b??rjan av min resa hade jag l??rt mig mycket.</p>
              <p>
                Jag hade b??rjat och pilla med teknologier s?? som TypeScript och
                Next.js. Jag hade ??ven b??rjat l??ra mig mer om React och dess eko
                system. Men jag k??nde att jag beh??vde mer.
              </p>
              <p>
                ??ven om kunskaperna fanns s?? var det brister i min grund och en
                saknad av kvalitet p?? mina verk.
              </p>
              <p>
                S?? d??r kom Techover in och hj??lpte mig att finslipa dom
                kunskaperna jag hade och l??rde mig mer.
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
              <h1>F??rdig!</h1>
              <p>
                I december blev jag f??rdig med min utbildning p?? Techover och ??r
                nu redo att ta n??sta steg i min karri??r. Jag har nu en grund att
                st?? p?? och vet vad jag vill g??ra.
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
              <h1>Framtiden..</h1>
              <p>
                Just nu s?? s??ker jag heltids jobb som webbutvecklare. Jag har en
                stor vilja att l??ra mig mer och vill bli b??ttre. Men vem vet
                kanske ??r det just ditt f??retag som jag skriver om h??rn??st...
              </p>
            </div>
            <div className={styles["timeline-slide-img"]}>
              <Image
                src={"/undraw_hologram_re_7ppw.svg"}
                alt="Vem vet vad framtiden h??ller?"
                width={500}
                height={300}
              ></Image>
              <p>Vem vet vad framtiden h??ller?</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Timeline;
