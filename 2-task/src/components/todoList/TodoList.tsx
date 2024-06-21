import React from 'react'

import TodoItem from '../todoItem/TodoItem.tsx'

import './todoList.scss'
import { Todo } from '../../types.ts'


interface TodoListProps {
    todos: Todo[]
    toggleTodo: (id: number) => void
    deleteTodo: (id: number) => void
}


const TodoList = ({ todos, toggleTodo, deleteTodo }: TodoListProps) => {

    return (
        <ul className="todo-list">
            {todos.map((todo, index) => (
                <div key={index}>
                    <TodoItem todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
                </div>
            ))}
        </ul>
    )
}

export default TodoList
