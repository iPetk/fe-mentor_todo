import React from 'react'

export default function Todo({ todo, toggleTodo, deleteTodo }) {

    function handleTodoClick(){
        toggleTodo(todo.id);
    }
    function handleTodoDelete(){
        deleteTodo(todo.id);
    }
  return (
    <div className="todoList__todo">
        <label>
            <input type="checkbox" checked={todo.complete} onChange={handleTodoClick}/>
            {todo.name}
        </label>
        <div className="todoList__delete" onClick={handleTodoDelete}></div>

    </div>
  )
}
