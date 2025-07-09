function UserGreeting(props) {
  if (props.isLoggedIn) {
    return <h1>Welcome {props.username}</h1>;
  }
  return <h2>please login </h2>
}
export default UserGreeting;
