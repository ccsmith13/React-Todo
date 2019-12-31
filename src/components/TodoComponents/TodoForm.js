import React from "react";
import styled from "styled-components";

const AddButton = styled.button`
  background-color: #ffb4a2;
  border: none;
  border-radius: 5px;
  width: 15rem;
  padding: 2%;
  margin: 1% auto;
  display: block;
  font-size: 1rem;
  color: #444149;
`;
const DeleteButton = styled.button`
  background-color: #ffcdb2;
  border: none;
  border-radius: 5px;
  width: 15rem;
  padding: 2%;
  margin: 1% auto;
  display: block;
  font-size: 1rem;
  color: #444149;
`;
const ClearAllButton = styled.button`
  background-color: papayawhip;
  border: none;
  border-radius: 5px;
  width: 15rem;
  padding: 2%;
  margin: 1% auto;
  display: block;
  font-size: 1rem;
  color: #444149;
`;
const TodoInput = styled.input`
  width: 12rem;
  border: 1px solid grey;
  border-radius: 5px;
  margin: 1%;
  padding: 2%;
  font-size: 1rem;
`;

const TodoForm = props => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <TodoInput
          type="text"
          placeholder="Start Typing!"
          onChange={props.handleChange}
        />
        <AddButton type="submit">Add Item</AddButton>
      </form>
      <DeleteButton onClick={props.filterCompletedItems}>
        Clear Completed Items
      </DeleteButton>
      <ClearAllButton onClick={props.clearAll}>Clear All</ClearAllButton>
    </div>
  );
};

export default TodoForm;
