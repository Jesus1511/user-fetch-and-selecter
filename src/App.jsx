import React from 'react'
import { UserList } from './UserList.jsx'
import { SelectedUser } from './SelectedUser'
import { createContext, useState } from 'react'
import { useFetch } from './useFetch.js'

export const selectedUserContext = createContext()

export const App = () => {
  
  const [selectedUser, setSelectedUser] = useState(null)
  const {data, loading, error} = useFetch("https://reqres.in/api/users?page=2")

  return (
    <selectedUserContext.Provider value={{ selectedUser, setSelectedUser, data, loading, error }}>
      <div className='main'>
        <UserList />
        <SelectedUser />
      </div>
    </selectedUserContext.Provider>
  )
}
