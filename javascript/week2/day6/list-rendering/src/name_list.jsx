import React from "react";

function Name_list() {
  const names = ["bruce", "clark", "diana"];
  const nameList = names.map((name1) => <h2> {name1}</h2>);
  return <div>{nameList}</div>;
}

export default Name_list;
