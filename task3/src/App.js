import React, { useState, useEffect } from 'react'
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    document.title = `you clicked ${count} times`;
  },[count]);
  return (
    <div className="App">
    you clicked {count} time<br />
    <button onClick={()=>setCount(count+1)}>click me</button>
    </div>
  );
}

export default App;
