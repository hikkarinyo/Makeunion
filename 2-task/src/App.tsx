import React, { useState } from 'react'

import { Todo } from './types'

import AddTodo from './components/addTodo/AddTodo.tsx'
import TodoList from './components/todoList/TodoList.tsx'

import './styles/app.scss'


const App = () => {
    const [todos, setTodos] = useState<Todo[]>([])

    const addTodo = (text: string) => {
        const newTodo: Todo = {
            id: Date.now(),
            text,
            completed: false,
        }
        setTodos([...todos, newTodo])
    }

    const toggleTodo = (id: number) => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? {...todo, completed: !todo.completed} : todo
            )
        )
    }

    const deleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const clearAll = () => {
        setTodos([])
    }

    return (
        <div className="app">
            <div className="app__container">
                <h1 className="app__title">Todo App</h1>
                <AddTodo addTodo={addTodo}/>
                <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
                {todos.length > 0 && (
                    <div className="app__footer">
                        <p className="app__taskCount">You have {todos.length} pending tasks</p>
                        <button className="app__clearButton" onClick={clearAll}>Clear All</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default App
