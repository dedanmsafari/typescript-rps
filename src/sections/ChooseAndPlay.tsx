import HandSelection from "../components/HandSelection";
import styles from "./ChooseAndPlay.module.css";
import Button from "../utils/component/Button.component";

import { useHand } from "../context/options.context";

const ChooseAndPlay = () => {
  const Items = useHand();
  return (
    <>
      <div className={styles.choiceBtnCtn}>
        {Items.map((item) => (
          <HandSelection key={item.name} name={item.name} icon={item.icon} />
        ))}
      </div>
      <Button className={styles.playBtn} name="play" />
    </>
  );
};

export default ChooseAndPlay;
