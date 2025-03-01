import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./Components/StarRating";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

function Test() {
  const [movieRating, setMoviewRating] = useState(0);
  return (
    <div>
      <StarRating
        color="blue"
        maxRating={10}
        onRatingChange={setMoviewRating}
      />
      <p>This movie is rated {movieRating} stars</p>
    </div>
  );
}

root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating maxRating={10} size={24} color="red" defaultRating={4} /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
