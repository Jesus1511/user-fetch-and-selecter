import React from 'react'
import { useContext } from 'react';
import { selectedUserContext } from './App';

export const SelectedUser = () => {

  const {selectedUser, setSelectedUser, data, loading, error} = useContext(selectedUserContext)

  console.log(data)
  return (
    <div className='selectedUser'>
      {selectedUser?(
        <div>
        {data.data.map((dato)=>{
          return dato.id === selectedUser && (

            <div className='selectedUserContent'>
              <img src={dato.avatar} alt="" />
              <h1>{dato.first_name} {dato.last_name}</h1>
              <p>{dato.email}</p>
            </div>

          )
        })}
        </div>):
      (<h1>Selected User</h1>)}
    </div>
  )
}
