import React ,{useState,useRef}from 'react'

import Img from "./car.jpg"
const App = () => {

  let [photo,setphoto]=useState(Img)
  let [loading,setloading]=useState(true)
  let imgRef=useRef()
  let handlechange=()=>{
    if(loading==true){
      setloading(!true)
    imgRef.current.style.borderRadius="25%"
    imgRef.current.style.border="2px"
     }else{
      setloading(!false)
      imgRef.current.style.borderRadius="0"
    imgRef.current.style.border="none"
     } }
  return (
    <div>
      <img src={Img} alt="spy" ref={imgRef } height="200px" width="200px" />
      <button onClick={handlechange}> {loading ? "on":"off"}</button>
    </div>
  )
}

export default App