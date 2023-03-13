import React from 'react'
import Coursee from './Coursee';

const App = () => {
  return (
    <>
  <Coursee   courseDetails={{
    courseName:"java full stack",
    courseDuration:"3 months",
    courseAvail:true
  }}/>
    </>
  )
}

export default App