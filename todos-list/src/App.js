import "./App.css";
import Header from "./my_components/Header";
import Todos from "./my_components/Todos";
import Footer from "./my_components/Footer";
import { useState } from "react";
import AddTodo from "./my_components/AddTodo";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./my_components/About";

function App() {
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to market",
      desc: "You need to go to market to done this job.",
    },
    {
      sno: 2,
      title: "Go to mall",
      desc: "You need to go to mall to done this job.",
    },
    {
      sno: 3,
      title: "Go to ghat",
      desc: "You need to go to ghat to done this job.",
    },
  ]);

  const onDelete = (todo) => {
    console.log("onDelete called :: ", todo);
    setTodos(
      todos.filter((item) => {
        return item !== todo;
      })
    );
  };

  const addTodo = (title, desc) => {
    console.log("addTodo called :: ", title, desc);
    let sno = todos.length + 1;
    const myTodo = {
      sno,
      title,
      desc,
    };

    setTodos([...todos, myTodo]);
  };
  return (
    <>
      <Router>
        <Header title="ToDo List" searchBar={true} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            }
          ></Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
