import axios from 'axios'
import React from 'react'

const UserCard = ({user, GetAllUsers, setUpdateObj}) => {
    const DeleteUser = ()=>{
        axios.delete(`https://users-crud1.herokuapp.com/users/${user.id}`)
            .then((res)=>(GetAllUsers('https://users-crud1.herokuapp.com/users/')))
            .catch(err=>console.log(err))
    }
    const Update = () =>{
        setUpdateObj(user)
    }

  return (
    <div className='UserContainer Flexrow'>
        <div className='InfoContainer'>
            <p className="Title">{`${user.first_name} ${user.last_name}`}</p>
            <p className="text">{user.email}</p>
            <p className="sub-Title"><i className="fa-solid fa-calendar-day"></i>{user.birthday}</p>
        </div>

        <div className='ButtpnContainer'>
            <button className='button2' onClick={DeleteUser}><i className="fa-solid fa-trash"></i></button>
            <button className='button2' onClick={Update} type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop"><i className="fa-solid fa-user-pen"></i></button>
            
        </div>
    </div>
  )
}

export default UserCard