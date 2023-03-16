import React from 'react'
import "./global1.css"

const App=()=>{
  let[count,setcount]=React.useState(0)
  let handleincrement=()=>{
    setcount(count+1)
  }
  let handledecrement=()=>{
    setcount(count-1)
  }
  let handlereset=()=>{
    setcount(0)
  }
  return(
    <> <div className='main'>
   <center> <h1>{count}</h1></center>
   </div>
   <div className='buttons'>
    <button className='btn1' onClick={handleincrement}>increment</button>
    <button className='btn2' onClick={ handledecrement}>decrement</button>
    <button  className='btn3' onClick={handlereset}>reset</button>
    </div>
    </>
  )

}
export default App