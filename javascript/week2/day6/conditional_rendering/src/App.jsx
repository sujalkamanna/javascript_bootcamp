import React from "react";
import UserGreeting from "./usergreeting";

function App() {
  return (
    <div>
      <UserGreeting isLoggedIn={true} username="string 1" />
      <UserGreeting isLoggedIn={true} />
    </div>
  );
}
export default App;
