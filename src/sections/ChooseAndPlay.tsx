import HandSelection from "../components/HandSelection";
import styles from "./ChooseAndPlay.module.css";
import Button from "../utils/component/Button.component";

import { useHand } from "../context/options.context";

const ChooseAndPlay = () => {
  const { options, dispatch } = useHand();

  return (
    <>
      <div className={styles.choiceBtnCtn}>
        {options.map((item) => (
          <HandSelection
            key={item.name}
            name={item.name}
            icon={item.icon}
            onClick={() => {
              dispatch(item.dispatch);
            }}
          />
        ))}
      </div>
      <Button className={styles.playBtn} name="play" />
    </>
  );
};

export default ChooseAndPlay;
