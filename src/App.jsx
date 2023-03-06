import React from 'react'
import Nav from './Nav'
import "./global.css"
import STYLE from"./app.module.css"
import T from"./flipkart.module.css"

const App = () => {
  return (
    <> <Nav/>
    <h1 id={STYLE.appblock}> app component</h1>
    <nav id={T.navv}>
      <div id={T.fliplogo}>
      <img src="https://1000logos.net/wp-content/uploads/2021/02/Flipkart-Logo-2007.png" alt="" height="100px" width="300px"/>
      </div>
      <ul>
      <li><a href="#">men</a></li>
            <li><a href="#">women</a></li>
            <li><a href="#">baby</a></li>
            <li><a href="#">electronics</a></li>
            <li><a href="#">home</a></li>
            <li><a href="#">sports</a></li>
            <li><a href="#">offer zone</a></li>
      </ul>
      <div id={T.search}>
<input type="text" placeholder="search for products"/>
<button>search</button>
        </div>
      
        
        </nav>
    
     </>

  )
}

export default App