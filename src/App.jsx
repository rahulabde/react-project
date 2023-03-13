import React, { Component } from 'react'

export default class App extends Component {
   state={username:"raj"}
  render() {
    return (
      <h1>{this.state.username}</h1>
    )
  }
}
