import { useState } from "react";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);
  // const [name, setName] = useState("harry");
  const [form, setForm] = useState({ email: "", phone: "" });
  const handleClick = () => {
    alert("hey I'm clicked");
  };

  const handleMouseOver = () => {
    alert("I'm a mouse hover");
  };
  const handleChange = (e) => { //e = event
    // setName(e.target.value);
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="button">
        <button onClick={handleClick}> ClickMe</button>
      </div>

      <div className="red">
        <p>I'm a red div</p>
      </div>
      <input
        type="text"
        name="email"
        value={form.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        value={form.phone}
        onChange={handleChange}
      />
    </>
  );
}

export default App;
