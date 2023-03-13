import React, { Component } from 'react'

export default class App extends Component {
    constructor(){
        super()
        this.state={username:"sam"}
    }
  render() {
    return (
      <h1>{this.state.username}</h1>
    )
  }
}
