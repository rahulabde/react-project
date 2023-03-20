import { useRef } from "react"
import React, { Component ,createRef} from 'react'

export default class App extends Component {
  constructor()
  {
    super()
    this.state={company:"Q spiders"}
    this.spanRef=createRef()
    this.btnRef=createRef()
  }
  render() {
    return (
      <> <h1>
      <span ref={this.spanRef}>{this.state.company}</span> <br />
      <button  ref={this.btnRef} onClick={()=>{
        this.setState({company:"J spiders"})
        this.spanRef.current.style.color="orange"
        this.spanRef.current.style.border="2px"
        this.spanRef.current.style.padding="2px"
        this.spanRef.current.style.margin="2px"
        this.btnRef.current.style.color="red"
        this.btnRef.current.style.backgroundcoler="black"
        this.btnRef.current.style.borderRadius="25%"
      }}> change company</button>
      </h1>
      </>
    )
  }
}
