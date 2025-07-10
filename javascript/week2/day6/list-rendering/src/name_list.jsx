import React from "react";
import Person from "./person"; // Ensure case matches filename on case-sensitive systems

function NameList() {
  const people = [
    {
      name: "Alice",
      id: 101,
      age: 25,
      skill: "Python",
    },
    {
      name: "Bob",
      id: 102,
      age: 28,
      skill: "JavaScript",
    },
    {
      name: "Charlie",
      id: 103,
      age: 22,
      skill: "React",
    },
  ];

  const personList = people.map((person) => (
    <Person key={person.id} person={person} />
  ));

  return <div>{personList}</div>;
}

export default NameList;
