import React, { useState } from "react";
// import TodoItem from "./../TodoItem";
import "./style.css";

const Todo = () => {
  const [todo, setTodo] = useState([
    { id: 1, name: "sleep" },
    { id: 2, name: "rest" },
  ]);

  const [inputValue, setInputValue] = useState("");
  const addTask = () => {
    const newTask = { id: todo.length + 1, name: inputValue };
    setTodo([...todo, newTask]);
  };

  const deleteTask = (id) => {
    setTodo(todo.filter((todo) => todo.id !== id));
  };
  {
    /*delete didnt work */
  }

  return (
    <div className="todo">
      <input
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button onClick={addTask}>Add</button>
      <div className="todoDiv">
        <ul>
          {todo.map((item, i) => {
            return (
              <li className="todoList" key={i}>
                <h3 className="task"> • {item.name}</h3>
                <h3 className="close" onClick={deleteTask}>
                  {" "}
                  {/*delete didnt work */}X
                </h3>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
