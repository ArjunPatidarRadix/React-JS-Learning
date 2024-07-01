import { useReducer, useState } from "react";

const initialState = { count: 0, step: 1 };

enum CountActionKind {
  INCREASE = "inc",
  DECREASE = "dec",
  SET_COUNT = "setCount",
  SET_STEP = "setStep",
  RESET = "reset",
}

// An interface for our actions
interface ICountAction {
  type: CountActionKind;
  payload: number;
}

interface ICountState {
  count: number;
  step: number;
}

function reducer(state: ICountState, action: ICountAction) {
  console.log(state, action);

  switch (action.type) {
    case CountActionKind.DECREASE:
      return { ...state, count: state.count - state.step };
    case CountActionKind.INCREASE:
      return { ...state, count: state.count + state.step };
    case CountActionKind.SET_COUNT:
      return { ...state, count: action.payload };
    case CountActionKind.SET_STEP:
      return { ...state, step: action.payload };
    case CountActionKind.RESET:
      return initialState;
    default:
      return state;
  }
}

function DateCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { count, step } = state;

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
    dispatch({ type: CountActionKind.DECREASE, payload: 1 });
  };

  const inc = function () {
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
    dispatch({ type: CountActionKind.INCREASE, payload: 1 });
  };

  const defineCount = function (e: React.ChangeEvent<HTMLInputElement>) {
    // setCount(Number(e.target.value));
    dispatch({
      type: CountActionKind.SET_COUNT,
      payload: Number(e.target.value),
    });
  };

  const defineStep = function (e: React.ChangeEvent<HTMLInputElement>) {
    // setStep(Number(e.target.value));
    dispatch({
      type: CountActionKind.SET_STEP,
      payload: Number(e.target.value),
    });
  };

  const reset = function () {
    // setCount(0);
    // setStep(1);
    dispatch({
      type: CountActionKind.RESET,
      payload: 1,
    });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
