import React,{useState,useEffect} from 'react'

const App = () => {
    let[count,setcount]=useState(0)
    useEffect(()=>{
        document.title=`you clicked${count}times`} ,[count]
    )
       

  return (
    <>
    <h1>{count}</h1>
    <button onClick={()=>{setcount(count+1)}}>increment</button>
    </>
  )
}

export default App