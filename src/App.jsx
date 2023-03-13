import React, { Component } from 'react'

export default class App extends Component {
   state={Subject:"React Js",
Skills:["html","css","JS"]}
  render() {
    return (<>
      <h1>{this.state.Subject}</h1>
      <ul >
        {this.state.Skills.map((x)=>{
            return <li>{x}</li>
        }
         )}
      </ul>
      </>
    )
  }
}
