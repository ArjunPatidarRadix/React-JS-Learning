import React, { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Questions from "./components/Questions";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import FinishScreen from "./components/FinishScreen";
import Footer from "./components/Footer";
import Timer from "./components/Timer";

const SEC_PER_QUESTION = 30;

export interface IQuestions {
  question: string;
  options: string[];
  correctOption: number;
  points: number;
}
enum IStatusType {
  LOADING = "loading",
  ERROR = "error",
  READY = "ready",
  ACTIVE = "active",
  FINISHED = "finished",
}

export enum IActionType {
  DATA_RECEIVED = "dataReceived",
  DATA_FAILED = "dataFailed",
  START = "start",
  NEW_ANSWER = "newAnswer",
  NEXT_QUESTIONS = "nextQuestions",
  FINISH = "finish",
  RESTART = "Restart",
  TICK = "Tick",
}

// An interface for our actions
interface IActions {
  type: IActionType;
  payload: any;
}

const initialState = {
  questions: [],
  status: IStatusType.LOADING,
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: 0,
};

interface IState {
  questions: IQuestions[];
  status: string;
  index: number;
  answer: number;
  points: number;
  highscore: number;
  secondsRemaining: number;
}

function reducer(state: IState, action: IActions) {
  switch (action.type) {
    case IActionType.DATA_RECEIVED:
      return {
        ...state,
        questions: action.payload as IQuestions[],
        status: IStatusType.READY,
      };
    case IActionType.DATA_FAILED:
      return {
        ...state,
        status: IStatusType.ERROR,
      };

    case IActionType.START:
      return {
        ...state,
        status: IStatusType.ACTIVE,
        secondsRemaining: state.questions.length * SEC_PER_QUESTION,
      };

    case IActionType.NEW_ANSWER:
      const question = state.questions.at(state.index);

      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question?.correctOption
            ? state.points +
              (question && question?.points ? question?.points : 0)
            : state.points,
      };

    case IActionType.NEXT_QUESTIONS:
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };

    case IActionType.FINISH:
      return {
        ...state,
        status: IStatusType.FINISHED,
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };

    case IActionType.RESTART:
      return {
        ...initialState,
        status: IStatusType.READY,
        questions: state.questions,
      };

    case IActionType.TICK:
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status:
          state.secondsRemaining === 0 ? IStatusType.FINISHED : state.status,
      };

    default:
      return state;
  }
}

function App() {
  const [
    { questions, status, index, answer, points, highscore, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );

  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: IActionType.DATA_RECEIVED, payload: data })
      )
      .catch((error) =>
        dispatch({ type: IActionType.DATA_FAILED, payload: [] })
      );
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        <>
          {status === IStatusType.LOADING && <Loader />}
          {status === IStatusType.ERROR && <Error />}
          {status === IStatusType.READY && (
            <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
          )}
          {status === IStatusType.ACTIVE && (
            <>
              <Progress
                index={index}
                numOfQuestions={numQuestions}
                points={points}
                maxPossiblePoints={maxPossiblePoints}
                answer={answer}
              />
              <Questions
                question={questions[index]}
                dispatch={dispatch}
                answer={answer}
              />
              <Footer>
                <>
                  <Timer
                    dispatch={dispatch}
                    secondsRemaining={secondsRemaining}
                  />
                  <NextButton
                    dispatch={dispatch}
                    answer={answer}
                    index={index}
                    numOfQuestions={numQuestions}
                  />
                </>
              </Footer>
            </>
          )}
          {status === IStatusType.FINISHED && (
            <FinishScreen
              points={points}
              maxPossiblePoints={maxPossiblePoints}
              highscore={highscore}
              dispatch={dispatch}
            />
          )}
        </>
      </Main>
    </div>
  );
}

export default App;
