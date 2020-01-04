import React from "react";
import "./Todo.css";

const Todo = props => {
  return (
    <li
      onClick={event => {
        props.strikeThrough(event, props.index);
      }}
    >
      {props.toDoItem}
    </li>
  );
};

export default Todo;
