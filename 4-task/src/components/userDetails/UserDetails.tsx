import React, { useEffect, useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom'

import Spinner from '../spinner/Spinner.tsx'

import './userDetails.scss'

interface User {
    id: number
    name: string
    email: string
    phone: string
    website: string
}


const UserDetails = () => {
    const { id } = useParams<{ id: string }>()
    const [user, setUser] = useState<User | null>(null)
    const navigate = useNavigate()

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
                const data = await response.json()
                setUser(data)
            } catch (error) {
                console.error('Error fetching user:', error)
            }
        }

        fetchUser()
    }, [id])


    if (!user) {
        return <Spinner/>
    }

    return (
        <div className="user-details__container">
            <div className="user-details__header">
                <h1 className="user-details__title">{user.name}</h1>
                <button className="user-details__back-button" onClick={() => navigate(-1)}>Back</button>
            </div>
            <div className="user-details__details">
                <p className="user-details__details-item">Email: {user.email}</p>
                <p className="user-details__details-item">Phone: {user.phone}</p>
                <p className="user-details__details-item">Website: {user.website}</p>
            </div>
        </div>
    )
}

export default UserDetails
