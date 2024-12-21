import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)
  const increase = ()=>{
     setNum(num+10)
  }
  const decrease= ()=>{
      setNum(num-10)
  }
  return (
    <div>
      <h1>The value of num is ={num}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      
      </div>
  )
}

export default App