import React,{useState,useEffect} from 'react'

const App = () => {
    let[width,setwidth]=useState(window.innerWidth)
    useEffect(()=>{
        window.addEventListener("resize",()=>{
setwidth(window.innerWidth)
        })
    })
  return (
    <div>{width}</div>
  )
}

export default App