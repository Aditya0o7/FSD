import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Marks from './marks.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App name={"Abhinav"} rollno={220031540007} mobileno={9999999999}/>
    <Marks m1={100} m2={100} m3={100}/>
    <App name={"Adi"} rollno={220031540012} mobileno={9999999999}/>
    <Marks m1={100} m2={100} m3={100}/>
    <App name={"Auggy"} rollno={220031540049} mobileno={9999999999}/>
    <Marks m1={100} m2={100} m3={100}/>
  </StrictMode>,
)
