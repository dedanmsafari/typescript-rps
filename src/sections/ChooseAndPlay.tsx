import HandSelection from "../components/HandSelection";
import styles from "./ChooseAndPlay.module.css";
import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";
const ChooseAndPlay = () => {
  return (
    <>
      <div className={styles.choiceBtnCtn}>
        <HandSelection
          name="Rock"
          icon={<FaHandRock size="3em" color="grey" />}
        />
        <HandSelection
          name="Paper"
          icon={<FaHandPaper size="3em" color="brown" />}
        />
        <HandSelection
          name="Scissors"
          icon={<FaHandScissors size="3em" color="orange" />}
        />
      </div>
      <button className={styles.playBtn}>play</button>
    </>
  );
};

export default ChooseAndPlay;
