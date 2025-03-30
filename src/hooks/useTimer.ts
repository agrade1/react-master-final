import { useEffect } from 'react';
import { useAtom } from 'jotai';
import {
    secondsLeftAtom,
    defaultTimeAtom,
  isRunningAtom,
  roundCountAtom,
  goalCountAtom
} from '../atoms/timerAtoms';

export const useTimer = () => {
  const [secondsLeft, setSecondsLeft] = useAtom(secondsLeftAtom);
  const [defaultTime] = useAtom(defaultTimeAtom)
  const [isRunning, setIsRunning] = useAtom(isRunningAtom);
  const [roundCount, setRoundCount] = useAtom(roundCountAtom);
  const [goalCount, setGoalCount] = useAtom(goalCountAtom);


  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev > 1) return prev - 1;

        clearInterval(interval);
        setIsRunning(false);

        setRoundCount((prevRounds) => {
          const newRounds = prevRounds + 1;

          if (newRounds >= 4) {
            setGoalCount((g) => g + 1);
            return 0;
          }

          return newRounds;
        });

        return secondsLeft;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const toggle = () => setIsRunning((prev) => !prev);
  const reset = () => setSecondsLeft(defaultTime);
  const pause = () => setIsRunning(false);

  return {
    secondsLeft,
    defaultTime,
    isRunning,
    toggle,
    reset,
    pause,
    roundCount,
    goalCount,
  };
};
