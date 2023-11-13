import HandSelection from "../components/HandSelection";
import styles from "./ChooseAndPlay.module.css";
import Button from "../utils/component/Button.component";

import { useHand } from "../context/options.context";

const ChooseAndPlay = () => {
  const { options, setActive } = useHand();

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
        onClick={() => setActive(false)}
      />
    </>
  );
};

export default ChooseAndPlay;
