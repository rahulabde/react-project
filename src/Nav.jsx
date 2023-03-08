import React from 'react'

const Nav = (props) => {
  return (
    <>
    <h1 style={{color:"red"}}>{props.data}</h1>
    <h2>{props.data2}</h2>
    <h1>{props.data3}</h1>
    <h1>{props.number}</h1>
    <h1>{props.boolean}</h1>
    <h1>{props.object.username}</h1>
    <h1>{props.object.password}</h1>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCKJKxdBpJqkih7GNX-k1UOMSjcOrOel0DoQ&usqp=CAU" alt="" />
    
    </>
  )
}

export default Nav