import styles from "./App.module.css";
import ChooseAndPlay from "./sections/ChooseAndPlay";
import ScoreAndResults from "./sections/ScoreAndResults";
import Box from "./utils/component/Box.component";

function App() {
  return (
    <>
      <Box className={styles.container}>
        <div className={styles.titleCtn}>
          <Box as="h2">ROCK,PAPER,SCISSORS</Box>
          <p>May the Best Hand Win!</p>
        </div>
        <ScoreAndResults />
        <ChooseAndPlay />
      </Box>
    </>
  );
}

export default App;
