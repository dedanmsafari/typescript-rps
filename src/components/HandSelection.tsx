import React from "react";

import styles from "./HandSelection.module.css";
import Button from "../utils/component/Button.component";
import { useHand } from "../context/options.context";
import { Options } from "../models/Options";

type HandProps = {
  name: string;
  icon: React.JSX.Element;
  index: number;
  item: Options;
};

const HandSelection = ({ name, icon, index, item }: HandProps) => {
  const { state, dispatch, active, setActive } = useHand();

  const handleClick = () => {
    dispatch(item.dispatch);

    setActive(true);
  };

  return (
    <Button
      name={name}
      icon={icon}
      className={`${styles.choiceBtn} ${
        active && index === state.playerHand ? styles.activeChoice : ""
      }`}
      onClick={() => handleClick()}
    />
  );
};

export default HandSelection;
