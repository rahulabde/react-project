import React, { Component } from 'react'
import Json from "./user.json"
import Users from "./Users.jsx"

export default class App extends Component {
  constructor(){
    super()
    this.state={json:Json}
  }
  render() {
    return (
      <div>
        <Users data={this.state.json}/>
      </div>
    )
  }
}
