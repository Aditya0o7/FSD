import React,{useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
const Register = () => {
    const[name,setName]=useState();
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    const data={name,email,password};
  return (
    <div>
        {name}{email}{password}
        <form>
        <div class="form-group">
    <label for="name">Name:</label>
    <input type="text" class="form-control" id="name" onChange={(e)=>{setName(e.target.value)}} />
  </div>
  <div class="form-group">
    <label for="email">Email address:</label>
    <input type="email" class="form-control" id="email" onChange={(e)=>{setEmail(e.target.value)}} />
  </div>
  <div class="form-group">
    <label for="pwd">Password:</label>
    <input type="password" class="form-control" id="pwd" onChange={(e)=>{setPassword(e.target.value)}} />
  </div>
  <br />
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  );
};

export default Register;