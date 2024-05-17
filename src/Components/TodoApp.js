import React, { useState } from 'react';
import './TodoApp.css';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addTodo = () => {
    if (inputValue.trim()) {
      if (editIndex !== null) {
        const updatedTodos = todos.map((todo, index) =>
          index === editIndex ? inputValue : todo
        );
        setTodos(updatedTodos);
        setEditIndex(null);
      } else {
        setTodos([...todos, inputValue]);
      }
      setInputValue('');
    }
  };

  const editTodo = (index) => {
    setInputValue(todos[index]);
    setEditIndex(index);
  };

  const deleteTodo = (index) => {
    const filteredTodos = todos.filter((_, i) => i !== index);
    setTodos(filteredTodos);
  };

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <div className="todo-input">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add a task"
        />
        <button onClick={addTodo}>{editIndex !== null ? 'Update' : 'Add'}</button>
      </div>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <div className="todo-item" key={index}>
            <span>{todo}</span>
            <button onClick={() => editTodo(index)}>Edit</button>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
