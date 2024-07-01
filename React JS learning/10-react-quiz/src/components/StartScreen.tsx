import React from "react";
import { IActionType } from "../App";

interface IStartScreenProps {
  numQuestions: number;
  dispatch: any;
}

export default function StartScreen({
  numQuestions,
  dispatch,
}: IStartScreenProps) {
  return (
    <div className="start">
      <h2>Welcome to the react Quiz!</h2>
      <h3>{numQuestions} Quesion to test your React mastery</h3>
      <button
        onClick={() => dispatch({ type: IActionType.START, payload: [] })}
        className="btn btn-ui"
      >
        Let's start
      </button>
    </div>
  );
}
