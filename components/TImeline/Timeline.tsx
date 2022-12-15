"use client";
import React, { useState } from "react";
import styles from "./Timeline.module.scss";
import Image from "next/image";

interface TimelineProps {}

const Timeline: React.FC<TimelineProps> = ({}) => {
  const [slide, setSlide] = useState(0);

  return (
    <div className={styles.timeline}>
      <h1>Min resa</h1>
      <div className={styles["timeline-buttons"]}>
        <button
          className={styles["timeline-button"]}
          onClick={() => setSlide(0)}
        >
          2020-november
        </button>
        <button
          className={styles["timeline-button"]}
          onClick={() => setSlide(1)}
        >
          2021-mars
        </button>
        <button
          className={styles["timeline-button"]}
          onClick={() => setSlide(2)}
        >
          2022-augusti
        </button>
        <button
          className={styles["timeline-button"]}
          onClick={() => setSlide(3)}
        >
          2022-december
        </button>
        <button
          className={styles["timeline-button"]}
          onClick={() => setSlide(4)}
        >
          2023..
        </button>
        <div
          className={styles["timeline-middle"]}
          onClick={() => setSlide(5)}
        ></div>
      </div>
      <div
        className={
          slide === 0
            ? styles["timeline-slide"]
            : styles["timeline-slide-hidden"]
        }
      >
        <div className={styles["timeline-slide-text"]}>
          <h1>Första raderna kod.</h1>
          <p>
            I november 2020 så började jag lära mig programmering. Jag började
            med att lära mig Lua pågrund av att jag byggde en FiveM server.
            Vilket är ett spel som är en moddad version av GTA V.
            <br />
            Grundtanken var att jag och några vänner ville bygga nåt coolt, men
            ingen kunde programmera. Så jag offrade mig och började lära mig
            Lua.
          </p>
          <p>
            Sen därifrån har mitt intresse för programmering bara blivit större.
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

      <div
        className={
          slide === 1
            ? styles["timeline-slide"]
            : styles["timeline-slide-hidden"]
        }
      >
        <div className={styles["timeline-slide-text"]}>
          <h1>Min första commit</h1>
          <p>
            I mars under 2021 så commitade jag min första bit av kod till GitHub
          </p>
          <p>
            Det var en enkel hemsida byggt i Flask ett Python webb framework.
            <br />
            Jag hade byggt den för att lära mig Flask och för att lära mig mer
            om webb development.
          </p>
          <p>
            Rätt så snabbt så började jag lära mig mer om webb development och
            insåg att det finns bättre sätt att bygga webbplatser.
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

      <div
        className={
          slide === 2
            ? styles["timeline-slide"]
            : styles["timeline-slide-hidden"]
        }
      >
        <div className={styles["timeline-slide-text"]}>
          <h1>Dags för finslipning.</h1>
          <p>Sen början av min resa hade jag lärt mig mycket.</p>
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
            Så där kom Techover in och hjälpte mig att finslipa dom kunskaperna
            jag hade och lärde mig mer.
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
      <div
        className={
          slide === 3
            ? styles["timeline-slide"]
            : styles["timeline-slide-hidden"]
        }
      >
        <div className={styles["timeline-slide-text"]}>
          <h1>Färdig!</h1>
          <p>
            I december blev jag färdig med min utbildning på Techover och är nu
            redo att ta nästa steg i min karriär. Jag har nu en grund att stå på
            och vet vad jag vill göra.
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
      <div
        className={
          slide === 4
            ? styles["timeline-slide"]
            : styles["timeline-slide-hidden"]
        }
      >
        <div className={styles["timeline-slide-text"]}>
          <h1>Framtiden..</h1>
          <p>
            Just nu så söker jag heltids jobb som webb utvecklare. Jag har en
            stor vilja att lära mig mer och vill bli bättre. Men vem vet kanske
            är det just ditt företag som jag skriver om härnäst...
          </p>
        </div>
        <div
          className={styles["timeline-slide-img"]}
          alt="Vem vet vad framtiden håller?"
        >
          <Image
            src={"/undraw_hologram_re_7ppw.svg"}
            alt="Party!"
            width={500}
            height={300}
          ></Image>
          <p>Vem vet vad framtiden håller?</p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
