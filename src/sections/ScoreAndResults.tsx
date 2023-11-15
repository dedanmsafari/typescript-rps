import styles from "./ScoreAndResults.module.css";
import { useHand } from "../context/options.context";
import { useState, useEffect } from "react";
import { RunTimerOption } from "../actions/OptionActions";

const ScoreAndResults = () => {
  const [timer, setTimer] = useState<number>(3);
  const { dispatch, state } = useHand();
  const { runTimer } = state;

  useEffect(() => {
    if (runTimer) {
      const TimeInterval = setInterval(() => {
        setTimer((prev) => {
          if (prev === 1) {
            clearInterval(TimeInterval);
          }
          return prev - 1;
        });
      }, 1000);
    }
  }, [runTimer]);

  useEffect(() => {
    if (timer === 0) {
      setTimer(3);
      dispatch(RunTimerOption);
    }
  }, [timer, dispatch]);

  return (
    <>
      <div className={styles.scoreCtn}>
        <div className={styles.score}>
          <h3>Score</h3>
          <p>Player:</p>
        </div>
        <div className={styles.score}>
          <h3>Score</h3>
          <p>Computer:</p>
        </div>
      </div>
      <div className={styles.results}>
        <div className={styles.playerHand}></div>
        <div className={styles.midCol}>
          <p data-testid="timer" className={styles.timer}>
            {runTimer && timer}
          </p>
        </div>
        <div className={styles.computerHand}></div>
      </div>
    </>
  );
};

export default ScoreAndResults;
