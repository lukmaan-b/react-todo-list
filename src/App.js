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
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" value={todo} onChange={handleChange} />
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;
