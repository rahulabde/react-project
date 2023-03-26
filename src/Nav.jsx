import React from 'react'
import {Link} from "react-router-dom"

const Nav = () => {
  return (<>
    <div style={{display:"flex" ,justifyContent:"space-between",alignItems:"center", border:"2px solid red"}}>
<div>logo</div>
<div>
  <ol style={{display:"flex" ,justifyContent:"space-between",width:"400px"}}>
  <li>
    <Link to="/">Home</Link>
  </li>
  <li>
    <Link to="/Login">Login</Link>
  </li>
  <li>
    <Link to="/Signup">Signup</Link>
  </li>
  <li>
    <Link to="/About">About</Link>
  </li>
  </ol>
</div>
    </div>
    </> )
}

export default Nav