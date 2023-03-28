import React from 'react'
import {Link} from "react-router-dom"
// window.location.assign('Login')

const Signup = () => {



  return (
    <>
    <div>
    <form action="http://localhost:3000/Login">
      <h1>Signup</h1>
        <label htmlFor="username">username</label><br />
        <input type="text" id='username' /><br />
        <label htmlFor="password">password</label><br />
        <input type="text" id='password' /><br />
        <button >Submit</button>
        <Link to="/"></Link>
        </form>
    </div>
   
    </>
  )
}

export default Signup