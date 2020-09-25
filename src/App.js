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
    setTodos((prevState) => [
      ...prevState,
      { id: prevState.length, content: todo },
    ]);
    setTodo("");
  };
  const handleClick = ({ target }) => {
    if (target.className === "todo-list") {
      setTodos((prevState) => {
        return prevState.filter(({ id }) => {
          console.log(id, target.dataset.id);
          return id != target.dataset.id;
        });
      });
    }
  };

  const mapTodos = () => {
    console.log();
    return todos.length > 0 ? (
      todos.map((todo) => (
        <li data-id={todo.id} className="todo-list" key={todo.id}>
          {todo.content}
        </li>
      ))
    ) : (
      <li className="todo-list">
        Nothing here
        <span role="img" aria-label="frog emoji">
          🐸
        </span>
      </li>
    );
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
        <ul onClick={handleClick}>{mapTodos()}</ul>
      </div>
    </div>
  );
}

export default App;
