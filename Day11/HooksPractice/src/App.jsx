import { useState } from "react";
import "./App.css";
const App = () => {
  const [count,setCount] = useState(12)
  return (
    <div className="count-app"><h1 className="count-disp">{count}</h1>
    <div className="count-body">
      <button className="count-btn" 
      onClick={() => {
        setCount(count + 1);
      }}
      >
        Increment</button>
      <button className="count-btn" 
      onClick={() => {
        if(count>0){setCount(count - 1)}
      }}
      >
        Decrement</button>
        <button className="count-btn-reset" onClick={() => {
          setCount(0);
        }}
        >
          Reset
        </button>
        
    </div>
    </div>
  );
};

export default App;