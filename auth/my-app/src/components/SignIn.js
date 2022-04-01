import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import {Navigate} from 'react-router-dom'

function SignIn() {
  const [loginStatus,setLoginStatus] = useState(true)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
     const response = await axios.post('https://hiring-stackroots-server.herokuapp.com/auth/signin/user',{
     body:{
      'email':"",
      'password':""
     },
    })
    localStorage.setItem("token",response)
    window.location('/home')
  }
if(loginStatus){
  return <Navigate to='/home'/>
}
  
  return (
    <div className="signin-form-container">
      <form className="signin--form" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="signin--title">SignIn</h1>
        <br />
        <input
          placeholder="email"
          type="email"
          className="signin--email"
          name="email"
          {...register('email', { required: 'Email is required' })}
        />
        {errors.email && (
          <small className="error">{errors.email.message}</small>
        )}
        <br />
        <input
          placeholder="password"
          type="password"
          className="signin--password"
          name="password"
          {...register('password', { required: 'Password is required' })}
        />
        {errors.password && (
          <small className="error">{errors.password.message}</small>
        )}
        <br />

        <input className="signin--btn" type="submit" />
      </form>
    </div>
  )
}

export default SignIn
