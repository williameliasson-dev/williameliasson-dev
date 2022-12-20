import React, { useState, useEffect } from "react";
import styles from "./SortingAlgo.module.scss";

interface SortingAlgoProps {}

interface stick {
  height: number;
  state: string;
}

const SortingAlgo: React.FC<SortingAlgoProps> = ({}) => {
  const [sticksAmount, setSticksAmount] = useState(10);
  const [sticks, setSticks] = useState<Array<stick>>([]);
  const [sorting, setSorting] = useState(false);

  useEffect(() => {
    const generateSticks = () => {
      let sticks = [];
      for (let i = 0; i < sticksAmount; i++) {
        sticks.push({ height: Math.floor(Math.random() * 100), state: "none" });
      }
      setSticks(sticks);
    };
    generateSticks();
  }, [sticksAmount]);

  async function bubbleSort(
    arr: Array<stick>,
    setArray: React.SetStateAction<Array<stick>>,
    speed: number
  ) {
    const timer = (ms: number) => new Promise((res) => setTimeout(res, ms));
    let newArray = [...arr];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        // Checking if the item at present iteration
        // is greater than the next iteration
        newArray[j].state = "active";
        newArray[j + 1].state = "active";
        if (arr[j].height > arr[j + 1].height) {
          // If the condition is true then swap them
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
    }
    return arr;
  }

  return (
    <div>
      <div className={styles["sorting-algo"]}>
        <div className={styles["sorting-algo-buttons"]}>
          <button onClick={() => bubbleSort(sticks, setSticks, 100)}>
            Bubble Sort
          </button>
          <div>
            <input
              type="range"
              value={sticksAmount}
              onChange={(e) => setSticksAmount(e.target.value)}
            />
            <label>Antal stavar</label>
          </div>
        </div>
        <div className={styles["sorting-algo-sticks"]}>
          {sticks.map((stick, index) => {
            return (
              <div
                key={index}
                className={styles["sorting-algo-stick"]}
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
