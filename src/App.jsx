import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Signup from "./Signup"
import Login from "./Login"

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/Login' element={<Login/>}/>
        
      </Routes>
    </Router>
    </>
  )
}

export default App