import HandSelection from "../components/HandSelection";
import styles from "./ChooseAndPlay.module.css";
import Button from "../utils/component/Button.component";
import { useHand } from "../context/options.context";
import { ComputerOption } from "../actions/OptionActions";

const ChooseAndPlay = () => {
  const { options, setActive, dispatch, state } = useHand();
  const { runTimer } = state;
  const Play = () => {
    setActive(false);
    dispatch(ComputerOption);
  };

  return (
    <>
      <div className={styles.choiceBtnCtn}>
        {options.map((item, i) => (
          <HandSelection
            key={item.name}
            name={item.name}
            icon={item.icon}
            item={item}
            index={i}
          />
        ))}
      </div>
      <Button
        className={styles.playBtn}
        name="play"
        disabled={runTimer}
        onClick={Play}
      />
    </>
  );
};

export default ChooseAndPlay;
