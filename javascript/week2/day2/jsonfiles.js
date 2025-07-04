const names = ["Spongebob", "patrick", "sandy"];

const jsonstring = JSON.stringify(names);
console.log(jsonstring);

const people = [
  {
    name: "Spongebob",
    age: 30,
    isEmployeed: true,
    hobbies: ["playing", "dancing"],
  },
  {
    name: "Patrick",
    age: 34,
    isEmployeed: false,
  },
  {
    name: "Sandy",
    age: 27,
    isEmployeed: "Yes",
  },
];

const people_string = JSON.stringify(people);
console.log(people_string);

const names2 = `["Spongebob", "patrick", "sandy"]`;
const parse_name2 = JSON.parse(names2); //converts string to object using JSON
console.log(parse_name2);

console.log(typeof names2);
console.log(typeof parse_name2);
