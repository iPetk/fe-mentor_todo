import React, { useState, useRef, useEffect, createContext } from 'react';
import './App.css';
import TodoList from './TodoList';
import Toggle from './Toggle';
import { v4 as uuidv4 } from 'uuid';
import { keepTheme } from './themes';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([ ]);
  const todoNameRef = useRef();

  useEffect(() => {
    keepTheme()
  })

// localStorage.clear()

  useEffect (() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos( prevTodos => [...prevTodos, ...storedTodos] );
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id){
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function deleteTodo(id){
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  }

  function handleAddTodo() {
    const name = todoNameRef.current.value
    if (name === '') return;
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4(), name: name, complete: false}]
    })
    todoNameRef.current.value = null;
  }

  function handleKeyDown(e){
    if (e.key === 'Enter') handleAddTodo();
  }

  function handleClearTodos(e){
    const newTodos = todos.filter(todo => !todo.complete);
    setTodos(newTodos);
  }

  return(
    <div className="container">
      <div className="header__image"></div>
      <div className="header">
        <h1>TODO</h1>
        <Toggle />
      </div>

      <div className="todoList todoList__input">
        <input ref={todoNameRef} type="text" placeholder="Create a new todo..." onKeyDown={handleKeyDown}/>
      </div>

      <div className="todoList">
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        <div>{todos.filter(todo => !todo.complete).length} left to do</div>
        <div>
          <p>All</p>
          <p>Active</p>
          <p>Completed</p>
        </div>
        <button onClick={handleClearTodos}>Clear Completed</button>
      </div>
      <p>Drag and drop to reorder list</p>
    </div>
  );
}

export default App;
