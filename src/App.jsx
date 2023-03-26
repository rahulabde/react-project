import React from 'react'
import { BrowserRouter as Router,Routes,Route } from  "react-router-dom"
import Nav from "./Nav"
import Home from "./Home"
import Login from "./Login"
import Signup from "./Signup"
import About from "./About"
import Pagenotfound from "./Pagenotfound"


const App = () => {
  return (<>
    <Nav/>
    <Router>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='*' element={<Pagenotfound/>}/>
  <Route path='/Login' element={<Login/>}/>
  <Route path='/About' element={<About/>}/>
  <Route path='/Signup' element={<Signup/>}/>

</Routes>
    </Router>
   </>  )

}

export default App