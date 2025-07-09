import UserGreeting from "../../conditional_rendering/src/usergreeting";

function App() {
  return (
    <div>
      <UserGreeting isLoggedIn={true} username="user one" />
    </div>
  );
}

export default App;
