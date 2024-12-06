import React from 'react'
import './App.css'
import Marks from './marks'
const App = ({name,rollno,mobileno}) => {
  return (
      <>
      <div id="disp">
        <h1>student detail</h1>
        <h2>name:{name}</h2>
        <h2>{rollno}</h2>
        <h2>mobile number:{mobileno}</h2>
      </div>
      
      </>
      
    
  )
}

export default App
