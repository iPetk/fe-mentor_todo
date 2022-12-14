import React from 'react'
import Todo from './Todo'
import './todoList.css';

export default function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    todos.map(todo => {
      return <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    })
  )
}
