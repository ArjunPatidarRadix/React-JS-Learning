import React from "react";
import { IActionType } from "../App";

export default function NextButton({
  dispatch,
  answer,
  numOfQuestions,
  index,
}: {
  dispatch: any;
  answer: number;
  numOfQuestions: number;
  index: number;
}) {
  if (answer === null) return null;

  if (index < numOfQuestions - 1)
    return (
      <div
        className="btn btn-ui"
        onClick={() => dispatch({ type: IActionType.NEXT_QUESTIONS })}
      >
        Next
      </div>
    );

  if (index === numOfQuestions - 1)
    return (
      <div
        className="btn btn-ui"
        onClick={() => dispatch({ type: IActionType.FINISH })}
      >
        Finish
      </div>
    );

  return null;
}
