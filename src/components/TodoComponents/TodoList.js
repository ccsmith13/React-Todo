import React from "react";
import Todo from "./Todo";
import styled from "styled-components";

const EmptyList = styled.p`
  font-style: italic;
  font-size: 1.5rem;
  color: #444149;
`;
const TodoItemContainer = styled.ul`
  background-color: #e5989b;
  border-radius: 5px;
  color: white;
  font-size: 1.5rem;
  margin: 1%;
  padding: 1%;
  text-align: left;
`;

const TodoList = props => {
  if (props.todoItemList.length > 0) {
    let listArray = [];
    for (let i = 0; i < props.todoItemList.length; i++) {
      listArray.push(
        <TodoItemContainer>
          <Todo
            toDoItem={props.todoItemList[i].task}
            key={props.todoItemList[i].id}
            index={props.todoItemList[i].id}
            strikeThrough={props.strikeThrough}
            completed={props.completed}
          />
        </TodoItemContainer>
      );
    }
    return listArray;
  } else {
    return <EmptyList>--- list empty ---</EmptyList>;
  }
};
export default TodoList;
