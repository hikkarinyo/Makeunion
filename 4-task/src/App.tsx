import React from 'react'

import { Route, Routes } from 'react-router-dom'

import UserDetails from './components/userDetails/UserDetails.tsx'
import UserList from './components/userList/UserList.tsx'


const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<UserList/>}/>
            <Route path="/users/:id" element={<UserDetails/>}/>
        </Routes>
    )
}

export default App
