import styles from "./ScoreAndResults.module.css";

const ScoreAndResults = () => {
  // console.log("I am SCORE AND RESULTS");
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
        <div className={styles.midCol}></div>
        <div className={styles.computerHand}></div>
      </div>
    </>
  );
};

export default ScoreAndResults;
