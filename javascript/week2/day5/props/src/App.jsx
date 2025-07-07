import Prop from "./data";
import Student from "./student";
import "./index.css";
import PropTypes from 'prop-types'


function App() {
  return (
    <>
      <Prop />
      <Student name="Spongeboob" age={30} isStudent={false} />
      <Student name="Patrick" age={42} isStudent={true} />
      <Student name="Tom" age={10} isStudent={true} />
      <Student />
    </>
  );
}

export default App;
