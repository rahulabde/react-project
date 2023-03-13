import React from 'react'

const Coursee = (props) => {
    if(props.courseDetails.courseAvail ==true){
  return (<>
  <h1>{props.courseDetails.courseName}</h1>
  <h2>{props.courseDetails.courseDuration}</h2>
  <button style={{color:"green"}}>Available</button>
  </>
    
  )}
  else{
    return (
    <>
        <h1>{props.courseDetails.courseName}</h1>
        <h2>{props.courseDetails.courseDuration}</h2>
        <button style={{color:"red"}}>Not Available</button>
        </>)
  }
}

export default Coursee