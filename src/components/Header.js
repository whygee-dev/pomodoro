import React, { useState } from "react";
import { useTimerContext } from "../contexts/timers";
import styles from "./Header.module.scss";
import Modal from "./Modal";

const Header = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const timersContext = useTimerContext();

  const saveTravailTime = (value) => {
    timersContext.setTravailTimer(value);
  };

  const savePauseTime = (value) => {
    timersContext.setPauseTimer(value);
  };

  return (
    <header style={{ backgroundColor: props.backgroundColor }} className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Pomodoro</h1>
        <button onClick={() => setModalOpen(true)}>Paramètres</button>
      </div>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Paramètres">
        <div className={styles.settings}>
          <h3>Minuterie</h3>

          <div className={styles.inputs}>
            <div className={styles.group}>
              <label htmlFor="travailTime">Travail</label>
              <input value={timersContext.travailTimer} name="travailTime" type="number" min={0} onChange={(e) => saveTravailTime(e.target.value)} />
            </div>

            <div className={styles.group}>
              <label htmlFor="pauseTime">Pause</label>
              <input value={timersContext.pauseTimer} name="pauseTime" type="number" min={0} onChange={(e) => savePauseTime(e.target.value)} />
            </div>
          </div>
        </div>
      </Modal>
    </header>
  );
};

export default Header;
