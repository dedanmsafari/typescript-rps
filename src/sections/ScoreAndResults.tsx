import styles from "./ScoreAndResults.module.css";
import { useHand } from "../context/options.context";
import { useState, useEffect } from "react";
import { RunTimerOption } from "../actions/OptionActions";
import checkWinner from "../utils/functions/checkWinner";

const ScoreAndResults = () => {
  const [timer, setTimer] = useState<number>(3);
  const { dispatch, state, options } = useHand();
  const {
    runTimer,
    playerHand,
    computerHand,
    results: { message, winner },
    score: { player, computer },
  } = state;

  const playerHandIcon = options[playerHand].icon;
  const playerHandName = options[playerHand].name;

  const computerHandIcon = options[computerHand].icon;
  const computerHandName = options[computerHand].name;

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
      checkWinner(dispatch, playerHandName, computerHandName);
    }
  }, [timer, dispatch, playerHandName, computerHandName]);

  return (
    <>
      <div className={styles.scoreCtn}>
        <div className={styles.score}>
          <h3>Score</h3>
          <p>Player: {player}</p>
        </div>
        <div className={styles.score}>
          <h3>Score</h3>
          <p>Computer: {computer}</p>
        </div>
      </div>
      <div className={styles.results}>
        <div className={styles.playerHand}>
          {!runTimer && winner && playerHandIcon}
          <br />
          {!runTimer && winner && playerHandName}
        </div>
        <div className={styles.midCol}>
          <p data-testid="timer" className={styles.timer}>
            {runTimer && timer}
          </p>
          <p className={styles.resultWinner}>{!runTimer && winner}</p>
          <p className={styles.resultMessage}>{!runTimer && message}</p>
        </div>
        <div className={styles.computerHand}>
          {!runTimer && winner && computerHandIcon}
          <br />
          {!runTimer && winner && computerHandName}
        </div>
      </div>
    </>
  );
};

export default ScoreAndResults;
