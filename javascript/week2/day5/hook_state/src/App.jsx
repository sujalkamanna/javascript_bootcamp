import { useState,useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert("hello")
  }, [])

  useEffect(() => {
    alert("count was changed")
  }, [count])
  
  return (
    <div>
      <p>the count is {count}</p>
      <button onClick={() => setCount(count + 1)}>Update count</button>
    </div>
  );
}

export default App;
