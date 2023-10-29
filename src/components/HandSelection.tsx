import styles from "./HandSelection.module.css";

type HandProps = {
  name: string;
  icon: JSX.Element;
};

const HandSelection = ({ name, icon }: HandProps) => {
  return (
    <button className={styles.choiceBtn}>
      {name} {icon}
    </button>
  );
};

export default HandSelection;
