import React from "react";
import { IActionType, IQuestions } from "../App";

export default function Options({
  question,
  dispatch,
  answer,
}: {
  question: IQuestions;
  dispatch: any;
  answer: number;
}) {
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          key={option}
          className={`btn btn-option ${index === answer && "answer"} ${
            answer !== null
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          disabled={answer !== null}
          onClick={() =>
            dispatch({ type: IActionType.NEW_ANSWER, payload: index })
          }
        >
          {option}
        </button>
      ))}
    </div>
  );
}
