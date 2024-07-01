import React, { useEffect, useState } from "react";
import "./style.css";

//get data from local storage back

const getLocalData = () => {
  const list = localStorage.getItem("myTodoList");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(getLocalData());
  const [isEditItem, setEditItem] = useState("");
  const [toggleButton, setToggleButton] = useState(false);

  const addItem = () => {
    if (inputData && !toggleButton) {
      const myNewInoutData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItems([...items, myNewInoutData]);
      setInputData("");
    } else if (inputData && toggleButton) {
      setItems(
        items.map((item) => {
          if (item.id === isEditItem) {
            return { ...item, name: inputData };
          }
          return item;
        })
      );
      setInputData("");
      setEditItem(null);
      setToggleButton(false);
    } else {
      alert("Please enter item to add");
    }
  };

  const handleRemoveItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const handleRemoveAll = () => {
    setItems([]);
  };

  const handleEditItem = (id) => {
    const item_todo = items.find((item) => item.id === id);
    setInputData(item_todo.name);
    setEditItem(id);
    setToggleButton(true);
  };

  //getting local storage
  useEffect(() => {
    localStorage.setItem("myTodoList", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/todo.svg" alt="todoLogo" />
            <figcaption>Add your list here ✌️ </figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              className="form-control"
              placeholder="✍️ Add Item"
              value={inputData}
              onChange={(event) => {
                setInputData(event.target.value);
              }}
            />
            {toggleButton ? (
              <i onClick={addItem} className="far fa-edit add-btn"></i>
            ) : (
              <i onClick={addItem} className="fa fa-plus add-btn"></i>
            )}
          </div>
          <div className="showItems">
            {items.map((item, index) => {
              return (
                <div className="eachItem" key={items.id}>
                  <h3>{item.name}</h3>
                  <div className="todo-btn">
                    <i
                      onClick={() => handleEditItem(item.id, item.name)}
                      className="far fa-edit add-btn"
                    ></i>
                    <i
                      onClick={() => handleRemoveItem(item.id)}
                      className="far fa-trash-alt add-btn"
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="showItems">
            <button
              className="btn effect04"
              onClick={handleRemoveAll}
              data-sm-link-text="Remove All"
            >
              <span>Check List</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
