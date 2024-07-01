import React, { useEffect } from "react";
import { IActionType } from "../App";

export default function Timer({
  dispatch,
  secondsRemaining,
}: {
  dispatch: any;
  secondsRemaining: number;
}) {
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: IActionType.TICK });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch]);
  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}
