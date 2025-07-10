import { func } from "prop-types";
import React, { use, useEffect, useState } from "react";

function Mycomponents() {
  const [count, setcount] = useState(0);
  const [colour, setColour] = useState("green");

  useEffect(() => {
    document.title = `count: ${count} ${colour}`;
  }, [count,colour]);

  function addCount() {
    setcount((c) => c + 1);
  }
  function substract() {
    setcount((c) => c - 1);
  }
  function Colour(){
    setColour(c=>c==="green" ? "red": "green")
  }
  return (
    <div>
      <p style={{color: colour}}>Count:{count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={substract}>Substract</button> <br />
      <button onClick={Colour}> change colour</button>
    </div>
  );
}

export default Mycomponents;
