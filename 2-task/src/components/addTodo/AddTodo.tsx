import React, { useState } from 'react'

import classNames from 'classnames'
import { AiOutlinePlus } from 'react-icons/ai'

import './addTodo.scss'


interface AddTodoProps {
    addTodo: (text: string) => void
}


const AddTodo = ({ addTodo }: AddTodoProps) => {
    const [text, setText] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (text.trim()) {
            addTodo(text)
            setText('')
            setError('')
        } else {
            setError('Field is required')
        }
    }

    return (
        <form className="add-todo" onSubmit={handleSubmit}>
            <input
                type="text"
                className={classNames('add-todo__input', { 'add-todo__input--error': error })}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add your new todo"
            />
            <button type="submit" className="add-todo__button">
                <AiOutlinePlus />
            </button>
            {error && <div className="add-todo__error">{error}</div>}
        </form>
    )
}

export default AddTodo
