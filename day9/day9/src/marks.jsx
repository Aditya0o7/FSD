import React from 'react'
import './marks.css'
const marks = ({m1,m2,m3}) => {
  return (
    <div id="sem">
      <h1>Marksheet 1</h1>
      <h2>semester 1: {m1}</h2>
      <h2>semester 2: {m2}</h2>
      <h2>semester 3: {m3}</h2>


    </div>
  )
}

export default marks
