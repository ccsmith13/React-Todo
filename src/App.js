import React, { Component } from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./components/TodoComponents/Todo.css";
import styled from "styled-components";
import Search from "./components/TodoComponents/Search";

const AppContainer = styled.div`
  text-align: center;
  margin: 4% auto;
  width: 50%;
  display: block;
  font-family: "Work Sans", sans-serif;
`;
const Header = styled.div`
  background-color: #6d6875;
  border-radius: 5px;
  font-size: 1.75rem;
  color: #f7fff7;
  padding: 1%;
  font-family: "Bungee Shade", cursive;
`;

class App extends Component {
  //constuctor, setting state
  constructor(props) {
    super(props);
    this.state = {
      todoItemList: [],
      todoItemEntry: "",
      completed: false,
      searchText: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //event handler functions
  handleChange = event => {
    this.setState({
      todoItemEntry: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let newTodoItemPush = [];
    if (JSON.parse(window.localStorage.getItem("todoList")) !== null) {
      newTodoItemPush = JSON.parse(window.localStorage.getItem("todoList"));
    }
    newTodoItemPush.push({
      task: this.state.todoItemEntry,
      id: Date.now(),
      completed: this.state.completed
    });
    this.setState({
      todoItemList: newTodoItemPush
    });
    window.localStorage.setItem("todoList", JSON.stringify(newTodoItemPush));
    event.target.reset();
  };

  changeCompleted = (item, index) => {
    if (item.id !== index) {
      return item;
    } else {
      item.completed = !item.completed;
      return item;
    }
  };
  strikeThrough = (event, index) => {
    let itemList = [];
    if (JSON.parse(window.localStorage.getItem("todoList")) !== null) {
      itemList = JSON.parse(window.localStorage.getItem("todoList"));
    }
    const element = event.target;
    element.classList.toggle("strike-through");
    const filteredItemList = itemList.map(item =>
      this.changeCompleted(item, index)
    );
    window.localStorage.setItem("todoList", JSON.stringify(filteredItemList));
  };

  filterCompletedItems = () => {
    let itemList = [];
    if (JSON.parse(window.localStorage.getItem("todoList")) !== null) {
      itemList = JSON.parse(window.localStorage.getItem("todoList"));
    }
    let filteredCompletedList = itemList.filter(obj => obj.completed === false);
    window.localStorage.setItem(
      "todoList",
      JSON.stringify(filteredCompletedList)
    );
    //page will not automatically reload here unless you start typing in the box or change the state, as below:
    this.setState({ todoItemList: filteredCompletedList });
  };

  clearAll = () => {
    window.localStorage.clear();
    this.setState({ todoItemList: [] });
  };

  handleSearch = event => {
    this.setState({ searchText: event.target.value });
  };

  render() {
    let todoItemList = JSON.parse(window.localStorage.getItem("todoList"));
    if (todoItemList === null) {
      todoItemList = [];
    }
    //console.log(this.state.searchText);
    if (this.state.searchText !== "") {
      todoItemList = todoItemList.filter(obj =>
        obj.task.includes(this.state.searchText)
      );
    }
    return (
      <AppContainer>
        <Search
          handleSearch={this.handleSearch}
          searchText={this.state.searchText}
        />
        <Header>
          <h2>To Do List</h2>
        </Header>
        <TodoList
          todoItemList={todoItemList}
          strikeThrough={this.strikeThrough}
          completed={this.state.completed}
        />
        <TodoForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          filterCompletedItems={this.filterCompletedItems}
          clearAll={this.clearAll}
        />
      </AppContainer>
    );
  }
}

export default App;
