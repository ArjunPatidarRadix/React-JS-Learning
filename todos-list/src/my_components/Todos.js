import React from "react";
import TodoItem from "./TodoItem";

const Todos = (props) => {
  const myStyle = {
    minHeight: "70vh",
    margin: "10px, 0",
  };
  return (
    <div className="container" style={myStyle}>
      <h3 className=" my-3">Todos List</h3>
      {props.todos.length > 0
        ? props.todos.map((item) => {
            return (
              <>
                <TodoItem
                  key={item.sno}
                  todo={item}
                  onDelete={props.onDelete}
                />
                <hr />
              </>
            );
          })
        : "No todos to display"}
    </div>
  );
};

export default Todos;
