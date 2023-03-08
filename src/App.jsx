import React from 'react'


import Nav from './Nav';
const App = () => {
  return (
    <>
  
    <Nav  data="hello" data2="hi"
    number={123} boolean={true} data3={null}
     object={{username:"raj", password:"1234"}}
      />
    </>
  )
}

export default App