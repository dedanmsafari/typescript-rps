import styles from "./App.module.css";
import ChooseAndPlay from "./sections/ChooseAndPlay";
import ScoreAndResults from "./sections/ScoreAndResults";

function App() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.titleCtn}>
          <h2>ROCK,PAPER,SCISSORS</h2>
          <p>May the Best Hand Win!</p>
        </div>
        <ScoreAndResults />
        <ChooseAndPlay />
      </div>
    </>
  );
}

export default App;
