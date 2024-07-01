import React from "react";

export default function Progress({
  index,
  numOfQuestions,
  points,
  maxPossiblePoints,
  answer,
}: {
  index: number;
  numOfQuestions: number;
  points: number;
  maxPossiblePoints: number;
  answer: number;
}) {
  return (
    <header className="progress">
      <progress max={numOfQuestions} value={index + Number(answer !== null)} />
      <p>
        Questions <strong>{index + 1}</strong> / {numOfQuestions}
      </p>
      <p>
        <strong>
          {points} / {maxPossiblePoints}
        </strong>
      </p>
    </header>
  );
}
