import { getDisplayTime } from "../tools/time";
import styles from "./TimerGUI.module.scss";

const TimerGUI = (props) => {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.timer} ${props.timer > 20000 ? "" : styles.red}`}>{getDisplayTime(props.timer)}</h1>
    </div>
  );
};

export default TimerGUI;
