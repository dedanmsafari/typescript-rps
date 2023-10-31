import React from "react";

import styles from "./HandSelection.module.css";
import Button from "../utils/component/Button.component";

type HandProps = {
  name: string;
  icon: React.JSX.Element;
  onClick: () => void;
};
//console.log("I am HAND SELECTION");
const HandSelection = ({ name, icon, onClick }: HandProps) => {
  return (
    <Button
      name={name}
      icon={icon}
      className={styles.choiceBtn}
      onClick={onClick}
    />
  );
};

export default HandSelection;
