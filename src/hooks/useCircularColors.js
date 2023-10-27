import { useState, useEffect } from "react";
import { CIRCULAR_COLORS } from "@/constants";

export function useCircularColors() {
  const initialTime = 0;
  const [timeElapsed, setTimeElapsed] = useState(initialTime);
  const [timerIsRunning, setTimerIsRunning] = useState(false);

  function getSelectedColor(timeElapsed) {
    const colorIndex = timeElapsed % CIRCULAR_COLORS.length;

    return CIRCULAR_COLORS[colorIndex];
  }

  function handleTogglePlaying() {
    setTimerIsRunning((currentState) => !currentState);
  }

  function handleTimeChange() {
    setTimeElapsed((currentTime) => currentTime + 1);
  }

  function handleReset() {
    setTimerIsRunning(false);
    setTimeElapsed(() => initialTime);
  }

  useEffect(() => {
    let intervalId = null;
    if (timerIsRunning) {
      intervalId = setInterval(() => handleTimeChange(), 10);

      return () => clearInterval(intervalId);
    }
  }, [timerIsRunning]);

  const timeElapsedInSeconds = Math.floor((timeElapsed % 6000) / 100);

  const selectedColor = getSelectedColor(timeElapsedInSeconds);

  return {
    selectedColor,
    timerIsRunning,
    timeElapsedInSeconds,
    handleTogglePlaying,
    handleReset,
  };
}
