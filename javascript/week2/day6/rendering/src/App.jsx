import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setcount] = useState(0);
  const [showbtn, setshowBtn] = useState(true);

  return (
    <div>
      {/* {showbtn?<button> I will be shown only when second button is clicked</button>:"nothing"} */}
      {showbtn && (
        <button onClick={() => setshowBtn(!showbtn)}>
          I will be shown only when second button is clicked
        </button>
      )}
    </div>
  );
}

export default App;
