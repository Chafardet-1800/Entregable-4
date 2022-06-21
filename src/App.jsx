import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import UsersForm from './componentes/UsersForm'
import UsersList from './componentes/UsersList'

function App() {

  const URL = 'https://users-crud1.herokuapp.com/users/'
  const [users, setUsers] = useState()
  const [updateObj, setUpdateObj] = useState()

  const GetAllUsers = (URL) =>{
    axios.get(URL)
        .then(res=>setUsers(res.data))
        .catch(err=>console.log(err))
  }

  useEffect (()=>GetAllUsers(URL), [])
  
  return (
    <div className="App">
    
      <UsersForm
        URL={URL}
        GetAllUsers={GetAllUsers}
        updateObj={updateObj}
      />

      <UsersList
        URL={URL}
        users={users}
        GetAllUsers={GetAllUsers}
        setUpdateObj={setUpdateObj}
      />

    </div>
  )
}

export default App
