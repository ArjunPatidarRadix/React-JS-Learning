import React from "react";
import { IQuestions } from "../App";
import Options from "./Options";

export default function Questions({
  question,
  dispatch,
  answer,
}: {
  question: IQuestions;
  dispatch: any;
  answer: number;
}) {
  console.log("Questions : ", question);
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}
