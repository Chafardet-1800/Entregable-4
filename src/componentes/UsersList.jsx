import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'
import axios from "axios"

const UsersList = ({users, GetAllUsers, setUpdateObj}) => {

  return (
    <main className='CardContainer Flexrow'>

        {users?.map( user => (
          <UserCard
            key={user.id}
            user = {user}
            GetAllUsers={GetAllUsers}
            setUpdateObj={setUpdateObj}
            URL={URL}
          />
        ))}

      </main>
  )
}

export default UsersList