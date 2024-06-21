import React from 'react'

import { AiFillDelete } from 'react-icons/ai'

import './todoItem.scss'
import { Todo } from '../../types.ts'


interface TodoItemProps {
    todo: Todo,
    toggleTodo: (id: number) => void,
    deleteTodo: (id: number) => void,
}


const TodoItem = ({ todo, toggleTodo, deleteTodo }: TodoItemProps) => {
    return (
        <li className="todo-item">
      <span
          className={`todo-item__text ${todo.completed ? 'todo-item__text--completed' : ''}`}
          onClick={() => toggleTodo(todo.id)}
      >
        {todo.text}
      </span>
            <button className="todo-item__delete" onClick={() => deleteTodo(todo.id)}>
                <AiFillDelete/>
            </button>
        </li>
    )
}

export default TodoItem
