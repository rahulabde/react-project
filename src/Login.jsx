import React from 'react'
import {Link} from "react-router-dom"
import { toast,ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

const Login = () => {
  let handlesubmit=()=>{
    toast.success("Login successfull",{position:toast.POSITION.TOP_CENTER})
}

  return (
    <div>
       <ToastContainer/>
     
   <h1>Login</h1>
    <label htmlFor="username">username</label><br />
    <input type="text" id='username' /><br />
    <label htmlFor="password">password</label><br />
    <input type="text" id='password' /><br />
    <button onClick={handlesubmit}>Login</button>
    <Link to="/Login"></Link>
  
</div>
  )
}

export default Login