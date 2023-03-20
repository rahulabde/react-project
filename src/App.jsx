import React ,{useRef}from 'react'

const App = () => {
  let h1Ref=useRef()
  let handlechange =()=>{
    h1Ref.current.style.color="red"
  }
  return (
    <>
    <h1 ref={h1Ref}>app component</h1>
    <button onClick={handlechange}>change</button>
    </>
  )
}

export default App