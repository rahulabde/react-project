import React from 'react'

import json from "./userdata.json"
import Course from './Course';
import "./global.css"
const App = () => {
  return (
    <>
  <Course payload={json}/>
    </>
  )
}

export default App