import React, { Component,createRef } from 'react'

export default class App extends Component {
  constructor(){
    super()
    this.userRef=createRef()
    this.passRef=createRef()
  }
  handlesubmitr=()=>{
    
    let username=this.userRef.current.value
    let password=this.passRef.current.value
  }
  render() {
    return (
      <div>
         <form action="" onSubmit={this.handlesubmit}>
          <label htmlFor="username">username</label><br />
          <input type="text"  id="username"/><br />
          <label htmlFor="password">password</label><br />
          <input type="text" id="password" /><br />
          <button >submit</button>
        </form>
      </div>
    )
  }
}

