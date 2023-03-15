
import React, { Component } from 'react'

export default class App extends Component {
  
    constructor()
    {
        super()
        this.state={
            username:"sam",
            count:0
        }
    }
    
    handleChange= ()=>{
        this.setState({
            username:"suje"
            
        })
        console.log(this);
    }
    handleNumberChange=()=>{
        this.setState({
            count:1
        })
    }
    render() {
    return (
      <div>
        <h1 > {this.state.username}</h1>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleChange}>click to change</button>
        <button onClick={this.handleNumberChange}>change the number</button>
      </div>
    )
    }
}
