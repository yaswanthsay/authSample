import React,{useState} from 'react'
 import axios from 'axios'
import { useForm } from 'react-hook-form'
import {Navigate} from 'react-router-dom'

function SignUp() {

  const [submitted,setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    axios.post("https://hiring-stackroots-server.herokuapp.com/auth/signup/user",
    {
      body:{
        "fullname":"",
        "email":"",
        "password":""
      },
      response:{
        "message":"",
        "isError":false,
        "data":{}
      }
    })
    setSubmitted(true)
  }

  if(submitted){
     return <Navigate to='/signin'/>
  }
  return (
    <div className="signup-form-container">
      <form className="signup--form" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="signup--title">SignUp</h1>
        <div>
          <input
            placeholder="fullname"
            type="fullname"
            name="fullname"
            className="signup--fullname"
            {...register('fullname', { required: 'Fullname is required' })}
          />
          <div>
            {errors.fullname && (
              <small className="error">{errors.fullname.message}</small>
            )}
          </div>
        </div>
        <div>
          <input
            placeholder="email"
            type="email"
            name="email"
            className="signup--email"
            {...register('email', { required: 'Email is required' })}
          />
          <div>
            {errors.email && (
              <small className="error">{errors.email.message}</small>
            )}
          </div>
        </div>
        <div>
          <input
            placeholder="password"
            type="passoword"
            name="password"
            minLength={8}
            maxLength={20}
            className="signup--password"
            {...register('password', { required: 'Password is required' ,minLength: { value: 8, message: "Too short" },maxLength:{value:20,message:"Too long"}})}
          />
          <div>
            {errors.password && (
              <small className="error">{errors.password.message}</small>
            )}
          </div>
        </div>
        <input className="signup--btn" type="submit" />
      </form>
    </div>
  )
}
export default SignUp
