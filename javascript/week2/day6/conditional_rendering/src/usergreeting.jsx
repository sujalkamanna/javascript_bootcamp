import PropTypes from "prop-types";
function UserGreeting(props) {
  const welcomeMessage = (
    <h2 className="welcome-message"> welcome {props.username} </h2>
  );

  const login_prompt = (
    <h2 className="login-prompt"> please login to continue </h2>
  );
  return props.isLoggedIn ? welcomeMessage : login_prompt;
}

UserGreeting.PropTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.bool,
};

UserGreeting.defaultProps = {
  isLoggedIn: false,
  username: "Guest",
};
export default UserGreeting;
