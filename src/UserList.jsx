import React, { useState, useContext } from 'react'
import { selectedUserContext } from './App';

export const UserList = () => {

    const {selectedUser, setSelectedUser, data, loading, error} = useContext(selectedUserContext)

    const [idSelec, setIdSelec] = useState("")

    function handleSelect (id){
        setIdSelec(id)
        setSelectedUser(id)
    }

  return (
    <>
        {
            loading?(
                <div className='loading'>loading</div>
            ):(
                <div className='userList'>
                    {data.data.map((dato)=>(
                        <div onClick={()=>{handleSelect(dato.id)}} className={`user ${idSelec == dato.id && "selected"}`} key={dato.id}>
                            <img src={dato.avatar} alt="" />
                            <div>
                                <h2>{dato.first_name} {dato.last_name}</h2>
                                <p>{dato.email}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )
        }
    </>
  )
}
