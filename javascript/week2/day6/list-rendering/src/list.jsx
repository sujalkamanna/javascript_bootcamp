import React from "react";

function List() {
  const fruits = [
    { id: 1, name: "apple", calories: 10 },
    { id: 2, name: "carrot", calories: 45 },
    { id: 3, name: "coconut", calories: 39 },
    { id: 4, name: "banana", calories: 30 },
  ];

  // fruits.sort((a, b) => a.name.localeCompare(b.name)); //aplhabetically
  // fruits.sort((a, b) => b.name.localeCompare(a.name)); //reverse aplhabetically
  // fruits.sort((a, b) => a.calories-b.calories); //by calories
  fruits.sort((a, b) => b.calories - a.calories); //by calories

  const listItems = fruits.map((fruit, index) => (
    <li key={fruit.id}>
      {fruit.name} - <b>{fruit.calories} </b>calories
    </li>
  ));

  return <ol>{listItems}</ol>;
}

export default List;
