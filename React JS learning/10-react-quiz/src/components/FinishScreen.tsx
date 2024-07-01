import React from "react";
import { IActionType } from "../App";

export default function FinishScreen({
  points,
  maxPossiblePoints,
  highscore,
  dispatch,
}: {
  points: number;
  maxPossiblePoints: number;
  highscore: number;
  dispatch: any;
}) {
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🙃";
  if (percentage >= 0 && percentage < 50) emoji = "🤨";
  if (percentage === 0) emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        <span>{emoji}</span>You scored{" "}
        <strong>
          {points} out of {maxPossiblePoints} ({Math.ceil(percentage)}%)
        </strong>
      </p>
      <p className="highscore">(highscore: {highscore} Points)</p>
      <div
        className="btn btn-ui"
        onClick={() => dispatch({ type: IActionType.RESTART })}
      >
        Restart Quiz
      </div>
    </>
  );
}
