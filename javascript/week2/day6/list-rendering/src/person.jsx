import React from "react";
import PropTypes from "prop-types";

function Person({ person }) {
  if (!person || !person.name || person.age === undefined) {
    return <h2>Invalid person data</h2>;
  }

  return (
    <div>
      <h2>
        I'm {person.name} and I'm {person.age} years old
      </h2>
    </div>
  );
}

Person.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  }),
};

export default Person;
