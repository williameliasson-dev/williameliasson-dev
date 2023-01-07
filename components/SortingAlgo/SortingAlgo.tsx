import React, { useState, useEffect } from "react";
import styles from "./SortingAlgo.module.scss";
import Link from "next/link";
import ExternalIcon from "../../icons/ExternalIcon";
import GitHub from "../../icons/GitHub";
import ArrowDownCurve from "../../icons/ArrowDownCurve";

interface SortingAlgoProps {}

interface stick {
  height: number;
  state: string;
}

const SortingAlgo: React.FC<SortingAlgoProps> = ({}) => {
  const [sticksAmount, setSticksAmount] = useState(15);
  const [sticks, setSticks] = useState<Array<stick>>([]);
  const [newArray, setNewArray] = useState(false);
  const [sorting, setSorting] = useState(false);

  useEffect(() => {
    const generateSticks = () => {
      let sticks = [];
      for (let i = 0; i < sticksAmount; i++) {
        sticks.push({
          height: Math.floor(Math.random() * 200) + 5,
          state: "none",
        });
      }
      setSticks(sticks);
    };
    generateSticks();
  }, [sticksAmount, newArray]);

  async function bubbleSort(
    arr: Array<stick>,
    setArray: {
      (value: React.SetStateAction<stick[]>): void;
      (arg0: stick[]): void;
    },
    speed: number
  ) {
    const timer = (ms: number) => new Promise((res) => setTimeout(res, ms));
    let newArray = [...arr];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        newArray[j].state = "active";
        newArray[j + 1].state = "active";
        if (arr[j].height > arr[j + 1].height) {
          await timer(speed);
          let temp = arr[j].height;
          newArray[j].height = arr[j + 1].height;
          newArray[j + 1].height = temp;
          newArray[j + 1].state = "none";
          newArray[j].state = "none";
          setArray([...newArray]);
        } else {
          newArray[j + 1].state = "none";
          newArray[j].state = "none";
          setArray([...newArray]);
        }
      }
    }
    for (let x = 0; x < arr.length; x++) {
      arr[x].state = "done";
      setArray([...newArray]);
      await timer(50);
    }
    setSorting(false);
    return arr;
  }

  return (
    <div className={styles["sorting-algo-container"]}>
      <div className={styles["sorting-algo"]}>
        <div className={styles["sorting-algo-info"]}>
          <h1>sorting-algo</h1>
          <p>
            Detta projekt visualiserar olika sorteringsalgorithmer så dem blir
            lättare att förstå för användaren.
          </p>
          <p>
            Användaren kan även själv välja algorithm, hur snabbt det ska gå och
            hur många stapplar som sorteras.
          </p>
          <div className={styles["sorting-algo-links"]}>
            <Link href={"https://sorting-algo-six.vercel.app/"}>
              <ExternalIcon /> Demo
            </Link>
            <Link href={"https://github.com/williameliasson-dev/sorting-algo"}>
              <GitHub />
              GitHub
            </Link>
          </div>
          <div>
            Testa mig! <ArrowDownCurve />
          </div>
        </div>
        <div className={styles["sorting-algo-buttons"]}>
          <button
            disabled={sorting}
            onClick={() => {
              setSorting(true);
              bubbleSort(sticks, setSticks, 100);
            }}
          >
            Sort with Bubble sort
          </button>
          <button onClick={() => setNewArray(!newArray)} disabled={sorting}>
            Generate new array
          </button>
          <div className={styles["sorting-algo-range"]}>
            <label>Antal stavar</label>
            <input
              className={styles["sorting-algo-range"]}
              disabled={sorting}
              min="5"
              max="20"
              type="range"
              value={sticksAmount}
              onChange={(e) => setSticksAmount(parseInt(e.target.value))}
            />
          </div>
        </div>
        <div className={styles["sorting-algo-sticks"]}>
          {sticks.map((stick, index) => {
            return (
              <div
                key={index}
                className={styles[`sorting-algo-stick-${stick.state}`]}
                style={{ height: `${stick.height}px` }}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SortingAlgo;
