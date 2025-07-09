import React from "react";

function List() {
  const fruits = [
    { name: "apple", calories: 10 },
    { name: "banana", calories: 45 },
    { name: "coconut", calories: 30 },
    { name: "pineapple", calories: 30 },
  ];

  const listItems = fruits.map((fruit, index) => (
    <li key={index}>
      {fruit.name} - {fruit.calories} calories
    </li>
  ));

  return <ol>{listItems}</ol>;
}

export default List;
