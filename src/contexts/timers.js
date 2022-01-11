import { createContext, useContext, useState } from "react";

const travailDefaultDuration = 25;
const pauseDefaultDuration = 5;
const Timers = createContext();

export const useTimerContext = () => {
  const value = useContext(Timers);

  return value;
};

export const TimersProvider = (props) => {
  const [travailTimer, setTravailTimer] = useState(travailDefaultDuration);
  const [pauseTimer, setPauseTimer] = useState(pauseDefaultDuration);

  return <Timers.Provider value={{ travailTimer, pauseTimer, setPauseTimer, setTravailTimer }}>{props.children}</Timers.Provider>;
};
