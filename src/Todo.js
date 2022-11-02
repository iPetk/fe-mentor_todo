import React from 'react'

export default function Todo({ todo, toggleTodo, deleteTodo }) {

    function handleTodoClick(){
        toggleTodo(todo.id);
    }
    function handleTodoDelete(){
        deleteTodo(todo.id);
    }
  return (
    <div>
        <label>
            <input type="checkbox" checked={todo.complete} onChange={handleTodoClick}/>
            {todo.name}
        </label>
        <button onClick={handleTodoDelete}>D</button>

    </div>
  )
}
