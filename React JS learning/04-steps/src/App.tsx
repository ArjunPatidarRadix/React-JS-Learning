import React, { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);

  function handlePrevious() {
    step > 1 && setStep((prev) => prev - 1);
  }

  function handleNext() {
    step < 3 && setStep((prev) => prev + 1);
  }
  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 && "active"}`}>1</div>
        <div className={`${step >= 2 && "active"}`}>2</div>
        <div className={`${step >= 3 && "active"}`}>3</div>
      </div>
      <p className="message">
        Step: {step}: {messages[step - 1]}
      </p>
      <div className="buttons">
        <button
          style={{ backgroundColor: "#7952f2", color: "white" }}
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7952f2", color: "white" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
