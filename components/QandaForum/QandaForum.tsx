import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import VoteTriangle from "../../icons/VoteTriangle";
import styles from "./QandaForum.module.scss";

interface QandaForumProps {}

const QandaForum: React.FC<QandaForumProps> = ({}) => {
  const [vote, setVote] = useState(0);

  const upvote = () => {
    if (vote !== 1) {
      setVote(1);
    }
  };
  const downvote = () => {
    if (vote !== -1) {
      setVote(-1);
    }
  };

  return (
    <div className={styles["qanda"]}>
      <h1>q-and-a-forum</h1>
      <p>stackoverflow klon med fokus på frågesektionen</p>
      <div className={styles["qanda-post"]}>
        <div className={styles.question}>
          <div className={styles["question-top"]}>
            <h1>Info om q-and-a-forum</h1>
            <div className={styles["question-tags"]}>
              <span>
                <Link href={"https://sass-lang.com/"}>
                  <p>scss</p>
                </Link>
              </span>
              <span>
                <Link href={"https://nextjs.org/"}>
                  <p>next.js</p>
                </Link>
              </span>
              <span>
                <Link href={"https://next-auth.js.org/"}>
                  <p>next-auth</p>
                </Link>
              </span>
              <span>
                <Link href={"https://www.mongodb.com/"}>
                  <p>mongodb</p>
                </Link>
              </span>
              <span>
                <Link href={"https://mongoosejs.com/"}>
                  <p>mongoose</p>
                </Link>
              </span>
            </div>
            <p className={styles["question-asked"]}>Asked 3 weeks ago</p>
          </div>
          <div className={styles["question-info"]}>
            <div className={styles["question-content"]}>
              <div className={styles.voting}>
                <button
                  onClick={() => {
                    upvote();
                  }}
                >
                  <VoteTriangle active={vote === 1 || false} />
                </button>
                <p>{2 + vote}</p>
                <button
                  onClick={() => {
                    downvote();
                  }}
                >
                  <VoteTriangle active={vote === -1 || false} />
                </button>
              </div>
              <p>Hej</p>
            </div>
            <div className={styles["question-meta"]}>
              <span className={styles["question-meta-info"]}>
                <p>asked 3 weeks ago</p>
                <div className={styles["question-user"]}>
                  <Image
                    alt="user"
                    width={40}
                    height={40}
                    src="/39637161.jpg"
                  ></Image>
                  <div>
                    <p>William Eliasson</p>
                    <p className={styles["points"]}>
                      120
                      {"  "}
                      <svg height="10" width="10">
                        <circle
                          cx="5"
                          cy="5"
                          r="4"
                          strokeWidth="23"
                          fill="hsl(67, 95%, 63%)"
                        />
                      </svg>
                      85
                    </p>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QandaForum;
