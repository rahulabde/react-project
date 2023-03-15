import React, { Component } from 'react'
import  style from "./app.module.css"

export default class App extends Component {
    constructor(){
        super()
        this.state={count:0}
    }
    handleIncrement=()=>{
        this.setState({count:this.state.count+1})
    }
    handleDecrement=()=>{
        this.setState({count:this.state.count-1})
    }
    handleReset=()=>{
        this.setState({count:0})
    }
  render() {
    return (<> <center>
      <div className={style.main}>{this.state.count} </div>
      <div className={style.btn}>
        <button className={style.btn1} onClick={this.handleIncrement}>+ Increment</button>
        <button className={style.btn2}onClick={this.handleDecrement}>- Decrement</button>
        <button className={style.btn3}onClick={this.handleReset}>RESET</button>
      </div>
      
      </center>
      </>
    )
  }
}
