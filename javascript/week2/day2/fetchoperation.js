// people-reader.js (Node.js version)
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "people.json");

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  try {
    const json = JSON.parse(data);
    console.log(json);
  } catch (parseErr) {
    console.error("Error parsing JSON:", parseErr);
  }
});
console.log("-------------------")

const people = require('./people.json');

console.log(people);
