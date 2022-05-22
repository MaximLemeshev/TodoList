import React, { useState } from "react";
import "./App.css";
import AddToDo from "./components/AddToDo/AddToDo";
import Header from "./components/Header/Header";
import ToDoList from "./components/ToDoList/ToDoList";
import { Container } from "react-bootstrap";

function App() {
  const [todo, setTodo] = useState([]);
  return (
    <Container>
      <Header />
      <AddToDo todo={todo} setTodo={setTodo} />
      <ToDoList todo={todo} setTodo={setTodo} />
    </Container>
  );
}

export default App;
