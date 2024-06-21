import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import './userList.scss'
import { fetchUsers } from '../../api.ts'

interface User {
    id: number
    name: string
    email: string
}

const UserList = () => {
    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        const getUsers = async () => {
            try {
                const usersData = await fetchUsers()
                setUsers(usersData)
            } catch (error) {
                console.error('Error setting users:', error)
            }
        }

        getUsers()
    }, [])

    return (
        <div className="user-list__container">
            <div className="user-list__header">
                <h1 className="user-list__title">Contacts</h1>
            </div>
            <ul className="user-list__list">
                {users.map(user => (
                    <li key={user.id} className="user-list__item">
                        <Link className="user-list__item-link" to={`/users/${user.id}`}>
                            <img className="user-list__item-image" src={`https://i.pravatar.cc/150?img=${user.id}`}
                                 alt={user.name}/>
                            <div>
                                <div className="user-list__item-name">{user.name}</div>
                                <div className="user-list__item-status">In a world far away</div>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UserList
