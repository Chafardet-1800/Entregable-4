import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useForm } from 'react-hook-form'

const UsersForm = ({URL, GetAllUsers, updateObj}) => {

  const {register, handleSubmit, reset} = useForm();

  const DefaultValue = {
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    birthday: ""
  }

  useEffect(()=>{
    if(updateObj?.id){
      const object = {
        email: updateObj.email,
        password: updateObj.password,
        first_name: updateObj.first_name,
        last_name: updateObj.last_name,
        birthday: updateObj.birthday
      }
      reset(object)
    }
  }, [updateObj])

  const PostUser = (obj)=>{
    axios.post(URL, obj)
      .then(()=>GetAllUsers())
      .catch(err=>console.log(obj, err))
  }

  const PutUser = (id, obj)=>{
    axios.put(`https://users-crud1.herokuapp.com/users/${id}/`, obj)
        .then(()=>(GetAllUsers(URL)))
        .catch(err=>console.log(err))
}

  const submit = (obj) =>{

    if(updateObj){
      PutUser(updateObj.id, obj)
    }else{
      PostUser(obj)
      reset(DefaultValue)
    }
  }

  const cleanForm = () => {
    reset(DefaultValue)
  }

  return (
    <header className='FormContainer'>

      <div className='NavContainer'>
      <img src="https://www.academlo.com/logo_academlo.png" alt="Logo de academlo" />
      </div>
      
      <div className='NavContainer'>
      <button className="button" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop"><i className="fa-solid fa-user-plus"></i></button>
      </div>

      <div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabIndex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
        <div className="offcanvas-header">

          <div className='header-offcanvas-Container'>
            <h5 className="offcanvas-title" id="staticBackdropLabel">Form</h5>
          </div>

          <div className='header-offcanvas-Container'>
            <button onClick={cleanForm} type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>

        </div>

        <div className="offcanvas-body">
                      <form className='Form' onSubmit={handleSubmit(submit)}>
                        
                        <label htmlFor="name"><b>User's name</b></label>
                        <input placeholder='First name' type="text" aria-label="First name" className="form-control" id='first_name' {...register('first_name')}/>
                        <input placeholder='Last name' type="text" aria-label="Last name" className="form-control" id='last_name' {...register('last_name')}/>
                        
                        <label className='columns2' htmlFor="email"><b>Email</b></label>
                        <input className='columns2'  placeholder={`User's Email`} type="email" id='email' {...register('email')}/>
          
                        <label className='columns2' htmlFor="password"><b>Password</b></label>
                        <input className='columns2'  placeholder={`User's Password`} type="password" id='password' {...register('password')}/>
                        
                        <label className='columns1' htmlFor="birthday"><b>Birthday</b></label>
                        <input placeholder={`User's Birthday`} type="date" id='birthday' {...register('birthday')}/>
                              
                        <button  className='button3'>Submit</button>
                          
                    </form>
        </div>
      </div>

    </header>
  )
}

export default UsersForm
          
            