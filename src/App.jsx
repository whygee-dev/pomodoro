/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from "react";
import styles from "./App.module.scss";
import TimerGUI from "./components/TimerGUI";
import useInterval from "./hooks/useInterval";
import { convertToMS } from "./tools/time";
import Layout from "./components/Layout";
import { useTimerContext } from "./contexts/timers";
import useSound from "use-sound";
import uialert from "./audio/uialert.mp3";

const travailDefaultDuration = convertToMS(25, 0);
const pauseDefaultDuration = convertToMS(5, 0);

function App() {
  const [currentPhase, setCurrentPhase] = useState("Travail");
  const [currentTimer, setCurrentTimer] = useState(travailDefaultDuration);
  const [paused, pause] = useState(true);
  const travailTime = useRef(travailDefaultDuration);
  const pauseTime = useRef(pauseDefaultDuration);
  const timers = useTimerContext();
  const [play] = useSound(uialert);

  useEffect(() => {
    travailTime.current = convertToMS(timers.travailTimer, 0) || travailDefaultDuration;
    pauseTime.current = convertToMS(timers.pauseTimer, 0) || pauseDefaultDuration;

    setTimer();
  }, [timers.travailTimer, timers.pauseTimer, timers]);

  const setTimer = (phase = currentPhase) => {
    if (phase === "Travail") {
      setCurrentTimer(travailTime.current);
    }

    if (phase === "Pause") {
      setCurrentTimer(pauseTime.current);
    }
  };

  useInterval(
    () => {
      setCurrentTimer(currentTimer - 1000);

      if (currentTimer <= 0) {
        if (currentPhase === "Travail") {
          setCurrentPhase("Pause");
          setTimer("Pause");
          play();
        } else {
          setCurrentPhase("Travail");
          setTimer("Travail");
          play();
        }
      }
    },
    currentTimer >= 0 && !paused ? 1000 : null
  );

  const resetTravail = () => {
    setCurrentPhase("Travail");
    pause(true);
    setTimer("Travail");
  };

  const resetPause = () => {
    setCurrentPhase("Pause");
    pause(true);
    setTimer("Pause");
  };

  return (
    <Layout backgroundColor={currentPhase === "Travail" ? "rgb(217, 85, 80)" : "rgb(76, 145, 149)"}>
      <div className={styles.app}>
        <div className={styles.wrapper}>
          <div className={styles.timerSection}>
            <div className={styles.phases}>
              <h2 className={`${styles.phase} ${currentPhase === "Travail" ? styles.active : ""}`} onClick={resetTravail}>
                Travail
              </h2>
              <h2 className={`${styles.phase} ${currentPhase === "Pause" ? styles.active : ""}`} onClick={resetPause}>
                Pause
              </h2>
            </div>

            <TimerGUI timer={currentTimer}></TimerGUI>

            <div className={styles.buttons}>
              <button onClick={() => pause(!paused)}>{paused ? "Démarrer" : "Stop"}</button>
              <button onClick={() => (currentPhase === "Travail" ? resetTravail() : resetPause())}>Reset</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
