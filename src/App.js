import React, { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const handleChange = ({ target }) => {
    setTodo(target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((prevState) => [...prevState, todo]);
    setTodo("");
  };
  return (
    <div className="container">
      <div className="todo-container">
        <form onSubmit={handleSubmit}>
          <input
            id="todo-input"
            type="text"
            value={todo}
            onChange={handleChange}
            placeholder="Type Here..."
          />
        </form>
        <ul>
          {todos.map((todo, index) => (
            <li className="todo-list" key={index}>
              {todo}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
