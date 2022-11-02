import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([ ]);
  const todoNameRef = useRef();
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

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return;
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4(), name: name, complete: false}]
    })
    todoNameRef.current.value = null;
  }

  function handleClearTodos(e){
    const newTodos = todos.filter(todo => !todo.complete);
    setTodos(newTodos);
  }

  return(
    <>
    <h1>TODO</h1>
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add New</button>
      <button onClick={handleClearTodos}>Clear Completed</button>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
      <div>{todos.filter(todo => !todo.complete).length} left to do</div>
      <p>Drag and drop to reorder list</p>
    </>
  );
}

export default App;
